import base64
import unittest

from trinsicokapi import hashing
from trinsicokapi.proto.okapi.hashing.v1 import Blake3HashRequest, Blake3HashResponse, Blake3KeyedHashRequest, \
    Blake3KeyedHashResponse, Blake3DeriveKeyRequest, Blake3DeriveKeyResponse, Sha256HashRequest, Sha256HashResponse


def base64_padding(base_64: str) -> str:
    string_short = len(base_64) % 4
    if string_short == 2:
        base_64 += "=="
    elif string_short == 3:
        base_64 += "="

    return base_64


class HashTests(unittest.TestCase):
    def test_sha256_hash(self):
        request = Sha256HashRequest()
        # Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
        request.data = bytes("4113", "utf-8")

        response = hashing.sha256_hash(request)
        self.assertIsNotNone(response)
        self.assertIsInstance(response, Sha256HashResponse)
        response_hex = base64.b16encode(response.digest).decode('utf-8').lower()
        expected = "71b3af35d9d53d24e7462177da41b8acd5e2ef4afc333dd9272cb2ab8743b3db"
        expected_trim = expected[:len(response_hex)]
        self.assertEqual(expected_trim, response_hex)

    def test_blake3_hash(self):
        request = Blake3HashRequest()
        # Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
        request.data = bytes(bytearray([0, 1, 2]))

        response = hashing.blake3_hash(request)
        self.assertIsNotNone(response)
        self.assertIsInstance(response, Blake3HashResponse)
        response_hex = base64.b16encode(response.digest).decode('utf-8').lower()
        expected = "e1be4d7a8ab5560aa4199eea339849ba8e293d55ca0a81006726d184519e647f5b49b82f805a538c68915c1ae8035c900fd1d4b13902920fd05e1450822f36de9454b7e9996de4900c8e723512883f93f4345f8a58bfe64ee38d3ad71ab027765d25cdd0e448328a8e7a683b9a6af8b0af94fa09010d9186890b096a08471e4230a134"
        expected_trim = expected[:len(response_hex)]
        self.assertEqual(expected_trim, response_hex)

    def test_blake3_keyed_hash(self):
        request = Blake3KeyedHashRequest()
        # Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
        request.data = bytes(bytearray([0, 1, 2]))
        request.key = "whats the Elvish word for friend".encode('utf-8')

        response = hashing.blake3_keyed_hash(request)
        self.assertIsNotNone(response)
        self.assertIsInstance(response, Blake3KeyedHashResponse)
        response_hex = base64.b16encode(response.digest).decode('utf-8').lower()
        expected = "39e67b76b5a007d4921969779fe666da67b5213b096084ab674742f0d5ec62b9b9142d0fab08e1b161efdbb28d18afc64d8f72160c958e53a950cdecf91c1a1bbab1a9c0f01def762a77e2e8545d4dec241e98a89b6db2e9a5b070fc110caae2622690bd7b76c02ab60750a3ea75426a6bb8803c370ffe465f07fb57def95df772c39f"
        expected_trim = expected[:len(response_hex)]
        self.assertEqual(expected_trim, response_hex)

    def test_blake3_derive_key(self):
        request = Blake3DeriveKeyRequest()
        # Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
        request.key_material = bytes(bytearray([0, 1, 2]))
        request.context = "BLAKE3 2019-12-27 16:29:52 test vectors context".encode('utf-8')

        response = hashing.blake3_derive_key(request)
        self.assertIsNotNone(response)
        self.assertIsInstance(response, Blake3DeriveKeyResponse)
        response_hex = base64.b16encode(response.digest).decode('utf-8').lower()
        expected = "440aba35cb006b61fc17c0529255de438efc06a8c9ebf3f2ddac3b5a86705797f27e2e914574f4d87ec04c379e12789eccbfbc15892626042707802dbe4e97c3ff59dca80c1e54246b6d055154f7348a39b7d098b2b4824ebe90e104e763b2a447512132cede16243484a55a4e40a85790038bb0dcf762e8c053cabae41bbe22a5bff7"
        expected_trim = expected[:len(response_hex)]
        self.assertEqual(expected_trim, response_hex)


if __name__ == '__main__':
    unittest.main()
