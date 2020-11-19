use did_key::{DIDKey, DIDKeyType};

use crate::{didcomm::Error, proto::*};

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

impl crate::DIDKey {
    pub fn generate<'a>(request: &GenerateKeyRequest) -> Result<GenerateKeyResponse, Error<'a>> {
        let key_type = unwrap_or_return!(KeyType::from_i32(request.key_type), Error::InvalidField("key_type"));

        let key: Key = DIDKey::from_seed(key_type.into(), request.seed.as_slice()).into();

        Ok(GenerateKeyResponse { key: Some(key.clone()) })
    }

    pub fn convert<'a>(request: &ConvertKeyRequest) -> Result<ConvertKeyResponse, Error<'a>> {
        let request = request.clone();

        let target_type = unwrap_or_return!(KeyType::from_i32(request.target_type), Error::InvalidField("target_type"));
        let key: DIDKey = request.key.expect("Key not found").into();

        let target_did_key: DIDKey = match (key, target_type) {
            (DIDKey::Ed25519(x), KeyType::X25519) => DIDKey::X25519(x.into()),
            _ => return Err(Error::InvalidRequest),
        };
        let target_as_key: Key = target_did_key.into();

        Ok(ConvertKeyResponse {
            key: Some(target_as_key.clone()),
        })
    }
}
