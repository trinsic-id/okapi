use crate::didcomm::*;
use curve25519_dalek::edwards::CompressedEdwardsY;
use ed25519_dalek::{Digest, PublicKey, SecretKey, Sha512};
use ffi_support::{ByteBuffer, ExternError};
use p256::ecdsa::{SigningKey, VerifyKey};
use prost::Message;
use rand::{rngs::OsRng, RngCore};
use std::convert::TryInto;
use x25519_dalek as x25519;

#[no_mangle]
pub extern "C" fn didcomm_generate_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(GenerateKeyRequest, request, err);

    // if `seed` is empty, generate random one
    let seed = unwrap!(generate_seed(&req.seed), err, "error generating seed");
    let key_type = KeyType::from_i32(req.key_type).expect("invalid key type");

    let (public_key, secret_key) = match key_type {
        KeyType::X25519 => {
            let sk = x25519::StaticSecret::from(seed);
            let pk: x25519::PublicKey = unwrap!((&sk).try_into(), err);

            (pk.to_bytes().to_vec(), sk.to_bytes().to_vec())
        }
        KeyType::Ed25519 => {
            let sk: SecretKey = unwrap!(SecretKey::from_bytes(&seed), err);
            let pk: PublicKey = unwrap!((&sk).try_into(), err);

            (pk.as_bytes().to_vec(), sk.to_bytes().to_vec())
        }
        KeyType::P256 => {
            let sk = SigningKey::new(&seed).expect("Couldn't create key");
            let pk = VerifyKey::from(&sk);

            (pk.to_encoded_point(false).as_bytes().to_vec(), sk.to_bytes().to_vec())
        }
    };

    let fingerprint = get_fingerprint(&public_key, req.key_type);

    *response = byte_buffer!(GenerateKeyResponse {
        key: Some(Key {
            key_id: format!("#{}", fingerprint.clone()),
            key_type: key_type.into(),
            public_key: public_key.clone(),
            secret_key: secret_key.clone(),
            fingerprint: fingerprint.clone()
        })
    });
    *err = err!();
    0
}

fn generate_seed(initial_seed: &Vec<u8>) -> Result<[u8; 32], &str> {
    let mut seed = [0u8; 32];
    if initial_seed.is_empty() {
        OsRng.fill_bytes(&mut seed)
    } else {
        seed = match initial_seed.as_slice().try_into() {
            Ok(x) => x,
            Err(_) => return Err("invalid seed size"),
        };
    }
    Ok(seed)
}

fn get_fingerprint(key: &Vec<u8>, key_type: i32) -> String {
    let data = [
        match KeyType::from_i32(key_type).expect("invalid enum index") {
            KeyType::X25519 => &[0xec, 0x01],
            KeyType::P256 => &[0xec, 0x01],
            KeyType::Ed25519 => &[0xec, 0x01],
        },
        key.as_slice(),
    ]
    .concat();

    format!("z{}", bs58::encode(data).into_string())
}

#[no_mangle]
pub extern "C" fn didcomm_convert_key(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(ConvertKeyRequest, request, err);

    let key = req.key.expect("Key not found");

    let (sk, pk) = match (
        KeyType::from_i32(key.key_type).expect("invalid key type"),
        KeyType::from_i32(req.target_type).expect("invalid key type"),
    ) {
        (KeyType::Ed25519, KeyType::X25519) => match key.secret_key.is_empty() {
            true => (vec![], ed25519_public_to_x25519_public(&key.public_key)),
            false => ed25519_secret_to_x25519_keypair(&key.secret_key),
        },
        _ => {
            *err = err!(100, "unsupported conversion");
            return 1;
        }
    };

    *response = byte_buffer!(ConvertKeyResponse {
        key: Some(Key {
            key_id: String::default(),
            key_type: KeyType::X25519.into(),
            public_key: pk.clone(),
            secret_key: sk.clone(),
            fingerprint: get_fingerprint(&key.public_key, req.target_type)
        })
    });
    0
}

/// Convert ed25519 public key to x25519 public key
fn ed25519_public_to_x25519_public(ed_public_key: &Vec<u8>) -> Vec<u8> {
    let var_name: [u8; 32] = ed_public_key.as_slice().try_into().expect("invalid slice");
    let compressed = CompressedEdwardsY(var_name).decompress().unwrap();
    let montgomery = compressed.to_montgomery();

    montgomery.as_bytes().to_vec()
}

/// Convert ed25519 secret key to x25519 key pair
fn ed25519_secret_to_x25519_keypair(ed_secret_key: &Vec<u8>) -> (Vec<u8>, Vec<u8>) {
    let hash = Sha512::digest(&ed_secret_key.as_slice()[..32]);
    let mut output = [0u8; 32];
    output.copy_from_slice(&hash[..32]);
    output[0] &= 248;
    output[31] &= 127;
    output[31] |= 64;

    let sk = x25519::StaticSecret::from(output);
    let pk: x25519::PublicKey = (&sk).into();

    ((&sk).to_bytes().to_vec(), (&pk).to_bytes().to_vec())
}
