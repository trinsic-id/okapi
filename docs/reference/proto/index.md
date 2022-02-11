# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [okapi/examples/v1/examples.proto](#okapi/examples/v1/examples.proto)
    - [BasicMessage](#okapi.examples.v1.BasicMessage)
  
    - [SecureExampleService](#okapi.examples.v1.SecureExampleService)
  
- [okapi/hashing/v1/hashing.proto](#okapi/hashing/v1/hashing.proto)
    - [Blake3DeriveKeyRequest](#okapi.hashing.v1.Blake3DeriveKeyRequest)
    - [Blake3DeriveKeyResponse](#okapi.hashing.v1.Blake3DeriveKeyResponse)
    - [Blake3HashRequest](#okapi.hashing.v1.Blake3HashRequest)
    - [Blake3HashResponse](#okapi.hashing.v1.Blake3HashResponse)
    - [Blake3KeyedHashRequest](#okapi.hashing.v1.Blake3KeyedHashRequest)
    - [Blake3KeyedHashResponse](#okapi.hashing.v1.Blake3KeyedHashResponse)
  
- [okapi/keys/v1/keys.proto](#okapi/keys/v1/keys.proto)
    - [GenerateKeyRequest](#okapi.keys.v1.GenerateKeyRequest)
    - [GenerateKeyResponse](#okapi.keys.v1.GenerateKeyResponse)
    - [JsonWebKey](#okapi.keys.v1.JsonWebKey)
    - [ResolveRequest](#okapi.keys.v1.ResolveRequest)
    - [ResolveResponse](#okapi.keys.v1.ResolveResponse)
  
    - [KeyType](#okapi.keys.v1.KeyType)
  
- [okapi/proofs/v1/proofs.proto](#okapi/proofs/v1/proofs.proto)
    - [CreateProofRequest](#okapi.proofs.v1.CreateProofRequest)
    - [CreateProofResponse](#okapi.proofs.v1.CreateProofResponse)
    - [VerifyProofRequest](#okapi.proofs.v1.VerifyProofRequest)
    - [VerifyProofResponse](#okapi.proofs.v1.VerifyProofResponse)
  
    - [LdSuite](#okapi.proofs.v1.LdSuite)
  
- [okapi/security/v1/security.proto](#okapi/security/v1/security.proto)
    - [BlindOberonTokenRequest](#okapi.security.v1.BlindOberonTokenRequest)
    - [BlindOberonTokenResponse](#okapi.security.v1.BlindOberonTokenResponse)
    - [CreateOberonKeyRequest](#okapi.security.v1.CreateOberonKeyRequest)
    - [CreateOberonKeyResponse](#okapi.security.v1.CreateOberonKeyResponse)
    - [CreateOberonProofRequest](#okapi.security.v1.CreateOberonProofRequest)
    - [CreateOberonProofResponse](#okapi.security.v1.CreateOberonProofResponse)
    - [CreateOberonTokenRequest](#okapi.security.v1.CreateOberonTokenRequest)
    - [CreateOberonTokenResponse](#okapi.security.v1.CreateOberonTokenResponse)
    - [UnBlindOberonTokenRequest](#okapi.security.v1.UnBlindOberonTokenRequest)
    - [UnBlindOberonTokenResponse](#okapi.security.v1.UnBlindOberonTokenResponse)
    - [VerifyOberonProofRequest](#okapi.security.v1.VerifyOberonProofRequest)
    - [VerifyOberonProofResponse](#okapi.security.v1.VerifyOberonProofResponse)
  
- [okapi/transport/v1/transport.proto](#okapi/transport/v1/transport.proto)
    - [CoreMessage](#okapi.transport.v1.CoreMessage)
    - [PackRequest](#okapi.transport.v1.PackRequest)
    - [PackResponse](#okapi.transport.v1.PackResponse)
    - [SignRequest](#okapi.transport.v1.SignRequest)
    - [SignResponse](#okapi.transport.v1.SignResponse)
    - [UnpackRequest](#okapi.transport.v1.UnpackRequest)
    - [UnpackResponse](#okapi.transport.v1.UnpackResponse)
    - [VerifyRequest](#okapi.transport.v1.VerifyRequest)
    - [VerifyResponse](#okapi.transport.v1.VerifyResponse)
  
- [pbmse/v1/pbmse.proto](#pbmse/v1/pbmse.proto)
    - [EncryptedMessage](#pbmse.v1.EncryptedMessage)
    - [EncryptionHeader](#pbmse.v1.EncryptionHeader)
    - [EncryptionRecipient](#pbmse.v1.EncryptionRecipient)
    - [Signature](#pbmse.v1.Signature)
    - [SignatureHeader](#pbmse.v1.SignatureHeader)
    - [SignedMessage](#pbmse.v1.SignedMessage)
  
    - [EncryptionAlgorithm](#pbmse.v1.EncryptionAlgorithm)
    - [EncryptionMode](#pbmse.v1.EncryptionMode)
  
- [Scalar Value Types](#scalar-value-types)



<a name="okapi/examples/v1/examples.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/examples/v1/examples.proto



<a name="okapi.examples.v1.BasicMessage"></a>

### BasicMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |





 

 

 


<a name="okapi.examples.v1.SecureExampleService"></a>

### SecureExampleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Unary | [.pbmse.v1.EncryptedMessage](#pbmse.v1.EncryptedMessage) | [.pbmse.v1.EncryptedMessage](#pbmse.v1.EncryptedMessage) |  |
| ServerStreaming | [.pbmse.v1.EncryptedMessage](#pbmse.v1.EncryptedMessage) | [.pbmse.v1.EncryptedMessage](#pbmse.v1.EncryptedMessage) stream |  |

 



<a name="okapi/hashing/v1/hashing.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/hashing/v1/hashing.proto



<a name="okapi.hashing.v1.Blake3DeriveKeyRequest"></a>

### Blake3DeriveKeyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| context | [bytes](#bytes) |  |  |
| key_material | [bytes](#bytes) |  |  |






<a name="okapi.hashing.v1.Blake3DeriveKeyResponse"></a>

### Blake3DeriveKeyResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| digest | [bytes](#bytes) |  |  |






<a name="okapi.hashing.v1.Blake3HashRequest"></a>

### Blake3HashRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |






<a name="okapi.hashing.v1.Blake3HashResponse"></a>

### Blake3HashResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| digest | [bytes](#bytes) |  |  |






<a name="okapi.hashing.v1.Blake3KeyedHashRequest"></a>

### Blake3KeyedHashRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |
| key | [bytes](#bytes) |  |  |






<a name="okapi.hashing.v1.Blake3KeyedHashResponse"></a>

### Blake3KeyedHashResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| digest | [bytes](#bytes) |  |  |





 

 

 

 



<a name="okapi/keys/v1/keys.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/keys/v1/keys.proto



<a name="okapi.keys.v1.GenerateKeyRequest"></a>

### GenerateKeyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| seed | [bytes](#bytes) |  |  |
| key_type | [KeyType](#okapi.keys.v1.KeyType) |  |  |






<a name="okapi.keys.v1.GenerateKeyResponse"></a>

### GenerateKeyResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [JsonWebKey](#okapi.keys.v1.JsonWebKey) | repeated |  |
| did_document | [google.protobuf.Struct](#google.protobuf.Struct) |  |  |






<a name="okapi.keys.v1.JsonWebKey"></a>

### JsonWebKey



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| kid | [string](#string) |  |  |
| x | [string](#string) |  | public_key |
| y | [string](#string) |  | public_key |
| d | [string](#string) |  | secret_key |
| crv | [string](#string) |  |  |
| kty | [string](#string) |  |  |






<a name="okapi.keys.v1.ResolveRequest"></a>

### ResolveRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| did | [string](#string) |  |  |






<a name="okapi.keys.v1.ResolveResponse"></a>

### ResolveResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| did_document | [google.protobuf.Struct](#google.protobuf.Struct) |  |  |
| keys | [JsonWebKey](#okapi.keys.v1.JsonWebKey) | repeated |  |





 


<a name="okapi.keys.v1.KeyType"></a>

### KeyType


| Name | Number | Description |
| ---- | ------ | ----------- |
| KEY_TYPE_UNSPECIFIED | 0 |  |
| KEY_TYPE_ED25519 | 1 |  |
| KEY_TYPE_X25519 | 2 |  |
| KEY_TYPE_P256 | 3 |  |
| KEY_TYPE_BLS12381G1G2 | 4 |  |
| KEY_TYPE_SECP256K1 | 5 |  |


 

 

 



<a name="okapi/proofs/v1/proofs.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/proofs/v1/proofs.proto



<a name="okapi.proofs.v1.CreateProofRequest"></a>

### CreateProofRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| document | [google.protobuf.Struct](#google.protobuf.Struct) |  | The input JSON document that will be used to create the LD Proof. This document must also contain a &#34;proof&#34; object, with the desired values filled in. |
| key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  | The signer of the proof. This field must include the &#39;kid&#39; in full URI format. Example: did:example:alice#key-1 |
| suite | [LdSuite](#okapi.proofs.v1.LdSuite) |  | The LD Suite to use to produce this proof |






<a name="okapi.proofs.v1.CreateProofResponse"></a>

### CreateProofResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_document | [google.protobuf.Struct](#google.protobuf.Struct) |  |  |






<a name="okapi.proofs.v1.VerifyProofRequest"></a>

### VerifyProofRequest







<a name="okapi.proofs.v1.VerifyProofResponse"></a>

### VerifyProofResponse






 


<a name="okapi.proofs.v1.LdSuite"></a>

### LdSuite


| Name | Number | Description |
| ---- | ------ | ----------- |
| LD_SUITE_UNSPECIFIED | 0 |  |
| LD_SUITE_JCSED25519SIGNATURE2020 | 1 |  |


 

 

 



<a name="okapi/security/v1/security.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/security/v1/security.proto
messages related to the oberon protocol
See: https://github.com/mikelodder7/oberon


<a name="okapi.security.v1.BlindOberonTokenRequest"></a>

### BlindOberonTokenRequest
Blind an oberon token


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [bytes](#bytes) |  | raw token bytes |
| blinding | [bytes](#bytes) | repeated | blinding to apply to the token |






<a name="okapi.security.v1.BlindOberonTokenResponse"></a>

### BlindOberonTokenResponse
Contains the blinded token reply


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [bytes](#bytes) |  | raw blinded token bytes |






<a name="okapi.security.v1.CreateOberonKeyRequest"></a>

### CreateOberonKeyRequest
Create an Oberon Compatible Secret Key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| seed | [bytes](#bytes) |  | optional seed to generate deterministic keys |






<a name="okapi.security.v1.CreateOberonKeyResponse"></a>

### CreateOberonKeyResponse
Contains the oberon secret key bytes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sk | [bytes](#bytes) |  | raw secret key bytes |
| pk | [bytes](#bytes) |  | raw public key bytes |






<a name="okapi.security.v1.CreateOberonProofRequest"></a>

### CreateOberonProofRequest
Create a proof that holder knows the token


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data used to create the token |
| token | [bytes](#bytes) |  | token data |
| blinding | [bytes](#bytes) | repeated | any blindings used to create the token |
| nonce | [bytes](#bytes) |  | nonce for generating the proof |






<a name="okapi.security.v1.CreateOberonProofResponse"></a>

### CreateOberonProofResponse
Contains the token proof


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proof | [bytes](#bytes) |  | raw proof bytes |






<a name="okapi.security.v1.CreateOberonTokenRequest"></a>

### CreateOberonTokenRequest
Create a new oberon token


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sk | [bytes](#bytes) |  | raw BLS key bytes |
| data | [bytes](#bytes) |  | data is the public part of the oberon protocol and can be any data |
| blinding | [bytes](#bytes) | repeated | optional blinding for the token |






<a name="okapi.security.v1.CreateOberonTokenResponse"></a>

### CreateOberonTokenResponse
Contains the token with optional blinding


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [bytes](#bytes) |  | raw token bytes |






<a name="okapi.security.v1.UnBlindOberonTokenRequest"></a>

### UnBlindOberonTokenRequest
UnBlind an oberon token


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [bytes](#bytes) |  | raw token bytes |
| blinding | [bytes](#bytes) | repeated | blinding to remove from the token |






<a name="okapi.security.v1.UnBlindOberonTokenResponse"></a>

### UnBlindOberonTokenResponse
Contains the unblinded token reply


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [bytes](#bytes) |  | raw unblinded token bytes |






<a name="okapi.security.v1.VerifyOberonProofRequest"></a>

### VerifyOberonProofRequest
Verify the presented proof is valid


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proof | [bytes](#bytes) |  | raw proof bytes returned from CreateProof |
| data | [bytes](#bytes) |  | data used to create the token |
| nonce | [bytes](#bytes) |  | nonce used to generate the proof |
| pk | [bytes](#bytes) |  | public key that was used to generate the token |






<a name="okapi.security.v1.VerifyOberonProofResponse"></a>

### VerifyOberonProofResponse
Contains the status of the proof validation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| valid | [bool](#bool) |  | whether the given proof was valid |





 

 

 

 



<a name="okapi/transport/v1/transport.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/transport/v1/transport.proto



<a name="okapi.transport.v1.CoreMessage"></a>

### CoreMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| type | [string](#string) |  |  |
| body | [bytes](#bytes) |  |  |
| to | [string](#string) | repeated |  |
| from | [string](#string) |  |  |
| created | [int64](#int64) |  |  |
| expires | [int64](#int64) |  |  |






<a name="okapi.transport.v1.PackRequest"></a>

### PackRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender_key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  |  |
| receiver_key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  |  |
| associated_data | [bytes](#bytes) |  |  |
| plaintext | [bytes](#bytes) |  |  |
| mode | [pbmse.v1.EncryptionMode](#pbmse.v1.EncryptionMode) |  |  |
| algorithm | [pbmse.v1.EncryptionAlgorithm](#pbmse.v1.EncryptionAlgorithm) |  |  |






<a name="okapi.transport.v1.PackResponse"></a>

### PackResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [pbmse.v1.EncryptedMessage](#pbmse.v1.EncryptedMessage) |  |  |






<a name="okapi.transport.v1.SignRequest"></a>

### SignRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [bytes](#bytes) |  |  |
| key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  |  |
| append_to | [pbmse.v1.SignedMessage](#pbmse.v1.SignedMessage) |  |  |






<a name="okapi.transport.v1.SignResponse"></a>

### SignResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [pbmse.v1.SignedMessage](#pbmse.v1.SignedMessage) |  |  |






<a name="okapi.transport.v1.UnpackRequest"></a>

### UnpackRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender_key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  |  |
| receiver_key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  |  |
| message | [pbmse.v1.EncryptedMessage](#pbmse.v1.EncryptedMessage) |  |  |






<a name="okapi.transport.v1.UnpackResponse"></a>

### UnpackResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| plaintext | [bytes](#bytes) |  |  |






<a name="okapi.transport.v1.VerifyRequest"></a>

### VerifyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [pbmse.v1.SignedMessage](#pbmse.v1.SignedMessage) |  |  |
| key | [okapi.keys.v1.JsonWebKey](#okapi.keys.v1.JsonWebKey) |  |  |






<a name="okapi.transport.v1.VerifyResponse"></a>

### VerifyResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_valid | [bool](#bool) |  |  |





 

 

 

 



<a name="pbmse/v1/pbmse.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## pbmse/v1/pbmse.proto



<a name="pbmse.v1.EncryptedMessage"></a>

### EncryptedMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| iv | [bytes](#bytes) |  |  |
| aad | [bytes](#bytes) |  |  |
| ciphertext | [bytes](#bytes) |  |  |
| tag | [bytes](#bytes) |  |  |
| recipients | [EncryptionRecipient](#pbmse.v1.EncryptionRecipient) | repeated |  |






<a name="pbmse.v1.EncryptionHeader"></a>

### EncryptionHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [EncryptionMode](#pbmse.v1.EncryptionMode) |  |  |
| algorithm | [EncryptionAlgorithm](#pbmse.v1.EncryptionAlgorithm) |  |  |
| key_id | [string](#string) |  |  |
| sender_key_id | [string](#string) |  |  |






<a name="pbmse.v1.EncryptionRecipient"></a>

### EncryptionRecipient



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [EncryptionHeader](#pbmse.v1.EncryptionHeader) |  |  |
| content_encryption_key | [bytes](#bytes) |  |  |






<a name="pbmse.v1.Signature"></a>

### Signature



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [bytes](#bytes) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name="pbmse.v1.SignatureHeader"></a>

### SignatureHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| algorithm | [string](#string) |  |  |
| key_id | [string](#string) |  |  |






<a name="pbmse.v1.SignedMessage"></a>

### SignedMessage
JWS
Protocol buffer message signing and encryption


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [bytes](#bytes) |  |  |
| signatures | [Signature](#pbmse.v1.Signature) | repeated |  |





 


<a name="pbmse.v1.EncryptionAlgorithm"></a>

### EncryptionAlgorithm


| Name | Number | Description |
| ---- | ------ | ----------- |
| ENCRYPTION_ALGORITHM_UNSPECIFIED | 0 |  |
| ENCRYPTION_ALGORITHM_XCHACHA20POLY1305 | 1 |  |
| ENCRYPTION_ALGORITHM_AES_GCM | 2 |  |



<a name="pbmse.v1.EncryptionMode"></a>

### EncryptionMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| ENCRYPTION_MODE_UNSPECIFIED | 0 |  |
| ENCRYPTION_MODE_DIRECT | 1 |  |
| ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY | 2 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

