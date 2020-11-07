use crate::{didcomm::*, sign::*};
use fluid::prelude::*;
use prost::Message;

#[theory]
#[case("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ", "message")]
#[case("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo", "message")]
#[case("6wB1rMc9dUuPeZzX2wyAG4DcuDL9VSiTfy47jTjzcBzr", "message")]
fn test_sign_payload(secret_key: &str, payload: &str) {
    let request = byte_buffer!(SignRequest {
        payload: payload.as_bytes().to_vec(),
        key: Some(Key {
            key_id: "did:example:123".to_string(),
            public_key: vec!(),
            secret_key: base58_decode!(secret_key),
            key_type: KeyType::Ed25519.into(),
            fingerprint: String::new()
        })
    });
    let mut response = byte_buffer!();
    let mut err = err!();

    let code = didcomm_sign(request, &mut response, &mut err);

    let res = request_to_message!(SignResponse, response);
    let key = res.message.expect("message was empty");

    assert_eq!(0, code);
    assert!(0 < key.signatures.len());
}

#[theory]
#[case(
    "6Lx39RyWn3syuozAe2WiPdAYn1ctMx17t8yrBMGFBmZy",
    "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx",
    "message"
)]
#[case(
    "352bT2PhPyDS5pzHSfCN1Hcp8E67anpyNwLuWp3ga6VD",
    "9j1mZuDTFSsrP8xwS4iyJwi22GZEsGFe2nutDB25R4jY",
    "message"
)]
#[case(
    "Aw5dELfJvRbc2BwXKEogdpFfNGsZ7gx2Bi6PahGfzboe",
    "2E9xcBvRVRGAgnySqpNzW6JoYjnjtt2BtqDSPEdsWNjk",
    "message"
)]
fn test_sign_verify(secret_key: &str, public_key: &str, payload: &str) {
    let request = byte_buffer!(SignRequest {
        payload: payload.as_bytes().to_vec(),
        key: Some(Key {
            key_id: "did:example:123".to_string(),
            public_key: vec!(),
            secret_key: base58_decode!(secret_key),
            key_type: KeyType::Ed25519.into(),
            fingerprint: String::new()
        })
    });
    let mut response = byte_buffer!();
    let mut err = err!();

    let code = didcomm_sign(request, &mut response, &mut err);

    let res = request_to_message!(SignResponse, response);
    let signed_message = res.message.expect("message was empty");

    let verify_request = byte_buffer!(VerifyRequest {
        key: Some(Key {
            key_id: "did:example:123".to_string(),
            public_key: base58_decode!(public_key),
            secret_key: vec!(),
            key_type: KeyType::Ed25519.into(),
            fingerprint: String::new()
        }),
        message: Some(signed_message.clone())
    });

    let mut verify_response = byte_buffer!();
    let mut verify_err = err!();

    let verify_code = didcomm_verify(verify_request, &mut verify_response, &mut verify_err);
    let verify_res = request_to_message!(VerifyResponse, verify_response);

    assert_eq!(0, code);
    assert_eq!(0, verify_code);
    assert!(verify_res.is_valid);
}
