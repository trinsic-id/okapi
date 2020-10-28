macro_rules! encode {
    ($input:expr) => {{
        let mut buf = vec![];
        buf.reserve($input.encoded_len());
        $input.encode(&mut buf).unwrap();
        buf
    }};
}

macro_rules! byte_buffer {
    () => {
        ::ffi_support::ByteBuffer::default()
    };
    ($input:expr) => {{
        let mut buf = vec![];
        buf.reserve($input.encoded_len());
        $input.encode(&mut buf).unwrap();
        ::ffi_support::ByteBuffer::from_vec(buf)
    }};
}

macro_rules! err {
    () => {
        ::ffi_support::ExternError::success()
    };
    ($code:expr,$message:expr) => {
        ::ffi_support::ExternError::new_error(::ffi_support::ErrorCode::new($code), $message);
    };
}

#[macro_export]
macro_rules! base58_decode {
    ($name:expr) => {
        bs58::decode($name)
            .into_vec()
            .expect("invalid base58 string")
    };
}

#[macro_export]
macro_rules! base58_encode {
    ($name:expr) => {
        bs58::encode($name).into_string()
    };
}

macro_rules! unwrap {
    ($name:expr,$err:expr) => {
        match $name {
            Ok(a) => a,
            Err(_) => {
                *$err = err!(100, "Can't unwrap result");
                return 1;
            }
        }
    };
}

/// Convert a `ByteBuffer` to specific protobuf struct
macro_rules! request_to_message {
    ($message:ty,$request:expr,$err:expr) => {
        match <$message>::decode($request.as_slice()) {
            Ok(x) => x,
            Err(_) => {
                *$err = err!(100, "cannot decode request");
                return 1;
            }
        };
    };
    ($message:ty,$request:expr) => {
        match <$message>::decode($request.as_slice()) {
            Ok(x) => x,
            Err(_) => panic!("Can't decode")
        };
    };
}
