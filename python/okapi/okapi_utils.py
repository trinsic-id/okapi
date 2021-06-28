import datetime
from typing import Any, Optional, List, Dict
import platform
import ctypes
from os.path import join, abspath, dirname

import betterproto
from betterproto.lib.google.protobuf import Struct, Value, ListValue


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
        func = wrap_native_function("didcomm_byte_buffer_free", arg_types=[ByteBuffer], return_type=None)
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
        func = wrap_native_function("didcomm_string_free", arg_types=[ctypes.c_char_p])
        func(self.message)

    def raise_error_if_needed(self):
        if self.code != 0:
            string_copy = self.message.decode("utf-8")
            # self.free()
            raise DidError(self.code, string_copy)


def value_to_proto_value(obj: Any) -> Value:
    value = Value()
    if isinstance(obj, str) or isinstance(obj, datetime.datetime):
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


def list_to_proto_list(obj: List) -> ListValue:
    return ListValue(values=[value_to_proto_value(item) for item in obj])


def dictionary_to_struct(obj: Dict[str, Any]) -> Struct:
    return Struct(fields=dict([(k, value_to_proto_value(v)) for k, v in obj.items()]))


library_name = {'Windows': join('windows', 'okapi.dll'),
                'Darwin': join('macos', 'libokapi.dylib'),
                'Linux': join('linux', 'libokapi.so')}
OKAPI_DLL = None


def load_library() -> ctypes.CDLL:
    global OKAPI_DLL
    if OKAPI_DLL is None:
        lib_path = join(dirname(abspath(__file__)), 'libs')
        sys = platform.system()
        try:
            OKAPI_DLL = ctypes.CDLL(abspath(join(lib_path, library_name[sys])))
        except KeyError:
            raise NotImplementedError(f"Unsupported operating system {sys}: {platform.platform()}")
    return OKAPI_DLL


def wrap_native_function(function_name: str, *, arg_types: Optional[List[Any]] = None,
                         return_type: Optional[Any] = None):
    library_function = getattr(load_library(), function_name)
    # Defaults coercion
    arg_types = arg_types or [ByteBuffer, ctypes.POINTER(ByteBuffer), ctypes.POINTER(ExternError)]
    return_type = return_type or ctypes.c_int32

    library_function.argtypes = arg_types
    library_function.restype = return_type

    return library_function


def copy_response_buffer(response: Any, response_buffer: ByteBuffer) -> None:
    response.ParseFromString(bytes(response_buffer))
    del response_buffer


def ffi_wrap_and_call(function_name: str, request_buffer: ByteBuffer) -> ByteBuffer:
    func = wrap_native_function(function_name)
    error_out = ExternError()
    response_buffer = ByteBuffer()
    ret_val = func(request_buffer, ctypes.byref(response_buffer), ctypes.byref(error_out))
    print(f"Return Value={ret_val} {error_out}")
    error_out.raise_error_if_needed()
    return response_buffer


def typed_wrap_and_call(function_name, request: betterproto.Message, response_type: type) -> betterproto.Message:
    buffer = ffi_wrap_and_call(function_name, ByteBuffer.create_from(bytes(request)))
    output_object = response_type()
    output_object.parse(bytes(buffer))
    buffer.free()
    return output_object
