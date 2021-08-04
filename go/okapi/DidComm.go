package okapi

import "C"

func Pack(request *PackRequest) (PackResponse, error) {
	response := PackResponse{}
	didcomm := DidComm{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := didcomm.Pack(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("didcomm_pack", code, err)
}

func Unpack(request *UnpackRequest) (UnpackResponse, error) {
	response := UnpackResponse{}
	didcomm := DidComm{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := didcomm.Unpack(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("didcomm_unpack", code, err)
}

func Sign(request *SignRequest) (SignResponse, error) {
	response := SignResponse{}
	didcomm := DidComm{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := didcomm.Sign(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("didcomm_sign", code, err)
}

func Verify(request *VerifyRequest) (VerifyResponse, error) {
	response := VerifyResponse{}
	didcomm := DidComm{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := didcomm.Verify(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("didcomm_verify", code, err)
}