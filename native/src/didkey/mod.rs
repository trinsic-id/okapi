use did_key::{DIDKey, DIDKeyType};

use crate::{didcomm::Error, *};

impl From<DIDKey> for JsonWebKey {
    fn from(key: DIDKey) -> Self {
        JsonWebKey {
            key_id: format!("#{}", key.fingerprint()),
            x: match key {
                DIDKey::Ed25519(_) => base64::encode(&key.public_key()),
                DIDKey::X25519(_) => base64::encode(&key.public_key()),
                DIDKey::P256(_) => base64::encode(&key.public_key()[..key.public_key().len()/2]), //only need half of key?
                DIDKey::Bls12381G1G2(_) => base64::encode(&key.public_key()),
                DIDKey::Secp256k1(_) => base64::encode(&key.public_key()[..key.public_key().len()/2]), // need half
            },
            y: match key {
                DIDKey::Ed25519(_) => "".to_string(), //should be blank?
                DIDKey::X25519(_) => "".to_string(), // blank
                DIDKey::P256(_) => base64::encode(&key.public_key()[key.public_key().len()/2..]), // need other half of key
                DIDKey::Bls12381G1G2(_) => "".to_string(), // blank
                DIDKey::Secp256k1(_) => base64::encode(&key.public_key()[key.public_key().len()/2..]), // other half of key
            },
            d: base64::encode(key.secret_key().map_or(vec![], |x| x)), // need base64
            crv: match key {
                DIDKey::Ed25519(_) => Crv::Ed25519,
                DIDKey::X25519(_) => Crv::X25519,
                DIDKey::P256(_) => Crv::P256,
                DIDKey::Bls12381G1G2(_) => Crv::Bls12381G1,
                DIDKey::Secp256k1(_) => Crv::Secp256k1,
            } as i32,
            kty: match key {
                DIDKey::Ed25519(_) => KeyType::Okp,
                DIDKey::X25519(_) => KeyType::Okp,
                DIDKey::P256(_) => KeyType::Ec,
                DIDKey::Bls12381G1G2(_) => KeyType::Ec,
                DIDKey::Secp256k1(_) => KeyType::Ec,
            } as i32,
        }
    }
}

impl From<JsonWebKey> for DIDKey {
    fn from(key: JsonWebKey) -> Self {
        let key_type: DIDKeyType = Crv::from_i32(key.crv).expect("invalid code").into();

        let private_key = base64::decode(key.d).unwrap();
        let mut public_key = base64::decode(key.x).unwrap();
        public_key.append(&mut base64::decode(key.y).unwrap());

        match private_key.is_empty() {
            true => DIDKey::from_public_key(key_type, public_key.as_slice()),
            false => DIDKey::new_from_seed(key_type, private_key.as_slice()),
        }
    }
}

impl From<Crv> for DIDKeyType {
    fn from(key_type: Crv) -> Self {
        match key_type {
            Crv::Ed25519 => DIDKeyType::Ed25519,
            Crv::X25519 => DIDKeyType::X25519,
            Crv::P256 => DIDKeyType::P256,
            Crv::Secp256k1 => DIDKeyType::Secp256k1,
            Crv::Bls12381G1 => DIDKeyType::Bls12381G1G2,
            Crv::Bls12381G2 => DIDKeyType::Bls12381G1G2
        }
    }
}

impl crate::DIDKey {
    pub fn generate<'a>(request: &GenerateKeyRequest) -> Result<GenerateKeyResponse, Error<'a>> {
        let key_type = unwrap_or_return!(Crv::from_i32(request.key_type), Error::InvalidField("key_type"));

        let key: JsonWebKey = DIDKey::new_from_seed(key_type.into(), request.seed.as_slice()).into();

        Ok(GenerateKeyResponse { key: Some(key.clone()) })
    }

    pub fn convert<'a>(request: &ConvertKeyRequest) -> Result<ConvertKeyResponse, Error<'a>> {
        let request = request.clone();

        let target_type = unwrap_or_return!(Crv::from_i32(request.target_type), Error::InvalidField("target_type"));
        let key = unwrap_or_return!(request.key, Error::MissingField("key not found"));
        let did_key: DIDKey = key.into();

        let target_did_key: DIDKey = match (did_key, target_type) {
            (DIDKey::Ed25519(x), Crv::X25519) => DIDKey::X25519(x.into()),
            _ => return Err(Error::InvalidRequest),
        };
        let target_as_key: JsonWebKey = target_did_key.into();

        Ok(ConvertKeyResponse {
            key: Some(target_as_key.clone()),
        })
    }
}
