use super::{generate_seed, EcdsaSigner};
use crate::didcomm::{Key, KeyType};
use ed25519_dalek::*;
use std::convert::{TryFrom, TryInto};
use url::Url;

#[derive(Debug)]
pub struct Ed25519Key {
    pub secret_key: Option<SecretKey>,
    pub public_key: PublicKey,
}

impl Ed25519Key {
    pub fn from_seed(seed: &[u8]) -> Self {
        let secret_seed = generate_seed(&seed.to_vec()).expect("invalid seed");

        let sk: SecretKey = SecretKey::from_bytes(&secret_seed).expect("cannot generate secret key");
        let pk: PublicKey = (&sk).try_into().expect("cannot generate public key");

        Ed25519Key {
            secret_key: Some(sk),
            public_key: pk,
        }
    }

    fn from_public_key(public_key: &[u8]) -> Self {
        Ed25519Key {
            public_key: PublicKey::from_bytes(public_key).expect("invalid byte data"),
            secret_key: None,
        }
    }
}

impl From<Key> for Ed25519Key {
    fn from(key: Key) -> Self {
        match key.secret_key.is_empty() {
            true => Ed25519Key::from_public_key(key.public_key.as_slice()),
            false => Ed25519Key::from_seed(vec![].as_slice()),
        }
    }
}

impl TryFrom<String> for Ed25519Key {
    type Error = String;

    fn try_from(did_uri: String) -> Result<Self, Self::Error> {
        // let re = Regex::new(r"did:key:[\w]*#[\w]*\??[\w]*").unwrap();

        let url = Url::parse(did_uri.as_ref()).unwrap();

        let fingerprint = base58_decode!(url.fragment().unwrap().strip_prefix("z").unwrap());
        let fingerprint_data = fingerprint.as_slice();

        let codec = &fingerprint_data[..2];
        if codec != &[0xed, 0x1] {
            return Err("invalid multicodec bytes".to_string());
        }
        let public_key = &fingerprint_data[2..];

        Ok(Ed25519Key::from_public_key(public_key))
    }
}

impl EcdsaSigner for Ed25519Key {
    type Err = String;

    fn sign(&self, payload: &[u8]) -> Vec<u8> {
        let esk: ExpandedSecretKey = match &self.secret_key {
            Some(x) => x,
            None => panic!("secret key not found"),
        }
        .into();

        esk.sign(payload, &self.public_key).to_bytes().to_vec()
    }

    fn verify(&self, payload: &[u8], signature: &[u8]) -> Result<(), Self::Err> {
        let sig = Signature::try_from(signature).expect("invalid signature data");
        match self.public_key.verify(payload, &sig) {
            Ok(_) => Ok(()),
            _ => Err(String::from("verify failed")),
        }
    }

    fn get_fingerprint(&self) -> String {
        let data = [&[0xec, 0x01], self.get_public_key().as_slice()].concat();
        format!("z{}", bs58::encode(data).into_string())
    }

    fn get_public_key(&self) -> Vec<u8> {
        self.public_key.as_bytes().to_vec()
    }

    fn as_key(&self) -> Key {
        Key {
            key_id: format!("#{}", self.get_fingerprint()),
            key_type: KeyType::Ed25519 as i32,
            public_key: self.get_public_key(),
            secret_key: (&self.secret_key).as_ref().map_or(vec![], |x| x.to_bytes().to_vec()),
            fingerprint: self.get_fingerprint(),
        }
    }
}
