import { expect } from "chai";
import {
  DIDComm,
  DIDKey,
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

    let keyResponse = DIDKey.generate(keyRequest);

    // Sign payload
    let signRequest = new SignRequest();
    signRequest.setPayload(payload);
    signRequest.setKey(keyResponse.getKeyList()[0]);

    let signResponse = DIDComm.sign(signRequest);

    // Verify payload
    let verifyRequest = new VerifyRequest();
    verifyRequest.setKey(keyResponse.getKeyList()[0]);
    verifyRequest.setMessage(signResponse.getMessage());

    let verifyResponse = DIDComm.verify(verifyRequest);

    expect(verifyResponse.getIsValid()).to.equal(true);
  });

  it("sign throws on incorrect input", () => {
    expect(() => DIDComm.sign(new SignRequest())).to.throw("error packing MissingField(\"key not found\")");
  });
});
