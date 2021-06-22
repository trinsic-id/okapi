# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: models/Organizations.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='models/Organizations.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1amodels/Organizations.proto\"\xa8\x01\n\x0cOrganization\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12.\n\x0c\x63\x61pabilities\x18\x03 \x03(\x0e\x32\x18.Organization.Capability\x12\x18\n\x07members\x18\x04 \x03(\x0b\x32\x07.Member\"4\n\nCapability\x12\x0c\n\x08VERIFIER\x10\x00\x12\n\n\x06ISSUER\x10\x01\x12\x0c\n\x08PROVIDER\x10\x02\"%\n\x06Member\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\"@\n\x19\x43reateOrganizationRequest\x12#\n\x0corganization\x18\x01 \x01(\x0b\x32\r.Organization\"A\n\x1a\x43reateOrganizationResponse\x12#\n\x0corganization\x18\x02 \x01(\x0b\x32\r.Organization\"\x19\n\x17ListOrganizationRequest\"?\n\x18ListOrganizationResponse\x12#\n\x0corganization\x18\x01 \x03(\x0b\x32\r.Organizationb\x06proto3'
)



_ORGANIZATION_CAPABILITY = _descriptor.EnumDescriptor(
  name='Capability',
  full_name='Organization.Capability',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='VERIFIER', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='ISSUER', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='PROVIDER', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=147,
  serialized_end=199,
)
_sym_db.RegisterEnumDescriptor(_ORGANIZATION_CAPABILITY)


_ORGANIZATION = _descriptor.Descriptor(
  name='Organization',
  full_name='Organization',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='Organization.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='Organization.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='capabilities', full_name='Organization.capabilities', index=2,
      number=3, type=14, cpp_type=8, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='members', full_name='Organization.members', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _ORGANIZATION_CAPABILITY,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=31,
  serialized_end=199,
)


_MEMBER = _descriptor.Descriptor(
  name='Member',
  full_name='Member',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='Member.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='email', full_name='Member.email', index=1,
      number=2, type=9, cpp_type=9, label=1,
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
  serialized_start=201,
  serialized_end=238,
)


_CREATEORGANIZATIONREQUEST = _descriptor.Descriptor(
  name='CreateOrganizationRequest',
  full_name='CreateOrganizationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='CreateOrganizationRequest.organization', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=240,
  serialized_end=304,
)


_CREATEORGANIZATIONRESPONSE = _descriptor.Descriptor(
  name='CreateOrganizationResponse',
  full_name='CreateOrganizationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='CreateOrganizationResponse.organization', index=0,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=306,
  serialized_end=371,
)


_LISTORGANIZATIONREQUEST = _descriptor.Descriptor(
  name='ListOrganizationRequest',
  full_name='ListOrganizationRequest',
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
  serialized_start=373,
  serialized_end=398,
)


_LISTORGANIZATIONRESPONSE = _descriptor.Descriptor(
  name='ListOrganizationResponse',
  full_name='ListOrganizationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='ListOrganizationResponse.organization', index=0,
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
  serialized_start=400,
  serialized_end=463,
)

_ORGANIZATION.fields_by_name['capabilities'].enum_type = _ORGANIZATION_CAPABILITY
_ORGANIZATION.fields_by_name['members'].message_type = _MEMBER
_ORGANIZATION_CAPABILITY.containing_type = _ORGANIZATION
_CREATEORGANIZATIONREQUEST.fields_by_name['organization'].message_type = _ORGANIZATION
_CREATEORGANIZATIONRESPONSE.fields_by_name['organization'].message_type = _ORGANIZATION
_LISTORGANIZATIONRESPONSE.fields_by_name['organization'].message_type = _ORGANIZATION
DESCRIPTOR.message_types_by_name['Organization'] = _ORGANIZATION
DESCRIPTOR.message_types_by_name['Member'] = _MEMBER
DESCRIPTOR.message_types_by_name['CreateOrganizationRequest'] = _CREATEORGANIZATIONREQUEST
DESCRIPTOR.message_types_by_name['CreateOrganizationResponse'] = _CREATEORGANIZATIONRESPONSE
DESCRIPTOR.message_types_by_name['ListOrganizationRequest'] = _LISTORGANIZATIONREQUEST
DESCRIPTOR.message_types_by_name['ListOrganizationResponse'] = _LISTORGANIZATIONRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Organization = _reflection.GeneratedProtocolMessageType('Organization', (_message.Message,), {
  'DESCRIPTOR' : _ORGANIZATION,
  '__module__' : 'models.Organizations_pb2'
  # @@protoc_insertion_point(class_scope:Organization)
  })
_sym_db.RegisterMessage(Organization)

Member = _reflection.GeneratedProtocolMessageType('Member', (_message.Message,), {
  'DESCRIPTOR' : _MEMBER,
  '__module__' : 'models.Organizations_pb2'
  # @@protoc_insertion_point(class_scope:Member)
  })
_sym_db.RegisterMessage(Member)

CreateOrganizationRequest = _reflection.GeneratedProtocolMessageType('CreateOrganizationRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEORGANIZATIONREQUEST,
  '__module__' : 'models.Organizations_pb2'
  # @@protoc_insertion_point(class_scope:CreateOrganizationRequest)
  })
_sym_db.RegisterMessage(CreateOrganizationRequest)

CreateOrganizationResponse = _reflection.GeneratedProtocolMessageType('CreateOrganizationResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEORGANIZATIONRESPONSE,
  '__module__' : 'models.Organizations_pb2'
  # @@protoc_insertion_point(class_scope:CreateOrganizationResponse)
  })
_sym_db.RegisterMessage(CreateOrganizationResponse)

ListOrganizationRequest = _reflection.GeneratedProtocolMessageType('ListOrganizationRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTORGANIZATIONREQUEST,
  '__module__' : 'models.Organizations_pb2'
  # @@protoc_insertion_point(class_scope:ListOrganizationRequest)
  })
_sym_db.RegisterMessage(ListOrganizationRequest)

ListOrganizationResponse = _reflection.GeneratedProtocolMessageType('ListOrganizationResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTORGANIZATIONRESPONSE,
  '__module__' : 'models.Organizations_pb2'
  # @@protoc_insertion_point(class_scope:ListOrganizationResponse)
  })
_sym_db.RegisterMessage(ListOrganizationResponse)


# @@protoc_insertion_point(module_scope)