param
(
    [string]$GitTag = '',
    [string]$PackageVersion = ''
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
    python -m pytest --cache-clear ./tests --junitxml=pytest_junit.xml --cov=.
}
function Set-Python-Version {
    param ([string]$pythonPackageVersion = '')
    $setupConfig = Get-Content ./setup.cfg
    for ($ij = 0; $ij -lt $setupConfig.Length; $ij++) {
        if ($setupConfig[$ij].StartsWith("version")) {
            $setupConfig[$ij] = "version = " + $pythonPackageVersion
        }
    }
    Set-Content -path ./setup.cfg -value $setupConfig
}
function Build-Package {
    try {
        # Get release version from tag and set the setup.cfg file
        $pythonPackageVersion = Get-PythonVersion($GitTag)
        Set-Python-Version($pythonPackageVersion)
    } catch {
        if ($PackageVersion -ne '') {
            Set-Python-Version($PackageVersion)
        }
    }finally {
        
        python -m build --sdist --wheel --outdir dist/ .
    }
}

# Setup
$InvocationPath = (Get-Item .).FullName
Set-Location "$PSScriptRoot/../python"
Copy-Item "../libs/*" -Destination "./okapi/libs" -Recurse -Force
# Do the things
Activate-Venv
Install-Requirements
Run-Tests
Build-Package
# Leave the venv
try {
    deactivate
} catch {
}
Set-Location $InvocationPath
