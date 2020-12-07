#[macro_use]
mod macros {
    macro_rules! impl_invoke {
        ($message:ty,$struct:ident,$func:ident,$request:expr) => {
            match <$message>::from_vec(&$request.to_vec()) {
                Ok(req) => $struct::$func(&req)
                    .map(|v| v.to_vec().as_slice().into())
                    .map_err(|e| JsValue::from_str(format!("error packing {:?}", e).as_str())),
                Err(e) => Err(JsValue::from_str(
                    format!("invalid request: {:?}", e).as_str(),
                )),
            }
        };
    }
}
pub mod didcomm;
pub mod didkey;
