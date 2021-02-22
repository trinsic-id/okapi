use did_key::*;

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
                    kid: vm.id,
                    ..Default::default()
                },
            };
        } else {
            return match vm.public_key.unwrap() {
                KeyFormat::Base58(_) | KeyFormat::Multibase(_) => todo!(),
                KeyFormat::JWK(jwk) => JsonWebKey {
                    x: jwk.x.map_or(String::default(), |x| x),
                    y: jwk.y.map_or(String::default(), |x| x),
                    d: jwk.d.map_or(String::default(), |x| x),
                    kid: vm.id,
                    ..Default::default()
                },
            };
        }
    }
}

impl From<JsonWebKey> for KeyPair {
    fn from(key: JsonWebKey) -> Self {
        let private_key = if !key.d.is_empty() { Some(base64::decode(key.d).unwrap()) } else { None };
        let mut public_key = base64::decode(key.x).unwrap();
        if !key.y.is_empty() {
            public_key.append(&mut base64::decode(key.y).unwrap());
        }

        match key.crv.to_lowercase().as_str() {
            "ed25519" => from_existing_key::<Ed25519KeyPair>(public_key.as_slice(), private_key.as_ref().map(|x| x.as_slice())),
            "x25519" => from_existing_key::<X25519KeyPair>(public_key.as_slice(), private_key.as_ref().map(|x| x.as_slice())),
            "p-256" => from_existing_key::<P256KeyPair>(public_key.as_slice(), private_key.as_ref().map(|x| x.as_slice())),
            "secp256k1" => from_existing_key::<Secp256k1KeyPair>(public_key.as_slice(), private_key.as_ref().map(|x| x.as_slice())),
            _ => unimplemented!("unsupported key type"),
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
        let key_type = unwrap_or_return!(KeyType::from_i32(request.key_type), Error::InvalidField("key_type"));

        let did_key = match key_type {
            KeyType::Ed25519 => generate::<Ed25519KeyPair>(Some(request.seed.as_slice())),
            KeyType::X25519 => generate::<X25519KeyPair>(Some(request.seed.as_slice())),
            KeyType::P256 => generate::<P256KeyPair>(Some(request.seed.as_slice())),
            KeyType::Bls12381G1g2 => generate::<Bls12381KeyPair>(Some(request.seed.as_slice())),
            KeyType::Secp256k1 => generate::<Secp256k1KeyPair>(Some(request.seed.as_slice())),
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
