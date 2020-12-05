import {
  DIDCommEncryptedClient,
  DIDComm,
  BasicMessage,
  PackRequest,
  UnpackRequest,
} from "didcomm-grpc";
import PromptSync from "prompt-sync";
import { Alice, Bob } from "../keys";

let Prompt = PromptSync();

function sendUnary(client: DIDCommEncryptedClient, loop: boolean = false) {
  let message = new BasicMessage();
  message.setText(Prompt("<Alice> "));

  let start = new Date().getTime();

  let packRequest = new PackRequest();
  packRequest.setPlaintext(message.serializeBinary());
  packRequest.setSenderKey(Alice.secretKey());
  packRequest.setReceiverKey(Bob.publicKey());

  let encryptedMessage = DIDComm.pack(packRequest);

  client.unary(encryptedMessage.getMessage()!, (error, response) => {
    if (error != null) {
      console.log(`Error: ${error.details}`);
      return;
    }

    let unpackRequest = new UnpackRequest();
    unpackRequest.setMessage(response);
    unpackRequest.setReceiverKey(Alice.secretKey());
    unpackRequest.setSenderKey(Bob.publicKey());

    let decryptedResponse = DIDComm.unpack(unpackRequest);
    let reply = BasicMessage.deserializeBinary(
      decryptedResponse.getPlaintext_asU8()
    );
    let end = new Date().getTime() - start;

    console.log(`<Bob> ${reply.getText()} (${end}ms)`);

    if (loop) sendUnary(client, loop);
  });
}

export default sendUnary;
