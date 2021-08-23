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
-(NSMutableData*)assertValidKeyGenerated : (GenerateKeyResponse*) response : (NSString*) crv;
-(NSString*)base64Padding : (NSString*) str;
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
    GenerateKeyResponse* response = [bind DIDKeyGenerate:(request)];
    NSLog(@"%@", response.didDocument);
    
    NSAssert(response != NULL, @"Valid response should be returned!");
}

- (void)testGenerateKeyNoSeed {
    okapiBindings* bind = [[okapiBindings alloc] init];
    GenerateKeyRequest *request = [GenerateKeyRequest message];
    request.keyType = KeyType_Ed25519;
    GenerateKeyResponse* response = [bind DIDKeyGenerate:request];

    [self assertValidKeyGenerated:response :nil];
}

- (void)testResolveKey {
    okapiBindings* bind = [[okapiBindings alloc] init];
    NSString* key = @"did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN";
    ResolveRequest* request = [ResolveRequest message];
    request.did = key;
    ResolveResponse* response = [bind DIDKeyResolve:request];

    XCTAssertNotNil(response);
}

-(NSMutableData*)assertValidKeyGenerated : (GenerateKeyResponse*) response : (NSString*) crv {
    if (crv == nil)
        crv = @"Ed25519";
    XCTAssertNotNil(response);
    XCTAssertNotNil(response.keyArray[0]);
    XCTAssertEqualObjects(crv, response.keyArray[0].crv);
    
    NSData* x = [[NSData alloc] initWithBase64EncodedString:[self base64Padding:response.keyArray[0].x] options:NSDataBase64DecodingIgnoreUnknownCharacters];
    NSData* y = [[NSData alloc] initWithBase64EncodedString:[self base64Padding:response.keyArray[0].y] options:NSDataBase64DecodingIgnoreUnknownCharacters];
    
    NSMutableData* publicKey = [[NSMutableData alloc] initWithData:x];
    [publicKey appendData:y];

    XCTAssertNotNil(publicKey);
    XCTAssertEqual(32, publicKey.length);
    NSData* response64 = [[NSData alloc] initWithBase64EncodedString:[self base64Padding:response.keyArray[0].d] options:NSDataBase64DecodingIgnoreUnknownCharacters];
    XCTAssertNotNil(response64);
    XCTAssertEqual(32, response64.length);

    return publicKey;
}

- (NSString *)base64Padding:(NSString *)str {
    NSUInteger stringShort = str.length % 4;
    if (stringShort == 2)
        str = [str stringByAppendingString:@"=="];
    else if (stringShort == 3)
        str = [str stringByAppendingString:@"="];

    return str;
}

@end
