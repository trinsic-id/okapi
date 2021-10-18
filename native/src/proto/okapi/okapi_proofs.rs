#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateProofRequest {
    /// The input JSON document that will be used
    /// to create the LD Proof. This document must
    /// also contain a "proof" object, with the desired
    /// values filled in.
    #[prost(message, optional, tag="1")]
    pub document: ::core::option::Option<super::super::super::google::protobuf::Struct>,
    /// The signer of the proof. This field must include
    /// the 'kid' in full URI format.
    /// Example:
    ///  did:example:alice#key-1
    #[prost(message, optional, tag="3")]
    pub key: ::core::option::Option<super::super::keys::v1::JsonWebKey>,
    /// The LD Suite to use to produce this proof
    #[prost(enumeration="LdSuite", tag="4")]
    pub suite: i32,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateProofResponse {
    #[prost(message, optional, tag="1")]
    pub signed_document: ::core::option::Option<super::super::super::google::protobuf::Struct>,
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyProofRequest {
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyProofResponse {
}
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum LdSuite {
    Unspecified = 0,
    Jcsed25519signature2020 = 1,
}
