param
(
    [string]$GitTag
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
		if ($IsWindows) {
			Write-Output (where python)
		} else {
			Write-Output (which python)
		}
	}
}
function Install-Requirements {
	python -m pip install --upgrade pip
	python -m pip install -r requirements.txt
	python -m pip install pytest pytest-cov build
}
function Run-Tests {
	python -m pytest --cache-clear ./tests --junitxml=pytest_junit.xml --cov=.
}
function Build-Package {
	try {
		# Get release version from tag and set the setup.cfg file
		$pythonPackageVersion = Get-PythonVersion($GitTag)
		$setupConfig = Get-Content ./setup.cfg
		for ($ij = 0; $ij -lt $setupConfig.Length; $ij++) {
			if ($setupConfig[$ij].StartsWith("version")) {
				$setupConfig[$ij] = "version = " + $pythonPackageVersion
			}
		}
		Set-Content -path ./setup.cfg -value $setupConfig
	} catch {
	}finally {
		python -m build --sdist --wheel --outdir dist/ .
	}
}

# Setup
$InvocationPath = (Get-Item .).FullName
cd "$PSScriptRoot/../python"
Copy-Item "../libs/*" -Destination "./okapi/libs" -Recurse
# Do the things
Activate-Venv
Install-Requirements
Run-Tests
Build-Package
# Leave the venv
deactivate
Set-Location $InvocationPath
