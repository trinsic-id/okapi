use crate::*;
use ::jni::JNIEnv;
use ::jni::{objects::JClass, sys::jbyteArray};

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didkey_1generate(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(GenerateKeyRequest, DIDKey, generate, env, request)
}

#[no_mangle]
pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didkey_1resolve(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
    jni_impl!(ResolveRequest, DIDKey, resolve, env, request)
}

// #[no_mangle]
// pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didkey_1convert(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
//     jni_impl!(ConvertKeyRequest, DIDKey, convert, env, request)
// }

// #[no_mangle]
// pub extern "system" fn Java_DIDComm_Messaging_gRPC_NativeMethods_didkey_1generate(env: JNIEnv, _class: JClass, request: jbyteArray) -> jbyteArray {
//     let request = env.convert_byte_array(request).unwrap();

//     let gen_key_req = match GenerateKeyRequest::from_vec(&request) {
//         Ok(request) => request,
//         Err(err) => {
//             env.throw_new("java/lang/Exception", format!("{:?}", err)).unwrap_or_default();
//             return env.byte_array_from_slice(&vec![].as_slice()).unwrap();
//         }
//     };

//     let response = match DIDKey::generate(&gen_key_req) {
//         Ok(response) => response,
//         Err(err) => {
//             env.throw_new("java/lang/Exception", format!("{:?}", err)).unwrap_or_default();
//             return env.byte_array_from_slice(&vec![].as_slice()).unwrap();
//         }
//     };

//     return env.byte_array_from_slice(&response.to_vec().as_slice()).unwrap();
// }
