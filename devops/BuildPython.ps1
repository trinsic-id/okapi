param
(
    [AllowNull()][string]$GitTag = '',
    [AllowNull()][string]$PackageVersion = '',
    [AllowNull()][string]$TestOutput = 'test_output.xml',
    [AllowNull()][string]$ArtifactName = 'windows-gnu',
    [AllowNull()][Boolean]$RequirementsOnly = $false
)

. "$PSScriptRoot/VersionParse.ps1"

function Activate-Venv {
    try {
        if ($IsWindows) {
             .\venv\Scripts\activate
        } else {
            ./venv/bin/activate
        }
    } catch {
    } finally {
        Write-Output (Where-Object python)
    }
}
function Install-Requirements {
    python -m pip install --upgrade pip
    python -m pip install -r requirements.txt
    python -m pip install pytest pytest-cov build

    python ./okapi/generate_proto_files.py
}
function Run-Tests {
    python -m pytest --cache-clear ./tests --junitxml=$TestOutput --cov=.
}
function Build-Package {
    $replaceLineVersion = $PackageVersion
    try {
        $replaceLineVersion = Get-PythonVersion($GitTag)
    } catch {
    } finally {
        if (-not [string]::IsNullOrWhitespace($replaceLineVersion)) {
            Set-Version -configFile "./setup.cfg" -findLine "version" -replaceLine "version = ${replaceLineVersion}"
        }
        python -m build --sdist --wheel --outdir dist/ .
    }
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../python"
Copy-Item "../libs/*" -Destination "./okapi/libs" -Recurse -Force -Container:$false
# Do the things
Activate-Venv
Install-Requirements
if (!$RequirementsOnly) {
    Run-Tests
    Build-Package
}
# Leave the venv
try {
    deactivate
} catch {
}
Set-Location $InvocationPath
