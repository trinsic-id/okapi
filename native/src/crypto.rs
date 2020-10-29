use crate::didcomm::*;
use chacha20poly1305::aead::{AeadInPlace, NewAead};
use chacha20poly1305::{Key, XChaCha20Poly1305, XNonce}; // Or `XChaCha20Poly1305`
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;
use rand::{rngs::OsRng, RngCore};
use x25519_dalek::*;

#[no_mangle]
pub extern "C" fn didcomm_pack(
    request: ByteBuffer,
    response: &mut ByteBuffer,
    err: &mut ExternError,
) -> i32 {
    let req = request_to_message!(PackRequest, request, err);
    let aad = req.associated_data.clone();

    // Generate random content encryption key
    let mut nonce = [0u8; 24];
    OsRng.fill_bytes(&mut nonce);

    let receiver_key = req.receiver_key.unwrap();
    let sender_key = req.sender_key.unwrap();

    let cek = key_exchange(
        &receiver_key.public_key,
        &sender_key.secret_key,
    ).to_bytes();

    let mut payload = req.plaintext.clone();

    let key = Key::from_slice(&cek);
    let aead = XChaCha20Poly1305::new(key);
    let nonce = XNonce::from_slice(&nonce); //b"extra long unique nonce!"); // 24-bytes; unique
    let tag = aead
        .encrypt_in_place_detached(nonce, aad.as_slice(), &mut payload)
        .expect("encryption failure!");

    *response = byte_buffer!(PackResponse {
        message: Some(EncryptedMessage {
            ciphertext: payload.clone(),
            iv: nonce.as_slice().to_vec(),
            aad: aad.clone(),
            tag: tag.as_slice().to_vec(),
            recipients: vec![EncryptionRecipient {
                header: Some(EncryptionHeader {
                    algorithm: String::new(),
                    key_id: receiver_key.key_id.clone(),
                    sender_key_id: sender_key.key_id.clone()
                }),
                encrypted_key: cek.to_vec() // TODO: encrypt with key exchange key
            }]
        })
    });
    *err = ExternError::success();
    0
}

#[no_mangle]
pub extern "C" fn didcomm_unpack(
    request: ByteBuffer,
    response: &mut ByteBuffer,
    err: &mut ExternError,
) -> i32 {
    let req = request_to_message!(UnpackRequest, request, err);
    let message = req.message.unwrap();
    let recipient = message.recipients.first().unwrap();

    let cek = key_exchange(
        &req.sender_key.unwrap().public_key,
        &req.receiver_key.unwrap().secret_key,
    ).to_bytes();

    // Generate random content encryption key
    let mut payload = message.ciphertext.clone();

    let key = Key::from_slice(&cek);
    let aead = XChaCha20Poly1305::new(key);
    let iv = XNonce::from_slice(message.iv.as_slice());

    aead.decrypt_in_place_detached(
        iv,
        &message.aad.as_slice(),
        &mut payload,
        message.tag.as_slice().into(),
    )
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
    let shared_secret = secret.diffie_hellman(&public);

    shared_secret
}

#[cfg(test)]
mod tests {
    use super::*;
    use fluid::prelude::*;
    use std::str::from_utf8;

    fn key_from(pk: &str, sk: &str) -> crate::didcomm::Key {
        crate::didcomm::Key {
            key_id: String::new(),
            public_key: base58_decode!(pk),
            secret_key: base58_decode!(sk),
            key_type: KeyType::X25519 as i32,
            fingerprint: String::new(),
        }
    }

    #[theory]
    #[case(
        "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ",
        "BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ",
        "9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm",
        "G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo"
    )]
    #[case(
        "9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm",
        "G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo",
        "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ",
        "BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ"
    )]
    #[case(
        "kbNfYQnMuhunbnMGKzkoQgwYpTXUYu9KrLNUweqRjdd",
        "3CuA2V94oE76bPYwZyQMo8c2r3RRL7izhrU95JmBrpWC",
        "B3xzCuy2AxwM2EMSQw4yLRakn6QEuuNytiRidWpCoUcH",
        "6wB1rMc9dUuPeZzX2wyAG4DcuDL9VSiTfy47jTjzcBzr"
    )]
    fn encrypt_then_decrypt(alice_pk: &str, alice_sk: &str, bob_pk: &str, bob_sk: &str) {
        const MESSAGE: &str = "super secret message";

        // Encrypt
        let request = byte_buffer!(PackRequest {
            receiver_key: Some(key_from(bob_pk, bob_sk)),
            sender_key: Some(key_from(alice_pk, alice_sk)),
            associated_data: vec![],
            plaintext: MESSAGE.as_bytes().to_vec()
        });
        let mut response = byte_buffer!();
        let mut err = err!();

        let encrypt_result = didcomm_pack(request, &mut response, &mut err);
        let pack_response = request_to_message!(PackResponse, response);
        let encrypted_message = pack_response.message.unwrap();

        // Decrypt
        let unpack_request = byte_buffer!(UnpackRequest {
            receiver_key: Some(key_from(alice_pk, alice_sk)),
            sender_key: Some(key_from(bob_pk, bob_sk)),
            message: Some(encrypted_message.clone())
        });
        let decrypt_result = didcomm_unpack(unpack_request, &mut response, &mut err);
        let unpack_response = request_to_message!(UnpackResponse, response);

        assert_eq!(0, encrypt_result);
        assert_eq!(0, decrypt_result);
        assert_eq!(MESSAGE, from_utf8(&unpack_response.plaintext).unwrap());
    }
}
