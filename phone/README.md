# WAV PHONE

A retro pocket phone in a single web page: a 240×320 pixel LCD with switchable phone skins
(Auto / Black / Pearl / Nokia Classic / Windows Mobile / iPod / iPhone), games, a retro camera and a paint app.

**Apps:** Camera · Paint · Sky Tower · Snake · Trio Town · 2048 · Magic Sushi · Melon Merge · Gold Miner · Solitaire · Settings

## Publish with GitHub Pages

1. Create a new repository and upload everything in this folder (keep the `icons/` folder and the `.nojekyll` file).
2. In the repository go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
3. After a minute the site is live at `https://<your-name>.github.io/<repo-name>/`.

## Install on iPhone

Open the site in **Safari → Share → Add to Home Screen**. It launches full screen and works offline after the first visit.

## Updating

When you upload a new `index.html`, also change `VERSION` in `sw.js` (e.g. `wavphone-v2`) so installed copies pick up the update.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (HTML, CSS and JavaScript in one file) |
| `manifest.webmanifest` | Home-screen name, colours and icons |
| `sw.js` | Offline cache |
| `icons/` | App icons (192, 512, Apple touch icon) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

The camera needs HTTPS (GitHub Pages provides it) and camera permission in Safari.
