import 'package:okapi_dart/proto/okapi/keys/v1/keys.pb.dart';
import 'package:test/test.dart';
import 'dart:convert';

import '../didcomm.dart';

void main() {
  test('DidKey: Test Generate Key', () {
    GenerateKeyRequest request = GenerateKeyRequest();
    request.keyType = KeyType.KEY_TYPE_ED25519;
    request.seed = [1, 2, 3];

    var response = DidKey.generate(request);
    assertValidKeyGenerated(response);
  });
}

String assertValidKeyGenerated(GenerateKeyResponse response, {String crv="Ed25519"}) {
  assert(response != null);
  assert(response.key[0] != null);
  assert(response.key[0].crv == crv);
  Codec<String, String> stringToBase64Url = utf8.fuse(base64Url);
  var x = stringToBase64Url.encode(response.key[0].x);
  var y = stringToBase64Url.encode(response.key[0].y);
  var publicKey = x + y;
  assert(publicKey != null);
  assert(publicKey.isNotEmpty);
  assert(32 == publicKey.length);
  var response64 = stringToBase64Url.encode(response.key[0].d);
  assert(response64.isNotEmpty);
  assert(32 == response64.length);
  return publicKey;
}