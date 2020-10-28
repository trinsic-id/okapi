#include <stdint.h>

typedef struct {
    int64_t len;
    uint8_t *_Nullable data;
} ByteBuffer;

typedef struct {
    int32_t code;
    char* message; /* note: nullable */
} ExternError;

int32_t didcomm_encrypt(ByteBuffer enc_key,
                        ByteBuffer nonce,
                        ByteBuffer message,
                        ByteBuffer *ciphertext,
                        ExternError *err);

int32_t didcomm_decrypt(ByteBuffer enc_key,
                        ByteBuffer nonce,
                        ByteBuffer ciphertext,
                        ByteBuffer *message,
                        ExternError *err);

int32_t didcomm_ed25519_generate_key(ByteBuffer seed,
                                     ByteBuffer *public_key,
                                     ByteBuffer *secret_key);

int32_t didcomm_pack(ByteBuffer message,
                     ByteBuffer enc_key,
                     ByteBuffer nonce,
                     ByteBuffer *encoded_message,
                     ExternError *err);
