#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenerateKeyRequest {
    #[prost(bytes="vec", tag="1")]
    pub seed: ::prost::alloc::vec::Vec<u8>,
    #[prost(enumeration="KeyType", tag="2")]
    pub key_type: i32,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenerateKeyResponse {
    #[prost(message, repeated, tag="1")]
    pub key: ::prost::alloc::vec::Vec<JsonWebKey>,
    #[prost(message, optional, tag="2")]
    pub did_document: ::core::option::Option<super::super::super::google::protobuf::Struct>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ResolveRequest {
    #[prost(string, tag="1")]
    pub did: ::prost::alloc::string::String,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ResolveResponse {
    #[prost(message, optional, tag="1")]
    pub did_document: ::core::option::Option<super::super::super::google::protobuf::Struct>,
    #[prost(message, repeated, tag="2")]
    pub keys: ::prost::alloc::vec::Vec<JsonWebKey>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct JsonWebKey {
    #[prost(string, tag="1")]
    pub kid: ::prost::alloc::string::String,
    /// public_key
    #[prost(string, tag="2")]
    pub x: ::prost::alloc::string::String,
    /// public_key
    #[prost(string, tag="3")]
    pub y: ::prost::alloc::string::String,
    /// secret_key
    #[prost(string, tag="4")]
    pub d: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub crv: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub kty: ::prost::alloc::string::String,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum KeyType {
    Unspecified = 0,
    Ed25519 = 1,
    X25519 = 2,
    P256 = 3,
    Bls12381g1g2 = 4,
    Secp256k1 = 5,
}
