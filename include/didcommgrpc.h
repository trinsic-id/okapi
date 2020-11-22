#include <stdint.h>

typedef struct {
    int64_t len;
    uint8_t * _Nullable data;
} ByteBuffer;

typedef struct {
    int32_t code;
    char * _Nullable message; /* note: nullable */
} ExternError;

void didcomm_string_free(char* _Nonnull string);

void didcomm_byte_buffer_free(ByteBuffer data);

int32_t didkey_generate(ByteBuffer request, ByteBuffer * _Nullable response, ExternError * _Nullable err);

int32_t didkey_convert(ByteBuffer request, ByteBuffer * _Nullable response, ExternError * _Nullable err);

int32_t didcomm_pack(ByteBuffer request, ByteBuffer * _Nullable response, ExternError * _Nullable err);

int32_t didcomm_unpack(ByteBuffer request, ByteBuffer * _Nullable response, ExternError * _Nullable err);

int32_t didcomm_sign(ByteBuffer request, ByteBuffer * _Nullable response, ExternError * _Nullable err);

int32_t didcomm_verify(ByteBuffer request, ByteBuffer * _Nullable response, ExternError * _Nullable err);