import { DIDKey, KeyType, GenerateKeyRequest } from "@trinsic/okapi";

async function generateKey() {
    var request = new GenerateKeyRequest();
    request.setKeyType(KeyType.BLS12381G1G2);

    var response = await DIDKey.generate(request);

    console.log(response.getDidDocument().toJavaScript());
}

generateKey();