package okapi

// #cgo LDFLAGS: -L${SRCDIR} -lokapi
// #cgo CFLAGS: -I${SRCDIR}
// #cgo linux LDFLAGS: -ldl -lm
// #cgo darwin LDFLAGS: -Wl,-rpath,\$ORIGIN
// #include "okapi.h"
import "C"

import (
	"fmt"
	"unsafe"

	"google.golang.org/protobuf/proto"
)

type OkapiError struct {
	Message       string
	InternalError error
}

func (o OkapiError) Error() string {
	return fmt.Sprintf("Error:%s  InternalError:%v", o.Message, o.InternalError)
}

type DidError struct {
	Code         int
	FunctionName string
	Message      string
}

func (d *DidError) Error() string {
	return fmt.Sprintf("Error on call: %s() return code=%d message=%s", d.FunctionName, d.Code, d.Message)
}

type okapiCall func(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32

func didcommPack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_pack(request, response, err))
}
func didcommUnpack(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_unpack(request, response, err))
}
func didcommSign(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_sign(request, response, err))
}
func didcommVerify(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didcomm_verify(request, response, err))
}

func didkeyGenerate(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didkey_generate(request, response, err))
}
func didkeyResolve(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.didkey_resolve(request, response, err))
}

func ldproofsCreateProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.ldproofs_create_proof(request, response, err))
}
func ldproofsVerifyProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.ldproofs_verify_proof(request, response, err))
}

func oberonCreateKey(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.oberon_create_key(request, response, err))
}
func oberonCreateToken(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.oberon_create_token(request, response, err))
}
func oberonBlindToken(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.oberon_blind_token(request, response, err))
}
func oberonUnBlindToken(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.oberon_unblind_token(request, response, err))
}
func oberonCreateProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.oberon_create_proof(request, response, err))
}
func oberonVerifyProof(request C.ByteBuffer, response *C.ByteBuffer, err *C.ExternError) int32 {
	return int32(C.oberon_verify_proof(request, response, err))
}

func callOkapiNative(request proto.Message, response proto.Message, nativeFunc okapiCall) error {
	requestBuffer, responseBuffer, errorBuffer, err := createBuffersFromMessage(request)
	if err != nil {
		return wrapError("Failed to create buffers", err)
	}
	code := nativeFunc(requestBuffer, &responseBuffer, &errorBuffer)
	err = unmarshalResponse(responseBuffer, response, requestBuffer)
	if err != nil {
		return wrapError("Failed to unmarshal response", err)
	}
	return createError(code, errorBuffer)
}

func createBuffersFromMessage(requestMessage proto.Message) (C.ByteBuffer, C.ByteBuffer, C.ExternError, error) {
	out, e := proto.Marshal(requestMessage)
	if e != nil {
		return C.ByteBuffer{}, C.ByteBuffer{}, C.ExternError{}, wrapError("Failed to marshal message to protobuf", e)
	}

	requestBuffer, responseBuffer, err := allocateBuffers(out)
	return requestBuffer, responseBuffer, err, nil
}

func unmarshalResponse(responseBuffer C.ByteBuffer, responseMessage proto.Message, requestBuffer C.ByteBuffer) error {
	e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(responseBuffer.data), C.int(responseBuffer.len)), responseMessage)
	if e != nil {
		return wrapError("Failed to unmarshal message to protobuf", e)
	}
	C.free(unsafe.Pointer(requestBuffer.data))
	C.didcomm_byte_buffer_free(responseBuffer)
	return nil
}

func createError(code int32, err C.ExternError) error {
	if code == 0 {
		return nil
	}
	return &DidError{
		Code:    int(code),
		Message: C.GoString(err.message),
	}
}
func wrapError(message string, internalError error) error {
	return &OkapiError{
		Message:       message,
		InternalError: internalError,
	}
}

func allocateBuffers(out []byte) (C.ByteBuffer, C.ByteBuffer, C.ExternError) {
	requestBuffer := C.ByteBuffer{len: C.int64_t(len(out)), data: (*C.uint8_t)(C.CBytes(out))}
	responseBuffer := C.ByteBuffer{}
	err := C.ExternError{}
	return requestBuffer, responseBuffer, err
}
