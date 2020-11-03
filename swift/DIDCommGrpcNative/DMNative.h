//
//  DMNative.h
//  DIDCommGrpcNative
//
//  Created by Tomislav Markovski on 11/2/20.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface DMNative : NSObject

+(NSData *) generateKey:(NSData *_Nonnull)request
              withError:(NSError *_Nullable*_Nullable)error;

+(NSData *) convertKey:(NSData *_Nonnull)request
              withError:(NSError *_Nullable*_Nullable)error;

+(NSData *) pack:(NSData *_Nonnull)request
              withError:(NSError *_Nullable*_Nullable)error;

+(NSData *) unpack:(NSData *_Nonnull)request
              withError:(NSError *_Nullable*_Nullable)error;

+(NSData *) sign:(NSData *_Nonnull)request
              withError:(NSError *_Nullable*_Nullable)error;

+(NSData *) verify:(NSData *_Nonnull)request
              withError:(NSError *_Nullable*_Nullable)error;

@end

NS_ASSUME_NONNULL_END
