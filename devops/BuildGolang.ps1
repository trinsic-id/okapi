param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

function Install-Requirements {
    go get github.com/tebeka/go2xunit
}
function Run-Tests {
    cd "./okapi"
    go test -v | go2xunit > test_output.xml
    cd ".."
}
function Build-Package {
    $replaceLineVersion = $PackageVersion
    try {
        $replaceLineVersion = Get-GolangVersion($GitTag)
    } catch {
    } finally {
        go build
    }
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../go"
$source = "../libs"
$dest = "./okapi"
Get-ChildItem $source -Recurse | `
    Where-Object { $_.PSIsContainer -eq $False } | `
    ForEach-Object {Copy-Item -Path $_.Fullname -Destination $dest -Force} # Do the things
Install-Requirements
if (!$RequirementsOnly) {
    Run-Tests
    Build-Package
}
Set-Location $InvocationPath
