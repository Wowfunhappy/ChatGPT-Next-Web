#!/bin/bash

set -e
cd "$(dirname 0)"

docked nextchat yarn export
rm -rf electron-wrapper/src/site
cp -r out electron-wrapper/src/site
npm --prefix electron-wrapper run package-mac
./electron-wrapper/release/*-darwin-x64/*.app/Contents/MacOS/*