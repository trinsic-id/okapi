# Trinsic Okapi SDK

Python3 bindings for the Trinsic Okapi SDK:

1. didcomm implementation in `trinsic-okapi`
3. Unit tests and examples are in `tests`

## Installation

1. `pip3 install --upgrade pip`
2. `pip3 install -r requirements.txt`
3. To find the latest binary packages, run `okapi_utils.download_binaries()`. For rate-limit increases, set the
   environment variable `API_GITHUB_TOKEN`. This will download the os/architecture binaries and install them.