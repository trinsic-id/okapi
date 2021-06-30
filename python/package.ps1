# TODO: Activate venv if it exists
python -m pip install build
# TODO: Get release version from tag and set the setup.cfg file

# Build package
python -m build --sdist --wheel --outdir dist/ .