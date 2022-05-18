/// Request custom metadata about the native okapi binaries - cannot get cargo env vars at runtime
///
/// repeated string variables = 1; // optional field, can contain any of the cargo env vars
#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MetadataRequest {
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
    /// Patch release version
    #[prost(int32, tag="4")]
    pub version_patch: i32,
    /// https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates
    #[prost(string, tag="10")]
    pub target_family: ::prost::alloc::string::String,
    #[prost(string, tag="11")]
    pub target_os: ::prost::alloc::string::String,
    #[prost(string, tag="12")]
    pub target_arch: ::prost::alloc::string::String,
    #[prost(string, tag="13")]
    pub target_vendor: ::prost::alloc::string::String,
    #[prost(string, tag="14")]
    pub target_env: ::prost::alloc::string::String,
}
