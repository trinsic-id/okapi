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

@interface okapiBindings : NSObject
- (GenerateKeyResponse*) DidkeyGenerate: (GenerateKeyRequest*) request;
@end

#endif /* OkapiBindings_h */
