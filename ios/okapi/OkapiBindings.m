//
//  OkapiBindings.m
//  okapi
//
//  Created by Scott Phillips on 8/23/21.
//

#import <Foundation/Foundation.h>
#import "OkapiBindings.h"

@implementation okapiBindings
- (PackResponse *)DIDCommPack:(PackRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = didcomm_pack(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    PackResponse* response = [PackResponse parseFromData:data error:&error];
    return response;
}

- (UnpackResponse *)DIDCommUnpack:(UnpackRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = didcomm_unpack(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    UnpackResponse* response = [UnpackResponse parseFromData:data error:&error];
    return response;
}

- (SignResponse *)DIDCommSign:(SignRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = didcomm_sign(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    SignResponse* response = [SignResponse parseFromData:data error:&error];
    return response;
}

- (VerifyResponse *)DIDCommVerify:(VerifyRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = didcomm_verify(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    VerifyResponse* response = [VerifyResponse parseFromData:data error:&error];
    return response;
}

- (GenerateKeyResponse*) DIDKeyGenerate: (GenerateKeyRequest*) request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = didkey_generate(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    GenerateKeyResponse* response = [GenerateKeyResponse parseFromData:data error:&error];
    return response;
}

- (ResolveResponse *)DIDKeyResolve:(ResolveRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = didkey_resolve(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    ResolveResponse* response = [ResolveResponse parseFromData:data error:&error];
    return response;
}

- (CreateProofResponse *)LDProofsCreateProof:(CreateProofRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = ldproofs_create_proof(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    CreateProofResponse* response = [CreateProofResponse parseFromData:data error:&error];
    return response;
}

- (VerifyProofResponse *)LDProofsVerifyProof:(VerifyProofRequest *)request {
    // Allocate byte buffers
    ByteBuffer* requestBuffer = [self getBuffer:request];
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};

    int returnValue = ldproofs_verify_proof(*requestBuffer, &responseBuffer, &errorBuffer);
    [self handleError:&errorBuffer returnValue:returnValue];
    NSError *error;
    NSData *data = [self getData:requestBuffer:responseBuffer];
    VerifyProofResponse* response = [VerifyProofResponse parseFromData:data error:&error];
    return response;
}

- (NSData *)getData : (ByteBuffer *)requestBuffer : (ByteBuffer)responseBuffer {
    // Decode returned data
    NSData* data = [NSData dataWithBytes:responseBuffer.data length:(NSUInteger) responseBuffer.len];
    didcomm_byte_buffer_free(responseBuffer);
    free(requestBuffer);
    return data;
}

- (ByteBuffer*)getBuffer:(GPBMessage *)request {
    // Push data into bytebuffer
    ByteBuffer* requestBuffer = (ByteBuffer*)malloc(sizeof(ByteBuffer));
    requestBuffer->len = (int64_t) request.data.length;
    requestBuffer->data = (uint8_t*)request.data.bytes;
    return requestBuffer;
}

- (void)handleError:(ExternError *)errorBuffer returnValue:(int)returnValue {
    NSLog(@"returnValue=%d", returnValue);
    if (returnValue != 0) {
        // TODO - Error handling
        NSString* errString = [NSString stringWithUTF8String:(*errorBuffer).message];
        int errorCode = (*errorBuffer).code;
        NSString* errMessageString = [NSString stringWithFormat:@"Error Code=%d Message=%@", errorCode, errString];
        NSException * exception = [[NSException alloc] initWithName:[NSString stringWithUTF8String:"OkapiException"] reason:errMessageString userInfo:nil];
        didcomm_string_free((*errorBuffer).message);
        @throw exception;
    }
}
@end
