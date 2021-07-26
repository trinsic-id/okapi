package LdProofs

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi"
)

func CreateProof(request *pb.CreateProofRequest) (pb.CreateProofResponse, error) {
	response := pb.CreateProofResponse{}
	ldproofs := okapi.LdProofs{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := ldproofs.CreateProof(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("ldproofs_create_proof", code, err)
}

func VerifyProof(request *pb.VerifyProofRequest) (pb.VerifyProofResponse, error) {
	response := pb.VerifyProofResponse{}
	ldproofs := okapi.LdProofs{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := ldproofs.VerifyProof(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("ldproofs_verify_proof", code, err)
}