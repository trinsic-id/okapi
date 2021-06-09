//
//  DIDComm.m
//  DIDComm-gRPC
//
//  Created by Tomislav Markovski on 11/10/20.
//

#import "DIDComm.h"
#import "NativeFunc.h"
#import <Protobuf/GPBMessage.h>

@implementation DIDComm


+ (SignResponse *)sign:(SignRequest *)request
             withError:(NSError *_Nullable*_Nullable)error
{
    NSData* requestData = request.data;
    
    ByteBuffer req;
    req.len = requestData.length;
    req.data = (uint8_t *)[requestData bytes];

    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));

    if (didcomm_sign(req, response, err) != 0) {
        *error = [self errorFromExternError:err];
        return nil;
    }
    
    NSData* responseData = [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
    
    return [SignResponse parseFromData:responseData error:error];
}

+ (VerifyResponse *)verify:(VerifyRequest *)request
                 withError:(NSError *_Nullable*_Nullable)error
{
    NSData* requestData = request.data;
    
    ByteBuffer req;
    req.len = requestData.length;
    req.data = (uint8_t *)[requestData bytes];

    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));

    if (didcomm_verify(req, response, err) != 0) {
        *error = [self errorFromExternError:err];
        return nil;
    }
    
    NSData* responseData = [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
    
    return [VerifyResponse parseFromData:responseData error:error];
}

+ (PackResponse *)pack:(PackRequest *)request
             withError:(NSError *_Nullable*_Nullable)error
{
    NSData* requestData = request.data;
    
    ByteBuffer req;
    req.len = requestData.length;
    req.data = (uint8_t *)[requestData bytes];

    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));

    if (didcomm_pack(req, response, err) != 0) {
        *error = [self errorFromExternError:err];
    }
    
    NSData* responseData = [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
    
    return [PackResponse parseFromData:responseData error:error];
}

+ (UnpackResponse *)unpack:(UnpackRequest *)request
                 withError:(NSError *_Nullable*_Nullable)error
{
    NSData* requestData = request.data;
    
    ByteBuffer req;
    req.len = requestData.length;
    req.data = (uint8_t *)[requestData bytes];

    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));

    if (didcomm_unpack(req, response, err) != 0) {
        @throw [self errorFromExternError:err];
    }
    
    NSData* responseData = [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
    
    return [UnpackResponse parseFromData:responseData error:error];
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
