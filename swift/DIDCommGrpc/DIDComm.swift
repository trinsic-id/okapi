//
//  DIDComm.swift
//  DIDCommExtensionGrpc
//
//  Created by Tomislav Markovski on 11/2/20.
//

import Foundation
import DIDCommGrpcNative

enum DMError : Error {
    case runtime(String)
    case unknown
}
public func generateKey(request: Didcomm_Messaging_GenerateKeyRequest) throws -> Didcomm_Messaging_GenerateKeyResponse {
    let error: NSErrorPointer = NSErrorPointer(nilLiteral: ())
    
    let result = DMNative.generateKey(try request.serializedData(), withError: error)
    
    if (error?.pointee) != nil {
        throw DMError.runtime(error?.pointee?.userInfo["message"] as! String)
    }
    
    return try Didcomm_Messaging_GenerateKeyResponse(serializedData: result)
}

public func convertKey(request: Didcomm_Messaging_ConvertKeyRequest) throws -> Didcomm_Messaging_ConvertKeyResponse {
    let error: NSErrorPointer = NSErrorPointer(nilLiteral: ())
    
    let result = DMNative.convertKey(try request.serializedData(), withError: error)
    
    if (error?.pointee) != nil {
        throw DMError.runtime(error?.pointee?.userInfo["message"] as! String)
    }
    
    return try Didcomm_Messaging_ConvertKeyResponse(serializedData: result)
}

public func pack(request: Didcomm_Messaging_PackRequest) throws -> Didcomm_Messaging_PackResponse {
    let error: NSErrorPointer = NSErrorPointer(nilLiteral: ())
    
    let result = DMNative.pack(try request.serializedData(), withError: error)
    
    if (error?.pointee) != nil {
        throw DMError.runtime(error?.pointee?.userInfo["message"] as! String)
    }
    
    return try Didcomm_Messaging_PackResponse(serializedData: result)
}

public func unpack(request: Didcomm_Messaging_UnpackRequest) throws -> Didcomm_Messaging_UnpackResponse {
    let error: NSErrorPointer = NSErrorPointer(nilLiteral: ())
    
    let result = DMNative.unpack(try request.serializedData(), withError: error)
    
    if (error?.pointee) != nil {
        throw DMError.runtime(error?.pointee?.userInfo["message"] as! String)
    }
    
    return try Didcomm_Messaging_UnpackResponse(serializedData: result)
}

public func sign(request: Didcomm_Messaging_SignRequest) throws -> Didcomm_Messaging_SignResponse {
    let error: NSErrorPointer = NSErrorPointer(nilLiteral: ())
    
    let result = DMNative.sign(try request.serializedData(), withError: error)
    
    if (error?.pointee) != nil {
        throw DMError.runtime(error?.pointee?.userInfo["message"] as! String)
    }
    
    return try Didcomm_Messaging_SignResponse(serializedData: result)
}

public func verify(request: Didcomm_Messaging_VerifyRequest) throws -> Didcomm_Messaging_VerifyResponse {
    let error: NSErrorPointer = NSErrorPointer(nilLiteral: ())
    
    let result = DMNative.verify(try request.serializedData(), withError: error)
    
    if (error?.pointee) != nil {
        throw DMError.runtime(error?.pointee?.userInfo["message"] as! String)
    }
    
    return try Didcomm_Messaging_VerifyResponse(serializedData: result)
}
