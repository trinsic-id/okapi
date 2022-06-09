package okapi

import "github.com/trinsic-id/okapi/go/okapi/security/v1/security"

// Oberoner implements Oberon authentication
type Oberoner interface {
	CreateKey(request *security.CreateOberonKeyRequest) (*security.CreateOberonKeyResponse, error)
	CreateToken(request *security.CreateOberonTokenRequest) (*security.CreateOberonTokenResponse, error)
	BlindToken(request *security.BlindOberonTokenRequest) (*security.BlindOberonTokenResponse, error)
	UnBlindToken(request *security.UnBlindOberonTokenRequest) (*security.UnBlindOberonTokenResponse, error)
	VerifyToken(request *security.VerifyOberonTokenRequest) (*security.VerifyOberonTokenResponse, error)
	CreateProof(request *security.CreateOberonProofRequest) (*security.CreateOberonProofResponse, error)
	VerifyProof(request *security.VerifyOberonProofRequest) (*security.VerifyOberonProofResponse, error)
}

// Oberon implements Oberon authentication
func Oberon() Oberoner {
	return &oberon{}
}

type oberon struct{}

func (d *oberon) VerifyToken(request *security.VerifyOberonTokenRequest) (*security.VerifyOberonTokenResponse, error) {
	response := security.VerifyOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_verify_token")
	return &response, err
}

func (d *oberon) CreateKey(request *security.CreateOberonKeyRequest) (*security.CreateOberonKeyResponse, error) {
	response := security.CreateOberonKeyResponse{}
	err := callOkapiNative(request, &response, "oberon_create_key")
	return &response, err
}

func (d *oberon) CreateToken(request *security.CreateOberonTokenRequest) (*security.CreateOberonTokenResponse, error) {
	response := security.CreateOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_create_token")
	return &response, err
}

func (d *oberon) BlindToken(request *security.BlindOberonTokenRequest) (*security.BlindOberonTokenResponse, error) {
	response := security.BlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_blind_token")
	return &response, err
}

func (d *oberon) UnBlindToken(request *security.UnBlindOberonTokenRequest) (*security.UnBlindOberonTokenResponse, error) {
	response := security.UnBlindOberonTokenResponse{}
	err := callOkapiNative(request, &response, "oberon_unblind_token")
	return &response, err
}

func (d *oberon) CreateProof(request *security.CreateOberonProofRequest) (*security.CreateOberonProofResponse, error) {
	response := security.CreateOberonProofResponse{}
	err := callOkapiNative(request, &response, "oberon_create_proof")
	return &response, err
}

func (d *oberon) VerifyProof(request *security.VerifyOberonProofRequest) (*security.VerifyOberonProofResponse, error) {
	response := security.VerifyOberonProofResponse{}
	err := callOkapiNative(request, &response, "oberon_verify_proof")
	return &response, err
}
