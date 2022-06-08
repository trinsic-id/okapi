package okapi

import "github.com/trinsic-id/okapi/go/okapi/proofs/v1/proofs"

// LdProofer implements Linked-Data Proofs
type LdProofer interface {
	CreateProof(request *proofs.CreateProofRequest) (*proofs.CreateProofResponse, error)
}

// LdProofs implements Linked-Data Proofs
func LdProofs() LdProofer {
	return &ldProofs{}
}

type ldProofs struct{}

func (l *ldProofs) CreateProof(request *proofs.CreateProofRequest) (*proofs.CreateProofResponse, error) {
	response := proofs.CreateProofResponse{}
	err := callOkapiNative(request, &response, "ldproofs_create_proof")
	return &response, err
}
