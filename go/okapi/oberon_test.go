package okapi

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/trinsic-id/okapi/go/okapiproto"
)

func TestOberonDemo(t *testing.T) {
	ob := Oberon()

	key, _ := ob.CreateKey(&okapiproto.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")

	token, _ := ob.CreateToken(&okapiproto.CreateOberonTokenRequest{
		Sk:   key.Sk,
		Data: data,
	})
	proof, _ := ob.CreateProof(&okapiproto.CreateOberonProofRequest{
		Data:  data,
		Token: token.Token,
		Nonce: nonce,
	})
	result, _ := ob.VerifyProof(&okapiproto.VerifyOberonProofRequest{
		Proof: proof.Proof,
		Data:  data,
		Nonce: nonce,
		Pk:    key.Pk,
	})

	assert.True(t, result.Valid)
}

func TestDemoWithBlinding(t *testing.T) {
	ob := Oberon()

	key, _ := ob.CreateKey(&okapiproto.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")
	// blinding code to be used by issuer and given to holder to transfer the token securely
	issuer2fa := []byte("issuer code")

	tokenRequest := okapiproto.CreateOberonTokenRequest{Data: data, Sk: key.Sk}
	tokenRequest.Blinding = append(tokenRequest.Blinding, issuer2fa)

	blindedToken, _ := ob.CreateToken(&tokenRequest)

	// Holder unblinds token
	unblindRequest := okapiproto.UnBlindOberonTokenRequest{Token: blindedToken.Token}
	unblindRequest.Blinding = append(unblindRequest.Blinding, issuer2fa)
	token, _ := ob.UnblindToken(&unblindRequest)

	// Holder prepares a proof without blinding
	proof, _ := ob.CreateProof(&okapiproto.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: token.Token})
	// Verifier verifies the proof
	result, _ := ob.VerifyProof(&okapiproto.VerifyOberonProofRequest{Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof})
	assert.True(t, result.Valid)

	// Holder blinds the token with a personal pin
	userPin := []byte("0042")
	blindRequest := okapiproto.BlindOberonTokenRequest{Token: token.Token}
	blindRequest.Blinding = append(blindRequest.Blinding, userPin)
	userBlindedToken, _ := ob.BlindToken(&blindRequest)

	// Holder prepares a proof using the pin blinding
	proofRequest := okapiproto.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: userBlindedToken.Token}
	proofRequest.Blinding = append(proofRequest.Blinding, userPin)
	proof, _ = ob.CreateProof(&proofRequest)

	// Verifier verifies the proof
	result, _ = ob.VerifyProof(&okapiproto.VerifyOberonProofRequest{Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof})
	assert.True(t, result.Valid)

	// Bad acto creates a proof with incorrect blinding pin
	proofRequest = okapiproto.CreateOberonProofRequest{Data: data, Nonce: nonce, Token: userBlindedToken.Token}
	proofRequest.Blinding = append(proofRequest.Blinding, []byte("invalid pin"))
	proof, _ = ob.CreateProof(&proofRequest)
	// Verifier tries to verify proof, fails
	result, _ = ob.VerifyProof(&okapiproto.VerifyOberonProofRequest{Data: data, Nonce: nonce, Pk: key.Pk, Proof: proof.Proof})
	assert.False(t, result.Valid)
}
