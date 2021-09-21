param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

function Install-Requirements {
    go get -u github.com/jstemmer/go-junit-report
}
function Test-Golang {
    go test -v 2>&1 | go-junit-report > test_output.xml
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
    cd "./okapi"
    Test-Golang
    Build-Package
    cd ".."
}
Set-Location $InvocationPath
