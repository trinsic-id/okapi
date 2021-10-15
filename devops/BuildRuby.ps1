param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][string]$TestOutput = 'test_output.xml',
    [AllowNull()][string]$ArtifactName = 'windows-gnu',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

function Install-Requirements {
    gem install bundler
    gem install rspec
    bundle install
}
function Run-Tests {
    bundle exec rake
}
function Build-Package {
    $replaceLineVersion = $PackageVersion
    try {
        $replaceLineVersion = Get-RubyVersion($GitTag)
    } catch {
    } finally {
        if (-not [string]::IsNullOrWhitespace($replaceLineVersion)) {
            Set-Version -configFile "./lib/version.rb" -findLine "  VERSION =" -replaceLine "  VERSION = '${replaceLineVersion}'"
        }
        rake test
        gem build *.gemspec
    }
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../ruby"
New-Item -ItemType Directory -Path "./ruby/libs" -Force
$source = "$PSScriptRoot/../libs/$ArtifactName"
$dest = "./"
Get-ChildItem $source -Recurse | `
    Where-Object { $_.PSIsContainer -eq $False } | `
    ForEach-Object {Copy-Item -Path $_.Fullname -Destination $dest -Force} # Do the things
# Do the things
Install-Requirements
if (!$RequirementsOnly) {
    Run-Tests
    Build-Package
}
Set-Location $InvocationPath
