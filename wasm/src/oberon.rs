use js_sys::Uint8Array;
use okapi::{proto::security::*, Oberon, MessageFormatter};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn oberon_create_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(CreateOberonKeyRequest, Oberon, key, request)
}

#[wasm_bindgen]
pub fn oberon_create_token(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(CreateOberonTokenRequest, Oberon, token, request)
}

#[wasm_bindgen]
pub fn oberon_create_proof(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(CreateOberonProofRequest, Oberon, proof, request)
}

#[wasm_bindgen]
pub fn oberon_verify_proof(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(VerifyOberonProofRequest, Oberon, verify, request)
}

#[wasm_bindgen]
pub fn oberon_blind_token(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(BlindOberonTokenRequest, Oberon, blind, request)
}

#[wasm_bindgen]
pub fn oberon_unblind_token(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(UnBlindOberonTokenRequest, Oberon, unblind, request)
}

#[wasm_bindgen]
pub fn oberon_verify_token(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(VerifyOberonTokenRequest, Oberon, verify_token, request)
}