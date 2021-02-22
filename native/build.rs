use std::fs::{copy, remove_file};

use prost_build::Config;

extern crate prost_build;

fn main() {
    Config::new()
        .compile_well_known_types()
        .type_attribute(".", "#[derive(::serde::Serialize, ::serde::Deserialize)]")
        .out_dir(".")
        .compile_protos(
            &[
                "../proto/security.proto",
                "../proto/didcomm.proto",
                "../proto/basic-message.proto",
                "../proto/api.proto",
            ],
            &["../proto"],
        )
        .unwrap();

    copy("didcomm.messaging.rs", "./src/proto/didcomm_messaging.rs").unwrap();
    remove_file("didcomm.messaging.rs").unwrap();
    remove_file("google.protobuf.rs").unwrap();
}
