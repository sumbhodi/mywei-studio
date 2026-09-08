#!/bin/zsh
# deploy.sh — ship mywei.studio (Cloudflare Pages project "mywei-studio"). Sum's word required, each time.
# Same shape as 0zcom/demo-deploy.sh: assemble dist/ from the LIVE files only, then wrangler.
# The repo root is the source; dist/ is gitignored and rebuilt every run. Art that index.html does not
# reference stays in the repo (it is his media) and out of the deploy (10 MB of it, nobody downloads it).
set -eu
BASE=${0:A:h}
DIST=$BASE/dist
rm -rf "$DIST"; mkdir -p "$DIST/art" "$DIST/docs"
cp "$BASE/index.html" "$BASE/cards.js" "$DIST/"
# the three images index.html names, and only those — grep it, don't remember it
for f in $(grep -oE "art/[a-z0-9.-]+" "$BASE/index.html" | sort -u); do cp "$BASE/$f" "$DIST/$f"; done
# his three books, snapshot copies (the Google Docs stay the live ones and the cards link to those)
cp "$BASE"/docs/*.md "$DIST/docs/"
cp "$BASE/_headers" "$DIST/" 2>/dev/null || true
date -u +%Y%m%d%H%M%S > "$DIST/build-id.txt"
du -sh "$DIST"; ls -R "$DIST" | sed 's/^/  /'
npx wrangler pages deploy "$DIST" --project-name=mywei-studio --commit-dirty=true 2>&1 | tail -4
