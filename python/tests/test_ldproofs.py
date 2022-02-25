import datetime
import unittest

from trinsicokapi import didkey, ldproofs
from trinsicokapi.okapi_utils import dictionary_to_struct
from trinsicokapi.proto.okapi.keys.v1 import GenerateKeyRequest, KeyType, JsonWebKey
from trinsicokapi.proto.okapi.proofs.v1 import CreateProofRequest, LdSuite


class LdProofsTests(unittest.TestCase):
    def test_generate_capability_invocation_proof_with_jcs(self):
        capability_dict = {
            "@context": "https://w3id.org/security/v2",
            "target": "urn:trinsic:wallets:noop",
            "proof": {"created": datetime.datetime.now().isoformat()},
        }

        capability = dictionary_to_struct(capability_dict)
        print(capability)

        request = GenerateKeyRequest()
        request.key_type = KeyType.KEY_TYPE_ED25519
        response = didkey.generate(request)
        signing_key: JsonWebKey = [key for key in response.key if key.crv == "Ed25519"][
            0
        ]

        proof_request = CreateProofRequest(
            document=capability,
            key=signing_key,
            suite=LdSuite.LD_SUITE_JCSED25519SIGNATURE2020,
        )

        signed_capability = ldproofs.create(proof_request)
        self.assertIsNotNone(signed_capability)
        self.assertIsNotNone(signed_capability.signed_document)


if __name__ == '__main__':
    unittest.main()
