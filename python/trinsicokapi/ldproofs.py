from trinsicokapi.proto.okapi.proofs.v1 import (
    CreateProofRequest,
    CreateProofResponse,
    VerifyProofResponse,
    VerifyProofRequest,
)
from trinsicokapi.wrapper import _typed_wrap_and_call


def create(request: CreateProofRequest) -> CreateProofResponse:
    response = _typed_wrap_and_call(
        "ldproofs_create_proof", request, CreateProofResponse
    )
    return response


def verify(request: VerifyProofRequest) -> VerifyProofResponse:
    response = _typed_wrap_and_call(
        "ldproofs_verify_proof", request, VerifyProofResponse
    )
    return response
