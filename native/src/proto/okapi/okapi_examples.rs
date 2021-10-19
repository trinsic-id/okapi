#[derive(::serde::Serialize, ::serde::Deserialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BasicMessage {
    #[prost(string, tag="1")]
    pub text: ::prost::alloc::string::String,
}
