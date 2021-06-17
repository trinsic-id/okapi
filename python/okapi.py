from typing import Any, Optional, List
import platform
import ctypes
from os.path import join, abspath, dirname

from keys_pb2 import GenerateKeyRequest, GenerateKeyResponse, ResolveRequest, ResolveResponse
from proofs_pb2 import CreateProofRequest, CreateProofResponse, VerifyProofRequest, VerifyProofResponse
from transport_pb2 import PackRequest, UnpackRequest, PackResponse, UnpackResponse, SignRequest, SignResponse, \
    VerifyRequest, VerifyResponse


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


class ExternError(ctypes.Structure):
    _fields_ = [
        ("code", ctypes.c_int32),
        ("message", ctypes.c_char_p)
    ]

    def __repr__(self):
        return f"code={self.code} message={self.message.value.decode('utf-8') if self.code != 0 else ''}"


def create_from(obj: bytes) -> ByteBuffer:
    request_buffer = ByteBuffer()
    request_buffer.len = len(obj)
    request_buffer.data = (ctypes.c_ubyte * request_buffer.len).from_buffer_copy(obj)
    return request_buffer


library_name = {'Windows': 'okapi.dll',
                'Darwin': 'libokapi.dylib',
                'Linux': 'libokapi.so'}
OKAPI_DLL = None


def load_library() -> ctypes.CDLL:
    global OKAPI_DLL
    if OKAPI_DLL is None:
        lib_path = join(dirname(abspath(__file__)), 'libs')
        sys = platform.system()
        try:
            OKAPI_DLL = ctypes.CDLL(abspath(join(lib_path, library_name[platform.system()])))
        except KeyError:
            raise NotImplementedError(f"Unsupported operating system {sys}: {platform.platform()}")
    return OKAPI_DLL


def wrap_native_function(function_name: str, *, arg_types: Optional[List[Any]] = None,
                         return_type: Optional[Any] = None):
    library_function = getattr(load_library(), function_name)
    if arg_types:
        library_function.argtypes = arg_types
    if return_type:
        library_function.restype = return_type
    else:
        library_function.restype = ctypes.c_int32

    return library_function


def copy_response_buffer(response: Any, response_buffer: ByteBuffer) -> None:
    response.ParseFromString(bytes(response_buffer))
    del response_buffer


def create_buffers(request) -> tuple[ByteBuffer, ByteBuffer, ExternError]:
    request_buffer = create_from(request.SerializeToString())
    response_buffer_pointer = ByteBuffer()
    error_out = ExternError()

    return request_buffer, response_buffer_pointer, error_out


class DIDKey:
    @staticmethod
    def generate(request: GenerateKeyRequest) -> GenerateKeyResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)

        func = wrap_native_function("didkey_generate", arg_types=[ByteBuffer,
                                                                  ctypes.POINTER(ByteBuffer),
                                                                  ctypes.POINTER(ExternError)])
        ret_val = func(request_buffer, ctypes.byref(response_buffer), ctypes.byref(error_out))
        print(f"Return Value={ret_val} {error_out}")
        response = GenerateKeyResponse()
        copy_response_buffer(response, response_buffer)
        return response

    @staticmethod
    def resolve(request: ResolveRequest) -> ResolveResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().didkey_resolve(request_buffer, response_buffer, error_out)
        response = ResolveResponse()
        copy_response_buffer(response, response_buffer)
        return response


class DIDComm():
    @staticmethod
    def pack(request: PackRequest) -> PackResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().didcomm_pack(request_buffer, response_buffer, error_out)
        response = PackResponse()
        copy_response_buffer(response, response_buffer)
        return response

    @staticmethod
    def unpack(request: UnpackRequest) -> UnpackResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().didcomm_unpack(request_buffer, response_buffer, error_out)
        response = UnpackResponse()
        copy_response_buffer(response, response_buffer)
        return response

    @staticmethod
    def sign(request: SignRequest) -> SignResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().didcomm_sign(request_buffer, response_buffer, error_out)
        response = SignResponse()
        copy_response_buffer(response, response_buffer)
        return response

    @staticmethod
    def verify(request: VerifyRequest) -> VerifyResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().didcomm_verify(request_buffer, response_buffer, error_out)
        response = VerifyResponse()
        copy_response_buffer(response, response_buffer)
        return response


class LDProofs():
    @staticmethod
    def create(request: CreateProofRequest) -> CreateProofResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().ldproofs_create_proof(request_buffer, response_buffer, error_out)
        response = CreateProofResponse()
        copy_response_buffer(response, response_buffer)
        return response

    @staticmethod
    def verify(request: VerifyProofRequest) -> VerifyProofResponse:
        request_buffer, response_buffer, error_out = create_buffers(request)
        load_library().ldproofs_verify_proof(request_buffer, response_buffer, error_out)
        response = VerifyProofResponse()
        copy_response_buffer(response, response_buffer)
        return response
