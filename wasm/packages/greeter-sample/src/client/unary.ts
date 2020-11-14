import {
  DIDCommEncryptedClient,
  pack,
  unpack,
  BasicMessage,
  PackRequest,
  UnpackRequest,
} from "didcomm-grpc";
import PromptSync from "prompt-sync";
import { Alice, Bob } from "../keys";

let Prompt = PromptSync();

function sendUnary(client: DIDCommEncryptedClient, loop: boolean = false) {
  let message = new BasicMessage().setText(Prompt("<Alice> "));

  let start = new Date().getTime();

  let encryptedMessage = pack(
    new PackRequest()
      .setPlaintext(message.serializeBinary())
      .setSenderKey(Alice.secretKey)
      .setReceiverKey(Bob.publicKey)
  );

  client.unary(encryptedMessage.getMessage()!, (error, response) => {
    if (error != null) {
      console.log(`Error: ${error.details}`);
      return;
    }

    let decryptedResponse = unpack(
      new UnpackRequest()
        .setMessage(response)
        .setReceiverKey(Alice.secretKey)
        .setSenderKey(Bob.publicKey)
    );
    let reply = BasicMessage.deserializeBinary(
      decryptedResponse.getPlaintext_asU8()
    );
    let end = new Date().getTime() - start;

    console.log(`<Bob> ${reply.getText()} (${end}ms)`);

    if (loop) sendUnary(client, loop);
  });
}

export default sendUnary;
