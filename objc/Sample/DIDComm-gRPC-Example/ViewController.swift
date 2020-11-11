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
        
        let response = try! DIDComm.generateKey(GenerateKeyRequest())
        
        NSLog(response.description)
    }


}

