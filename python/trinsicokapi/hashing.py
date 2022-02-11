from trinsicokapi.wrapper import _typed_wrap_and_call

from trinsicokapi.proto.okapi.hashing.v1 import *


def blake3_hash(request: Blake3HashRequest) -> Blake3HashResponse:
    response = _typed_wrap_and_call("blake3_hash", request, Blake3HashResponse)
    return response


def blake3_keyed_hash(request: Blake3KeyedHashRequest) -> Blake3KeyedHashResponse:
    response = _typed_wrap_and_call("blake3_keyed_hash", request, Blake3KeyedHashResponse)
    return response


def blake3_derive_key(request: Blake3DeriveKeyRequest) -> Blake3DeriveKeyResponse:
    response = _typed_wrap_and_call("blake3_derive_key", request, Blake3DeriveKeyResponse)
    return response
