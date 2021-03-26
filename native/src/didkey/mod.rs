use base64::URL_SAFE;
use did_key::*;

use crate::{didcomm::Error, proto::google_protobuf::Struct, *};

impl From<VerificationMethod> for JsonWebKey {
    fn from(vm: VerificationMethod) -> Self {
        if vm.private_key.is_some() {
            match vm.private_key.unwrap() {
                KeyFormat::Base58(_) | KeyFormat::Multibase(_) => todo!(),
                KeyFormat::JWK(jwk) => JsonWebKey {
                    x: jwk.x.map_or(String::default(), |x| x),
                    y: jwk.y.map_or(String::default(), |x| x),
                    d: jwk.d.map_or(String::default(), |x| x),
                    crv: jwk.curve,
                    kid: vm.id,
                    kty: jwk.key_type,
                },
            }
        } else {
            match vm.public_key.unwrap() {
                KeyFormat::Base58(_) | KeyFormat::Multibase(_) => todo!(),
                KeyFormat::JWK(jwk) => JsonWebKey {
                    x: jwk.x.map_or(String::default(), |x| x),
                    y: jwk.y.map_or(String::default(), |x| x),
                    d: jwk.d.map_or(String::default(), |x| x),
                    crv: jwk.curve,
                    kid: vm.id,
                    kty: jwk.key_type,
                },
            }
        }
    }
}

impl From<JsonWebKey> for KeyPair {
    fn from(key: JsonWebKey) -> Self {
        let private_key = if !key.d.is_empty() {
            Some(base64::decode_config(key.d, URL_SAFE).unwrap())
        } else {
            None
        };
        let mut public_key = base64::decode_config(key.x, URL_SAFE).unwrap();
        if !key.y.is_empty() {
            public_key.append(&mut base64::decode_config(key.y, URL_SAFE).unwrap());
        }

        match key.crv.to_lowercase().as_str() {
            "ed25519" => from_existing_key::<Ed25519KeyPair>(public_key.as_slice(), private_key.as_deref()),
            "x25519" => from_existing_key::<X25519KeyPair>(public_key.as_slice(), private_key.as_deref()),
            "p-256" => from_existing_key::<P256KeyPair>(public_key.as_slice(), private_key.as_deref()),
            "secp256k1" => from_existing_key::<Secp256k1KeyPair>(public_key.as_slice(), private_key.as_deref()),
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
        let did_document = did_key.get_did_document(CONFIG_LD_PRIVATE);
        let jwk_keys: Vec<JsonWebKey> = did_key
            .get_verification_methods(CONFIG_JOSE_PRIVATE, did_document.id.as_str())
            .iter()
            .map(|x| x.to_owned().into())
            .collect();

        Ok(GenerateKeyResponse {
            key: jwk_keys,
            did_document: Some(did_document.into()),
        })
    }

    pub fn resolve<'a>(did: &ResolveRequest) -> Result<ResolveResponse, Error<'a>> {
        let keypair: KeyPair = resolve(&did.did).unwrap();

        let did_document = keypair.get_did_document(CONFIG_LD_PUBLIC);
        let jwk_keys: Vec<JsonWebKey> = keypair
            .get_verification_methods(CONFIG_JOSE_PUBLIC, did_document.id.as_str())
            .iter()
            .map(|x| x.to_owned().into())
            .collect();

        Ok(ResolveResponse {
            did_document: Some(did_document.into()),
            keys: jwk_keys,
        })
    }
}

#[cfg(test)]
mod test {
    use did_key::*;

    use crate::{GenerateKeyRequest, JsonWebKey, KeyType};

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

    #[test]
    fn test_did_document() {
        let key = crate::DIDKey::generate(&GenerateKeyRequest {
            key_type: KeyType::Ed25519 as i32,
            ..Default::default()
        })
        .unwrap();

        let document = key.did_document;
        let methods = key.key;
    }
}
