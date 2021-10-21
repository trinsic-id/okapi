package okapi

import (
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"
)

type LdProofer interface {
	CreateProof(request *okapi.CreateProofRequest) (*okapi.CreateProofResponse, error)
	VerifyProof(request *okapi.VerifyProofRequest) (*okapi.VerifyProofResponse, error)
}

func LdProofs() LdProofer {
	return &ldProofs{}
}

type ldProofs struct{}

func (l *ldProofs) CreateProof(request *okapi.CreateProofRequest) (*okapi.CreateProofResponse, error) {
	response := okapi.CreateProofResponse{}
	err := callOkapiNative(request, &response, ldproofsCreateProof)
	return &response, err
}

func (l *ldProofs) VerifyProof(request *okapi.VerifyProofRequest) (*okapi.VerifyProofResponse, error) {
	response := okapi.VerifyProofResponse{}
	err := callOkapiNative(request, &response, ldproofsVerifyProof)
	return &response, err
}
