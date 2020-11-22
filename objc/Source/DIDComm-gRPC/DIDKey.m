//
//  DIDKey.m
//  DIDComm-gRPC
//
//  Created by Tomislav Markovski on 11/22/20.
//

#import "DIDKey.h"
#import "NativeFunc.h"
#import <Protobuf/GPBMessage.h>

@implementation DIDKey


+ (GenerateKeyResponse *)generate:(GenerateKeyRequest *)request
                        withError:(NSError *_Nullable*_Nullable)error;
{
    NSData* requestData = request.data;
    
    ByteBuffer req;
    req.len = requestData.length;
    req.data = (uint8_t *)[requestData bytes];

    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));

    if (didkey_generate(req, response, err) != 0) {
        *error = [self errorFromExternError:err];
        return nil;
    }
    
    NSData* responseData =[[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
    
    return [GenerateKeyResponse parseFromData:responseData error:error];
}

+ (ConvertKeyResponse *)convert:(ConvertKeyRequest *)request
                      withError:(NSError *_Nullable*_Nullable)error;
{
    NSData* requestData = request.data;
    
    ByteBuffer req;
    req.len = requestData.length;
    req.data = (uint8_t *)[requestData bytes];

    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));

    if (didkey_convert(req, response, err) != 0) {
        *error = [self errorFromExternError:err];
        return nil;
    }
    
    NSData* responseData =[[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
    
    return [ConvertKeyResponse parseFromData:responseData error:error];
}

static NSString *const DMErrorDomain = @"DIDCommError";

+ (NSError *)errorFromExternError:(ExternError *)error {

    NSMutableDictionary *userInfo = [NSMutableDictionary new];

    if (error->message != NULL) {
        [userInfo setValue:[NSString stringWithUTF8String:error->message] forKey:@"message"];
        free(error->message);
    }

    NSError *result = [NSError errorWithDomain:DMErrorDomain code:error->code userInfo:userInfo];

    free(error);

    return result;
}

@end
