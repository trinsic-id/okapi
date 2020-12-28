# Java didcomm GRPC
To use the didcomm-grpc functions, add the jar to your project. You'll need to import the DIDComm and DIDKey classes. The protobuf classes are found in DIDComm.Messaging.Proto.
```
import DIDComm.Messaging.gRPC.DIDComm;
import DIDComm.Messaging.gRPC.DIDKey;
import DIDComm.Messaging.Proto.*;
```


## DIDComm
### Pack
The Pack function takes a PackRequest as the only argument and returns a PackResponse
```
API.PackRequest packRequest = API.PackRequest.newBuilder()
                        .setPlaintext(message.toByteString())
                        .setReceiverKey(keys.bobPublic())
                        .setSenderKey(keys.aliceSecret())
                        .build();
API.PackResponse packResponse = DIDComm.Pack(packRequest);
```

### Unpack
The Unpack function takes an UnpackRequest as the only argument and returns a UnpackResponse
```
API.UnpackRequest unpackRequest = API.UnpackRequest.newBuilder()
                        .setMessage(Security.EncryptedMessage.parseFrom(serverResponse))
                        .setReceiverKey(keys.aliceSecret())
                        .setSenderKey(keys.bobPublic())
                        .build();

API.UnpackResponse resp = DIDComm.Unpack(unpackRequest);
```

### Verify
The Verify function takes an VerifyRequest as the only argument and returns a VerifyResponse

### Sign
The Sign function takes an SignRequest as the only argument and returns a SignResponse

## DIDKey
### Generate
The Generate function takes an GenerateKeyRequest as the only argument and returns a GenerateKeyResponse
```
API.GenerateKeyRequest keyRequest = API.GenerateKeyRequest.newBuilder().setKeyType(API.KeyType.x25519).build();
API.GenerateKeyResponse keyResponse = DIDKey.Generate(keyRequest);
```

### Convert
The Convert function takes an ConvertKeyRequest as the only argument and returns a ConvertKeyResponse
