//
//  okapiTests.m
//  okapiTests
//
//  Created by Scott Phillips on 8/19/21.
//
//

#import <XCTest/XCTest.h>
#import "OkapiBindings.h"
#import "Keys.pbobjc.h"

@interface okapiTests : XCTestCase
-(void)assertValidKeyGenerated : (GenerateKeyResponse*) response : (NSString*) crv;
@end

@implementation okapiTests

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testGenerateKey {
    // Use XCTAssert and related functions to verify your tests produce the correct results.
    okapiBindings* bind = [[okapiBindings alloc] init];
    GenerateKeyRequest *request = [GenerateKeyRequest message];
    request.keyType = KeyType_Ed25519;
    static char seed[3] = {1, 2, 3};
    request.seed = [NSData dataWithBytes:seed length:3];
    GenerateKeyResponse* response = [bind DidkeyGenerate:(request)];
    NSLog(@"%@", response.didDocument);
    
    NSAssert(response != NULL, @"Valid response should be returned!");
}

-(void)assertValidKeyGenerated : (GenerateKeyResponse*) response : (NSString*) crv {
    if (crv == nil)
        crv = @"Ed25519";
    XCTAssertNotNil(response);
    XCTAssertNotNil(response.keyArray[0]);
    XCTAssertEqualObjects(crv, response.keyArray[0].crv);
}

- (void)testGenerateKeyNoSeed {
    okapiBindings* bind = [[okapiBindings alloc] init];
    GenerateKeyRequest *request = [GenerateKeyRequest message];
    request.keyType = KeyType_Ed25519;
    GenerateKeyResponse* response = [bind DidkeyGenerate:request];
    
    [self assertValidKeyGenerated:response :nil];
}

- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}

@end
