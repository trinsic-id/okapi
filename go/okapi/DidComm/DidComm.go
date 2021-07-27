package DidComm

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi"
)

func Pack(request *pb.PackRequest) (pb.PackResponse, error) {
	response := pb.PackResponse{}
	didcomm := okapi.DidComm{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := didcomm.Pack(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("didcomm_pack", code, err)
}

func Unpack(request *pb.UnpackRequest) (pb.UnpackResponse, error) {
	response := pb.UnpackResponse{}
	didcomm := okapi.DidComm{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := didcomm.Unpack(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("didcomm_unpack", code, err)
}

func Sign(request *pb.SignRequest) (pb.SignResponse, error) {
	response := pb.SignResponse{}
	didcomm := okapi.DidComm{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := didcomm.Sign(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("didcomm_sign", code, err)
}

func Verify(request *pb.VerifyRequest) (pb.VerifyResponse, error) {
	response := pb.VerifyResponse{}
	didcomm := okapi.DidComm{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := didcomm.Verify(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("didcomm_verify", code, err)
}