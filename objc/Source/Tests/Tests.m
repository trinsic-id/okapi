//
//  Tests.m
//  Tests
//
//  Created by Tomislav Markovski on 11/10/20.
//

#import <XCTest/XCTest.h>
#import <DIDComm-gRPC/DIDComm.h>
#import <DIDComm-gRPC/DIDKey.h>
#import <DIDComm-Proto/Api.pbobjc.h>
#import <Foundation/Foundation.h>

@interface Tests : XCTestCase

@end

@implementation Tests

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testGenerateKey {
    GenerateKeyRequest* request = [GenerateKeyRequest message];
    request.keyType = Crv_P256;
    
    NSError* error;
    GenerateKeyResponse* response = [DIDKey generate:request withError:&error];
    
    XCTAssertNotNil(response);
    XCTAssertNotNil(response.key);
    XCTAssertTrue(response.key.x.length > 0);
    XCTAssertTrue(response.key.crv == Crv_P256);
}

- (void)testSignDemo {
    GenerateKeyRequest *keyRequest = [GenerateKeyRequest message];
    keyRequest.keyType = Crv_P256;
    
    NSError* error;
    GenerateKeyResponse *keyResponse = [DIDKey generate:keyRequest withError:&error];
    
    SignRequest *signRequest = [SignRequest message];
    signRequest.key = keyResponse.key;
    signRequest.payload = [@"secret message" dataUsingEncoding:NSUTF8StringEncoding];
    
    SignResponse *signResponse = [DIDComm sign:signRequest withError:&error];
    
    VerifyRequest *verifyRequest = [VerifyRequest message];
    verifyRequest.key = keyResponse.key;
    verifyRequest.message = signResponse.message;
    
    VerifyResponse *verifyResponse = [DIDComm verify:verifyRequest withError:&error];
    
    XCTAssertTrue(verifyResponse.isValid);
}

@end
