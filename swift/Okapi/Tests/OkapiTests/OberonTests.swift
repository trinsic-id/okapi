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
        let key = try Oberon.createKey(request: Okapi_Security_V1_CreateOberonKeyRequest())
        let data = "alice".data(using: .utf8) ?? Data()
        let nonce = "1234".data(using: .utf8) ?? Data()

        let issuer_2fa = "issuer code".data(using: .utf8) ?? Data()
        var tokenRequest = Okapi_Security_V1_CreateOberonTokenRequest()
        tokenRequest.data = data
        tokenRequest.sk = key.sk
        tokenRequest.blinding.append(issuer_2fa)
        let blindedToken = try Oberon.createToken(request: tokenRequest)

        // Holder unblinds the token
        var unblindRequest = Okapi_Security_V1_UnBlindOberonTokenRequest()
        unblindRequest.token = blindedToken.token
        unblindRequest.blinding.append(issuer_2fa)
        let token = try Oberon.unblindToken(request: unblindRequest)

        // Holder prepares a proof without blinding
        var createProofRequest = Okapi_Security_V1_CreateOberonProofRequest()
        createProofRequest.data = data
        createProofRequest.nonce = nonce
        createProofRequest.token = token.token
        var proof = try Oberon.createProof(request: createProofRequest)
        // Verifier verifies the proof
        var verifyProofRequest = Okapi_Security_V1_VerifyOberonProofRequest()
        verifyProofRequest.data = data
        verifyProofRequest.nonce = nonce
        verifyProofRequest.pk = key.pk
        verifyProofRequest.proof = proof.proof
        var result = try Oberon.verifyProof(request: verifyProofRequest)
        XCTAssertTrue(result.valid)

        // Holder blinds the token with a personal pin
        let userPin = "0042".data(using: .utf8) ?? Data()
        var blindRequest = Okapi_Security_V1_BlindOberonTokenRequest()
        blindRequest.token = token.token
        blindRequest.blinding.append(userPin)

        var userBlindedToken = try Oberon.blindToken(request: blindRequest)
        var proofRequest = Okapi_Security_V1_CreateOberonProofRequest()
        proofRequest.data = data
        proofRequest.nonce = nonce
        proofRequest.token = userBlindedToken.token
        // Verifier verifies the proof
        verifyProofRequest = Okapi_Security_V1_VerifyOberonProofRequest()
        verifyProofRequest.data = data
        verifyProofRequest.nonce = nonce
        verifyProofRequest.pk = key.pk
        verifyProofRequest.proof = proof.proof
        result = try Oberon.verifyProof(request: verifyProofRequest)
        XCTAssertTrue(result.valid)

        // Bad actor creates a proof with incorrect blinding pin
        let badPin = "invalid pin".data(using: .utf8) ?? Data()
        proofRequest = Okapi_Security_V1_CreateOberonProofRequest()
        proofRequest.data = data
        proofRequest.nonce = nonce
        proofRequest.token = userBlindedToken.token
        proofRequest.blinding.append(badPin)

        proof = try Oberon.createProof(request: proofRequest)
        // Verify tries to verify proof, fails
        verifyProofRequest = Okapi_Security_V1_VerifyOberonProofRequest()
        verifyProofRequest.data = data
        verifyProofRequest.nonce = nonce
        verifyProofRequest.pk = key.pk
        verifyProofRequest.proof = proof.proof
        result = try Oberon.verifyProof(request: verifyProofRequest)
        XCTAssertFalse(result.valid, "Bad actor cannot verify")
    }
}