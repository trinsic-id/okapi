package okapi

import "C"

type DidComm struct{}
type IDidComm interface {
	Pack(request *PackRequest) (PackResponse, error)
	Unpack(request *UnpackRequest) (UnpackResponse, error)
	Sign(request *SignRequest) (SignResponse, error)
	Verify(request *VerifyRequest) (VerifyResponse, error)
}

func (d DidComm) Pack(request *PackRequest) (PackResponse, error) {
	response := PackResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := didcomm_pack(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("didcomm_pack", code, err)
}

func (d DidComm) Unpack(request *UnpackRequest) (UnpackResponse, error) {
	response := UnpackResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := didcomm_unpack(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("didcomm_unpack", code, err)
}

func (d DidComm) Sign(request *SignRequest) (SignResponse, error) {
	response := SignResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := didcomm_sign(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("didcomm_sign", code, err)
}

func (d DidComm) Verify(request *VerifyRequest) (VerifyResponse, error) {
	response := VerifyResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := didcomm_verify(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("didcomm_verify", code, err)
}