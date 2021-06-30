
function Activate-Venv() {
	param ([string]$path)
	
}
# TODO Activate venv if exists
# Setup
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m pip install pytest pytest-cov

# Run tests
python -m pytest --cache-clear ./tests --junitxml=pytest_junit.xml --cov=.

# TODO: Activate venv if it exists
python -m pip install build
# TODO: Get release version from tag and set the setup.cfg file

# Build package
python -m build --sdist --wheel --outdir dist/ .