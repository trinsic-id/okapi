package okapi

import (
	okapi "github.com/trinsic-id/okapi/go/okapi/proto"
)

type DidCommer interface {
	Pack(request *okapi.PackRequest) (*okapi.PackResponse, error)
	Unpack(request *okapi.UnpackRequest) (*okapi.UnpackResponse, error)
	Sign(request *okapi.SignRequest) (*okapi.SignResponse, error)
	Verify(request *okapi.VerifyRequest) (*okapi.VerifyResponse, error)
}

func DidComm() DidCommer {
	return &didComm{}
}

type didComm struct{}

func (d *didComm) Pack(request *okapi.PackRequest) (*okapi.PackResponse, error) {
	response := okapi.PackResponse{}
	err := callOkapiNative(request, &response, didcommPack)
	return &response, err
}

func (d *didComm) Unpack(request *okapi.UnpackRequest) (*okapi.UnpackResponse, error) {
	response := okapi.UnpackResponse{}
	err := callOkapiNative(request, &response, didcommUnpack)
	return &response, err
}

func (d *didComm) Sign(request *okapi.SignRequest) (*okapi.SignResponse, error) {
	response := okapi.SignResponse{}
	err := callOkapiNative(request, &response, didcommSign)
	return &response, err
}

func (d *didComm) Verify(request *okapi.VerifyRequest) (*okapi.VerifyResponse, error) {
	response := okapi.VerifyResponse{}
	err := callOkapiNative(request, &response, didcommVerify)
	return &response, err
}
