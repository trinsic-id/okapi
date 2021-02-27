use crate::*;
use ::jni::JNIEnv;
use ::jni::{objects::JClass, sys::jbyteArray};

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1pack(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(PackRequest, DIDComm, pack, env, request)
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1unpack(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(UnpackRequest, DIDComm, unpack, env, request)
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1sign(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(SignRequest, DIDComm, sign, env, request)
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1verify(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(VerifyRequest, DIDComm, verify, env, request)
}
