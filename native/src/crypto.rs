use crate::didcomm::*;
use chacha20poly1305::aead::{Aead, NewAead};
use chacha20poly1305::{Key, XChaCha20Poly1305, XNonce}; // Or `XChaCha20Poly1305`
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;
use rand::{rngs::OsRng, RngCore};

#[no_mangle]
pub extern "C" fn didcomm_encrypt(
    enc_key: ByteBuffer,
    nonce: ByteBuffer,
    message: ByteBuffer,
    ciphertext: &mut ByteBuffer,
    err: &mut ExternError,
) -> i32 {
    // key 32-bytes
    // nonce 24 bytes
    let key = Key::from_slice(enc_key.as_slice());
    let aead = XChaCha20Poly1305::new(key);

    let nonce = XNonce::from_slice(nonce.as_slice()); //b"extra long unique nonce!"); // 24-bytes; unique
    let payload = aead
        .encrypt(nonce, message.as_slice())
        .expect("encryption failure!");

    *ciphertext = ByteBuffer::from_vec(payload);
    *err = ExternError::success();

    0
}

#[no_mangle]
pub extern "C" fn didcomm_decrypt(
    enc_key: ByteBuffer,
    nonce: ByteBuffer,
    ciphertext: ByteBuffer,
    message: &mut ByteBuffer,
    err: &mut ExternError,
) -> i32 {
    // key 32-bytes
    // nonce 24 bytes
    let key = Key::from_slice(enc_key.as_slice());
    let aead = XChaCha20Poly1305::new(key);

    let xnonce = XNonce::from_slice(nonce.as_slice()); //b"extra long unique nonce!"); // 24-bytes; unique
    let payload = aead
        .decrypt(xnonce, ciphertext.as_slice())
        .expect("decryption failure!");

    *message = ByteBuffer::from_vec(payload);
    *err = ExternError::success();

    0
}

#[no_mangle]
pub extern "C" fn didcomm_pack(
    request: ByteBuffer,
    response: &mut ByteBuffer,
    err: &mut ExternError,
) -> i32 {
    let req = request_to_message!(PackRequest, request, err);

    // Generate random content encryption key
    let mut cek = [0u8; 32];
    OsRng.fill_bytes(&mut cek);
    let key = Key::from_slice(&cek);
    let aead = XChaCha20Poly1305::new(key);
    let nonce = XNonce::from_slice(req.nonce.as_slice()); //b"extra long unique nonce!"); // 24-bytes; unique
    let payload = aead
        .encrypt(nonce, req.plaintext.as_slice())
        .expect("encryption failure!");

    *response = byte_buffer!(PackResponse {
        message: Some(EncryptedMessage {
            ciphertext: payload.clone(),
            iv: req.nonce.clone(),
            unprotected: None,
            aad: String::new(),
            protected: vec![],
            tag: vec![],
            recipients: vec![EncryptionRecipient {
                header: None,
                encrypted_key: cek.to_vec() // TODO: encrypt with key exchange key
            }]
        })
    });
    *err = ExternError::success();
    0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_encrypt() {
        let key = ByteBuffer::from_vec(b"an example very very secret key.".to_vec());
        let nonce = ByteBuffer::from_vec(b"extra long unique nonce!".to_vec());
        let message = ByteBuffer::from_vec(b"plaintext message".to_vec());

        let mut ciphertext: ByteBuffer = byte_buffer!();
        let mut err: ExternError = ExternError::default();

        let result = didcomm_encrypt(key, nonce, message, &mut ciphertext, &mut err);

        assert!(ciphertext.as_slice().len() > 0);
        assert_eq!(0, result);
    }

    #[test]
    fn test_encrypt_decrypt() {
        let key = b"an example very very secret key.";
        let nonce = b"extra long unique nonce!";
        let message = b"plaintext message";

        let mut ciphertext: ByteBuffer = byte_buffer!();
        let mut err: ExternError = ExternError::default();
        let mut plaintext: ByteBuffer = byte_buffer!();

        let encrypted = didcomm_encrypt(
            ByteBuffer::from_vec(key.to_vec()),
            ByteBuffer::from_vec(nonce.to_vec()),
            ByteBuffer::from_vec(message.to_vec()),
            &mut ciphertext,
            &mut err,
        );

        let mut vec = Vec::new();
        vec.extend(ciphertext.as_slice().iter().copied());

        let decrypted = didcomm_decrypt(
            ByteBuffer::from_vec(key.to_vec()),
            ByteBuffer::from_vec(nonce.to_vec()),
            ByteBuffer::from(vec),
            &mut plaintext,
            &mut err,
        );

        assert_eq!(0, encrypted);
        assert_eq!(0, decrypted);
        assert!(ciphertext.as_slice().len() > 0);
        assert_eq!(
            "plaintext message",
            std::str::from_utf8(plaintext.as_slice()).unwrap()
        );
    }
}
