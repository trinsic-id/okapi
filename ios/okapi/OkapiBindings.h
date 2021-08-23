//
//  OkapiBindings.h
//  okapi
//
//  Created by Scott Phillips on 8/23/21.
//

#ifndef OkapiBindings_h
#define OkapiBindings_h

#import "okapi.h"
#import "Keys.pbobjc.h"
#import "Proofs.pbobjc.h
#import "Transport.pbobjc.h"

@interface okapiBindings : NSObject
- (PackResponse*) DIDCommPack: (PackRequest*) request;
- (UnpackResponse*) DIDCommUnpack: (UnpackRequest*) request;
- (SignResponse*) DIDCommSign: (SignRequest*) request;
- (VerifyResponse*) DIDCommVerify: (VerifyRequest*) request;

- (GenerateKeyResponse*) DIDKeyGenerate: (GenerateKeyRequest*) request;
- (ResolveResponse*) DIDKeyResolve: (ResolveRequest*) request;

- (CreateProofResponse*) LDProofsCreateProof: (CreateProofRequest*) request;
- (VerifyProofResponse*) LDProofsVerifyProof: (VerifyProofRequest*) request;
@end

#endif /* OkapiBindings_h */
