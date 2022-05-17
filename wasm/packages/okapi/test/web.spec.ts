import {
  Blake3HashRequest,
  CreateOberonKeyRequest,
  CreateOberonProofRequest,
  CreateOberonTokenRequest,
  DIDKey,
  GenerateKeyRequest,
  Hashing,
  KeyType,
  Oberon,
} from "../src";

describe("Web Okapi Tests", () => {
  it("generate bls key", async () => {
    const response = await DIDKey.generate(
      GenerateKeyRequest.fromPartial({ keyType: KeyType.KEY_TYPE_BLS12381G1G2 })
    );

    expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
  });

  it("Oberon.VerifyToken", async () => {
    const data = Buffer.from("4113");
    const seed = Buffer.from("123");
    const otherSeed = Buffer.from("012");
    const rightKey = await Oberon.createKey({ seed: seed });
    const wrongKey = await Oberon.createKey({ seed: otherSeed });

    const token = await Oberon.createToken({
      sk: rightKey.sk,
      data: data,
      blinding: [],
    });

    expect(token).not.toBeNull()

    const verifyRight = await Oberon.verifyToken({data: data, pk: rightKey.pk, token: token.token})
    const verifyWrong = await Oberon.verifyToken({data: data, pk: wrongKey.pk, token: token.token})

    expect(verifyRight.valid).toBeTruthy()
    expect(verifyWrong.valid).toBeFalsy()
  });

  it("create and verify oberon token", async () => {
    const key = await Oberon.createKey(CreateOberonKeyRequest.fromPartial({}));
    const id = Buffer.from("me@example.com");
    const nonce = Buffer.from("123");

    const token = await Oberon.createToken({
      sk: key.sk,
      data: id,
      blinding: [],
    });
    expect(token).not.toBeNull();

    const proof = await Oberon.createProof(
      CreateOberonProofRequest.fromPartial({
        token: token.token,
        data: id,
        nonce: nonce,
      })
    );

    expect(proof.proof.length).toBe(256);

    const result = await Oberon.verifyProof({
      data: id,
      nonce: nonce,
      proof: proof.proof,
      pk: key.pk,
    });

    expect(result.valid).toBeTruthy();
  });

  it("run blake3 hash", async () => {
    const response = await Hashing.blake3Hash(
      Blake3HashRequest.fromPartial({ data: Uint8Array.from([1, 2, 3]) })
    );
    expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
  });
});
