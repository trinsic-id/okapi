use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

use crate::{didcomm::*, keys::ecdh_key_exchange, pack::xchacha::XChaCha, pack::AeadSuite};
use prost::Message;

#[wasm_bindgen]
pub fn pack(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = PackRequest::decode(request.to_vec().as_slice()).unwrap();
    let alg = EncryptionAlgorithm::from_i32(req.mode).expect("invalid code");
    let aad = req.associated_data.clone();

    let receiver_key = req.receiver_key.expect("receiver key not found");
    let sender_key = req.sender_key.expect("sender key not found");

    let cek = ecdh_key_exchange(&sender_key, &receiver_key);
    let mut nonce = [0u8; 24];
    getrandom::getrandom(&mut nonce).expect("cannot generate random seed");

    let result = match alg {
        EncryptionAlgorithm::Xchacha20poly1305 => XChaCha::from(&cek).encrypt(&nonce, &aad, &req.plaintext),
        _ => todo!(),
    }
    .expect("encryption failed");

    Ok(encode!(PackResponse {
        message: Some(EncryptedMessage {
            ciphertext: result.ciphertext.clone(),
            iv: nonce.to_vec(),
            aad: aad.clone(),
            tag: result.tag.clone(),
            recipients: vec![EncryptionRecipient {
                header: Some(EncryptionHeader {
                    mode: EncryptionMode::Direct.into(),
                    algorithm: EncryptionAlgorithm::Xchacha20poly1305.into(),
                    key_id: receiver_key.key_id.clone(),
                    sender_key_id: sender_key.key_id.clone()
                }),
                content_encryption_key: vec!()
            }]
        })
    })
    .as_slice()
    .into())
}

#[wasm_bindgen]
pub fn unpack(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    let req = UnpackRequest::decode(request.to_vec().as_slice()).unwrap();
    let message = req.message.expect("message not found");
    let recipient = message.recipients.first().unwrap().clone();
    let header = recipient.header.unwrap();
    let alg = EncryptionAlgorithm::from_i32(header.algorithm).expect("invalid code");
    let mode = EncryptionMode::from_i32(header.mode).expect("invalid code");

    let receiver_key = req.receiver_key.expect("receiver key not found");
    let sender_key = req.sender_key.expect("sender key not found");

    let cek = match mode {
        EncryptionMode::Direct => ecdh_key_exchange(&receiver_key, &sender_key),
        _ => panic!("unsupported encryption mode"),
    };

    let result = match alg {
        EncryptionAlgorithm::Xchacha20poly1305 => XChaCha::from(&cek).decrypt(
            message.iv.as_slice(),
            message.aad.as_slice(),
            message.ciphertext.as_slice(),
            message.tag.as_slice(),
        ),
        _ => todo!(),
    }
    .expect("encryption failed");

    Ok(encode!(UnpackResponse { plaintext: result.clone() }).as_slice().into())
}
