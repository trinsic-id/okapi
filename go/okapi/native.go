package okapi

import (
	"fmt"
	"google.golang.org/protobuf/proto"
	"runtime"
	"syscall"
	"unsafe"
)

// NativeError indicates a native protocol error
type NativeError struct {
	Message       string
	InternalError error
}

type ByteBuffer struct {
	len  int64
	data *byte
}

type ExternError struct {
	code    int32
	message []byte
}

func (o NativeError) Error() string {
	return fmt.Sprintf("Error:%s  InternalError:%v", o.Message, o.InternalError)
}

// DidError indicates a DID protocol error
type DidError struct {
	Code         int
	FunctionName string
	Message      string
}

func (d *DidError) Error() string {
	return fmt.Sprintf("Error on call: %s() return code=%d message=%s", d.FunctionName, d.Code, d.Message)
}

func getLibraryName() string {
	os := runtime.GOOS
	switch os {
	case "windows":
		return "okapi.dll"
	case "darwin":
		return "libokapi.dylib"
	case "linux":
		return "libokapi.so"
	default:
		return "okapi"
	}
}

func callOkapiNative(request proto.Message, response proto.Message, funcName string) error {
	requestBuffer, responseBuffer, errorBuffer, err := createBuffersFromMessage(request)
	if err != nil {
		return wrapError("Failed to create buffers", err)
	}
	dll := syscall.MustLoadDLL(getLibraryName())
	okapiFunc := dll.MustFindProc(funcName)
	code, _, err := okapiFunc.Call(uintptr(unsafe.Pointer(&requestBuffer)), uintptr(unsafe.Pointer(&responseBuffer)), uintptr(unsafe.Pointer(&errorBuffer)))
	if err != nil {
		// TODO - Actually check the syscall.Errno to see if it's a real error
		//return err
	}
	err = unmarshalResponse(responseBuffer, response)
	if err != nil {
		return wrapError("Failed to unmarshal response", err)
	}
	return createError(int32(code), errorBuffer)
}

func createBuffersFromMessage(requestMessage proto.Message) (ByteBuffer, ByteBuffer, ExternError, error) {
	out, e := proto.Marshal(requestMessage)
	if e != nil {
		return ByteBuffer{}, ByteBuffer{}, ExternError{}, wrapError("Failed to marshal message to protobuf", e)
	}

	requestBuffer, responseBuffer, err := allocateBuffers(out)
	return requestBuffer, responseBuffer, err, nil
}

func unmarshalResponse(responseBuffer ByteBuffer, responseMessage proto.Message) error {
	e := proto.Unmarshal(unsafe.Slice(responseBuffer.data, responseBuffer.len), responseMessage)
	if e != nil {
		return wrapError("Failed to unmarshal message to protobuf", e)
	}
	dll := syscall.MustLoadDLL("okapi.dll")
	okapiFunc := dll.MustFindProc("okapi_bytebuffer_free")
	_, _, _ = okapiFunc.Call(uintptr(unsafe.Pointer(&responseBuffer)))
	return nil
}

func createError(code int32, err ExternError) error {
	if code == 0 {
		return nil
	}
	return &DidError{
		Code:    int(code),
		Message: string(err.message),
	}
}
func wrapError(message string, internalError error) error {
	return &NativeError{
		Message:       message,
		InternalError: internalError,
	}
}

func allocateBuffers(out []byte) (ByteBuffer, ByteBuffer, ExternError) {
	requestBuffer := ByteBuffer{len: int64(len(out))}
	if len(out) > 0 {
		requestBuffer.data = &out[0]
	}
	responseBuffer := ByteBuffer{}
	err := ExternError{}
	return requestBuffer, responseBuffer, err
}
