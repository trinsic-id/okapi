
use std::convert::TryInto;

use did_key::*;

use crate::{didcomm::Error, *};

pub trait ToJwk {
    fn to_jwk_vec(&self) -> Vec<JsonWebKey>;
}

impl ToJwk for KeyPair {
    fn to_jwk_vec(&self) -> Vec<JsonWebKey> {
        match self {
            KeyPair::Ed25519(key) => {
                let x_did_key = KeyPair::X25519(key.get_x25519());

                vec![
                    JsonWebKey {
                        key_id: format!("#{}", self.fingerprint()),
                        x: base64::encode(self.public_key()),
                        d: self.secret_key().map_or(String::default(), |x| base64::encode(x)),
                        crv: Crv::Ed25519 as i32,
                        kty: KeyType::Okp as i32,
                        ..Default::default()
                    },
                    JsonWebKey {
                        key_id: format!("#{}", x_did_key.fingerprint()),
                        x: base64::encode(x_did_key.public_key()),
                        d: x_did_key.secret_key().map_or(String::default(), |x| base64::encode(x)),
                        crv: Crv::X25519 as i32,
                        kty: KeyType::Okp as i32,
                        ..Default::default()
                    },
                ]
            }
            KeyPair::X25519(_) => vec![JsonWebKey {
                key_id: format!("#{}", self.fingerprint()),
                x: base64::encode(self.public_key()),
                d: self.secret_key().map_or(String::default(), |x| base64::encode(x)),
                crv: Crv::X25519 as i32,
                kty: KeyType::Okp as i32,
                ..Default::default()
            }],
            KeyPair::P256(_) => vec![JsonWebKey {
                key_id: format!("#{}", self.fingerprint()),
                x: base64::encode(&self.public_key()[..self.public_key().len() / 2]),
                y: base64::encode(&self.public_key()[self.public_key().len() / 2..]),
                d: self.secret_key().map_or(String::default(), |x| base64::encode(x)),
                crv: Crv::P256 as i32,
                kty: KeyType::Ec as i32,
                ..Default::default()
            }],
            KeyPair::Bls12381G1G2(_) => {}
            KeyPair::Secp256k1(_) => {}
        }
        // JsonWebKey {
        //     key_id: format!("#{}", key.fingerprint()),
        //     x: match key {
        //         DIDKey::Ed25519(_) => base64::encode(&key.public_key()),
        //         DIDKey::X25519(_) => base64::encode(&key.public_key()),
        //         DIDKey::P256(_) => base64::encode(&key.public_key()[..key.public_key().len() / 2]), //only need half of key?
        //         DIDKey::Bls12381G1G2(_) => base64::encode(&key.public_key()),
        //         DIDKey::Secp256k1(_) => base64::encode(&key.public_key()[..key.public_key().len() / 2]), // need half
        //     },
        //     y: match key {                                                 // blank
        //         DIDKey::P256(_) => base64::encode(&key.public_key()[key.public_key().len() / 2..]),      // need other half of key
        //         DIDKey::Secp256k1(_) => base64::encode(&key.public_key()[key.public_key().len() / 2..]), // other half of key
        //         _ => String::default()
        //     },
        //     d: base64::encode(key.secret_key().map_or(vec![], |x| x)), // need base64
        //     crv: match key {
        //         DIDKey::Ed25519(_) => Crv::Ed25519,
        //         DIDKey::X25519(_) => Crv::X25519,
        //         DIDKey::P256(_) => Crv::P256,
        //         DIDKey::Bls12381G1G2(_) => Crv::Bls12381G2,
        //         DIDKey::Secp256k1(_) => Crv::Secp256k1,
        //     } as i32,
        //     kty: match key {
        //         DIDKey::Ed25519(_) => KeyType::Okp,
        //         DIDKey::X25519(_) => KeyType::Okp,
        //         DIDKey::P256(_) => KeyType::Ec,
        //         DIDKey::Bls12381G1G2(_) => KeyType::Ec,
        //         DIDKey::Secp256k1(_) => KeyType::Ec,
        //     } as i32,
        // }
    }
}

impl From<JsonWebKey> for KeyPair {
    fn from(key: JsonWebKey) -> Self {
        let key_type: Crv = Crv::from_i32(key.crv).expect("invalid code");

        let private_key = base64::decode(key.d).unwrap();
        let mut public_key = base64::decode(key.x).unwrap();
        public_key.append(&mut base64::decode(key.y).unwrap());

        match private_key.is_empty() {
            true => DIDKey::from_public_key(key_type, public_key.as_slice()),
            false => DIDKey::new_from_seed(key_type, private_key.as_slice()),
        }
    }
}

// impl From<Crv> for DIDKeyType {
//     fn from(key_type: Crv) -> Self {
//         match key_type {
//             Crv::Ed25519 => DIDKeyType::Ed25519,
//             Crv::X25519 => DIDKeyType::X25519,
//             Crv::P256 => DIDKeyType::P256,
//             Crv::Bls12381G2 => DIDKeyType::Bls12381G1G2,
//             Crv::Secp256k1 => DIDKeyType::Secp256k1,
//         }
//     }
// }

impl crate::DIDKey {
    pub fn generate<'a>(request: &GenerateKeyRequest) -> Result<GenerateKeyResponse, Error<'a>> {
        let key_type: Crv = unwrap_or_return!(Crv::from_i32(request.key_type), Error::InvalidField("key_type"));

        let did_key: Box<impl did_key::DIDKey> = match key_type {
            Crv::Ed25519 => Box::from(generate_with_seed::<Ed25519KeyPair>(request.seed.as_slice())),
            Crv::X25519 => Box::from(generate::<X25519KeyPair>()),
            Crv::P256 => generate_with_seed::<P256KeyPair>(request.seed.as_slice()),
            Crv::Bls12381G2 => generate_with_seed::<Bls12381KeyPair>(request.seed.as_slice()),
            Crv::Secp256k1 => generate_with_seed::<Secp256k1KeyPair>(request.seed.as_slice()),
        };
        let jwk_keys: Vec<JsonWebKey> = did_key.to_jwk_vec();
        let did_doc_ser = serde_json::to_string(&did_key.to_did_document()).unwrap();
        let did_doc_proto = serde_json::from_str(did_doc_ser.as_str()).unwrap();

        Ok(GenerateKeyResponse {
            key: jwk_keys.clone(),
            did_document: Some(did_doc_proto),
        })
    }
}
