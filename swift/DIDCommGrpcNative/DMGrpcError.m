//
//  DMGrpcError.m
//  DIDCommGrpcNative
//
//  Created by Tomislav Markovski on 11/2/20.
//

#import "DMGrpcError.h"

static NSString *const DMGrpcErrorDomain = @"DIDCommGrpcError";

@implementation DMGrpcError

+ (NSError *)errorFromExternError:(ExternError *)error {

    NSMutableDictionary *userInfo = [NSMutableDictionary new];

    if (error->message != NULL) {
        [userInfo setValue:[NSString stringWithUTF8String:error->message] forKey:@"message"];
        free(error->message);
    }

    NSError *result = [NSError errorWithDomain:DMGrpcErrorDomain code:error->code userInfo:userInfo];
    
    free(error);
    
    return result;
}

@end
