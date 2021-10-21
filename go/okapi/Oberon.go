package okapi

import okapi "github.com/trinsic-id/okapi/go/okapi/proto"

type Oberoner interface {
	CreateKey(request *okapi.CreateOberonKeyRequest) (*okapi.CreateOberonKeyResponse, error)
	CreateToken(request *okapi.CreateOberonTokenRequest) (*okapi.CreateOberonTokenResponse, error)
	BlindToken(request *okapi.BlindOberonTokenRequest) (*okapi.BlindOberonTokenResponse, error)
	UnblindToken(request *okapi.UnBlindOberonTokenRequest) (*okapi.UnBlindOberonTokenResponse, error)
	CreateProof(request *okapi.CreateOberonProofRequest) (*okapi.CreateOberonProofResponse, error)
	VerifyProof(request *okapi.VerifyOberonProofRequest) (*okapi.VerifyOberonProofResponse, error)
}

func Oberon() Oberoner {
	return &oberon{}
}

type oberon struct{}

func (d *oberon) CreateKey(request *okapi.CreateOberonKeyRequest) (*okapi.CreateOberonKeyResponse, error) {
	response := okapi.CreateOberonKeyResponse{}
	err := callOkapiNative(request, &response, oberonCreateKey)
	return &response, err
}

func (d *oberon) CreateToken(request *okapi.CreateOberonTokenRequest) (*okapi.CreateOberonTokenResponse, error) {
	response := okapi.CreateOberonTokenResponse{}
	err := callOkapiNative(request, &response, oberonCreateToken)
	return &response, err
}

func (d *oberon) BlindToken(request *okapi.BlindOberonTokenRequest) (*okapi.BlindOberonTokenResponse, error) {
	response := okapi.BlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, oberonBlindToken)
	return &response, err
}

func (d *oberon) UnblindToken(request *okapi.UnBlindOberonTokenRequest) (*okapi.UnBlindOberonTokenResponse, error) {
	response := okapi.UnBlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, oberonUnBlindToken)
	return &response, err
}

func (d *oberon) CreateProof(request *okapi.CreateOberonProofRequest) (*okapi.CreateOberonProofResponse, error) {
	response := okapi.CreateOberonProofResponse{}
	err := callOkapiNative(request, &response, oberonCreateProof)
	return &response, err
}

func (d *oberon) VerifyProof(request *okapi.VerifyOberonProofRequest) (*okapi.VerifyOberonProofResponse, error) {
	response := okapi.VerifyOberonProofResponse{}
	err := callOkapiNative(request, &response, oberonVerifyProof)
	return &response, err
}
