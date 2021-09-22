// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription
import Foundation

var filePath = URL(fileURLWithPath: #filePath)
        .deletingLastPathComponent();
let linkFlag: String = "-L\(filePath.relativePath)";

let cPackage = Package(name: "COkapi",
        products: [
            .library(name: "COkapi", targets: ["COkapi"]),
        ],
        targets: [
            .systemLibrary(name: "COkapi")
        ])