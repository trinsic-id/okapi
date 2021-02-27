use didcommgrpc::{proto::*, *};
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn didcomm_pack(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(PackRequest, DIDComm, pack, request)
}

#[wasm_bindgen]
pub fn didcomm_unpack(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(UnpackRequest, DIDComm, unpack, request)
}

#[wasm_bindgen]
pub fn didcomm_sign(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(SignRequest, DIDComm, sign, request)
}

#[wasm_bindgen]
pub fn didcomm_verify(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(VerifyRequest, DIDComm, verify, request)
}

#[wasm_bindgen]
pub fn didcomm_resolve(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(ResolveRequest, DIDComm, resolve, request)
}