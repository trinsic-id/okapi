from okapi.keys import DIDKey
from okapi.proto.okapi.keys import GenerateKeyRequest, KeyType

request = GenerateKeyRequest()
request.key_type = KeyType.Ed25519
request.seed = bytes(bytearray([1, 2, 3]))

key_response = DIDKey.generate(request)
print(key_response.key)
