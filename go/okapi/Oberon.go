package okapi

import "github.com/trinsic-id/okapi/go/okapiproto"

type Oberoner interface {
	CreateKey(request *okapiproto.CreateOberonKeyRequest) (*okapiproto.CreateOberonKeyResponse, error)
	CreateToken(request *okapiproto.CreateOberonTokenRequest) (*okapiproto.CreateOberonTokenResponse, error)
	BlindToken(request *okapiproto.BlindOberonTokenRequest) (*okapiproto.BlindOberonTokenResponse, error)
	UnblindToken(request *okapiproto.UnBlindOberonTokenRequest) (*okapiproto.UnBlindOberonTokenResponse, error)
	CreateProof(request *okapiproto.CreateOberonProofRequest) (*okapiproto.CreateOberonProofResponse, error)
	VerifyProof(request *okapiproto.VerifyOberonProofRequest) (*okapiproto.VerifyOberonProofResponse, error)
}

func Oberon() Oberoner {
	return &oberon{}
}

type oberon struct{}

func (d *oberon) CreateKey(request *okapiproto.CreateOberonKeyRequest) (*okapiproto.CreateOberonKeyResponse, error) {
	response := okapiproto.CreateOberonKeyResponse{}
	err := callOkapiNative(request, &response, oberonCreateKey)
	return &response, err
}

func (d *oberon) CreateToken(request *okapiproto.CreateOberonTokenRequest) (*okapiproto.CreateOberonTokenResponse, error) {
	response := okapiproto.CreateOberonTokenResponse{}
	err := callOkapiNative(request, &response, oberonCreateToken)
	return &response, err
}

func (d *oberon) BlindToken(request *okapiproto.BlindOberonTokenRequest) (*okapiproto.BlindOberonTokenResponse, error) {
	response := okapiproto.BlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, oberonBlindToken)
	return &response, err
}

func (d *oberon) UnblindToken(request *okapiproto.UnBlindOberonTokenRequest) (*okapiproto.UnBlindOberonTokenResponse, error) {
	response := okapiproto.UnBlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, oberonUnBlindToken)
	return &response, err
}

func (d *oberon) CreateProof(request *okapiproto.CreateOberonProofRequest) (*okapiproto.CreateOberonProofResponse, error) {
	response := okapiproto.CreateOberonProofResponse{}
	err := callOkapiNative(request, &response, oberonCreateProof)
	return &response, err
}

func (d *oberon) VerifyProof(request *okapiproto.VerifyOberonProofRequest) (*okapiproto.VerifyOberonProofResponse, error) {
	response := okapiproto.VerifyOberonProofResponse{}
	err := callOkapiNative(request, &response, oberonVerifyProof)
	return &response, err
}
