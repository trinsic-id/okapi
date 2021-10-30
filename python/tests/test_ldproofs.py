import datetime
import unittest
from os.path import join, dirname, abspath

from okapi.okapi_utils import dictionary_to_struct, set_library_path, get_os_arch_binary
from okapi.proto.okapi.keys.v1 import GenerateKeyRequest, KeyType, JsonWebKey
from okapi.wrapper import DIDKey, LDProofs
from okapi.proto.okapi.proofs.v1 import CreateProofRequest, LdSuite


class LdProofsTests(unittest.TestCase):
    def setUp(self) -> None:
        base_dir = abspath(join(dirname(__file__), '..', '..'))
        lib_path = get_os_arch_binary(base_dir)
        set_library_path(dirname(lib_path))

    def test_generate_capability_invocation_proof_with_jcs(self):
        capability_dict = {"@context": "https://w3id.org/security/v2",
                           "target": "urn:trinsic:wallets:noop",
                           "proof": {
                               "created": datetime.datetime.now().isoformat()
                           }
                           }

        capability = dictionary_to_struct(capability_dict)
        print(capability)

        request = GenerateKeyRequest()
        request.key_type = KeyType.KEY_TYPE_ED25519
        response = DIDKey.generate(request)
        signing_key: JsonWebKey = [key for key in response.key if key.crv == "Ed25519"][0]

        proof_request = CreateProofRequest(document=capability, key=signing_key,
                                           suite=LdSuite.LD_SUITE_JCSED25519SIGNATURE2020)

        signed_capability = LDProofs.create(proof_request)
        self.assertIsNotNone(signed_capability)
        self.assertIsNotNone(signed_capability.signed_document)


if __name__ == '__main__':
    unittest.main()
