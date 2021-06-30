# TODO Activate venv if exists
# Setup
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m pip install pytest pytest-cov

# Run tests
python -m pytest --cache-clear ./tests --junitxml=pytest_junit.xml --cov=.