use std::convert::TryInto;

use oberon;
use rand::prelude::*;

use crate::{didcomm::Error, proto::security::*};

impl crate::Oberon {
    pub fn key<'a>(request: &CreateOberonKeyRequest) -> Result<CreateOberonKeyResponse, Error<'a>> {
        let sk = if request.seed.len() == 0 {
            let rng = thread_rng();
            oberon::SecretKey::new(rng)
        } else {
            oberon::SecretKey::hash(&request.seed)
        };
        let pk = oberon::PublicKey::from(&sk);

        Ok(CreateOberonKeyResponse {
            sk: sk.to_bytes().to_vec(),
            pk: pk.to_bytes().to_vec(),
        })
    }

    pub fn token<'a>(request: &CreateOberonTokenRequest) -> Result<CreateOberonTokenResponse, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let skbytes: [u8; oberon::SecretKey::BYTES] = request
            .sk
            .as_slice()
            .try_into()
            .map_err(|_| Error::InvalidField("invalid secret key provided"))?;

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

        Ok(CreateOberonTokenResponse {
            token: token.to_bytes().to_vec(),
        })
    }

    pub fn proof<'a>(request: &CreateOberonProofRequest) -> Result<CreateOberonProofResponse, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let tokenbytes: [u8; oberon::Token::BYTES] = request.token.as_slice().try_into().map_err(|_| Error::InvalidField("invalid token provided"))?;

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

        Ok(CreateOberonProofResponse {
            proof: proof.to_bytes().to_vec(),
        })
    }

    pub fn verify<'a>(request: &VerifyOberonProofRequest) -> Result<VerifyOberonProofResponse, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let pkbytes: [u8; oberon::PublicKey::BYTES] = request
            .pk
            .as_slice()
            .try_into()
            .map_err(|_| Error::InvalidField("invalid public key provided"))?;

        let pk = oberon::PublicKey::from_bytes(&pkbytes);
        if pk.is_none().into() {
            return Err(Error::InvalidField("invalid public key provided"));
        }

        let proofbytes: [u8; oberon::Proof::BYTES] = request.proof.as_slice().try_into().map_err(|_| Error::InvalidField("invalid proof provided"))?;

        let proof = oberon::Proof::from_bytes(&proofbytes);
        if proof.is_none().into() {
            return Err(Error::InvalidField("invalid proof provided"));
        }

        let valid = proof.unwrap().open(pk.unwrap(), &*request.data, &request.nonce);

        Ok(VerifyOberonProofResponse { valid: valid.into() })
    }

    pub fn blind<'a>(request: &BlindOberonTokenRequest) -> Result<BlindOberonTokenResponse, Error<'a>> {
        let tokenbytes: [u8; oberon::Token::BYTES] = request.token.as_slice().try_into().map_err(|_| Error::InvalidField("invalid token provided"))?;

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

        Ok(BlindOberonTokenResponse {
            token: tkn.to_bytes().to_vec(),
        })
    }

    pub fn unblind<'a>(request: &UnBlindOberonTokenRequest) -> Result<BlindOberonTokenResponse, Error<'a>> {
        let tokenbytes: [u8; oberon::Token::BYTES] = request.token.as_slice().try_into().map_err(|_| Error::InvalidField("invalid token provided"))?;

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

        Ok(BlindOberonTokenResponse {
            token: tkn.to_bytes().to_vec(),
        })
    }

    pub fn verify_token<'a>(request: &VerifyOberonTokenRequest) -> Result<VerifyOberonTokenResponse, Error<'a>> {
        if request.data.len() == 0 {
            return Err(Error::InvalidField("must provide data"));
        }

        let pkbytes: [u8; oberon::PublicKey::BYTES] = request
            .pk
            .as_slice()
            .try_into()
            .map_err(|_| Error::InvalidField("invalid public key provided"))?;

        let pk = oberon::PublicKey::from_bytes(&pkbytes);
        if pk.is_none().into() {
            return Err(Error::InvalidField("invalid public key provided"));
        }

        let tokenbytes: [u8; oberon::Token::BYTES] = request.token.as_slice().try_into().map_err(|_| Error::InvalidField("invalid token provided"))?;

        let tkn = oberon::Token::from_bytes(&tokenbytes);
        if tkn.is_none().into() {
            return Err(Error::InvalidField("invalid token provided"));
        }
        let tkn = tkn.unwrap();
        let pk = pk.unwrap();

        let verify_result = tkn.verify(pk, &request.data);
        let is_valid = bool::from(verify_result);

        Ok(VerifyOberonTokenResponse { valid: is_valid })
    }
}
