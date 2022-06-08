package okapi

import "github.com/trinsic-id/okapi/go/okapi/hashing/v1/hashing"

// Hasher implements Blake3 and Sha2 hash functions
type Hasher interface {
	Sha256Hash(request *hashing.SHA256HashRequest) (*hashing.SHA256HashResponse, error)
	Blake3Hash(request *hashing.Blake3HashRequest) (*hashing.Blake3HashResponse, error)
	Blake3KeyedHash(request *hashing.Blake3KeyedHashRequest) (*hashing.Blake3KeyedHashResponse, error)
	Blake3DeriveKey(request *hashing.Blake3DeriveKeyRequest) (*hashing.Blake3DeriveKeyResponse, error)
}

// Hashing implements Blake3 and Sha2 hash functions
func Hashing() Hasher {
	return &hasher{}
}

type hasher struct{}

func (h *hasher) Sha256Hash(request *hashing.SHA256HashRequest) (*hashing.SHA256HashResponse, error) {
	response := hashing.SHA256HashResponse{}
	err := callOkapiNative(request, &response, "sha256_hash")
	return &response, err
}

func (h *hasher) Blake3Hash(request *hashing.Blake3HashRequest) (*hashing.Blake3HashResponse, error) {
	response := hashing.Blake3HashResponse{}
	err := callOkapiNative(request, &response, "blake3_hash")
	return &response, err
}

func (h *hasher) Blake3KeyedHash(request *hashing.Blake3KeyedHashRequest) (*hashing.Blake3KeyedHashResponse, error) {
	response := hashing.Blake3KeyedHashResponse{}
	err := callOkapiNative(request, &response, "blake3_keyed_hash")
	return &response, err
}

func (h *hasher) Blake3DeriveKey(request *hashing.Blake3DeriveKeyRequest) (*hashing.Blake3DeriveKeyResponse, error) {
	response := hashing.Blake3DeriveKeyResponse{}
	err := callOkapiNative(request, &response, "blake3_derive_key")
	return &response, err
}
