package Greeter.Server;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.Proto.BasicMsg;
import DIDComm.Messaging.Proto.Security;
import DIDComm.Messaging.gRPC.DIDComm;
import Greeter.Common.Keys;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;

public class Context implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        Keys keys = Keys.getInstance();

        // First the server pulls the the request out and writes it to a byte array
        byte[] clientRequest = new byte[exchange.getRequestBody().available()];
        exchange.getRequestBody().read(clientRequest);

        // The server then creates an unpack request from the message, Bob's secret key and Alice's public key
        API.UnpackRequest unpackRequest = API.UnpackRequest.newBuilder()
                .setMessage(Security.EncryptedMessage.parseFrom(clientRequest))
                .setReceiverKey(keys.bobSecret())
                .setSenderKey(keys.alicePublic())
                .build();

        // Call the DIDComm Unpack function with our Unpack Request and pull the encrypted message out from the pack response
        API.UnpackResponse resp = DIDComm.Unpack(unpackRequest);
        BasicMsg.BasicMessage decryptedMessage = BasicMsg.BasicMessage.parseFrom(resp.getPlaintext().toByteArray());

        // The server echoes the client's response back by putting it in a basic message
        BasicMsg.BasicMessage message = BasicMsg.BasicMessage.newBuilder().setText("You said: " + decryptedMessage.getText()).build();

        // The server creates a PackRequest from the basic message, Bob's secret key, and Alice's public key.
        API.PackRequest packRequest = API.PackRequest.newBuilder()
                .setPlaintext(message.toByteString())
                .setReceiverKey(keys.alicePublic())
                .setSenderKey(keys.bobSecret())
                .build();

        // The server packs the message using the DIDComm library
        API.PackResponse encryptedMessage = DIDComm.Pack(packRequest);

        // Finally, the server sends the encrypted message in its response to the client
        exchange.sendResponseHeaders(200, 0);
        exchange.getResponseBody().write(encryptedMessage.getMessage().toByteArray());
        exchange.getResponseBody().close();
    }
}
