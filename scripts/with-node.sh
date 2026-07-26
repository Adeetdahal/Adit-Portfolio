#!/usr/bin/env bash
# Forces the Node version pinned in .nvmrc regardless of the shell's active
# Node, then runs the given command with the OpenSSL legacy provider enabled
# (required for this project's webpack 4/5-era Next.js on Node 17+).
set -e

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  \. "$NVM_DIR/nvm.sh"
  nvm use --silent
fi

export NODE_OPTIONS="--openssl-legacy-provider"
exec "$@"
