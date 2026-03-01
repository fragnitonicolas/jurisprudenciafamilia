#!/usr/bin/env bash
set -euo pipefail
cp apps/web/src/index.html docs/index.html
cp apps/web/src/styles.css docs/styles.css
echo "Synced docs/ from apps/web/src"
