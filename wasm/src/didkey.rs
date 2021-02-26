use didcommgrpc::{proto::*, *};
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn didkey_generate(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(GenerateKeyRequest, DIDKey, generate, request)
}
/*
#[wasm_bindgen]
pub fn didkey_convert(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(ConvertKeyRequest, DIDKey, convert, request)
}
*/