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
	_, _, err = okapiFunc.Call(uintptr(unsafe.Pointer(&requestBuffer)), uintptr(unsafe.Pointer(&responseBuffer)), uintptr(unsafe.Pointer(&errorBuffer)))
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return err
	}
	err = unmarshalResponse(responseBuffer, response)
	if err != nil {
		return wrapError("Failed to unmarshal response", err)
	}
	return createError(errorBuffer)
}

func byteBufferFree(responseBuffer ByteBuffer) error {
	dll := syscall.MustLoadDLL(getLibraryName())
	okapiFunc := dll.MustFindProc("okapi_bytebuffer_free")
	_, _, err := okapiFunc.Call(uintptr(unsafe.Pointer(&responseBuffer)))
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return err
	}
	return nil
}

func okapiVersion() (string, error) {
	dll := syscall.MustLoadDLL(getLibraryName())
	okapiFunc := dll.MustFindProc("okapi_version")
	ver_ptr, _, err := okapiFunc.Call()
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return nil, err
	}
	return nil
}

func okapiStringFree() error {
	dll := syscall.MustLoadDLL(getLibraryName())
	okapiFunc := dll.MustFindProc("okapi_string_free")
	_, _, err := okapiFunc.Call(uintptr(unsafe.Pointer(&responseBuffer)))
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return err
	}
	return nil
}
