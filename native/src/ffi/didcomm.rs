use crate::proto::*;
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn didcomm_pack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    impl_c_method!(PackRequest, DIDComm, pack, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_unpack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    impl_c_method!(UnpackRequest, DIDComm, unpack, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_sign(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    impl_c_method!(SignRequest, DIDComm, sign, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_verify(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    impl_c_method!(VerifyRequest, DIDComm, verify, request, response, err)
}
