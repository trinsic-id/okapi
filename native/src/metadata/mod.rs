use crate::didcomm::Error;
use crate::proto::okapi::okapi_metadata::{MetadataRequest, MetadataResponse};

impl crate::Metadata {
    pub fn get_metadata<'a>(_request: &MetadataRequest) -> Result<MetadataResponse, Error<'a>> {
        Ok(MetadataResponse {
            version: option_env!("CARGO_PKG_VERSION").unwrap_or_default().to_string(),
            version_major: option_env!("CARGO_PKG_VERSION_MAJOR").unwrap_or_default().parse().unwrap_or_default(),
            version_minor: option_env!("CARGO_PKG_VERSION_MINOR").unwrap_or_default().parse().unwrap_or_default(),
            version_patch: option_env!("CARGO_PKG_VERSION_PATCH").unwrap_or_default().parse().unwrap_or_default(),

            target_family: option_env!("CARGO_CFG_TARGET_FAMILY").unwrap_or_default().to_string(),
            target_os: option_env!("CARGO_CFG_TARGET_OS").unwrap_or_default().to_string(),
            target_arch: option_env!("CARGO_CFG_TARGET_ARCH").unwrap_or_default().to_string(),
            target_vendor: option_env!("CARGO_CFG_TARGET_VENDOR").unwrap_or_default().to_string(),
            target_env: option_env!("CARGO_CFG_TARGET_ENV").unwrap_or_default().to_string(),
        })
    }
}
