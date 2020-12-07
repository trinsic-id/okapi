use crate::{proto::*, *};
use ffi_support::{ByteBuffer, ExternError};
use jni::JNIEnv;
use jni::{objects::JClass, sys::jbyteArray};

#[no_mangle]
pub extern "C" fn didcomm_pack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(PackRequest, DIDComm, pack, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_unpack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(UnpackRequest, DIDComm, unpack, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_sign(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(SignRequest, DIDComm, sign, request, response, err)
}

#[no_mangle]
pub extern "C" fn didcomm_verify(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(VerifyRequest, DIDComm, verify, request, response, err)
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1pack(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    let _request = env.convert_byte_array(request).unwrap();

    let pack_req = match PackRequest::from_vec(&_request) {
        Ok(req) => req,
        Err(_) => todo!(),
    };

    let _response = match DIDComm::pack(&pack_req) {
        Ok(res) => res,
        Err(_) => todo!(),
    };

    return env.byte_array_from_slice(&_response.to_vec().as_slice()).unwrap();
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1unpack(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    let _request = env.convert_byte_array(request).unwrap();

    let unpack_req = match UnpackRequest::from_vec(&_request) {
        Ok(req) => req,
        Err(_) => todo!(),
    };

    let _response = match DIDComm::unpack(&unpack_req) {
        Ok(res) => res,
        Err(_) => todo!(),
    };

    return env.byte_array_from_slice(&_response.to_vec().as_slice()).unwrap();
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1sign(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    let _request = env.convert_byte_array(request).unwrap();

    let sign_req = match SignRequest::from_vec(&_request) {
        Ok(req) => req,
        Err(_) => todo!(),
    };

    let _response = match DIDComm::sign(&sign_req) {
        Ok(res) => res,
        Err(_) => todo!(),
    };

    return env.byte_array_from_slice(&_response.to_vec().as_slice()).unwrap();
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didcomm_1verify(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    let _request = env.convert_byte_array(request).unwrap();

    let verify_req = match VerifyRequest::from_vec(&_request) {
        Ok(req) => req,
        Err(_) => todo!(),
    };

    let _response = match DIDComm::verify(&verify_req) {
        Ok(res) => res,
        Err(_) => todo!(),
    };

    return env.byte_array_from_slice(&_response.to_vec().as_slice()).unwrap();
}
