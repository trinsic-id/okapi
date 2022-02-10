#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Blake3HashRequest {
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Blake3HashResponse {
    #[prost(bytes="vec", tag="1")]
    pub digest: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Blake3KeyedHashRequest {
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes="vec", tag="2")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Blake3KeyedHashResponse {
    #[prost(bytes="vec", tag="1")]
    pub digest: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Blake3DeriveKeyRequest {
    #[prost(bytes="vec", tag="1")]
    pub context: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes="vec", tag="2")]
    pub key_material: ::prost::alloc::vec::Vec<u8>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Blake3DeriveKeyResponse {
    #[prost(bytes="vec", tag="1")]
    pub digest: ::prost::alloc::vec::Vec<u8>,
}
