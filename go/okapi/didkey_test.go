package okapi

import (
	"encoding/base64"
	"encoding/hex"
	"fmt"

	"github.com/btcsuite/btcutil/base58"
	"github.com/stretchr/testify/assert"
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"

	"testing"
)

func TestGenerateKey(t *testing.T) {
	assert := assert.New(t)
	dk := DidKey()

	request := okapi.GenerateKeyRequest{}
	request.KeyType = okapi.KeyType_KEY_TYPE_ED25519
	request.Seed = []byte{1, 2, 3}

	response, err := dk.Generate(&request)
	assert.Nil(err)
	assert.NotNil(response)
	assertValidKeyGenerated(t, response)
}

func TestGenerateKeyNoSeed(t *testing.T) {
	dk := DidKey()

	request := okapi.GenerateKeyRequest{}
	request.KeyType = okapi.KeyType_KEY_TYPE_ED25519

	response, err := dk.Generate(&request)
	assert.Nil(t, err)
	assertValidKeyGenerated(t, response)
}

func TestResolveKey(t *testing.T) {
	dk := DidKey()

	key := "did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN"
	request := &okapi.ResolveRequest{}
	request.Did = key

	response, err := dk.Resolve(request)
	assert.Nil(t, err)
	assert.NotNil(t, &response)
}

func TestGenerateKeyThrowsInvalidKeyType(t *testing.T) {
	dk := DidKey()

	request := okapi.GenerateKeyRequest{}
	request.KeyType = -1

	_, err := dk.Generate(&request)
	assert.NotNil(t, err)
	assert.IsType(t, &DidError{}, err)
}

type DataArgument struct {
	keyType       okapi.KeyType
	keyTypeString string
	seed          string
	response      string
}

func TestGenerateKeyFromSeed(t *testing.T) {
	dk := DidKey()

	dataArguments := []DataArgument{{keyType: okapi.KeyType_KEY_TYPE_ED25519, keyTypeString: "Ed25519",
		seed:     "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578",
		response: "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx"},
		{keyType: okapi.KeyType_KEY_TYPE_X25519, keyTypeString: "X25519",
			seed:     "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5",
			response: "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ"},
	}

	for index, argument := range dataArguments {
		t.Run(fmt.Sprintf("Run #%d - KeyType.%s", index+1, argument.keyTypeString), func(t *testing.T) {
			hex, err := hex.DecodeString(argument.seed)
			if err != nil {
				assert.Failf(t, "Failed to decode hex", argument.seed)
			}
			request := okapi.GenerateKeyRequest{KeyType: argument.keyType, Seed: hex}
			response, err := dk.Generate(&request)
			assert.Nil(t, err)

			pk := assertValidKeyGenerated(t, response, argument.keyTypeString)
			assert.Equal(t, argument.response, base58.Encode(pk))
		})
	}
}

func assertValidKeyGenerated(t *testing.T, response *okapi.GenerateKeyResponse, crvOptional ...string) []byte {
	crv := "Ed25519"
	if len(crvOptional) > 0 {
		crv = crvOptional[0]
	}
	assert.NotNil(t, response)
	assert.NotNil(t, response.Key[0])
	assert.Equal(t, crv, response.Key[0].Crv)

	x, _ := base64.RawURLEncoding.DecodeString(base64Padding(response.Key[0].X))
	y, _ := base64.RawURLEncoding.DecodeString(base64Padding(response.Key[0].Y))
	publicKey := append(x, y...)
	assert.NotNil(t, publicKey)
	assert.Equal(t, 32, len(publicKey))

	response64, _ := base64.RawURLEncoding.DecodeString(base64Padding(response.Key[0].D))
	assert.NotNil(t, response64)
	assert.Equal(t, 32, len(response64))

	return publicKey
}
func base64Padding(data string) string {
	stringShort := len(data) % 4
	if stringShort == 2 {
		data += "=="
	} else if stringShort == 1 {
		data += "="
	}
	return data
}
