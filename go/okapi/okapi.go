package okapi

// #cgo CFLAGS: -I../../include
// #include <okapi.h>
import "C"
import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"golang.org/x/sys/windows"
	"log"
	"sync"
	"unsafe"
)

var once sync.Once
var okapiDll *windows.DLL
func GetLibrary() *windows.DLL {
	once.Do(func() {
		okapiLib, err := windows.LoadDLL("../../../libs/windows/okapi.dll")
		if err != nil {
			log.Fatalln("Failed to load library", err)
		}
		okapiDll = okapiLib
	})
	return okapiDll
}

func GetFunction(functionName string) *windows.Proc {
	functionPointer, err := GetLibrary().FindProc(functionName)
	if err != nil {
		log.Fatalln("Failed to load procedure:", err)
	}
	return functionPointer
}

func CallFunction(functionName string, requestMessage proto.Message, responseMessage proto.Message) error {
	out, e := proto.Marshal(requestMessage)
	if e != nil {
		log.Fatalln("Failed to encode requestMessage:", e)
	}

	requestBuffer, responseBuffer, err := AllocateBuffers(out)
	code, _, _ := GetFunction(functionName).Call(uintptr(unsafe.Pointer(&requestBuffer)), uintptr(unsafe.Pointer(&responseBuffer)), uintptr(unsafe.Pointer(&err)))

	if code != 0 {
		return &DidError{
			code:         int(code),
			functionName: functionName,
			message:      C.GoString(err.message),
		}
	}
	if e := proto.Unmarshal(C.GoBytes(unsafe.Pointer(responseBuffer.data), C.int(responseBuffer.len)), responseMessage); e != nil {
		log.Fatalln("Failed to decode responseMessage:", e)
	}
	C.free(unsafe.Pointer(requestBuffer.data))
	FreeBuffer(responseBuffer)
	return nil
}

func AllocateBuffers(out []byte) (C.ByteBuffer, C.ByteBuffer, C.ExternError) {
	requestBuffer := C.ByteBuffer{len: C.longlong(len(out)), data: (*C.uint8_t)(C.CBytes(out))}
	responseBuffer := C.ByteBuffer{}
	err := C.ExternError{}
	return requestBuffer, responseBuffer, err
}

func FreeBuffer(buffer C.ByteBuffer) {
	byteBufferFree := GetFunction("didcomm_byte_buffer_free")
	_, _, _ = byteBufferFree.Call(uintptr(unsafe.Pointer(&buffer)))
}

type DidError struct {
	code int
	functionName string
	message string
}
func (d *DidError) Error() string {
	return fmt.Sprintf("Error on call: %s() return code=%d message=%s", d.functionName, d.code, d.message)
}