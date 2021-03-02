use std::collections::HashMap;

use chrono::prelude::*;
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
    data: crate::google::protobuf::Struct,
    proof: LinkedDataProof,
}

#[derive(Serialize, Deserialize, Clone, Default, Debug)]
struct LinkedDataProof {
    #[serde(rename = "proofPurpose")]
    proof_purpose: String,
    #[serde(rename = "verificationMethod")]
    verification_method: String,
    #[serde(rename = "type")]
    type_name: String,
    created: String,
    #[serde(rename = "signatureValue", skip_serializing_if = "Option::is_none")]
    signature_value: Option<String>,
}

impl crate::LdProofs {
    pub fn create_proof<'a>(request: &CreateProofRequest) -> Result<CreateProofResponse, Error<'a>> {
        let key = request.key.clone().unwrap();

        // create a proof that will be appended into the original document
        // with individual values filled in from the input request
        let mut proof = LinkedDataProof {
            type_name: SIGNATURE_NAME.to_string(),
            verification_method: key.kid,
            proof_purpose: request.proof_purpose.to_string(),
            created: Utc::now().to_string(),
            ..Default::default()
        };

        let mut signature_doc = JcsEd25519Signature2020 {
            data: request.document.clone().unwrap(),
            proof: proof.clone(),
        };

        // create a did_key from the JWK to use the signing capabilities
        let did_key = did_key::KeyPair::try_from(request.key.clone().unwrap()).unwrap();

        // sign the payload
        let data = serde_jcs::to_vec(&signature_doc).unwrap();
        let hashed = Sha256::digest(data.as_slice());
        let hashed_slice = hashed.as_slice();
        let signature = did_key.sign(Payload::Buffer(hashed_slice.to_vec()));

        // create the signature value and append it to the previously created proof
        proof.signature_value = Some(::bs58::encode(signature).into_string());
        signature_doc.proof = proof;

        // serialize and deserialize to get the value into Struct
        let serialized = serde_json::to_vec(&signature_doc).unwrap();

        Ok(CreateProofResponse {
            signed_document: serde_json::from_slice(&serialized).unwrap(),
        })
    }

    pub fn verify_proof<'a>(request: &VerifyProofRequest) -> Result<VerifyProofResponse, Error<'a>> {
        todo!()
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
                "lastName": "Wonderland"
            }"#,
        )
        .unwrap();

        let request = CreateProofRequest {
            proof_purpose: "assertionMethod".into(),
            key: Some(jwk),
            suite: LdSuite::JcsEd25519Signature2020 as i32,
            document: Some(input),
        };
        let response = LdProofs::create_proof(&request).unwrap();

        println!("{}", serde_json::to_string_pretty(&response.signed_document).unwrap())
    }
}
