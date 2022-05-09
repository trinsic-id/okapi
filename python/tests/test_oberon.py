import unittest

from trinsicokapi import oberon
from trinsicokapi.proto.okapi.security.v1 import (
    CreateOberonKeyRequest,
    CreateOberonTokenRequest,
    CreateOberonProofRequest,
    VerifyOberonProofRequest,
    UnBlindOberonTokenRequest,
    BlindOberonTokenRequest,
)


class OberonTests(unittest.TestCase):
    def test_oberon_demo(self):
        key = oberon.create_key(CreateOberonKeyRequest())
        data = bytes("alice", "utf8")
        nonce = bytes("1234", "utf8")

        token = oberon.create_token(CreateOberonTokenRequest(data=data, sk=key.sk))
        proof = oberon.create_proof(
            CreateOberonProofRequest(data=data, nonce=nonce, token=token.token)
        )
        result = oberon.verify_proof(
            VerifyOberonProofRequest(
                data=data, nonce=nonce, pk=key.pk, proof=proof.proof
            )
        )

        self.assertTrue(result.valid, "Proof should verify")

    def test_demo_with_blinding(self):
        key = oberon.create_key(CreateOberonKeyRequest())
        data = bytes("alice", "utf8")
        nonce = bytes("1234", "utf8")

        issuer_2fa = bytes("issuer code", "utf8")
        token_request = CreateOberonTokenRequest(data=data, sk=key.sk)
        token_request.blinding.append(issuer_2fa)
        blinded_token = oberon.create_token(token_request)

        # Holder unblinds the token
        unblind_request = UnBlindOberonTokenRequest(token=blinded_token.token)
        unblind_request.blinding.append(issuer_2fa)
        token = oberon.unblind_token(unblind_request)

        # Holder prepares a proof without blinding
        proof = oberon.create_proof(
            CreateOberonProofRequest(data=data, nonce=nonce, token=token.token)
        )
        # Verifier verifies the proof
        result = oberon.verify_proof(
            VerifyOberonProofRequest(
                data=data, nonce=nonce, pk=key.pk, proof=proof.proof
            )
        )
        self.assertTrue(result.valid)

        # Holder blinds the token with a personal pin
        user_pin = bytes("0042", "utf8")
        blind_request = BlindOberonTokenRequest(token=token.token)
        blind_request.blinding.append(user_pin)

        user_blinded_token = oberon.blind_token(blind_request)
        proof_request = CreateOberonProofRequest(
            data=data, nonce=nonce, token=user_blinded_token.token
        )
        proof_request.blinding.append(user_pin)
        proof = oberon.create_proof(proof_request)
        # Verifier verifies the proof
        result = oberon.verify_proof(
            VerifyOberonProofRequest(
                data=data, nonce=nonce, pk=key.pk, proof=proof.proof
            )
        )
        self.assertTrue(result.valid)

        # Bad actor creates a proof with incorrect blinding pin
        proof_request = CreateOberonProofRequest(
            data=data, nonce=nonce, token=user_blinded_token.token
        )
        proof_request.blinding.append(bytes("invalid pin", "utf8"))

        proof = oberon.create_proof(proof_request)

        self.assertEqual(256, len(proof.proof))

        # Verifies tries to verify proof, fails
        result = oberon.verify_proof(
            VerifyOberonProofRequest(
                data=data, nonce=nonce, pk=key.pk, proof=proof.proof
            )
        )
        self.assertFalse(result.valid)
