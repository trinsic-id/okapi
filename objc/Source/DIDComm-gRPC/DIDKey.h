//
//  DIDKey.h
//  DIDComm-gRPC
//
//  Created by Tomislav Markovski on 11/22/20.
//

#import <Foundation/Foundation.h>
#import "Api.pbobjc.h"
#import "Security.pbobjc.h"
#import "BasicMessage.pbobjc.h"
#import "Didcomm.pbobjc.h"
#import "Didcomm.pbrpc.h"

@interface DIDKey : NSObject

+ (GenerateKeyResponse *_Nullable)generate:(GenerateKeyRequest *_Nonnull)request
                                 withError:(NSError *_Nullable*_Nullable)error;

+ (ConvertKeyResponse *_Nullable)convert:(ConvertKeyRequest *_Nonnull)request
                               withError:(NSError *_Nullable*_Nullable)error;

@end
