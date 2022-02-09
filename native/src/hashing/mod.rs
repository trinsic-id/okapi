use hashing::*;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use sha2::{Digest, Sha256};
use std::convert::TryFrom;

use crate::{didcomm::Error, proto::okapi::okapi_hashing::*};

const SIGNATURE_NAME: &str = "JcsEd25519Signature2020";

impl crate::Hashing {
    pub fn blake3_hash<'a>(request: &Blake3HashRequest) -> Result<Blake3HashResponse, Error<'a>> {
        let key = request.key.clone().unwrap();
        let mut data = request.data.clone().unwrap();

        // Hash the provided data


        Ok(CreateProofResponse {
            signed_document: Some(unsigned_document.into()),
        })
    }

    pub fn verify_proof<'a>(_request: &VerifyProofRequest) -> Result<VerifyProofResponse, Error<'a>> {
        todo!()
    }
}

impl From<&Struct> for JcsEd25519Signature2020 {
    fn from(graph: &Struct) -> Self {
        let serialized = serde_json::to_vec(graph).unwrap();
        serde_json::from_slice(serialized.as_slice()).unwrap()
    }
}

impl From<JcsEd25519Signature2020> for Struct {
    fn from(graph: JcsEd25519Signature2020) -> Self {
        let serialized = serde_json::to_vec(&graph).unwrap();
        serde_json::from_slice(serialized.as_slice()).unwrap()
    }
}

#[cfg(test)]
mod test {
    use did_key::*;

    use crate::proto::keys::JsonWebKey;
    use crate::proto::proofs::{CreateProofRequest, LdSuite};
    use crate::{proto::google_protobuf::Struct, LdProofs};

    #[test]
    fn test_jcs_signature() {
        let key = did_key::generate::<Ed25519KeyPair>(None);
        let document = key.get_did_document(CONFIG_LD_PRIVATE);

        let jwk: JsonWebKey = key
            .get_verification_methods(CONFIG_JOSE_PRIVATE, document.id.as_str())
            .first()
            .unwrap()
            .to_owned()
            .into();

        let input: Struct = serde_json::from_str(
            r#"{
                "@context": "https://schema.org",
                "firstName": "Alice",
                "lastName": "Wonderland",
                "proof": {
                    "proofPurpose": "assertionMethod",
                    "created": "2021-03-01T20:21:34Z",
                    "capabilityChain": [ "https://example.com/caps/1" ]
                }
            }"#,
        )
            .unwrap();

        let request = CreateProofRequest {
            key: Some(jwk),
            suite: LdSuite::Jcsed25519signature2020 as i32,
            document: Some(input),
        };
        let response = LdProofs::create_proof(&request).unwrap();

        println!("{}", serde_json::to_string_pretty(&response.signed_document).unwrap())
    }
}
