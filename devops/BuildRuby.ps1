param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
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
        gem build *.gemspec
    }
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../ruby"
New-Item -ItemType Directory -Path "./ruby/libs" -Force
Copy-Item "../libs/*" -Destination "./ruby/libs" -Recurse -Force -Container:$false
# Do the things
Install-Requirements
if (!$RequirementsOnly) {
    Run-Tests
    Build-Package
}
Set-Location $InvocationPath
