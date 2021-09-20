param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

function Install-Requirements {
}
function Run-Tests {
    cd "./Okapi"
    swift build
    swift test
    cd ".."
}
function Build-Package {
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../swift"
$source = "../libs"
$dest = "./Okapi/Sources/OkapiObjectiveC"
Get-ChildItem $source -Recurse | `
    Where-Object { $_.PSIsContainer -eq $False } | `
    ForEach-Object {Copy-Item -Path $_.Fullname -Destination $dest -Force} # Do the things
Copy-Item -Path "$source/C_header/okapi.h" -Destination "$dest/include" -Force
Install-Requirements
if (!$RequirementsOnly) {
    Run-Tests
    Build-Package
}
Set-Location $InvocationPath
