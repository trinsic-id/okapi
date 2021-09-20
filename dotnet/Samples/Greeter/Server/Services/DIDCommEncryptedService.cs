﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Common;
using Google.Protobuf;
using Grpc.Core;
using Okapi.Examples;
using Okapi.Transport;
using Pbmse;

namespace Server
{
    public class DIDCommEncryptedService : SecureExample.SecureExampleBase
    {
        public override Task<EncryptedMessage> Unary(EncryptedMessage request, ServerCallContext context)
        {
            var response = DIDComm.Unpack(new UnpackRequest { Message = request, ReceiverKey = Bob.SecretKey, SenderKey = Alice.PublicKey });

            var message = new BasicMessage();
            message.MergeFrom(response.Plaintext);

            var reply = new BasicMessage { Text = $"You said: {message.Text}" };
            var encryptedReply = DIDComm.Pack(new PackRequest { Plaintext = reply.ToByteString(), ReceiverKey = Alice.PublicKey, SenderKey = Bob.SecretKey });

            return Task.FromResult(encryptedReply.Message);
        }

        public override async Task ServerStreaming(EncryptedMessage request, IServerStreamWriter<EncryptedMessage> responseStream, ServerCallContext context)
        {
            var response = DIDComm.Unpack(new UnpackRequest { Message = request, ReceiverKey = Bob.SecretKey, SenderKey = Alice.PublicKey });

            var message = new BasicMessage();
            message.MergeFrom(response.Plaintext);

            foreach (var letter in message.Text)
            {
                var reply = new BasicMessage { Text = $"You said: {letter}" };
                var encryptedReply = DIDComm.Pack(new PackRequest { Plaintext = reply.ToByteString(), ReceiverKey = Alice.PublicKey, SenderKey = Bob.SecretKey });

                await responseStream.WriteAsync(encryptedReply.Message);
            }
        }
    }
}