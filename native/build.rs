use std::fs::{copy, remove_file};

use prost_build::Config;

extern crate prost_build;

fn main() {
    Config::new()
        .compile_well_known_types()
        //.type_attribute(".", "#[derive(::serde::Serialize, ::serde::Deserialize)]")
        .out_dir(".")
        .compile_protos(
            &[
                "../proto/transport.proto",
                "../proto/examples.proto",
                "../proto/keys.proto",
                "../proto/proofs.proto",
            ],
            &["../proto", "../proto/pbmse"],
        )
        .unwrap();

    copy("okapi.examples.rs", "./src/proto/okapi_examples.rs").unwrap();
    copy("okapi.keys.rs", "./src/proto/okapi_keys.rs").unwrap();
    copy("okapi.transport.rs", "./src/proto/okapi_transport.rs").unwrap();
    copy("okapi.proofs.rs", "./src/proto/okapi_proofs.rs").unwrap();
    copy("google.protobuf.rs", "./src/proto/google_protobuf.rs").unwrap();
    copy("pbmse.rs", "./src/proto/pbmse.rs").unwrap();
    remove_file("okapi.examples.rs").unwrap();
    remove_file("okapi.keys.rs").unwrap();
    remove_file("okapi.transport.rs").unwrap();
    remove_file("okapi.proofs.rs").unwrap();
    remove_file("google.protobuf.rs").unwrap();
    remove_file("pbmse.rs").unwrap();
}
