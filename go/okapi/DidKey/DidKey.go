package DidKey

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi"
)

func Generate(request *pb.GenerateKeyRequest) (pb.GenerateKeyResponse, error) {
	response := pb.GenerateKeyResponse{}
	err := okapi.CallFunction("didkey_generate", request, &response)
	return response, err
}

func Resolve(request *pb.ResolveRequest) (pb.ResolveResponse, error) {
	response := pb.ResolveResponse{}
	err := okapi.CallFunction("didkey_resolve", request, &response)
	return response, err
}