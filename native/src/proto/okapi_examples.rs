#[derive(Clone, PartialEq, ::prost::Message)]
#[derive(::serde::Serialize, ::serde::Deserialize)]
pub struct BasicMessage {
    #[prost(string, tag="1")]
    pub text: std::string::String,
}
