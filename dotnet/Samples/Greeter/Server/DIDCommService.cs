using System;
using System.Threading.Tasks;
using Common;
using DIDCommMessaging;
using Google.Protobuf;
using Grpc.Core;

namespace Server
{
    public class DIDCommService : DIDComm.DIDCommBase
    {
        public override Task<DidcommMessage> Unary(DidcommMessage request, ServerCallContext context)
        {
            if (request.Type != TypeUrls.BasicMessage)
            {
                throw new Exception("Unsupported message type");
            }

            // Extract request message
            var basiMessage = new BasicMessage();
            basiMessage.MergeFrom(request.Body);

            // Send back response
            return Task.FromResult(new DidcommMessage
            {
                Id = "1",
                From = "did:key:alice",
                Created = DateTimeOffset.Now.ToUnixTimeSeconds(),
                Body = new BasicMessage
                {
                    Text = $"You said (unary): {basiMessage.Text}"
                }.ToByteString()
            });
        }

        public override async Task ServerStreaming(DidcommMessage request, IServerStreamWriter<DidcommMessage> responseStream, ServerCallContext context)
        {
            if (request.Type != TypeUrls.BasicMessage)
            {
                throw new Exception("Unsupported message type");
            }

            // Extract request message
            var basiMessage = new BasicMessage();
            basiMessage.MergeFrom(request.Body);

            await responseStream.WriteAsync(new DidcommMessage
            {
                Id = "1",
                From = "did:key:bob",
                Created = DateTimeOffset.Now.ToUnixTimeSeconds(),
                Body = new BasicMessage
                {
                    Text = "You said (streamed):"
                }.ToByteString()
            });

            // Send back response
            foreach (var letter in basiMessage.Text)
            {
                await responseStream.WriteAsync(new DidcommMessage
                {
                    Id = "1",
                    From = "did:key:bob",
                    Created = DateTimeOffset.Now.ToUnixTimeSeconds(),
                    Body = new BasicMessage
                    {
                        Text = $"{letter}"
                    }.ToByteString()
                });
            }
        }
    }
}