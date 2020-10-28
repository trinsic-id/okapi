use crate::didcomm::*;
use ed25519_dalek::{Keypair, SecretKey};
use ed25519_dalek::{PublicKey, Signer};
use ffi_support::{ByteBuffer, FfiStr};
use prost::Message;

#[no_mangle]
pub extern "C" fn didcomm_sign_message(
    message: ByteBuffer,
    secret_key: ByteBuffer,
    key_id: FfiStr<'_>,
    signed_message: &mut ByteBuffer,
) -> i32 {
    let mut result = SignedMessage::default();
    result.payload = message.as_slice().to_vec();

    let secret: SecretKey = SecretKey::from_bytes(secret_key.as_slice()).unwrap();
    let public: PublicKey = (&secret).into();
    let keypair: Keypair = Keypair { secret, public };

    result.signatures = vec![Signature {
        signature: keypair.sign(&result.payload).to_bytes().to_vec(),
        header: encode!(&SignatureHeader {
            key_id: key_id.as_str().into(),
            algorithm: "Ed25519".into()
        }),
    }];

    *signed_message = ByteBuffer::from_vec(encode!(result));
    0
}
