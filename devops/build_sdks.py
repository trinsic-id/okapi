"""
Build the various language SDK packages for release
"""
import argparse
import os

import requests


def parse_version_tag():
    raise NotImplementedError


def build_golang():
    raise NotImplementedError


def build_python():
    # TODO - Update version in setup.cfg
    # TODO - Copy in the binaries
    raise NotImplementedError





def get_github_version(github_token: str = None) -> str:
    github_token = github_token
    github_release_request = requests.get('https://api.github.com/repos/trinsic-id/okapi/releases/latest',
                                          headers={'Autorization': github_token})
    github_json = github_release_request.json()
    version = github_json['tag_name'].lstrip('v')
    return version


def parse_arguments():
    parser = argparse.ArgumentParser(description='Process SDK building')
    parser.add_argument('--git-tag', help='Git tag')
    parser.add_argument('--package-version', help='Manual override package version')
    parser.add_argument('--github-token', help='github token')
    # TODO - allow specifying what to build?


def main():
    # TODO - Get command line arguments
    # Update version information
    # Build and upload
    pass


if __name__ == "__main__":
    main()
