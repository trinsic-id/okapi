//
//  DMNative.m
//  DIDCommGrpcNative
//
//  Created by Tomislav Markovski on 11/2/20.
//

#import "DMNative.h"
#import "didcommgrpc.h"
#import "DMGrpcError.h"

@implementation DMNative

+ (NSData *)generateKey:(NSData *)request
              withError:(NSError *_Nullable*_Nullable)error {
                                                                                                                            
    ByteBuffer req;
    req.len = request.length;
    req.data = (uint8_t *)request.bytes;
    
    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));
                                                                                                                        
    if (didcomm_generate_key(req, response, err) != 0) {
        *error = [DMGrpcError errorFromExternError:err];
        return nil;
    }
    
    free(err);
    
    return [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
}

+ (NSData *)convertKey:(NSData *)request
              withError:(NSError *_Nullable*_Nullable)error {
                                                                                                                            
    ByteBuffer req;
    req.len = request.length;
    req.data = (uint8_t *)request.bytes;
    
    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));
                                                                                                                        
    if (didcomm_convert_key(req, response, err) != 0) {
        *error = [DMGrpcError errorFromExternError:err];
        return nil;
    }
    
    free(err);
    
    return [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
}

+ (NSData *)pack:(NSData *)request
              withError:(NSError *_Nullable*_Nullable)error {
                                                                                                                            
    ByteBuffer req;
    req.len = request.length;
    req.data = (uint8_t *)request.bytes;
    
    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));
                                                                                                                        
    if (didcomm_pack(req, response, err) != 0) {
        *error = [DMGrpcError errorFromExternError:err];
        return nil;
    }
    
    free(err);
    
    return [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
}

+ (NSData *)unpack:(NSData *)request
              withError:(NSError *_Nullable*_Nullable)error {
                                                                                                                            
    ByteBuffer req;
    req.len = request.length;
    req.data = (uint8_t *)request.bytes;
    
    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));
                                                                                                                        
    if (didcomm_unpack(req, response, err) != 0) {
        *error = [DMGrpcError errorFromExternError:err];
        return nil;
    }
    
    free(err);
    
    return [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
}

+ (NSData *)sign:(NSData *)request
              withError:(NSError *_Nullable*_Nullable)error {
                                                                                                                            
    ByteBuffer req;
    req.len = request.length;
    req.data = (uint8_t *)request.bytes;
    
    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));
                                                                                                                        
    if (didcomm_sign(req, response, err) != 0) {
        *error = [DMGrpcError errorFromExternError:err];
        return nil;
    }
    
    free(err);
    
    return [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
}

+ (NSData *)verify:(NSData *)request
              withError:(NSError *_Nullable*_Nullable)error {
                                                                                                                            
    ByteBuffer req;
    req.len = request.length;
    req.data = (uint8_t *)request.bytes;
    
    ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
    ExternError *err = (ExternError*) malloc(sizeof(ExternError));
                                                                                                                        
    if (didcomm_verify(req, response, err) != 0) {
        *error = [DMGrpcError errorFromExternError:err];
        return nil;
    }
    
    free(err);
    
    return [[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];
}

@end
