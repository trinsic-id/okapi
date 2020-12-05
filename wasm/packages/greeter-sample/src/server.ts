import {
  IDIDCommEncryptedServer,
  DIDComm,
  PackRequest,
  BasicMessage,
  UnpackRequest,
  EncryptedMessage,
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
    let request = new UnpackRequest();
    request.setMessage(call.request);
    request.setSenderKey(Alice.publicKey());
    request.setReceiverKey(Bob.secretKey());
    // unpack incoming request
    let response = DIDComm.unpack(request);

    // decode contained message
    let message = BasicMessage.deserializeBinary(response.getPlaintext_asU8());

    // prepare a response
    let reply = new BasicMessage();
    reply.setText(`You said: ${message.getText()}`);
    let packRequst = new PackRequest();
    packRequst.setPlaintext(reply.serializeBinary());
    packRequst.setReceiverKey(Alice.publicKey());
    packRequst.setSenderKey(Bob.secretKey());

    // encrypt the response
    let encryptedReply = DIDComm.pack(packRequst);

    // send back message
    callback(null, encryptedReply.getMessage()!);
  }

  public serverStreaming(
    call: ServerWriteableStream<EncryptedMessage, EncryptedMessage>
  ): void {
    let unpackRequest = new UnpackRequest();
    unpackRequest.setMessage(call.request);
    unpackRequest.setSenderKey(Alice.publicKey());
    unpackRequest.setReceiverKey(Bob.secretKey());
    let response = DIDComm.unpack(unpackRequest);

    // decode contained message
    let message = BasicMessage.deserializeBinary(response.getPlaintext_asU8());

    for (let char of message.getText()) {
      // prepare a response
      let reply = new BasicMessage();
      reply.setText(`You said: ${char}`);
      let packRequest = new PackRequest();
      packRequest.setPlaintext(reply.serializeBinary());
      packRequest.setReceiverKey(Alice.publicKey());
      packRequest.setSenderKey(Bob.secretKey());
      // encrypt the response
      let encryptedReply = DIDComm.pack(packRequest);

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
