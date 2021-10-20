package okapi

import (
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"
)

type DidKey struct {}
type DidKeyer interface {
	Generate(request *okapi.GenerateKeyRequest) (*okapi.GenerateKeyResponse, error)
	Resolve(request *okapi.ResolveRequest) (*okapi.ResolveResponse, error)
}

func (d DidKey) Generate(request *okapi.GenerateKeyRequest) (*okapi.GenerateKeyResponse, error) {
	response := okapi.GenerateKeyResponse{}
	err := callOkapiNative(request, &response, didkeyGenerate)
	return &response, err
}

func (d DidKey) Resolve(request *okapi.ResolveRequest) (*okapi.ResolveResponse, error) {
	response := okapi.ResolveResponse{}
	err := callOkapiNative(request, &response, didkeyResolve)
	return &response, err
}