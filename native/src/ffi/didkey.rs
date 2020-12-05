use crate::proto::*;
use ffi_support::{ByteBuffer, ExternError};

use jni::JNIEnv;
use jni::objects::JClass;
use jni::sys::{jbyteArray, jint};

#[no_mangle]
pub extern "C" fn didkey_generate(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(GenerateKeyRequest, DIDKey, generate, request, response, err)
}

#[no_mangle]
pub extern "C" fn didkey_convert(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(ConvertKeyRequest, DIDKey, convert, request, response, err)
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didkey_1generate(_env: JNIEnv, _class: JClass, request: jbyteArray,) -> jbyteArray {
    c_impl!(GenerateKeyRequest, DIDKey, generate, request, response, err)
    request
}
