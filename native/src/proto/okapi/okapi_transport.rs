#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct SignRequest {
    #[prost(bytes = "vec", tag = "1")]
    pub payload: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, optional, tag = "2")]
    pub key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
    #[prost(message, optional, tag = "3")]
    pub append_to: ::core::option::Option<super::super::super::pbmse::v1::SignedMessage>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct SignResponse {
    #[prost(message, optional, tag = "1")]
    pub message: ::core::option::Option<super::super::super::pbmse::v1::SignedMessage>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct VerifyRequest {
    #[prost(message, optional, tag = "1")]
    pub message: ::core::option::Option<super::super::super::pbmse::v1::SignedMessage>,
    #[prost(message, optional, tag = "2")]
    pub key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct VerifyResponse {
    #[prost(bool, tag = "1")]
    pub is_valid: bool,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct PackRequest {
    #[prost(message, optional, tag = "1")]
    pub sender_key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub receiver_key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
    #[prost(bytes = "vec", tag = "3")]
    pub associated_data: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "4")]
    pub plaintext: ::prost::alloc::vec::Vec<u8>,
    #[prost(enumeration = "super::super::super::pbmse::v1::EncryptionMode", tag = "5")]
    pub mode: i32,
    #[prost(enumeration = "super::super::super::pbmse::v1::EncryptionAlgorithm", tag = "6")]
    pub algorithm: i32,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct PackResponse {
    #[prost(message, optional, tag = "1")]
    pub message: ::core::option::Option<super::super::super::pbmse::v1::EncryptedMessage>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct UnpackRequest {
    #[prost(message, optional, tag = "1")]
    pub sender_key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub receiver_key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
    #[prost(message, optional, tag = "3")]
    pub message: ::core::option::Option<super::super::super::pbmse::v1::EncryptedMessage>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct UnpackResponse {
    #[prost(bytes = "vec", tag = "1")]
    pub plaintext: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize, Clone, PartialEq, ::prost::Message)]
pub struct CoreMessage {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub r#type: ::prost::alloc::string::String,
    #[prost(bytes = "vec", tag = "3")]
    pub body: ::prost::alloc::vec::Vec<u8>,
    #[prost(string, repeated, tag = "4")]
    pub to: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(string, tag = "5")]
    pub from: ::prost::alloc::string::String,
    #[prost(int64, tag = "6")]
    pub created: i64,
    #[prost(int64, tag = "7")]
    pub expires: i64,
}
