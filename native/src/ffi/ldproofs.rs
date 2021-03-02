use crate::*;
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn ldproofs_create_proof(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(CreateProofRequest, LdProofs, create_proof, request, response, err)
}

#[no_mangle]
pub extern "C" fn ldproofs_verify_proof(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(VerifyProofRequest, LdProofs, verify_proof, request, response, err)
}
