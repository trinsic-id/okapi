from .proto.okapi.keys import GenerateKeyRequest, GenerateKeyResponse, ResolveRequest, ResolveResponse
from .okapi_utils import typed_wrap_and_call
from .proto.okapi.proofs import CreateProofRequest, CreateProofResponse, VerifyProofRequest, VerifyProofResponse
from .proto.okapi.transport import PackRequest, UnpackRequest, PackResponse, UnpackResponse, SignRequest, \
    SignResponse, VerifyRequest, VerifyResponse


class DIDKey:
    @staticmethod
    def generate(request: GenerateKeyRequest) -> GenerateKeyResponse:
        response = typed_wrap_and_call("didkey_generate", request, GenerateKeyResponse)
        return response

    @staticmethod
    def resolve(request: ResolveRequest) -> ResolveResponse:
        response = typed_wrap_and_call("didkey_resolve", request, ResolveResponse)
        return response


class DIDComm:
    @staticmethod
    def pack(request: PackRequest) -> PackResponse:
        response = typed_wrap_and_call("didcomm_pack", request, PackResponse)
        return response

    @staticmethod
    def unpack(request: UnpackRequest) -> UnpackResponse:
        response = typed_wrap_and_call("didcomm_unpack", request, UnpackResponse)
        return response

    @staticmethod
    def sign(request: SignRequest) -> SignResponse:
        response = typed_wrap_and_call("didcomm_sign", request, SignResponse)
        return response

    @staticmethod
    def verify(request: VerifyRequest) -> VerifyResponse:
        response = typed_wrap_and_call("didcomm_verify", request, VerifyResponse)
        return response


class LDProofs:
    @staticmethod
    def create(request: CreateProofRequest) -> CreateProofResponse:
        response = typed_wrap_and_call("ldproofs_create_proof", request, CreateProofResponse)
        return response

    @staticmethod
    def verify(request: VerifyProofRequest) -> VerifyProofResponse:
        response = typed_wrap_and_call("ldproofs_verify_proof", request, VerifyProofResponse)
        return response
