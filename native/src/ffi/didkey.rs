use std::todo;

use crate::{proto::*, DIDKey};
use ffi_support::{ByteBuffer, ExternError};
use jni::JNIEnv;
use jni::{objects::JClass, sys::jbyteArray};

#[no_mangle]
pub extern "C" fn didkey_generate(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(GenerateKeyRequest, DIDKey, generate, request, response, err)
}

#[no_mangle]
pub extern "C" fn didkey_convert(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(ConvertKeyRequest, DIDKey, convert, request, response, err)
}

#[no_mangle]
pub extern "system" fn Java_didkey_generate(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    let _request = env.convert_byte_array(request).unwrap();

    let gen_key_req = match GenerateKeyRequest::from_vec(&_request) {
        Ok(req) => req,
        Err(_) => todo!(),
    };

    let _response = match DIDKey::generate(&gen_key_req) {
        Ok(res) => res,
        Err(_) => todo!(),
    };

    return env.byte_array_from_slice(&_response.to_vec().as_slice()).unwrap();
}
