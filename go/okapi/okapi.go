package okapi

// #cgo CFLAGS: -I../../include
// #include <okapi.h>
import "C"
import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"path"
	"runtime"
	"sync"
	"syscall"
	"unsafe"
)

var once sync.Once
var okapiDll *syscall.LazyDLL

func GetLibrary() *syscall.LazyDLL {
	once.Do(func() {
		if runtime.GOOS == "windows" {
			okapiDll = syscall.NewLazyDLL(path.Join(getCurrentDir(), "../../libs/windows/okapi.dll"))
		} else if runtime.GOOS == "linux" {
			okapiDll = syscall.NewLazyDLL(path.Join(getCurrentDir(), "../../libs/linux/libokapi.so"))
		} else if runtime.GOOS == "darwin" {
			okapiDll = syscall.NewLazyDLL(path.Join(getCurrentDir(), "../../libs/macos/libokapi.dylib"))
		}
	})
	return okapiDll
}

func getCurrentDir() string {
	_, filename, _, _ := runtime.Caller(1)
	return path.Dir(filename)
}

var lock = sync.RWMutex{}
var functionPointerCache = map[string]*syscall.LazyProc{}
func GetFunction(functionName string) *syscall.LazyProc {
	if fcnPtr, ok := functionPointerCache[functionName]; ok {
		return fcnPtr
	}
	lock.Lock()
	defer lock.Unlock()
	functionPointer := GetLibrary().NewProc(functionName)
	functionPointerCache[functionName] = functionPointer
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
		responseMessage = nil
		return &DidError{
			Code:         int(code),
			FunctionName: functionName,
			Message:      C.GoString(err.message),
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
	Code         int
	FunctionName string
	Message      string
}
func (d *DidError) Error() string {
	return fmt.Sprintf("Error on call: %s() return code=%d message=%s", d.FunctionName, d.Code, d.Message)
}