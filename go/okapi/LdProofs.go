package okapi

import "C"

type LdProofs struct {}
type ILdProofs interface {
	CreateProof(request *CreateProofRequest) (CreateProofResponse, error)
	VerifyProof(request *VerifyProofRequest) (VerifyProofResponse, error)
}

func (l LdProofs) CreateProof(request *CreateProofRequest) (CreateProofResponse, error) {
	response := CreateProofResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := ldproofs_create_proof(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("ldproofs_create_proof", code, err)
}

func (l LdProofs) VerifyProof(request *VerifyProofRequest) (VerifyProofResponse, error) {
	response := VerifyProofResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := ldproofs_verify_proof(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("ldproofs_verify_proof", code, err)
}