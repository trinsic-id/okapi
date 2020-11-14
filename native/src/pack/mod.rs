pub struct EncryptResult {
    pub ciphertext: Vec<u8>,
    pub tag: Vec<u8>,
}
pub trait AeadSuite {
    type Err;

    fn encrypt(&self, nonce: &[u8], associated_data: &[u8], plaintext: &[u8]) -> Result<EncryptResult, Self::Err>;

    fn decrypt(&self, nonce: &[u8], associated_data: &[u8], ciphertext: &[u8], tag: &[u8]) -> Result<Vec<u8>, Self::Err>;
}

pub mod aesgcm;
pub mod xchacha;
