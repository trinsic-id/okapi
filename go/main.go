package main

import (
	"fmt"
	"log"
	"unsafe"
	"github.com/golang/protobuf/proto"
	pb "didcomm.org/grpc/messaging"
)

/*
#cgo CFLAGS: -I../include
#cgo LDFLAGS: -L. -ldidcommgrpc
#include <didcommgrpc.h>
*/
import "C"

func main() {

	generateKeyRequest := &pb.GenerateKeyRequest {
		KeyType: pb.KeyType_ed25519,
	}
	fmt.Println(generateKeyRequest)

	out, e := proto.Marshal(generateKeyRequest)
	if e != nil {
        log.Fatalln("Failed to encode generateKeyRequest:", e)
	}

	request := C.ByteBuffer { len: 0, data: (*C.uint8_t)(unsafe.Pointer(&out[0])) }
	response := C.ByteBuffer { }
	err := C.ExternError { }
	code := C.didcomm_generate_key(request, &response, &err)

	fmt.Println("Called native result: ", code, ", buffer length: ", response.len)

	generateKeyResponse := &pb.GenerateKeyResponse{}

	if e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(response.data), C.int(response.len)), generateKeyResponse); e != nil {
		log.Fatalln("Failed to encode generateKeyRequest:", e)
	}

	C.didcomm_byte_buffer_free(response)

	fmt.Println(generateKeyResponse.Key.KeyId)
}