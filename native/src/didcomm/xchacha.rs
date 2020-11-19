use super::{AeadSuite, EncryptResult};
use chacha20poly1305::aead::{AeadInPlace, NewAead};
use chacha20poly1305::{Key, XChaCha20Poly1305, XNonce}; // Or `XChaCha20Poly1305`

pub struct XChaCha {
    aead: XChaCha20Poly1305,
}

impl From<&[u8; 32]> for XChaCha {
    fn from(key: &[u8; 32]) -> Self {
        XChaCha {
            aead: XChaCha20Poly1305::new(Key::from_slice(key)),
        }
    }
}

impl From<&Vec<u8>> for XChaCha {
    fn from(key: &Vec<u8>) -> Self {
        XChaCha {
            aead: XChaCha20Poly1305::new(Key::from_slice(key.as_slice())),
        }
    }
}

impl AeadSuite for XChaCha {
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

    fn decrypt(&self, nonce: &[u8], associated_data: &[u8], ciphertext: &[u8], tag: &[u8]) -> Result<Vec<u8>, Self::Err> {
        let mut payload = ciphertext.to_vec();
        let iv = XNonce::from_slice(nonce);

        match self.aead.decrypt_in_place_detached(iv, associated_data, &mut payload, tag.into()) {
            Ok(_) => Ok(payload.to_vec()),
            Err(_) => Err("decryption failure".to_string()),
        }
    }
}
