package okapi

import "github.com/trinsic-id/okapi/go/okapiproto"

type LdProofer interface {
	CreateProof(request *okapiproto.CreateProofRequest) (*okapiproto.CreateProofResponse, error)
	VerifyProof(request *okapiproto.VerifyProofRequest) (*okapiproto.VerifyProofResponse, error)
}

func LdProofs() LdProofer {
	return &ldProofs{}
}

type ldProofs struct{}

func (l *ldProofs) CreateProof(request *okapiproto.CreateProofRequest) (*okapiproto.CreateProofResponse, error) {
	response := okapiproto.CreateProofResponse{}
	err := callOkapiNative(request, &response, ldproofsCreateProof)
	return &response, err
}

func (l *ldProofs) VerifyProof(request *okapiproto.VerifyProofRequest) (*okapiproto.VerifyProofResponse, error) {
	response := okapiproto.VerifyProofResponse{}
	err := callOkapiNative(request, &response, ldproofsVerifyProof)
	return &response, err
}
