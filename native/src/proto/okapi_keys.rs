#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenerateKeyRequest {
    #[prost(bytes, tag = "1")]
    pub seed: std::vec::Vec<u8>,
    #[prost(enumeration = "KeyType", tag = "2")]
    pub key_type: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenerateKeyResponse {
    #[prost(message, repeated, tag = "1")]
    pub key: ::std::vec::Vec<JsonWebKey>,
    #[prost(message, optional, tag = "2")]
    pub did_document: ::std::option::Option<super::super::google::protobuf::Struct>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ResolveRequest {
    #[prost(string, tag = "1")]
    pub did: std::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ResolveResponse {
    #[prost(message, optional, tag = "1")]
    pub did_document: ::std::option::Option<super::super::google::protobuf::Struct>,
    #[prost(message, repeated, tag = "2")]
    pub keys: ::std::vec::Vec<JsonWebKey>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
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
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum KeyType {
    Ed25519 = 0,
    X25519 = 1,
    P256 = 2,
    Bls12381G1g2 = 3,
    Secp256k1 = 4,
}
