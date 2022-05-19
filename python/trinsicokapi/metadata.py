from trinsicokapi.proto.okapi.metadata import MetadataResponse, MetadataRequest
from trinsicokapi.wrapper import _typed_wrap_and_call


def get_metadata() -> MetadataResponse:
    response = _typed_wrap_and_call(
        "okapi_metadata", MetadataRequest(), MetadataResponse
    )
    return response
