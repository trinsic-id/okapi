use crate::*;
use base64::URL_SAFE_NO_PAD;
use did_key::*;
use std::str::from_utf8;

use fluid::prelude::*;

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
    let request = PackRequest {
        receiver_key: Some(key_from(bob_pk, bob_sk)),
        sender_key: Some(key_from(alice_pk, alice_sk)),
        associated_data: vec![],
        plaintext: MESSAGE.as_bytes().to_vec(),
        mode: EncryptionMode::Direct as i32,
        algorithm: EncryptionAlgorithm::Xchacha20poly1305 as i32,
    };

    let pack_response = DIDComm::pack(&request).unwrap();
    let encrypted_message = pack_response.message.unwrap();

    // Decrypt
    let unpack_request = UnpackRequest {
        receiver_key: Some(key_from(alice_pk, alice_sk)),
        sender_key: Some(key_from(bob_pk, bob_sk)),
        message: Some(encrypted_message.clone()),
    };
    let unpack_response = DIDComm::unpack(&unpack_request).unwrap();

    assert_eq!(MESSAGE, from_utf8(&unpack_response.plaintext).unwrap());
}

#[test]
fn encrypt_then_decrypt_1() {
    let alice_pk: &str = "kbNfYQnMuhunbnMGKzkoQgwYpTXUYu9KrLNUweqRjdd";
    let alice_sk: &str = "3CuA2V94oE76bPYwZyQMo8c2r3RRL7izhrU95JmBrpWC";
    let bob_pk: &str = "B3xzCuy2AxwM2EMSQw4yLRakn6QEuuNytiRidWpCoUcH";
    let bob_sk: &str = "6wB1rMc9dUuPeZzX2wyAG4DcuDL9VSiTfy47jTjzcBzr";

    const MESSAGE: &str = "super secret message";

    // Encrypt
    let request = PackRequest {
        receiver_key: Some(key_from(bob_pk, bob_sk)),
        sender_key: Some(key_from(alice_pk, alice_sk)),
        associated_data: vec![],
        plaintext: MESSAGE.as_bytes().to_vec(),
        mode: EncryptionMode::Direct as i32,
        algorithm: EncryptionAlgorithm::Xchacha20poly1305 as i32,
    };

    let pack_response = DIDComm::pack(&request).unwrap();
    let encrypted_message = pack_response.message.unwrap();

    // Decrypt
    let unpack_request = UnpackRequest {
        receiver_key: Some(key_from(alice_pk, alice_sk)),
        sender_key: Some(key_from(bob_pk, bob_sk)),
        message: Some(encrypted_message.clone()),
    };
    let unpack_response = DIDComm::unpack(&unpack_request).unwrap();

    assert_eq!(MESSAGE, from_utf8(&unpack_response.plaintext).unwrap());
}

#[test]
fn test_x25519_exchange() {
    let alice = X25519KeyPair::new_with_seed(vec![].as_slice());
    let bob = X25519KeyPair::new_with_seed(vec![].as_slice());

    let ex1 = alice.key_exchange(&bob);
    let ex2 = bob.key_exchange(&alice);

    assert_eq!(ex1, ex2);
}

fn key_from(pk: &str, sk: &str) -> JsonWebKey {
    JsonWebKey {
        crv: String::from("X25519"),
        d: base64::encode_config(bs58::decode(sk).into_vec().unwrap(), URL_SAFE_NO_PAD),
        x: base64::encode_config(bs58::decode(pk).into_vec().unwrap(), URL_SAFE_NO_PAD),
        y: String::from(""),
        kty: String::from("Okp"),
        ..Default::default()
    }
}
