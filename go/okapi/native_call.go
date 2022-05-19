//go:build !windows

package okapi

import (
	"github.com/coreos/pkg/dlopen"
	"syscall"
	"unsafe"
)

// #cgo LDFLAGS: -ldl
// #include <dlfcn.h>
// #include <stdlib.h>
// #include <stdint.h>
//
// typedef struct ByteBuffer {
//   int64_t len;
//   uint8_t *data;
// } ByteBuffer;
//
// typedef int32_t ErrorCode;
//
// typedef struct ExternError {
//   ErrorCode code;
//   char *message;
// } ExternError;
//
// int okapi_ffi(void *func, ByteBuffer requestBuffer, ByteBuffer* responseBuffer, ExternError* errorBuffer)
// {
//     typedef int (*okapi_ffi_type)(ByteBuffer requestBuffer, ByteBuffer* responseBuffer, ExternError* errorBuffer);
//     return ((okapi_ffi_type)func)(requestBuffer, responseBuffer, errorBuffer);
// }
//
// void okapi_bytebuffer_free(void* func, ByteBuffer buf) {
//     typedef int (*okapi_free_type)(ByteBuffer buffer);
//     ((okapi_free_type)func)(buf);
// }
import "C"
import (
	"google.golang.org/protobuf/proto"
)

func callOkapiNative(request proto.Message, response proto.Message, funcName string) error {
	requestBuffer, responseBuffer, errorBuffer, err := createBuffersFromMessage(request)
	if err != nil {
		return wrapError("Failed to create buffers", err)
	}
	libPtr, funcPtr := getFunctionPointer(funcName)
	cReqBuf := C.ByteBuffer{len: C.int64_t(requestBuffer.len), data: (*C.uchar)(unsafe.Pointer(requestBuffer.data))}
	cRespBuf := C.ByteBuffer{}
	cErrBuf := C.ExternError{}
	errNum := C.okapi_ffi(funcPtr, cReqBuf, &cRespBuf, &cErrBuf)
	defer func(libPtr *dlopen.LibHandle) {
		err := libPtr.Close()
		if err != nil {
			panic(err)
		}
	}(libPtr)
	if errNum != 0 {
		// Actually check the syscall.Errno to see if it's a real error
		//  fmt.Sprint("calling function=%s error code=%d", funcName, errNum)
		return &DidError{Code: int(cErrBuf.code), Message: C.GoString(cErrBuf.message)}
	}
	responseBuffer.len = int64(cRespBuf.len)
	if responseBuffer.len > 0 {
		responseBuffer.data = &(C.GoBytes(unsafe.Pointer(cRespBuf.data), C.int(cRespBuf.len))[0])
	}
	err = cByteBufferFree(cRespBuf)
	if err != nil {
		return err
	}
	err = unmarshalResponse(responseBuffer, response)
	if err != nil {
		return wrapError("Failed to unmarshal response", err)
	}
	return createError(errorBuffer)
}

func getFunctionPointer(funcName string) (*dlopen.LibHandle, unsafe.Pointer) {
	libPtr, err := dlopen.GetHandle([]string{getLibraryPath()})
	if err != nil {
		panic(err)
	}
	funcPtr, err := libPtr.GetSymbolPointer(funcName)
	if err != nil {
		panic(err)
	}
	return libPtr, funcPtr
}

func byteBufferFree(responseBuffer ByteBuffer) error {
	// We already freed, the C side, we're good.
	if responseBuffer.len == 0 {
		// This is just to eliminate the unused warning.
	}
	return nil
}

func cByteBufferFree(cRespBuf C.ByteBuffer) error {
	funcName := "okapi_bytebuffer_free"
	libPtr, funcPtr := getFunctionPointer(funcName)
	defer func(libPtr *dlopen.LibHandle) {
		err := libPtr.Close()
		if err != nil {
			panic(err)
		}
	}(libPtr)
	C.okapi_bytebuffer_free(funcPtr, cRespBuf)
	return nil
}

func okapiStringFree(s uintptr) error {
	dll := syscall.MustLoadDLL(getLibraryPath())
	okapiFunc := dll.MustFindProc("okapi_string_free")
	_, _, err := okapiFunc.Call(s)
	if err != syscall.Errno(0x0) {
		// Actually check the syscall.Errno to see if it's a real error
		return err
	}
	return nil
}
