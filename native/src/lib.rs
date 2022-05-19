extern crate core;
extern crate ffi_support;

use prost::{DecodeError, Message};

pub struct DIDComm {}
pub struct DIDKey {}
pub struct LdProofs {}
pub struct Oberon {}
pub struct Hashing {}
pub struct Metadata {}

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
pub mod didcomm;
pub mod didkey;
#[cfg(feature = "ffi")]
mod ffi;
#[cfg(feature = "hashing")]
pub mod hashing;
pub mod ldproofs;
pub mod metadata;
pub mod oberon;
pub mod proto;
#[cfg(test)]
mod tests;

pub mod google {
    pub mod protobuf {
        pub use crate::proto::google_protobuf::*;
    }
}

pub mod pbmse {
    pub mod v1 {
        pub use crate::proto::pbmse::*;
    }
    pub use crate::proto::pbmse::*;
}
