package main

// #cgo CFLAGS: -I../include
// #cgo LDFLAGS: -L../native/target/debug -lokapi
// #include <okapi.h>
import "C"

import (
	pb "didcomm.org/grpc/messaging"
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"unsafe"
)

func main() {

	generateKeyRequest := &pb.GenerateKeyRequest {
		KeyType: pb.KeyType_Ed25519,
	}
	fmt.Println(generateKeyRequest)

	out, e := proto.Marshal(generateKeyRequest)
	if e != nil {
        log.Fatalln("Failed to encode generateKeyRequest:", e)
	}

	request := C.ByteBuffer { len: 0, data: (*C.uint8_t)(unsafe.Pointer(&out[0])) }
	response := C.ByteBuffer { }
	err := C.ExternError { }
	code := C.didkey_generate(request, &response, &err)

	fmt.Println("Called native result: ", code, ", buffer length: ", response.len)

	generateKeyResponse := &pb.GenerateKeyResponse{}

	if e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(response.data), C.int(response.len)), generateKeyResponse); e != nil {
		log.Fatalln("Failed to encode generateKeyRequest:", e)
	}

	C.didcomm_byte_buffer_free(response)

	fmt.Println(generateKeyResponse.Key)
}