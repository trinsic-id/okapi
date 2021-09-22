package okapi

import (
	"github.com/stretchr/testify/assert"
	"github.com/trinsic-id/okapi/go/proto"
	"google.golang.org/protobuf/types/known/structpb"
	"log"
	"testing"
	"time"
)

func TestGenerateCapabilityInvocationProofWithJCS(t *testing.T) {
	proofStruct, err := structpb.NewStruct(map[string]interface{}{
		"@context": "https://w3id.org/security/v2",
		"target": "urn:trinsic:wallets:noop",
		"proof": map[string]interface{}{
			"created": time.Now().Format(time.RFC3339),
		},
	})

	request := proto.GenerateKeyRequest{KeyType: proto.KeyType_Ed25519}
	response, err := DidKey{}.Generate(&request)
	if err != nil {
		log.Fatalln(err)
	}
	signingKey := &proto.JsonWebKey{}
	for _, key := range response.Key {
		if key.Crv == "Ed25519" {
			signingKey = key
			break
		}
	}
	signedCapability, err2 := LdProofs{}.CreateProof(&proto.CreateProofRequest{
		Document: proofStruct,
		Key:      signingKey,
		Suite:    proto.LdSuite_JcsEd25519Signature2020,
	})
	if err2 != nil {
		log.Fatalln(err2)
	}
	assert.Nil(t, err2)
	assert.NotNil(t, signedCapability)
	assert.NotNil(t, signedCapability.SignedDocument)
}
