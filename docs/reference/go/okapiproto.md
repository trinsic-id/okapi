# okapiproto

## Variables

Enum value maps for KeyType.

```golang
var (
    KeyType_name = map[int32]string{
        0:  "KEY_TYPE_UNSPECIFIED",
        1:  "KEY_TYPE_ED25519",
        2:  "KEY_TYPE_X25519",
        3:  "KEY_TYPE_P256",
        4:  "KEY_TYPE_BLS12381G1G2",
        5:  "KEY_TYPE_SECP256K1",
    }
    KeyType_value = map[string]int32{
        "KEY_TYPE_UNSPECIFIED":  0,
        "KEY_TYPE_ED25519":      1,
        "KEY_TYPE_X25519":       2,
        "KEY_TYPE_P256":         3,
        "KEY_TYPE_BLS12381G1G2": 4,
        "KEY_TYPE_SECP256K1":    5,
    }
)
```

Enum value maps for EncryptionMode.

```golang
var (
    EncryptionMode_name = map[int32]string{
        0:  "ENCRYPTION_MODE_UNSPECIFIED",
        1:  "ENCRYPTION_MODE_DIRECT",
        2:  "ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY",
    }
    EncryptionMode_value = map[string]int32{
        "ENCRYPTION_MODE_UNSPECIFIED":            0,
        "ENCRYPTION_MODE_DIRECT":                 1,
        "ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY": 2,
    }
)
```

Enum value maps for EncryptionAlgorithm.

```golang
var (
    EncryptionAlgorithm_name = map[int32]string{
        0:  "ENCRYPTION_ALGORITHM_UNSPECIFIED",
        1:  "ENCRYPTION_ALGORITHM_XCHACHA20POLY1305",
        2:  "ENCRYPTION_ALGORITHM_AES_GCM",
    }
    EncryptionAlgorithm_value = map[string]int32{
        "ENCRYPTION_ALGORITHM_UNSPECIFIED":       0,
        "ENCRYPTION_ALGORITHM_XCHACHA20POLY1305": 1,
        "ENCRYPTION_ALGORITHM_AES_GCM":           2,
    }
)
```

Enum value maps for LdSuite.

```golang
var (
    LdSuite_name = map[int32]string{
        0:  "LD_SUITE_UNSPECIFIED",
        1:  "LD_SUITE_JCSED25519SIGNATURE2020",
    }
    LdSuite_value = map[string]int32{
        "LD_SUITE_UNSPECIFIED":             0,
        "LD_SUITE_JCSED25519SIGNATURE2020": 1,
    }
)
```

```golang
var File_okapi_examples_v1_examples_proto protoreflect.FileDescriptor
```

```golang
var File_okapi_keys_v1_keys_proto protoreflect.FileDescriptor
```

```golang
var File_okapi_proofs_v1_proofs_proto protoreflect.FileDescriptor
```

```golang
var File_okapi_security_v1_security_proto protoreflect.FileDescriptor
```

```golang
var File_okapi_transport_v1_transport_proto protoreflect.FileDescriptor
```

```golang
var File_pbmse_v1_pbmse_proto protoreflect.FileDescriptor
```

## Types

### type [BasicMessage](/examples.pb.go#L23)

`type BasicMessage struct { ... }`

#### func (*BasicMessage) [Descriptor](/examples.pb.go#L59)

`func (*BasicMessage) Descriptor() ([]byte, []int)`

Deprecated: Use BasicMessage.ProtoReflect.Descriptor instead.

#### func (*BasicMessage) [GetText](/examples.pb.go#L63)

`func (x *BasicMessage) GetText() string`

#### func (*BasicMessage) [ProtoMessage](/examples.pb.go#L44)

`func (*BasicMessage) ProtoMessage()`

#### func (*BasicMessage) [ProtoReflect](/examples.pb.go#L46)

`func (x *BasicMessage) ProtoReflect() protoreflect.Message`

#### func (*BasicMessage) [Reset](/examples.pb.go#L31)

`func (x *BasicMessage) Reset()`

#### func (*BasicMessage) [String](/examples.pb.go#L40)

`func (x *BasicMessage) String() string`

### type [BlindOberonTokenRequest](/security.pb.go#L483)

`type BlindOberonTokenRequest struct { ... }`

Blind an oberon token

#### func (*BlindOberonTokenRequest) [Descriptor](/security.pb.go#L520)

`func (*BlindOberonTokenRequest) Descriptor() ([]byte, []int)`

Deprecated: Use BlindOberonTokenRequest.ProtoReflect.Descriptor instead.

#### func (*BlindOberonTokenRequest) [GetBlinding](/security.pb.go#L531)

`func (x *BlindOberonTokenRequest) GetBlinding() [][]byte`

#### func (*BlindOberonTokenRequest) [GetToken](/security.pb.go#L524)

`func (x *BlindOberonTokenRequest) GetToken() []byte`

#### func (*BlindOberonTokenRequest) [ProtoMessage](/security.pb.go#L505)

`func (*BlindOberonTokenRequest) ProtoMessage()`

#### func (*BlindOberonTokenRequest) [ProtoReflect](/security.pb.go#L507)

`func (x *BlindOberonTokenRequest) ProtoReflect() protoreflect.Message`

#### func (*BlindOberonTokenRequest) [Reset](/security.pb.go#L492)

`func (x *BlindOberonTokenRequest) Reset()`

#### func (*BlindOberonTokenRequest) [String](/security.pb.go#L501)

`func (x *BlindOberonTokenRequest) String() string`

### type [BlindOberonTokenResponse](/security.pb.go#L539)

`type BlindOberonTokenResponse struct { ... }`

Contains the blinded token reply

#### func (*BlindOberonTokenResponse) [Descriptor](/security.pb.go#L575)

`func (*BlindOberonTokenResponse) Descriptor() ([]byte, []int)`

Deprecated: Use BlindOberonTokenResponse.ProtoReflect.Descriptor instead.

#### func (*BlindOberonTokenResponse) [GetToken](/security.pb.go#L579)

`func (x *BlindOberonTokenResponse) GetToken() []byte`

#### func (*BlindOberonTokenResponse) [ProtoMessage](/security.pb.go#L560)

`func (*BlindOberonTokenResponse) ProtoMessage()`

#### func (*BlindOberonTokenResponse) [ProtoReflect](/security.pb.go#L562)

`func (x *BlindOberonTokenResponse) ProtoReflect() protoreflect.Message`

#### func (*BlindOberonTokenResponse) [Reset](/security.pb.go#L547)

`func (x *BlindOberonTokenResponse) Reset()`

#### func (*BlindOberonTokenResponse) [String](/security.pb.go#L556)

`func (x *BlindOberonTokenResponse) String() string`

### type [CoreMessage](/transport.pb.go#L479)

`type CoreMessage struct { ... }`

#### func (*CoreMessage) [Descriptor](/transport.pb.go#L521)

`func (*CoreMessage) Descriptor() ([]byte, []int)`

Deprecated: Use CoreMessage.ProtoReflect.Descriptor instead.

#### func (*CoreMessage) [GetBody](/transport.pb.go#L539)

`func (x *CoreMessage) GetBody() []byte`

#### func (*CoreMessage) [GetCreated](/transport.pb.go#L560)

`func (x *CoreMessage) GetCreated() int64`

#### func (*CoreMessage) [GetExpires](/transport.pb.go#L567)

`func (x *CoreMessage) GetExpires() int64`

#### func (*CoreMessage) [GetFrom](/transport.pb.go#L553)

`func (x *CoreMessage) GetFrom() string`

#### func (*CoreMessage) [GetId](/transport.pb.go#L525)

`func (x *CoreMessage) GetId() string`

#### func (*CoreMessage) [GetTo](/transport.pb.go#L546)

`func (x *CoreMessage) GetTo() []string`

#### func (*CoreMessage) [GetType](/transport.pb.go#L532)

`func (x *CoreMessage) GetType() string`

#### func (*CoreMessage) [ProtoMessage](/transport.pb.go#L506)

`func (*CoreMessage) ProtoMessage()`

#### func (*CoreMessage) [ProtoReflect](/transport.pb.go#L508)

`func (x *CoreMessage) ProtoReflect() protoreflect.Message`

#### func (*CoreMessage) [Reset](/transport.pb.go#L493)

`func (x *CoreMessage) Reset()`

#### func (*CoreMessage) [String](/transport.pb.go#L502)

`func (x *CoreMessage) String() string`

### type [CreateOberonKeyRequest](/security.pb.go#L27)

`type CreateOberonKeyRequest struct { ... }`

Create an Oberon Compatible Secret Key

#### func (*CreateOberonKeyRequest) [Descriptor](/security.pb.go#L63)

`func (*CreateOberonKeyRequest) Descriptor() ([]byte, []int)`

Deprecated: Use CreateOberonKeyRequest.ProtoReflect.Descriptor instead.

#### func (*CreateOberonKeyRequest) [GetSeed](/security.pb.go#L67)

`func (x *CreateOberonKeyRequest) GetSeed() []byte`

#### func (*CreateOberonKeyRequest) [ProtoMessage](/security.pb.go#L48)

`func (*CreateOberonKeyRequest) ProtoMessage()`

#### func (*CreateOberonKeyRequest) [ProtoReflect](/security.pb.go#L50)

`func (x *CreateOberonKeyRequest) ProtoReflect() protoreflect.Message`

#### func (*CreateOberonKeyRequest) [Reset](/security.pb.go#L35)

`func (x *CreateOberonKeyRequest) Reset()`

#### func (*CreateOberonKeyRequest) [String](/security.pb.go#L44)

`func (x *CreateOberonKeyRequest) String() string`

### type [CreateOberonKeyResponse](/security.pb.go#L75)

`type CreateOberonKeyResponse struct { ... }`

Contains the oberon secret key bytes

#### func (*CreateOberonKeyResponse) [Descriptor](/security.pb.go#L112)

`func (*CreateOberonKeyResponse) Descriptor() ([]byte, []int)`

Deprecated: Use CreateOberonKeyResponse.ProtoReflect.Descriptor instead.

#### func (*CreateOberonKeyResponse) [GetPk](/security.pb.go#L123)

`func (x *CreateOberonKeyResponse) GetPk() []byte`

#### func (*CreateOberonKeyResponse) [GetSk](/security.pb.go#L116)

`func (x *CreateOberonKeyResponse) GetSk() []byte`

#### func (*CreateOberonKeyResponse) [ProtoMessage](/security.pb.go#L97)

`func (*CreateOberonKeyResponse) ProtoMessage()`

#### func (*CreateOberonKeyResponse) [ProtoReflect](/security.pb.go#L99)

`func (x *CreateOberonKeyResponse) ProtoReflect() protoreflect.Message`

#### func (*CreateOberonKeyResponse) [Reset](/security.pb.go#L84)

`func (x *CreateOberonKeyResponse) Reset()`

#### func (*CreateOberonKeyResponse) [String](/security.pb.go#L93)

`func (x *CreateOberonKeyResponse) String() string`

### type [CreateOberonProofRequest](/security.pb.go#L243)

`type CreateOberonProofRequest struct { ... }`

Create a proof that holder knows the token

#### func (*CreateOberonProofRequest) [Descriptor](/security.pb.go#L282)

`func (*CreateOberonProofRequest) Descriptor() ([]byte, []int)`

Deprecated: Use CreateOberonProofRequest.ProtoReflect.Descriptor instead.

#### func (*CreateOberonProofRequest) [GetBlinding](/security.pb.go#L300)

`func (x *CreateOberonProofRequest) GetBlinding() [][]byte`

#### func (*CreateOberonProofRequest) [GetData](/security.pb.go#L286)

`func (x *CreateOberonProofRequest) GetData() []byte`

#### func (*CreateOberonProofRequest) [GetNonce](/security.pb.go#L307)

`func (x *CreateOberonProofRequest) GetNonce() []byte`

#### func (*CreateOberonProofRequest) [GetToken](/security.pb.go#L293)

`func (x *CreateOberonProofRequest) GetToken() []byte`

#### func (*CreateOberonProofRequest) [ProtoMessage](/security.pb.go#L267)

`func (*CreateOberonProofRequest) ProtoMessage()`

#### func (*CreateOberonProofRequest) [ProtoReflect](/security.pb.go#L269)

`func (x *CreateOberonProofRequest) ProtoReflect() protoreflect.Message`

#### func (*CreateOberonProofRequest) [Reset](/security.pb.go#L254)

`func (x *CreateOberonProofRequest) Reset()`

#### func (*CreateOberonProofRequest) [String](/security.pb.go#L263)

`func (x *CreateOberonProofRequest) String() string`

### type [CreateOberonProofResponse](/security.pb.go#L315)

`type CreateOberonProofResponse struct { ... }`

Contains the token proof

#### func (*CreateOberonProofResponse) [Descriptor](/security.pb.go#L351)

`func (*CreateOberonProofResponse) Descriptor() ([]byte, []int)`

Deprecated: Use CreateOberonProofResponse.ProtoReflect.Descriptor instead.

#### func (*CreateOberonProofResponse) [GetProof](/security.pb.go#L355)

`func (x *CreateOberonProofResponse) GetProof() []byte`

#### func (*CreateOberonProofResponse) [ProtoMessage](/security.pb.go#L336)

`func (*CreateOberonProofResponse) ProtoMessage()`

#### func (*CreateOberonProofResponse) [ProtoReflect](/security.pb.go#L338)

`func (x *CreateOberonProofResponse) ProtoReflect() protoreflect.Message`

#### func (*CreateOberonProofResponse) [Reset](/security.pb.go#L323)

`func (x *CreateOberonProofResponse) Reset()`

#### func (*CreateOberonProofResponse) [String](/security.pb.go#L332)

`func (x *CreateOberonProofResponse) String() string`

### type [CreateOberonTokenRequest](/security.pb.go#L131)

`type CreateOberonTokenRequest struct { ... }`

Create a new oberon token

#### func (*CreateOberonTokenRequest) [Descriptor](/security.pb.go#L169)

`func (*CreateOberonTokenRequest) Descriptor() ([]byte, []int)`

Deprecated: Use CreateOberonTokenRequest.ProtoReflect.Descriptor instead.

#### func (*CreateOberonTokenRequest) [GetBlinding](/security.pb.go#L187)

`func (x *CreateOberonTokenRequest) GetBlinding() [][]byte`

#### func (*CreateOberonTokenRequest) [GetData](/security.pb.go#L180)

`func (x *CreateOberonTokenRequest) GetData() []byte`

#### func (*CreateOberonTokenRequest) [GetSk](/security.pb.go#L173)

`func (x *CreateOberonTokenRequest) GetSk() []byte`

#### func (*CreateOberonTokenRequest) [ProtoMessage](/security.pb.go#L154)

`func (*CreateOberonTokenRequest) ProtoMessage()`

#### func (*CreateOberonTokenRequest) [ProtoReflect](/security.pb.go#L156)

`func (x *CreateOberonTokenRequest) ProtoReflect() protoreflect.Message`

#### func (*CreateOberonTokenRequest) [Reset](/security.pb.go#L141)

`func (x *CreateOberonTokenRequest) Reset()`

#### func (*CreateOberonTokenRequest) [String](/security.pb.go#L150)

`func (x *CreateOberonTokenRequest) String() string`

### type [CreateOberonTokenResponse](/security.pb.go#L195)

`type CreateOberonTokenResponse struct { ... }`

Contains the token with optional blinding

#### func (*CreateOberonTokenResponse) [Descriptor](/security.pb.go#L231)

`func (*CreateOberonTokenResponse) Descriptor() ([]byte, []int)`

Deprecated: Use CreateOberonTokenResponse.ProtoReflect.Descriptor instead.

#### func (*CreateOberonTokenResponse) [GetToken](/security.pb.go#L235)

`func (x *CreateOberonTokenResponse) GetToken() []byte`

#### func (*CreateOberonTokenResponse) [ProtoMessage](/security.pb.go#L216)

`func (*CreateOberonTokenResponse) ProtoMessage()`

#### func (*CreateOberonTokenResponse) [ProtoReflect](/security.pb.go#L218)

`func (x *CreateOberonTokenResponse) ProtoReflect() protoreflect.Message`

#### func (*CreateOberonTokenResponse) [Reset](/security.pb.go#L203)

`func (x *CreateOberonTokenResponse) Reset()`

#### func (*CreateOberonTokenResponse) [String](/security.pb.go#L212)

`func (x *CreateOberonTokenResponse) String() string`

### type [CreateProofRequest](/proofs.pb.go#L70)

`type CreateProofRequest struct { ... }`

#### func (*CreateProofRequest) [Descriptor](/proofs.pb.go#L117)

`func (*CreateProofRequest) Descriptor() ([]byte, []int)`

Deprecated: Use CreateProofRequest.ProtoReflect.Descriptor instead.

#### func (*CreateProofRequest) [GetDocument](/proofs.pb.go#L121)

`func (x *CreateProofRequest) GetDocument() *structpb.Struct`

#### func (*CreateProofRequest) [GetKey](/proofs.pb.go#L128)

`func (x *CreateProofRequest) GetKey() *JsonWebKey`

#### func (*CreateProofRequest) [GetSuite](/proofs.pb.go#L135)

`func (x *CreateProofRequest) GetSuite() LdSuite`

#### func (*CreateProofRequest) [ProtoMessage](/proofs.pb.go#L102)

`func (*CreateProofRequest) ProtoMessage()`

#### func (*CreateProofRequest) [ProtoReflect](/proofs.pb.go#L104)

`func (x *CreateProofRequest) ProtoReflect() protoreflect.Message`

#### func (*CreateProofRequest) [Reset](/proofs.pb.go#L89)

`func (x *CreateProofRequest) Reset()`

#### func (*CreateProofRequest) [String](/proofs.pb.go#L98)

`func (x *CreateProofRequest) String() string`

### type [CreateProofResponse](/proofs.pb.go#L142)

`type CreateProofResponse struct { ... }`

#### func (*CreateProofResponse) [Descriptor](/proofs.pb.go#L178)

`func (*CreateProofResponse) Descriptor() ([]byte, []int)`

Deprecated: Use CreateProofResponse.ProtoReflect.Descriptor instead.

#### func (*CreateProofResponse) [GetSignedDocument](/proofs.pb.go#L182)

`func (x *CreateProofResponse) GetSignedDocument() *structpb.Struct`

#### func (*CreateProofResponse) [ProtoMessage](/proofs.pb.go#L163)

`func (*CreateProofResponse) ProtoMessage()`

#### func (*CreateProofResponse) [ProtoReflect](/proofs.pb.go#L165)

`func (x *CreateProofResponse) ProtoReflect() protoreflect.Message`

#### func (*CreateProofResponse) [Reset](/proofs.pb.go#L150)

`func (x *CreateProofResponse) Reset()`

#### func (*CreateProofResponse) [String](/proofs.pb.go#L159)

`func (x *CreateProofResponse) String() string`

### type [EncryptedMessage](/pbmse.pb.go#L288)

`type EncryptedMessage struct { ... }`

#### func (*EncryptedMessage) [Descriptor](/pbmse.pb.go#L328)

`func (*EncryptedMessage) Descriptor() ([]byte, []int)`

Deprecated: Use EncryptedMessage.ProtoReflect.Descriptor instead.

#### func (*EncryptedMessage) [GetAad](/pbmse.pb.go#L339)

`func (x *EncryptedMessage) GetAad() []byte`

#### func (*EncryptedMessage) [GetCiphertext](/pbmse.pb.go#L346)

`func (x *EncryptedMessage) GetCiphertext() []byte`

#### func (*EncryptedMessage) [GetIv](/pbmse.pb.go#L332)

`func (x *EncryptedMessage) GetIv() []byte`

#### func (*EncryptedMessage) [GetRecipients](/pbmse.pb.go#L360)

`func (x *EncryptedMessage) GetRecipients() []*EncryptionRecipient`

#### func (*EncryptedMessage) [GetTag](/pbmse.pb.go#L353)

`func (x *EncryptedMessage) GetTag() []byte`

#### func (*EncryptedMessage) [ProtoMessage](/pbmse.pb.go#L313)

`func (*EncryptedMessage) ProtoMessage()`

#### func (*EncryptedMessage) [ProtoReflect](/pbmse.pb.go#L315)

`func (x *EncryptedMessage) ProtoReflect() protoreflect.Message`

#### func (*EncryptedMessage) [Reset](/pbmse.pb.go#L300)

`func (x *EncryptedMessage) Reset()`

#### func (*EncryptedMessage) [String](/pbmse.pb.go#L309)

`func (x *EncryptedMessage) String() string`

### type [EncryptionAlgorithm](/pbmse.pb.go#L72)

`type EncryptionAlgorithm int32`

#### func (EncryptionAlgorithm) [Descriptor](/pbmse.pb.go#L104)

`func (EncryptionAlgorithm) Descriptor() protoreflect.EnumDescriptor`

#### func (EncryptionAlgorithm) [Enum](/pbmse.pb.go#L94)

`func (x EncryptionAlgorithm) Enum() *EncryptionAlgorithm`

#### func (EncryptionAlgorithm) [EnumDescriptor](/pbmse.pb.go#L117)

`func (EncryptionAlgorithm) EnumDescriptor() ([]byte, []int)`

Deprecated: Use EncryptionAlgorithm.Descriptor instead.

#### func (EncryptionAlgorithm) [Number](/pbmse.pb.go#L112)

`func (x EncryptionAlgorithm) Number() protoreflect.EnumNumber`

#### func (EncryptionAlgorithm) [String](/pbmse.pb.go#L100)

`func (x EncryptionAlgorithm) String() string`

#### func (EncryptionAlgorithm) [Type](/pbmse.pb.go#L108)

`func (EncryptionAlgorithm) Type() protoreflect.EnumType`

### type [EncryptionHeader](/pbmse.pb.go#L367)

`type EncryptionHeader struct { ... }`

#### func (*EncryptionHeader) [Descriptor](/pbmse.pb.go#L406)

`func (*EncryptionHeader) Descriptor() ([]byte, []int)`

Deprecated: Use EncryptionHeader.ProtoReflect.Descriptor instead.

#### func (*EncryptionHeader) [GetAlgorithm](/pbmse.pb.go#L417)

`func (x *EncryptionHeader) GetAlgorithm() EncryptionAlgorithm`

#### func (*EncryptionHeader) [GetKeyId](/pbmse.pb.go#L424)

`func (x *EncryptionHeader) GetKeyId() string`

#### func (*EncryptionHeader) [GetMode](/pbmse.pb.go#L410)

`func (x *EncryptionHeader) GetMode() EncryptionMode`

#### func (*EncryptionHeader) [GetSenderKeyId](/pbmse.pb.go#L431)

`func (x *EncryptionHeader) GetSenderKeyId() string`

#### func (*EncryptionHeader) [ProtoMessage](/pbmse.pb.go#L391)

`func (*EncryptionHeader) ProtoMessage()`

#### func (*EncryptionHeader) [ProtoReflect](/pbmse.pb.go#L393)

`func (x *EncryptionHeader) ProtoReflect() protoreflect.Message`

#### func (*EncryptionHeader) [Reset](/pbmse.pb.go#L378)

`func (x *EncryptionHeader) Reset()`

#### func (*EncryptionHeader) [String](/pbmse.pb.go#L387)

`func (x *EncryptionHeader) String() string`

### type [EncryptionMode](/pbmse.pb.go#L23)

`type EncryptionMode int32`

#### func (EncryptionMode) [Descriptor](/pbmse.pb.go#L55)

`func (EncryptionMode) Descriptor() protoreflect.EnumDescriptor`

#### func (EncryptionMode) [Enum](/pbmse.pb.go#L45)

`func (x EncryptionMode) Enum() *EncryptionMode`

#### func (EncryptionMode) [EnumDescriptor](/pbmse.pb.go#L68)

`func (EncryptionMode) EnumDescriptor() ([]byte, []int)`

Deprecated: Use EncryptionMode.Descriptor instead.

#### func (EncryptionMode) [Number](/pbmse.pb.go#L63)

`func (x EncryptionMode) Number() protoreflect.EnumNumber`

#### func (EncryptionMode) [String](/pbmse.pb.go#L51)

`func (x EncryptionMode) String() string`

#### func (EncryptionMode) [Type](/pbmse.pb.go#L59)

`func (EncryptionMode) Type() protoreflect.EnumType`

### type [EncryptionRecipient](/pbmse.pb.go#L438)

`type EncryptionRecipient struct { ... }`

#### func (*EncryptionRecipient) [Descriptor](/pbmse.pb.go#L475)

`func (*EncryptionRecipient) Descriptor() ([]byte, []int)`

Deprecated: Use EncryptionRecipient.ProtoReflect.Descriptor instead.

#### func (*EncryptionRecipient) [GetContentEncryptionKey](/pbmse.pb.go#L486)

`func (x *EncryptionRecipient) GetContentEncryptionKey() []byte`

#### func (*EncryptionRecipient) [GetHeader](/pbmse.pb.go#L479)

`func (x *EncryptionRecipient) GetHeader() *EncryptionHeader`

#### func (*EncryptionRecipient) [ProtoMessage](/pbmse.pb.go#L460)

`func (*EncryptionRecipient) ProtoMessage()`

#### func (*EncryptionRecipient) [ProtoReflect](/pbmse.pb.go#L462)

`func (x *EncryptionRecipient) ProtoReflect() protoreflect.Message`

#### func (*EncryptionRecipient) [Reset](/pbmse.pb.go#L447)

`func (x *EncryptionRecipient) Reset()`

#### func (*EncryptionRecipient) [String](/pbmse.pb.go#L456)

`func (x *EncryptionRecipient) String() string`

### type [GenerateKeyRequest](/keys.pb.go#L82)

`type GenerateKeyRequest struct { ... }`

#### func (*GenerateKeyRequest) [Descriptor](/keys.pb.go#L119)

`func (*GenerateKeyRequest) Descriptor() ([]byte, []int)`

Deprecated: Use GenerateKeyRequest.ProtoReflect.Descriptor instead.

#### func (*GenerateKeyRequest) [GetKeyType](/keys.pb.go#L130)

`func (x *GenerateKeyRequest) GetKeyType() KeyType`

#### func (*GenerateKeyRequest) [GetSeed](/keys.pb.go#L123)

`func (x *GenerateKeyRequest) GetSeed() []byte`

#### func (*GenerateKeyRequest) [ProtoMessage](/keys.pb.go#L104)

`func (*GenerateKeyRequest) ProtoMessage()`

#### func (*GenerateKeyRequest) [ProtoReflect](/keys.pb.go#L106)

`func (x *GenerateKeyRequest) ProtoReflect() protoreflect.Message`

#### func (*GenerateKeyRequest) [Reset](/keys.pb.go#L91)

`func (x *GenerateKeyRequest) Reset()`

#### func (*GenerateKeyRequest) [String](/keys.pb.go#L100)

`func (x *GenerateKeyRequest) String() string`

### type [GenerateKeyResponse](/keys.pb.go#L137)

`type GenerateKeyResponse struct { ... }`

#### func (*GenerateKeyResponse) [Descriptor](/keys.pb.go#L174)

`func (*GenerateKeyResponse) Descriptor() ([]byte, []int)`

Deprecated: Use GenerateKeyResponse.ProtoReflect.Descriptor instead.

#### func (*GenerateKeyResponse) [GetDidDocument](/keys.pb.go#L185)

`func (x *GenerateKeyResponse) GetDidDocument() *structpb.Struct`

#### func (*GenerateKeyResponse) [GetKey](/keys.pb.go#L178)

`func (x *GenerateKeyResponse) GetKey() []*JsonWebKey`

#### func (*GenerateKeyResponse) [ProtoMessage](/keys.pb.go#L159)

`func (*GenerateKeyResponse) ProtoMessage()`

#### func (*GenerateKeyResponse) [ProtoReflect](/keys.pb.go#L161)

`func (x *GenerateKeyResponse) ProtoReflect() protoreflect.Message`

#### func (*GenerateKeyResponse) [Reset](/keys.pb.go#L146)

`func (x *GenerateKeyResponse) Reset()`

#### func (*GenerateKeyResponse) [String](/keys.pb.go#L155)

`func (x *GenerateKeyResponse) String() string`

### type [JsonWebKey](/keys.pb.go#L294)

`type JsonWebKey struct { ... }`

#### func (*JsonWebKey) [Descriptor](/keys.pb.go#L335)

`func (*JsonWebKey) Descriptor() ([]byte, []int)`

Deprecated: Use JsonWebKey.ProtoReflect.Descriptor instead.

#### func (*JsonWebKey) [GetCrv](/keys.pb.go#L367)

`func (x *JsonWebKey) GetCrv() string`

#### func (*JsonWebKey) [GetD](/keys.pb.go#L360)

`func (x *JsonWebKey) GetD() string`

#### func (*JsonWebKey) [GetKid](/keys.pb.go#L339)

`func (x *JsonWebKey) GetKid() string`

#### func (*JsonWebKey) [GetKty](/keys.pb.go#L374)

`func (x *JsonWebKey) GetKty() string`

#### func (*JsonWebKey) [GetX](/keys.pb.go#L346)

`func (x *JsonWebKey) GetX() string`

#### func (*JsonWebKey) [GetY](/keys.pb.go#L353)

`func (x *JsonWebKey) GetY() string`

#### func (*JsonWebKey) [ProtoMessage](/keys.pb.go#L320)

`func (*JsonWebKey) ProtoMessage()`

#### func (*JsonWebKey) [ProtoReflect](/keys.pb.go#L322)

`func (x *JsonWebKey) ProtoReflect() protoreflect.Message`

#### func (*JsonWebKey) [Reset](/keys.pb.go#L307)

`func (x *JsonWebKey) Reset()`

#### func (*JsonWebKey) [String](/keys.pb.go#L316)

`func (x *JsonWebKey) String() string`

### type [KeyType](/keys.pb.go#L24)

`type KeyType int32`

#### func (KeyType) [Descriptor](/keys.pb.go#L65)

`func (KeyType) Descriptor() protoreflect.EnumDescriptor`

#### func (KeyType) [Enum](/keys.pb.go#L55)

`func (x KeyType) Enum() *KeyType`

#### func (KeyType) [EnumDescriptor](/keys.pb.go#L78)

`func (KeyType) EnumDescriptor() ([]byte, []int)`

Deprecated: Use KeyType.Descriptor instead.

#### func (KeyType) [Number](/keys.pb.go#L73)

`func (x KeyType) Number() protoreflect.EnumNumber`

#### func (KeyType) [String](/keys.pb.go#L61)

`func (x KeyType) String() string`

#### func (KeyType) [Type](/keys.pb.go#L69)

`func (KeyType) Type() protoreflect.EnumType`

### type [LdSuite](/proofs.pb.go#L24)

`type LdSuite int32`

#### func (LdSuite) [Descriptor](/proofs.pb.go#L53)

`func (LdSuite) Descriptor() protoreflect.EnumDescriptor`

#### func (LdSuite) [Enum](/proofs.pb.go#L43)

`func (x LdSuite) Enum() *LdSuite`

#### func (LdSuite) [EnumDescriptor](/proofs.pb.go#L66)

`func (LdSuite) EnumDescriptor() ([]byte, []int)`

Deprecated: Use LdSuite.Descriptor instead.

#### func (LdSuite) [Number](/proofs.pb.go#L61)

`func (x LdSuite) Number() protoreflect.EnumNumber`

#### func (LdSuite) [String](/proofs.pb.go#L49)

`func (x LdSuite) String() string`

#### func (LdSuite) [Type](/proofs.pb.go#L57)

`func (LdSuite) Type() protoreflect.EnumType`

### type [PackRequest](/transport.pb.go#L235)

`type PackRequest struct { ... }`

#### func (*PackRequest) [Descriptor](/transport.pb.go#L276)

`func (*PackRequest) Descriptor() ([]byte, []int)`

Deprecated: Use PackRequest.ProtoReflect.Descriptor instead.

#### func (*PackRequest) [GetAlgorithm](/transport.pb.go#L315)

`func (x *PackRequest) GetAlgorithm() EncryptionAlgorithm`

#### func (*PackRequest) [GetAssociatedData](/transport.pb.go#L294)

`func (x *PackRequest) GetAssociatedData() []byte`

#### func (*PackRequest) [GetMode](/transport.pb.go#L308)

`func (x *PackRequest) GetMode() EncryptionMode`

#### func (*PackRequest) [GetPlaintext](/transport.pb.go#L301)

`func (x *PackRequest) GetPlaintext() []byte`

#### func (*PackRequest) [GetReceiverKey](/transport.pb.go#L287)

`func (x *PackRequest) GetReceiverKey() *JsonWebKey`

#### func (*PackRequest) [GetSenderKey](/transport.pb.go#L280)

`func (x *PackRequest) GetSenderKey() *JsonWebKey`

#### func (*PackRequest) [ProtoMessage](/transport.pb.go#L261)

`func (*PackRequest) ProtoMessage()`

#### func (*PackRequest) [ProtoReflect](/transport.pb.go#L263)

`func (x *PackRequest) ProtoReflect() protoreflect.Message`

#### func (*PackRequest) [Reset](/transport.pb.go#L248)

`func (x *PackRequest) Reset()`

#### func (*PackRequest) [String](/transport.pb.go#L257)

`func (x *PackRequest) String() string`

### type [PackResponse](/transport.pb.go#L322)

`type PackResponse struct { ... }`

#### func (*PackResponse) [Descriptor](/transport.pb.go#L358)

`func (*PackResponse) Descriptor() ([]byte, []int)`

Deprecated: Use PackResponse.ProtoReflect.Descriptor instead.

#### func (*PackResponse) [GetMessage](/transport.pb.go#L362)

`func (x *PackResponse) GetMessage() *EncryptedMessage`

#### func (*PackResponse) [ProtoMessage](/transport.pb.go#L343)

`func (*PackResponse) ProtoMessage()`

#### func (*PackResponse) [ProtoReflect](/transport.pb.go#L345)

`func (x *PackResponse) ProtoReflect() protoreflect.Message`

#### func (*PackResponse) [Reset](/transport.pb.go#L330)

`func (x *PackResponse) Reset()`

#### func (*PackResponse) [String](/transport.pb.go#L339)

`func (x *PackResponse) String() string`

### type [ResolveRequest](/keys.pb.go#L192)

`type ResolveRequest struct { ... }`

#### func (*ResolveRequest) [Descriptor](/keys.pb.go#L228)

`func (*ResolveRequest) Descriptor() ([]byte, []int)`

Deprecated: Use ResolveRequest.ProtoReflect.Descriptor instead.

#### func (*ResolveRequest) [GetDid](/keys.pb.go#L232)

`func (x *ResolveRequest) GetDid() string`

#### func (*ResolveRequest) [ProtoMessage](/keys.pb.go#L213)

`func (*ResolveRequest) ProtoMessage()`

#### func (*ResolveRequest) [ProtoReflect](/keys.pb.go#L215)

`func (x *ResolveRequest) ProtoReflect() protoreflect.Message`

#### func (*ResolveRequest) [Reset](/keys.pb.go#L200)

`func (x *ResolveRequest) Reset()`

#### func (*ResolveRequest) [String](/keys.pb.go#L209)

`func (x *ResolveRequest) String() string`

### type [ResolveResponse](/keys.pb.go#L239)

`type ResolveResponse struct { ... }`

#### func (*ResolveResponse) [Descriptor](/keys.pb.go#L276)

`func (*ResolveResponse) Descriptor() ([]byte, []int)`

Deprecated: Use ResolveResponse.ProtoReflect.Descriptor instead.

#### func (*ResolveResponse) [GetDidDocument](/keys.pb.go#L280)

`func (x *ResolveResponse) GetDidDocument() *structpb.Struct`

#### func (*ResolveResponse) [GetKeys](/keys.pb.go#L287)

`func (x *ResolveResponse) GetKeys() []*JsonWebKey`

#### func (*ResolveResponse) [ProtoMessage](/keys.pb.go#L261)

`func (*ResolveResponse) ProtoMessage()`

#### func (*ResolveResponse) [ProtoReflect](/keys.pb.go#L263)

`func (x *ResolveResponse) ProtoReflect() protoreflect.Message`

#### func (*ResolveResponse) [Reset](/keys.pb.go#L248)

`func (x *ResolveResponse) Reset()`

#### func (*ResolveResponse) [String](/keys.pb.go#L257)

`func (x *ResolveResponse) String() string`

### type [SignRequest](/transport.pb.go#L23)

`type SignRequest struct { ... }`

#### func (*SignRequest) [Descriptor](/transport.pb.go#L61)

`func (*SignRequest) Descriptor() ([]byte, []int)`

Deprecated: Use SignRequest.ProtoReflect.Descriptor instead.

#### func (*SignRequest) [GetAppendTo](/transport.pb.go#L79)

`func (x *SignRequest) GetAppendTo() *SignedMessage`

#### func (*SignRequest) [GetKey](/transport.pb.go#L72)

`func (x *SignRequest) GetKey() *JsonWebKey`

#### func (*SignRequest) [GetPayload](/transport.pb.go#L65)

`func (x *SignRequest) GetPayload() []byte`

#### func (*SignRequest) [ProtoMessage](/transport.pb.go#L46)

`func (*SignRequest) ProtoMessage()`

#### func (*SignRequest) [ProtoReflect](/transport.pb.go#L48)

`func (x *SignRequest) ProtoReflect() protoreflect.Message`

#### func (*SignRequest) [Reset](/transport.pb.go#L33)

`func (x *SignRequest) Reset()`

#### func (*SignRequest) [String](/transport.pb.go#L42)

`func (x *SignRequest) String() string`

### type [SignResponse](/transport.pb.go#L86)

`type SignResponse struct { ... }`

#### func (*SignResponse) [Descriptor](/transport.pb.go#L122)

`func (*SignResponse) Descriptor() ([]byte, []int)`

Deprecated: Use SignResponse.ProtoReflect.Descriptor instead.

#### func (*SignResponse) [GetMessage](/transport.pb.go#L126)

`func (x *SignResponse) GetMessage() *SignedMessage`

#### func (*SignResponse) [ProtoMessage](/transport.pb.go#L107)

`func (*SignResponse) ProtoMessage()`

#### func (*SignResponse) [ProtoReflect](/transport.pb.go#L109)

`func (x *SignResponse) ProtoReflect() protoreflect.Message`

#### func (*SignResponse) [Reset](/transport.pb.go#L94)

`func (x *SignResponse) Reset()`

#### func (*SignResponse) [String](/transport.pb.go#L103)

`func (x *SignResponse) String() string`

### type [Signature](/pbmse.pb.go#L178)

`type Signature struct { ... }`

#### func (*Signature) [Descriptor](/pbmse.pb.go#L215)

`func (*Signature) Descriptor() ([]byte, []int)`

Deprecated: Use Signature.ProtoReflect.Descriptor instead.

#### func (*Signature) [GetHeader](/pbmse.pb.go#L219)

`func (x *Signature) GetHeader() []byte`

#### func (*Signature) [GetSignature](/pbmse.pb.go#L226)

`func (x *Signature) GetSignature() []byte`

#### func (*Signature) [ProtoMessage](/pbmse.pb.go#L200)

`func (*Signature) ProtoMessage()`

#### func (*Signature) [ProtoReflect](/pbmse.pb.go#L202)

`func (x *Signature) ProtoReflect() protoreflect.Message`

#### func (*Signature) [Reset](/pbmse.pb.go#L187)

`func (x *Signature) Reset()`

#### func (*Signature) [String](/pbmse.pb.go#L196)

`func (x *Signature) String() string`

### type [SignatureHeader](/pbmse.pb.go#L233)

`type SignatureHeader struct { ... }`

#### func (*SignatureHeader) [Descriptor](/pbmse.pb.go#L270)

`func (*SignatureHeader) Descriptor() ([]byte, []int)`

Deprecated: Use SignatureHeader.ProtoReflect.Descriptor instead.

#### func (*SignatureHeader) [GetAlgorithm](/pbmse.pb.go#L274)

`func (x *SignatureHeader) GetAlgorithm() string`

#### func (*SignatureHeader) [GetKeyId](/pbmse.pb.go#L281)

`func (x *SignatureHeader) GetKeyId() string`

#### func (*SignatureHeader) [ProtoMessage](/pbmse.pb.go#L255)

`func (*SignatureHeader) ProtoMessage()`

#### func (*SignatureHeader) [ProtoReflect](/pbmse.pb.go#L257)

`func (x *SignatureHeader) ProtoReflect() protoreflect.Message`

#### func (*SignatureHeader) [Reset](/pbmse.pb.go#L242)

`func (x *SignatureHeader) Reset()`

#### func (*SignatureHeader) [String](/pbmse.pb.go#L251)

`func (x *SignatureHeader) String() string`

### type [SignedMessage](/pbmse.pb.go#L123)

`type SignedMessage struct { ... }`

JWS
Protocol buffer message signing and encryption

#### func (*SignedMessage) [Descriptor](/pbmse.pb.go#L160)

`func (*SignedMessage) Descriptor() ([]byte, []int)`

Deprecated: Use SignedMessage.ProtoReflect.Descriptor instead.

#### func (*SignedMessage) [GetPayload](/pbmse.pb.go#L164)

`func (x *SignedMessage) GetPayload() []byte`

#### func (*SignedMessage) [GetSignatures](/pbmse.pb.go#L171)

`func (x *SignedMessage) GetSignatures() []*Signature`

#### func (*SignedMessage) [ProtoMessage](/pbmse.pb.go#L145)

`func (*SignedMessage) ProtoMessage()`

#### func (*SignedMessage) [ProtoReflect](/pbmse.pb.go#L147)

`func (x *SignedMessage) ProtoReflect() protoreflect.Message`

#### func (*SignedMessage) [Reset](/pbmse.pb.go#L132)

`func (x *SignedMessage) Reset()`

#### func (*SignedMessage) [String](/pbmse.pb.go#L141)

`func (x *SignedMessage) String() string`

### type [UnBlindOberonTokenRequest](/security.pb.go#L587)

`type UnBlindOberonTokenRequest struct { ... }`

UnBlind an oberon token

#### func (*UnBlindOberonTokenRequest) [Descriptor](/security.pb.go#L624)

`func (*UnBlindOberonTokenRequest) Descriptor() ([]byte, []int)`

Deprecated: Use UnBlindOberonTokenRequest.ProtoReflect.Descriptor instead.

#### func (*UnBlindOberonTokenRequest) [GetBlinding](/security.pb.go#L635)

`func (x *UnBlindOberonTokenRequest) GetBlinding() [][]byte`

#### func (*UnBlindOberonTokenRequest) [GetToken](/security.pb.go#L628)

`func (x *UnBlindOberonTokenRequest) GetToken() []byte`

#### func (*UnBlindOberonTokenRequest) [ProtoMessage](/security.pb.go#L609)

`func (*UnBlindOberonTokenRequest) ProtoMessage()`

#### func (*UnBlindOberonTokenRequest) [ProtoReflect](/security.pb.go#L611)

`func (x *UnBlindOberonTokenRequest) ProtoReflect() protoreflect.Message`

#### func (*UnBlindOberonTokenRequest) [Reset](/security.pb.go#L596)

`func (x *UnBlindOberonTokenRequest) Reset()`

#### func (*UnBlindOberonTokenRequest) [String](/security.pb.go#L605)

`func (x *UnBlindOberonTokenRequest) String() string`

### type [UnBlindOberonTokenResponse](/security.pb.go#L643)

`type UnBlindOberonTokenResponse struct { ... }`

Contains the unblinded token reply

#### func (*UnBlindOberonTokenResponse) [Descriptor](/security.pb.go#L679)

`func (*UnBlindOberonTokenResponse) Descriptor() ([]byte, []int)`

Deprecated: Use UnBlindOberonTokenResponse.ProtoReflect.Descriptor instead.

#### func (*UnBlindOberonTokenResponse) [GetToken](/security.pb.go#L683)

`func (x *UnBlindOberonTokenResponse) GetToken() []byte`

#### func (*UnBlindOberonTokenResponse) [ProtoMessage](/security.pb.go#L664)

`func (*UnBlindOberonTokenResponse) ProtoMessage()`

#### func (*UnBlindOberonTokenResponse) [ProtoReflect](/security.pb.go#L666)

`func (x *UnBlindOberonTokenResponse) ProtoReflect() protoreflect.Message`

#### func (*UnBlindOberonTokenResponse) [Reset](/security.pb.go#L651)

`func (x *UnBlindOberonTokenResponse) Reset()`

#### func (*UnBlindOberonTokenResponse) [String](/security.pb.go#L660)

`func (x *UnBlindOberonTokenResponse) String() string`

### type [UnpackRequest](/transport.pb.go#L369)

`type UnpackRequest struct { ... }`

#### func (*UnpackRequest) [Descriptor](/transport.pb.go#L407)

`func (*UnpackRequest) Descriptor() ([]byte, []int)`

Deprecated: Use UnpackRequest.ProtoReflect.Descriptor instead.

#### func (*UnpackRequest) [GetMessage](/transport.pb.go#L425)

`func (x *UnpackRequest) GetMessage() *EncryptedMessage`

#### func (*UnpackRequest) [GetReceiverKey](/transport.pb.go#L418)

`func (x *UnpackRequest) GetReceiverKey() *JsonWebKey`

#### func (*UnpackRequest) [GetSenderKey](/transport.pb.go#L411)

`func (x *UnpackRequest) GetSenderKey() *JsonWebKey`

#### func (*UnpackRequest) [ProtoMessage](/transport.pb.go#L392)

`func (*UnpackRequest) ProtoMessage()`

#### func (*UnpackRequest) [ProtoReflect](/transport.pb.go#L394)

`func (x *UnpackRequest) ProtoReflect() protoreflect.Message`

#### func (*UnpackRequest) [Reset](/transport.pb.go#L379)

`func (x *UnpackRequest) Reset()`

#### func (*UnpackRequest) [String](/transport.pb.go#L388)

`func (x *UnpackRequest) String() string`

### type [UnpackResponse](/transport.pb.go#L432)

`type UnpackResponse struct { ... }`

#### func (*UnpackResponse) [Descriptor](/transport.pb.go#L468)

`func (*UnpackResponse) Descriptor() ([]byte, []int)`

Deprecated: Use UnpackResponse.ProtoReflect.Descriptor instead.

#### func (*UnpackResponse) [GetPlaintext](/transport.pb.go#L472)

`func (x *UnpackResponse) GetPlaintext() []byte`

#### func (*UnpackResponse) [ProtoMessage](/transport.pb.go#L453)

`func (*UnpackResponse) ProtoMessage()`

#### func (*UnpackResponse) [ProtoReflect](/transport.pb.go#L455)

`func (x *UnpackResponse) ProtoReflect() protoreflect.Message`

#### func (*UnpackResponse) [Reset](/transport.pb.go#L440)

`func (x *UnpackResponse) Reset()`

#### func (*UnpackResponse) [String](/transport.pb.go#L449)

`func (x *UnpackResponse) String() string`

### type [VerifyOberonProofRequest](/security.pb.go#L363)

`type VerifyOberonProofRequest struct { ... }`

Verify the presented proof is valid

#### func (*VerifyOberonProofRequest) [Descriptor](/security.pb.go#L402)

`func (*VerifyOberonProofRequest) Descriptor() ([]byte, []int)`

Deprecated: Use VerifyOberonProofRequest.ProtoReflect.Descriptor instead.

#### func (*VerifyOberonProofRequest) [GetData](/security.pb.go#L413)

`func (x *VerifyOberonProofRequest) GetData() []byte`

#### func (*VerifyOberonProofRequest) [GetNonce](/security.pb.go#L420)

`func (x *VerifyOberonProofRequest) GetNonce() []byte`

#### func (*VerifyOberonProofRequest) [GetPk](/security.pb.go#L427)

`func (x *VerifyOberonProofRequest) GetPk() []byte`

#### func (*VerifyOberonProofRequest) [GetProof](/security.pb.go#L406)

`func (x *VerifyOberonProofRequest) GetProof() []byte`

#### func (*VerifyOberonProofRequest) [ProtoMessage](/security.pb.go#L387)

`func (*VerifyOberonProofRequest) ProtoMessage()`

#### func (*VerifyOberonProofRequest) [ProtoReflect](/security.pb.go#L389)

`func (x *VerifyOberonProofRequest) ProtoReflect() protoreflect.Message`

#### func (*VerifyOberonProofRequest) [Reset](/security.pb.go#L374)

`func (x *VerifyOberonProofRequest) Reset()`

#### func (*VerifyOberonProofRequest) [String](/security.pb.go#L383)

`func (x *VerifyOberonProofRequest) String() string`

### type [VerifyOberonProofResponse](/security.pb.go#L435)

`type VerifyOberonProofResponse struct { ... }`

Contains the status of the proof validation

#### func (*VerifyOberonProofResponse) [Descriptor](/security.pb.go#L471)

`func (*VerifyOberonProofResponse) Descriptor() ([]byte, []int)`

Deprecated: Use VerifyOberonProofResponse.ProtoReflect.Descriptor instead.

#### func (*VerifyOberonProofResponse) [GetValid](/security.pb.go#L475)

`func (x *VerifyOberonProofResponse) GetValid() bool`

#### func (*VerifyOberonProofResponse) [ProtoMessage](/security.pb.go#L456)

`func (*VerifyOberonProofResponse) ProtoMessage()`

#### func (*VerifyOberonProofResponse) [ProtoReflect](/security.pb.go#L458)

`func (x *VerifyOberonProofResponse) ProtoReflect() protoreflect.Message`

#### func (*VerifyOberonProofResponse) [Reset](/security.pb.go#L443)

`func (x *VerifyOberonProofResponse) Reset()`

#### func (*VerifyOberonProofResponse) [String](/security.pb.go#L452)

`func (x *VerifyOberonProofResponse) String() string`

### type [VerifyProofRequest](/proofs.pb.go#L189)

`type VerifyProofRequest struct { ... }`

#### func (*VerifyProofRequest) [Descriptor](/proofs.pb.go#L223)

`func (*VerifyProofRequest) Descriptor() ([]byte, []int)`

Deprecated: Use VerifyProofRequest.ProtoReflect.Descriptor instead.

#### func (*VerifyProofRequest) [ProtoMessage](/proofs.pb.go#L208)

`func (*VerifyProofRequest) ProtoMessage()`

#### func (*VerifyProofRequest) [ProtoReflect](/proofs.pb.go#L210)

`func (x *VerifyProofRequest) ProtoReflect() protoreflect.Message`

#### func (*VerifyProofRequest) [Reset](/proofs.pb.go#L195)

`func (x *VerifyProofRequest) Reset()`

#### func (*VerifyProofRequest) [String](/proofs.pb.go#L204)

`func (x *VerifyProofRequest) String() string`

### type [VerifyProofResponse](/proofs.pb.go#L227)

`type VerifyProofResponse struct { ... }`

#### func (*VerifyProofResponse) [Descriptor](/proofs.pb.go#L261)

`func (*VerifyProofResponse) Descriptor() ([]byte, []int)`

Deprecated: Use VerifyProofResponse.ProtoReflect.Descriptor instead.

#### func (*VerifyProofResponse) [ProtoMessage](/proofs.pb.go#L246)

`func (*VerifyProofResponse) ProtoMessage()`

#### func (*VerifyProofResponse) [ProtoReflect](/proofs.pb.go#L248)

`func (x *VerifyProofResponse) ProtoReflect() protoreflect.Message`

#### func (*VerifyProofResponse) [Reset](/proofs.pb.go#L233)

`func (x *VerifyProofResponse) Reset()`

#### func (*VerifyProofResponse) [String](/proofs.pb.go#L242)

`func (x *VerifyProofResponse) String() string`

### type [VerifyRequest](/transport.pb.go#L133)

`type VerifyRequest struct { ... }`

#### func (*VerifyRequest) [Descriptor](/transport.pb.go#L170)

`func (*VerifyRequest) Descriptor() ([]byte, []int)`

Deprecated: Use VerifyRequest.ProtoReflect.Descriptor instead.

#### func (*VerifyRequest) [GetKey](/transport.pb.go#L181)

`func (x *VerifyRequest) GetKey() *JsonWebKey`

#### func (*VerifyRequest) [GetMessage](/transport.pb.go#L174)

`func (x *VerifyRequest) GetMessage() *SignedMessage`

#### func (*VerifyRequest) [ProtoMessage](/transport.pb.go#L155)

`func (*VerifyRequest) ProtoMessage()`

#### func (*VerifyRequest) [ProtoReflect](/transport.pb.go#L157)

`func (x *VerifyRequest) ProtoReflect() protoreflect.Message`

#### func (*VerifyRequest) [Reset](/transport.pb.go#L142)

`func (x *VerifyRequest) Reset()`

#### func (*VerifyRequest) [String](/transport.pb.go#L151)

`func (x *VerifyRequest) String() string`

### type [VerifyResponse](/transport.pb.go#L188)

`type VerifyResponse struct { ... }`

#### func (*VerifyResponse) [Descriptor](/transport.pb.go#L224)

`func (*VerifyResponse) Descriptor() ([]byte, []int)`

Deprecated: Use VerifyResponse.ProtoReflect.Descriptor instead.

#### func (*VerifyResponse) [GetIsValid](/transport.pb.go#L228)

`func (x *VerifyResponse) GetIsValid() bool`

#### func (*VerifyResponse) [ProtoMessage](/transport.pb.go#L209)

`func (*VerifyResponse) ProtoMessage()`

#### func (*VerifyResponse) [ProtoReflect](/transport.pb.go#L211)

`func (x *VerifyResponse) ProtoReflect() protoreflect.Message`

#### func (*VerifyResponse) [Reset](/transport.pb.go#L196)

`func (x *VerifyResponse) Reset()`

#### func (*VerifyResponse) [String](/transport.pb.go#L205)

`func (x *VerifyResponse) String() string`

---
Readme created from Go doc with [goreadme](https://github.com/posener/goreadme)
