package okapi

import "C"

type DidComm struct{}
type IDidComm interface {
	Pack(request *PackRequest) (*PackResponse, error)
	Unpack(request *UnpackRequest) (*UnpackResponse, error)
	Sign(request *SignRequest) (*SignResponse, error)
	Verify(request *VerifyRequest) (*VerifyResponse, error)
}

func (d DidComm) Pack(request *PackRequest) (*PackResponse, error) {
	response := PackResponse{}
	err := callOkapiNative(request, &response, didcommPack)
	return &response, err
}

func (d DidComm) Unpack(request *UnpackRequest) (*UnpackResponse, error) {
	response := UnpackResponse{}
	err := callOkapiNative(request, &response, didcommUnpack)
	return &response, err
}

func (d DidComm) Sign(request *SignRequest) (*SignResponse, error) {
	response := SignResponse{}
	err := callOkapiNative(request, &response, didcommSign)
	return &response, err
}

func (d DidComm) Verify(request *VerifyRequest) (*VerifyResponse, error) {
	response := VerifyResponse{}
	err := callOkapiNative(request, &response, didcommVerify)
	return &response, err
}