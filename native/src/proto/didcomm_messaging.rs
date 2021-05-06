// JWS

#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct SignedMessage {
    #[prost(bytes, tag = "1")]
    pub payload: std::vec::Vec<u8>,
    #[prost(message, repeated, tag = "2")]
    pub signatures: ::std::vec::Vec<Signature>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct Signature {
    #[prost(bytes, tag = "1")]
    pub header: std::vec::Vec<u8>,
    #[prost(bytes, tag = "3")]
    pub signature: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct SignatureHeader {
    #[prost(string, tag = "1")]
    pub algorithm: std::string::String,
    #[prost(string, tag = "2")]
    pub key_id: std::string::String,
}
// JWE

#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct EncryptedMessage {
    #[prost(bytes, tag = "1")]
    pub iv: std::vec::Vec<u8>,
    #[prost(bytes, tag = "2")]
    pub aad: std::vec::Vec<u8>,
    #[prost(bytes, tag = "3")]
    pub ciphertext: std::vec::Vec<u8>,
    #[prost(bytes, tag = "4")]
    pub tag: std::vec::Vec<u8>,
    #[prost(message, repeated, tag = "5")]
    pub recipients: ::std::vec::Vec<EncryptionRecipient>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct EncryptionHeader {
    #[prost(enumeration = "EncryptionMode", tag = "1")]
    pub mode: i32,
    #[prost(enumeration = "EncryptionAlgorithm", tag = "2")]
    pub algorithm: i32,
    #[prost(string, tag = "3")]
    pub key_id: std::string::String,
    #[prost(string, tag = "4")]
    pub sender_key_id: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct EncryptionRecipient {
    #[prost(message, optional, tag = "1")]
    pub header: ::std::option::Option<EncryptionHeader>,
    #[prost(bytes, tag = "2")]
    pub content_encryption_key: std::vec::Vec<u8>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub enum EncryptionMode {
    Direct = 0,
    ContentEncryptionKey = 1,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub enum EncryptionAlgorithm {
    Xchacha20poly1305 = 0,
    AesGcm = 1,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct CoreMessage {
    #[prost(string, tag = "1")]
    pub id: std::string::String,
    #[prost(string, tag = "2")]
    pub r#type: std::string::String,
    #[prost(bytes, tag = "3")]
    pub body: std::vec::Vec<u8>,
    #[prost(string, repeated, tag = "4")]
    pub to: ::std::vec::Vec<std::string::String>,
    #[prost(string, tag = "5")]
    pub from: std::string::String,
    #[prost(int64, tag = "6")]
    pub created: i64,
    #[prost(int64, tag = "7")]
    pub expires: i64,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct NoOp {}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct BasicMessage {
    #[prost(string, tag = "1")]
    pub text: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct GenerateKeyRequest {
    #[prost(bytes, tag = "1")]
    pub seed: std::vec::Vec<u8>,
    #[prost(enumeration = "KeyType", tag = "2")]
    pub key_type: i32,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct GenerateKeyResponse {
    #[prost(message, repeated, tag = "1")]
    pub key: ::std::vec::Vec<JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub did_document: ::std::option::Option<super::super::google::protobuf::Struct>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct ConvertKeyRequest {
    #[prost(message, optional, tag = "1")]
    pub key: ::std::option::Option<JsonWebKey>,
    #[prost(string, tag = "2")]
    pub target_type: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct ConvertKeyResponse {
    #[prost(message, optional, tag = "1")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct SignRequest {
    #[prost(bytes, tag = "1")]
    pub payload: std::vec::Vec<u8>,
    #[prost(message, optional, tag = "2")]
    pub key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag = "3")]
    pub append_to: ::std::option::Option<SignedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct SignResponse {
    #[prost(message, optional, tag = "1")]
    pub message: ::std::option::Option<SignedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct VerifyRequest {
    #[prost(message, optional, tag = "1")]
    pub message: ::std::option::Option<SignedMessage>,
    #[prost(message, optional, tag = "2")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct VerifyResponse {
    #[prost(bool, tag = "1")]
    pub is_valid: bool,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct PackRequest {
    #[prost(message, optional, tag = "1")]
    pub sender_key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub receiver_key: ::std::option::Option<JsonWebKey>,
    #[prost(bytes, tag = "3")]
    pub associated_data: std::vec::Vec<u8>,
    #[prost(bytes, tag = "4")]
    pub plaintext: std::vec::Vec<u8>,
    #[prost(enumeration = "EncryptionMode", tag = "5")]
    pub mode: i32,
    #[prost(enumeration = "EncryptionAlgorithm", tag = "6")]
    pub algorithm: i32,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct PackResponse {
    #[prost(message, optional, tag = "1")]
    pub message: ::std::option::Option<EncryptedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct UnpackRequest {
    #[prost(message, optional, tag = "1")]
    pub sender_key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub receiver_key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag = "3")]
    pub message: ::std::option::Option<EncryptedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct UnpackResponse {
    #[prost(bytes, tag = "1")]
    pub plaintext: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct GetDidDocumentRequest {
    #[prost(message, optional, tag = "1")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct GetDidDocumentResponse {
    #[prost(message, optional, tag = "1")]
    pub did_document: ::std::option::Option<super::super::google::protobuf::Struct>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct JsonWebKey {
    #[prost(string, tag = "1")]
    pub kid: std::string::String,
    /// public_key
    #[prost(string, tag = "2")]
    pub x: std::string::String,
    /// public_key
    #[prost(string, tag = "3")]
    pub y: std::string::String,
    /// secret_key
    #[prost(string, tag = "4")]
    pub d: std::string::String,
    #[prost(string, tag = "5")]
    pub crv: std::string::String,
    #[prost(string, tag = "6")]
    pub kty: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct ResolveRequest {
    #[prost(string, tag = "1")]
    pub did: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct ResolveResponse {
    #[prost(message, optional, tag = "1")]
    pub did_document: ::std::option::Option<super::super::google::protobuf::Struct>,
    #[prost(message, repeated, tag = "2")]
    pub keys: ::std::vec::Vec<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct ResolveKeyRequest {
    #[prost(string, tag = "1")]
    pub did_uri: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct ResolveKeyResponse {
    #[prost(message, optional, tag = "1")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct CreateProofRequest {
    /// The input JSON document that will be used
    /// to create the LD Proof. This document must
    /// also contain a "proof" object, with the desired
    /// values filled in.
    #[prost(message, optional, tag = "1")]
    pub document: ::std::option::Option<super::super::google::protobuf::Struct>,
    /// The signer of the proof. This field must include
    /// the 'kid' in full URI format.
    /// Example:
    ///  did:example:alice#key-1
    #[prost(message, optional, tag = "3")]
    pub key: ::std::option::Option<JsonWebKey>,
    /// The LD Suite to use to produce this proof
    #[prost(enumeration = "LdSuite", tag = "4")]
    pub suite: i32,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct CreateProofResponse {
    #[prost(message, optional, tag = "1")]
    pub signed_document: ::std::option::Option<super::super::google::protobuf::Struct>,
}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct VerifyProofRequest {}
#[derive(Clone, PartialEq, ::prost::Message, ::serde::Serialize, ::serde::Deserialize)]
pub struct VerifyProofResponse {}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub enum KeyType {
    Ed25519 = 0,
    X25519 = 1,
    P256 = 2,
    Bls12381G1g2 = 3,
    Secp256k1 = 4,
}
// ld-proofs

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub enum LdSuite {
    JcsEd25519Signature2020 = 0,
}
