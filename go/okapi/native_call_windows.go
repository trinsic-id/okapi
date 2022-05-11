package okapi

import (
	"google.golang.org/protobuf/proto"
	"syscall"
	"unsafe"
)

func callOkapiNative(request proto.Message, response proto.Message, funcName string) error {
	requestBuffer, responseBuffer, errorBuffer, err := createBuffersFromMessage(request)
	if err != nil {
		return wrapError("Failed to create buffers", err)
	}
	dll := syscall.MustLoadDLL(getLibraryName())
	okapiFunc := dll.MustFindProc(funcName)
	code, _, err := okapiFunc.Call(uintptr(unsafe.Pointer(&requestBuffer)), uintptr(unsafe.Pointer(&responseBuffer)), uintptr(unsafe.Pointer(&errorBuffer)))
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return err
	}
	err = unmarshalResponse(responseBuffer, response)
	if err != nil {
		return wrapError("Failed to unmarshal response", err)
	}
	return createError(int32(code), errorBuffer)
}

func byteBufferFree(responseBuffer ByteBuffer) error {
	dll := syscall.MustLoadDLL("okapi.dll")
	okapiFunc := dll.MustFindProc("okapi_bytebuffer_free")
	code, _, err := okapiFunc.Call(uintptr(unsafe.Pointer(&responseBuffer)))
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return err
	}
	return nil
}
