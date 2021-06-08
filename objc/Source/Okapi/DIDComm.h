//
//  DIDComm.h
//  DIDComm-gRPC
//
//  Created by Tomislav Markovski on 11/10/20.
//

#import <Foundation/Foundation.h>
#import "Transport.pbobjc.h"

@interface DIDComm : NSObject

+ (PackResponse *_Nullable)pack:(PackRequest *_Nonnull)request
                      withError:(NSError *_Nullable*_Nullable)error;

+ (UnpackResponse *_Nullable)unpack:(UnpackRequest *_Nonnull)request
                          withError:(NSError *_Nullable*_Nullable)error;

+ (SignResponse *_Nullable)sign:(SignRequest *_Nonnull)request
                      withError:(NSError *_Nullable*_Nullable)error;

+ (VerifyResponse *_Nullable)verify:(VerifyRequest *_Nonnull)request
                          withError:(NSError *_Nullable*_Nullable)error;

@end
