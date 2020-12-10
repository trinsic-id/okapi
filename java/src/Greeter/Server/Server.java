package Greeter.Server;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Server {
    private static final int MAX_WAITING_CONNECTIONS = 12;
    private HttpServer server;
    private String port;

    public Server(String port) {
        this.port = port;
    }

    public void run() {
        try {
            server = HttpServer.create(
                    new InetSocketAddress(Integer.parseInt(port)),
                    MAX_WAITING_CONNECTIONS);
        }
        catch (IOException e) {
            e.printStackTrace();
            return;
        }

        server.setExecutor(null);
        server.createContext("/", new Context());
        server.start();

        System.out.println("Http server started on " + port);
    }
}
