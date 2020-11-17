use crate::{api::pack::*, didcomm::*};
use did_key::{x25519::X25519Key, DIDKey};
use fluid::prelude::*;
use prost::Message;
use std::str::from_utf8;

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
        plaintext: MESSAGE.as_bytes().to_vec(),
        mode: EncryptionMode::Direct as i32,
        algorithm: EncryptionAlgorithm::Xchacha20poly1305 as i32
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

#[test]
fn test_x25519_exchange() {
    let alice = DIDKey::X25519(X25519Key::from_seed(vec![].as_slice()));
    let bob = DIDKey::X25519(X25519Key::from_seed(vec![].as_slice()));

    let ex1 = alice.key_exchange(&bob);
    let ex2 = bob.key_exchange(&alice);

    assert_eq!(ex1, ex2);
}

// #[test]
// fn test_ecdh_key_exchange() {
//     let alice: Key = DIDKey::X25519(X25519Key::from_seed(vec![].as_slice())).into();
//     let bob: Key = DIDKey::X25519(X25519Key::from_seed(vec![].as_slice())).into();

//     let ex1 = ecdh_key_exchange(&alice, &bob);
//     let ex2 = ecdh_key_exchange(&bob, &alice);

//     assert_eq!(ex1, ex2);
// }
fn key_from(pk: &str, sk: &str) -> crate::didcomm::Key {
    crate::didcomm::Key {
        key_id: String::new(),
        public_key: base58_decode!(pk),
        secret_key: base58_decode!(sk),
        key_type: KeyType::X25519.into(),
        fingerprint: String::new(),
    }
}
