import io
import os.path
import zipfile

import requests
import shutil
import threading
from os import listdir, getenv
from typing import Any, Optional, List, Dict, Union, Type, TypeVar
import platform
import ctypes
from os.path import join, abspath, dirname, isdir, basename

import betterproto
from betterproto.lib.google.protobuf import Struct, Value, ListValue

T_response = TypeVar('T_response', bound=betterproto.Message)


class DidError(Exception):
    def __init__(self, code, message):
        self.code = code
        self.message = message

    def __repr__(self):
        return f"code={self.code} message={self.message}"


class ByteBuffer(ctypes.Structure):
    """Buffer allocated by the native library"""
    _fields_ = [
        ("len", ctypes.c_int64),
        ("data", ctypes.POINTER(ctypes.c_uint8))
    ]

    @property
    def raw(self) -> ctypes.Array:
        ret = (ctypes.c_ubyte * self.len).from_address(self.data)
        setattr(ret, "_ref_", self)  # ensure the buffer isn't dropped
        return ret

    def __bytes__(self) -> bytes:
        return ctypes.string_at(self.data, self.len)

    def __repr__(self) -> str:
        return repr(bytes(self))

    def free(self):
        func = wrap_native_function("okapi_bytebuffer_free", arg_types=[ByteBuffer])
        func(self)

    @staticmethod
    def create_from(obj: bytes) -> 'ByteBuffer':
        request_buffer = ByteBuffer()
        request_buffer.len = len(obj)
        request_buffer.data = (ctypes.c_ubyte * request_buffer.len).from_buffer_copy(obj)
        return request_buffer


class ExternError(ctypes.Structure):
    _fields_ = [
        ("code", ctypes.c_int32),
        ("message", ctypes.c_char_p)
    ]

    def __repr__(self):
        return f"code={self.code} message={self.message.decode('utf-8') if self.code != 0 else ''}"

    def free(self):
        func = wrap_native_function("okapi_string_free", arg_types=[ctypes.c_char_p])
        func(self.message)

    def raise_error_if_needed(self):
        if self.code != 0:
            string_copy = self.message.decode("utf-8")
            # self.free()
            raise DidError(self.code, string_copy)


def value_to_proto_value(obj: Any) -> Value:
    value = Value()
    if isinstance(obj, str):
        value = Value(string_value=str(obj))
    elif isinstance(obj, int) or isinstance(obj, float):
        value = Value(number_value=float(obj))
    elif isinstance(obj, bool):
        value = Value(bool_value=obj)
    elif isinstance(obj, dict):
        value = Value(struct_value=dictionary_to_struct(obj))
    elif isinstance(obj, list):
        value = Value(list_value=list_to_proto_list(obj))

    return value


def proto_value_to_value(obj: Value) -> Union[str, float, bool, dict, list]:
    if obj.string_value:
        return str(obj.string_value)
    elif obj.bool_value:
        return bool(obj.bool_value)
    elif obj.number_value:
        return float(obj.number_value)
    elif obj.list_value:
        return [proto_value_to_value(x) for x in obj.list_value.values]
    elif obj.struct_value:
        return struct_to_dictionary(obj.struct_value)


def list_to_proto_list(obj: List) -> ListValue:
    return ListValue(values=[value_to_proto_value(item) for item in obj])


def dictionary_to_struct(obj: Dict[str, Any]) -> Struct:
    return Struct(fields=dict([(k, value_to_proto_value(v)) for k, v in obj.items()]))


def struct_to_dictionary(obj: Struct) -> Dict[str, Any]:
    return dict([(k, proto_value_to_value(v)) for k, v in obj.fields.items()])


library_name = {'Windows': 'okapi.dll',
                'Darwin': 'libokapi.dylib',
                'Linux': 'libokapi.so'}
OKAPI_DLL: Dict[str, Union[str, ctypes.CDLL]] = {'library_path': '',
                                                 'library': None}
okapi_loader_lock = threading.Lock()


def set_library_path(path: str):
    global OKAPI_DLL
    with okapi_loader_lock:
        OKAPI_DLL['library_path'] = path


def load_library() -> ctypes.CDLL:
    global OKAPI_DLL
    # Python multithreading is super primitive due to the GIL. All we need to do is prevent double copying.
    # https://opensource.com/article/17/4/grok-gil
    with okapi_loader_lock:
        if OKAPI_DLL['library'] is None:
            lib_path = OKAPI_DLL['library_path'] or join(dirname(abspath(__file__)), 'libs')
            sys = platform.system()
            try:
                OKAPI_DLL['library'] = ctypes.CDLL(abspath(join(lib_path, library_name[sys])))
            except KeyError:
                raise NotImplementedError(f"Unsupported operating system {sys}: {platform.platform()}")
    return OKAPI_DLL['library']


def download_binaries(force_download=True):
    """
    Download the latest released binaries from github. Provide the environment variable API_GITHUB_TOKEN to prevent rate throttling
    """
    extract_dir = abspath(join(dirname(abspath(__file__)), 'libs'))
    # Remove the binaries for other environments.
    copy_from = get_os_arch_binary(extract_dir)

    if not force_download and os.path.exists(abspath(join(extract_dir, basename(copy_from)))):
        return
    github_token = getenv('API_GITHUB_TOKEN')
    if github_token:
        github_token = f'Token {github_token}'
    latest_release = requests.get('https://api.github.com/repos/trinsic-id/okapi/releases/latest',
                                  headers={'Authorization': github_token}).json()
    try:
        latest_assets = requests.get(latest_release['assets_url'], headers={'Authorization': github_token}).json()
        libs_asset = [asset for asset in latest_assets if asset['name'] == 'libs.zip'][0]
        # Download zip
        zip_download = requests.get(libs_asset['browser_download_url'], headers={'Authorization': github_token}, stream=True)
        z = zipfile.ZipFile(io.BytesIO(zip_download.content))
        z.extractall(extract_dir)
        shutil.copy2(copy_from, extract_dir)
        cleanup_zip_download(extract_dir)
    except:
        raise


def cleanup_zip_download(copy_to):
    # Delete folders
    for folder_name in listdir(copy_to):
        full_path = join(copy_to, folder_name)
        if isdir(full_path):
            shutil.rmtree(full_path)


def get_os_arch_binary(extract_dir):
    copy_from = ''
    lib_dir = join(extract_dir, 'libs')
    os_name = platform.system().lower()
    processor_name = platform.machine().lower()
    if os_name == 'windows':
        copy_from = join(lib_dir, 'windows', 'okapi.dll')
    elif os_name == 'linux':
        if processor_name == 'x86_64':
            copy_from = join(lib_dir, 'linux', 'libokapi.so')
        elif processor_name == 'armv7l':
            copy_from = join(lib_dir, 'linux-armv7', 'libokapi.so')
        elif processor_name == 'aarch64':
            copy_from = join(lib_dir, 'linux-aarch64', 'libokapi.so')
    elif os_name == 'darwin':
        copy_from = join(lib_dir, 'macos', 'libokapi.dylib')
    return copy_from


def wrap_native_function(function_name: str, *, arg_types: Optional[List[Any]] = None,
                         return_type: Optional[Any] = None):
    library_function = getattr(load_library(), function_name)
    # Defaults coercion
    arg_types = arg_types or [ByteBuffer, ctypes.POINTER(ByteBuffer), ctypes.POINTER(ExternError)]
    return_type = return_type or ctypes.c_int32

    library_function.argtypes = arg_types
    library_function.restype = return_type

    return library_function


def ffi_wrap_and_call(function_name: str, request_buffer: ByteBuffer) -> bytes:
    func = wrap_native_function(function_name)
    error_out = ExternError()
    response_buffer = ByteBuffer()
    func(request_buffer, ctypes.byref(response_buffer), ctypes.byref(error_out))
    error_out.raise_error_if_needed()
    byte_data = bytes(response_buffer)
    response_buffer.free()
    return byte_data


def typed_wrap_and_call(function_name, request: betterproto.Message, response_type: Type[T_response]) -> T_response:
    buffer = ffi_wrap_and_call(function_name, ByteBuffer.create_from(bytes(request)))
    output_object = response_type().parse(buffer)
    return output_object
