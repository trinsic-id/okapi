use crate::didcomm::*;
use did_key::{DIDKey, DIDKeyType};
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;

impl From<DIDKey> for Key {
    fn from(key: DIDKey) -> Self {
        Key {
            key_id: format!("#{}", key.fingerprint()),
            key_type: match key {
                DIDKey::Ed25519(_) => KeyType::Ed25519,
                DIDKey::X25519(_) => KeyType::X25519,
                DIDKey::P256(_) => KeyType::P256,
            } as i32,
            public_key: key.public_key(),
            secret_key: key.secret_key().map_or(vec![], |x| x),
            fingerprint: key.fingerprint(),
        }
    }
}

impl From<Key> for DIDKey {
    fn from(key: Key) -> Self {
        let key_type: DIDKeyType = KeyType::from_i32(key.key_type).expect("invalid code").into();

        match key.secret_key.is_empty() {
            true => DIDKey::from_public_key(key_type, key.public_key.as_slice()),
            false => DIDKey::from_seed(key_type, key.secret_key.as_slice()),
        }
    }
}

impl From<KeyType> for DIDKeyType {
    fn from(key_type: KeyType) -> Self {
        match key_type {
            KeyType::Ed25519 => DIDKeyType::Ed25519,
            KeyType::X25519 => DIDKeyType::X25519,
            KeyType::P256 => DIDKeyType::P256,
        }
    }
}

#[no_mangle]
pub extern "C" fn didcomm_generate_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(GenerateKeyRequest, request, err);
    let key_type = KeyType::from_i32(req.key_type).expect("invalid key type");

    let key: Key = DIDKey::from_seed(key_type.into(), req.seed.as_slice()).into();

    *response = byte_buffer!(GenerateKeyResponse { key: Some(key.clone()) });
    *err = err!();
    0
}

#[no_mangle]
pub extern "C" fn didcomm_convert_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(ConvertKeyRequest, request, err);

    let target_type = KeyType::from_i32(req.target_type).expect("invalid code");
    let key: DIDKey = req.key.expect("Key not found").into();

    let target_did_key: DIDKey = match (key, target_type) {
        (DIDKey::Ed25519(x), KeyType::X25519) => DIDKey::X25519(x.into()),
        _ => {
            *err = err!(100, "unsupported conversion");
            return 1;
        }
    };
    let target_as_key: Key = target_did_key.into();

    *response = byte_buffer!(ConvertKeyResponse {
        key: Some(target_as_key.clone())
    });
    0
}
