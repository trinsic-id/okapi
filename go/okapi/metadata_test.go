package okapi

import (
	"github.com/stretchr/testify/assert"
	"github.com/trinsic-id/okapi/go/okapiproto"
	"testing"
)

func TestOkapiMetadataVersion(t *testing.T) {
	assert := assert.New(t)
	om := OkapiMetadata()

	request := okapiproto.GenerateKeyRequest{}
	request.KeyType = okapiproto.KeyType_KEY_TYPE_ED25519
	request.Seed = []byte{1, 2, 3}

	response, err := om.GetMetadata()
	assert.Nil(err)
	assert.NotNil(response)
	assert.NotNil(response.Version)
	assert.True(len(response.Version) > 0)
}
