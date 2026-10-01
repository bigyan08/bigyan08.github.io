#!/usr/bin/env python3
"""Refresh local CSS/JS URLs before publishing to GitHub Pages."""

from hashlib import sha256
from pathlib import Path
import re
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
PAGES = (ROOT / 'index.html', ROOT / 'literature/index.html', ROOT / 'literature/paper.html')
ASSET = re.compile(r'(?P<prefix>\b(?:src|href)=")(?P<url>[^"\s]+)(?P<suffix>")')

for page in PAGES:
    def version(match):
        url = urlsplit(match['url'])
        if url.scheme or url.netloc or not url.path.endswith(('.css', '.js')):
            return match.group(0)
        asset = (ROOT / url.path.lstrip('/') if url.path.startswith('/') else page.parent / url.path)
        digest = sha256(asset.read_bytes()).hexdigest()[:12]
        return f'{match["prefix"]}{url.path}?v={digest}{match["suffix"]}'

    original = page.read_text()
    updated = ASSET.sub(version, original)
    if updated != original:
        page.write_text(updated)
        print(f'Updated {page.relative_to(ROOT)}')
