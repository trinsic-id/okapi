#![cfg(target_arch = "wasm32")]

use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

use crate::didcomm::*;
use crate::keys::{ed25519::*, p256::*, x25519::*, *};
use prost::Message;

#[wasm_bindgen]
pub fn generate_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = GenerateKeyRequest::decode(request.to_vec().as_slice()).unwrap();
    let key_type = KeyType::from_i32(req.key_type).expect("invalid key type");

    let ver_method: Box<dyn EcdsaSigner<Err = _>> = match key_type {
        KeyType::Ed25519 => Box::new(Ed25519Key::from_seed(&req.seed)),
        KeyType::X25519 => Box::new(X25519Key::from_seed(&req.seed)),
        KeyType::P256 => Box::new(P256Key::from_seed(&req.seed)),
    };

    let response = encode!(GenerateKeyResponse {
        key: Some(ver_method.as_key())
    });
    Ok(response.as_slice().into())
}

#[wasm_bindgen]
pub fn convert_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = ConvertKeyRequest::decode(request.to_vec().as_slice()).unwrap();
    let key = req.key.expect("Key not found");

    let converted_key: X25519Key = match (
        KeyType::from_i32(key.key_type).expect("invalid key type"),
        KeyType::from_i32(req.target_type).expect("invalid key type"),
    ) {
        (KeyType::Ed25519, KeyType::X25519) => Ed25519Key::from(key).into(),
        _ => panic!("unsupported conversion"),
    };

    let response = encode!(ConvertKeyResponse {
        key: Some(converted_key.as_key())
    });
    Ok(response.as_slice().into())
}

#[wasm_bindgen]
pub fn sign(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = SignRequest::decode(request.to_vec().as_slice()).unwrap();
    let key = req.key.expect("Key not found");
    let key_type = KeyType::from_i32(key.key_type).expect("invalid key type");

    let ver_method: Box<dyn EcdsaSigner<Err = _>> = match key_type {
        KeyType::Ed25519 => Box::new(Ed25519Key::from_seed(&key.secret_key)),
        KeyType::X25519 => Box::new(X25519Key::from_seed(&key.secret_key)),
        KeyType::P256 => Box::new(P256Key::from_seed(&key.secret_key)),
    };

    let response = encode!(SignResponse {
        message: Some(SignedMessage {
            payload: req.payload.to_vec(),
            signatures: vec![Signature {
                signature: ver_method.sign(&req.payload),
                header: encode!(SignatureHeader {
                    algorithm: String::from("TODO"),
                    key_id: key.key_id.clone()
                })
            }]
        })
    });
    Ok(response.as_slice().into())
}

#[wasm_bindgen]
pub fn verify(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = VerifyRequest::decode(request.to_vec().as_slice()).unwrap();
    let key = req.key.expect("Key not found");
    let key_type = KeyType::from_i32(key.key_type).expect("invalid key type");

    let message = req.message.expect("message is required");
    let signature = message.signatures.first().expect("signature is required");
    let _ = SignatureHeader::decode(signature.header.as_slice()).expect("header in signature is required");

    let ver_method: Box<dyn EcdsaSigner<Err = _>> = match key_type {
        KeyType::Ed25519 => Box::new(Ed25519Key::from_seed(&key.secret_key)),
        KeyType::X25519 => Box::new(X25519Key::from_seed(&key.secret_key)),
        KeyType::P256 => Box::new(P256Key::from_seed(&key.secret_key)),
    };

    let response = encode!(VerifyResponse {
        is_valid: ver_method.verify(&message.payload, &signature.signature).map_or(false, |_| true)
    });
    Ok(response.as_slice().into())
}
