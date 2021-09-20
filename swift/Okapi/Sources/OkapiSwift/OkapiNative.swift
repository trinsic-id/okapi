//
// Created by Scott Phillips on 9/8/21.
//

import Foundation
import OkapiObjectiveC
import SwiftProtobuf

public enum OkapiError: Error {
    case nativeError(String)
}

typealias NativeHandler = (ByteBuffer, UnsafeMutablePointer<ByteBuffer>, UnsafeMutablePointer<ExternError>) -> Int32

struct OkapiNative {
    static func nativeCall<T_response: SwiftProtobuf.Message>(request: SwiftProtobuf.Message,
                                                              nativeFunction: NativeHandler) throws -> T_response {
        var responseBuffer = ByteBuffer();
        var errorBuffer = ExternError();
        var requestBuffer = ByteBuffer();
        var result: Int32 = 0;
        var requestData = try request.serializedData();
        requestBuffer.len = Int64(requestData.count);
        requestData.withUnsafeMutableBytes { (pointer: UnsafeMutableRawBufferPointer) in
            requestBuffer.data = pointer.bindMemory(to: UInt8.self).baseAddress!;
            result = nativeFunction(requestBuffer, &responseBuffer, &errorBuffer);
        };
        try assertNoError(result: result, errorBuffer: errorBuffer, requestBuffer: requestBuffer, responseBuffer: responseBuffer);
        let responseData = Data(bytesNoCopy: responseBuffer.data, count: Int(responseBuffer.len), deallocator: Data.Deallocator.none);
        let response = try T_response(serializedData: responseData);
        freeMemory(requestBuffer: requestBuffer, responseBuffer: responseBuffer, errorBuffer: errorBuffer);

        return response;
    }

    private static func assertNoError(result: Int32, errorBuffer: ExternError, requestBuffer: ByteBuffer, responseBuffer: ByteBuffer) throws {
        if result != 0 {
            // Error handling.
            let errorMessage = String(cString: errorBuffer.message);
            freeMemory(requestBuffer: requestBuffer, responseBuffer: responseBuffer, errorBuffer: errorBuffer);
            throw OkapiError.nativeError("Error=\(result) in native library: \(errorMessage)");
        }
    }

    private static func freeMemory(requestBuffer: ByteBuffer, responseBuffer: ByteBuffer, errorBuffer: ExternError) {
        // Proper memory cleanup
        didcomm_byte_buffer_free(responseBuffer);
        didcomm_string_free(errorBuffer.message);
    }
}
