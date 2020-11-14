
import {
    pack,
    unpack,
    BasicMessage,
    PackRequest,
    UnpackRequest,
    EncryptedMessage,
    DIDCommEncryptedClient,
  } from "didcomm-grpc";
  import PromptSync from "prompt-sync";
  import { Alice, Bob } from "../keys";
  
  let Prompt = PromptSync();

  function sendServerStreaming(client: DIDCommEncryptedClient): Promise<void> {
    let message = new BasicMessage().setText(Prompt("<Alice> "));

    let start = new Date().getTime();
    let begin = start;

    let encryptedMessage = pack(
        new PackRequest()
            .setPlaintext(message.serializeBinary())
            .setSenderKey(Alice.secretKey)
            .setReceiverKey(Bob.publicKey)
    );
    return new Promise<void>((resolve, reject) => {
        let call = client.serverStreaming(encryptedMessage.getMessage()!);
        call.on("data", (response: EncryptedMessage) => {
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