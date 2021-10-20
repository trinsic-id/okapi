package okapi

import (
	"testing"

	"github.com/stretchr/testify/assert"
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"
)

func TestOberonDemo(t *testing.T) {
	ob := Oberon()

	key, _ := ob.CreateKey(&okapi.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")

	token, _ := ob.CreateToken(&okapi.CreateOberonTokenRequest{
		Sk:   key.Sk,
		Data: data,
	})
	proof, _ := ob.CreateProof(&okapi.CreateOberonProofRequest{
		Data:  data,
		Token: token.Token,
		Nonce: nonce,
	})
	result, _ := ob.VerifyProof(&okapi.VerifyOberonProofRequest{
		Proof: proof.Proof,
		Data:  data,
		Nonce: nonce,
		Pk:    key.Pk,
	})

	assert.True(t, result.Valid)
}

func TestDemoWithBlinding(t *testing.T) {
	ob := Oberon()

	key, _ := ob.CreateKey(&okapi.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")
	// blinding code to be used by issuer and given to holder to transfer the token securely
	issuer_2fa := []byte("issuer code")

	tokenRequest := okapi.CreateOberonTokenRequest{Data: data, Sk: key.Sk}
	tokenRequest.Blinding = append(tokenRequest.Blinding, issuer_2fa)

	blindedToken, _ := ob.CreateToken(&tokenRequest)

	// Holder unblinds token
	unblindRequest := okapi.UnBlindOberonTokenRequest{Token: blindedToken.Token}
	unblindRequest.Blinding = append(unblindRequest.Blinding, issuer_2fa)
	token, _ := ob.UnblindToken(&unblindRequest)

	// Holder prepares a proof without blinding
	proof, _ := ob.CreateProof(&okapi.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: token.Token})
	// Verifier verifies the proof
	result, _ := ob.VerifyProof(&okapi.VerifyOberonProofRequest{Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof})
	assert.True(t, result.Valid)

	// Holder blinds the token with a personal pin
	userPin := []byte("0042")
	blindRequest := okapi.BlindOberonTokenRequest{Token: token.Token}
	blindRequest.Blinding = append(blindRequest.Blinding, userPin)
	userBlindedToken, _ := ob.BlindToken(&blindRequest)

	// Holder prepares a proof using the pin blinding
	proofRequest := okapi.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: userBlindedToken.Token}
	proofRequest.Blinding = append(proofRequest.Blinding, userPin)
	proof, _ = ob.CreateProof(&proofRequest)

	// Verifier verifies the proof
	result, _ = ob.VerifyProof(&okapi.VerifyOberonProofRequest{Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof})
	assert.True(t, result.Valid)

	// Bad acto creates a proof with incorrect blinding pin
	proofRequest = okapi.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: userBlindedToken.Token}
	proofRequest.Blinding = append(proofRequest.Blinding, []byte("invalid pin"))
	proof, _ = ob.CreateProof(&proofRequest)
	// Verifier tries to verify proof, fails
	result, _ = ob.VerifyProof(&okapi.VerifyOberonProofRequest{Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof})
	assert.False(t, result.Valid)
}
