import 'dart:ffi';

import 'package:okapi_dart/okapi_native.dart';
import 'package:okapi_dart/proto/okapi/hashing/v1/hashing.pb.dart';
import 'package:okapi_dart/proto/okapi/keys/v1/keys.pb.dart';
import 'package:okapi_dart/proto/okapi/proofs/v1/proofs.pb.dart';
import 'package:okapi_dart/proto/okapi/transport/v1/transport.pb.dart';

class DidComm {
  static final _didcommPack = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('didcomm_pack');
  static final _didcommUnpack = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('didcomm_unpack');
  static final _didcommSign = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('didcomm_sign');
  static final _didcommVerify = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('didcomm_verify');

  PackResponse pack(PackRequest request) =>
      OkapiNative.nativeCall(_didcommPack, request, PackResponse());

  UnpackResponse unpack(UnpackRequest request) =>
      OkapiNative.nativeCall(_didcommUnpack, request, UnpackResponse());

  SignResponse sign(SignRequest request) =>
      OkapiNative.nativeCall(_didcommSign, request, SignResponse());

  VerifyResponse verify(VerifyRequest request) =>
      OkapiNative.nativeCall(_didcommVerify, request, VerifyResponse());
}

class DidKey {
  static final _didkeyGenerate = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('didkey_generate');
  static final _didkeyResolve = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('didkey_resolve');

  static GenerateKeyResponse generate(GenerateKeyRequest request) =>
      OkapiNative.nativeCall(_didkeyGenerate, request, GenerateKeyResponse());

  static ResolveResponse resolve(ResolveRequest request) =>
      OkapiNative.nativeCall(_didkeyResolve, request, ResolveResponse());
}

class LdProofs {
  static final _ldproofsCreateProof = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('ldproofs_create_proof');
  static final _ldproofsVerifyProof = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('ldproofs_verify_proof');

  static CreateProofResponse createProof(CreateProofRequest request) =>
      OkapiNative.nativeCall(_ldproofsCreateProof, request, CreateProofResponse());

  static VerifyProofResponse verifyProof(VerifyProofRequest request) =>
      OkapiNative.nativeCall(_ldproofsVerifyProof, request, VerifyProofResponse());
}

class Hashing {
  static final _blake3Hash = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('blake3_hash');
  static final _blake3KeyedHash = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('blake3_keyed_hash');
  static final _blake3DeriveKey = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('blake3_derive_key');
  static final _sha256Hash = OkapiNative.library
      .lookupFunction<OkapiFunctionNative, OkapiFunction>('sha256_hash');

  static Blake3HashResponse blake3Hash(Blake3HashRequest request) =>
      OkapiNative.nativeCall(_blake3Hash, request, Blake3HashResponse());
  static Blake3KeyedHashResponse blake3KeyedHash(Blake3KeyedHashRequest request) =>
      OkapiNative.nativeCall(_blake3KeyedHash, request, Blake3KeyedHashResponse());
  static Blake3DeriveKeyResponse blake3DeriveKey(Blake3DeriveKeyRequest request) =>
      OkapiNative.nativeCall(_blake3DeriveKey, request, Blake3DeriveKeyResponse());
  static SHA256HashResponse sha256Hash(SHA256HashRequest request) =>
      OkapiNative.nativeCall(_sha256Hash, request, SHA256HashResponse());

}