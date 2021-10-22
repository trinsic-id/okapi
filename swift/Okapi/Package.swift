// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription
import Foundation

var filePath = URL(fileURLWithPath: #filePath)
        .deletingLastPathComponent()
        .appendingPathComponent("Sources")
        .appendingPathComponent("OkapiObjectiveC");
let linkFlag: String = "-L\(filePath.relativePath)";

let package = Package(
        name: "Okapi",
        platforms: [
            .iOS(.v10), .macOS(.v11)
        ],
        products: [
            // Products define the executables and libraries a package produces, and make them visible to other packages.
            .library(
                    name: "TrinsicOkapi",
                    targets: ["OkapiSwift", "OkapiObjectiveC"]),
        ],
        dependencies: [
            // Dependencies declare other packages that this package depends on.
            .package(name: "SwiftProtobuf", url: "https://github.com/apple/swift-protobuf.git", from: "1.17.0")
        ],
        targets: [
            // Targets are the basic building blocks of a package. A target can define a module or a test suite.
            // Targets can depend on other targets in this package, and on products in packages this package depends on.
            .target(
                    name: "OkapiObjectiveC",
                    dependencies: [],
                    exclude: ["libokapi.a", "libokapi_simulator.a", "libokapi_ios.a", "okapi.dll.lib", "okapi.dll"],
                    linkerSettings: [
                        LinkerSetting.linkedLibrary("okapi", .when(platforms: [.macOS])),
                        // TODO - macos builder won't flag this right
                        LinkerSetting.linkedLibrary("okapi.dll", .when(platforms: [.windows])),
                        LinkerSetting.linkedLibrary("okapi_ios", .when(platforms: [.iOS])),
                        // TODO - Support the simulator
                        LinkerSetting.unsafeFlags([linkFlag], .when(platforms: [.macOS, .iOS, .windows]))
                    ]
            ),
            .target(
                    name: "OkapiSwift",
                    dependencies: ["OkapiObjectiveC", "SwiftProtobuf"]),
            .testTarget(
                    name: "OkapiTests",
                    dependencies: ["OkapiSwift"]),
        ]
)
