param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

function Install-Requirements {
}
function Build-Package {
    $replaceLineVersion = $PackageVersion
    try {
        $replaceLineVersion = Get-JavaVersion($GitTag)
    } catch {
    } finally {
        if (-not [string]::IsNullOrWhitespace($replaceLineVersion)) {
            Set-Version -configFile "./build.gradle" -findLine "def jarVersion" -replaceLine "def jarVersion = `"${replaceLineVersion}`""
        }
        gradle build
    }
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../java"
# Do the things
Install-Requirements
if (!$RequirementsOnly) {
    Build-Package
}
Set-Location $InvocationPath
