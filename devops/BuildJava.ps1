param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][string]$TestOutput = 'test_output.xml',
    [AllowNull()][string]$ArtifactName = 'windows-gnu',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

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
if (!$RequirementsOnly) {
    Build-Package
}
Set-Location $InvocationPath
