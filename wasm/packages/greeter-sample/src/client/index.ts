import {
  grpc,
  DIDCommEncryptedClient,
} from "didcomm-grpc";
import sendServerStreaming from "./stream";
import sendUnary from "./unary";

//let creds = credentials.createInsecure();
let creds = grpc.credentials.createInsecure();
let client = new DIDCommEncryptedClient("localhost:5000", creds);

console.log("Say something to Bob (CTRL+C to cancel)");
console.log();

switch (process.argv[2]) {
  case "loop": {
    sendUnary(client, true);
    break;
  }
  case "stream": {
    sendServerStreaming(client);
    break;
  }
  default: {
    sendUnary(client);
  }
}
