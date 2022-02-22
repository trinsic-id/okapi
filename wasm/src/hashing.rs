use js_sys::Uint8Array;
use okapi::{proto::hashing::*, Hashing, MessageFormatter};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn blake3_hash(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Blake3HashRequest, Hashing, blake3_hash, request)
}

#[wasm_bindgen]
pub fn blake3_keyed_hash(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Blake3KeyedHashRequest, Hashing, blake3_keyed_hash, request)
}

#[wasm_bindgen]
pub fn blake3_derive_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Blake3DeriveKeyRequest, Hashing, blake3_derive_key, request)
}

#[wasm_bindgen]
pub fn sha256_hash(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Sha256HashRequest, Hashing, sha256_hash, request)
}
