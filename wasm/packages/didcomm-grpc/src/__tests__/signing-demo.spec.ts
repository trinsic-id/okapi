import { expect } from "chai";
import {
  generateKey,
  sign,
  verify,
  GenerateKeyRequest,
  SignRequest,
  VerifyRequest,
  KeyType,
} from "../index";
describe("Sign and verify demo", () => {
  it("generate keys, sign and verify", () => {
    let payload = Buffer.from("Hello DIDComm over gRPC!");

    let keyRequest = new GenerateKeyRequest();
    keyRequest.setKeyType(KeyType.ED25519);

    let keyResponse = generateKey(keyRequest);

    // Sign payload
    let signRequest = new SignRequest();
    signRequest.setPayload(payload);
    signRequest.setKey(keyResponse.getKey());

    let signResponse = sign(signRequest);

    // Verify payload
    let verifyRequest = new VerifyRequest();
    verifyRequest.setKey(keyResponse.getKey());
    verifyRequest.setMessage(signResponse.getMessage());

    let verifyResponse = verify(verifyRequest);

    expect(verifyResponse.getIsValid()).to.equal(true);
  });

  it("sign throws on incorrect input", () => {
    expect(() => sign(new SignRequest())).to.throw("unreachable");
  });
});
