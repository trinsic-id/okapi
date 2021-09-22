package okapi

import "github.com/trinsic-id/okapi/go/proto"

type DidKey struct {}
type IDidKey interface {
	Generate(request *proto.GenerateKeyRequest) (*proto.GenerateKeyResponse, error)
	Resolve(request *proto.ResolveRequest) (*proto.ResolveResponse, error)
}

func (d DidKey) Generate(request *proto.GenerateKeyRequest) (*proto.GenerateKeyResponse, error) {
	response := proto.GenerateKeyResponse{}
	err := callOkapiNative(request, &response, didkeyGenerate)
	return &response, err
}

func (d DidKey) Resolve(request *proto.ResolveRequest) (*proto.ResolveResponse, error) {
	response := proto.ResolveResponse{}
	err := callOkapiNative(request, &response, didkeyResolve)
	return &response, err
}