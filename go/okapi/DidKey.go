package okapi

import "C"

type DidKey struct {}
type DidKeyer interface {
	Generate(request *GenerateKeyRequest) (*GenerateKeyResponse, error)
	Resolve(request *ResolveRequest) (*ResolveResponse, error)
}

func (d DidKey) Generate(request *GenerateKeyRequest) (*GenerateKeyResponse, error) {
	response := GenerateKeyResponse{}
	err := callOkapiNative(request, &response, didkeyGenerate)
	return &response, err
}

func (d DidKey) Resolve(request *ResolveRequest) (*ResolveResponse, error) {
	response := ResolveResponse{}
	err := callOkapiNative(request, &response, didkeyResolve)
	return &response, err
}