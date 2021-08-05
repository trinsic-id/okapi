package okapi

// #cgo LDFLAGS: -L. -lokapi
// #cgo linux LDFLAGS: -ldl -lm
// #include "okapi.h"
import "C"
import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"unsafe"
)


type DidError struct {
	Code         int
	FunctionName string
	Message      string
}
func (d *DidError) Error() string {
	return fmt.Sprintf("Error on call: %s() return code=%d message=%s", d.FunctionName, d.Code, d.Message)
}

func didcomm_pack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_pack(request, response, err))
}
func didcomm_unpack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_unpack(request, response, err))
}
func didcomm_sign(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_sign(request, response, err))
}
func didcomm_verify(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_verify(request, response, err))
}

func didkey_generate(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didkey_generate(request, response, err))
}
func didkey_resolve(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didkey_resolve(request, response, err))
}

func ldproofs_create_proof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.ldproofs_create_proof(request, response, err))
}
func ldproofs_verify_proof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.ldproofs_verify_proof(request, response, err))
}

func createBuffersFromMessage(requestMessage proto.Message) (C.ByteBuffer, C.ByteBuffer, C.ExternError) {
	out, e := proto.Marshal(requestMessage)
	if e != nil {
		log.Fatalln("Failed to encode requestMessage:", e)
	}

	requestBuffer, responseBuffer, err := allocateBuffers(out)
	return requestBuffer, responseBuffer, err
}

func unmarshalResponse(responseBuffer C.ByteBuffer, responseMessage proto.Message, requestBuffer C.ByteBuffer) {
	if e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(responseBuffer.data), C.int(responseBuffer.len)), responseMessage); e != nil {
		log.Fatalln("Failed to decode responseMessage:", e)
	}
	C.free(unsafe.Pointer(requestBuffer.data))
	C.didcomm_byte_buffer_free(responseBuffer)
}

func createError(functionName string, code int32, err C.ExternError) error {
	if code == 0 {
		return nil
	}
	return &DidError{
		Code: int(code),
		FunctionName: functionName,
		Message:      C.GoString(err.message),
	}
}

func allocateBuffers(out []byte) (C.ByteBuffer, C.ByteBuffer, C.ExternError) {
	requestBuffer := C.ByteBuffer{len: C.int64_t(len(out)), data: (*C.uint8_t)(C.CBytes(out))}
	responseBuffer := C.ByteBuffer{}
	err := C.ExternError{}
	return requestBuffer, responseBuffer, err
}