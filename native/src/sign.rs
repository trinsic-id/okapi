#![cfg(not(target_arch = "wasm32"))]

use crate::{
    didcomm::*,
    keys::{ed25519::Ed25519Key, p256::P256Key, x25519::X25519Key, *},
};
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;

#[no_mangle]
pub extern "C" fn didcomm_sign(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(SignRequest, request, err);
    let key = unwrap_opt!(req.key, err, "key not found");

    let signature = match KeyType::from_i32(key.key_type).expect("invalid enum code") {
        KeyType::Ed25519 => {
            use ed25519_dalek::*;

            let sk: SecretKey = unwrap!(SecretKey::from_bytes(&key.secret_key), err);
            let pk: PublicKey = (&sk).into();
            let esk: ExpandedSecretKey = (&sk).into();

            esk.sign(&req.payload, &pk).to_bytes()
        }
        _ => {
            *err = err!("unsupported key type");
            return 1;
        }
    };

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
    let header = unwrap!(
        SignatureHeader::decode(signature.header.as_slice()),
        err,
        "header in signature is required"
    );
    let key_type = unwrap_opt!(KeyType::from_i32(key.key_type), err, "invalid enum code");

    if header.key_id != key.key_id {
        *err = err!("supplied key id doesn't match signature header");
        return 1;
    }

    let key: Box<dyn Signer<Err = _>> = match key_type {
        KeyType::Ed25519 => Box::new(Ed25519Key::from(key)),
        KeyType::X25519 => Box::new(X25519Key::from(key)),
        KeyType::P256 => Box::new(P256Key::from(key)),
    };

    *response = byte_buffer!(VerifyResponse {
        is_valid: key
            .verify(message.payload.as_slice(), signature.signature.as_slice())
            .map_or(false, |_| true)
    });
    *err = err!();
    0
}
