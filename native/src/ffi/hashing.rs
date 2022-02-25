use crate::{proto::hashing::*, *};
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn blake3_hash(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Blake3HashRequest, Hashing, blake3_hash, request, response, err)
}

#[no_mangle]
pub extern "C" fn blake3_keyed_hash(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Blake3HashRequest, Hashing, blake3_keyed_hash, request, response, err)
}

#[no_mangle]
pub extern "C" fn blake3_derive_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Blake3DeriveKeyRequest, Hashing, blake3_derive_key, request, response, err)
}

#[no_mangle]
pub extern "C" fn sha256_hash(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Sha256HashRequest, Hashing, sha256_hash, request, response, err)
}