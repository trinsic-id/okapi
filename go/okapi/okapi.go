package okapi

import "C"
import (
	pb "didcomm.org/grpc/messaging"
	"github.com/golang/protobuf/proto"
	"golang.org/x/sys/windows"
	"log"
	"unsafe"
)

type IDidKey interface {
	generate(request pb.GenerateKeyRequest) pb.GenerateKeyResponse
	resolve(request pb.ResolveRequest) pb.ResolveResponse
}

type IDidComm interface {
	pack(request pb.PackRequest) pb.PackResponse
	unpack(request pb.UnpackRequest) pb.UnpackResponse
	sign(request pb.SignRequest) pb.SignResponse
	verify(request pb.VerifyRequest) pb.VerifyResponse

	byteBufferFree(v C.ByteBuffer)
	stringFree(s *C.uint8_t)
}

type ILdProofs interface {
	createProof(request pb.CreateProofRequest) pb.CreateProofResponse
	verifyProof(request pb.VerifyProofRequest) pb.VerifyProofResponse
}

var okapiDll = windows.DLL(nil)

type DidKey struct {}
type DidComm struct {}
type LdProofs struct {}

func (x DidKey) generate(request *pb.GenerateKeyRequest) {
	out, e := proto.Marshal(request)
	if e != nil {
		log.Fatalln("Failed to encode generateKeyRequest:", e)
	}
	requestBuffer := C.ByteBuffer { len: 0, data: (*C.uint8_t)(unsafe.Pointer(&out)) }
	responseBuffer := C.ByteBuffer { }
	err := C.ExternError { }

	okapiDll, _ := windows.LoadDLL("../libs/windows/okapi.dll")
	didkeyGenerate, _ := okapiDll.FindProc("didkey_generate")

	code, _, _ := didkeyGenerate.Call(uintptr(unsafe.Pointer(&requestBuffer)), uintptr(unsafe.Pointer(&responseBuffer)), uintptr(unsafe.Pointer(&err)))
}