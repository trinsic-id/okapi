import unittest

from trinsicokapi.librarydownloader import download_binaries


def test_download_binaries():
    # Only run this locally, it should take 20-30 seconds the first run, and instantaneous on the second.
    download_binaries()
    pass


if __name__ == '__main__':
    unittest.main()
