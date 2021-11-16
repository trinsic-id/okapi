from trinsicokapi.proto.okapi.keys.v1 import GenerateKeyRequest, GenerateKeyResponse, ResolveResponse, ResolveRequest
from trinsicokapi.wrapper import _typed_wrap_and_call


def generate(request: GenerateKeyRequest) -> GenerateKeyResponse:
    response = _typed_wrap_and_call("didkey_generate", request, GenerateKeyResponse)
    return response


def resolve(request: ResolveRequest) -> ResolveResponse:
    response = _typed_wrap_and_call("didkey_resolve", request, ResolveResponse)
    return response
