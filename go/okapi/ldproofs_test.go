package okapi

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"
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

	request := okapi.GenerateKeyRequest{KeyType: okapi.KeyType_KEY_TYPE_ED25519}
	response, err := dk.Generate(&request)
	if !assert.Nil(err) {
		return
	}

	signingKey := &okapi.JsonWebKey{}
	for _, key := range response.Key {
		if key.Crv == "Ed25519" {
			signingKey = key
			break
		}
	}
	signedCapability, err := ldp.CreateProof(&okapi.CreateProofRequest{
		Document: proofStruct,
		Key:      signingKey,
		Suite:    okapi.LdSuite_LD_SUITE_JCSED25519SIGNATURE2020,
	})
	if !assert.Nil(err) {
		return
	}
	assert.NotNil(signedCapability)
	assert.NotNil(signedCapability.SignedDocument)
}
