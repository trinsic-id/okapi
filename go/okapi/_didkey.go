package okapi

import "github.com/trinsic-id/okapi/go/okapiproto"

// DidKeyer is the interface that groups the did:key functions
type DidKeyer interface {
	Generate(request *okapiproto.GenerateKeyRequest) (*okapiproto.GenerateKeyResponse, error)
	Resolve(request *okapiproto.ResolveRequest) (*okapiproto.ResolveResponse, error)
}

// DidKey returns a DidKeyer that can generate and resolve did:keys
func DidKey() DidKeyer {
	return &didKey{}
}

type didKey struct{}

func (d *didKey) Generate(request *okapiproto.GenerateKeyRequest) (*okapiproto.GenerateKeyResponse, error) {
	response := okapiproto.GenerateKeyResponse{}
	err := callOkapiNative(request, &response, didkeyGenerate)
	return &response, err
}

func (d *didKey) Resolve(request *okapiproto.ResolveRequest) (*okapiproto.ResolveResponse, error) {
	response := okapiproto.ResolveResponse{}
	err := callOkapiNative(request, &response, didkeyResolve)
	return &response, err
}
