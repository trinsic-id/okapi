import datetime
import unittest

from okapi.okapi_utils import dictionary_to_struct
from okapi.proto.okapi.keys import GenerateKeyRequest, KeyType, JsonWebKey
from okapi.wrapper import DIDKey, LDProofs
from okapi.proto.okapi.proofs import CreateProofRequest, LdSuite


class LdProofsTests(unittest.TestCase):
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
        request.key_type = KeyType.Ed25519
        response = DIDKey.generate(request)
        signing_key: JsonWebKey = [key for key in response.key if key.crv == "Ed25519"][0]

        proof_request = CreateProofRequest(document=capability, key=signing_key,
                                           suite=LdSuite.JcsEd25519Signature2020)

        signed_capability = LDProofs.create(proof_request)
        self.assertIsNotNone(signed_capability)
        self.assertIsNotNone(signed_capability.signed_document)


if __name__ == '__main__':
    unittest.main()
