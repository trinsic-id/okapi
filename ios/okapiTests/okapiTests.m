//
//  okapiTests.m
//  okapiTests
//
//  Created by Scott Phillips on 8/19/21.
//
//

#import <XCTest/XCTest.h>
#import "OkapiBindings.h"

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

- (void)testGenerateKeyThrowsInvalidKeyType {
    okapiBindings* bind = [[okapiBindings alloc] init];
    GenerateKeyRequest* request = [GenerateKeyRequest message];
    @try
    {
        request.keyType = (KeyType) -1;
        XCTFail("This should have thrown an exception or failed at compile time");
    }
    @catch  (NSException *e){
    }
}

- (void)testGenerateKeyFromSeed {
    okapiBindings* bind = [[okapiBindings alloc] init];
    // TODO - Better test case parameterization.
    KeyType keyTypes[2] = {KeyType_Ed25519, KeyType_X25519};
    NSString* names[2] = {@"Ed25519", @"X25519"};
    NSString* seeds[2] = {@"4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578",
            @"9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5"};
    NSString* results[2] = {@"5435c3c2e18a56af75cf153aabbfff8cb0d4abcfc2e5cbb110281dfb57de1531",
            @"21206faaf739899ca30df9d0a081416a1022f72e01f5c88759083e5833fccf21"};

    for (int run = 0; run < 2; run++) {
        GenerateKeyRequest * request = [GenerateKeyRequest message];
        request.keyType = keyTypes[run];
        request.seed = [self dataFromHexString:seeds[run]];
        GenerateKeyResponse * response = [bind DIDKeyGenerate:request];

        NSData* publicKey = [self assertValidKeyGenerated:response :names[run]];
        XCTAssertEqualObjects([self dataFromHexString:results[run]], publicKey);
    }
}

-(NSMutableData*)assertValidKeyGenerated : (GenerateKeyResponse*) response : (NSString*) crv {
    if (crv == nil)
        crv = @"Ed25519";
    XCTAssertNotNil(response);
    XCTAssertNotNil(response.keyArray[0]);
    XCTAssertEqualObjects(crv, response.keyArray[0].crv);
    
    NSData* x = [[NSData alloc] initWithBase64EncodedString:[self base64Padding:response.keyArray[0].x] options:NSDataBase64Encoding64CharacterLineLength];
    NSData* y = [[NSData alloc] initWithBase64EncodedString:[self base64Padding:response.keyArray[0].y] options:NSDataBase64Encoding64CharacterLineLength];
    
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

    str = [[str stringByReplacingOccurrencesOfString:@"-" withString:@"+"] stringByReplacingOccurrencesOfString:@"_" withString:@"/"];

    return str;
}

- (NSData *)dataFromHexString:(NSString *)str {
    const char *chars = [str UTF8String];
    int i = 0, len = (int) str.length;

    NSMutableData *data = [NSMutableData dataWithCapacity:(NSUInteger) (len / 2)];
    char byteChars[3] = {'\0','\0','\0'};
    unsigned long wholeByte;

    while (i < len) {
        byteChars[0] = chars[i++];
        byteChars[1] = chars[i++];
        wholeByte = strtoul(byteChars, NULL, 16);
        [data appendBytes:&wholeByte length:1];
    }

    return data;
}


@end
