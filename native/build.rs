extern crate prost_build;

fn main() {
    prost_build::compile_protos(&["../proto/security.proto",
                                  "../proto/didcomm.proto",
                                  "../proto/basic-message.proto"],
                                &["../proto"]).unwrap();
}