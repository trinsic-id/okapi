#!/usr/bin/env python3

# REQ: Translates Initialize.ps1 for Linux. <>

from io import BytesIO
from json import dumps, loads
from os.path import dirname
from urllib.request import Request, urlopen
from zipfile import ZipFile

request = Request('https://api.github.com/repos/trinsic-id/okapi/releases/latest')
decoded = urlopen(request).read().decode('utf-8')
assets  = loads(decoded)['assets']
asset   = [e for e in assets if e['name'] == 'libs.zip'][0]

print(dumps(asset, indent=2, sort_keys=True))

request = Request(asset['browser_download_url'])
read    = urlopen(request).read()
bytes   = BytesIO(read)
zip     = ZipFile(bytes)

print(zip.namelist())

dir = dirname(__file__)
zip.extractall(dir)
