use crate::{proto::didcomm_messaging::*, *};
use did_key::*;

use self::xchacha::XChaCha;

pub struct EncryptResult {
    pub ciphertext: Vec<u8>,
    pub tag: Vec<u8>,
}
pub trait AeadSuite {
    type Err;

    fn encrypt(&self, nonce: &[u8], associated_data: &[u8], plaintext: &[u8]) -> Result<EncryptResult, Self::Err>;

    fn decrypt(&self, nonce: &[u8], associated_data: &[u8], ciphertext: &[u8], tag: &[u8]) -> Result<Vec<u8>, Self::Err>;
}

#[derive(Debug)]
pub enum Error<'a> {
    InvalidRequest,
    Message(&'a str),
    MissingField(&'a str),
    InvalidField(&'a str),
    UnsupportedAlgorithm,
    Unknown,
}

impl DIDComm {
    pub fn pack<'a>(request: &PackRequest) -> Result<PackResponse, Error<'a>> {
        let request = request.clone();

        let enc_algorithm = unwrap_or_return!(EncryptionAlgorithm::from_i32(request.mode), Error::InvalidRequest);
        let aad = request.associated_data.clone();

        let receiver_key = unwrap_or_return!(request.receiver_key, Error::MissingField("receiver_key"));
        let sender_key = unwrap_or_return!(request.sender_key, Error::MissingField("sender_key"));

        let sender_did_key: KeyPair = sender_key.clone().into();
        let enc_key = sender_did_key.key_exchange(&receiver_key.clone().into());

        let mut nonce = [0u8; 24];
        getrandom::getrandom(&mut nonce).expect("cannot generate random seed");

        let result = match enc_algorithm {
            EncryptionAlgorithm::Xchacha20poly1305 => match XChaCha::from(&enc_key).encrypt(&nonce, &aad, &request.plaintext) {
                Ok(x) => x,
                Err(_) => return Err(Error::Unknown),
            },
            _ => return Err(Error::UnsupportedAlgorithm),
        };

        Ok(PackResponse {
            message: Some(EncryptedMessage {
                ciphertext: result.ciphertext.clone(),
                iv: nonce.to_vec(),
                aad,
                tag: result.tag,
                recipients: vec![EncryptionRecipient {
                    header: Some(EncryptionHeader {
                        mode: EncryptionMode::Direct.into(),
                        algorithm: EncryptionAlgorithm::Xchacha20poly1305.into(),
                        key_id: receiver_key.kid,
                        sender_key_id: sender_key.kid,
                    }),
                    content_encryption_key: vec![],
                }],
            }),
        })
    }
    pub fn unpack<'a>(request: &UnpackRequest) -> Result<UnpackResponse, Error<'a>> {
        let request = request.clone();

        let message = unwrap_or_return!(request.message, Error::MissingField("message not found"));
        let recipient = unwrap_or_return!(message.recipients.first(), Error::MissingField("recipient not found"));
        let header = unwrap_or_return!(&recipient.header, Error::MissingField("header not found"));
        let enc_algorithm = unwrap_or_return!(EncryptionAlgorithm::from_i32(header.algorithm), Error::MissingField("invalid code"));
        let enc_mode = unwrap_or_return!(EncryptionMode::from_i32(header.mode), Error::MissingField("invalid code"));

        let receiver_key = unwrap_or_return!(request.receiver_key, Error::MissingField("receiver key not found"));
        let sender_key = unwrap_or_return!(request.sender_key, Error::MissingField("sender key not found"));

        let enc_key = match enc_mode {
            EncryptionMode::Direct => {
                let rec_did_key: KeyPair = receiver_key.into();
                rec_did_key.key_exchange(&sender_key.into())
            }
            _ => return Err(Error::UnsupportedAlgorithm),
        };

        let result = match enc_algorithm {
            EncryptionAlgorithm::Xchacha20poly1305 => XChaCha::from(&enc_key).decrypt(
                message.iv.as_slice(),
                message.aad.as_slice(),
                message.ciphertext.as_slice(),
                message.tag.as_slice(),
            ),
            _ => todo!(),
        };

        match result {
            Ok(x) => Ok(UnpackResponse { plaintext: x }),
            Err(_) => Err(Error::UnsupportedAlgorithm),
        }
    }

    pub fn sign<'a>(request: &SignRequest) -> Result<SignResponse, Error<'a>> {
        let key = unwrap_or_return!(&request.key, Error::MissingField("key not found"));

        let did_key: KeyPair = key.clone().into();
        let signature = did_key.sign(Payload::Buffer(request.payload.clone()));

        Ok(SignResponse {
            message: Some(SignedMessage {
                payload: request.payload.clone(),
                signatures: vec![Signature {
                    signature,
                    header: SignatureHeader {
                        algorithm: String::from("Ed25519"),
                        key_id: key.kid.clone(),
                    }
                    .to_vec(),
                }],
            }),
        })
    }

    pub fn verify<'a>(request: &VerifyRequest) -> Result<VerifyResponse, Error<'a>> {
        let request = request.clone();

        let key = unwrap_or_return!(request.key, Error::MissingField("key is required"));
        let message = unwrap_or_return!(request.message, Error::MissingField("message is required"));
        let signature = unwrap_or_return!(message.signatures.first(), Error::MissingField("signature is required"));
        let header: SignatureHeader = map_or_return!(SignatureHeader::from_vec(&signature.header), Error::InvalidRequest);

        if header.key_id != key.kid {
            return Err(Error::Message("supplied key id doesn't match signature header"));
        }

        let did_key: KeyPair = key.into();
        let valid = did_key.verify(Payload::Buffer(message.payload), &signature.signature);

        Ok(VerifyResponse {
            is_valid: valid.map_or_else(|_| false, |_| true),
        })
    }
}

pub mod aesgcm;
pub mod xchacha;
