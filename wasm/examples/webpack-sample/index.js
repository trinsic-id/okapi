import { DIDKey, KeyType, GenerateKeyRequest } from "@trinsic/okapi";

async function generateKey() {
    var request = new GenerateKeyRequest();
    request.setKeyType(KeyType.ED25519);

    var response = await DIDKey.generate(request);

    var didDocument = response.getDidDocument().toJavaScript();
    console.log(didDocument);

    document.getElementById("did-document").innerText = JSON.stringify(didDocument, null, "\t");
}

generateKey();