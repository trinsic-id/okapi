package okapi

import "github.com/trinsic-id/okapi/go/proto"

type DidComm struct{}
type DidCommer interface {
	Pack(request *proto.PackRequest) (*proto.PackResponse, error)
	Unpack(request *proto.UnpackRequest) (*proto.UnpackResponse, error)
	Sign(request *proto.SignRequest) (*proto.SignResponse, error)
	Verify(request *proto.VerifyRequest) (*proto.VerifyResponse, error)
}

func (d DidComm) Pack(request *proto.PackRequest) (*proto.PackResponse, error) {
	response := proto.PackResponse{}
	err := callOkapiNative(request, &response, didcommPack)
	return &response, err
}

func (d DidComm) Unpack(request *proto.UnpackRequest) (*proto.UnpackResponse, error) {
	response := proto.UnpackResponse{}
	err := callOkapiNative(request, &response, didcommUnpack)
	return &response, err
}

func (d DidComm) Sign(request *proto.SignRequest) (*proto.SignResponse, error) {
	response := proto.SignResponse{}
	err := callOkapiNative(request, &response, didcommSign)
	return &response, err
}

func (d DidComm) Verify(request *proto.VerifyRequest) (*proto.VerifyResponse, error) {
	response := proto.VerifyResponse{}
	err := callOkapiNative(request, &response, didcommVerify)
	return &response, err
}