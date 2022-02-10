use std::convert::TryFrom;
use std::str;

use crate::{didcomm::Error, proto::okapi::okapi_hashing::*};

impl crate::Hashing {
    pub fn blake3_hash<'a>(request: &Blake3HashRequest) -> Result<Blake3HashResponse, Error<'a>> {
        let data = request.data.clone();
        // Hash the provided data
        let hash1 = blake3::hash(data.as_slice());
        Ok(Blake3HashResponse {
            output: hash1.as_bytes().to_vec(),
        })
    }

    pub fn blake3_keyed_hash<'a>(request: &Blake3HashRequest) -> Result<Blake3HashResponse, Error<'a>> {
        let key = request.key.clone().unwrap();
        // let key_vec =  unwrap_or_return!(key_chunk.next(), Error::Message("BLAKE3 key must be 32 bytes"));
        let key_slice = unwrap_or_return!(<&[u8; 32]>::try_from(key.as_slice()).ok(), Error::Message("BLAKE3 key must be 32 bytes"));
        let data = request.data.clone();
        // Hash the provided data
        let hash1 = blake3::keyed_hash(key_slice, data.as_slice());
        Ok(Blake3HashResponse {
            output: hash1.as_bytes().to_vec(),
        })
    }

    pub fn blake3_derive_key<'a>(request: &Blake3DeriveKeyRequest) -> Result<Blake3DeriveKeyResponse, Error<'a>> {
        let context = request.context.clone();
        let key_material = request.key_material.clone();
        // Hash the provided data
        let hash1 = blake3::derive_key(str::from_utf8(context.as_slice()).unwrap(), key_material.as_slice());
        Ok(Blake3DeriveKeyResponse {
            output: hash1.to_vec(),
        })
    }
}

#[cfg(test)]
mod test {
    use std::convert::TryFrom;
    use std::str;
    use crate::{Hashing, MessageFormatter};
    use crate::proto::hashing::{Blake3DeriveKeyRequest, Blake3HashRequest};

    #[test]
    fn test_blake3_hash() {
        let data = "Hello, world!";
        let request = Blake3HashRequest{data: data.as_bytes().to_vec(), key: None };
        let response = Hashing::blake3_hash(&request).unwrap();
        let hash_data = blake3::hash(data.as_bytes());
        assert_eq!(response.output.as_slice(), hash_data.as_bytes())
    }

    #[test]
    fn test_blake3_keyed_hash() {
        let data = "Hello, world!";
        let key_str = format!("{:_<32}", "4113"); // Required to be 32-bytes
        let request = Blake3HashRequest{data: data.as_bytes().to_vec(), key: Option::from(key_str.as_bytes().to_vec()) };
        let response = Hashing::blake3_keyed_hash(&request).unwrap();
        let hash_data = blake3::keyed_hash(<&[u8; 32]>::try_from(key_str.as_bytes()).unwrap(), data.as_bytes());
        assert_eq!(response.output.as_slice(), hash_data.as_bytes())
    }

    #[test]
    fn test_blake3_keyed_hash_invalid_size() {
        let data = "Hello, world!";
        let key_str = format!("{:_<16}", "4113"); // Required to be 32-bytes
        let request = Blake3HashRequest{data: data.as_bytes().to_vec(), key: Option::from(key_str.as_bytes().to_vec()) };
        assert!(Hashing::blake3_keyed_hash(&request).is_err());
    }

    #[test]
    fn test_blake3_derive_key() {
        let data = "Hello, world!";
        let context = "EARTH:USA";
        let request = Blake3DeriveKeyRequest{context: context.as_bytes().to_vec(), key_material: data.as_bytes().to_vec()};
        let response = Hashing::blake3_derive_key(&request).unwrap();
        let hash_data = blake3::derive_key(&*context, data.as_bytes());
        assert_eq!(response.output.as_slice(), hash_data)
    }
}
