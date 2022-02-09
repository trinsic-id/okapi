use crate::{proto::hashing::*, *};
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn blake3_hash(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Blake3HashRequest, DIDComm, pack, request, response, err)
}

#[no_mangle]
pub extern "C" fn blake3_keyed_hash(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Blake3HashRequest, DIDComm, unpack, request, response, err)
}

#[no_mangle]
pub extern "C" fn blake3_derive_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(Blake3DeriveKeyRequest, DIDComm, sign, request, response, err)
}
