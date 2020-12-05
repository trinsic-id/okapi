#[macro_use]
extern crate ffi_support;

define_string_destructor!(didcomm_string_free);
define_bytebuffer_destructor!(didcomm_byte_buffer_free);

pub mod proto {
    use prost::{DecodeError, Message};

    pub trait MessageFormatter {
        fn to_vec(&self) -> Vec<u8>;
        fn from_vec<T>(data: &Vec<u8>) -> Result<T, DecodeError>
        where
            T: Message + Default;
    }

    impl<T> MessageFormatter for T
    where
        T: Message + Default,
    {
        fn to_vec(&self) -> Vec<u8> {
            let mut data = vec![];
            data.reserve(self.encoded_len());
            self.encode(&mut data).unwrap();
            data
        }

        fn from_vec<U>(data: &Vec<u8>) -> Result<U, DecodeError>
        where
            U: Message + Default,
        {
            U::decode(data.as_slice())
        }
    }

    include!(concat!(env!("OUT_DIR"), "/didcomm.messaging.rs"));
}

pub struct DIDComm {}
pub struct DIDKey {}

#[macro_use]
mod macros;
mod didcomm;
mod didkey;
#[cfg(not(target_arch = "wasm32"))]
mod ffi;
#[cfg(feature = "jni_support")]
mod jni;
#[cfg(test)]
mod tests;
