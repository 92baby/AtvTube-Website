# AtvTube Official Website

A responsive, bilingual (English / Simplified Chinese) static website for AtvTube and AtvTubeCobalt. It discovers the latest public GitHub release and APK asset for each configured repository.

## Before publishing

1. Open `assets/js/config.js`.
2. Confirm the GitHub repository owner and repository name for each app:
   - `releases.atvtube`
   - `releases.cobalt`
3. Set `contactEmail` to an email address you actively monitor.
4. Review `privacy.html`, `terms.html`, and `refund.html`. Replace every bracketed instruction and placeholder with accurate information. Do not publish legal policy templates unchanged.
5. Check that the configured repositories are public and that each release contains an APK asset.
6. Add real product screenshots, an accurate feature list, supported Android versions / device requirements, and the actual developer contact details before using the site for payment-provider review.

## Deploy with GitHub Pages

1. Create a new **public** GitHub repository, for example `atvtube-website`.
2. Upload the contents of this folder to the repository root (not the containing folder).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Push to the `main` branch, or run the `Deploy AtvTube website to GitHub Pages` workflow manually.
6. After the workflow succeeds, the site will be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/atvtube-website/`

The included workflow deploys the repository root as a static site.

## APK release discovery

The website calls the public GitHub REST API endpoint `/repos/{owner}/{repo}/releases/latest` from the visitor's browser. It looks for the first `.apk` asset in the latest release and links the download button directly to that asset. If no APK is found, the button links to the release page instead.

If the repository does not publish a GitHub Release, the card will show that no public release was found. A source-code archive is not an APK; publish an actual APK asset in a GitHub Release.

GitHub API unauthenticated rate limits apply. The site does not use a personal access token and must never expose one in browser JavaScript.

## Custom domain

After buying a domain, configure it in **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Add the required DNS records at your DNS provider. Once GitHub verifies the domain and HTTPS is enabled, update the site's canonical / social metadata if needed. Do not add a `CNAME` file until the final domain is selected.

## Important

- This project is a static product-information and download website. It does not process payments, issue license keys, or validate device activations.
- Do not describe lifetime access as available for purchase until the product terms, price, checkout, delivery, support and refund process are real and working.
- Do not claim that PayPal has approved the merchant account or website.
- Use genuine product screenshots and accurate product descriptions. Clearly identify the seller / developer and provide a working contact address.
