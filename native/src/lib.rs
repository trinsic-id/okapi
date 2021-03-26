#[macro_use]
extern crate ffi_support;

define_string_destructor!(didcomm_string_free);
define_bytebuffer_destructor!(didcomm_byte_buffer_free);

use prost::{DecodeError, Message};

pub struct DIDComm {}
pub struct DIDKey {}
pub struct LdProofs {}

#[allow(clippy::ptr_arg)]
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

#[macro_use]
mod macros;
mod didcomm;
mod didkey;
#[cfg(not(target_arch = "wasm32"))]
mod ffi;
#[cfg(not(target_arch = "wasm32"))]
mod jni;
mod ldproofs;
pub mod proto;
#[cfg(test)]
mod tests;

pub mod google {
    pub mod protobuf {
        pub use crate::proto::google_protobuf::*;
    }
}

pub use proto::didcomm_messaging::*;
