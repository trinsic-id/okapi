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

#[allow(unused_macros)]
macro_rules! jni_impl {
    ($message:ty,$struct:ident,$func:ident,$env:expr,$req:expr) => {{
        let request = $env.convert_byte_array($req).unwrap();

        let gen_key_req = match <$message>::from_vec(&request) {
            Ok(request) => request,
            Err(err) => {
                $env.throw_new("java/lang/Exception", format!("{:?}", err)).unwrap_or_default();
                return $env.byte_array_from_slice(&vec![].as_slice()).unwrap();
            }
        };

        let response = match crate::$struct::$func(&gen_key_req) {
            Ok(response) => response,
            Err(err) => {
                $env.throw_new("java/lang/Exception", format!("{:?}", err)).unwrap_or_default();
                return $env.byte_array_from_slice(&vec![].as_slice()).unwrap();
            }
        };

        return $env.byte_array_from_slice(&response.to_vec().as_slice()).unwrap();
    }};
}

macro_rules! map_or_return {
    ($name:expr,$err:expr) => {
        match $name {
            Ok(a) => a,
            Err(_) => return Err($err),
        }
    };
}
