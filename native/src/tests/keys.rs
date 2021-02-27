use crate::*;
use base64::{URL_SAFE, URL_SAFE_NO_PAD};
use ffi_support::{ByteBuffer, ExternError};
use fluid::prelude::*;

#[theory]
#[case(KeyType::X25519, 32)]
#[case(KeyType::P256, 65)]
#[case(KeyType::Ed25519, 32)]
fn test_generate_key_no_seed(key_type: KeyType, public_key_size: usize) {
    let request = GenerateKeyRequest {
        seed: vec![],
        key_type: key_type as i32,
    };

    let response = DIDKey::generate(&request).expect("invalid response");

    let key = response.key.first().unwrap();

    let mut public_key = base64::decode_config(&key.x, URL_SAFE).unwrap();
    if !key.y.is_empty() {
        public_key.append(&mut base64::decode_config(&key.y, URL_SAFE).unwrap());
    }

    //assert_eq!(key_type as i32, key.crv);
    assert_eq!(public_key_size, public_key.len());
    assert_eq!(32, base64::decode_config(&key.d, URL_SAFE).unwrap().len());
}

#[test]
fn test_generate_key_no_seed_1() {
    let key_type = KeyType::P256;
    let public_key_size: usize = 65;

    let request = GenerateKeyRequest {
        seed: vec![],
        key_type: key_type as i32,
    };

    let response = DIDKey::generate(&request).expect("invalid response");
    let key = response.key.first().unwrap();

    let mut public_key = base64::decode_config(&key.x, URL_SAFE_NO_PAD).unwrap();
    if !key.y.is_empty() {
        public_key.append(&mut base64::decode_config(&key.y, URL_SAFE_NO_PAD).unwrap());
    }

    //assert_eq!(key_type as i32, key.crv);
    assert_eq!(public_key_size, public_key.len());
    assert_eq!(32, base64::decode_config(&key.d, URL_SAFE).unwrap().len());
}

#[theory]
#[case(KeyType::X25519)]
#[case(KeyType::P256)]
#[case(KeyType::Ed25519)]
fn test_ffi_generate_key_no_seed(key_type: KeyType) {
    let request = GenerateKeyRequest {
        seed: vec![],
        key_type: key_type as i32,
    };

    let req_buf = ByteBuffer::from_vec(request.to_vec());
    let mut res_buf = ByteBuffer::default();
    let mut err = ExternError::default();

    let response = crate::ffi::didkey::didkey_generate(req_buf, &mut res_buf, &mut err);

    assert_eq!(response, 0);
}

// #[test]
// fn test_did_uri_to_ed25519() {
//     let did_uri = "did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL";
//     let key = Ed25519KeyPair::try_from(did_uri.to_string());

//     assert!(key.map_or(false, |_| true));
// }

// #[test]
// fn test_did_uri_to_x25519() {
//     let did_uri =
//         "did:key:zXwpEHqfc5gnkCBdCnBqYaaoCaeLRSEPjLg2CAJB6H1ST7XC96h8C3N1MBEAefmPaSGv8aFnLDAgPzKhPQZX7vVVJsyd#zXwpEHqfc5gnkCBdCnBqYaaoCaeLRSEPjLg2CAJB6H1ST7XC96h8C3N1MBEAefmPaSGv8aFnLDAgPzKhPQZX7vVVJsyd";
//     let key = DIDKey::try_from(did_uri.to_string());

//     assert!(key.map_or(false, |_| true));
// }

#[test]
fn test_resolve() {
    let request = ResolveRequest {
        did: String::from("did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL"),
    };

    let res = DIDKey::resolve(&request);
    assert!(matches!(res, Ok(_)))
}

#[theory]
#[case(
    KeyType::Ed25519,
    "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578",
    "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx"
)]
#[case(
    KeyType::Ed25519,
    "1ebf7fd67372c8c76fd9fec36726efc0b20226d3608b90c608f1af7ae07be830",
    "9j1mZuDTFSsrP8xwS4iyJwi22GZEsGFe2nutDB25R4jY"
)]
#[case(
    KeyType::Ed25519,
    "ef06a7c14fb7ccbd5ebf3b813ae82c7b571074aab4ff20312322b905aa291f4c",
    "CTDAH3MW8Dorz6XpLHtwTXgAfkkXBbRVSJy4aXyj13CR"
)]
#[case(
    KeyType::Ed25519,
    "9393c66fa68d9313240ac7bcb3729de507edeca9a8c406438076c40525058181",
    "2E9xcBvRVRGAgnySqpNzW6JoYjnjtt2BtqDSPEdsWNjk"
)]
#[case(
    KeyType::Ed25519,
    "880d83738db5093d2cb5ab12ebb69be7577f07c272c0b2379b5f31c8a9ad4daa",
    "6JmFgRnWVTUi4vVZAd4aNpZKfP8LenvQGk1q1uM34ajq"
)]
#[case(
    KeyType::X25519,
    "5a2b1f37ecc9fb7f27e1aa3daa4d66d9c3e54a4c0dcd53a4a5cacdfaf50578cb",
    "B3xzCuy2AxwM2EMSQw4yLRakn6QEuuNytiRidWpCoUcH"
)]
#[case(
    KeyType::X25519,
    "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5",
    "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ"
)]
#[case(
    KeyType::X25519,
    "22c3bc3c2c646951d5db96682ca2d12f6d3620463a2f490c5396bf5036a43a41",
    "kbNfYQnMuhunbnMGKzkoQgwYpTXUYu9KrLNUweqRjdd"
)]
#[case(
    KeyType::X25519,
    "e704de9620f721a6ad06cf17bfbe662ee0d3792fb0ce58d2be09dbb601ce65d8",
    "9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm"
)]
#[case(
    KeyType::X25519,
    "8a5bbcf88345b143f6021334ed495bfb29629c8629684e257f6a2836c7d2d53f",
    "yyDzHfQa9HQNdGiLQuhPorPYZMwjmLQkQefRvKYbnK3"
)]
fn test_generate_key_with_seed(key_type: KeyType, seed: &str, public_key: &str) {
    let request = GenerateKeyRequest {
        seed: hex::decode(seed).expect("invalid hex string"),
        key_type: key_type as i32,
    };

    let response = DIDKey::generate(&request).expect("invalid response");
    let key = response.key.first().unwrap();

    //assert_eq!(key.key_type, key_type.into());
    let decoded_public_key = base64::decode_config(&key.x, URL_SAFE).unwrap();
    assert_eq!(public_key, bs58::encode(decoded_public_key).into_string());
    assert_eq!(32, base64::decode_config(&key.d, URL_SAFE).unwrap().len());
}

#[test]
fn test_generate_key_with_seed_1() {
    let key_type = KeyType::X25519;
    let seed: &str = "8a5bbcf88345b143f6021334ed495bfb29629c8629684e257f6a2836c7d2d53f";
    let public_key = "yyDzHfQa9HQNdGiLQuhPorPYZMwjmLQkQefRvKYbnK3".to_string();

    let request = GenerateKeyRequest {
        seed: hex::decode(seed).expect("invalid hex string"),
        key_type: key_type.into(),
    };

    let response = DIDKey::generate(&request).expect("invalid response");
    let key = response.key.first().unwrap();

    //assert_eq!(key.key_type, key_type.into());
    let decoded_public_key = base64::decode_config(&key.x, URL_SAFE).unwrap();
    assert_eq!(public_key, bs58::encode(decoded_public_key).into_string());
    assert_eq!(32, base64::decode_config(&key.d, URL_SAFE).unwrap().len());
}

// #[theory]
// #[case("6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx", "FxfdY3DCQxVZddKGAtSjZdFW9bCCW7oRwZn1NFJ2Tbg2")]
// #[case("9j1mZuDTFSsrP8xwS4iyJwi22GZEsGFe2nutDB25R4jY", "Ff8nD7Zgm8ZNhBZcmHTqrfg2FRf6tU6Ki5BDmA9gtrRm")]
// #[case("CTDAH3MW8Dorz6XpLHtwTXgAfkkXBbRVSJy4aXyj13CR", "GkMFTHJ2DuwfsSiJ1eKpcNBqYau9i5VW5qXiy2po4tqJ")]
// #[case("2E9xcBvRVRGAgnySqpNzW6JoYjnjtt2BtqDSPEdsWNjk", "ELMGmTD43y15v6YaD3kfM5oF5xHnpv9eiNkZoNQxWunh")]
// #[case("6JmFgRnWVTUi4vVZAd4aNpZKfP8LenvQGk1q1uM34ajq", "AgEcgKRLDXS1puWdz3o2uyAuFZXRMGLi2widbZ1G7MLv")]
// fn convert_ed_to_montgomery(ed_key: &str, montgomery_key: &str) {
//     let request = ConvertKeyRequest {
//         key: Some(JsonWebKey {
//             key_id: String::default(),
//             crv: Crv::Ed25519.into(),
//             d: String::from(""),
//             x: base64::encode(bs58::decode(ed_key).into_vec().unwrap()),
//             y: String::from(""),
//             kty: KeyType::Okp as i32,
//         }),
//         target_type: Crv::X25519.into(),
//     };

//     let response = DIDKey::convert(&request).expect("invalid response");
//     let key = response.key.expect("Missing key");

//     assert_eq!(32, base64::decode(&key.x).unwrap().len());
//     assert_eq!(montgomery_key, bs58::encode(base64::decode(&key.x).unwrap()).into_string());
// }
