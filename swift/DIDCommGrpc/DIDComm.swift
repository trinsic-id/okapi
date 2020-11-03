//
//  DIDComm.swift
//  DIDCommExtensionGrpc
//
//  Created by Tomislav Markovski on 11/2/20.
//

import Foundation
import DIDCommGrpcNative

public func generateKey(request: Data) throws -> Data {
    let error: NSErrorPointer = NSErrorPointer.none
    
    return DMNative.generateKey(Data(), withError: error)
}
