# Oasis 2024 portfolio restoration

Restored from `dvm-bitspilani/oasis-2024-web`, branch `main`, commit `58505bab1da4e110d022b3d27559b25cfe0ba3c7`. Original casino artwork, layout, cards, team/gallery content, local audio, and 3D model are retained. Public portfolio origin: **https://oasis2024.bits-oasis.org**; Cloudflare Pages project: **dvm-portfolio-oasis-2024**.

## Baseline and changes

The baseline was Next 14.2 with OAuth/cookies, unavailable registration/event/sponsor APIs, a blocking preload observer, forced reloads, and an SSH/PM2 deployment workflow. Root inventory audit reported 48 vulnerabilities (5 critical and 24 high); see the parent workspace evidence directory. Final export contains 539 files, 23 HTML documents, ~35.16 MiB total, no missing referenced local HTML assets, and zero inline scripts. Maximum generated header line is 310 characters. Original repository content-size evidence is in `restoration-baseline.json`.

- Updated to Next 16.3.7, React 19.3, R3F 9.8.1 and Drei 10.7.9 together. A browser check caught the old reconciler failing against App Router's React runtime; the coordinated migration addresses that compatibility issue.
- Static export produces `out/`, including all six event category routes, unknown-route page, robots and sitemap. No application server, Functions, credentials, OAuth, cookies, analytics, registration calls or persistent form storage are deployed.
- Registration keeps its original form validation and roulette art. Explore-demo action uses an `example.test` address; validated submissions produce an in-memory simulated completion message. No account, payment or email is created. All substitute event, college, sponsor and publication data are visibly labelled fictional demonstrations because their historical API data were absent from the repository. Historical content that already existed remains intact.
- Converted 91 raster originals from **88.17 MiB to 8.73 MiB** using WebP at quality85 and maximum1920px dimensions. `asset-optimization.json` records each conversion. Converted the7.06MB background GIF to a1.50MB MP4. Removed the unused duplicate4.11MB GLB; the live4.12MB GLB geometry remains intact and loads in a separate scene chunk.
- Original Google font families are self-hosted as latin WOFF2 subsets (~1.42MB total), with swap behavior. Eliminated remote CSS font imports and duplicated declarations. No font network dependency remains.
- Scene code is lazy-loaded; mobile skips hidden desktop WebGL. Reduced-motion and unavailable-WebGL visitors receive the original2D slot-machine artwork. Limited render pixel ratio. Cursor particles skip coarse pointers/reduced motion. Fixed observer re-query/timeout behavior, removed artificial preload/show delays and full reload flags, and scoped contact/form GSAP animation cleanup.
- Removed legacy deployment CI. New CI only performs locked install, static build, type check, and dependency audit. Wrangler4.145.0 is pinned locally; `npm run preview` uses port4324, `npm run deploy` builds and deploys the named Pages project.
- Static export post-processing externalizes Next bootstrap scripts into hashed same-origin files. This allows strict `script-src 'self'` without unsafe-inline/eval while keeping Cloudflare header lines below its limit. CSP/meta, nosniff, frame denial, permissions restrictions and safe external links are included. Inline styles remain permitted because retained GSAP, Three HTML overlays and Ant Design generate styles dynamically.

## Verification

- `npm ci --ignore-scripts` completed against the committed lockfile; zero audit vulnerabilities.
- `npm run build`, `npm run typecheck`, and `npm run lint` pass. Lint retains warnings for legacy image elements/hook dependencies and React Compiler compatibility; there are no lint errors. React Compiler is not enabled.
- `npm audit --json` reports **zero vulnerabilities** across production/development dependencies; `security-audit.json` records the final result.
- Static output validates Cloudflare's25MiB per-asset size cap. All category routes are generated and local HTML assets resolve in the export. No backend URL, OAuth/cookie/localStorage code, forced reload, or form submission network call remains in application source.
- A pre-migration browser check identified the reconciler incompatibility; final desktop/mobile runtime and domain checks are coordinated by the parent agent after this handoff.

## Limits

YouTube videos, external social links and Google Drive archived documents remain optional external resources and can become unavailable; their iframes are lazy-loaded where applicable. The artwork/source survives independently. The runtime3D model is retained without geometry compression to preserve the original scene. CSS/GSAP legacy animations are retained; reduced-motion CSS and2D fallback cover the main intensive effects, while the parent runtime pass verifies final navigation/viewport behavior. No deployment or push was performed by this restoration agent.

Reference: [Next static export](https://nextjs.org/docs/app/guides/static-exports). Cloudflare domains/DNS and deployment are owned by the parent task.

## Final runtime repairs

Desktop browser verification renders the original WebGL slot machine and loads Vidaloka, Poppins and Playfair Display correctly. Local Draco decoding and blob texture requests are permitted by a bounded CSP; decoder files are packaged from the pinned Three dependency. Video players and the navigation map mount only after interaction. Next bootstrap scripts remain externalized; WebAssembly compilation is allowed without general JavaScript unsafe-eval. Final artifact/header checks pass. Wrangler account selection uses CLOUDFLARE_ACCOUNT_ID because Pages configuration rejects account_id. Custom-domain DNS is deferred at the user’s request.
