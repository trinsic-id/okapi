#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignRequest {
    #[prost(bytes, tag = "1")]
    pub payload: std::vec::Vec<u8>,
    #[prost(message, optional, tag = "2")]
    pub key: ::std::option::Option<super::keys::JsonWebKey>,
    #[prost(message, optional, tag = "3")]
    pub append_to: ::std::option::Option<super::super::pbmse::SignedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SignResponse {
    #[prost(message, optional, tag = "1")]
    pub message: ::std::option::Option<super::super::pbmse::SignedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyRequest {
    #[prost(message, optional, tag = "1")]
    pub message: ::std::option::Option<super::super::pbmse::SignedMessage>,
    #[prost(message, optional, tag = "2")]
    pub key: ::std::option::Option<super::keys::JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyResponse {
    #[prost(bool, tag = "1")]
    pub is_valid: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PackRequest {
    #[prost(message, optional, tag = "1")]
    pub sender_key: ::std::option::Option<super::keys::JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub receiver_key: ::std::option::Option<super::keys::JsonWebKey>,
    #[prost(bytes, tag = "3")]
    pub associated_data: std::vec::Vec<u8>,
    #[prost(bytes, tag = "4")]
    pub plaintext: std::vec::Vec<u8>,
    #[prost(enumeration = "super::super::pbmse::EncryptionMode", tag = "5")]
    pub mode: i32,
    #[prost(enumeration = "super::super::pbmse::EncryptionAlgorithm", tag = "6")]
    pub algorithm: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PackResponse {
    #[prost(message, optional, tag = "1")]
    pub message: ::std::option::Option<super::super::pbmse::EncryptedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnpackRequest {
    #[prost(message, optional, tag = "1")]
    pub sender_key: ::std::option::Option<super::keys::JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub receiver_key: ::std::option::Option<super::keys::JsonWebKey>,
    #[prost(message, optional, tag = "3")]
    pub message: ::std::option::Option<super::super::pbmse::EncryptedMessage>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnpackResponse {
    #[prost(bytes, tag = "1")]
    pub plaintext: std::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
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
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NoOp {}
