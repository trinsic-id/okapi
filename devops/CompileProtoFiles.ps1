function Setup()
{
    Set-Location $PSScriptRoot
}

function Get-Proto-Files()
{
    return @(
    "../proto/keys.proto",
    "../proto/proofs.proto",
    "../proto/transport.proto",
    "../proto/examples.proto",
    "../proto/pbmse/pbmse.proto")
}

function Get-Proto-Path()
{
    return "--proto_path=../proto"
}

function Compile-Golang()
{
    $GoPath = "../go/okapi"
    protoc $(Get-Proto-Path) --go_out="$GoPath" --go-grpc_out="$GoPath" --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative $( Get-Proto-Files )

    # flatten hierarchy
    Copy-Item -Path "$GoPath/pbmse/*"  -Destination "$GoPath" -recurse -Force
    Remove-Item -Path "$GoPath/pbmse" -Force -Recurse
}

function Set-Require-Relative($filename) {
    $replacePairs = @{}
    $replacePairs["require 'keys_pb'"] = "require_relative 'keys_pb'"
    $replacePairs["require 'pbmse/pbmse_pb'"] = "require_relative 'pbmse/pbmse_pb'"
    $fileLines = Get-Content $filename
    for ($ij = 0; $ij -lt $fileLines.Length; $ij++) {
        if ($replacePairs.ContainsKey($fileLines[$ij])) {
            $fileLines[$ij] = $replacePairs[$fileLines[$ij]]
        }
    }
    Set-Content -path $filename -value $fileLines
}

function Compile-Ruby()
{
    $RubyPath = "../ruby/lib/okapi"
    $env:RBS_PROTOBUF_BACKEND = 'google-protobuf'
    protoc $(Get-Proto-Path) `
       --ruby_out="$RubyPath" `
       $( Get-Proto-Files )

    # TODO - Type specifier capability

    # Rewrite a few lines of the files for require-relative: https://github.com/protocolbuffers/protobuf/issues/1137
    Set-Require-Relative("../ruby/lib/okapi/transport_pb.rb")
    Set-Require-Relative("../ruby/lib/okapi/proofs_pb.rb")
}

function Compile-Swift() {
    protoc $(Get-Proto-Path) --swift_out=./Sources/OkapiSwift/proto --swift_opt=Visibility=Public  $(Get-Proto-Files)
}

Setup
Compile-Golang
Compile-Ruby
Compile-Swift
# Python is handled in the BuildPython due to venv requirements
. "./BuildPython.ps1" -RequirementsOnly $true