import {
  EncryptedMessage,
  IDIDCommEncryptedServer,
  BasicMessage,
  unpack,
  pack,
  UnpackRequest,
  PackRequest,
} from "didcomm-grpc";
import {
  ServerWriteableStream,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  sendUnaryData,
} from "grpc";
import { Alice, Bob } from "./keys";

export class GreeterService implements IDIDCommEncryptedServer {
  public unary(
    call: ServerUnaryCall<EncryptedMessage>,
    callback: sendUnaryData<EncryptedMessage>
  ): void {
    // unpack incoming request
    let response = unpack(
      new UnpackRequest()
        .setMessage(call.request)
        .setSenderKey(Alice.publicKey)
        .setReceiverKey(Bob.secretKey)
    );

    // decode contained message
    let message = BasicMessage.deserializeBinary(response.getPlaintext_asU8());

    // prepare a response
    let reply = new BasicMessage().setText(`You said: ${message.getText()}`);
    // encrypt the response
    let encryptedReply = pack(
      new PackRequest()
        .setPlaintext(reply.serializeBinary())
        .setReceiverKey(Alice.publicKey)
        .setSenderKey(Bob.secretKey)
    );

    // send back message
    callback(null, encryptedReply.getMessage()!);
  }

  public serverStreaming(
    call: ServerWriteableStream<EncryptedMessage, EncryptedMessage>
  ): void {
    let response = unpack(
      new UnpackRequest()
        .setMessage(call.request)
        .setSenderKey(Alice.publicKey)
        .setReceiverKey(Bob.secretKey)
    );

    // decode contained message
    let message = BasicMessage.deserializeBinary(response.getPlaintext_asU8());

    for (let char of message.getText()) {
      // prepare a response
      let reply = new BasicMessage().setText(`You said: ${char}`);
      // encrypt the response
      let encryptedReply = pack(
        new PackRequest()
          .setPlaintext(reply.serializeBinary())
          .setReceiverKey(Alice.publicKey)
          .setSenderKey(Bob.secretKey)
      );

      // send back message
      call.write(encryptedReply.getMessage()!);
    }

    call.end();
  }

  public clientStreaming(
    call: ServerReadableStream<EncryptedMessage>,
    callback: sendUnaryData<EncryptedMessage>
  ): void {
    throw new Error("not implemented");
  }

  public bidirectionalStreaming(
    call: ServerDuplexStream<EncryptedMessage, EncryptedMessage>
  ): void {
    throw new Error("not implemented");
  }
}
