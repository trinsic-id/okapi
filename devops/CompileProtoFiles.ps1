function Setup()
{
    Set-Location $PSScriptRoot
}

function Get-ProtoFiles()
{
    return @(
    "../proto/okapi/examples/v1/examples.proto",
    "../proto/okapi/keys/v1/keys.proto",
    "../proto/okapi/proofs/v1/proofs.proto",
    "../proto/okapi/security/v1/security.proto",
    "../proto/okapi/transport/v1/transport.proto",
    "../proto/pbmse/v1/pbmse.proto")
}

function Get-ProtoPath()
{
    return "--proto_path=../proto"
}

function Remove-Protofiles($protoPath)
{
    Remove-Item "$protoPath/*" -Recurse -Force
}

function Update-Golang()
{
    $GoPath = "../go/okapi/proto"
    Remove-Protofiles($GoPath)
    protoc $( Get-ProtoPath ) `
         --go_out="$GoPath" `
         --go-grpc_out="$GoPath" `
         '--go_opt=module=github.com/trinsic-id/okapi' `
         '--go-grpc_opt=module=github.com/trinsic-id/okapi' `
         $( Get-ProtoFiles )
    Remove-Item "$GoPath/examples_grpc.pb.go"
}

function Set-Require-Relative($filename)
{
    $replacePairs = @{ }
    $replacePairs["require 'okapi/keys/v1/keys_pb'"] = "require_relative '../../../okapi/keys/v1/keys_pb'"
    $replacePairs["require 'pbmse/v1/pbmse_pb'"] = "require_relative '../../../pbmse/v1/pbmse_pb'"
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
    $RubyPath = "../ruby/lib/proto"
    Remove-Protofiles($RubyPath)
    protoc $( Get-ProtoPath ) `
       --ruby_out="$RubyPath" `
       $( Get-ProtoFiles )

    # TODO - Type specifier capability

    # Rewrite a few lines of the files for require-relative: https://github.com/protocolbuffers/protobuf/issues/1137
    Set-Require-Relative("$RubyPath/okapi/transport/v1/transport_pb.rb")
    Set-Require-Relative("$RubyPath/okapi/proofs/v1/proofs_pb.rb")
    Set-Require-Relative("$RubyPath/okapi/examples/v1/examples_pb.rb")
    Set-Require-Relative("$RubyPath/okapi/security/v1/security_pb.rb")
}

function Update-Swift()
{
    $SwiftPath = "../java/src/main/java/proto"
    Remove-Protofiles($SwiftPath)
    protoc $( Get-ProtoPath ) `
        --swift_out="$SwiftPath" `
        --swift_opt="Visibility=Public" `
        $( Get-ProtoFiles )
}

function Update-Java()
{
    $JavaPath = "../java/src/main/java/proto"
    Remove-Protofiles($JavaPath)
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
