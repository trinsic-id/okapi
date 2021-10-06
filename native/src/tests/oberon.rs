use crate::{didcomm::Error, proto::{security::*}};
use rand::prelude::*;


#[test]
fn test_create_token() {
    let req = CreateOberonTokenRequest {
        sk: vec![1,2,3],
        data: vec![1,2,3],
        blinding: Vec::new(),
    };


    let rep = crate::Oberon::token(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("invalid secret key provided")));
    
    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107,
            150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51, 175, 108, 12, 56, 6,
            76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43,
            108, 82, 63, 136, 116, 3, 93, 1, 226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37,
            206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94
        ],
        data: Vec::new(),
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::token(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("must provide data")));

    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107,
            150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51, 175, 108, 12, 56, 6,
            76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43,
            108, 82, 63, 136, 116, 3, 93, 1, 226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37,
            206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94
        ],
        data: "test data to generate tokens".as_bytes().to_vec(),
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::token(&req).unwrap();
    assert_eq!(rep.token,  vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ]
    );
    
    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107,
            150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51, 175, 108, 12, 56, 6,
            76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43,
            108, 82, 63, 136, 116, 3, 93, 1, 226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37,
            206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94
        ],
        data: "test data to generate tokens".as_bytes().to_vec(),
        blinding:  vec!["1234".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::token(&req).unwrap();
    assert_eq!(rep.token,  vec![
            128, 239, 129, 168, 211, 193, 253, 149, 210, 3, 37, 224, 181, 244, 67, 
            164, 128, 148, 40, 79, 106, 146, 15, 185, 128, 197, 131, 34, 239, 232, 48, 219, 
            20, 248, 143, 172, 162, 39, 65, 117, 204, 67, 237, 24, 122, 86, 196, 73
        ]
    );

    let req = CreateOberonTokenRequest {
        sk: vec![
            16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107,
            150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51, 175, 108, 12, 56, 6,
            76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43,
            108, 82, 63, 136, 116, 3, 93, 1, 226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37,
            206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94
        ],
        data: "test data to generate tokens".as_bytes().to_vec(),
        blinding:  vec!["1234".as_bytes().to_vec(), "4321".as_bytes().to_vec()],
    };

    let rep = crate::Oberon::token(&req).unwrap();
    assert_eq!(rep.token,  vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151,
            99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102, 117, 40, 150, 67, 206, 109, 91, 217, 247, 152,
            234, 52, 37, 237, 254, 51
        ]
    );
}

#[test]
fn test_create_proof() {
    let req = CreateOberonProofRequest {
        token: vec![1,2,3],
        data: vec![1,2,3],
        nonce: vec![1,2,3],
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::proof(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("invalid token provided")));

    let req = CreateOberonProofRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ],
        data: vec![],
        nonce: vec![1,2,3],
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::proof(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("must provide data")));

    let req = CreateOberonProofRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"123456789012345678901234567890".to_vec(),
        blinding: Vec::new(),
    };

    let rep = crate::Oberon::proof(&req).unwrap();
    assert!(rep.proof.len() == 96)
}

#[test]
fn test_validate_proof() {
    let sk = oberon::SecretKey::from_bytes(&[
        16, 133, 126, 11, 192, 153, 22, 14, 53, 214, 99, 40, 66, 194, 96, 30, 19, 86, 137, 107,
        150, 49, 104, 202, 209, 80, 128, 182, 15, 154, 34, 57, 100, 51, 175, 108, 12, 56, 6,
        76, 46, 173, 247, 255, 184, 165, 228, 127, 145, 65, 171, 195, 44, 164, 3, 16, 132, 43,
        108, 82, 63, 136, 116, 3, 93, 1, 226, 152, 197, 152, 61, 212, 185, 32, 195, 211, 37,
        206, 242, 31, 72, 79, 83, 71, 197, 102, 202, 129, 95, 19, 105, 34, 22, 46, 124, 94
    ]).unwrap();
    let pk = oberon::PublicKey::from(&sk);

    let req = VerifyOberonProofRequest {
        proof: vec![1,2,3],
        data: vec![1,2,3],
        nonce: vec![1,2,3],
        pk: vec![1,2,3]
    };

    let rep = crate::Oberon::verify(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("invalid public key provided")));
    
    let req = VerifyOberonProofRequest {
        proof: vec![1,2,3],
        data: vec![],
        nonce: vec![1,2,3],
        pk: pk.to_bytes().to_vec()
    };

    let rep = crate::Oberon::verify(&req);
    assert!(matches!(rep.unwrap_err(), Error::InvalidField("must provide data")));

    let req = VerifyOberonProofRequest {
        proof: vec![
            148, 26, 138, 47, 5, 101, 166, 140, 15, 231, 239, 156, 37, 104, 58, 76, 41, 99, 93,
            66, 100, 248, 238, 124, 208, 81, 235, 184, 36, 67, 184, 28, 198, 11, 69, 138, 249, 64,
            31, 145, 216, 101, 3, 101, 164, 25, 52, 102, 144, 234, 121, 207, 211, 137, 160, 114, 251,
            73, 38, 9, 207, 93, 52, 55, 10, 174, 114, 99, 147, 123, 224, 6, 88, 47, 44, 12, 149, 22,
            2, 237, 68, 0, 94, 30, 114, 244, 186, 147, 95, 243, 255, 51, 131, 122, 8, 26
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"123456789012345678901234567890".to_vec(),
        pk: pk.to_bytes().to_vec()
    };

    let rep = crate::Oberon::verify(&req).unwrap();
    assert!(rep.valid == true);

    let req = VerifyOberonProofRequest {
        proof: vec![
            148, 26, 138, 47, 5, 101, 166, 140, 15, 231, 239, 156, 37, 104, 58, 76, 41, 99, 93,
            66, 100, 248, 238, 124, 208, 81, 235, 184, 36, 67, 184, 28, 198, 11, 69, 138, 249, 64,
            31, 145, 216, 101, 3, 101, 164, 25, 52, 102, 144, 234, 121, 207, 211, 137, 160, 114, 251,
            73, 38, 9, 207, 93, 52, 55, 10, 174, 114, 99, 147, 123, 224, 6, 88, 47, 44, 12, 149, 22,
            2, 237, 68, 0, 94, 30, 114, 244, 186, 147, 95, 243, 255, 51, 131, 122, 8, 26
        ],
        data: b"test data to generate tokens".to_vec(),
        nonce: b"asdf".to_vec(),
        pk: pk.to_bytes().to_vec()
    };

    let rep = crate::Oberon::verify(&req).unwrap();
    assert!(rep.valid == false);
}

#[test]
fn test_blind_token() {
    // original token to blind with 1234
    let req = BlindOberonTokenRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ],
        blinding: vec!["1234".as_bytes().to_vec()]
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(rep.token,  vec![
            128, 239, 129, 168, 211, 193, 253, 149, 210, 3, 37, 224, 181, 244, 67, 
            164, 128, 148, 40, 79, 106, 146, 15, 185, 128, 197, 131, 34, 239, 232, 48, 219, 
            20, 248, 143, 172, 162, 39, 65, 117, 204, 67, 237, 24, 122, 86, 196, 73
        ]
    );

    // blinded token to another blind 4321
    let req = BlindOberonTokenRequest {
        token: rep.token,
        blinding: vec!["4321".as_bytes().to_vec()]
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(rep.token,  vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151,
            99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102, 117, 40, 150, 67, 206, 109, 91, 217, 247, 152,
            234, 52, 37, 237, 254, 51
        ]
    );

    // original token to blind with 1234,4321
    let req = BlindOberonTokenRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ],
        blinding: vec!["1234".as_bytes().to_vec(), "4321".as_bytes().to_vec()]
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(rep.token,  vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151,
            99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102, 117, 40, 150, 67, 206, 109, 91, 217, 247, 152,
            234, 52, 37, 237, 254, 51
        ]
    );
}
#[test]
fn test_unblind_token() {
    // original token to blind with 1234
    let req = BlindOberonTokenRequest {
        token: vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ],
        blinding: vec!["1234".as_bytes().to_vec()]
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(rep.token,  vec![
            128, 239, 129, 168, 211, 193, 253, 149, 210, 3, 37, 224, 181, 244, 67, 
            164, 128, 148, 40, 79, 106, 146, 15, 185, 128, 197, 131, 34, 239, 232, 48, 219, 
            20, 248, 143, 172, 162, 39, 65, 117, 204, 67, 237, 24, 122, 86, 196, 73
        ]
    );

    // blinded token to another blind 4321
    let req = BlindOberonTokenRequest {
        token: rep.token,
        blinding: vec!["4321".as_bytes().to_vec()]
    };

    let rep = crate::Oberon::blind(&req).unwrap();
    assert_eq!(rep.token,  vec![
            175, 17, 112, 139, 40, 239, 199, 120, 207, 12, 43, 209, 109, 50, 21, 64, 129, 24, 83, 96, 151,
            99, 227, 93, 177, 20, 77, 162, 193, 43, 239, 102, 117, 40, 150, 67, 206, 109, 91, 217, 247, 152,
            234, 52, 37, 237, 254, 51
        ]
    );


    // original token to blind with 1234,4321
    let req = UnBlindOberonTokenRequest {
        token: rep.token,
        blinding: vec!["4321".as_bytes().to_vec(), "1234".as_bytes().to_vec()]
    };

    let rep = crate::Oberon::unblind(&req).unwrap();
    assert_eq!(rep.token,  vec![
            165, 82, 0, 30, 66, 13, 22, 195, 249, 0, 104, 101, 182, 38, 228, 71, 83, 130, 131, 227,
            0, 206, 233, 75, 146, 57, 207, 235, 113, 214, 8, 19, 224, 37, 64, 38, 237, 147, 49, 153,
            45, 215, 100, 113, 209, 75, 204, 65
        ]
    );
}