package Greeter;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.gRPC.DIDComm;
import Greeter.Client.Client;
import Greeter.Server.Server;

public class Main {
    public static void main(String[] args) {
        String port = "8080";

        Server server = new Server(port);
        Client client = new Client(port);

        server.run();
        client.run();
    }
}
