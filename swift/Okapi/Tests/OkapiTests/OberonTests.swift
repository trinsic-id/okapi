//
// Created by Scott Phillips on 9/8/21.
//

import XCTest
import SwiftProtobuf
import Foundation

@testable import OkapiSwift

final class OberonTests: XCTestCase {
    func testOberonDemo() throws {
        let key = try Oberon.createKey(request: Okapi_Security_V1_CreateOberonKeyRequest())
        let data = "alice".data(using: .utf8) ?? Data()
        let nonce = "1234".data(using: .utf8) ?? Data()
        var createTokenRequest = Okapi_Security_V1_CreateOberonTokenRequest()
        createTokenRequest.data = data
        createTokenRequest.sk = key.sk
        let token = try Oberon.createToken(request: createTokenRequest)
        var createProofRequest = Okapi_Security_V1_CreateOberonProofRequest()
        createProofRequest.data = data
        createProofRequest.nonce = nonce
        createProofRequest.token = token.token
        let proof = try Oberon.createProof(request: createProofRequest)
        var verifyProofRequest = Okapi_Security_V1_VerifyOberonProofRequest()
        verifyProofRequest.data = data
        verifyProofRequest.nonce = nonce
        verifyProofRequest.pk = key.pk
        verifyProofRequest.proof = proof.proof
        let result = try Oberon.verifyProof(request: verifyProofRequest)

        XCTAssertTrue(result.valid, "Proof should verify")
    }

    func testDemoWithBlinding() throws {

    }
}