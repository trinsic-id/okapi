package main

// #cgo CFLAGS: -I../include
// #include <okapi.h>
import "C"

import (
	pb "didcomm.org/grpc/messaging"
	"fmt"
	"github.com/golang/protobuf/proto"
	"golang.org/x/sys/windows"
	"log"
	"unsafe"
)

func main() {

	generateKeyRequest := &pb.GenerateKeyRequest {
		Seed: []byte{1, 2, 3},
		KeyType: pb.KeyType_Ed25519,
	}
	fmt.Println(generateKeyRequest)

	request := C.ByteBuffer { len: 0, data: (*C.uint8_t)(unsafe.Pointer(&out)) }
	response := C.ByteBuffer { }
	err := C.ExternError { }

	okapiDll, _ := windows.LoadDLL("../libs/windows/okapi.dll")
	didkeyGenerate, _ := okapiDll.FindProc("didkey_generate")

	code, _, _ := didkeyGenerate.Call(uintptr(unsafe.Pointer(&request)), uintptr(unsafe.Pointer(&response)), uintptr(unsafe.Pointer(&err)))
	//code := C.didkey_generate(request, &response, &err)

	fmt.Println("Called native result: ", code, ", buffer length: ", response.len)

	generateKeyResponse := &pb.GenerateKeyResponse{}

	if e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(response.data), C.int(response.len)), generateKeyResponse); e != nil {
		log.Fatalln("Failed to encode generateKeyRequest:", e)
	}

	//C.didcomm_byte_buffer_free(response)
	fmt.Println(generateKeyResponse.Key)
}