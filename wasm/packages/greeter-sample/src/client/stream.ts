import {
  BasicMessage,
  DIDComm,
  DIDCommEncryptedClient,
  EncryptedMessage,
  PackRequest,
  UnpackRequest,
} from "didcomm-grpc";
import PromptSync from "prompt-sync";
import { Alice, Bob } from "../keys";

let Prompt = PromptSync();

function sendServerStreaming(client: DIDCommEncryptedClient): Promise<void> {
  let message = new BasicMessage();
  message.setText(Prompt("<Alice> "));

  let start = new Date().getTime();
  let begin = start;

  let packRequest = new PackRequest();
  packRequest.setPlaintext(message.serializeBinary());
  packRequest.setSenderKey(Alice.secretKey());
  packRequest.setReceiverKey(Bob.publicKey());

  let encryptedMessage = DIDComm.pack(packRequest);

  return new Promise<void>((resolve, reject) => {
    let call = client.serverStreaming(encryptedMessage.getMessage()!);
    call.on("data", (response: EncryptedMessage) => {
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

      // Reset time to measure interval from last call
      start = new Date().getTime();
    });
    call.on("error", (error) => {
      console.log(`Error: ${error.message}`);
      reject(error);
    });
    call.on("end", () => {
      console.log(`Total time: ${new Date().getTime() - begin}ms`);
      resolve();
    });
  });
}

export default sendServerStreaming;
