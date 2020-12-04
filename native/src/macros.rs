#[macro_export]
macro_rules! base58_decode {
    ($name:expr) => {
        ::bs58::decode($name).into_vec().expect("invalid base58 string")
    };
}

macro_rules! unwrap_or_return {
    ($name:expr,$err:expr) => {
        match $name {
            Some(a) => a,
            None => return Err($err),
        }
    };
}

#[allow(unused_macros)]
macro_rules! c_impl {
    ($message:ty,$struct:ident,$func:ident,$req:expr,$res:expr,$err:expr) => {{
        // do not use `destroy_into_vec()`, it causes crash from callers
        let request = match <$message>::from_vec(&$req.as_slice().to_vec()) {
            Ok(request) => request,
            Err(_) => {
                *$err = ExternError::new_error(::ffi_support::ErrorCode::new(100), "failed to decode request");
                return 1;
            }
        };

        match crate::$struct::$func(&request) {
            Ok(request) => {
                *$res = ByteBuffer::from_vec(request.to_vec());
                *$err = ExternError::success();
                return 0;
            }
            Err(_) => {
                *$err = ExternError::new_error(::ffi_support::ErrorCode::new(100), "failed to execute function");
                return 1;
            }
        }
    };};
}

macro_rules! map_or_return {
    ($name:expr,$err:expr) => {
        match $name {
            Ok(a) => a,
            Err(_) => return Err($err),
        }
    };
}
