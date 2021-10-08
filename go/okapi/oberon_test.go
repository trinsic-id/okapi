package okapi

import (
	"github.com/stretchr/testify/assert"
	"github.com/trinsic-id/okapi/go/okapi_proto"
	"testing"
)

func TestOberonDemo(t *testing.T) {
	key, _ := Oberon{}.CreateKey(&okapi.CreateOberonKeyRequest{})
	data := []byte("alice")
	nonce := []byte("1234")

	token, _ := Oberon{}.CreateToken(&okapi.CreateOberonTokenRequest{
		Sk:       key.Sk,
		Data:     data,
	})
	proof, _ := Oberon{}.CreateProof(&okapi.CreateOberonProofRequest{
		Data:  data,
		Token: token.Token,
		Nonce: nonce,
	})
	result, _ := Oberon{}.VerifyProof(&okapi.VerifyOberonProofRequest{
		Proof: proof.Proof,
		Data:  data,
		Nonce: nonce,
		Pk:    key.Pk,
	})

	assert.True(t, result.Valid)
}