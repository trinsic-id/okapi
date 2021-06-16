import ctypes
from typing import Any

from keys_pb2 import GenerateKeyRequest, GenerateKeyResponse, ResolveRequest, ResolveResponse
from proofs_pb2 import CreateProofRequest, CreateProofResponse, VerifyProofRequest, VerifyProofResponse
from transport_pb2 import PackRequest, UnpackRequest, PackResponse, UnpackResponse, SignRequest, SignResponse, \
    VerifyRequest, VerifyResponse


class _ByteBuffer(ctypes.Structure):
    _fields_ = [
        ("len", ctypes.c_int64),
        ("data", ctypes.POINTER(ctypes.c_uint8))
    ]

    @staticmethod
    def create_from(obj: Any) -> '_ByteBuffer':
        request_buffer = _ByteBuffer()
        request_buffer.len = len(obj)
        request_buffer.data = ctypes.cast(obj, ctypes.POINTER(ctypes.c_uint8))
        return request_buffer


class _ExternError(ctypes.Structure):
    _fields_ = [
        ("code", ctypes.c_int32),
        ("message", ctypes.c_char_p)
    ]


class _OkapiBase(object):
    def __init__(self):
        self._lib = self.__load_library()

    def _copy_response_buffer(self, response: Any, response_buffer: ctypes.pointer) -> None:
        bytes_view = memoryview(ctypes.cast(response_buffer.contents.data, ctypes.POINTER(ctypes.c_ubyte*response_buffer.contents.len))[0]).tobytes()
        response.ParseFromString(bytes_view)
        self._lib.didcomm_byte_buffer_free(response_buffer.contents)

    @staticmethod
    def __load_library() -> '_DLLT':
        import platform
        import ctypes
        from os.path import join, abspath, dirname

        lib_path = join(dirname(abspath(__file__)), 'libs')

        sys = platform.system()
        library_name = {'Windows': 'okapi.dll',
                        'Darwin': 'libokapi.dylib',
                        'Linux': 'libokapi.so'}
        try:
            return ctypes.cdll.LoadLibrary(abspath(join(lib_path, library_name[platform.system()])))
        except KeyError:
            raise NotImplementedError(f"Unsupported operating system {sys}: {platform.platform()}")

    @staticmethod
    def _create_buffers(request) -> tuple[_ByteBuffer, ctypes.pointer, ctypes.pointer]:
        request_buffer = _ByteBuffer.create_from(request.SerializeToString())
        response_buffer = ctypes.pointer(_ByteBuffer())
        error_out = ctypes.pointer(_ExternError())

        return request_buffer, response_buffer, error_out


class DIDKey(_OkapiBase):
    def __init__(self):
        super().__init__()

    def generate(self, request: GenerateKeyRequest) -> GenerateKeyResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        ret_val = self._lib.didkey_generate(request_buffer, response_buffer, error_out)
        print(f"Return Value={ret_val}")
        response = GenerateKeyResponse()
        self._copy_response_buffer(response, response_buffer)
        return response

    def resolve(self, request: ResolveRequest) -> ResolveResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.didkey_resolve(request_buffer, response_buffer, error_out)
        response = ResolveResponse()
        self._copy_response_buffer(response, response_buffer)
        return response


class DIDComm(_OkapiBase):
    def __init__(self):
        super().__init__()

    def pack(self, request: PackRequest) -> PackResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.didcomm_pack(request_buffer, response_buffer, error_out)
        response = PackResponse()
        self._copy_response_buffer(response, response_buffer)
        return response

    def unpack(self, request: UnpackRequest) -> UnpackResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.didcomm_unpack(request_buffer, response_buffer, error_out)
        response = UnpackResponse()
        self._copy_response_buffer(response, response_buffer)
        return response

    def sign(self, request: SignRequest) -> SignResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.didcomm_sign(request_buffer, response_buffer, error_out)
        response = SignResponse()
        self._copy_response_buffer(response, response_buffer)
        return response

    def verify(self, request: VerifyRequest) -> VerifyResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.didcomm_verify(request_buffer, response_buffer, error_out)
        response = VerifyResponse()
        self._copy_response_buffer(response, response_buffer)
        return response


class LDProofs(_OkapiBase):
    def __init__(self):
        super().__init__()

    def create(self, request: CreateProofRequest) -> CreateProofResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.ldproofs_create_proof(request_buffer, response_buffer, error_out)
        response = CreateProofResponse()
        self._copy_response_buffer(response, response_buffer)
        return response

    def verify(self, request: VerifyProofRequest) -> VerifyProofResponse:
        request_buffer, response_buffer, error_out = self._create_buffers(request)
        self._lib.ldproofs_verify_proof(request_buffer, response_buffer, error_out)
        response = VerifyProofResponse()
        self._copy_response_buffer(response, response_buffer)
        return response
