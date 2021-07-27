package DidKey

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi"
)

func Generate(request *pb.GenerateKeyRequest) (pb.GenerateKeyResponse, error) {
	response := pb.GenerateKeyResponse{}
	key := okapi.DidKey{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := key.Generate(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("didkey_generate", code, err)
}

func Resolve(request *pb.ResolveRequest) (pb.ResolveResponse, error) {
	response := pb.ResolveResponse{}
	key := okapi.DidKey{}
	requestBuffer, responseBuffer, err := okapi.CreateBuffersFromMessage(request)
	code := key.Resolve(requestBuffer, &responseBuffer, &err)
	okapi.UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, okapi.CreateError("didkey_resolve", code, err)
}