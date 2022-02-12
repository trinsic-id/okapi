package okapi

import (
	"github.com/trinsic-id/okapi/go/okapiproto"
)

type Hasher interface {
	Sha256Hash(request *okapiproto.SHA256HashRequest) (*okapiproto.SHA256HashResponse, error)
	Blake3Hash(request *okapiproto.Blake3HashRequest) (*okapiproto.Blake3HashResponse, error)
	Blake3KeyedHash(request *okapiproto.Blake3KeyedHashRequest) (*okapiproto.Blake3KeyedHashResponse, error)
	Blake3DeriveKey(request *okapiproto.Blake3DeriveKeyRequest) (*okapiproto.Blake3DeriveKeyResponse, error)
}

func Hashing() Hasher {
	return &hasher{}
}

type hasher struct{}

func (h *hasher) Sha256Hash(request *okapiproto.SHA256HashRequest) (*okapiproto.SHA256HashResponse, error) {
	response := okapiproto.SHA256HashResponse{}
	err := callOkapiNative(request, &response, sha256Hash)
	return &response, err
}

func (h *hasher) Blake3Hash(request *okapiproto.Blake3HashRequest) (*okapiproto.Blake3HashResponse, error) {
	response := okapiproto.Blake3HashResponse{}
	err := callOkapiNative(request, &response, blake3Hash)
	return &response, err
}

func (h *hasher) Blake3KeyedHash(request *okapiproto.Blake3KeyedHashRequest) (*okapiproto.Blake3KeyedHashResponse, error) {
	response := okapiproto.Blake3KeyedHashResponse{}
	err := callOkapiNative(request, &response, blake3KeyedHash)
	return &response, err
}

func (h *hasher) Blake3DeriveKey(request *okapiproto.Blake3DeriveKeyRequest) (*okapiproto.Blake3DeriveKeyResponse, error) {
	response := okapiproto.Blake3DeriveKeyResponse{}
	err := callOkapiNative(request, &response, blake3DeriveKey)
	return &response, err
}
