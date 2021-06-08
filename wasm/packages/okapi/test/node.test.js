const test = require("ava");
const { DIDKey, GenerateKeyRequest, KeyType } = require("../lib/index.js");

test("generate bls key", async (t) => {
  var response = await DIDKey.generate(new GenerateKeyRequest().setKeyType(KeyType.BLS12381G1G2));

  t.not(null, response);
  t.not(undefined, response);
});
