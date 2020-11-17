#![cfg(not(target_arch = "wasm32"))]

use crate::didcomm::*;
use did_key::{DIDKey, Payload};
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;

#[no_mangle]
pub extern "C" fn didcomm_sign(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(SignRequest, request, err);
    let key = unwrap_opt!(req.key, err, "key not found");

    let did_key: DIDKey = key.clone().into();
    let signature = did_key.sign(Payload::Buffer(&req.payload));

    println!("message {:?}", &req.payload);
    println!("signature {:?}", &signature.to_vec());

    *response = byte_buffer!(SignResponse {
        message: Some(SignedMessage {
            payload: req.payload.to_vec(),
            signatures: vec![Signature {
                signature: signature.to_vec(),
                header: encode!(SignatureHeader {
                    algorithm: String::from("Ed25519"),
                    key_id: key.key_id.clone()
                })
            }]
        })
    });
    *err = err!();
    0
}

#[no_mangle]
pub extern "C" fn didcomm_verify(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(VerifyRequest, request, err);
    let key = unwrap_opt!(req.key, err, "key is required");
    let message = unwrap_opt!(req.message, err, "message is required");
    let signature = unwrap_opt!(message.signatures.first(), err, "signature is required");
    let header = unwrap!(SignatureHeader::decode(signature.header.as_slice()), err, "header in signature is required");

    if header.key_id != key.key_id {
        *err = err!("supplied key id doesn't match signature header");
        return 1;
    }

    let did_key: DIDKey = key.into();
    let valid = did_key.verify(Payload::Buffer(&message.payload), &signature.signature);

    println!("message {:?}", &message.payload);
    println!("signature {:?}", &signature.signature);

    *response = byte_buffer!(VerifyResponse { is_valid: valid });
    *err = err!();
    0
}
