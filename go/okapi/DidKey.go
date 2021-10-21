package okapi

import (
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"
)

// DidKeyer is the interface that groups the did:key functions
type DidKeyer interface {
	Generate(request *okapi.GenerateKeyRequest) (*okapi.GenerateKeyResponse, error)
	Resolve(request *okapi.ResolveRequest) (*okapi.ResolveResponse, error)
}

// DidKey returns a DidKeyer that can generate and resolve did:keys
func DidKey() DidKeyer {
	return &didKey{}
}

type didKey struct{}

func (d *didKey) Generate(request *okapi.GenerateKeyRequest) (*okapi.GenerateKeyResponse, error) {
	response := okapi.GenerateKeyResponse{}
	err := callOkapiNative(request, &response, didkeyGenerate)
	return &response, err
}

func (d *didKey) Resolve(request *okapi.ResolveRequest) (*okapi.ResolveResponse, error) {
	response := okapi.ResolveResponse{}
	err := callOkapiNative(request, &response, didkeyResolve)
	return &response, err
}
