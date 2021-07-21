package main

import (
	pb "didcomm.org/grpc/messaging"
	"didcomm.org/grpc/okapi/DidKey"
	"fmt"
)

func main() {

	generateKeyRequest := &pb.GenerateKeyRequest {
		Seed: []byte{1, 2, 3},
		KeyType: pb.KeyType_Ed25519,
	}
	fmt.Println(generateKeyRequest)

	generateKeyResponse := DidKey.Generate(generateKeyRequest)

	fmt.Println(generateKeyResponse.Key)
}