from trinsicokapi.proto.okapi.hashing.v1 import (
    Sha256HashResponse,
    Sha256HashRequest,
    Blake3HashRequest,
    Blake3HashResponse,
    Blake3KeyedHashRequest,
    Blake3KeyedHashResponse,
    Blake3DeriveKeyRequest,
    Blake3DeriveKeyResponse,
)
from trinsicokapi.wrapper import _typed_wrap_and_call


def sha256_hash(request: Sha256HashRequest) -> Sha256HashResponse:
    response = _typed_wrap_and_call("sha256_hash", request, Sha256HashResponse)
    return response


def blake3_hash(request: Blake3HashRequest) -> Blake3HashResponse:
    response = _typed_wrap_and_call("blake3_hash", request, Blake3HashResponse)
    return response


def blake3_keyed_hash(request: Blake3KeyedHashRequest) -> Blake3KeyedHashResponse:
    response = _typed_wrap_and_call(
        "blake3_keyed_hash", request, Blake3KeyedHashResponse
    )
    return response


def blake3_derive_key(request: Blake3DeriveKeyRequest) -> Blake3DeriveKeyResponse:
    response = _typed_wrap_and_call(
        "blake3_derive_key", request, Blake3DeriveKeyResponse
    )
    return response
