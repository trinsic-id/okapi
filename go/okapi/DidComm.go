package okapi

import (
	"github.com/trinsic-id/okapi/go/okapiproto"
)

type DidCommer interface {
	Pack(request *okapiproto.PackRequest) (*okapiproto.PackResponse, error)
	Unpack(request *okapiproto.UnpackRequest) (*okapiproto.UnpackResponse, error)
	Sign(request *okapiproto.SignRequest) (*okapiproto.SignResponse, error)
	Verify(request *okapiproto.VerifyRequest) (*okapiproto.VerifyResponse, error)
}

func DidComm() DidCommer {
	return &didComm{}
}

type didComm struct{}

func (d *didComm) Pack(request *okapiproto.PackRequest) (*okapiproto.PackResponse, error) {
	response := okapiproto.PackResponse{}
	err := callOkapiNative(request, &response, didcommPack)
	return &response, err
}

func (d *didComm) Unpack(request *okapiproto.UnpackRequest) (*okapiproto.UnpackResponse, error) {
	response := okapiproto.UnpackResponse{}
	err := callOkapiNative(request, &response, didcommUnpack)
	return &response, err
}

func (d *didComm) Sign(request *okapiproto.SignRequest) (*okapiproto.SignResponse, error) {
	response := okapiproto.SignResponse{}
	err := callOkapiNative(request, &response, didcommSign)
	return &response, err
}

func (d *didComm) Verify(request *okapiproto.VerifyRequest) (*okapiproto.VerifyResponse, error) {
	response := okapiproto.VerifyResponse{}
	err := callOkapiNative(request, &response, didcommVerify)
	return &response, err
}
