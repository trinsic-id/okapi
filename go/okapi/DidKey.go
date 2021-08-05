package okapi

import "C"

type DidKey struct {}
type IDidKey interface {
	Generate(request *GenerateKeyRequest) (GenerateKeyResponse, error)
	Resolve(request *ResolveRequest) (ResolveResponse, error)
}

func (d DidKey) Generate(request *GenerateKeyRequest) (GenerateKeyResponse, error) {
	response := GenerateKeyResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := didkey_generate(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("didkey_generate", code, err)
}

func (d DidKey) Resolve(request *ResolveRequest) (ResolveResponse, error) {
	response := ResolveResponse{}
	requestBuffer, responseBuffer, err := createBuffersFromMessage(request)
	code := didkey_resolve(requestBuffer, &responseBuffer, &err)
	unmarshalResponse(responseBuffer, &response, requestBuffer)
	return response, createError("didkey_resolve", code, err)
}