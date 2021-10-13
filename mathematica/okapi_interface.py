import okapi
from okapi.keys import GenerateKeyRequest

def didkey_create(seed):
	request = GenerateKeyRequest()
	request.seed = seed
	return okapi.wrapper.DIDKey.generate(request)
