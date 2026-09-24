# WAV PHONE

A Y2K pixel phone that runs in the browser and installs as a PWA: 2MP camera, Paint, and seven retro games (Sky Tower, Snake, Trio Town, Emoji Pop, Melon Merge, Gold Miner).

## Files

```
index.html              the whole app
manifest.webmanifest    PWA manifest (name, icons, colours)
sw.js                   service worker (offline cache)
vendor/three.min.js     three.js r128, bundled so the 3D game works offline
icons/                  app icons, Apple touch icon, favicons
.nojekyll               tells GitHub Pages to serve files as-is
.github/workflows/      optional GitHub Actions deploy
```

## Publish on GitHub Pages

1. Create a new public repository, e.g. `wav-phone`.
2. Upload everything in this folder to the root of the `main` branch (keep the folder structure).
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
   - Or choose **GitHub Actions** as the source; the included workflow will deploy on every push to `main`.
4. After a minute the site is live at `https://<your-username>.github.io/wav-phone/`.

## Install on iPhone

Open the site in **Safari → Share → Add to Home Screen**. Launch it from the icon for full-screen, offline play.

On Android / Chrome, use the install prompt or **Menu → Install app**.

## Updating

After changing any file, bump `VERSION` in `sw.js` (e.g. `wav-phone-v2`) so installed copies refresh their cache. The app shows "UPDATED - RESTART APP" when a new version has been downloaded.

## Notes

- Camera and microphone need HTTPS, which GitHub Pages provides.
- Saving photos, videos and drawings uses the system share sheet on iOS (choose **Save Image / Save Video**) and a normal download elsewhere.
- Fonts load from Google Fonts on first launch and are cached for offline use after that.
- Settings and the Sky Tower city are stored in the browser's local storage. No scores are uploaded anywhere.
