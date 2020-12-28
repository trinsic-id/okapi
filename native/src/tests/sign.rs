use crate::*;
use fluid::prelude::*;

#[theory]
#[case("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ", "message")]
#[case("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo", "message")]
#[case("6wB1rMc9dUuPeZzX2wyAG4DcuDL9VSiTfy47jTjzcBzr", "message")]
fn test_sign_payload(secret_key: &str, payload: &str) {
    let request = SignRequest {
        payload: payload.as_bytes().to_vec(),
        key: Some(Key {
            key_id: "did:example:123".to_string(),
            public_key: vec![],
            secret_key: base58_decode!(secret_key),
            key_type: KeyType::Ed25519.into(),
            fingerprint: String::new(),
        }),
        append_to: None,
    };

    let response = DIDComm::sign(&request).expect("singing failed");
    let message = response.message.expect("message was empty");

    assert!(0 < message.signatures.len());
}

#[theory]
#[case("6Lx39RyWn3syuozAe2WiPdAYn1ctMx17t8yrBMGFBmZy", "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx", "message")]
#[case("352bT2PhPyDS5pzHSfCN1Hcp8E67anpyNwLuWp3ga6VD", "9j1mZuDTFSsrP8xwS4iyJwi22GZEsGFe2nutDB25R4jY", "message")]
#[case("Aw5dELfJvRbc2BwXKEogdpFfNGsZ7gx2Bi6PahGfzboe", "2E9xcBvRVRGAgnySqpNzW6JoYjnjtt2BtqDSPEdsWNjk", "message")]
#[test]
fn test_sign_verify(secret_key: &str, public_key: &str, message: &str) {
    let request = SignRequest {
        payload: message.as_bytes().to_vec(),
        key: Some(Key {
            key_id: "did:example:123".to_string(),
            public_key: vec![],
            secret_key: base58_decode!(secret_key),
            key_type: KeyType::Ed25519.into(),
            fingerprint: String::new(),
        }),
        append_to: None,
    };

    let response = match DIDComm::sign(&request) {
        Ok(x) => x,
        Err(_) => panic!("Erorr signing"),
    };

    let signed_message = response.message.expect("message was empty");

    let verify_request = VerifyRequest {
        key: Some(Key {
            key_id: "did:example:123".to_string(),
            public_key: base58_decode!(public_key),
            secret_key: vec![],
            key_type: KeyType::Ed25519.into(),
            fingerprint: String::new(),
        }),
        message: Some(signed_message.clone()),
    };

    let verify_response = match DIDComm::verify(&verify_request) {
        Ok(x) => x,
        Err(_) => panic!("Erorr signing"),
    };

    assert!(verify_response.is_valid);
}
