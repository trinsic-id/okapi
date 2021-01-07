package id.trinsic.android;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.Proto.BasicMsg;
import DIDComm.Messaging.Proto.Security;
import DIDComm.Messaging.gRPC.DIDComm;
import Greeter.Common.Keys;


public class MainActivity extends AppCompatActivity {
    private Keys keys;
    private Button send;
    private EditText message;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        keys = Keys.getInstance();
        message = (EditText) findViewById(R.id.message);
        send = (Button) findViewById(R.id.send);
        send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String toSend = message.getText().toString();
                if (toSend.length() > 0) {
                    try {
                        String resp = alice(toSend);
                        Toast.makeText(MainActivity.this, resp, Toast.LENGTH_LONG).show();
                    } catch (Exception e) {
                        e.printStackTrace();
                        Toast.makeText(MainActivity.this, e.getMessage(), Toast.LENGTH_LONG).show();
                    }
                }
            }
        });
    }

    private String alice(String toSend) {
        try {
            // We add a Date object to calculate latency
            //Date start = new Date();

            // The first step is to create a Basic message from text input
            BasicMsg.BasicMessage message = BasicMsg.BasicMessage.newBuilder().setText(toSend).build();
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
            byte[] bobResponse = bob(encryptedMessage.toByteArray());
            // Then we create an unpack request with the server response as the message, our (Alice's) secret key and Bob's public key
            API.UnpackRequest unpackRequest = API.UnpackRequest.newBuilder()
                    .setMessage(Security.EncryptedMessage.parseFrom(bobResponse))
                    .setReceiverKey(keys.aliceSecret())
                    .setSenderKey(keys.bobPublic())
                    .build();

            // Call the DIDComm Unpack function with our unpack request and pull the encrypted message out from the pack response
            API.UnpackResponse resp = DIDComm.Unpack(unpackRequest);
            BasicMsg.BasicMessage decryptedMessage = BasicMsg.BasicMessage.parseFrom(resp.getPlaintext().toByteArray());

            //We get Date object to subtract from start
            //Date finish = new Date();

            return decryptedMessage.getText(); //+ " (" + (finish.getTime() - start.getTime()) + " milliseconds)";
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    private byte[] bob(byte[] req) {
        try {
            // Bob creates an unpack request from the message, Bob's secret key and Alice's public key
            API.UnpackRequest unpackRequest = API.UnpackRequest.newBuilder()
                    .setMessage(Security.EncryptedMessage.parseFrom(req))
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

            return encryptedMessage.getMessage().toByteArray();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}