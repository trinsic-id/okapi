package okapi

import "C"

func CreateProof(request *CreateProofRequest) (CreateProofResponse, error) {
	response := CreateProofResponse{}
	ldproofs := LdProofs{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := ldproofs.CreateProof(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("ldproofs_create_proof", code, err)
}

func VerifyProof(request *VerifyProofRequest) (VerifyProofResponse, error) {
	response := VerifyProofResponse{}
	ldproofs := LdProofs{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := ldproofs.VerifyProof(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("ldproofs_verify_proof", code, err)
}