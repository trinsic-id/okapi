import { expect } from "chai";
import { generateKey, convertKey, didcomm } from "../index";

const dm = didcomm.messaging;

describe("Generate key tests", () => {
  it("should encode generate key request", () => {
    let request = new dm.GenerateKeyRequest({
      keyType: dm.KeyType.ed25519,
    });

    var actual = generateKey(request);

    expect(actual)
      .to.have.property("key")
      .and.to.have.property("keyType")
      .and.to.equal(dm.KeyType.ed25519);
  });

  it("should generate key with random seed (ed25519)", () => {
    let request = new dm.GenerateKeyRequest({
      keyType: dm.KeyType.ed25519,
      seed: new Uint8Array(32),
    });

    var response = generateKey(request);

    expect(response).to.have.property("key");
    expect(response.key)
      .to.have.property("keyType")
      .and.be.equal(dm.KeyType.ed25519);
    expect(response.key).to.have.property("publicKey");
    expect(response.key).to.have.property("secretKey");
  });

  it("should generate key with no seed (x25519)", () => {
    let request = new dm.GenerateKeyRequest({
      keyType: dm.KeyType.x25519,
    });

    var response = generateKey(request);

    expect(response).to.have.property("key");
    expect(response.key)
      .to.have.property("keyType")
      .and.be.equal(dm.KeyType.x25519);
    expect(response.key).to.have.property("publicKey");
    expect(response.key).to.have.property("secretKey");
  });

  it("validate throws on incorrect input", () => {
    expect(() => generateKey({ keyType: -1 })).to.throw(
      "keyType: enum value expected"
    );
  });
});
