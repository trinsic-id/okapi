/// Create an Oberon Compatible Secret Key
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateOberonKeyRequest {
    /// optional seed to generate deterministic keys
    #[prost(bytes="vec", tag="1")]
    pub seed: ::prost::alloc::vec::Vec<u8>,
}
/// Contains the oberon secret key bytes
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateOberonKeyReply {
    /// raw secret key bytes
    #[prost(bytes="vec", tag="2")]
    pub sk: ::prost::alloc::vec::Vec<u8>,
    /// raw public key bytes
    #[prost(bytes="vec", tag="3")]
    pub pk: ::prost::alloc::vec::Vec<u8>,
}
/// Create a new oberon token
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateOberonTokenRequest {
    /// raw BLS key bytes
    #[prost(bytes="vec", tag="1")]
    pub sk: ::prost::alloc::vec::Vec<u8>,
    /// data is the public part of the oberon protocol and can be any data
    #[prost(bytes="vec", tag="2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    /// optional blinding for the token
    #[prost(bytes="vec", repeated, tag="3")]
    pub blinding: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
}
/// Contains the token with optional blinding 
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateOberonTokenReply {
    /// raw token bytes
    #[prost(bytes="vec", tag="1")]
    pub token: ::prost::alloc::vec::Vec<u8>,
}
/// Create a proof that holder knows the token
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateOberonProofRequest {
    /// data used to create the token
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    /// token data
    #[prost(bytes="vec", tag="2")]
    pub token: ::prost::alloc::vec::Vec<u8>,
    /// any blindings used to create the token
    #[prost(bytes="vec", repeated, tag="3")]
    pub blinding: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
    /// nonce for generating the proof
    #[prost(bytes="vec", tag="4")]
    pub nonce: ::prost::alloc::vec::Vec<u8>,
}
/// Contains the token proof
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateOberonProofReply {
    /// raw proof bytes
    #[prost(bytes="vec", tag="2")]
    pub proof: ::prost::alloc::vec::Vec<u8>,
}
/// Verify the presented proof is valid
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyOberonProofRequest {
    /// raw proof bytes returned from CreateProof
    #[prost(bytes="vec", tag="1")]
    pub proof: ::prost::alloc::vec::Vec<u8>,
    /// data used to create the token
    #[prost(bytes="vec", tag="2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    /// nonce used to generate the proof
    #[prost(bytes="vec", tag="3")]
    pub nonce: ::prost::alloc::vec::Vec<u8>,
    /// public key that was used to generate the token
    #[prost(bytes="vec", tag="4")]
    pub pk: ::prost::alloc::vec::Vec<u8>,
}
/// Contains the status of the proof validation
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VerifyOberonProofReply {
    /// whether the given proof was valid
    #[prost(bool, tag="1")]
    pub valid: bool,
}
/// Blind an oberon token 
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlindOberonTokenRequest {
    /// raw token bytes
    #[prost(bytes="vec", tag="1")]
    pub token: ::prost::alloc::vec::Vec<u8>,
    /// blinding to apply to the token
    #[prost(bytes="vec", repeated, tag="2")]
    pub blinding: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
}
/// Contains the blinded token reply
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlindOberonTokenReply {
    /// raw blinded token bytes
    #[prost(bytes="vec", tag="1")]
    pub token: ::prost::alloc::vec::Vec<u8>,
}
/// UnBlind an oberon token 
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnBlindOberonTokenRequest {
    /// raw token bytes
    #[prost(bytes="vec", tag="1")]
    pub token: ::prost::alloc::vec::Vec<u8>,
    /// blinding to remove from the token
    #[prost(bytes="vec", repeated, tag="2")]
    pub blinding: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
}
/// Contains the unblinded token reply
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnBlindOberonTokenReply {
    /// raw unblinded token bytes
    #[prost(bytes="vec", tag="1")]
    pub token: ::prost::alloc::vec::Vec<u8>,
}
