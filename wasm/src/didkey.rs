use didcommgrpc::*;
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn didkey_generate(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(GenerateKeyRequest, DIDKey, generate, request)
}

#[wasm_bindgen]
pub fn didkey_resolve(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(ResolveRequest, DIDKey, resolve, request)
}
