package okapi

// #cgo CFLAGS: -I../../include
// #cgo LDFLAGS: -L../../native/target/release -lokapi
// #cgo linux LDFLAGS: -ldl -lm
// #include "okapi.h"
import "C"
import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"unsafe"
)

type IDidComm interface {
	pack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
	unpack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
	sign(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
	verify(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32

	byteBufferFree(v C.ByteBuffer)
	stringFree(s *C.char)
}
type IDidKey interface {
	generate(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
	resolve(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
}
type ILdProofs interface {
	createProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
	verifyProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32
}

type DidComm struct {}
type DidKey struct {}
type LdProofs struct {}

func (d DidComm) Pack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_pack(request, response, err))
}
func (d DidComm) Unpack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_unpack(request, response, err))
}
func (d DidComm) Sign(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_sign(request, response, err))
}
func (d DidComm) Verify(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_verify(request, response, err))
}

func (d DidKey) Generate(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didkey_generate(request, response, err))
}
func (d DidKey) Resolve(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didkey_resolve(request, response, err))
}

func (d LdProofs) CreateProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.ldproofs_create_proof(request, response, err))
}
func (d LdProofs) VerifyProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.ldproofs_verify_proof(request, response, err))
}

func CreateBuffersFromMessage(requestMessage proto.Message) (C.ByteBuffer, C.ByteBuffer, C.ExternError) {
	out, e := proto.Marshal(requestMessage)
	if e != nil {
		log.Fatalln("Failed to encode requestMessage:", e)
	}

	requestBuffer, responseBuffer, err := AllocateBuffers(out)
	return requestBuffer, responseBuffer, err
}

func UnmarshalResponse(responseBuffer C.ByteBuffer, responseMessage proto.Message, requestBuffer C.ByteBuffer) {
	if e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(responseBuffer.data), C.int(responseBuffer.len)), responseMessage); e != nil {
		log.Fatalln("Failed to decode responseMessage:", e)
	}
	C.free(unsafe.Pointer(requestBuffer.data))
	FreeBuffer(responseBuffer)
}

func CreateError(functionName string, code int32, err C.ExternError) error {
	if code == 0 {
		return nil
	}
	return &DidError{
		Code: int(code),
		FunctionName: functionName,
		Message:      C.GoString(err.message),
	}
}

func AllocateBuffers(out []byte) (C.ByteBuffer, C.ByteBuffer, C.ExternError) {
	requestBuffer := C.ByteBuffer{len: C.int64_t(len(out)), data: (*C.uint8_t)(C.CBytes(out))}
	responseBuffer := C.ByteBuffer{}
	err := C.ExternError{}
	return requestBuffer, responseBuffer, err
}

func FreeBuffer(buffer C.ByteBuffer) {
	C.didcomm_byte_buffer_free(buffer)
}

type DidError struct {
	Code         int
	FunctionName string
	Message      string
}
func (d *DidError) Error() string {
	return fmt.Sprintf("Error on call: %s() return code=%d message=%s", d.FunctionName, d.Code, d.Message)
}