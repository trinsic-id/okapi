use js_sys::Uint8Array;
use okapi::{proto::metadata::*, Metadata, MessageFormatter};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn okapi_metadata(request: Uint8Array) -> Result<Uint8Array, JsValue> {
    impl_invoke!(MetadataRequest, Metadata, get_metadata, request)
}
