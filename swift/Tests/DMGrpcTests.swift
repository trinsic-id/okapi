//
//  DMGrpcTests.swift
//  DMGrpcTests
//
//  Created by Tomislav Markovski on 11/2/20.
//

import XCTest
import DIDCommGrpc
import SwiftProtobuf

class DMGrpcTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testGenerateKeyWithRandomSeed() throws {
        var request = Didcomm_Messaging_GenerateKeyRequest()
        request.keyType = .ed25519
        
        let response = try DIDCommGrpc.generateKey(request: request)
        
        assert(response.hasKey)
        assert(response.key.publicKey.count == 32)
        assert(response.key.secretKey.count == 32)
    }
}
