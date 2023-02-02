from trinsicokapi import metadata, didkey
from trinsicokapi.proto.okapi.keys.v1 import KeyType, GenerateKeyRequest


def run():
    request = GenerateKeyRequest()
    request.key_type = KeyType.KEY_TYPE_ED25519
    request.seed = bytes(bytearray([1, 2, 3]))

    key_response = didkey.generate(request)
    print(key_response.key)
    print(f"version={metadata.get_metadata().version}")


if __name__ == "__main__":
    run()