const test = require("ava");
const {
  DIDKey,
  GenerateKeyRequest,
  CreateOberonKeyRequest,
  CreateOberonTokenRequest,
  CreateOberonProofRequest,
  VerifyOberonProofRequest,
  KeyType,
  Oberon,
} = require("../lib/index.js");

test("generate bls key", async (t) => {
  var response = await DIDKey.generate(new GenerateKeyRequest().setKeyType(KeyType.KEY_TYPE_BLS12381G1G2));

  t.not(null, response);
  t.not(undefined, response);
});

test("create and verify oberon token", async (t) => {
  var key = await Oberon.createKey(new CreateOberonKeyRequest());
  var id = Buffer.from("me@example.com");
  var nonce = Buffer.from("123");

  var token = await Oberon.createToken(new CreateOberonTokenRequest().setData(id).setSk(key.getSk()));
  t.not(null, token);

  var proof = await Oberon.createProof(
    new CreateOberonProofRequest().setToken(token.getToken()).setData(id).setNonce(nonce)
  );

  t.is(256, proof.getProof_asU8().length);

  var result = await Oberon.verifyProof(
    new VerifyOberonProofRequest().setData(id).setNonce(nonce).setProof(proof.getProof()).setPk(key.getPk())
  );

  t.true(result.getValid());
});
