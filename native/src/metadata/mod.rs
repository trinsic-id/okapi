use crate::didcomm::Error;
use crate::proto::okapi::okapi_metadata::{MetadataRequest, MetadataResponse};

impl crate::Metadata {
    pub fn get_metadata<'a>(request: &MetadataRequest) -> Result<MetadataResponse, Error<'a>> {
        Ok(MetadataResponse {
            version: option_env!("CARGO_PKG_VERSION").unwrap_or_default().parse().unwrap_or_default(),
            version_major: option_env!("CARGO_PKG_VERSION_MAJOR").unwrap_or_default().parse().unwrap_or_default(),
            version_minor: option_env!("CARGO_PKG_VERSION_MINOR").unwrap_or_default().parse().unwrap_or_default(),
            version_patch: option_env!("CARGO_PKG_VERSION_PATCH").unwrap_or_default().parse().unwrap_or_default(),
            
            target_family: option_env!("CARGO_CFG_TARGET_FAMILY").unwrap_or_default().parse().unwrap_or_default(),
            target_os: option_env!("CARGO_CFG_TARGET_os").unwrap_or_default().parse().unwrap_or_default(),
            target_arch: option_env!("CARGO_CFG_TARGET_arch").unwrap_or_default().parse().unwrap_or_default(),
            target_vendor: option_env!("CARGO_CFG_TARGET_VENDOR").unwrap_or_default().parse().unwrap_or_default(),
            target_env: option_env!("CARGO_CFG_TARGET_ENV").unwrap_or_default().parse().unwrap_or_default()
        })
    }
}
