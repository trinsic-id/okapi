//
//  LdProofs.h
//  Okapi
//
//  Created by Tomislav Markovski on 6/8/21.
//

#import <Foundation/Foundation.h>
#import "Proofs.pbobjc.h"

NS_ASSUME_NONNULL_BEGIN

@interface LdProofs : NSObject

+ (CreateProofResponse *_Nullable)createProof:(CreateProofRequest *_Nonnull)request
                      withError:(NSError *_Nullable*_Nullable)error;

+ (VerifyProofResponse *_Nullable)verifyProof:(VerifyProofRequest *_Nonnull)request
                          withError:(NSError *_Nullable*_Nullable)error;


@end

NS_ASSUME_NONNULL_END
