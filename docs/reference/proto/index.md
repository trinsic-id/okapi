


# Protocol Documentation
<a name="top"></a>

This page documents the Protobuf Services and Messages which compose the Trinsic API.



<a name="pbmse_v1_pbmse-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## pbmse/v1/pbmse.proto


 <!-- end services -->


<a name="pbmse-v1-EncryptedMessage"></a>

### EncryptedMessage



| Field | Type | Description |
| ----- | ---- | ----------- |
| iv | [bytes](/reference/proto#bytes) |  |
| aad | [bytes](/reference/proto#bytes) |  |
| ciphertext | [bytes](/reference/proto#bytes) |  |
| tag | [bytes](/reference/proto#bytes) |  |
| recipients | [EncryptionRecipient](/reference/proto#pbmse-v1-EncryptionRecipient)[] |  |






<a name="pbmse-v1-EncryptionHeader"></a>

### EncryptionHeader



| Field | Type | Description |
| ----- | ---- | ----------- |
| mode | [EncryptionMode](/reference/proto#pbmse-v1-EncryptionMode) |  |
| algorithm | [EncryptionAlgorithm](/reference/proto#pbmse-v1-EncryptionAlgorithm) |  |
| key_id | [string](/reference/proto#string) |  |
| sender_key_id | [string](/reference/proto#string) |  |






<a name="pbmse-v1-EncryptionRecipient"></a>

### EncryptionRecipient



| Field | Type | Description |
| ----- | ---- | ----------- |
| header | [EncryptionHeader](/reference/proto#pbmse-v1-EncryptionHeader) |  |
| content_encryption_key | [bytes](/reference/proto#bytes) |  |






<a name="pbmse-v1-Signature"></a>

### Signature



| Field | Type | Description |
| ----- | ---- | ----------- |
| header | [bytes](/reference/proto#bytes) |  |
| signature | [bytes](/reference/proto#bytes) |  |






<a name="pbmse-v1-SignatureHeader"></a>

### SignatureHeader



| Field | Type | Description |
| ----- | ---- | ----------- |
| algorithm | [string](/reference/proto#string) |  |
| key_id | [string](/reference/proto#string) |  |






<a name="pbmse-v1-SignedMessage"></a>

### SignedMessage
JWS
Protocol buffer message signing and encryption


| Field | Type | Description |
| ----- | ---- | ----------- |
| payload | [bytes](/reference/proto#bytes) |  |
| signatures | [Signature](/reference/proto#pbmse-v1-Signature)[] |  |





 <!-- end messages -->


<a name="pbmse-v1-EncryptionAlgorithm"></a>

### EncryptionAlgorithm


| Name | Number | Description |
| ---- | ------ | ----------- |
| ENCRYPTION_ALGORITHM_UNSPECIFIED | 0 |  |
| ENCRYPTION_ALGORITHM_XCHACHA20POLY1305 | 1 |  |
| ENCRYPTION_ALGORITHM_AES_GCM | 2 |  |



<a name="pbmse-v1-EncryptionMode"></a>

### EncryptionMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| ENCRYPTION_MODE_UNSPECIFIED | 0 |  |
| ENCRYPTION_MODE_DIRECT | 1 |  |
| ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY | 2 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_transport_v1_transport-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/transport/v1/transport.proto


 <!-- end services -->


<a name="okapi-transport-v1-CoreMessage"></a>

### CoreMessage



| Field | Type | Description |
| ----- | ---- | ----------- |
| id | [string](/reference/proto#string) |  |
| type | [string](/reference/proto#string) |  |
| body | [bytes](/reference/proto#bytes) |  |
| to | [string](/reference/proto#string)[] |  |
| from | [string](/reference/proto#string) |  |
| created | [int64](/reference/proto#int64) |  |
| expires | [int64](/reference/proto#int64) |  |






<a name="okapi-transport-v1-PackRequest"></a>

### PackRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| sender_key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) |  |
| receiver_key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) |  |
| associated_data | [bytes](/reference/proto#bytes) |  |
| plaintext | [bytes](/reference/proto#bytes) |  |
| mode | [pbmse.v1.EncryptionMode](/reference/proto#pbmse-v1-EncryptionMode) |  |
| algorithm | [pbmse.v1.EncryptionAlgorithm](/reference/proto#pbmse-v1-EncryptionAlgorithm) |  |






<a name="okapi-transport-v1-PackResponse"></a>

### PackResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| message | [pbmse.v1.EncryptedMessage](/reference/proto#pbmse-v1-EncryptedMessage) |  |






<a name="okapi-transport-v1-SignRequest"></a>

### SignRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| payload | [bytes](/reference/proto#bytes) |  |
| key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) |  |
| append_to | [pbmse.v1.SignedMessage](/reference/proto#pbmse-v1-SignedMessage) |  |






<a name="okapi-transport-v1-SignResponse"></a>

### SignResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| message | [pbmse.v1.SignedMessage](/reference/proto#pbmse-v1-SignedMessage) |  |






<a name="okapi-transport-v1-UnpackRequest"></a>

### UnpackRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| sender_key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) |  |
| receiver_key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) |  |
| message | [pbmse.v1.EncryptedMessage](/reference/proto#pbmse-v1-EncryptedMessage) |  |






<a name="okapi-transport-v1-UnpackResponse"></a>

### UnpackResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| plaintext | [bytes](/reference/proto#bytes) |  |






<a name="okapi-transport-v1-VerifyRequest"></a>

### VerifyRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| message | [pbmse.v1.SignedMessage](/reference/proto#pbmse-v1-SignedMessage) |  |
| key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) |  |






<a name="okapi-transport-v1-VerifyResponse"></a>

### VerifyResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| is_valid | [bool](/reference/proto#bool) |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_security_v1_security-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/security/v1/security.proto
messages related to the oberon protocol
See: https://github.com/mikelodder7/oberon

 <!-- end services -->


<a name="okapi-security-v1-BlindOberonTokenRequest"></a>

### BlindOberonTokenRequest
Blind an oberon token


| Field | Type | Description |
| ----- | ---- | ----------- |
| token | [bytes](/reference/proto#bytes) | raw token bytes |
| blinding | [bytes](/reference/proto#bytes)[] | blinding to apply to the token |






<a name="okapi-security-v1-BlindOberonTokenResponse"></a>

### BlindOberonTokenResponse
Contains the blinded token reply


| Field | Type | Description |
| ----- | ---- | ----------- |
| token | [bytes](/reference/proto#bytes) | raw blinded token bytes |






<a name="okapi-security-v1-CreateOberonKeyRequest"></a>

### CreateOberonKeyRequest
Create an Oberon Compatible Secret Key


| Field | Type | Description |
| ----- | ---- | ----------- |
| seed | [bytes](/reference/proto#bytes) | optional seed to generate deterministic keys |






<a name="okapi-security-v1-CreateOberonKeyResponse"></a>

### CreateOberonKeyResponse
Contains the oberon secret key bytes


| Field | Type | Description |
| ----- | ---- | ----------- |
| sk | [bytes](/reference/proto#bytes) | raw secret key bytes |
| pk | [bytes](/reference/proto#bytes) | raw public key bytes |






<a name="okapi-security-v1-CreateOberonProofRequest"></a>

### CreateOberonProofRequest
Create a proof that holder knows the token


| Field | Type | Description |
| ----- | ---- | ----------- |
| data | [bytes](/reference/proto#bytes) | data used to create the token |
| token | [bytes](/reference/proto#bytes) | token data |
| blinding | [bytes](/reference/proto#bytes)[] | any blindings used to create the token |
| nonce | [bytes](/reference/proto#bytes) | nonce for generating the proof |






<a name="okapi-security-v1-CreateOberonProofResponse"></a>

### CreateOberonProofResponse
Contains the token proof


| Field | Type | Description |
| ----- | ---- | ----------- |
| proof | [bytes](/reference/proto#bytes) | raw proof bytes |






<a name="okapi-security-v1-CreateOberonTokenRequest"></a>

### CreateOberonTokenRequest
Create a new oberon token


| Field | Type | Description |
| ----- | ---- | ----------- |
| sk | [bytes](/reference/proto#bytes) | raw BLS key bytes |
| data | [bytes](/reference/proto#bytes) | data is the public part of the oberon protocol and can be any data |
| blinding | [bytes](/reference/proto#bytes)[] | optional blinding for the token |






<a name="okapi-security-v1-CreateOberonTokenResponse"></a>

### CreateOberonTokenResponse
Contains the token with optional blinding


| Field | Type | Description |
| ----- | ---- | ----------- |
| token | [bytes](/reference/proto#bytes) | raw token bytes |






<a name="okapi-security-v1-UnBlindOberonTokenRequest"></a>

### UnBlindOberonTokenRequest
UnBlind an oberon token


| Field | Type | Description |
| ----- | ---- | ----------- |
| token | [bytes](/reference/proto#bytes) | raw token bytes |
| blinding | [bytes](/reference/proto#bytes)[] | blinding to remove from the token |






<a name="okapi-security-v1-UnBlindOberonTokenResponse"></a>

### UnBlindOberonTokenResponse
Contains the unblinded token reply


| Field | Type | Description |
| ----- | ---- | ----------- |
| token | [bytes](/reference/proto#bytes) | raw unblinded token bytes |






<a name="okapi-security-v1-VerifyOberonProofRequest"></a>

### VerifyOberonProofRequest
Verify the presented proof is valid


| Field | Type | Description |
| ----- | ---- | ----------- |
| proof | [bytes](/reference/proto#bytes) | raw proof bytes returned from CreateProof |
| data | [bytes](/reference/proto#bytes) | data used to create the token |
| nonce | [bytes](/reference/proto#bytes) | nonce used to generate the proof |
| pk | [bytes](/reference/proto#bytes) | public key that was used to generate the token |






<a name="okapi-security-v1-VerifyOberonProofResponse"></a>

### VerifyOberonProofResponse
Contains the status of the proof validation


| Field | Type | Description |
| ----- | ---- | ----------- |
| valid | [bool](/reference/proto#bool) | whether the given proof was valid |






<a name="okapi-security-v1-VerifyOberonTokenRequest"></a>

### VerifyOberonTokenRequest
Verify that an oberon token comes from the desired issuer


| Field | Type | Description |
| ----- | ---- | ----------- |
| token | [bytes](/reference/proto#bytes) | raw token bytes |
| pk | [bytes](/reference/proto#bytes) | token is valid to this public key? |
| data | [bytes](/reference/proto#bytes) | public part of oberon protocol - can be any data |






<a name="okapi-security-v1-VerifyOberonTokenResponse"></a>

### VerifyOberonTokenResponse
Contains the verification result for the oberon token


| Field | Type | Description |
| ----- | ---- | ----------- |
| valid | [bool](/reference/proto#bool) | token is valid to the public key |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_examples_v1_examples-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/examples/v1/examples.proto



<a name="okapi-examples-v1-SecureExampleService"></a>

### Service - SecureExampleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Unary | [.pbmse.v1.EncryptedMessage](/reference/proto#pbmse-v1-EncryptedMessage) | [.pbmse.v1.EncryptedMessage](/reference/proto#pbmse-v1-EncryptedMessage) |  |
| ServerStreaming | [.pbmse.v1.EncryptedMessage](/reference/proto#pbmse-v1-EncryptedMessage) | [.pbmse.v1.EncryptedMessage](/reference/proto#pbmse-v1-EncryptedMessage) stream |  |

 <!-- end services -->


<a name="okapi-examples-v1-BasicMessage"></a>

### BasicMessage



| Field | Type | Description |
| ----- | ---- | ----------- |
| text | [string](/reference/proto#string) |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_metadata_metadata-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/metadata/metadata.proto


 <!-- end services -->


<a name="okapi-metadata-MetadataRequest"></a>

### MetadataRequest
Request custom metadata about the native okapi binaries - cannot get cargo env vars at runtime

repeated string variables = 1; // optional field, can contain any of the cargo env vars






<a name="okapi-metadata-MetadataResponse"></a>

### MetadataResponse
Metadata information about the native okapi binaries. Always returns the version information


| Field | Type | Description |
| ----- | ---- | ----------- |
| version | [string](/reference/proto#string) | The full version string from okapi |
| version_major | [int32](/reference/proto#int32) | Major version |
| version_minor | [int32](/reference/proto#int32) | Minor version |
| version_patch | [int32](/reference/proto#int32) | Patch release version |
| target_family | [string](/reference/proto#string) | https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates |
| target_os | [string](/reference/proto#string) |  |
| target_arch | [string](/reference/proto#string) |  |
| target_vendor | [string](/reference/proto#string) |  |
| target_env | [string](/reference/proto#string) |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_hashing_v1_hashing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/hashing/v1/hashing.proto


 <!-- end services -->


<a name="okapi-hashing-v1-Blake3DeriveKeyRequest"></a>

### Blake3DeriveKeyRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| context | [bytes](/reference/proto#bytes) |  |
| key_material | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-Blake3DeriveKeyResponse"></a>

### Blake3DeriveKeyResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| digest | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-Blake3HashRequest"></a>

### Blake3HashRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| data | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-Blake3HashResponse"></a>

### Blake3HashResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| digest | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-Blake3KeyedHashRequest"></a>

### Blake3KeyedHashRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| data | [bytes](/reference/proto#bytes) |  |
| key | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-Blake3KeyedHashResponse"></a>

### Blake3KeyedHashResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| digest | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-SHA256HashRequest"></a>

### SHA256HashRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| data | [bytes](/reference/proto#bytes) |  |






<a name="okapi-hashing-v1-SHA256HashResponse"></a>

### SHA256HashResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| digest | [bytes](/reference/proto#bytes) |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_proofs_v1_proofs-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/proofs/v1/proofs.proto


 <!-- end services -->


<a name="okapi-proofs-v1-CreateProofRequest"></a>

### CreateProofRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| document | [google.protobuf.Struct](/reference/proto#google-protobuf-Struct) | The input JSON document that will be used to create the LD Proof. This document must also contain a "proof" object, with the desired values filled in. |
| key | [okapi.keys.v1.JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey) | The signer of the proof. This field must include the 'kid' in full URI format. Example: did:example:alice#key-1 |
| suite | [LdSuite](/reference/proto#okapi-proofs-v1-LdSuite) | The LD Suite to use to produce this proof |






<a name="okapi-proofs-v1-CreateProofResponse"></a>

### CreateProofResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| signed_document | [google.protobuf.Struct](/reference/proto#google-protobuf-Struct) |  |






<a name="okapi-proofs-v1-VerifyProofRequest"></a>

### VerifyProofRequest







<a name="okapi-proofs-v1-VerifyProofResponse"></a>

### VerifyProofResponse






 <!-- end messages -->


<a name="okapi-proofs-v1-LdSuite"></a>

### LdSuite


| Name | Number | Description |
| ---- | ------ | ----------- |
| LD_SUITE_UNSPECIFIED | 0 |  |
| LD_SUITE_JCSED25519SIGNATURE2020 | 1 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->



<a name="okapi_keys_v1_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## okapi/keys/v1/keys.proto


 <!-- end services -->


<a name="okapi-keys-v1-GenerateKeyRequest"></a>

### GenerateKeyRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| seed | [bytes](/reference/proto#bytes) |  |
| key_type | [KeyType](/reference/proto#okapi-keys-v1-KeyType) |  |
| key_format | [DocumentKeyFormat](/reference/proto#okapi-keys-v1-DocumentKeyFormat) |  |






<a name="okapi-keys-v1-GenerateKeyResponse"></a>

### GenerateKeyResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| key | [JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey)[] |  |
| did_document | [google.protobuf.Struct](/reference/proto#google-protobuf-Struct) |  |






<a name="okapi-keys-v1-JsonWebKey"></a>

### JsonWebKey



| Field | Type | Description |
| ----- | ---- | ----------- |
| kid | [string](/reference/proto#string) |  |
| x | [string](/reference/proto#string) | public_key |
| y | [string](/reference/proto#string) | public_key |
| d | [string](/reference/proto#string) | secret_key |
| crv | [string](/reference/proto#string) |  |
| kty | [string](/reference/proto#string) |  |






<a name="okapi-keys-v1-ResolveRequest"></a>

### ResolveRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| did | [string](/reference/proto#string) |  |






<a name="okapi-keys-v1-ResolveResponse"></a>

### ResolveResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| did_document | [google.protobuf.Struct](/reference/proto#google-protobuf-Struct) |  |
| keys | [JsonWebKey](/reference/proto#okapi-keys-v1-JsonWebKey)[] |  |





 <!-- end messages -->


<a name="okapi-keys-v1-DocumentKeyFormat"></a>

### DocumentKeyFormat


| Name | Number | Description |
| ---- | ------ | ----------- |
| DOCUMENT_KEY_FORMAT_UNSPECIFIED | 0 |  |
| DOCUMENT_KEY_FORMAT_LD | 1 |  |
| DOCUMENT_KEY_FORMAT_JOSE | 2 |  |



<a name="okapi-keys-v1-KeyType"></a>

### KeyType


| Name | Number | Description |
| ---- | ------ | ----------- |
| KEY_TYPE_UNSPECIFIED | 0 |  |
| KEY_TYPE_ED25519 | 1 |  |
| KEY_TYPE_X25519 | 2 |  |
| KEY_TYPE_P256 | 3 |  |
| KEY_TYPE_BLS12381G1G2 | 4 |  |
| KEY_TYPE_SECP256K1 | 5 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->



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
