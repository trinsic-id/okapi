extern crate cbindgen;
extern crate prost_build;

use cbindgen::Language;
use prost_build::Config;
use std::env;
use std::fs::{copy, remove_file};

fn main() {
    // Build all protos with support for 'serde'
    // except the well known types, which have
    // custom serialization implemented separately
    compile_protobuf_files();

    build_c_header_file();
}

fn build_c_header_file() {
    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();

    cbindgen::Builder::new()
        .with_crate(&crate_dir)
        .with_language(Language::C)
        .with_parse_deps(true)
        .with_parse_include(&["ffi-support"])
        .with_parse_expand_features(&["didcomm_byte_buffer_free"])
        .with_documentation(false)
        .with_parse_expand(&[crate_dir])
        .generate()
        .expect("Unable to generate bindings")
        .write_to_file("../include/okapi.h");
}

fn compile_protobuf_files() {
    Config::new()
        .compile_well_known_types()
        .type_attribute(".okapi", "#[derive(::serde::Serialize, ::serde::Deserialize)]")
        .type_attribute(".pbmse", "#[derive(::serde::Serialize, ::serde::Deserialize)]")
        .out_dir(".")
        .compile_protos(
            &[
                "../proto/transport.proto",
                "../proto/examples.proto",
                "../proto/keys.proto",
                "../proto/proofs.proto",
                "../proto/security.proto",
            ],
            &["../proto", "../proto/pbmse"],
        )
        .unwrap();

    copy("okapi.examples.rs", "./src/proto/okapi_examples.rs").unwrap();
    copy("okapi.keys.rs", "./src/proto/okapi_keys.rs").unwrap();
    copy("okapi.transport.rs", "./src/proto/okapi_transport.rs").unwrap();
    copy("okapi.proofs.rs", "./src/proto/okapi_proofs.rs").unwrap();
    copy("okapi.security.rs", "./src/proto/okapi_security.rs").unwrap();
    copy("google.protobuf.rs", "./src/proto/google_protobuf.rs").unwrap();
    copy("pbmse.rs", "./src/proto/pbmse.rs").unwrap();
    remove_file("okapi.examples.rs").unwrap();
    remove_file("okapi.keys.rs").unwrap();
    remove_file("okapi.transport.rs").unwrap();
    remove_file("okapi.proofs.rs").unwrap();
    remove_file("okapi.security.rs").unwrap();
    remove_file("google.protobuf.rs").unwrap();
    remove_file("pbmse.rs").unwrap();
}
