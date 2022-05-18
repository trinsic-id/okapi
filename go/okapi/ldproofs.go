package okapi

import "github.com/trinsic-id/okapi/go/okapiproto"

// LdProofer implements Linked-Data Proofs
type LdProofer interface {
	CreateProof(request *okapiproto.CreateProofRequest) (*okapiproto.CreateProofResponse, error)
}

// LdProofs implements Linked-Data Proofs
func LdProofs() LdProofer {
	return &ldProofs{}
}

type ldProofs struct{}

func (l *ldProofs) CreateProof(request *okapiproto.CreateProofRequest) (*okapiproto.CreateProofResponse, error) {
	response := okapiproto.CreateProofResponse{}
	err := callOkapiNative(request, &response, "ldproofs_create_proof")
	return &response, err
}
