from ctypes import *
import ctypes
from api_pb2 import *
from google.protobuf import *

lib = cdll.LoadLibrary('libdidcommgrpc.so')

class ByteBuffer(Structure):
    _fields_ = [
        ("len", c_int32),
        ("data", ctypes.POINTER(c_uint8))
    ]

class DIDComm:
    @staticmethod
    def pack(request: PackRequest) -> PackResponse:

        # lib.didcomm_pack

        return PackResponse()

    @staticmethod
    def unpack(UnackRequest):

        # lib.didcomm_unpack

        return UnpackResponse()

class DIDKey:
    @staticmethod
    def generate(request: GenerateKeyRequest):

        # # lib.didkey_generate

        return

request = GenerateKeyRequest()
request.key_type = KeyType.ed25519
request.seed = bytes(bytearray([1, 2, 3]))

serialized_request = request.SerializeToString()
request_buffer = ByteBuffer()
request_buffer.len = len(serialized_request)
request_buffer.data = ctypes.cast(serialized_request, ctypes.POINTER(ctypes.c_uint8))

response_buffer = pointer(ByteBuffer())

response = lib.didcomm_generate_key(request_buffer, response_buffer)

bytes_with_copy = bytes(bytearray(ctypes.cast(response_buffer.contents.data, ctypes.POINTER(ctypes.c_ubyte*response_buffer.contents.len))[0]))
bytes_with_memoryview = memoryview(ctypes.cast(response_buffer.contents.data, ctypes.POINTER(ctypes.c_ubyte*response_buffer.contents.len))[0]).tobytes()

key_response = GenerateKeyResponse()
key_response.ParseFromString(bytes_with_copy)
# key_response.ParseFromString(bytes_with_memoryview)

# must free memory allocated in rust
lib.didcomm_byte_buffer_free(response_buffer.contents)

print(key_response.key.fingerprint)