import unittest

from okapi.proto.okapi.security import CreateOberonKeyRequest, CreateOberonTokenRequest, CreateOberonProofRequest, \
    VerifyOberonProofRequest
from okapi.wrapper import Oberon


class KeyTests(unittest.TestCase):
    def test_oberon_demo(self):
        key = Oberon.create_key(CreateOberonKeyRequest())
        data = bytes("alice", "utf8")
        nonce = bytes("1234", "utf8")

        token = Oberon.create_token(CreateOberonTokenRequest(data=data, sk=key.sk))
        proof = Oberon.create_proof(CreateOberonProofRequest(data=data, nonce=nonce, token=token.token))
        result = Oberon.verify_proof(VerifyOberonProofRequest(data=data, nonce=nonce, pk=key.pk, proof=proof.proof))

        self.assertTrue(result.valid, "Proof should verify")
