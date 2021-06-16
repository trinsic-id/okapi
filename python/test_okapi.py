import unittest

from didcommgrpc import _OkapiBase, DIDKey
from keys_pb2 import GenerateKeyRequest, KeyType


class MyTestCase(unittest.TestCase):
    def test_load_library(self):
        # Yes, I know this throws away private convention, but in case we run into issues, throw the exception out the stack.
        base_okapi = _OkapiBase()
        self.assertIsNotNone(base_okapi)

    def test_generate_key(self):
        request = GenerateKeyRequest()
        request.key_type = KeyType.Ed25519
        request.seed = bytes(bytearray([1, 2, 3]))

        key_response = DIDKey.generate(request)
        self.assertIsNotNone(key_response)


if __name__ == '__main__':
    unittest.main()
