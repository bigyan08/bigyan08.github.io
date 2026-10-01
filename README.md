# Bigyan Aryal — Portfolio

Static portfolio and literature notes, published with GitHub Pages.

## Preview

Run `python3 -m http.server 8765` from this directory, then open
<http://localhost:8765/>.

## Publish changes

After editing CSS or JavaScript, run:

```sh
python3 tools/version-assets.py
```

Commit the updated HTML along with the changed assets, then push as usual.
The script adds a content hash to each local CSS and JavaScript URL across all
three pages. This prevents returning visitors from combining new HTML with
older cached styles or scripts. It requires only Python's standard library;
GitHub Pages needs no build step.

The custom domain is served through Cloudflare. If an old page remains visible
after deployment, reload it after GitHub Pages finishes publishing; cached HTML
may take a few minutes to refresh.
