package okapi

import "github.com/trinsic-id/okapi/go/okapi/keys/v1/keys"

// DidKeyer is the interface that groups the did:key functions
type DidKeyer interface {
	Generate(request *keys.GenerateKeyRequest) (*keys.GenerateKeyResponse, error)
	Resolve(request *keys.ResolveRequest) (*keys.ResolveResponse, error)
}

// DidKey returns a DidKeyer that can generate and resolve did:keys
func DidKey() DidKeyer {
	return &didKey{}
}

type didKey struct{}

func (d *didKey) Generate(request *keys.GenerateKeyRequest) (*keys.GenerateKeyResponse, error) {
	response := keys.GenerateKeyResponse{}
	err := callOkapiNative(request, &response, "didkey_generate")
	return &response, err
}

func (d *didKey) Resolve(request *keys.ResolveRequest) (*keys.ResolveResponse, error) {
	response := keys.ResolveResponse{}
	err := callOkapiNative(request, &response, "didkey_resolve")
	return &response, err
}
