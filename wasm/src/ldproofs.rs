use js_sys::Uint8Array;
use okapi::{proto::proofs::*, LdProofs, MessageFormatter};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn ldproofs_create_proof(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(CreateProofRequest, LdProofs, create_proof, request)
}
