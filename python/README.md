# Trinsic Okapi SDK

Python3 bindings for the Trinsic Okapi SDK:

1. didcomm implementation in `trinsic-okapi`
3. Unit tests and examples are in `tests`

## Installation

1. `pip3 install --upgrade pip`
2. `pip3 install -r requirements.txt`
3. To find the latest binary packages, run `okapi_utils.download_binaries()`. For rate-limit increases, set the
   environment variable `API_GITHUB_TOKEN`. This will download the os/architecture binaries and install them.

## Development
1. We use [black](https://pypi.org/project/black/) to format. `pip install black`, then `black ./` in this directory
2. We use [flake8](https://flake8.pycqa.org/en/latest/user/configuration.html) to lint. `pip install flake8`, then `flake8` in this directory