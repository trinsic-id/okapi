import okapi from "@trinsic/okapi";
const { DIDKey, GenerateKeyRequest, KeyType } = okapi;

async function generateKey() {
  const request = new GenerateKeyRequest()
    .setKeyType(KeyType.BLS12381G1G2);

  const response = await DIDKey.generate(request);

  console.log(response.getDidDocument().toJavaScript());
}

generateKey();
