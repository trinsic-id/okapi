//
// Created by Scott Phillips on 9/8/21.
//

import XCTest
import SwiftProtobuf
import Foundation

@testable import OkapiSwift

final class LdProofsTests: XCTestCase {
    func testGenerateCapabilityInvocationProofWithJCS() throws {
        let capabilityDictionary = ["@context": Google_Protobuf_Value(stringLiteral: "https://w3id.org/security/v2"),
                                    "target": Google_Protobuf_Value(stringLiteral: "urn:trinsic:wallets:noop"),
                                    "proof": Google_Protobuf_Value(structValue: Google_Protobuf_Struct(fields: [
                                        "created": Google_Protobuf_Value(stringLiteral:ISO8601DateFormatter().string(from: Date()))
                                    ]))
        ] as [String: Google_Protobuf_Value];
        var capabilityStruct: Google_Protobuf_Struct = Google_Protobuf_Struct();
        capabilityStruct.fields = capabilityDictionary;

        var request = Okapi_Keys_GenerateKeyRequest();
        request.keyType = Okapi_Keys_KeyType.ed25519;
        let response = try DidKey.generate(request: request);
        let signingKey = response.key.first { x in
            x.crv == "Ed25519"
        };

        var proofRequest = Okapi_Proofs_CreateProofRequest();
        proofRequest.document = capabilityStruct;
        proofRequest.key = signingKey!;
        proofRequest.suite = Okapi_Proofs_LdSuite.jcsEd25519Signature2020;

        _ = try LdProofs.createProof(request: proofRequest);
    }
}