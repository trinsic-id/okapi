// JWS

#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct SignedMessage {
    #[prost(bytes, tag="1")]
    pub payload: std::vec::Vec<u8>,
    #[prost(message, repeated, tag="2")]
    pub signatures: ::std::vec::Vec<Signature>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct Signature {
    #[prost(bytes, tag="1")]
    pub header: std::vec::Vec<u8>,
    #[prost(bytes, tag="3")]
    pub signature: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct SignatureHeader {
    #[prost(string, tag="1")]
    pub algorithm: std::string::String,
    #[prost(string, tag="2")]
    pub key_id: std::string::String,
}
// JWE

#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct EncryptedMessage {
    #[prost(bytes, tag="1")]
    pub iv: std::vec::Vec<u8>,
    #[prost(bytes, tag="2")]
    pub aad: std::vec::Vec<u8>,
    #[prost(bytes, tag="3")]
    pub ciphertext: std::vec::Vec<u8>,
    #[prost(bytes, tag="4")]
    pub tag: std::vec::Vec<u8>,
    #[prost(message, repeated, tag="5")]
    pub recipients: ::std::vec::Vec<EncryptionRecipient>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct EncryptionHeader {
    #[prost(enumeration="EncryptionMode", tag="1")]
    pub mode: i32,
    #[prost(enumeration="EncryptionAlgorithm", tag="2")]
    pub algorithm: i32,
    #[prost(string, tag="3")]
    pub key_id: std::string::String,
    #[prost(string, tag="4")]
    pub sender_key_id: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct EncryptionRecipient {
    #[prost(message, optional, tag="1")]
    pub header: ::std::option::Option<EncryptionHeader>,
    #[prost(bytes, tag="2")]
    pub content_encryption_key: std::vec::Vec<u8>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize)]
pub enum EncryptionMode {
    Direct = 0,
    ContentEncryptionKey = 1,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize)]
pub enum EncryptionAlgorithm {
    Xchacha20poly1305 = 0,
    AesGcm = 1,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct CoreMessage {
    #[prost(string, tag="1")]
    pub id: std::string::String,
    #[prost(string, tag="2")]
    pub r#type: std::string::String,
    #[prost(bytes, tag="3")]
    pub body: std::vec::Vec<u8>,
    #[prost(string, repeated, tag="4")]
    pub to: ::std::vec::Vec<std::string::String>,
    #[prost(string, tag="5")]
    pub from: std::string::String,
    #[prost(int64, tag="6")]
    pub created: i64,
    #[prost(int64, tag="7")]
    pub expires: i64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct NoOp {
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct BasicMessage {
    #[prost(string, tag="1")]
    pub text: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct GenerateKeyRequest {
    #[prost(bytes, tag="1")]
    pub seed: std::vec::Vec<u8>,
    #[prost(enumeration="KeyType", tag="2")]
    pub key_type: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct GenerateKeyResponse {
    #[prost(message, optional, tag="1")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct ConvertKeyRequest {
    #[prost(message, optional, tag="1")]
    pub key: ::std::option::Option<JsonWebKey>,
    #[prost(enumeration="Crv", tag="2")]
    pub target_type: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct ConvertKeyResponse {
    #[prost(message, optional, tag="1")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct SignRequest {
    #[prost(bytes, tag="1")]
    pub payload: std::vec::Vec<u8>,
    #[prost(message, optional, tag="2")]
    pub key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag="3")]
    pub append_to: ::std::option::Option<SignedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct SignResponse {
    #[prost(message, optional, tag="1")]
    pub message: ::std::option::Option<SignedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct VerifyRequest {
    #[prost(message, optional, tag="1")]
    pub message: ::std::option::Option<SignedMessage>,
    #[prost(message, optional, tag="2")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct VerifyResponse {
    #[prost(bool, tag="1")]
    pub is_valid: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct PackRequest {
    #[prost(message, optional, tag="1")]
    pub sender_key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag="2")]
    pub receiver_key: ::std::option::Option<JsonWebKey>,
    #[prost(bytes, tag="3")]
    pub associated_data: std::vec::Vec<u8>,
    #[prost(bytes, tag="4")]
    pub plaintext: std::vec::Vec<u8>,
    #[prost(enumeration="EncryptionMode", tag="5")]
    pub mode: i32,
    #[prost(enumeration="EncryptionAlgorithm", tag="6")]
    pub algorithm: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct PackResponse {
    #[prost(message, optional, tag="1")]
    pub message: ::std::option::Option<EncryptedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct UnpackRequest {
    #[prost(message, optional, tag="1")]
    pub sender_key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag="2")]
    pub receiver_key: ::std::option::Option<JsonWebKey>,
    #[prost(message, optional, tag="3")]
    pub message: ::std::option::Option<EncryptedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct UnpackResponse {
    #[prost(bytes, tag="1")]
    pub plaintext: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct GetDidDocumentRequest {
    #[prost(message, optional, tag="1")]
    pub key: ::std::option::Option<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct GetDidDocumentResponse {
    #[prost(message, optional, tag="1")]
    pub did_document: ::std::option::Option<super::super::google::protobuf::Struct>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize)]
pub struct JsonWebKey {
    #[prost(string, tag="1")]
    pub key_id: std::string::String,
    /// public_key
    #[prost(string, tag="2")]
    pub x: std::string::String,
    /// public_key
    #[prost(string, tag="3")]
    pub y: std::string::String,
    /// secret_key
    #[prost(string, tag="4")]
    pub d: std::string::String,
    /// key_type
    #[prost(enumeration="Crv", tag="5")]
    pub crv: i32,
    /// should always be EC?
    #[prost(enumeration="KeyType", tag="6")]
    pub kty: i32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize)]
pub enum Crv {
    Ed25519 = 0,
    X25519 = 1,
    P256 = 2,
    Secp256k1 = 3,
    Bls12381G1 = 4,
    Bls12381G2 = 5,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
#[derive(::serde::Serialize)]
pub enum KeyType {
    Okp = 0,
    Ec = 1,
}
