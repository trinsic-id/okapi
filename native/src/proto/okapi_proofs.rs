#[derive(Clone, PartialEq, ::prost::Message)]
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
    pub key: ::std::option::Option<super::keys::JsonWebKey>,
    /// The LD Suite to use to produce this proof
    #[prost(enumeration = "LdSuite", tag = "4")]
    pub suite: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateProofResponse {
    #[prost(message, optional, tag = "1")]
    pub signed_document: ::std::option::Option<super::super::google::protobuf::Struct>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyProofRequest {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyProofResponse {}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum LdSuite {
    JcsEd25519Signature2020 = 0,
}
