package okapi

import "github.com/trinsic-id/okapi/go/okapi_proto"

type LdProofs struct {}
type LdProofer interface {
	CreateProof(request *okapi.CreateProofRequest) (*okapi.CreateProofResponse, error)
	VerifyProof(request *okapi.VerifyProofRequest) (*okapi.VerifyProofResponse, error)
}

func (l LdProofs) CreateProof(request *okapi.CreateProofRequest) (*okapi.CreateProofResponse, error) {
	response := okapi.CreateProofResponse{}
	err := callOkapiNative(request, &response, ldproofsCreateProof)
	return &response, err
}

func (l LdProofs) VerifyProof(request *okapi.VerifyProofRequest) (*okapi.VerifyProofResponse, error) {
	response := okapi.VerifyProofResponse{}
	err := callOkapiNative(request, &response, ldproofsVerifyProof)
	return &response, err
}