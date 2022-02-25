use crate::{didcomm::Error, proto::security::*};

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
            130, 238, 45, 55, 228, 150, 97, 190, 87, 39, 221, 146, 194, 203, 34, 50, 251, 19, 241, 33, 252, 218, 229, 140, 153, 243, 162, 45, 212, 127, 213,
            11, 164, 217, 190, 142, 196, 36, 93, 110, 138, 181, 36, 168, 133, 154, 157, 52, 139, 253, 219, 54, 129, 76, 76, 118, 106, 174, 67, 2, 190, 250,
            209, 19, 134, 186, 21, 22, 86, 135, 245, 84, 123, 58, 138, 153, 46, 9, 111, 179, 136, 248, 125, 232, 27, 64, 82, 241, 136, 234, 158, 186, 227, 182,
            165, 140, 178, 97, 55, 38, 28, 28, 170, 219, 212, 12, 15, 134, 35, 220, 138, 108, 38, 125, 16, 56, 39, 199, 105, 191, 94, 253, 99, 164, 90, 179,
            153, 230, 1, 121, 24, 236, 88, 85, 46, 119, 226, 239, 13, 237, 17, 187, 36, 240, 6, 100, 93, 52, 228, 165, 186, 206, 83, 125, 223, 169, 138, 82,
            150, 2, 148, 108, 217, 83, 16, 43, 235, 155, 217, 8, 57, 182, 20, 111, 125, 86, 56, 238, 247, 127, 192, 53, 200, 24, 238, 228, 206, 6, 141, 15,
            170, 229, 154, 175, 15, 182, 199, 80, 186, 59, 0, 74, 41, 46, 105, 65, 92, 94, 203, 9, 121, 189, 192, 83, 143, 175, 72, 187, 12, 3, 130, 62, 130,
            69, 52, 97, 106, 59, 193, 155, 121, 146, 35, 16, 140, 19, 11, 42, 87, 75, 109, 82, 210, 160, 170, 170, 88, 104, 116, 139, 87, 233, 245, 46, 146, 1,
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"123456789012345678901234567890".to_vec(),
        pk: pk.to_bytes().to_vec(),
    };

    let rep = crate::Oberon::verify(&req).unwrap();
    assert_eq!(rep.valid, true);

    let req = VerifyOberonProofRequest {
        proof: vec![
            130, 238, 45, 55, 228, 150, 97, 190, 87, 39, 221, 146, 194, 203, 34, 50, 251, 19, 241, 33, 252, 218, 229, 140, 153, 243, 162, 45, 212, 127, 213,
            11, 164, 217, 190, 142, 196, 36, 93, 110, 138, 181, 36, 168, 133, 154, 157, 52, 139, 253, 219, 54, 129, 76, 76, 118, 106, 174, 67, 2, 190, 250,
            209, 19, 134, 186, 21, 22, 86, 135, 245, 84, 123, 58, 138, 153, 46, 9, 111, 179, 136, 248, 125, 232, 27, 64, 82, 241, 136, 234, 158, 186, 227, 182,
            165, 140, 178, 97, 55, 38, 28, 28, 170, 219, 212, 12, 15, 134, 35, 220, 138, 108, 38, 125, 16, 56, 39, 199, 105, 191, 94, 253, 99, 164, 90, 179,
            153, 230, 1, 121, 24, 236, 88, 85, 46, 119, 226, 239, 13, 237, 17, 187, 36, 240, 6, 100, 93, 52, 228, 165, 186, 206, 83, 125, 223, 169, 138, 82,
            150, 2, 148, 108, 217, 83, 16, 43, 235, 155, 217, 8, 57, 182, 20, 111, 125, 86, 56, 238, 247, 127, 192, 53, 200, 24, 238, 228, 206, 6, 141, 15,
            170, 229, 154, 175, 15, 182, 199, 80, 186, 59, 0, 74, 41, 46, 105, 65, 92, 94, 203, 9, 121, 189, 192, 83, 143, 175, 72, 187, 12, 3, 130, 62, 130,
            69, 52, 97, 106, 59, 193, 155, 121, 146, 35, 16, 140, 19, 11, 42, 87, 75, 109, 82, 210, 160, 170, 170, 88, 104, 116, 139, 87, 233, 245, 46, 146, 1,
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"asdf".to_vec(),
        pk: pk.to_bytes().to_vec(),
    };

    let rep = crate::Oberon::verify(&req).unwrap();
    assert_eq!(rep.valid, false);
}

#[test]
fn oberon_demo() {
    let sk = oberon::SecretKey::from_bytes(&[
        16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107, 150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51,
        175, 108, 12, 56, 6, 76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43, 108, 82, 63, 136, 116, 3, 93, 1, 226, 152,
        197, 152, 61, 212, 185, 32, 195, 211, 37, 206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94,
    ])
    .unwrap();
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
