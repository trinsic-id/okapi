#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

typedef struct ByteBuffer {
  int64_t len;
  uint8_t *data;
} ByteBuffer;

typedef int32_t ErrorCode;

typedef struct ExternError {
  ErrorCode code;
  char *message;
} ExternError;

int32_t didcomm_pack(struct ByteBuffer request,
                     struct ByteBuffer *response,
                     struct ExternError *err);

int32_t didcomm_unpack(struct ByteBuffer request,
                       struct ByteBuffer *response,
                       struct ExternError *err);

int32_t didcomm_sign(struct ByteBuffer request,
                     struct ByteBuffer *response,
                     struct ExternError *err);

int32_t didcomm_verify(struct ByteBuffer request,
                       struct ByteBuffer *response,
                       struct ExternError *err);

int32_t didkey_generate(struct ByteBuffer request,
                        struct ByteBuffer *response,
                        struct ExternError *err);

int32_t didkey_resolve(struct ByteBuffer request,
                       struct ByteBuffer *response,
                       struct ExternError *err);

int32_t ldproofs_create_proof(struct ByteBuffer request,
                              struct ByteBuffer *response,
                              struct ExternError *err);

int32_t ldproofs_verify_proof(struct ByteBuffer request,
                              struct ByteBuffer *response,
                              struct ExternError *err);

int32_t oberon_create_token(struct ByteBuffer request,
                            struct ByteBuffer *response,
                            struct ExternError *err);

int32_t oberon_blind_token(struct ByteBuffer request,
                           struct ByteBuffer *response,
                           struct ExternError *err);

int32_t oberon_unblind_token(struct ByteBuffer request,
                             struct ByteBuffer *response,
                             struct ExternError *err);

int32_t oberon_create_proof(struct ByteBuffer request,
                            struct ByteBuffer *response,
                            struct ExternError *err);

int32_t oberon_verify_proof(struct ByteBuffer request,
                            struct ByteBuffer *response,
                            struct ExternError *err);

void didcomm_byte_buffer_free(struct ByteBuffer v);

void didcomm_string_free(char *s);
