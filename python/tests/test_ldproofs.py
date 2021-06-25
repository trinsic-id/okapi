import datetime
import unittest

import google.protobuf.struct_pb2

from okapi.keys_pb2 import GenerateKeyRequest, KeyType
from okapi.keys import DIDKey, LDProofs
from okapi.proofs_pb2 import CreateProofRequest, LdSuite


class LdProofsTests(unittest.TestCase):
    def test_generate_capability_invocation_proof_with_jcs(self):
        capability = {"@context": "https://w3id.org/security/v2",
                      "target": "urn:trinsic:wallets:noop",
                      "proof": {
                          "created": str(datetime.datetime.now())
                      }}
        struct_capability = google.protobuf.struct_pb2.Struct()
        struct_capability.update(capability)
        print(struct_capability)

        request = GenerateKeyRequest()
        request.key_type = KeyType.Ed25519
        response = DIDKey.generate(request)
        signing_key = [key for key in response.key if key.crv == "Ed25519"][0]

        proof_request = CreateProofRequest()
        proof_request.key.CopyFrom(signing_key)
        proof_request.document.CopyFrom(struct_capability)
        proof_request.suite = LdSuite.JcsEd25519Signature2020

        signed_capability = LDProofs.create(proof_request)
        self.assertIsNotNone(signed_capability)
        self.assertIsNotNone(signed_capability.signed_document)


if __name__ == '__main__':
    unittest.main()
