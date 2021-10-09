#!/bin/bash

DEST="~/Library/Application\ Support/espanso/packages"

echo "DEST = $DEST"

cp -r Templater $DEST > /dev/null 2>&1

echo "Deployed to $DEST"

