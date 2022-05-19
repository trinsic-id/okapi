import 'dart:convert';
import 'dart:ffi';
import 'dart:typed_data';

import 'package:convert/convert.dart';
import 'package:fast_base58/fast_base58.dart';
import 'package:okapi_dart/proto/google/protobuf/struct.pb.dart';
import 'package:okapi_dart/proto/okapi/hashing/v1/hashing.pb.dart';
import 'package:okapi_dart/proto/okapi/keys/v1/keys.pb.dart';
import 'package:okapi_dart/proto/okapi/proofs/v1/proofs.pb.dart';
import 'package:okapi_dart/proto/okapi/security/v1/security.pb.dart';
import 'package:okapi_dart/okapi.dart';
import 'package:test/test.dart';

void main() {
  test('Dart bitness', () {
    var size = sizeOf<IntPtr>() * 8;
    print('Dart bitness=$size');
  });
  test('Get Metadata', () {
    var metadataResponse = Metadata.getMetadata();
    assert(metadataResponse.version.isNotEmpty);
    // Default local build version is 0.1.0, we just need to ensure SOMETHING isn't 0
    assert(metadataResponse.versionMajor != 0 ||
        metadataResponse.versionMinor != 0 ||
        metadataResponse.versionPatch != 0);
  });
  testDidKey();
  testHashing();
  testLdProofs();
  testOberon();
}

void testOberon() {
  group('Oberon:', () {
    test('Demo', () {
      var key = Oberon.CreateKey(CreateOberonKeyRequest(seed: [1, 2, 3]));
      var data = Uint8List.fromList(utf8.encode('alice'));
      var nonce = Uint8List.fromList(utf8.encode('1234'));

      var createTokenRequest = CreateOberonTokenRequest(sk: key.sk, data: data);
      var token = Oberon.CreateToken(createTokenRequest);

      var createProofRequest = CreateOberonProofRequest(
          data: data, nonce: nonce, token: token.token);
      var proof = Oberon.CreateProof(createProofRequest);

      var verifyProofRequest = VerifyOberonProofRequest();
      verifyProofRequest.data = data;
      verifyProofRequest.nonce = nonce;
      verifyProofRequest.pk = key.pk;
      verifyProofRequest.proof = proof.proof;
      var result = Oberon.VerifyProof(verifyProofRequest);
      assert(result.valid);
    });
    test('VerifyToken', () {
      var rightKey = Oberon.CreateKey(CreateOberonKeyRequest(seed: [1, 2, 3]));
      var wrongKey = Oberon.CreateKey(CreateOberonKeyRequest(seed: [0, 1, 2]));
      var data = Uint8List.fromList(utf8.encode('4113'));

      var token = Oberon.CreateToken(
          CreateOberonTokenRequest(sk: rightKey.sk, data: data));

      var verifyRight = Oberon.VerifyToken(VerifyOberonTokenRequest(
          token: token.token, pk: rightKey.pk, data: data));
      var verifyWrong = Oberon.VerifyToken(VerifyOberonTokenRequest(
          token: token.token, pk: wrongKey.pk, data: data));

      assert(verifyRight.valid);
      assert(!verifyWrong.valid);
    });
    test('Demo With Blinding', () {
      var key = Oberon.CreateKey(CreateOberonKeyRequest());
      var data = Uint8List.fromList(utf8.encode("alice"));
      var nonce = Uint8List.fromList(utf8.encode("1234"));

      var issuer2FA = Uint8List.fromList(utf8.encode("issuer code"));
      var tokenRequest = CreateOberonTokenRequest();
      tokenRequest.data = data;
      tokenRequest.sk = key.sk;
      tokenRequest.blinding.add(issuer2FA);
      var blindedToken = Oberon.CreateToken(tokenRequest);

      // Holder unblinds the token
      var unblindRequest = UnBlindOberonTokenRequest();
      unblindRequest.token = blindedToken.token;
      unblindRequest.blinding.add(issuer2FA);
      var token = Oberon.UnBlindToken(unblindRequest);

      // Holder prepares a proof without blinding.
      var proofRequest = CreateOberonProofRequest();
      proofRequest.data = data;
      proofRequest.nonce = nonce;
      proofRequest.token = token.token;
      var proof = Oberon.CreateProof(proofRequest);

      // Verifier verifies the proof.
      var verifyProof = VerifyOberonProofRequest();
      verifyProof.data = data;
      verifyProof.nonce = nonce;
      verifyProof.pk = key.pk;
      verifyProof.proof = proof.proof;
      var result = Oberon.VerifyProof(verifyProof);
      assert(result.valid);

      // Holder blinds the token with a personal pin
      var userPin = Uint8List.fromList(utf8.encode("0042"));
      var blindRequest = BlindOberonTokenRequest();
      blindRequest.token = token.token;
      blindRequest.blinding.add(userPin);

      var userBlindedToken = Oberon.BlindToken(blindRequest);
      proofRequest = CreateOberonProofRequest();
      proofRequest.data = data;
      proofRequest.nonce = nonce;
      proofRequest.token = userBlindedToken.token;
      proofRequest.blinding.add(userPin);
      proof = Oberon.CreateProof(proofRequest);

      // Verifier verifies the proof
      verifyProof = VerifyOberonProofRequest();
      verifyProof.data = data;
      verifyProof.nonce = nonce;
      verifyProof.pk = key.pk;
      verifyProof.proof = proof.proof;
      result = Oberon.VerifyProof(verifyProof);
      assert(result.valid);

      // Bad actor creates a proof with incorrect blinding pin
      var invalidPin = Uint8List.fromList(utf8.encode("invalid pin"));
      var badProofRequest = CreateOberonProofRequest();
      badProofRequest.data = data;
      badProofRequest.nonce = nonce;
      badProofRequest.token = userBlindedToken.token;
      badProofRequest.blinding.add(invalidPin);
      var badProof = Oberon.CreateProof(badProofRequest);
      assert(256 == badProof.proof.length);

      // Verifier tries to verify proof, fails
      var badVerifyProof = VerifyOberonProofRequest();
      badVerifyProof.data = data;
      badVerifyProof.nonce = nonce;
      badVerifyProof.pk = key.pk;
      badVerifyProof.proof = badProof.proof;
      result = Oberon.VerifyProof(badVerifyProof);
      assert(result.valid == false);
    });
  });
}

void testLdProofs() {
  group('LdProofs:', () {
    test('Generate Capability Invocation With JCS', () {
      var capabilityDictionary = {
        "@context": "https://w3id.org/security/v2",
        "target": "urn:trinsic:wallets:noop",
        "proof": {"created": DateTime.now().toIso8601String()},
      };
      var capability = Struct();
      capability.mergeFromProto3Json(capabilityDictionary);

      var request = GenerateKeyRequest();
      request.keyType = KeyType.KEY_TYPE_ED25519;
      var response = DidKey.generate(request);
      var signingKey =
          response.key.firstWhere((element) => element.crv == "Ed25519");
      var proofRequest = CreateProofRequest();
      proofRequest.document = capability;
      proofRequest.key = signingKey;
      proofRequest.suite = LdSuite.LD_SUITE_JCSED25519SIGNATURE2020;

      var signedCapability = LdProofs.createProof(proofRequest);
      assert(signedCapability.hasSignedDocument());
    });
  });
}

void testHashing() {
  group('Hashing:', () {
    test('SHA256 Hash', () {
      // Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
      var request = SHA256HashRequest();
      request.data = Uint8List.fromList(utf8.encode('4113'));
      var response = Hashing.sha256Hash(request);
      var responseHex = hex.encode(response.digest);
      var expected =
          "71b3af35d9d53d24e7462177da41b8acd5e2ef4afc333dd9272cb2ab8743b3db";
      var expectedTrim = expected.substring(0, responseHex.length);
      assert(expectedTrim == responseHex);
    });
    test('BLAKE3 Hash', () {
      // Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
      var request = Blake3HashRequest();
      request.data = Uint8List.fromList([0, 1, 2]);
      var response = Hashing.blake3Hash(request);
      var responseHex = hex.encode(response.digest);
      var expected =
          "e1be4d7a8ab5560aa4199eea339849ba8e293d55ca0a81006726d184519e647f5b49b82f805a538c68915c1ae8035c900fd1d4b13902920fd05e1450822f36de9454b7e9996de4900c8e723512883f93f4345f8a58bfe64ee38d3ad71ab027765d25cdd0e448328a8e7a683b9a6af8b0af94fa09010d9186890b096a08471e4230a134";
      var expectedTrim = expected.substring(0, responseHex.length);
      assert(expectedTrim == responseHex);
    });
    test('BLAKE3 Keyed Hash', () {
      // Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
      var request = Blake3KeyedHashRequest();
      request.data = Uint8List.fromList([0, 1, 2]);
      request.key = utf8.encode("whats the Elvish word for friend");
      var response = Hashing.blake3KeyedHash(request);
      var responseHex = hex.encode(response.digest);
      var expected =
          "39e67b76b5a007d4921969779fe666da67b5213b096084ab674742f0d5ec62b9b9142d0fab08e1b161efdbb28d18afc64d8f72160c958e53a950cdecf91c1a1bbab1a9c0f01def762a77e2e8545d4dec241e98a89b6db2e9a5b070fc110caae2622690bd7b76c02ab60750a3ea75426a6bb8803c370ffe465f07fb57def95df772c39f";
      var expectedTrim = expected.substring(0, responseHex.length);
      assert(expectedTrim == responseHex);
    });
    test('BLAKE3 Derive Key', () {
      // Taken from here: https://raw.githubusercontent.com/BLAKE3-team/BLAKE3/master/test_vectors/test_vectors.json
      var request = Blake3DeriveKeyRequest();
      request.keyMaterial = Uint8List.fromList([0, 1, 2]);
      request.context =
          utf8.encode("BLAKE3 2019-12-27 16:29:52 test vectors context");
      var response = Hashing.blake3DeriveKey(request);
      var responseHex = hex.encode(response.digest);
      var expected =
          "440aba35cb006b61fc17c0529255de438efc06a8c9ebf3f2ddac3b5a86705797f27e2e914574f4d87ec04c379e12789eccbfbc15892626042707802dbe4e97c3ff59dca80c1e54246b6d055154f7348a39b7d098b2b4824ebe90e104e763b2a447512132cede16243484a55a4e40a85790038bb0dcf762e8c053cabae41bbe22a5bff7";
      var expectedTrim = expected.substring(0, responseHex.length);
      assert(expectedTrim == responseHex);
    });
  });
}

void testDidKey() {
  group('DidKey:', () {
    test('Test Generate Key', () {
      GenerateKeyRequest request = GenerateKeyRequest();
      request.keyType = KeyType.KEY_TYPE_ED25519;
      request.seed = Uint8List.fromList([1, 2, 3]);

      var response = DidKey.generate(request);
      assertValidKeyGenerated(response);
    });
    test('Test Generate Key No Seed', () {
      GenerateKeyRequest request = GenerateKeyRequest();
      request.keyType = KeyType.KEY_TYPE_ED25519;

      var response = DidKey.generate(request);
      assertValidKeyGenerated(response);
    });
    test('Test Resolve Key', () {
      var request = ResolveRequest();
      request.did =
          "did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN";
      var response = DidKey.resolve(request);
      assert(response.hasDidDocument());
    });
    test('Test Throws Invalid Key Type', () {
      GenerateKeyRequest request = GenerateKeyRequest();
      // Dart will catch this failure before you make the okapi call
      // request.keyType = KeyType.valueOf(-1)!;
    });
    group('Test Generate Key From Seed:', () {
      var inputs = {
        {
          "keytype": KeyType.KEY_TYPE_ED25519,
          "typestring": "Ed25519",
          "seed":
              "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578",
          "result": "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx"
        },
        {
          "keytype": KeyType.KEY_TYPE_X25519,
          "typestring": "X25519",
          "seed":
              "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5",
          "result": "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ"
        }
      };
      for (var input in inputs) {
        var keyType = input["keytype"] as KeyType;
        var typeString = input["typestring"] as String;
        var seed = input["seed"] as String;
        var result = input["result"] as String;

        test("KeyType = $keyType", () {
          var request = GenerateKeyRequest();
          request.keyType = keyType;
          request.seed = hex.decode(seed);
          var response = DidKey.generate(request);

          var publicKey = assertValidKeyGenerated(response, crv: typeString);
          assert(result == Base58Encode(publicKey));
        });
      }
    });
  });
}

String base64Padding(String base64) {
  int stringShort = base64.length % 4;
  if (stringShort == 2) {
    base64 += "==";
  } else if (stringShort == 3) {
    base64 += "=";
  }
  return base64;
}

Uint8List assertValidKeyGenerated(GenerateKeyResponse response,
    {String crv = "Ed25519"}) {
  assert(response.key[0].crv == crv);
  var x = base64Url.decode(base64Padding(response.key[0].x));
  var y = base64Url.decode(base64Padding(response.key[0].y));
  var publicKey = x + y;
  assert(publicKey.isNotEmpty);
  assert(32 == publicKey.length);
  var response64 = base64Url.decode(base64Padding(response.key[0].d));
  assert(response64.isNotEmpty);
  assert(32 == response64.length);
  return Uint8List.fromList(publicKey);
}
