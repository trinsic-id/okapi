package okapi

import (
	"github.com/trinsic-id/okapi/go/okapi/security/v1/security"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestOberonDemo(t *testing.T) {
	ob := Oberon()

	key, _ := ob.CreateKey(&security.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")

	token, _ := ob.CreateToken(&security.CreateOberonTokenRequest{
		Sk:   key.Sk,
		Data: data,
	})
	proof, _ := ob.CreateProof(&security.CreateOberonProofRequest{
		Data:  data,
		Token: token.Token,
		Nonce: nonce,
	})
	result, _ := ob.VerifyProof(&security.VerifyOberonProofRequest{
		Proof: proof.Proof,
		Data:  data,
		Nonce: nonce,
		Pk:    key.Pk,
	})

	assert.Equal(t, 256, len(proof.Proof))
	assert.True(t, result.Valid)
}

func TestVerifyToken(t *testing.T) {
	ob := Oberon()

	data := []byte("4113")
	seed := []byte("123")
	otherSeed := []byte("012")

	rightKey, _ := ob.CreateKey(&security.CreateOberonKeyRequest{
		Seed: seed,
	})
	wrongKey, _ := ob.CreateKey(&security.CreateOberonKeyRequest{
		Seed: otherSeed,
	})

	token, _ := ob.CreateToken(&security.CreateOberonTokenRequest{
		Sk:   rightKey.Sk,
		Data: data,
	})

	rightResult, _ := ob.VerifyToken(&security.VerifyOberonTokenRequest{
		Token: token.Token,
		Pk:    rightKey.Pk,
		Data:  data,
	})
	assert.True(t, rightResult.Valid)

	wrongResult, _ := ob.VerifyToken(&security.VerifyOberonTokenRequest{
		Token: token.Token,
		Pk:    wrongKey.Pk,
		Data:  data,
	})
	assert.False(t, wrongResult.Valid)
}

func TestDemoWithBlinding(t *testing.T) {
	ob := Oberon()

	key, _ := ob.CreateKey(&security.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")
	// blinding code to be used by issuer and given to holder to transfer the token securely
	issuer2fa := []byte("issuer code")

	tokenRequest := security.CreateOberonTokenRequest{Data: data, Sk: key.Sk}
	tokenRequest.Blinding = append(tokenRequest.Blinding, issuer2fa)

	blindedToken, _ := ob.CreateToken(&tokenRequest)

	// Holder unblinds token
	unblindRequest := security.UnBlindOberonTokenRequest{Token: blindedToken.Token}
	unblindRequest.Blinding = append(unblindRequest.Blinding, issuer2fa)
	token, _ := ob.UnBlindToken(&unblindRequest)

	// Holder prepares a proof without blinding
	proof, _ := ob.CreateProof(&security.CreateOberonProofRequest{
		Data: data, Nonce: nonce, Token: token.Token,
	})
	// Verifier verifies the proof
	result, _ := ob.VerifyProof(&security.VerifyOberonProofRequest{
		Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof,
	})
	assert.True(t, result.Valid)

	// Holder blinds the token with a personal pin
	userPin := []byte("0042")
	blindRequest := security.BlindOberonTokenRequest{Token: token.Token}
	blindRequest.Blinding = append(blindRequest.Blinding, userPin)
	userBlindedToken, _ := ob.BlindToken(&blindRequest)

	// Holder prepares a proof using the pin blinding
	proofRequest := security.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: userBlindedToken.Token}
	proofRequest.Blinding = append(proofRequest.Blinding, userPin)
	proof, _ = ob.CreateProof(&proofRequest)

	// Verifier verifies the proof
	result, _ = ob.VerifyProof(&security.VerifyOberonProofRequest{
		Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof,
	})
	assert.True(t, result.Valid)

	// Bad acto creates a proof with incorrect blinding pin
	proofRequest = security.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: userBlindedToken.Token}
	proofRequest.Blinding = append(proofRequest.Blinding, []byte("invalid pin"))
	proof, _ = ob.CreateProof(&proofRequest)
	// Verifier tries to verify proof, fails
	result, _ = ob.VerifyProof(&security.VerifyOberonProofRequest{
		Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof,
	})
	assert.False(t, result.Valid)
}
