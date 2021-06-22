# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: CoreService.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pbmse import pbmse_pb2 as pbmse_dot_pbmse__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='CoreService.proto',
  package='trinsic.services',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x11\x43oreService.proto\x12\x10trinsic.services\x1a\x11pbmse/pbmse.proto\"\x06\n\x04NoOp*\x8b\x01\n\x0eResponseStatus\x12\x0b\n\x07SUCCESS\x10\x00\x12\x18\n\x14WALLET_ACCESS_DENIED\x10\n\x12\x11\n\rWALLET_EXISTS\x10\x0b\x12\x12\n\x0eITEM_NOT_FOUND\x10\x14\x12\x18\n\x13SERIALIZATION_ERROR\x10\xc8\x01\x12\x11\n\rUNKNOWN_ERROR\x10\x64\x32\x45\n\x06\x43ommon\x12;\n\x07Request\x12\x17.pbmse.EncryptedMessage\x1a\x17.pbmse.EncryptedMessageb\x06proto3'
  ,
  dependencies=[pbmse_dot_pbmse__pb2.DESCRIPTOR,])

_RESPONSESTATUS = _descriptor.EnumDescriptor(
  name='ResponseStatus',
  full_name='trinsic.services.ResponseStatus',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='SUCCESS', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='WALLET_ACCESS_DENIED', index=1, number=10,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='WALLET_EXISTS', index=2, number=11,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='ITEM_NOT_FOUND', index=3, number=20,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='SERIALIZATION_ERROR', index=4, number=200,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN_ERROR', index=5, number=100,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=67,
  serialized_end=206,
)
_sym_db.RegisterEnumDescriptor(_RESPONSESTATUS)

ResponseStatus = enum_type_wrapper.EnumTypeWrapper(_RESPONSESTATUS)
SUCCESS = 0
WALLET_ACCESS_DENIED = 10
WALLET_EXISTS = 11
ITEM_NOT_FOUND = 20
SERIALIZATION_ERROR = 200
UNKNOWN_ERROR = 100



_NOOP = _descriptor.Descriptor(
  name='NoOp',
  full_name='trinsic.services.NoOp',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=58,
  serialized_end=64,
)

DESCRIPTOR.message_types_by_name['NoOp'] = _NOOP
DESCRIPTOR.enum_types_by_name['ResponseStatus'] = _RESPONSESTATUS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

NoOp = _reflection.GeneratedProtocolMessageType('NoOp', (_message.Message,), {
  'DESCRIPTOR' : _NOOP,
  '__module__' : 'CoreService_pb2'
  # @@protoc_insertion_point(class_scope:trinsic.services.NoOp)
  })
_sym_db.RegisterMessage(NoOp)



_COMMON = _descriptor.ServiceDescriptor(
  name='Common',
  full_name='trinsic.services.Common',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=208,
  serialized_end=277,
  methods=[
  _descriptor.MethodDescriptor(
    name='Request',
    full_name='trinsic.services.Common.Request',
    index=0,
    containing_service=None,
    input_type=pbmse_dot_pbmse__pb2._ENCRYPTEDMESSAGE,
    output_type=pbmse_dot_pbmse__pb2._ENCRYPTEDMESSAGE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_COMMON)

DESCRIPTOR.services_by_name['Common'] = _COMMON

# @@protoc_insertion_point(module_scope)