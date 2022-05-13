package okapi

import "github.com/trinsic-id/okapi/go/okapiproto"

// Oberoner implements Oberon authentication
type Oberoner interface {
	CreateKey(request *okapiproto.CreateOberonKeyRequest) (*okapiproto.CreateOberonKeyResponse, error)
	CreateToken(request *okapiproto.CreateOberonTokenRequest) (*okapiproto.CreateOberonTokenResponse, error)
	BlindToken(request *okapiproto.BlindOberonTokenRequest) (*okapiproto.BlindOberonTokenResponse, error)
	UnBlindToken(request *okapiproto.UnBlindOberonTokenRequest) (*okapiproto.UnBlindOberonTokenResponse, error)
	CreateProof(request *okapiproto.CreateOberonProofRequest) (*okapiproto.CreateOberonProofResponse, error)
	VerifyProof(request *okapiproto.VerifyOberonProofRequest) (*okapiproto.VerifyOberonProofResponse, error)
}

// Oberon implements Oberon authentication
func Oberon() Oberoner {
	return &oberon{}
}

type oberon struct{}

func (d *oberon) CreateKey(request *okapiproto.CreateOberonKeyRequest) (*okapiproto.CreateOberonKeyResponse, error) {
	response := okapiproto.CreateOberonKeyResponse{}
	err := callOkapiNative(request, &response, "oberon_create_key")
	return &response, err
}

func (d *oberon) CreateToken(request *okapiproto.CreateOberonTokenRequest) (*okapiproto.CreateOberonTokenResponse, error) {
	response := okapiproto.CreateOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_create_token")
	return &response, err
}

func (d *oberon) BlindToken(request *okapiproto.BlindOberonTokenRequest) (*okapiproto.BlindOberonTokenResponse, error) {
	response := okapiproto.BlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_blind_token")
	return &response, err
}

func (d *oberon) UnBlindToken(request *okapiproto.UnBlindOberonTokenRequest) (*okapiproto.UnBlindOberonTokenResponse, error) {
	response := okapiproto.UnBlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_unblind_token")
	return &response, err
}

func (d *oberon) CreateProof(request *okapiproto.CreateOberonProofRequest) (*okapiproto.CreateOberonProofResponse, error) {
	response := okapiproto.CreateOberonProofResponse{}
	err := callOkapiNative(request, &response, "oberon_create_proof")
	return &response, err
}

func (d *oberon) VerifyProof(request *okapiproto.VerifyOberonProofRequest) (*okapiproto.VerifyOberonProofResponse, error) {
	response := okapiproto.VerifyOberonProofResponse{}
	err := callOkapiNative(request, &response, "oberon_verify_proof")
	return &response, err
}
