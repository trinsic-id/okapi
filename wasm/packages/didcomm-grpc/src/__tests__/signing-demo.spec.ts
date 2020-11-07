import { expect } from "chai";
import { generateKey, sign, verify, didcomm } from "../index";

const dm = didcomm.messaging;

describe("Sign and verify demo", () => {
  it("generate keys, sign and verify", () => {
    let payload = Buffer.from("Hello DIDComm over gRPC!");

    let key = generateKey({
      keyType: dm.KeyType.ed25519,
    }).key;

    let signature = sign({
      payload: payload,
      key: key,
    }).message;

    let verified = verify({
      message: signature,
      key: key,
    }).isValid;

    expect(verified).to.equal(true);
  });

  it("sign throws on incorrect input", () => {
    expect(() => sign({})).to.throw("unreachable");
  });
});
