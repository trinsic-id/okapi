//
//  DMGrpcError.h
//  DIDCommGrpcNative
//
//  Created by Tomislav Markovski on 11/2/20.
//

#import <Foundation/Foundation.h>
#import "didcommgrpc.h"

NS_ASSUME_NONNULL_BEGIN

@interface DMGrpcError : NSObject

+ (NSError*) errorFromExternError:(ExternError *) error;

@end

NS_ASSUME_NONNULL_END
