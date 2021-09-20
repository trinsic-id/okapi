using System;
using System.Net.Http;
using System.Threading.Tasks;
using Common;
using Google.Protobuf;
using Grpc.Net.Client;
using Grpc.Net.Client.Web;
using System.Diagnostics;
using Okapi.Examples;
using Okapi.Transport;

namespace Client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);

            // Get reference to didcomm service with encryption endpoints
            var client = new SecureExample.SecureExampleClient(
                channel: GrpcChannel.ForAddress("http://localhost:5000",
                channelOptions: new GrpcChannelOptions { HttpHandler = new GrpcWebHandler(new HttpClientHandler()) }));

            Console.WriteLine("Say something to Bob (CTRL+C to cancel)");
            Console.WriteLine();

            while (true)
            {
                // We'll use this to measure total roundtrip time
                var stopwatch = new Stopwatch();

                Console.Write("<Alice> ");
                var message = new BasicMessage { Text = Console.ReadLine() };
                stopwatch.Start();
                var encryptedMessage = DIDComm.Pack(new PackRequest { ReceiverKey = Bob.PublicKey, SenderKey = Alice.SecretKey, Plaintext = message.ToByteString() });

                var response = await client.UnaryAsync(encryptedMessage.Message);
                var decryptedResponse = DIDComm.Unpack(new UnpackRequest { Message = response, ReceiverKey = Alice.SecretKey, SenderKey = Bob.PublicKey });

                var reply = new BasicMessage();
                reply.MergeFrom(decryptedResponse.Plaintext);

                stopwatch.Stop();
                Console.WriteLine($"<Bob> {reply.Text} ({stopwatch.ElapsedMilliseconds}ms)");
                stopwatch.Reset();
            }
        }
    }
}
