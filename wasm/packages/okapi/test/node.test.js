const test = require("ava");
const {
  DIDKey,
  GenerateKeyRequest,
  Blake3HashRequest,
  CreateOberonKeyRequest,
  CreateOberonTokenRequest,
  CreateOberonProofRequest,
  VerifyOberonProofRequest,
  KeyType,
  Oberon,
  Hashing,
} = require("../lib/index.js");

test("generate bls key", async (t) => {
  const response = await DIDKey.generate(new GenerateKeyRequest().setKeyType(KeyType.KEY_TYPE_BLS12381G1G2));

  t.not(response, null);
  t.not(response, undefined);
});

test("create and verify oberon token", async (t) => {
  const key = await Oberon.createKey(new CreateOberonKeyRequest());
  const id = Buffer.from("me@example.com");
  const nonce = Buffer.from("123");

  const token = await Oberon.createToken(new CreateOberonTokenRequest().setData(id).setSk(key.getSk()));
  t.not(token, null);

  const proof = await Oberon.createProof(
      new CreateOberonProofRequest().setToken(token.getToken()).setData(id).setNonce(nonce)
  );

  t.is(proof.getProof_asU8().length, 256);

  const result = await Oberon.verifyProof(
      new VerifyOberonProofRequest().setData(id).setNonce(nonce).setProof(proof.getProof()).setPk(key.getPk())
  );

  t.true(result.getValid());
});

test("run blake3 hash", async (t) => {
  const response = await Hashing.blake3Hash(new Blake3HashRequest().setData([1,2,3]));
  t.not(response, null);
  t.not(response, undefined);
})