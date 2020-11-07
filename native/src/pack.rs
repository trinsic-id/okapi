#![cfg(not(target_arch = "wasm32"))]

use crate::didcomm::*;
use chacha20poly1305::aead::{AeadInPlace, NewAead};
use chacha20poly1305::{Key, XChaCha20Poly1305, XNonce}; // Or `XChaCha20Poly1305`
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;
use x25519_dalek::*;

trait CryptoSuite {
    type Err;

    fn encrypt(&self, nonce: &[u8], associated_data: &[u8], plaintext: &[u8]) -> Result<EncryptResult, Self::Err>;

    fn decrypt(
        &self,
        nonce: &[u8],
        associated_data: &[u8],
        ciphertext: &[u8],
        tag: &[u8],
    ) -> Result<Vec<u8>, Self::Err>;
}

struct XChaCha {
    aead: XChaCha20Poly1305,
}

impl From<&[u8; 32]> for XChaCha {
    fn from(key: &[u8; 32]) -> Self {
        XChaCha {
            aead: XChaCha20Poly1305::new(Key::from_slice(key)),
        }
    }
}

#[allow(dead_code)]
struct AesGcm;

struct EncryptResult {
    ciphertext: Vec<u8>,
    tag: Vec<u8>,
}

impl CryptoSuite for XChaCha {
    type Err = String;

    fn encrypt(&self, nonce: &[u8], associated_data: &[u8], plaintext: &[u8]) -> Result<EncryptResult, Self::Err> {
        let mut payload = plaintext.to_vec();
        let iv = XNonce::from_slice(&nonce);

        match self.aead.encrypt_in_place_detached(iv, associated_data, &mut payload) {
            Ok(tag) => Ok(EncryptResult {
                ciphertext: payload.to_vec(),
                tag: tag.to_vec(),
            }),
            Err(_) => Err("encryption failed".to_string()),
        }
    }

    fn decrypt(
        &self,
        nonce: &[u8],
        associated_data: &[u8],
        ciphertext: &[u8],
        tag: &[u8],
    ) -> Result<Vec<u8>, Self::Err> {
        let mut payload = ciphertext.to_vec();
        let iv = XNonce::from_slice(nonce);

        match self
            .aead
            .decrypt_in_place_detached(iv, associated_data, &mut payload, tag.into())
        {
            Ok(_) => Ok(payload.to_vec()),
            Err(_) => Err("decryption failure".to_string()),
        }
    }
}

#[no_mangle]
pub extern "C" fn didcomm_pack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(PackRequest, request, err);
    let alg = unwrap_opt!(EncryptionAlgorithm::from_i32(req.mode), err, "invalid code");
    let aad = req.associated_data.clone();

    let receiver_key = unwrap_opt!(req.receiver_key, err, "receiver key not found");
    let sender_key = unwrap_opt!(req.sender_key, err, "sender key not found");

    let cek = key_exchange(&receiver_key.public_key, &sender_key.secret_key).to_bytes();
    let mut nonce = [0u8; 24];
    getrandom::getrandom(&mut nonce).expect("cannot generate random seed");

    let result = unwrap!(
        match alg {
            EncryptionAlgorithm::Xchacha20poly1305 =>
                XChaCha::from(&cek.to_owned()).encrypt(&nonce, &aad, &req.plaintext),
            _ => todo!(),
        },
        err,
        "encryption failed"
    );

    *response = byte_buffer!(PackResponse {
        message: Some(EncryptedMessage {
            ciphertext: result.ciphertext.clone(),
            iv: nonce.to_vec(),
            aad: aad.clone(),
            tag: result.tag.clone(),
            recipients: vec![EncryptionRecipient {
                header: Some(EncryptionHeader {
                    mode: EncryptionMode::Direct.into(),
                    algorithm: EncryptionAlgorithm::Xchacha20poly1305.into(),
                    key_id: receiver_key.key_id.clone(),
                    sender_key_id: sender_key.key_id.clone()
                }),
                content_encryption_key: vec!()
            }]
        })
    });
    *err = ExternError::success();
    0
}

#[no_mangle]
pub extern "C" fn didcomm_unpack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(UnpackRequest, request, err);
    let message = unwrap_opt!(req.message, err, "message not found");
    let recipient = unwrap_opt!(message.recipients.first(), err, "recipient not found");
    let header = unwrap_opt!(&recipient.header, err, "header not found");

    let cek = match unwrap_opt!(
        EncryptionMode::from_i32(header.mode),
        err,
        "unexpected encryption mode code"
    ) {
        EncryptionMode::Direct => key_exchange(
            &req.sender_key.unwrap().public_key,
            &req.receiver_key.unwrap().secret_key,
        )
        .to_bytes(),
        _ => {
            *err = err!("unsupported encryption mode");
            return 1;
        }
    };

    // Generate random content encryption key
    let mut payload = message.ciphertext.clone();

    let key = Key::from_slice(&cek);
    let aead = XChaCha20Poly1305::new(key);
    let iv = XNonce::from_slice(message.iv.as_slice());

    aead.decrypt_in_place_detached(iv, &message.aad.as_slice(), &mut payload, message.tag.as_slice().into())
        .expect("encryption failure!");

    *response = byte_buffer!(UnpackResponse {
        plaintext: payload.to_vec()
    });
    *err = ExternError::success();
    0
}

fn key_exchange(pk: &Vec<u8>, sk: &Vec<u8>) -> SharedSecret {
    let mut secret_key = [0u8; 32];
    secret_key.copy_from_slice(sk);
    let mut public_key = [0u8; 32];
    public_key.copy_from_slice(pk);

    let secret = StaticSecret::from(secret_key);
    let public = PublicKey::from(public_key);

    secret.diffie_hellman(&public)
}
