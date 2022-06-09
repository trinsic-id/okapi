package okapi

import "github.com/trinsic-id/okapi/go/okapi/transport/v1/transport"

// DidCommer implements the DIDComm Messaging protocol
type DidCommer interface {
	Pack(request *transport.PackRequest) (*transport.PackResponse, error)
	Unpack(request *transport.UnpackRequest) (*transport.UnpackResponse, error)
	Sign(request *transport.SignRequest) (*transport.SignResponse, error)
	Verify(request *transport.VerifyRequest) (*transport.VerifyResponse, error)
}

// DidComm implements the DIDComm Messaging protocol
func DidComm() DidCommer {
	return &didComm{}
}

type didComm struct{}

func (d *didComm) Pack(request *transport.PackRequest) (*transport.PackResponse, error) {
	response := transport.PackResponse{}
	err := callOkapiNative(request, &response, "didcomm_pack")
	return &response, err
}

func (d *didComm) Unpack(request *transport.UnpackRequest) (*transport.UnpackResponse, error) {
	response := transport.UnpackResponse{}
	err := callOkapiNative(request, &response, "didcomm_unpack")
	return &response, err
}

func (d *didComm) Sign(request *transport.SignRequest) (*transport.SignResponse, error) {
	response := transport.SignResponse{}
	err := callOkapiNative(request, &response, "didcomm_sign")
	return &response, err
}

func (d *didComm) Verify(request *transport.VerifyRequest) (*transport.VerifyResponse, error) {
	response := transport.VerifyResponse{}
	err := callOkapiNative(request, &response, "didcomm_verify")
	return &response, err
}
