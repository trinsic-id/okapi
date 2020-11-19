import { expect } from "chai";
import { GenerateKeyRequest, DIDKey, KeyType } from "../index";

describe("Generate key tests", () => {
  it("should encode generate key request (p256)", () => {
    let request = new GenerateKeyRequest();
    request.setKeyType(KeyType.P256);

    var actual = DIDKey.generate(request);

    expect(actual.getKey()).to.be.not.null;
    expect(actual.getKey().getKeyType()).to.be.eq(KeyType.P256);
  });

  it("should generate key with random seed (ed25519)", () => {
    let request = new GenerateKeyRequest();
    request.setKeyType(KeyType.ED25519);

    var actual = DIDKey.generate(request);

    expect(actual.getKey()).to.be.not.null;
    expect(actual.getKey().getKeyType()).to.be.eq(KeyType.ED25519);
    expect(actual.getKey().getPublicKey()).not.null;
    expect(actual.getKey().getSecretKey()).not.null;
  });

  it("should generate key with no seed (x25519)", () => {
    let request = new GenerateKeyRequest();
    request.setKeyType(KeyType.X25519);

    var actual = DIDKey.generate(request);

    expect(actual.getKey()).to.be.not.null;
    expect(actual.getKey().getKeyType()).to.equal(KeyType.X25519);
    expect(actual.getKey().getPublicKey()).not.null;
    expect(actual.getKey().getSecretKey()).not.null;
  });

  it("throws on incorrect input for key type", () => {
    let request = new GenerateKeyRequest();
    request.setKeyType(-1);

    expect(() => DIDKey.generate(request)).to.throw("error packing InvalidField(\"key_type\")");
  });
});
