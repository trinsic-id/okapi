package okapi

import (
	"errors"
	"fmt"
	"google.golang.org/protobuf/proto"
	"os"
	"path"
	"runtime"
	"strings"
	"unsafe"
)

// NativeError indicates a native protocol error
type NativeError struct {
	Message       string
	InternalError error
}

type ByteBuffer struct {
	len  int64
	data *uint8
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

func getLibraryName() (string, string) {
	os := runtime.GOOS
	// TODO - ARM support
	switch os {
	case "windows":
		return "windows", "okapi.dll"
	case "darwin":
		return "macos", "libokapi.dylib"
	case "linux":
		return "linux", "libokapi.so"
	default:
		return "", "okapi"
	}
}

func getLibraryPath() string {
	libFolder, libName := getLibraryName()
	ldLibPath := os.Getenv("LD_LIBRARY_PATH")
	// TODO - Check the appropriate folders
	checkPaths := []string{
		path.Join(".", libName),
		path.Join(".", libFolder, libName),
		path.Join(ldLibPath, libName),
		path.Join(ldLibPath, libFolder, libName),
	}

	for _, checkPath := range checkPaths {
		if _, err := os.Stat(checkPath); errors.Is(err, os.ErrNotExist) {
			continue
		} else {
			// Return this path
			return checkPath
		}
	}
	panic(fmt.Sprintf("could not find necessary okapi binary. paths searched:\n%s", strings.Join(checkPaths, "\n")))
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
	err := byteBufferFree(responseBuffer)
	if err != nil {
		return err
	}
	return nil
}

func createError(err ExternError) error {
	if err.code == 0 {
		return nil
	}
	return &DidError{
		Code:    int(err.code),
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
