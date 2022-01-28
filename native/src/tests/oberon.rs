use rand::thread_rng;

use crate::{didcomm::Error, proto::security::*, MessageFormatter, Oberon};

#[test]
fn test_create_token() {
    let req = CreateOberonTokenRequest {
        sk: vec![1, 2, 3],
        data: vec![1, 2, 3],
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::token(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("invalid secret key provided")));

    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107, 150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100,
            51, 175, 108, 12, 56, 6, 76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43, 108, 82, 63, 136, 116, 3, 93, 1,
            226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37, 206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94,
        ],
        data: Vec::new(),
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::token(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("must provide data")));

    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107, 150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100,
            51, 175, 108, 12, 56, 6, 76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43, 108, 82, 63, 136, 116, 3, 93, 1,
            226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37, 206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94,
        ],
        data: "test data to generate tokens".as_bytes().to_vec(),
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::token(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65
        ]
    );

    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107, 150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100,
            51, 175, 108, 12, 56, 6, 76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43, 108, 82, 63, 136, 116, 3, 93, 1,
            226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37, 206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94,
        ],
        data: "test data to generate tokens".as_bytes().to_vec(),
        blinding: vec!["1234".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::token(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            128, 239, 129, 168, 211, 193, 253, 149, 210, 3, 37, 224, 181, 244, 67, 164, 128, 148, 40, 79, 106, 146, 15, 185, 128, 197, 131, 34, 239, 232, 48,
            219, 20, 248, 143, 172, 162, 39, 65, 117, 204, 67, 237, 24, 122, 86, 196, 73
        ]
    );

    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107, 150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100,
            51, 175, 108, 12, 56, 6, 76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43, 108, 82, 63, 136, 116, 3, 93, 1,
            226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37, 206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94,
        ],
        data: "test data to generate tokens".as_bytes().to_vec(),
        blinding: vec!["1234".as_bytes().to_vec(), "4321".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::token(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151, 99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102,
            117, 40, 150, 67, 206, 109, 91, 217, 247, 152, 234, 52, 37, 237, 254, 51
        ]
    );
}

#[test]
fn test_create_proof() {
    let req = CreateOberonProofRequest {
        token: vec![1, 2, 3],
        data: vec![1, 2, 3],
        nonce: vec![1, 2, 3],
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::proof(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("invalid token provided")));

    let req = CreateOberonProofRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65,
        ],
        data: vec![],
        nonce: vec![1, 2, 3],
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::proof(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("must provide data")));

    let req = CreateOberonProofRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65,
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"123456789012345678901234567890".to_vec(),
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::proof(&req).unwrap();
    assert!(rep.proof.len() == 256)
}

#[test]
fn test_validate_proof() {
    let sk = oberon::SecretKey::from_bytes(&[
        16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107, 150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51,
        175, 108, 12, 56, 6, 76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43, 108, 82, 63, 136, 116, 3, 93, 1, 226, 152,
        197, 152, 61, 212, 185, 32, 195, 211, 37, 206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94,
    ])
    .unwrap();
    let pk = oberon::PublicKey::from(&sk);

    let req = VerifyOberonProofRequest {
        proof: vec![1, 2, 3],
        data: vec![1, 2, 3],
        nonce: vec![1, 2, 3],
        pk: vec![1, 2, 3],
    };

    let rep = crate::Oberon::verify(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("invalid public key provided")));

    let req = VerifyOberonProofRequest {
        proof: vec![1, 2, 3],
        data: vec![],
        nonce: vec![1, 2, 3],
        pk: pk.to_bytes().to_vec(),
    };

    let rep = crate::Oberon::verify(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("must provide data")));

    let req = VerifyOberonProofRequest {
        proof: vec![
            137, 232, 184, 86, 36, 91, 45, 187, 114, 241, 66, 223, 172, 235, 4, 85, 84, 51, 192, 186, 2, 161, 131, 53, 246, 142, 10, 96, 90, 57, 219, 21, 52,
            153, 15, 9, 116, 242, 10, 155, 116, 129, 52, 5, 62, 204, 233, 3, 136, 24, 92, 57, 134, 171, 49, 80, 40, 121, 233, 85, 53, 221, 23, 61, 109, 250,
            149, 59, 216, 22, 92, 101, 90, 138, 90, 85, 45, 13, 117, 208, 254, 229, 114, 133, 116, 19, 176, 108, 109, 46, 202, 244, 212, 90, 57, 83, 148, 198,
            103, 124, 26, 181, 124, 48, 149, 111, 32, 123, 15, 146, 205, 67, 233, 57, 139, 136, 156, 130, 188, 48, 134, 124, 12, 177, 209, 182, 231, 226, 65,
            22, 20, 172, 106, 189, 177, 201, 228, 197, 106, 253, 214, 111, 34, 176, 24, 255, 150, 221, 162, 40, 39, 217, 248, 116, 213, 98, 211, 33, 76, 97,
            253, 111, 217, 194, 96, 180, 85, 0, 5, 216, 125, 172, 254, 48, 38, 145, 89, 35, 218, 61, 30, 75, 20, 7, 245, 140, 30, 7, 209, 223, 232, 53, 156,
            154, 106, 119, 217, 234, 41, 112, 132, 218, 116, 89, 173, 123, 75, 152, 10, 168, 115, 210, 187, 70, 121, 97, 228, 124, 45, 235, 66, 218, 225, 2,
            156, 154, 106, 119, 217, 234, 41, 112, 132, 218, 116, 89, 173, 123, 75, 152, 10, 168, 115, 210, 187, 70, 121, 97, 228, 124, 45, 235, 66, 218, 225,
            2,
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"123456789012345678901234567890".to_vec(),
        pk: pk.to_bytes().to_vec(),
    };

    let rep = crate::Oberon::verify(&req).unwrap();
    assert!(rep.valid == true);

    let req = VerifyOberonProofRequest {
        proof: vec![
            148, 26, 138, 47, 5, 101, 166, 140, 15, 231, 239, 156, 37, 104, 58, 76, 41, 99, 93, 66, 100, 248, 238, 124, 208, 81, 235, 184, 36, 67, 184, 28,
            198, 11, 69, 138, 249, 64, 31, 145, 216, 101, 3, 101, 164, 25, 52, 102, 144, 234, 121, 207, 211, 137, 160, 114, 251, 73, 38, 9, 207, 93, 52, 55,
            10, 174, 114, 99, 147, 123, 224, 6, 88, 47, 44, 12, 149, 22, 2, 237, 68, 0, 94, 30, 114, 244, 186, 147, 95, 243, 255, 51, 131, 122, 8, 26,
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"asdf".to_vec(),
        pk: pk.to_bytes().to_vec(),
    };

    let rep = crate::Oberon::verify(&req).unwrap();
    assert!(rep.valid == false);
}

#[test]
fn oberon_demo() {
    let mut rng = thread_rng();
    let sk = oberon::SecretKey::new(&mut rng);
    let pk = oberon::PublicKey::from(&sk);

    let data = b"test data to generate tokens".to_vec();
    let nonce = b"123456789012345678901234567890".to_vec();

    let token = crate::Oberon::token(&CreateOberonTokenRequest {
        sk: sk.to_bytes().to_vec(),
        data: data.clone(),
        blinding: vec![],
    })
    .unwrap();

    let proof = crate::Oberon::proof(&CreateOberonProofRequest {
        token: token.token.clone(),
        data: data.clone(),
        nonce: nonce.clone(),
        blinding: vec![],
    })
    .unwrap();

    let verify = crate::Oberon::verify(&VerifyOberonProofRequest {
        proof: proof.proof.clone(),
        data: data.clone(),
        nonce: nonce.clone(),
        pk: pk.to_bytes().to_vec(),
    })
    .unwrap();

    assert!(verify.valid);
}

#[test]
fn test_blind_token() {
    // original token to blind with 1234
    let req = BlindOberonTokenRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65,
        ],
        blinding: vec!["1234".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            128, 239, 129, 168, 211, 193, 253, 149, 210, 3, 37, 224, 181, 244, 67, 164, 128, 148, 40, 79, 106, 146, 15, 185, 128, 197, 131, 34, 239, 232, 48,
            219, 20, 248, 143, 172, 162, 39, 65, 117, 204, 67, 237, 24, 122, 86, 196, 73
        ]
    );

    // blinded token to another blind 4321
    let req = BlindOberonTokenRequest {
        token: rep.token,
        blinding: vec!["4321".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151, 99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102,
            117, 40, 150, 67, 206, 109, 91, 217, 247, 152, 234, 52, 37, 237, 254, 51
        ]
    );

    // original token to blind with 1234,4321
    let req = BlindOberonTokenRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65,
        ],
        blinding: vec!["1234".as_bytes().to_vec(), "4321".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151, 99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102,
            117, 40, 150, 67, 206, 109, 91, 217, 247, 152, 234, 52, 37, 237, 254, 51
        ]
    );
}
#[test]
fn test_unblind_token() {
    // original token to blind with 1234
    let req = BlindOberonTokenRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65,
        ],
        blinding: vec!["1234".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            128, 239, 129, 168, 211, 193, 253, 149, 210, 3, 37, 224, 181, 244, 67, 164, 128, 148, 40, 79, 106, 146, 15, 185, 128, 197, 131, 34, 239, 232, 48,
            219, 20, 248, 143, 172, 162, 39, 65, 117, 204, 67, 237, 24, 122, 86, 196, 73
        ]
    );

    // blinded token to another blind 4321
    let req = BlindOberonTokenRequest {
        token: rep.token,
        blinding: vec!["4321".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151, 99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102,
            117, 40, 150, 67, 206, 109, 91, 217, 247, 152, 234, 52, 37, 237, 254, 51
        ]
    );

    // original token to blind with 1234,4321
    let req = UnBlindOberonTokenRequest {
        token: rep.token,
        blinding: vec!["4321".as_bytes().to_vec(), "1234".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::unblind(&req).unwrap();
    assert_eq!(
        rep.token,
        vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227, 0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224,
            37, 64, 38, 237, 147, 49, 153, 45, 215, 100, 113, 209, 75, 204, 65
        ]
    );
}

#[test]
fn test_create_key() {
    let req = CreateOberonKeyRequest { seed: vec![] };

    crate::Oberon::key(&req).unwrap();
}

#[test]
fn test_create_key_with_seed() {
    let req = CreateOberonKeyRequest {
        seed: b"super secret seed".to_vec(),
    };

    let result = crate::Oberon::key(&req);
    assert!(result.is_ok())
}
