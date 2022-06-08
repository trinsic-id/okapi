# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: okapi/transport/v1/transport.proto
# plugin: python-betterproto
from dataclasses import dataclass
from typing import List

import betterproto

from .okapi.keys import v1
from .pbmse import v1


@dataclass
class SignRequest(betterproto.Message):
    payload: bytes = betterproto.bytes_field(1)
    key: v1.JsonWebKey = betterproto.message_field(2)
    append_to: v1.SignedMessage = betterproto.message_field(3)


@dataclass
class SignResponse(betterproto.Message):
    message: v1.SignedMessage = betterproto.message_field(1)


@dataclass
class VerifyRequest(betterproto.Message):
    message: v1.SignedMessage = betterproto.message_field(1)
    key: v1.JsonWebKey = betterproto.message_field(2)


@dataclass
class VerifyResponse(betterproto.Message):
    is_valid: bool = betterproto.bool_field(1)


@dataclass
class PackRequest(betterproto.Message):
    sender_key: v1.JsonWebKey = betterproto.message_field(1)
    receiver_key: v1.JsonWebKey = betterproto.message_field(2)
    associated_data: bytes = betterproto.bytes_field(3)
    plaintext: bytes = betterproto.bytes_field(4)
    mode: v1.EncryptionMode = betterproto.enum_field(5)
    algorithm: v1.EncryptionAlgorithm = betterproto.enum_field(6)


@dataclass
class PackResponse(betterproto.Message):
    message: v1.EncryptedMessage = betterproto.message_field(1)


@dataclass
class UnpackRequest(betterproto.Message):
    sender_key: v1.JsonWebKey = betterproto.message_field(1)
    receiver_key: v1.JsonWebKey = betterproto.message_field(2)
    message: v1.EncryptedMessage = betterproto.message_field(3)


@dataclass
class UnpackResponse(betterproto.Message):
    plaintext: bytes = betterproto.bytes_field(1)


@dataclass
class CoreMessage(betterproto.Message):
    id: str = betterproto.string_field(1)
    type: str = betterproto.string_field(2)
    body: bytes = betterproto.bytes_field(3)
    to: List[str] = betterproto.string_field(4)
    from_: str = betterproto.string_field(5)
    created: int = betterproto.int64_field(6)
    expires: int = betterproto.int64_field(7)
