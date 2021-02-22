use did_key::*;
use std::{convert::TryInto, todo};

use crate::{didcomm::Error, proto::google_protobuf::Struct, *};

impl From<VerificationMethod> for JsonWebKey {
    fn from(vm: VerificationMethod) -> Self {
        if vm.private_key.is_some() {
            return match vm.private_key.unwrap() {
                KeyFormat::Base58(_) | KeyFormat::Multibase(_) => todo!(),
                KeyFormat::JWK(jwk) => JsonWebKey {
                    x: jwk.x.map_or(String::default(), |x| x),
                    y: jwk.y.map_or(String::default(), |x| x),
                    d: jwk.d.map_or(String::default(), |x| x),
                    key_id: vm.id,
                    ..Default::default()
                },
            }
        } else {
            return match vm.public_key.unwrap() {
                KeyFormat::Base58(_) | KeyFormat::Multibase(_) => todo!(),
                KeyFormat::JWK(jwk) => JsonWebKey {
                    x: jwk.x.map_or(String::default(), |x| x),
                    y: jwk.y.map_or(String::default(), |x| x),
                    d: jwk.d.map_or(String::default(), |x| x),
                    key_id: vm.id,
                    ..Default::default()
                },
            }
        }
    }
}

impl From<JsonWebKey> for KeyPair {
    fn from(key: JsonWebKey) -> Self {
        let key_type: Crv = Crv::from_i32(key.crv).expect("invalid code");

        let private_key = base64::decode(key.d).unwrap();
        let mut public_key = base64::decode(key.x).unwrap();
        public_key.append(&mut base64::decode(key.y).unwrap());

        match private_key.is_empty() {
            true => match key_type {
                Crv::Ed25519 => from_public_key::<Ed25519KeyPair>(public_key.as_slice()),
                Crv::X25519 => from_public_key::<X25519KeyPair>(public_key.as_slice()),
                Crv::P256 => from_public_key::<P256KeyPair>(public_key.as_slice()),
                Crv::Bls12381G2 => from_public_key::<Bls12381KeyPair>(public_key.as_slice()),
                Crv::Secp256k1 => from_public_key::<Secp256k1KeyPair>(public_key.as_slice()),
            },
            false => match key_type {
                Crv::Ed25519 => from_private_key::<Ed25519KeyPair>(private_key.as_slice()),
                Crv::X25519 => from_private_key::<X25519KeyPair>(private_key.as_slice()),
                Crv::P256 => from_private_key::<P256KeyPair>(private_key.as_slice()),
                Crv::Bls12381G2 => from_private_key::<Bls12381KeyPair>(private_key.as_slice()),
                Crv::Secp256k1 => from_private_key::<Secp256k1KeyPair>(private_key.as_slice()),
            },
        }
    }
}

impl From<Document> for Struct {
    fn from(document: Document) -> Self {
        let did_doc_ser = serde_json::to_string(&document).unwrap();
        serde_json::from_str(did_doc_ser.as_str()).unwrap()
    }
}

impl crate::DIDKey {
    pub fn generate<'a>(request: &GenerateKeyRequest) -> Result<GenerateKeyResponse, Error<'a>> {
        let key_type: Crv = unwrap_or_return!(Crv::from_i32(request.key_type), Error::InvalidField("key_type"));

        let did_key = match key_type {
            Crv::Ed25519 => generate_with_seed::<Ed25519KeyPair>(request.seed.as_slice()),
            Crv::X25519 => generate_with_seed::<X25519KeyPair>(request.seed.as_slice()),
            Crv::P256 => generate_with_seed::<P256KeyPair>(request.seed.as_slice()),
            Crv::Bls12381G2 => generate_with_seed::<Bls12381KeyPair>(request.seed.as_slice()),
            Crv::Secp256k1 => generate_with_seed::<Secp256k1KeyPair>(request.seed.as_slice()),
        };
        let did_document = did_key.get_did_document(CONFIG_JOSE_PRIVATE);
        let jwk_keys: Vec<JsonWebKey> = did_document.verification_method.iter().map(|x| x.to_owned().into()).collect();

        Ok(GenerateKeyResponse {
            key: jwk_keys.clone(),
            did_document: Some(did_document.into()),
        })
    }
}

#[cfg(test)]
mod test {
    use did_key::*;

    use crate::JsonWebKey;

    #[test]
    fn verification_method_to_jwk() {
        let vm = VerificationMethod {
            public_key: Some(KeyFormat::JWK(JWK {
                x: Some("123".to_string()),
                y: Some("456".to_string()),
                ..Default::default()
            })),
            private_key: Some(KeyFormat::JWK(JWK {
                x: Some("123".to_string()),
                y: Some("456".to_string()),
                d: Some("789".to_string()),
                ..Default::default()
            })),
            ..Default::default()
        };

        let jwk: JsonWebKey = vm.into();

        assert_eq!(jwk.x, "123");
    }
}
