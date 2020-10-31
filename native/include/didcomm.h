#include <stdint.h>

typedef struct {
    int64_t len;
    uint8_t *_Nullable data;
} ByteBuffer;

typedef struct {
    int32_t code;
    char* message; /* note: nullable */
} ExternError;

int32_t didcomm_generate_key(ByteBuffer request, ByteBuffer *response, ExternError *err);

int32_t didcomm_convert_key(ByteBuffer request, ByteBuffer *response, ExternError *err);

int32_t didcomm_pack(ByteBuffer request, ByteBuffer *response, ExternError *err);

int32_t didcomm_unpack(ByteBuffer request, ByteBuffer *response, ExternError *err);

int32_t didcomm_sign(ByteBuffer request, ByteBuffer *response, ExternError *err);

int32_t didcomm_verify(ByteBuffer request, ByteBuffer *response, ExternError *err);