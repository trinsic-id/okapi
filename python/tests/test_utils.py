import unittest

from okapi.okapi_utils import download_binaries


class UtilitiesTests(unittest.TestCase):
    def test_download_binaries(self):
        # Only run this locally, it should take 20-30 seconds the first run, and instantaneous on the second.
        download_binaries(False)
        pass


if __name__ == '__main__':
    unittest.main()
