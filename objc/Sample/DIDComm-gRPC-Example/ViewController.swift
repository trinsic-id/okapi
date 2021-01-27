//
//  ViewController.swift
//  DIDComm-gRPC-Example
//
//  Created by Tomislav Markovski on 11/11/20.
//

import UIKit
import Foundation

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let keyRequest = GenerateKeyRequest()
        keyRequest.keyType = .ed25519

        let keyResponse = try! DIDKey.generate(keyRequest)
        
        let message = BasicMessage()
        message.text = "Hello Swift!"
        
        let signRequest = SignRequest()
        signRequest.payload = message.data()
        signRequest.key = keyResponse.key
        
        do {
            let signedMessage = try DIDComm.sign(signRequest)
            
            print(signedMessage.description)
        } catch {
            print("Couldn't sign the message")
        }
    }
}

