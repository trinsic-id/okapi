use did_key::{DIDKey, Payload};
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

use crate::didcomm::*;
use prost::Message;

#[wasm_bindgen]
pub fn generate_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = GenerateKeyRequest::decode(request.to_vec().as_slice()).unwrap();
    let key_type = KeyType::from_i32(req.key_type).expect("invalid key type");

    let key: Key = DIDKey::from_seed(key_type.into(), req.seed.as_slice()).into();

    let response = encode!(GenerateKeyResponse { key: Some(key.clone()) });
    Ok(response.as_slice().into())
}

#[wasm_bindgen]
pub fn convert_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = ConvertKeyRequest::decode(request.to_vec().as_slice()).unwrap();
    let key = req.key.expect("Key not found");

    let target_type = KeyType::from_i32(req.target_type).expect("invalid code");
    let key: DIDKey = key.into();

    let target_did_key: DIDKey = match (key, target_type) {
        (DIDKey::Ed25519(x), KeyType::X25519) => DIDKey::X25519(x.into()),
        _ => unimplemented!(),
    };
    let target_as_key: Key = target_did_key.into();

    let response = encode!(ConvertKeyResponse {
        key: Some(target_as_key.clone())
    });
    Ok(response.as_slice().into())
}

#[wasm_bindgen]
pub fn sign(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = SignRequest::decode(request.to_vec().as_slice()).unwrap();
    let key = req.clone().key.expect("Key not found");

    let did_key: DIDKey = key.clone().into();
    let signature = did_key.sign(Payload::Buffer(&req.payload));

    let response = encode!(SignResponse {
        message: Some(SignedMessage {
            payload: req.payload.clone(),
            signatures: vec![Signature {
                signature: signature.clone(),
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

    let message = req.message.expect("message is required");
    let signature = message.signatures.first().expect("signature is required");
    let _ = SignatureHeader::decode(signature.header.as_slice()).expect("header in signature is required");

    let did_key: DIDKey = key.into();
    let valid = did_key.verify(Payload::Buffer(&signature.signature), &signature.signature);

    let response = encode!(VerifyResponse { is_valid: valid });
    Ok(response.as_slice().into())
}
