use js_sys::Uint8Array;
use okapi::{proto::hashing::*, MessageFormatter};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn blake3_hash(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Blake3HashRequest, DIDKey, generate, request)
}

#[wasm_bindgen]
pub fn blake3_keyed_hash(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Blake3KeyedHashRequest, DIDKey, resolve, request)
}

#[wasm_bindgen]
pub fn blake3_derive_key(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(Blake3DeriveKeyRequest, DIDKey, resolve, request)
}

#[wasm_bindgen]
pub fn sha256_hash(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(SHA256HashRequest, DIDKey, resolve, request)
}
