import ctypes
import os
import platform
import threading
from ctypes import CDLL
from ctypes.util import find_library
from typing import Type, Optional, List, Any, Dict, Union, TypeVar

import betterproto

OKAPI_NATIVE: Dict[str, Union[str, CDLL]] = {'library_path': '', 'library': None}
okapi_loader_lock = threading.Lock()


def set_library_path(path: str):
    """Set the exact path of the library, including the file, to load"""
    global OKAPI_NATIVE
    with okapi_loader_lock:
        OKAPI_NATIVE['library_path'] = path


def _check_path(path_string: str, lib_name: str) -> str:
    # default assume linux
    lib_extension = "so"
    lib_prefix = "lib"
    if platform.system() == "Windows":
        lib_extension = "dll"
        lib_prefix = ""
    elif platform.system() == "Darwin":
        lib_extension = "dylib"

    lib_name = f"{lib_prefix}{lib_name}.{lib_extension}"
    for path in path_string.split(os.pathsep):
        test_path = os.path.join(path, lib_name)
        print(f'Attempting to load binary: ${test_path}')
        if os.path.exists(test_path):
            return test_path
        test_path = os.path.join(path, _platform_dir(), lib_name)
        print(f'Attempting to load binary: ${test_path}')
        if os.path.exists(test_path):
            return test_path
    return ""


def _platform_dir() -> str:
    # TODO - Linux on ARM?
    platforms = {'Windows': 'windows', 'Darwin': 'macos', 'Linux': 'linux'}
    return platforms[platform.system()]


def find_native_lib() -> str:
    global OKAPI_NATIVE
    lib_path = OKAPI_NATIVE['library_path']
    if lib_path:
        return lib_path
    lib_name = "okapi"
    # Allow for manual override and then manually check,
    # since LINUX Python doesn't always work. :(
    found_lib_path = (
        _check_path(
            os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'libs')),
            lib_name,
        )
        or _check_path(os.getenv('LD_LIBRARY_PATH', ''), lib_name)
        or find_library(lib_name)
    )
    return found_lib_path


def load_library() -> CDLL:
    global OKAPI_NATIVE
    # Python multithreading is super primitive due to the GIL.
    # All we need to do is prevent double copying.
    # https://opensource.com/article/17/4/grok-gil
    with okapi_loader_lock:
        if OKAPI_NATIVE['library'] is None:
            load_lib_path = find_native_lib()
            if not load_lib_path:
                raise RuntimeError(f"Could find library:{load_lib_path}")
            OKAPI_NATIVE['library'] = CDLL(load_lib_path)
    return OKAPI_NATIVE['library']


class OkapiError(Exception):
    """Wrapper for Okapi errors"""

    def __init__(self, code, message):
        self.code = code
        self.message = message

    def __repr__(self):
        return f"code={self.code} message={self.message}"


class ByteBuffer(ctypes.Structure):
    """Buffer allocated by the native library"""

    _fields_ = [("len", ctypes.c_int64), ("data", ctypes.POINTER(ctypes.c_uint8))]

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
        func = _wrap_native_function("okapi_bytebuffer_free", arg_types=[ByteBuffer])
        func(self)

    @staticmethod
    def create_from(obj: bytes) -> 'ByteBuffer':
        request_buffer = ByteBuffer()
        request_buffer.len = len(obj)
        request_buffer.data = (ctypes.c_ubyte * request_buffer.len).from_buffer_copy(
            obj
        )
        return request_buffer


class ExternError(ctypes.Structure):
    _fields_ = [("code", ctypes.c_int32), ("message", ctypes.POINTER(ctypes.c_char))]

    def __repr__(self):
        return f"code={self.code} message={self.get_message if self.code != 0 else ''}"

    def free(self):
        func = _wrap_native_function(
            "okapi_string_free", arg_types=[ctypes.POINTER(ctypes.c_char)]
        )
        func(self.message)

    @property
    def get_message(self) -> str:
        return ctypes.string_at(self.message).decode('utf-8')

    def raise_error_if_needed(self):
        """Raise an exception if one was returned"""
        if self.code != 0:
            string_copy = self.get_message
            self.free()
            raise OkapiError(self.code, string_copy)


def _wrap_native_function(
    function_name: str,
    *,
    arg_types: Optional[List[Any]] = None,
    return_type: Optional[Any] = None,
):
    library_function = getattr(load_library(), function_name)
    # Defaults coercion
    arg_types = arg_types or [
        ByteBuffer,
        ctypes.POINTER(ByteBuffer),
        ctypes.POINTER(ExternError),
    ]
    return_type = return_type or ctypes.c_int32

    library_function.argtypes = arg_types
    library_function.restype = return_type

    return library_function


def _ffi_wrap_and_call(function_name: str, request_buffer: ByteBuffer) -> bytes:
    func = _wrap_native_function(function_name)
    error_out = ExternError()
    response_buffer = ByteBuffer()
    func(request_buffer, ctypes.byref(response_buffer), ctypes.byref(error_out))
    error_out.raise_error_if_needed()
    byte_data = bytes(response_buffer)
    response_buffer.free()
    return byte_data


T_response = TypeVar('T_response', bound=betterproto.Message)


def _typed_wrap_and_call(
    function_name, request: betterproto.Message, response_type: Type[T_response]
) -> T_response:
    buffer = _ffi_wrap_and_call(function_name, ByteBuffer.create_from(bytes(request)))
    output_object = response_type().parse(buffer)
    return output_object
