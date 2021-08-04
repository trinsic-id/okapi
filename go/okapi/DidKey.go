package okapi

import "C"

func Generate(request *GenerateKeyRequest) (GenerateKeyResponse, error) {
	response := GenerateKeyResponse{}
	key := DidKey{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := key.Generate(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("didkey_generate", code, err)
}

func Resolve(request *ResolveRequest) (ResolveResponse, error) {
	response := ResolveResponse{}
	key := DidKey{}
	requestBuffer, responseBuffer, err := CreateBuffersFromMessage(request)
	code := key.Resolve(requestBuffer, &responseBuffer, &err)
	UnmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, CreateError("didkey_resolve", code, err)
}