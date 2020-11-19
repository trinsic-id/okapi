use crate::proto::*;
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn didcomm_generate_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    impl_c_method!(GenerateKeyRequest, DIDKey, generate, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_convert_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    impl_c_method!(ConvertKeyRequest, DIDKey, convert, request, response, err)
}
