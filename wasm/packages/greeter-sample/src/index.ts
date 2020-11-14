import { GreeterService } from "./server";

import { Server, ServerCredentials } from "grpc";
import { DIDCommEncryptedService } from "didcomm-grpc";

const server: Server = new Server({
  "grpc.max_receive_message_length": -1,
  "grpc.max_send_message_length": -1,
});
server.addService(DIDCommEncryptedService, new GreeterService());

server.bind("localhost:5000", ServerCredentials.createInsecure());
server.start();
