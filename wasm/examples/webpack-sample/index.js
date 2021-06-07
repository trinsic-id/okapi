import { DIDKey, GenerateKeyRequest, KeyType } from "@trinsic/okapi";

function generateKey() {
    var request = new GenerateKeyRequest();
    request.setKeyType(KeyType.BLS12381G1G2);

    var response = await DIDKey.generate(request);

    console.log(response.toObject());
}

generateKey();