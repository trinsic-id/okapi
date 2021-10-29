import base64
import unittest
from os.path import dirname, join, abspath

import base58

import okapi.okapi_utils
from okapi.wrapper import DIDKey
from okapi.proto.okapi.keys.v1 import GenerateKeyRequest, KeyType, GenerateKeyResponse, ResolveRequest
from okapi.okapi_utils import DidError, get_os_arch_binary, set_library_path


class UtilitiesTests(unittest.TestCase):
    def test_download_binaries(self):
        # TODO - Only run this locally, it should take 20-30 seconds the first run, and instantaneous on the second.
        okapi.okapi_utils.download_binaries(True)

if __name__ == '__main__':
    unittest.main()
