/// JWS
/// Protocol buffer message signing and encryption
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub struct SignedMessage {
    #[prost(bytes, tag="1")]
    pub payload: std::vec::Vec<u8>,
    #[prost(message, repeated, tag="2")]
    pub signatures: ::std::vec::Vec<Signature>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub struct Signature {
    #[prost(bytes, tag="1")]
    pub header: std::vec::Vec<u8>,
    #[prost(bytes, tag="3")]
    pub signature: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub struct SignatureHeader {
    #[prost(string, tag="1")]
    pub algorithm: std::string::String,
    #[prost(string, tag="2")]
    pub key_id: std::string::String,
}
// JWE

#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
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
#[derive(::serde::Serialize, ::serde::Deserialize)]
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
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub struct EncryptionRecipient {
    #[prost(message, optional, tag="1")]
    pub header: ::std::option::Option<EncryptionHeader>,
    #[prost(bytes, tag="2")]
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
