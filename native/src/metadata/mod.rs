use std::collections::HashMap;
use crate::didcomm::Error;
use crate::proto::okapi::okapi_metadata::{MetadataRequest, MetadataResponse};

impl crate::Metadata {
    pub fn get_metadata<'a>(request: &MetadataRequest) -> Result<MetadataResponse, Error<'a>> {
        let env_vars = request.variables.clone();

        // Get the version for sure, and parse it
        let mut major_ver = 0;
        let mut minor_ver = 0;

        const PKG_VERSION: Option<&str> = option_env!("CARGO_PKG_VERSION");
        let pkg_pieces = PKG_VERSION.unwrap().split(".").collect::<Vec<&str>>();
        if pkg_pieces.len() >= 2 {
            major_ver = pkg_pieces[0].parse::<i32>().unwrap();
            minor_ver = pkg_pieces[1].parse::<i32>().unwrap();
        }

        let mut requested_vars: HashMap<String, String> = Default::default();
        for env_var_name in env_vars {
            // let env_var_value = env!(env_var_name);
            // requested_vars.insert(env_var_name, env_var_value.parse().unwrap());
        }

        Ok(MetadataResponse {
            version: PKG_VERSION.unwrap().parse().unwrap(),
            version_major: major_ver,
            version_minor: minor_ver,
            variables: requested_vars
        })
    }
}
