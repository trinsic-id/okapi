use crate::didcomm::*;
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;
use std::convert::TryFrom;

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
        _ => panic!("unsupported key type"),
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
    let header = unwrap!(SignatureHeader::decode(signature.header.as_slice()), err, "header in signature is required");
    let key_type = unwrap_opt!(KeyType::from_i32(key.key_type), err, "invalid enum code");

    if header.key_id != key.key_id {
        *err = err!("supplied key id doesn't match signature header");
        return 1;
    }

    let result = match key_type {
        KeyType::Ed25519 => {
            use ed25519_dalek::*;

            let pk = unwrap!(PublicKey::from_bytes(key.public_key.as_slice()), err, "public key not found");
            pk.verify(message.payload.as_slice(), &Signature::try_from(signature.signature.as_slice()).unwrap())
        }
        _ => {
            *err = err!("unsupported key type");
            return 1;
        }
    };

    *response = byte_buffer!(VerifyResponse {
        is_valid: match result {
            Ok(_) => true,
            _ => false,
        }
    });
    *err = err!();
    0
}
