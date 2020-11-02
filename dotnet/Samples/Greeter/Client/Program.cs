using System;
using System.Net.Http;
using System.Threading.Tasks;
using Common;
using DIDCommMessaging;
using Google.Protobuf;
using Grpc.Core;
using Grpc.Net.Client;
using Grpc.Net.Client.Web;

namespace Client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Get reference to didcomm service
            var client = new DIDComm.DIDCommClient(
                channel: GrpcChannel.ForAddress("http://localhost:5000",
                channelOptions: new GrpcChannelOptions { HttpHandler = new GrpcWebHandler(new HttpClientHandler()) }));

            var response = await client.UnaryAsync(new DidcommMessage
            {
                Id = "1",
                Type = TypeUrls.BasicMessage,
                From = "did:key:alice",
                Created = DateTimeOffset.Now.ToUnixTimeSeconds(),
                Body = new BasicMessage { Text = "Hello" }.ToByteString()
            });

            Console.WriteLine($"Response: {response.Extract<BasicMessage>().Text}");

            using var streamResponse = client.ServerStreaming(new DidcommMessage
            {
                Id = "1",
                Type = TypeUrls.BasicMessage,
                From = "did:key:alice",
                Created = DateTimeOffset.Now.ToUnixTimeSeconds(),
                Body = new BasicMessage { Text = "Hello" }.ToByteString()
            });
            await foreach (var item in streamResponse.ResponseStream.ReadAllAsync())
            {
                Console.WriteLine($"Response: {item.Extract<BasicMessage>().Text}");
            }
        }
    }
}
