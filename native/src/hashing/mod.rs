use std::convert::TryFrom;
use arrayvec::ArrayVec;
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
        let mut key_vec = ArrayVec::<u8, 32>::new();
        key_vec.copy_from_slice(request.key.as_ref().unwrap().as_slice());
        let data = request.data.clone();
        // Hash the provided data
        let hash1 = blake3::keyed_hash(<&[u8; 32]>::try_from(key_vec.as_slice()).unwrap(), data.as_slice());
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
    use crate::Hashing;
    use crate::proto::hashing::Blake3HashRequest;

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
        println!("{}", "");
    }

    #[test]
    fn test_blake3_derive_key() {
        println!("{}", "");
    }
}
