# AtvTube website

Static, bilingual (English / 简体中文) site for GitHub Pages. No build step.

## What you need to do

1. **Add the APKs.** Put `android-arm64.apk` and `android-arm.apk` in the `downloads/` folder.
   - GitHub allows 100 MB per file. If either file is bigger, create a GitHub Release, attach the files there,
     and set `downloads.arm64` / `downloads.arm` in `assets/js/config.js` to
     `https://github.com/OWNER/REPO/releases/latest/download/android-arm64.apk` (same for arm).
     Keep the file names identical in every release so the links never change.
2. **Set `contactEmail`** in `assets/js/config.js`. While it is empty, all contact links are hidden.
3. **Finish the legal pages.** `privacy.html`, `terms.html` and `refund.html` show highlighted `[Before publishing: …]`
   notes (in `assets/js/site.js`). Replace them with your real data practices and refund rules, and fill in the date.
4. Optional: set `version` in `config.js` (e.g. `"v1.2.3"`) to show it beside each file.

## Deploy

Upload the contents of this folder to the root of a public GitHub repository, then
Settings → Pages → Source: GitHub Actions. The included workflow deploys on push to `main`.

## Notes

- The site does not sell anything. Purchases happen only inside the app, and the copy says so.
- All text lives in `assets/js/site.js` (both languages). Colors are variables at the top of `assets/css/style.css`.
- Product name is written "AtvTube" everywhere.
