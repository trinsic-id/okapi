use did_key::*;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use sha2::{Digest, Sha256};
use std::convert::TryFrom;

use crate::{didcomm::Error, proto::google_protobuf::Struct, *};

const SIGNATURE_NAME: &str = "JcsEd25519Signature2020";

#[derive(Debug, Clone, Serialize, Deserialize)]
struct JcsEd25519Signature2020 {
    #[serde(flatten)]
    data: Value,
    proof: LinkedDataProof,
}

#[derive(Serialize, Deserialize, Clone, Default, Debug)]
struct LinkedDataProof {
    #[serde(rename = "verificationMethod", default = "String::default")]
    verification_method: String,
    #[serde(rename = "type", default = "String::default")]
    type_name: String,
    #[serde(rename = "signatureValue", skip_serializing_if = "Option::is_none")]
    signature_value: Option<String>,
    #[serde(flatten)]
    additional_data: Value,
}

impl crate::LdProofs {
    pub fn create_proof<'a>(request: &CreateProofRequest) -> Result<CreateProofResponse, Error<'a>> {
        let key = request.key.clone().unwrap();
        let mut unsigned_document: JcsEd25519Signature2020 = request.document.as_ref().unwrap().into();

        // create a proof that will be appended into the original document
        // with individual values filled in from the input request
        unsigned_document.proof.type_name = SIGNATURE_NAME.to_string();

        // if the verification method is not set, try to fill it with the key id
        if String::is_empty(&unsigned_document.proof.verification_method) {
            unsigned_document.proof.verification_method = key.kid;
        }

        // create a did_key from the JWK to use the signing capabilities
        let did_key = did_key::KeyPair::try_from(request.key.clone().unwrap()).unwrap();

        // sign the payload
        let data = serde_jcs::to_vec(&unsigned_document).unwrap();
        let hashed = Sha256::digest(data.as_slice());
        let hashed_slice = hashed.as_slice();
        let signature = did_key.sign(Payload::Buffer(hashed_slice.to_vec()));

        // create the signature value and append it to the previously created proof
        unsigned_document.proof.signature_value = Some(::bs58::encode(signature).into_string());

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

    use crate::{proto::google_protobuf::Struct, CreateProofRequest, JsonWebKey, LdProofs, LdSuite};

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
            suite: LdSuite::JcsEd25519Signature2020 as i32,
            document: Some(input),
        };
        let response = LdProofs::create_proof(&request).unwrap();

        println!("{}", serde_json::to_string_pretty(&response.signed_document).unwrap())
    }
}
