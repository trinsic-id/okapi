package okapi

import (
	"github.com/trinsic-id/okapi/go/okapi/keys/v1/keys"
	"github.com/trinsic-id/okapi/go/okapi/proofs/v1/proofs"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/types/known/structpb"
)

func TestGenerateCapabilityInvocationProofWithJCS(t *testing.T) {
	assert := assert.New(t)
	dk := DidKey()
	ldp := LdProofs()

	proofStruct, err := structpb.NewStruct(map[string]interface{}{
		"@context": "https://w3id.org/security/v2",
		"target":   "urn:trinsic:wallets:noop",
		"proof": map[string]interface{}{
			"created": time.Now().Format(time.RFC3339),
		},
	})
	if !assert.Nil(err) {
		return
	}

	request := keys.GenerateKeyRequest{KeyType: keys.KeyType_KEY_TYPE_ED25519}
	response, err := dk.Generate(&request)
	if !assert.Nil(err) {
		return
	}

	signingKey := &keys.JsonWebKey{}
	for _, key := range response.Key {
		if key.Crv == "Ed25519" {
			signingKey = key
			break
		}
	}
	signedCapability, err := ldp.CreateProof(&proofs.CreateProofRequest{
		Document: proofStruct,
		Key:      signingKey,
		Suite:    proofs.LdSuite_LD_SUITE_JCSED25519SIGNATURE2020,
	})
	if !assert.Nil(err) {
		return
	}
	assert.NotNil(signedCapability)
	assert.NotNil(signedCapability.SignedDocument)
}
