from trinsicokapi.proto.okapi.transport.v1 import (
    VerifyRequest,
    SignRequest,
    UnpackRequest,
    PackRequest,
    PackResponse,
    UnpackResponse,
    SignResponse,
    VerifyResponse,
)
from trinsicokapi.wrapper import _typed_wrap_and_call


def pack(request: PackRequest) -> PackResponse:
    response = _typed_wrap_and_call("didcomm_pack", request, PackResponse)
    return response


def unpack(request: UnpackRequest) -> UnpackResponse:
    response = _typed_wrap_and_call("didcomm_unpack", request, UnpackResponse)
    return response


def sign(request: SignRequest) -> SignResponse:
    response = _typed_wrap_and_call("didcomm_sign", request, SignResponse)
    return response


def verify(request: VerifyRequest) -> VerifyResponse:
    response = _typed_wrap_and_call("didcomm_verify", request, VerifyResponse)
    return response
