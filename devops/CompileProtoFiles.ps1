function Setup()
{
    Set-Location $PSScriptRoot
}

function Get-ProtoFiles()
{
    return @(
    "../proto/examples.proto",
    "../proto/keys.proto",
    "../proto/proofs.proto",
    "../proto/security.proto",
    "../proto/transport.proto",
    "../proto/pbmse/pbmse.proto")
}

function Get-ProtoPath()
{
    return "--proto_path=../proto"
}

function Update-Golang()
{
    $GoPath = "../go/proto"
    protoc $( Get-ProtoPath ) `
         --go_out="$GoPath" `
         --go-grpc_out="$GoPath" `
         '--go_opt=paths=source_relative' `
         '--go-grpc_opt=paths=source_relative' `
         $( Get-ProtoFiles )

    # flatten hierarchy
    Copy-Item -Path "$GoPath/pbmse/*"  -Destination "$GoPath" -recurse -Force
    Remove-Item -Path "$GoPath/pbmse" -Force -Recurse
}

function Set-Require-Relative($filename)
{
    $replacePairs = @{ }
    $replacePairs["require 'keys_pb'"] = "require_relative 'keys_pb'"
    $replacePairs["require 'pbmse/pbmse_pb'"] = "require_relative 'pbmse/pbmse_pb'"
    $fileLines = Get-Content $filename
    for ($ij = 0; $ij -lt $fileLines.Length; $ij++) {
        if ( $replacePairs.ContainsKey($fileLines[$ij]))
        {
            $fileLines[$ij] = $replacePairs[$fileLines[$ij]]
        }
    }
    Set-Content -path $filename -value $fileLines
}

function Update-Ruby()
{
    $RubyPath = "../ruby/lib/okapi"
    protoc $( Get-ProtoPath ) `
       --ruby_out="$RubyPath" `
       $( Get-ProtoFiles )

    # TODO - Type specifier capability

    # Rewrite a few lines of the files for require-relative: https://github.com/protocolbuffers/protobuf/issues/1137
    Set-Require-Relative("../ruby/lib/okapi/transport_pb.rb")
    Set-Require-Relative("../ruby/lib/okapi/proofs_pb.rb")
}

function Update-Swift()
{
    protoc $( Get-ProtoPath ) `
        '--swift_out="../swift/Okapi/Sources/OkapiSwift/proto' `
        '--swift_opt=Visibility=Public' `
        $( Get-ProtoFiles )
}

function Update-Java()
{
    $JavaPath = "../java/src/main/java"
    protoc $( Get-ProtoPath ) `
        --java_out="$JavaPath" `
        $( Get-ProtoFiles )
}

Setup
Update-Golang
Update-Ruby
Update-Swift
Update-Java
# Python is handled in the BuildPython due to venv requirements
. "./BuildPython.ps1" -RequirementsOnly $true