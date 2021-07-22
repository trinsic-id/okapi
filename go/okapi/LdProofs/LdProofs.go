package LdProofs

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi"
)

func CreateProof(request *pb.CreateProofRequest) (pb.CreateProofResponse, error) {
	response := pb.CreateProofResponse{}
	err := okapi.CallFunction("ldproofs_create_proof", request, &response)
	return response, err
}

func VerifyProof(request *pb.VerifyProofRequest) (pb.VerifyProofResponse, error) {
	response := pb.VerifyProofResponse{}
	err := okapi.CallFunction("ldproofs_verify_proof", request, &response)
	return response, err
}