from didcommgrpc import DIDKey
from keys_pb2 import GenerateKeyRequest, KeyType

request = GenerateKeyRequest()
request.key_type = KeyType.Ed25519
request.seed = bytes(bytearray([1, 2, 3]))

key = DIDKey()
key_response = key.generate(request)


print(key_response.key)
