import base64
import unittest
import base58

from okapi.keys import DIDKey
from okapi.proto.okapi.keys import GenerateKeyRequest, KeyType, GenerateKeyResponse, ResolveRequest
from okapi.okapi_utils import DidError


def base64_padding(base_64: str) -> str:
    string_short = len(base_64) % 4
    if string_short == 2:
        base_64 += "=="
    elif string_short == 3:
        base_64 += "="

    return base_64


class KeyTests(unittest.TestCase):
    def test_generate_key(self):
        request = GenerateKeyRequest()
        request.key_type = KeyType.Ed25519
        request.seed = bytes(bytearray([1, 2, 3]))

        key_response = DIDKey.generate(request)
        self.assertIsNotNone(key_response)
        self.assertIsInstance(key_response, GenerateKeyResponse)

    def test_generate_key_no_seed(self):
        request = GenerateKeyRequest()
        request.key_type = KeyType.Ed25519
        response = DIDKey.generate(request)

        self.assert_valid_key_generated(response)

    def test_resolve_key(self):
        key = 'did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN'
        response = DIDKey.resolve(ResolveRequest(did=key))
        self.assertIsNotNone(response)

    def assert_valid_key_generated(self, response, crv="Ed25519") -> bytes:
        self.assertIsNotNone(response)
        self.assertIsNotNone(response.key[0])
        self.assertEqual(response.key[0].crv, crv)
        x = base64.urlsafe_b64decode(base64_padding(response.key[0].x))
        y = base64.urlsafe_b64decode(base64_padding(response.key[0].y))
        public_key = x + y
        self.assertIsNotNone(public_key)
        self.assertEqual(32, len(public_key))
        response_64 = base64.urlsafe_b64decode(base64_padding(response.key[0].d))
        self.assertIsNotNone(response_64)
        self.assertEqual(32, len(response_64))
        return public_key

    def test_generate_key_throws_invalid_key_type(self):
        request = GenerateKeyRequest()
        request.key_type = -1
        with self.assertRaises(DidError):
            DIDKey.generate(request)

    def test_generate_key_from_seed(self):
        data_arguments = [(KeyType.Ed25519, "Ed25519",
                           "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578",
                           "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx"),
                          (KeyType.X25519, "X25519", "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5",
                           "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ")]
        for argument in data_arguments:
            with self.subTest(f"Testing argument set={argument}"):
                request = GenerateKeyRequest()
                request.key_type = argument[0]
                request.seed = bytes.fromhex(argument[2])
                response = DIDKey.generate(request)

                pk = self.assert_valid_key_generated(response, argument[1])
                self.assertEqual(argument[3], base58.b58encode(pk).decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
