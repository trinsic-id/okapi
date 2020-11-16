use crate::didcomm::*;
use crate::keys::{ed25519::*, p256::*, x25519::*, *};
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;

#[no_mangle]
pub extern "C" fn didcomm_generate_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(GenerateKeyRequest, request, err);
    let key_type = KeyType::from_i32(req.key_type).expect("invalid key type");

    let ver_method: Box<dyn EcdsaSigner<Err = _>> = match key_type {
        KeyType::Ed25519 => Box::new(Ed25519Key::from_seed(&req.seed)),
        KeyType::X25519 => Box::new(X25519Key::from_seed(&req.seed)),
        KeyType::P256 => Box::new(P256Key::from_seed(&req.seed)),
    };

    *response = byte_buffer!(GenerateKeyResponse {
        key: Some(ver_method.as_key())
    });
    *err = err!();
    0
}

#[no_mangle]
pub extern "C" fn didcomm_convert_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(ConvertKeyRequest, request, err);

    let key = req.key.expect("Key not found");

    let converted_key: X25519Key = match (
        KeyType::from_i32(key.key_type).expect("invalid key type"),
        KeyType::from_i32(req.target_type).expect("invalid key type"),
    ) {
        (KeyType::Ed25519, KeyType::X25519) => Ed25519Key::from(key).into(),
        _ => {
            *err = err!(100, "unsupported conversion");
            return 1;
        }
    };

    *response = byte_buffer!(ConvertKeyResponse {
        key: Some(converted_key.as_key())
    });
    0
}
