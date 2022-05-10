from trinsicokapi.proto.okapi.security.v1 import (
    CreateOberonKeyRequest,
    CreateOberonKeyResponse,
    CreateOberonProofRequest,
    CreateOberonProofResponse,
    CreateOberonTokenRequest,
    CreateOberonTokenResponse,
    BlindOberonTokenResponse,
    BlindOberonTokenRequest,
    UnBlindOberonTokenRequest,
    UnBlindOberonTokenResponse,
    VerifyOberonProofResponse,
    VerifyOberonProofRequest,
)
from trinsicokapi.wrapper import _typed_wrap_and_call


def create_key(request: CreateOberonKeyRequest) -> CreateOberonKeyResponse:
    return _typed_wrap_and_call("oberon_create_key", request, CreateOberonKeyResponse)


def create_proof(request: CreateOberonProofRequest) -> CreateOberonProofResponse:
    return _typed_wrap_and_call(
        "oberon_create_proof", request, CreateOberonProofResponse
    )


def create_token(request: CreateOberonTokenRequest) -> CreateOberonTokenResponse:
    return _typed_wrap_and_call(
        "oberon_create_token", request, CreateOberonTokenResponse
    )


def blind_token(request: BlindOberonTokenRequest) -> BlindOberonTokenResponse:
    return _typed_wrap_and_call("oberon_blind_token", request, BlindOberonTokenResponse)


def unblind_token(request: UnBlindOberonTokenRequest) -> UnBlindOberonTokenResponse:
    return _typed_wrap_and_call(
        "oberon_unblind_token", request, UnBlindOberonTokenResponse
    )


def verify_proof(request: VerifyOberonProofRequest) -> VerifyOberonProofResponse:
    return _typed_wrap_and_call(
        "oberon_verify_proof", request, VerifyOberonProofResponse
    )
