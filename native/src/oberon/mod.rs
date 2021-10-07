use crate::{didcomm::Error, proto::security::*};
use oberon;
use rand::prelude::*;
use std::convert::TryInto;

impl crate::Oberon {
    pub fn key<'a>(request: &CreateOberonKeyRequest) -> Result<CreateOberonKeyReply, Error<'a>> {
        let sk = if request.seed.len() == 0 {
            let rng = thread_rng();
            oberon::SecretKey::new(rng)
        } else {
            oberon::SecretKey::hash(&request.seed)
        };
        let pk = oberon::PublicKey::from(&sk);

        Ok(CreateOberonKeyReply {
            sk: sk.to_bytes().to_vec(),
            pk: pk.to_bytes().to_vec(),
        })
    }

    pub fn token<'a>(request: &CreateOberonTokenRequest) -> Result<CreateOberonTokenReply, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let skbytes: [u8; oberon::SecretKey::BYTES] = match request.sk.as_slice().try_into() {
            Ok(skbytes) => skbytes,
            Err(_) => return Err(Error::InvalidField("invalid secret key provided")),
        };

        let sk = oberon::SecretKey::from(&skbytes);
        let mut token = match oberon::Token::new(&sk, &request.data) {
            None => return Err(Error::InvalidField("invalid data provided")),
            Some(token) => token,
        };

        let blind_iter = request.blinding.iter();
        for blind in blind_iter {
            let b = oberon::Blinding::new(&blind);
            token = token - b;
        }

        Ok(CreateOberonTokenReply {
            token: token.to_bytes().to_vec(),
        })
    }

    pub fn proof<'a>(request: &CreateOberonProofRequest) -> Result<CreateOberonProofReply, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let tokenbytes: [u8; oberon::Token::BYTES] = match request.token.as_slice().try_into() {
            Ok(tokenbytes) => tokenbytes,
            Err(_) => return Err(Error::InvalidField("invalid token provided")),
        };

        let tkn = oberon::Token::from_bytes(&tokenbytes);
        if tkn.is_none().into() {
            return Err(Error::InvalidField("invalid token provided"));
        }

        let blinds: Vec<oberon::Blinding> = request.blinding.iter().map(|v| oberon::Blinding::new(&v)).collect();

        let mut rng = thread_rng();

        let proof = match oberon::Proof::new(&tkn.unwrap(), &blinds, &request.data, &request.nonce, &mut rng) {
            None => return Err(Error::Unknown),
            Some(proof) => proof,
        };

        Ok(CreateOberonProofReply {
            proof: proof.to_bytes().to_vec(),
        })
    }

    pub fn verify<'a>(request: &VerifyOberonProofRequest) -> Result<VerifyOberonProofReply, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let pkbytes: [u8; oberon::PublicKey::BYTES] = match request.pk.as_slice().try_into() {
            Ok(pkbytes) => pkbytes,
            Err(_) => return Err(Error::InvalidField("invalid public key provided")),
        };

        let pk = oberon::PublicKey::from_bytes(&pkbytes);
        if pk.is_none().into() {
            return Err(Error::InvalidField("invalid public key provided"));
        }

        let proofbytes: [u8; oberon::Proof::BYTES] = match request.proof.as_slice().try_into() {
            Ok(proofbytes) => proofbytes,
            Err(_) => return Err(Error::InvalidField("invalid proof provided")),
        };

        let proof = oberon::Proof::from_bytes(&proofbytes);
        if proof.is_none().into() {
            return Err(Error::InvalidField("invalid proof provided"));
        }

        let valid = proof.unwrap().open(pk.unwrap(), &*request.data, &request.nonce);

        Ok(VerifyOberonProofReply { valid: valid.into() })
    }

    pub fn blind<'a>(request: &BlindOberonTokenRequest) -> Result<BlindOberonTokenReply, Error<'a>> {
        let tokenbytes: [u8; oberon::Token::BYTES] = match request.token.as_slice().try_into() {
            Ok(tokenbytes) => tokenbytes,
            Err(_) => return Err(Error::InvalidField("invalid token provided")),
        };

        let tkn = oberon::Token::from_bytes(&tokenbytes);
        if tkn.is_none().into() {
            return Err(Error::InvalidField("invalid token provided"));
        }

        let mut tkn = tkn.unwrap();

        let blind_iter = request.blinding.iter();
        for blind in blind_iter {
            let b = oberon::Blinding::new(&blind);
            tkn = tkn - b;
        }

        Ok(BlindOberonTokenReply {
            token: tkn.to_bytes().to_vec(),
        })
    }

    pub fn unblind<'a>(request: &UnBlindOberonTokenRequest) -> Result<BlindOberonTokenReply, Error<'a>> {
        let tokenbytes: [u8; oberon::Token::BYTES] = match request.token.as_slice().try_into() {
            Ok(tokenbytes) => tokenbytes,
            Err(_) => return Err(Error::InvalidField("invalid token provided")),
        };

        let tkn = oberon::Token::from_bytes(&tokenbytes);
        if tkn.is_none().into() {
            return Err(Error::InvalidField("invalid token provided"));
        }

        let mut tkn = tkn.unwrap();

        let blind_iter = request.blinding.iter();
        for blind in blind_iter {
            let b = oberon::Blinding::new(&blind);
            tkn = tkn + b;
        }

        Ok(BlindOberonTokenReply {
            token: tkn.to_bytes().to_vec(),
        })
    }
}
