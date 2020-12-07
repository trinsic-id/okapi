use crate::{proto::*, *};
use ::jni::JNIEnv;
use ::jni::{objects::JClass, sys::jbyteArray};

#[no_mangle]
pub extern "system" fn Java_didcomm_pack(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(PackRequest, DIDComm, pack, env, request)
}

#[no_mangle]
pub extern "system" fn Java_didcomm_unpack(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(UnpackRequest, DIDComm, unpack, env, request)
}

#[no_mangle]
pub extern "system" fn Java_didcomm_sign(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(SignRequest, DIDComm, sign, env, request)
}

#[no_mangle]
pub extern "system" fn Java_didcomm_verify(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(VerifyRequest, DIDComm, verify, env, request)
}
