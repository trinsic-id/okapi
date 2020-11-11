//
//  DIDComm.h
//  DIDComm-gRPC
//
//  Created by Tomislav Markovski on 11/10/20.
//

#import <Foundation/Foundation.h>
#import "Api.pbobjc.h"
#import "Security.pbobjc.h"
#import "Didcomm.pbobjc.h"
#import "Didcomm.pbrpc.h"

@interface DIDComm : NSObject
/**
 * Generate new key
 **/
+ (GenerateKeyResponse *_Nullable)generateKey:(GenerateKeyRequest *_Nonnull)request
                                     withError:(NSError *_Nullable*_Nullable)error;

+ (ConvertKeyResponse *_Nullable)convertKey:(ConvertKeyRequest *_Nonnull)request
                                  withError:(NSError *_Nullable*_Nullable)error;

+ (PackResponse *_Nullable)pack:(PackRequest *_Nonnull)request
                      withError:(NSError *_Nullable*_Nullable)error;

+ (UnpackResponse *_Nullable)unpack:(UnpackRequest *_Nonnull)request
                          withError:(NSError *_Nullable*_Nullable)error;

+ (SignResponse *_Nullable)sign:(SignRequest *_Nonnull)request
                      withError:(NSError *_Nullable*_Nullable)error;

+ (VerifyResponse *_Nullable)verify:(VerifyRequest *_Nonnull)request
                          withError:(NSError *_Nullable*_Nullable)error;

@end
