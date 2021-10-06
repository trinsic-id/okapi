use crate::{proto::security::*, *};
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn oberon_create_token(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(CreateOberonTokenRequest, Oberon, token, request, response, err)
}

#[no_mangle]
pub extern "C" fn oberon_blind_token(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(BlindOberonTokenRequest, Oberon, blind, request, response, err)
}

#[no_mangle]
pub extern "C" fn oberon_unblind_token(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(UnBlindOberonTokenRequest, Oberon, blind, request, response, err)
}

#[no_mangle]
pub extern "C" fn oberon_create_proof(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(CreateOberonProofRequest, Oberon, proof, request, response, err)
}

#[no_mangle]
pub extern "C" fn oberon_verify_proof(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(VerifyOberonProofRequest, Oberon, verify, request, response, err)
}