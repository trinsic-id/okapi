param($Platform, $OutLocation, $AndroidNdkHome)

$ErrorActionPreference = "Stop"

if ($null -eq $Platform) { throw "Parameter -Platform must be specified." }
if ($null -eq $OutLocation) { throw "Parameter -OutLocation must be specified." }

switch ($Platform) {
    Windows {
        cargo build --release
        Copy-Item -Path .\target\release\didcommgrpc.dll -Destination $OutLocation
        break
    }
    Linux {
        cargo build --release
        Copy-Item -Path .\target\release\libdidcommgrpc.so -Destination $OutLocation
        break
    }
    MacOS {
        cargo build --release
        Copy-Item -Path .\target\release\libdidcommgrpc.dylib -Destination $OutLocation
        break
    }
    iOS {
        mkdir $OutLocation/

        cargo install cargo-lipo
        rustup target install x86_64-apple-ios aarch64-apple-ios
        cargo lipo --release
        Copy-Item -Path "./target/universal/release/libdidcommgrpc.a" -Destination $OutLocation/
        break
    }
    Android {
        if ($null -eq $AndroidNdkHome) { throw "Parameter -AndroidNdkHome must be specified." }
        
        $AndroidNdkHome = Resolve-Path $AndroidNdkHome

        mkdir -p ~/.NDK

        & (Resolve-Path "$AndroidNdkHome/build/tools/make_standalone_toolchain.py") --api 26 --arch arm64 --install-dir ~/.NDK/arm64;
        & (Resolve-Path "$AndroidNdkHome/build/tools/make_standalone_toolchain.py") --api 26 --arch arm --install-dir ~/.NDK/arm;
        & (Resolve-Path "$AndroidNdkHome/build/tools/make_standalone_toolchain.py") --api 26 --arch x86 --install-dir ~/.NDK/x86;

        Get-Content "../devops/android-cargo-config" | Out-File "~/.cargo/config"

        rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android
        
        cargo build --target aarch64-linux-android --release
        cargo build --target armv7-linux-androideabi --release
        cargo build --target i686-linux-android --release

        mkdir -p $OutLocation/arm64-v8a/
        mkdir -p $OutLocation/armeabi-v7a/
        mkdir -p $OutLocation/x86/
        Copy-Item -Path ./target/aarch64-linux-android/release/libdidcommgrpc.so -Destination $OutLocation/arm64-v8a/
        Copy-Item -Path ./target/armv7-linux-androideabi/release/libdidcommgrpc.so -Destination $OutLocation/armeabi-v7a/
        Copy-Item -Path ./target/i686-linux-android/release/libdidcommgrpc.so -Destination $OutLocation/x86/
        break
    }
}