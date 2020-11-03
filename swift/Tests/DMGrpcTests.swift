//
//  DMGrpcTests.swift
//  DMGrpcTests
//
//  Created by Tomislav Markovski on 11/2/20.
//

import XCTest
import DIDCommGrpc

class DMGrpcTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        
        let response = try DIDCommGrpc.generateKey(request: Data())
        
        assert(response.count > 0)
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        measure {
            // Put the code you want to measure the time of here.
        }
    }

}
