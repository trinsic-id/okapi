use super::{generate_seed, Signer};
use crate::didcomm::{Key, KeyType};
use p256::{
    ecdsa::{SigningKey, VerifyKey},
    EncodedPoint,
};

pub struct P256Key {
    signing_key: Option<SigningKey>,
    verify_key: VerifyKey,
}

impl P256Key {
    pub fn from_seed(seed: &[u8]) -> Self {
        let secret_seed = generate_seed(&seed.to_vec()).expect("invalid seed");

        let sk = SigningKey::new(&secret_seed).expect("Couldn't create key");
        let pk = VerifyKey::from(&sk);

        P256Key {
            verify_key: pk, //.to_encoded_point(false),
            signing_key: Some(sk),
        }
    }

    pub fn from_public_key(public_key: &[u8]) -> Self {
        P256Key {
            verify_key: VerifyKey::from_encoded_point(&EncodedPoint::from_bytes(public_key).expect("invalid key"))
                .expect("invalid point"), //.to_encoded_point(false),
            signing_key: None,
        }
    }
}

impl From<Key> for P256Key {
    fn from(key: Key) -> Self {
        match key.secret_key.is_empty() {
            true => P256Key::from_public_key(key.public_key.as_slice()),
            false => P256Key::from_seed(vec![].as_slice()),
        }
    }
}

impl Signer for P256Key {
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
        self.verify_key.to_encoded_point(false).as_bytes().to_vec()
    }

    fn as_key(&self) -> Key {
        Key {
            key_id: format!("#{}", self.get_fingerprint()),
            key_type: KeyType::P256 as i32,
            public_key: self.get_public_key(),
            secret_key: (&self.signing_key).as_ref().map_or(vec![], |x| x.to_bytes().to_vec()),
            fingerprint: self.get_fingerprint(),
        }
    }
}
