from trinsicokapi import didkey
from trinsicokapi.proto.okapi.keys.v1 import GenerateKeyRequest, KeyType

def run():
    request = GenerateKeyRequest()
    request.key_type = KeyType.KEY_TYPE_ED25519
    request.seed = bytes(bytearray([1, 2, 3]))

    key_response = didkey.generate(request)
    print(key_response.key)


if __name__ == "__main__":
    run()
