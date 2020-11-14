use crate::didcomm::{Key, KeyType};
use curve25519_dalek::edwards::CompressedEdwardsY;
use sha2::{Digest, Sha512};
use std::convert::TryInto;

use self::{ed25519::Ed25519Key, x25519::X25519Key};

pub trait EcdsaSigner {
    type Err;

    fn sign(&self, payload: &[u8]) -> Vec<u8>;
    fn verify(&self, payload: &[u8], signature: &[u8]) -> Result<(), Self::Err>;
    fn get_fingerprint(&self) -> String;

    fn get_public_key(&self) -> Vec<u8>;

    fn as_key(&self) -> Key;
}

pub trait EcdhExchange {
    fn key_exchange(&self, their_public: &Self) -> Vec<u8>;
}

pub(crate) fn generate_seed(initial_seed: &[u8]) -> Result<[u8; 32], &str> {
    let mut seed = [0u8; 32];
    if initial_seed.is_empty() || initial_seed.len() != 32 {
        getrandom::getrandom(&mut seed).expect("couldn't generate random seed");
    } else {
        seed = match initial_seed.try_into() {
            Ok(x) => x,
            Err(_) => return Err("invalid seed size"),
        };
    }
    Ok(seed)
}

impl From<Ed25519Key> for x25519::X25519Key {
    fn from(key: Ed25519Key) -> Self {
        match key.secret_key {
            Some(sk) => {
                let hash = Sha512::digest(&sk.as_ref()[..32]);
                let mut output = [0u8; 32];
                output.copy_from_slice(&hash[..32]);
                output[0] &= 248;
                output[31] &= 127;
                output[31] |= 64;

                x25519::X25519Key::from_seed(&output)
            }
            None => {
                let var_name: [u8; 32] = key.get_public_key().as_slice().try_into().unwrap();
                let compressed = CompressedEdwardsY(var_name).decompress().unwrap();
                let montgomery = compressed.to_montgomery();

                x25519::X25519Key::from_public_key(montgomery.as_bytes())
            }
        }
    }
}

pub fn ecdh_key_exchange(my_secret: &Key, their_public: &Key) -> Vec<u8> {
    match KeyType::from_i32(my_secret.key_type).unwrap() {
        KeyType::X25519 => {
            let my: X25519Key = X25519Key::from_seed(my_secret.secret_key.as_slice());
            let their: X25519Key = X25519Key::from_public_key(their_public.public_key.as_slice());

            my.key_exchange(&their)
        }
        KeyType::P256 => todo!(),
        _ => panic!("unsupported key type"),
    }
}

pub mod ed25519;
pub mod p256;
pub mod x25519;
