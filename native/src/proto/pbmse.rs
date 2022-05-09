mod pbmse;

/// JWS
/// Protocol buffer message signing and encryption
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct SignedMessage {
    #[prost(bytes = "vec", tag = "1")]
    pub payload: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, repeated, tag = "2")]
    pub signatures: ::prost::alloc::vec::Vec<Signature>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct Signature {
    #[prost(bytes = "vec", tag = "1")]
    pub header: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "3")]
    pub signature: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct SignatureHeader {
    #[prost(string, tag = "1")]
    pub algorithm: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub key_id: ::prost::alloc::string::String,
}
// JWE

#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct EncryptedMessage {
    #[prost(bytes = "vec", tag = "1")]
    pub iv: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "2")]
    pub aad: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "3")]
    pub ciphertext: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "4")]
    pub tag: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, repeated, tag = "5")]
    pub recipients: ::prost::alloc::vec::Vec<EncryptionRecipient>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct EncryptionHeader {
    #[prost(enumeration = "EncryptionMode", tag = "1")]
    pub mode: i32,
    #[prost(enumeration = "EncryptionAlgorithm", tag = "2")]
    pub algorithm: i32,
    #[prost(string, tag = "3")]
    pub key_id: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub sender_key_id: ::prost::alloc::string::String,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct EncryptionRecipient {
    #[prost(message, optional, tag = "1")]
    pub header: ::core::option::Option<EncryptionHeader>,
    #[prost(bytes = "vec", tag = "2")]
    pub content_encryption_key: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum EncryptionMode {
    Unspecified = 0,
    Direct = 1,
    ContentEncryptionKey = 2,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum EncryptionAlgorithm {
    Unspecified = 0,
    Xchacha20poly1305 = 1,
    AesGcm = 2,
}
