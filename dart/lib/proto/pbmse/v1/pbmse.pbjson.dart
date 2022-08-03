///
//  Generated code. Do not modify.
//  source: pbmse/v1/pbmse.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use encryptionModeDescriptor instead')
const EncryptionMode$json = const {
  '1': 'EncryptionMode',
  '2': const [
    const {'1': 'ENCRYPTION_MODE_UNSPECIFIED', '2': 0},
    const {'1': 'ENCRYPTION_MODE_DIRECT', '2': 1},
    const {'1': 'ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY', '2': 2},
  ],
};

/// Descriptor for `EncryptionMode`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List encryptionModeDescriptor = $convert.base64Decode(
    'Cg5FbmNyeXB0aW9uTW9kZRIfChtFTkNSWVBUSU9OX01PREVfVU5TUEVDSUZJRUQQABIaChZFTkNSWVBUSU9OX01PREVfRElSRUNUEAESKgomRU5DUllQVElPTl9NT0RFX0NPTlRFTlRfRU5DUllQVElPTl9LRVkQAg==');
@$core.Deprecated('Use encryptionAlgorithmDescriptor instead')
const EncryptionAlgorithm$json = const {
  '1': 'EncryptionAlgorithm',
  '2': const [
    const {'1': 'ENCRYPTION_ALGORITHM_UNSPECIFIED', '2': 0},
    const {'1': 'ENCRYPTION_ALGORITHM_XCHACHA20POLY1305', '2': 1},
    const {'1': 'ENCRYPTION_ALGORITHM_AES_GCM', '2': 2},
  ],
};

/// Descriptor for `EncryptionAlgorithm`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List encryptionAlgorithmDescriptor = $convert.base64Decode(
    'ChNFbmNyeXB0aW9uQWxnb3JpdGhtEiQKIEVOQ1JZUFRJT05fQUxHT1JJVEhNX1VOU1BFQ0lGSUVEEAASKgomRU5DUllQVElPTl9BTEdPUklUSE1fWENIQUNIQTIwUE9MWTEzMDUQARIgChxFTkNSWVBUSU9OX0FMR09SSVRITV9BRVNfR0NNEAI=');
@$core.Deprecated('Use signedMessageDescriptor instead')
const SignedMessage$json = const {
  '1': 'SignedMessage',
  '2': const [
    const {'1': 'payload', '3': 1, '4': 1, '5': 12, '10': 'payload'},
    const {
      '1': 'signatures',
      '3': 2,
      '4': 3,
      '5': 11,
      '6': '.pbmse.v1.Signature',
      '10': 'signatures'
    },
  ],
};

/// Descriptor for `SignedMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signedMessageDescriptor = $convert.base64Decode(
    'Cg1TaWduZWRNZXNzYWdlEhgKB3BheWxvYWQYASABKAxSB3BheWxvYWQSMwoKc2lnbmF0dXJlcxgCIAMoCzITLnBibXNlLnYxLlNpZ25hdHVyZVIKc2lnbmF0dXJlcw==');
@$core.Deprecated('Use signatureDescriptor instead')
const Signature$json = const {
  '1': 'Signature',
  '2': const [
    const {'1': 'header', '3': 1, '4': 1, '5': 12, '10': 'header'},
    const {'1': 'signature', '3': 3, '4': 1, '5': 12, '10': 'signature'},
  ],
};

/// Descriptor for `Signature`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signatureDescriptor = $convert.base64Decode(
    'CglTaWduYXR1cmUSFgoGaGVhZGVyGAEgASgMUgZoZWFkZXISHAoJc2lnbmF0dXJlGAMgASgMUglzaWduYXR1cmU=');
@$core.Deprecated('Use signatureHeaderDescriptor instead')
const SignatureHeader$json = const {
  '1': 'SignatureHeader',
  '2': const [
    const {'1': 'algorithm', '3': 1, '4': 1, '5': 9, '10': 'algorithm'},
    const {'1': 'key_id', '3': 2, '4': 1, '5': 9, '10': 'keyId'},
  ],
};

/// Descriptor for `SignatureHeader`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signatureHeaderDescriptor = $convert.base64Decode(
    'Cg9TaWduYXR1cmVIZWFkZXISHAoJYWxnb3JpdGhtGAEgASgJUglhbGdvcml0aG0SFQoGa2V5X2lkGAIgASgJUgVrZXlJZA==');
@$core.Deprecated('Use encryptedMessageDescriptor instead')
const EncryptedMessage$json = const {
  '1': 'EncryptedMessage',
  '2': const [
    const {'1': 'iv', '3': 1, '4': 1, '5': 12, '10': 'iv'},
    const {'1': 'aad', '3': 2, '4': 1, '5': 12, '10': 'aad'},
    const {'1': 'ciphertext', '3': 3, '4': 1, '5': 12, '10': 'ciphertext'},
    const {'1': 'tag', '3': 4, '4': 1, '5': 12, '10': 'tag'},
    const {
      '1': 'recipients',
      '3': 5,
      '4': 3,
      '5': 11,
      '6': '.pbmse.v1.EncryptionRecipient',
      '10': 'recipients'
    },
  ],
};

/// Descriptor for `EncryptedMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List encryptedMessageDescriptor = $convert.base64Decode(
    'ChBFbmNyeXB0ZWRNZXNzYWdlEg4KAml2GAEgASgMUgJpdhIQCgNhYWQYAiABKAxSA2FhZBIeCgpjaXBoZXJ0ZXh0GAMgASgMUgpjaXBoZXJ0ZXh0EhAKA3RhZxgEIAEoDFIDdGFnEj0KCnJlY2lwaWVudHMYBSADKAsyHS5wYm1zZS52MS5FbmNyeXB0aW9uUmVjaXBpZW50UgpyZWNpcGllbnRz');
@$core.Deprecated('Use encryptionHeaderDescriptor instead')
const EncryptionHeader$json = const {
  '1': 'EncryptionHeader',
  '2': const [
    const {
      '1': 'mode',
      '3': 1,
      '4': 1,
      '5': 14,
      '6': '.pbmse.v1.EncryptionMode',
      '10': 'enc'
    },
    const {
      '1': 'algorithm',
      '3': 2,
      '4': 1,
      '5': 14,
      '6': '.pbmse.v1.EncryptionAlgorithm',
      '10': 'alg'
    },
    const {'1': 'key_id', '3': 3, '4': 1, '5': 9, '10': 'kid'},
    const {'1': 'sender_key_id', '3': 4, '4': 1, '5': 9, '10': 'skid'},
  ],
};

/// Descriptor for `EncryptionHeader`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List encryptionHeaderDescriptor = $convert.base64Decode(
    'ChBFbmNyeXB0aW9uSGVhZGVyEisKBG1vZGUYASABKA4yGC5wYm1zZS52MS5FbmNyeXB0aW9uTW9kZVIDZW5jEjUKCWFsZ29yaXRobRgCIAEoDjIdLnBibXNlLnYxLkVuY3J5cHRpb25BbGdvcml0aG1SA2FsZxITCgZrZXlfaWQYAyABKAlSA2tpZBIbCg1zZW5kZXJfa2V5X2lkGAQgASgJUgRza2lk');
@$core.Deprecated('Use encryptionRecipientDescriptor instead')
const EncryptionRecipient$json = const {
  '1': 'EncryptionRecipient',
  '2': const [
    const {
      '1': 'header',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.pbmse.v1.EncryptionHeader',
      '10': 'unprotected'
    },
    const {'1': 'content_encryption_key', '3': 2, '4': 1, '5': 12, '10': 'cek'},
  ],
};

/// Descriptor for `EncryptionRecipient`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List encryptionRecipientDescriptor = $convert.base64Decode(
    'ChNFbmNyeXB0aW9uUmVjaXBpZW50EjcKBmhlYWRlchgBIAEoCzIaLnBibXNlLnYxLkVuY3J5cHRpb25IZWFkZXJSC3VucHJvdGVjdGVkEiMKFmNvbnRlbnRfZW5jcnlwdGlvbl9rZXkYAiABKAxSA2Nlaw==');
