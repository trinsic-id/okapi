package okapi

import "github.com/trinsic-id/okapi/go/proto"

type LdProofs struct {}
type LdProofer interface {
	CreateProof(request *proto.CreateProofRequest) (*proto.CreateProofResponse, error)
	VerifyProof(request *proto.VerifyProofRequest) (*proto.VerifyProofResponse, error)
}

func (l LdProofs) CreateProof(request *proto.CreateProofRequest) (*proto.CreateProofResponse, error) {
	response := proto.CreateProofResponse{}
	err := callOkapiNative(request, &response, ldproofsCreateProof)
	return &response, err
}

func (l LdProofs) VerifyProof(request *proto.VerifyProofRequest) (*proto.VerifyProofResponse, error) {
	response := proto.VerifyProofResponse{}
	err := callOkapiNative(request, &response, ldproofsVerifyProof)
	return &response, err
}