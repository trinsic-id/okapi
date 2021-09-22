package okapi

import "C"

type LdProofs struct {}
type LdProofer interface {
	CreateProof(request *CreateProofRequest) (*CreateProofResponse, error)
	VerifyProof(request *VerifyProofRequest) (*VerifyProofResponse, error)
}

func (l LdProofs) CreateProof(request *CreateProofRequest) (*CreateProofResponse, error) {
	response := CreateProofResponse{}
	err := callOkapiNative(request, &response, ldproofsCreateProof)
	return &response, err
}

func (l LdProofs) VerifyProof(request *VerifyProofRequest) (*VerifyProofResponse, error) {
	response := VerifyProofResponse{}
	err := callOkapiNative(request, &response, ldproofsVerifyProof)
	return &response, err
}