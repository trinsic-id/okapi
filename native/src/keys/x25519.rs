use super::{generate_seed, Signer};
use crate::didcomm::{Key, KeyType};
use std::convert::TryInto;
use x25519_dalek::*;

pub struct X25519Key {
    static_secret: Option<StaticSecret>,
    public_key: PublicKey,
}
impl X25519Key {
    pub fn from_seed(seed: &[u8]) -> Self {
        let secret_seed = generate_seed(&seed.to_vec()).expect("invalid seed");

        let sk = StaticSecret::from(secret_seed);
        let pk: PublicKey = (&sk).try_into().expect("invalid public key");

        X25519Key {
            public_key: pk,
            static_secret: Some(sk),
        }
    }

    pub fn from_public_key(public_key: &[u8]) -> Self {
        let mut pk: [u8; 32] = [0; 32];
        pk.clone_from_slice(public_key);

        X25519Key {
            public_key: PublicKey::from(pk),
            static_secret: None,
        }
    }
}

impl From<Key> for X25519Key {
    fn from(key: Key) -> Self {
        match key.secret_key.is_empty() {
            true => X25519Key::from_public_key(key.public_key.as_slice()),
            false => X25519Key::from_seed(vec![].as_slice()),
        }
    }
}

impl Signer for X25519Key {
    type Err = String;

    fn sign(&self, payload: &[u8]) -> Vec<u8> {
        todo!()
    }

    fn verify(&self, payload: &[u8], signature: &[u8]) -> Result<(), Self::Err> {
        todo!()
    }

    fn get_fingerprint(&self) -> String {
        let data = [&[0xec, 0x01], self.get_public_key().as_slice()].concat();
        format!("z{}", bs58::encode(data).into_string())
    }

    fn get_public_key(&self) -> Vec<u8> {
        self.public_key.to_bytes().to_vec()
    }

    fn as_key(&self) -> Key {
        Key {
            key_id: format!("#{}", self.get_fingerprint()),
            key_type: KeyType::X25519 as i32,
            public_key: self.get_public_key(),
            secret_key: (&self.static_secret).as_ref().map_or(vec![], |x| x.to_bytes().to_vec()),
            fingerprint: self.get_fingerprint(),
        }
    }
}
