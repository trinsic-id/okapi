import {
  Blake3HashRequest,
  CreateOberonKeyRequest,
  CreateOberonProofRequest,
  CreateOberonTokenRequest,
  DIDKey,
  GenerateKeyRequest,
  Hashing,
  KeyType,
  Oberon
} from "../src";

describe("Node Okapi Tests", () => {
  it("generate bls key", async ()=> {
    const response = await DIDKey.generate(
      GenerateKeyRequest.fromPartial({ keyType: KeyType.KEY_TYPE_BLS12381G1G2 })
    );

    expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
  });

  it("create and verify oberon token", async () => {
    const key = await Oberon.createKey(CreateOberonKeyRequest.fromPartial({}));
    const id = Buffer.from("me@example.com");
    const nonce = Buffer.from("123");

    const token = await Oberon.createToken(
      CreateOberonTokenRequest.fromPartial({ sk: key.sk, data: id })
    );
    expect(token).not.toBeNull();

    const proof = await Oberon.createProof(
      CreateOberonProofRequest.fromPartial({
        token: token.token,
        data: id,
        nonce: nonce
      })
    );

    expect(proof.proof.length).toBe(256);

    const result = await Oberon.verifyProof({
      data: id,
      nonce: nonce,
      proof: proof.proof,
      pk: key.pk
    });

    expect(result.valid).toBeTrue();
  });

  it("run blake3 hash", async () => {
    const response = await Hashing.blake3Hash(
      Blake3HashRequest.fromPartial({data: Uint8Array.from([1,2,3])})
    );
    expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
  });
});
