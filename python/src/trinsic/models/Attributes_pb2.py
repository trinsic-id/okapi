# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: models/Attributes.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='models/Attributes.proto',
  package='trinsic.services',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x17models/Attributes.proto\x12\x10trinsic.services\x1a\x1bgoogle/protobuf/empty.proto\"c\n\tAttribute\x12\n\n\x02Id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12-\n\x04type\x18\x03 \x01(\x0e\x32\x1f.trinsic.services.AttributeType\x12\r\n\x05value\x18\x04 \x01(\t\"\x19\n\x0b\x41ttributeId\x12\n\n\x02Id\x18\x01 \x01(\t\"I\n\x16ListAttributesResponse\x12/\n\nattributes\x18\x01 \x03(\x0b\x32\x1b.trinsic.services.Attribute*9\n\rAttributeType\x12\x08\n\x04\x64\x61te\x10\x00\x12\n\n\x06number\x10\x01\x12\x08\n\x04text\x10\x02\x12\x08\n\x04\x65num\x10\x03\x62\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,])

_ATTRIBUTETYPE = _descriptor.EnumDescriptor(
  name='AttributeType',
  full_name='trinsic.services.AttributeType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='date', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='number', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='text', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='enum', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=277,
  serialized_end=334,
)
_sym_db.RegisterEnumDescriptor(_ATTRIBUTETYPE)

AttributeType = enum_type_wrapper.EnumTypeWrapper(_ATTRIBUTETYPE)
date = 0
number = 1
text = 2
enum = 3



_ATTRIBUTE = _descriptor.Descriptor(
  name='Attribute',
  full_name='trinsic.services.Attribute',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='Id', full_name='trinsic.services.Attribute.Id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='trinsic.services.Attribute.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='trinsic.services.Attribute.type', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='trinsic.services.Attribute.value', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=74,
  serialized_end=173,
)


_ATTRIBUTEID = _descriptor.Descriptor(
  name='AttributeId',
  full_name='trinsic.services.AttributeId',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='Id', full_name='trinsic.services.AttributeId.Id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=175,
  serialized_end=200,
)


_LISTATTRIBUTESRESPONSE = _descriptor.Descriptor(
  name='ListAttributesResponse',
  full_name='trinsic.services.ListAttributesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='attributes', full_name='trinsic.services.ListAttributesResponse.attributes', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=202,
  serialized_end=275,
)

_ATTRIBUTE.fields_by_name['type'].enum_type = _ATTRIBUTETYPE
_LISTATTRIBUTESRESPONSE.fields_by_name['attributes'].message_type = _ATTRIBUTE
DESCRIPTOR.message_types_by_name['Attribute'] = _ATTRIBUTE
DESCRIPTOR.message_types_by_name['AttributeId'] = _ATTRIBUTEID
DESCRIPTOR.message_types_by_name['ListAttributesResponse'] = _LISTATTRIBUTESRESPONSE
DESCRIPTOR.enum_types_by_name['AttributeType'] = _ATTRIBUTETYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Attribute = _reflection.GeneratedProtocolMessageType('Attribute', (_message.Message,), {
  'DESCRIPTOR' : _ATTRIBUTE,
  '__module__' : 'models.Attributes_pb2'
  # @@protoc_insertion_point(class_scope:trinsic.services.Attribute)
  })
_sym_db.RegisterMessage(Attribute)

AttributeId = _reflection.GeneratedProtocolMessageType('AttributeId', (_message.Message,), {
  'DESCRIPTOR' : _ATTRIBUTEID,
  '__module__' : 'models.Attributes_pb2'
  # @@protoc_insertion_point(class_scope:trinsic.services.AttributeId)
  })
_sym_db.RegisterMessage(AttributeId)

ListAttributesResponse = _reflection.GeneratedProtocolMessageType('ListAttributesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTATTRIBUTESRESPONSE,
  '__module__' : 'models.Attributes_pb2'
  # @@protoc_insertion_point(class_scope:trinsic.services.ListAttributesResponse)
  })
_sym_db.RegisterMessage(ListAttributesResponse)


# @@protoc_insertion_point(module_scope)