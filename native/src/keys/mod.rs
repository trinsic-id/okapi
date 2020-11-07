use crate::didcomm::Key;
use curve25519_dalek::edwards::CompressedEdwardsY;
use sha2::{Digest, Sha512};
use std::convert::TryInto;

pub trait Signer {
    type Err;

    fn sign(&self, payload: &[u8]) -> Vec<u8>;
    fn verify(&self, payload: &[u8], signature: &[u8]) -> Result<(), Self::Err>;
    fn get_fingerprint(&self) -> String;

    fn get_public_key(&self) -> Vec<u8>;

    fn as_key(&self) -> Key;
}

pub fn generate_seed(initial_seed: &[u8]) -> Result<[u8; 32], &str> {
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

/// Convert ed25519 public key to x25519 public key
pub fn ed25519_public_to_x25519_public(ed_public_key: &[u8]) -> Vec<u8> {
    let var_name: [u8; 32] = ed_public_key.try_into().expect("invalid slice");
    let compressed = CompressedEdwardsY(var_name).decompress().unwrap();
    let montgomery = compressed.to_montgomery();

    montgomery.as_bytes().to_vec()
}

/// Convert ed25519 secret key to x25519 key pair
pub fn ed25519_secret_to_x25519_keypair(ed_secret_key: &[u8]) -> (Vec<u8>, Vec<u8>) {
    let hash = Sha512::digest(&ed_secret_key[..32]);
    let mut output = [0u8; 32];
    output.copy_from_slice(&hash[..32]);
    output[0] &= 248;
    output[31] &= 127;
    output[31] |= 64;

    let sk = x25519_dalek::StaticSecret::from(output);
    let pk: x25519_dalek::PublicKey = (&sk).into();

    ((&sk).to_bytes().to_vec(), (&pk).to_bytes().to_vec())
}

pub mod ed25519;
pub mod p256;
pub mod x25519;
