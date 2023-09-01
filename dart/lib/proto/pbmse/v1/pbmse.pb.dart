//
//  Generated code. Do not modify.
//  source: pbmse/v1/pbmse.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'pbmse.pbenum.dart';

export 'pbmse.pbenum.dart';

/// JWS
/// Protocol buffer message signing and encryption
class SignedMessage extends $pb.GeneratedMessage {
  factory SignedMessage({
    $core.List<$core.int>? payload,
    $core.Iterable<Signature>? signatures,
  }) {
    final $result = create();
    if (payload != null) {
      $result.payload = payload;
    }
    if (signatures != null) {
      $result.signatures.addAll(signatures);
    }
    return $result;
  }
  SignedMessage._() : super();
  factory SignedMessage.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory SignedMessage.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'SignedMessage',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'pbmse.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1, _omitFieldNames ? '' : 'payload', $pb.PbFieldType.OY)
    ..pc<Signature>(2, _omitFieldNames ? '' : 'signatures', $pb.PbFieldType.PM,
        subBuilder: Signature.create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  SignedMessage clone() => SignedMessage()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  SignedMessage copyWith(void Function(SignedMessage) updates) =>
      super.copyWith((message) => updates(message as SignedMessage))
          as SignedMessage;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static SignedMessage create() => SignedMessage._();
  SignedMessage createEmptyInstance() => create();
  static $pb.PbList<SignedMessage> createRepeated() =>
      $pb.PbList<SignedMessage>();
  @$core.pragma('dart2js:noInline')
  static SignedMessage getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<SignedMessage>(create);
  static SignedMessage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get payload => $_getN(0);
  @$pb.TagNumber(1)
  set payload($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasPayload() => $_has(0);
  @$pb.TagNumber(1)
  void clearPayload() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<Signature> get signatures => $_getList(1);
}

class Signature extends $pb.GeneratedMessage {
  factory Signature({
    $core.List<$core.int>? header,
    $core.List<$core.int>? signature,
  }) {
    final $result = create();
    if (header != null) {
      $result.header = header;
    }
    if (signature != null) {
      $result.signature = signature;
    }
    return $result;
  }
  Signature._() : super();
  factory Signature.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Signature.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'Signature',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'pbmse.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1, _omitFieldNames ? '' : 'header', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(
        3, _omitFieldNames ? '' : 'signature', $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Signature clone() => Signature()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Signature copyWith(void Function(Signature) updates) =>
      super.copyWith((message) => updates(message as Signature)) as Signature;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static Signature create() => Signature._();
  Signature createEmptyInstance() => create();
  static $pb.PbList<Signature> createRepeated() => $pb.PbList<Signature>();
  @$core.pragma('dart2js:noInline')
  static Signature getDefault() =>
      _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Signature>(create);
  static Signature? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get header => $_getN(0);
  @$pb.TagNumber(1)
  set header($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasHeader() => $_has(0);
  @$pb.TagNumber(1)
  void clearHeader() => clearField(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(3)
  set signature($core.List<$core.int> v) {
    $_setBytes(1, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(3)
  void clearSignature() => clearField(3);
}

class SignatureHeader extends $pb.GeneratedMessage {
  factory SignatureHeader({
    $core.String? algorithm,
    $core.String? keyId,
  }) {
    final $result = create();
    if (algorithm != null) {
      $result.algorithm = algorithm;
    }
    if (keyId != null) {
      $result.keyId = keyId;
    }
    return $result;
  }
  SignatureHeader._() : super();
  factory SignatureHeader.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory SignatureHeader.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'SignatureHeader',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'pbmse.v1'),
      createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'algorithm')
    ..aOS(2, _omitFieldNames ? '' : 'keyId')
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  SignatureHeader clone() => SignatureHeader()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  SignatureHeader copyWith(void Function(SignatureHeader) updates) =>
      super.copyWith((message) => updates(message as SignatureHeader))
          as SignatureHeader;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static SignatureHeader create() => SignatureHeader._();
  SignatureHeader createEmptyInstance() => create();
  static $pb.PbList<SignatureHeader> createRepeated() =>
      $pb.PbList<SignatureHeader>();
  @$core.pragma('dart2js:noInline')
  static SignatureHeader getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<SignatureHeader>(create);
  static SignatureHeader? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get algorithm => $_getSZ(0);
  @$pb.TagNumber(1)
  set algorithm($core.String v) {
    $_setString(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasAlgorithm() => $_has(0);
  @$pb.TagNumber(1)
  void clearAlgorithm() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get keyId => $_getSZ(1);
  @$pb.TagNumber(2)
  set keyId($core.String v) {
    $_setString(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasKeyId() => $_has(1);
  @$pb.TagNumber(2)
  void clearKeyId() => clearField(2);
}

class EncryptedMessage extends $pb.GeneratedMessage {
  factory EncryptedMessage({
    $core.List<$core.int>? iv,
    $core.List<$core.int>? aad,
    $core.List<$core.int>? ciphertext,
    $core.List<$core.int>? tag,
    $core.Iterable<EncryptionRecipient>? recipients,
  }) {
    final $result = create();
    if (iv != null) {
      $result.iv = iv;
    }
    if (aad != null) {
      $result.aad = aad;
    }
    if (ciphertext != null) {
      $result.ciphertext = ciphertext;
    }
    if (tag != null) {
      $result.tag = tag;
    }
    if (recipients != null) {
      $result.recipients.addAll(recipients);
    }
    return $result;
  }
  EncryptedMessage._() : super();
  factory EncryptedMessage.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory EncryptedMessage.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'EncryptedMessage',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'pbmse.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1, _omitFieldNames ? '' : 'iv', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(
        2, _omitFieldNames ? '' : 'aad', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(
        3, _omitFieldNames ? '' : 'ciphertext', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(
        4, _omitFieldNames ? '' : 'tag', $pb.PbFieldType.OY)
    ..pc<EncryptionRecipient>(
        5, _omitFieldNames ? '' : 'recipients', $pb.PbFieldType.PM,
        subBuilder: EncryptionRecipient.create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  EncryptedMessage clone() => EncryptedMessage()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  EncryptedMessage copyWith(void Function(EncryptedMessage) updates) =>
      super.copyWith((message) => updates(message as EncryptedMessage))
          as EncryptedMessage;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static EncryptedMessage create() => EncryptedMessage._();
  EncryptedMessage createEmptyInstance() => create();
  static $pb.PbList<EncryptedMessage> createRepeated() =>
      $pb.PbList<EncryptedMessage>();
  @$core.pragma('dart2js:noInline')
  static EncryptedMessage getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<EncryptedMessage>(create);
  static EncryptedMessage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get iv => $_getN(0);
  @$pb.TagNumber(1)
  set iv($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasIv() => $_has(0);
  @$pb.TagNumber(1)
  void clearIv() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get aad => $_getN(1);
  @$pb.TagNumber(2)
  set aad($core.List<$core.int> v) {
    $_setBytes(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasAad() => $_has(1);
  @$pb.TagNumber(2)
  void clearAad() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get ciphertext => $_getN(2);
  @$pb.TagNumber(3)
  set ciphertext($core.List<$core.int> v) {
    $_setBytes(2, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasCiphertext() => $_has(2);
  @$pb.TagNumber(3)
  void clearCiphertext() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get tag => $_getN(3);
  @$pb.TagNumber(4)
  set tag($core.List<$core.int> v) {
    $_setBytes(3, v);
  }

  @$pb.TagNumber(4)
  $core.bool hasTag() => $_has(3);
  @$pb.TagNumber(4)
  void clearTag() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<EncryptionRecipient> get recipients => $_getList(4);
}

class EncryptionHeader extends $pb.GeneratedMessage {
  factory EncryptionHeader({
    EncryptionMode? mode,
    EncryptionAlgorithm? algorithm,
    $core.String? keyId,
    $core.String? senderKeyId,
  }) {
    final $result = create();
    if (mode != null) {
      $result.mode = mode;
    }
    if (algorithm != null) {
      $result.algorithm = algorithm;
    }
    if (keyId != null) {
      $result.keyId = keyId;
    }
    if (senderKeyId != null) {
      $result.senderKeyId = senderKeyId;
    }
    return $result;
  }
  EncryptionHeader._() : super();
  factory EncryptionHeader.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory EncryptionHeader.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'EncryptionHeader',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'pbmse.v1'),
      createEmptyInstance: create)
    ..e<EncryptionMode>(1, _omitFieldNames ? '' : 'enc', $pb.PbFieldType.OE,
        protoName: 'mode',
        defaultOrMaker: EncryptionMode.ENCRYPTION_MODE_UNSPECIFIED,
        valueOf: EncryptionMode.valueOf,
        enumValues: EncryptionMode.values)
    ..e<EncryptionAlgorithm>(
        2, _omitFieldNames ? '' : 'alg', $pb.PbFieldType.OE,
        protoName: 'algorithm',
        defaultOrMaker: EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED,
        valueOf: EncryptionAlgorithm.valueOf,
        enumValues: EncryptionAlgorithm.values)
    ..aOS(3, _omitFieldNames ? '' : 'kid', protoName: 'key_id')
    ..aOS(4, _omitFieldNames ? '' : 'skid', protoName: 'sender_key_id')
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  EncryptionHeader clone() => EncryptionHeader()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  EncryptionHeader copyWith(void Function(EncryptionHeader) updates) =>
      super.copyWith((message) => updates(message as EncryptionHeader))
          as EncryptionHeader;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static EncryptionHeader create() => EncryptionHeader._();
  EncryptionHeader createEmptyInstance() => create();
  static $pb.PbList<EncryptionHeader> createRepeated() =>
      $pb.PbList<EncryptionHeader>();
  @$core.pragma('dart2js:noInline')
  static EncryptionHeader getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<EncryptionHeader>(create);
  static EncryptionHeader? _defaultInstance;

  @$pb.TagNumber(1)
  EncryptionMode get mode => $_getN(0);
  @$pb.TagNumber(1)
  set mode(EncryptionMode v) {
    setField(1, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasMode() => $_has(0);
  @$pb.TagNumber(1)
  void clearMode() => clearField(1);

  @$pb.TagNumber(2)
  EncryptionAlgorithm get algorithm => $_getN(1);
  @$pb.TagNumber(2)
  set algorithm(EncryptionAlgorithm v) {
    setField(2, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasAlgorithm() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlgorithm() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get keyId => $_getSZ(2);
  @$pb.TagNumber(3)
  set keyId($core.String v) {
    $_setString(2, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasKeyId() => $_has(2);
  @$pb.TagNumber(3)
  void clearKeyId() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get senderKeyId => $_getSZ(3);
  @$pb.TagNumber(4)
  set senderKeyId($core.String v) {
    $_setString(3, v);
  }

  @$pb.TagNumber(4)
  $core.bool hasSenderKeyId() => $_has(3);
  @$pb.TagNumber(4)
  void clearSenderKeyId() => clearField(4);
}

class EncryptionRecipient extends $pb.GeneratedMessage {
  factory EncryptionRecipient({
    EncryptionHeader? header,
    $core.List<$core.int>? contentEncryptionKey,
  }) {
    final $result = create();
    if (header != null) {
      $result.header = header;
    }
    if (contentEncryptionKey != null) {
      $result.contentEncryptionKey = contentEncryptionKey;
    }
    return $result;
  }
  EncryptionRecipient._() : super();
  factory EncryptionRecipient.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory EncryptionRecipient.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'EncryptionRecipient',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'pbmse.v1'),
      createEmptyInstance: create)
    ..aOM<EncryptionHeader>(1, _omitFieldNames ? '' : 'unprotected',
        protoName: 'header', subBuilder: EncryptionHeader.create)
    ..a<$core.List<$core.int>>(
        2, _omitFieldNames ? '' : 'cek', $pb.PbFieldType.OY,
        protoName: 'content_encryption_key')
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  EncryptionRecipient clone() => EncryptionRecipient()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  EncryptionRecipient copyWith(void Function(EncryptionRecipient) updates) =>
      super.copyWith((message) => updates(message as EncryptionRecipient))
          as EncryptionRecipient;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static EncryptionRecipient create() => EncryptionRecipient._();
  EncryptionRecipient createEmptyInstance() => create();
  static $pb.PbList<EncryptionRecipient> createRepeated() =>
      $pb.PbList<EncryptionRecipient>();
  @$core.pragma('dart2js:noInline')
  static EncryptionRecipient getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<EncryptionRecipient>(create);
  static EncryptionRecipient? _defaultInstance;

  @$pb.TagNumber(1)
  EncryptionHeader get header => $_getN(0);
  @$pb.TagNumber(1)
  set header(EncryptionHeader v) {
    setField(1, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasHeader() => $_has(0);
  @$pb.TagNumber(1)
  void clearHeader() => clearField(1);
  @$pb.TagNumber(1)
  EncryptionHeader ensureHeader() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get contentEncryptionKey => $_getN(1);
  @$pb.TagNumber(2)
  set contentEncryptionKey($core.List<$core.int> v) {
    $_setBytes(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasContentEncryptionKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearContentEncryptionKey() => clearField(2);
}

const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames =
    $core.bool.fromEnvironment('protobuf.omit_message_names');
