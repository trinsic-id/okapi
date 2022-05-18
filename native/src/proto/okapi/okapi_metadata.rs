/// Request custom metadata about the native okapi binaries
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MetadataRequest {
    /// optional field, can contain any of the cargo env vars
    #[prost(string, repeated, tag="1")]
    pub variables: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
/// Metadata information about the native okapi binaries. Always returns the version information
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MetadataResponse {
    /// The full version string from okapi
    #[prost(string, tag="1")]
    pub version: ::prost::alloc::string::String,
    /// Major version
    #[prost(int32, tag="2")]
    pub version_major: i32,
    /// Minor version
    #[prost(int32, tag="3")]
    pub version_minor: i32,
    /// etc
    ///
    /// will include any non default requested variables
    #[prost(map="string, string", tag="10")]
    pub variables: ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
}
