package Greeter.Client;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.Proto.BasicMsg;
import DIDComm.Messaging.Proto.Security;
import DIDComm.Messaging.gRPC.DIDComm;
import Greeter.Common.Keys;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;

public class Client {
    public Client(String port) {
        this.port = port;
    }

    private String port;

    //This function simply sends a byte array to the server over http and returns the response as a byte array
    public byte[] send(byte[] request) {
        try {
            URL url = new URL("http://localhost:" + port + "/");
            HttpURLConnection conn = (HttpURLConnection)url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/octet-stream");
            conn.setRequestProperty("Accept", "application/octet-stream");
            conn.setDoOutput(true);
            conn.getOutputStream().write(request);
            conn.getOutputStream().close();
            conn.connect();

            byte[] data = new byte[4096];
            ByteArrayOutputStream buffer = new ByteArrayOutputStream();
            int nread;
            InputStream is = conn.getInputStream();

            while ((nread = is.read(data, 0, data.length)) != -1) {
                buffer.write(data, 0, nread);
            }

            return buffer.toByteArray();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void run() {
        try {
            // BufferedReader is used to read from stdin
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            // Keys is a singleton storing Alice and Bob's keys.
            Keys keys = Keys.getInstance();

            while (true) {
                System.out.print("<Alice> ");
                String input = reader.readLine();

                // We add a Date object to calculate latency
                Date start = new Date();

                // The first step is to create a Basic message from text input
                BasicMsg.BasicMessage message = BasicMsg.BasicMessage.newBuilder().setText(input).build();
                // The next step is to pack the message. To do this we create a pack request with our message, Bob's public key and our (Alice's) secret key
                API.PackRequest packRequest = API.PackRequest.newBuilder()
                        .setPlaintext(message.toByteString())
                        .setReceiverKey(keys.bobPublic())
                        .setSenderKey(keys.aliceSecret())
                        .build();

                // Call the DIDComm Pack function with our pack request, and then pull the encrypted message out from the PackResponse
                API.PackResponse packResponse = DIDComm.Pack(packRequest);
                Security.EncryptedMessage encryptedMessage = packResponse.getMessage();

                // Send the encrypted message to the server over http and receive a byte array back
                byte[] serverResponse = send(encryptedMessage.toByteArray());

                // Then we create an unpack request with the server response as the message, our (Alice's) secret key and Bob's public key
                API.UnpackRequest unpackRequest = API.UnpackRequest.newBuilder()
                        .setMessage(Security.EncryptedMessage.parseFrom(serverResponse))
                        .setReceiverKey(keys.aliceSecret())
                        .setSenderKey(keys.bobPublic())
                        .build();

                // Call the DIDComm Unpack function with our unpack request and pull the encrypted message out from the pack response
                API.UnpackResponse resp = DIDComm.Unpack(unpackRequest);
                BasicMsg.BasicMessage decryptedMessage = BasicMsg.BasicMessage.parseFrom(resp.getPlaintext().toByteArray());

                //We get Date object to subtract from start
                Date finish = new Date();

                System.out.println("<Bob> " + decryptedMessage.getText() + " (" + (finish.getTime() - start.getTime()) + " milliseconds)");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
