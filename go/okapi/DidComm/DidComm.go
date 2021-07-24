package DidComm

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi"
)

func Pack(request *pb.PackRequest) (pb.PackResponse, error) {
	response := pb.PackResponse{}
	err := okapi.CallFunction("didcomm_pack", request, &response)
	return response, err
}

func Unpack(request *pb.UnpackRequest) (pb.UnpackResponse, error) {
	response := pb.UnpackResponse{}
	err := okapi.CallFunction("didcomm_unpack", request, &response)
	return response, err
}

func Sign(request *pb.SignRequest) (pb.SignResponse, error) {
	response := pb.SignResponse{}
	err := okapi.CallFunction("didcomm_sign", request, &response)
	return response, err
}

func Verify(request *pb.VerifyRequest) (pb.VerifyResponse, error) {
	response := pb.VerifyResponse{}
	err := okapi.CallFunction("didcomm_verify", request, &response)
	return response, err
}