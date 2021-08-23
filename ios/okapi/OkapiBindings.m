//
//  OkapiBindings.m
//  okapi
//
//  Created by Scott Phillips on 8/23/21.
//

#import <Foundation/Foundation.h>
#import "OkapiBindings.h"

@implementation okapiBindings
- (GenerateKeyResponse*) DidkeyGenerate: (GenerateKeyRequest*) request {
    // Allocate byte buffers
    ByteBuffer requestBuffer = {};
    // Push data into bytebuffer
    requestBuffer.len = request.data.length;
    requestBuffer.data = request.data.bytes;
    ByteBuffer responseBuffer = {};
    ExternError errorBuffer = {};
    
    int returnValue = didkey_generate(requestBuffer, &responseBuffer, &errorBuffer);
    NSLog(@"returnValue=%d", returnValue);
    if (returnValue != 0) {
        // TODO - Error handling
        NSString* errString = [NSString stringWithUTF8String:errorBuffer.message];
        int errorCode = errorBuffer.code;
        didcomm_string_free(errorBuffer.message);
    }
    
    // Decode returned data
    NSError* error;
    NSData* data = [NSData dataWithBytes:responseBuffer.data length:responseBuffer.len];
    GenerateKeyResponse* response = [GenerateKeyResponse parseFromData:data error:&error];
    didcomm_byte_buffer_free(responseBuffer);
    return response;
}
@end
