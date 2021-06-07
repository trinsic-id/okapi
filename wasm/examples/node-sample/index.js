import okapi from "@trinsic/okapi";
const { DIDKey, GenerateKeyRequest, KeyType } = okapi;

const response = DIDKey.generate(
  new GenerateKeyRequest().setKeyType(KeyType.BLS12381G1G2)
);

console.log(response.getDidDocument().toJavaScript());
