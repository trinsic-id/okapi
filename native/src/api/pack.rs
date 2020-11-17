use crate::{didcomm::*, pack::xchacha::XChaCha, pack::AeadSuite};
use did_key::DIDKey;
use ffi_support::{ByteBuffer, ExternError};
use prost::Message;

#[no_mangle]
pub extern "C" fn didcomm_pack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(PackRequest, request, err);
    let alg = unwrap_opt!(EncryptionAlgorithm::from_i32(req.mode), err, "invalid code");
    let aad = req.associated_data.clone();

    let receiver_key = unwrap_opt!(req.receiver_key, err, "receiver key not found");
    let sender_key = unwrap_opt!(req.sender_key, err, "sender key not found");

    let sender_did_key: DIDKey = sender_key.clone().into();
    let cek = sender_did_key.key_exchange(&receiver_key.clone().into());

    let mut nonce = [0u8; 24];
    getrandom::getrandom(&mut nonce).expect("cannot generate random seed");

    let result = unwrap!(
        match alg {
            EncryptionAlgorithm::Xchacha20poly1305 => XChaCha::from(&cek).encrypt(&nonce, &aad, &req.plaintext),
            _ => todo!(),
        },
        err,
        "encryption failed"
    );

    *response = byte_buffer!(PackResponse {
        message: Some(EncryptedMessage {
            ciphertext: result.ciphertext.clone(),
            iv: nonce.to_vec(),
            aad: aad.clone(),
            tag: result.tag.clone(),
            recipients: vec![EncryptionRecipient {
                header: Some(EncryptionHeader {
                    mode: EncryptionMode::Direct.into(),
                    algorithm: EncryptionAlgorithm::Xchacha20poly1305.into(),
                    key_id: receiver_key.key_id.clone(),
                    sender_key_id: sender_key.key_id.clone()
                }),
                content_encryption_key: vec!()
            }]
        })
    });
    *err = ExternError::success();
    0
}

#[no_mangle]
pub extern "C" fn didcomm_unpack(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    let req = request_to_message!(UnpackRequest, request, err);
    let message = unwrap_opt!(req.message, err, "message not found");
    let recipient = unwrap_opt!(message.recipients.first(), err, "recipient not found");
    let header = unwrap_opt!(&recipient.header, err, "header not found");
    let alg = unwrap_opt!(EncryptionAlgorithm::from_i32(header.algorithm), err, "invalid code");
    let mode = unwrap_opt!(EncryptionMode::from_i32(header.mode), err, "invalid code");

    let receiver_key = unwrap_opt!(req.receiver_key, err, "receiver key not found");
    let sender_key = unwrap_opt!(req.sender_key, err, "sender key not found");

    let cek = match mode {
        EncryptionMode::Direct => {
            let rec_did_key: DIDKey = receiver_key.into();
            rec_did_key.key_exchange(&sender_key.into())
        }
        _ => {
            *err = err!("unsupported encryption mode");
            return 1;
        }
    };

    let result = unwrap!(
        match alg {
            EncryptionAlgorithm::Xchacha20poly1305 => XChaCha::from(&cek).decrypt(
                message.iv.as_slice(),
                message.aad.as_slice(),
                message.ciphertext.as_slice(),
                message.tag.as_slice()
            ),
            _ => todo!(),
        },
        err,
        "encryption failed"
    );

    *response = byte_buffer!(UnpackResponse { plaintext: result.clone() });
    *err = ExternError::success();
    0
}
