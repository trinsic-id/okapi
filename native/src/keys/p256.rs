use std::convert::TryFrom;

use super::{generate_seed, EcdsaSigner};
use crate::didcomm::{Key, KeyType};
use p256::{
    ecdsa::{signature::Signer, signature::Verifier, Signature, SigningKey, VerifyKey},
    EncodedPoint,
};
use url::Url;

pub struct P256Key {
    signing_key: Option<SigningKey>,
    verify_key: VerifyKey,
}

impl std::fmt::Debug for P256Key {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_fmt(format_args!("{:?}", self.verify_key))
    }
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
        let pk: Vec<u8> = match public_key.len() == 65 {
            true => public_key.to_vec(),
            false => {
                let mut pkk = public_key.to_vec();
                pkk.insert(0, 0x04);
                pkk
            }
        };
        P256Key {
            signing_key: None, //.to_encoded_point(false),
            verify_key: VerifyKey::from_encoded_point(&EncodedPoint::from_bytes(pk.as_slice()).expect("invalid key")).expect("invalid point"),
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

impl TryFrom<String> for P256Key {
    type Error = String;

    fn try_from(did_uri: String) -> Result<Self, Self::Error> {
        // let re = Regex::new(r"did:key:[\w]*#[\w]*\??[\w]*").unwrap();

        let url = Url::parse(did_uri.as_ref()).unwrap();

        let fingerprint = base58_decode!(url.fragment().unwrap().strip_prefix("z").unwrap());
        let fingerprint_data = fingerprint.as_slice();

        let codec = &fingerprint_data[..3];
        if codec != &[0x12, 0x0, 0x1] {
            return Err("invalid multicodec bytes".to_string());
        }
        Ok(P256Key::from_public_key(&fingerprint_data[3..]))
    }
}

impl EcdsaSigner for P256Key {
    type Err = String;

    fn sign(&self, payload: &[u8]) -> Vec<u8> {
        let signature = match &self.signing_key {
            Some(sig) => sig.sign(payload),
            None => panic!("secret key not found"),
        };
        signature.as_ref().to_vec()
    }

    fn verify(&self, payload: &[u8], signature: &[u8]) -> Result<(), Self::Err> {
        match self.verify_key.verify(payload, &Signature::try_from(signature).unwrap()).is_ok() {
            true => Ok(()),
            false => Err("invalid signature".to_string()),
        }
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
