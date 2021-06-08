//
//  Tests.m
//  Tests
//
//  Created by Tomislav Markovski on 11/10/20.
//

#import <XCTest/XCTest.h>
#import <Okapi/DIDComm.h>
#import <Okapi/DIDKey.h>
#import <Okapi/LdProofs.h>
#import <Okapi-Proto/Keys.pbobjc.h>
#import <Okapi-Proto/Transport.pbobjc.h>
#import <Foundation/Foundation.h>
#import <Protobuf/GPBMessage.h>
#import <Protobuf/GPBStruct.pbobjc.h>

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
    request.keyType = KeyType_P256;
    
    NSError* error;
    GenerateKeyResponse* response = [DIDKey generate:request withError:&error];

    XCTAssertNotNil(response);
    XCTAssertNotNil(response.keyArray[0]);
    XCTAssertTrue(response.keyArray[0].x.length > 0);
    // XCTAssertEqual(response.keyArray[0].crv, @"P-256");
}

- (void)testSignDemo {
    GenerateKeyRequest *keyRequest = [GenerateKeyRequest message];
    keyRequest.keyType = KeyType_P256;
    
    NSError* error;
    GenerateKeyResponse *keyResponse = [DIDKey generate:keyRequest withError:&error];
    
    SignRequest *signRequest = [SignRequest message];
    signRequest.key = keyResponse.keyArray[0];
    signRequest.payload = [@"secret message" dataUsingEncoding:NSUTF8StringEncoding];
    
    SignResponse *signResponse = [DIDComm sign:signRequest withError:&error];
    
    VerifyRequest *verifyRequest = [VerifyRequest message];
    verifyRequest.key = keyResponse.keyArray[0];
    verifyRequest.message = signResponse.message;
    
    VerifyResponse *verifyResponse = [DIDComm verify:verifyRequest withError:&error];
    
    XCTAssertTrue(verifyResponse.isValid);
}

//- (void)testCreateProof {
//    CreateProofRequest *request = [CreateProofRequest message];
//    request.document = [GPBStruct message];
//}

@end
