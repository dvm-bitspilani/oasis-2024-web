# Oasis 2024 preservation and loading repairs

The October refinement supersedes the earlier simulated registration behavior. The site retains Regal Roulette's original artwork, fonts, historical artist/team/gallery/archive content, responsive category art, navigation, casino animation and WebGL slot machine. Added portfolio/demo wording, fictional records and simulated registration components are removed. Desktop and mobile registration controls open the same native closed-registration dialog, with Close, Escape, native focus containment and focus return. Direct Registration and former dashboard URLs retain original roulette artwork.

The retired backend supplied no committed event or sponsor records, so those routes retain their original category artwork and headings without fabricated details. Historical document IDs and titles remain available through deliberate links to their original Drive viewers; no external PDF iframe loads when opening brochure or articles.

The events route renders on the server independently of the landing client entry. It stays on its original mobile route, selects viewport-specific artwork using picture sources, prioritizes critical art with media-scoped preloads, and preserves the original desktop entrance motion. All links warm routes on pointer, keyboard or touch intent. Home retains original slot artwork while the local 3D scene downloads; a local Suspense boundary keeps GLB loading from replacing the entire route with a loader. The GLB loads in the DOM React root before Canvas mounts, so that boundary catches failed requests independently of Fiber's error reporter. The loaded model nodes and materials pass into the original slot-machine renderer, which retains its own render boundary. Reduced motion, unsupported WebGL and context loss retain the original 2D cabinet. Local Draco decoding remains packaged from the pinned Three dependency. Original animated screen artwork remains.

Audio waits for Play and uses complete compressed Opus tracks. Secondary YouTube embeds/API initialization wait for a Play action. Original artwork/source files remain unchanged; export post-processing omits unused public copies already covered by hashed imports.

| Export measurement | Before on be1ed4c | After | Reduction |
| --- | ---: | ---: | ---: |
| Upload bytes | 37,626,249 | 29,563,096 | 21.43% |
| All JavaScript, gzip bytes | 1,113,160 | 976,662 | 12.26% |
| Three complete audio tracks, bytes | 6,973,222 | 5,558,507 | 20.29% |

Measurements cover the entire exported artifact, not a single-page network transfer. Per-route initial script totals and detailed evidence are recorded in cleanup-verification.json. Browser lab measurements are coordinated separately in the parent refinement evidence.

The locked install, production static export, TypeScript and npm check pass. ESLint has zero errors and eleven existing image/hook/config warnings. npm audit reports zero vulnerabilities. Checks cover all 23 HTML documents, HTML/CSS/dynamic-script asset URLs, original artwork, registration without form inputs, deferred media, content-hashed bootstrap files, local GLB/Draco, asset size limits, CSP and cache headers. CI now runs the export check after building.

Next 16.3.7, React 19.3.0, Fiber 9.8.1, Drei 10.7.9 and Three 0.186.1 remain pinned in the patched lockfile. Static export uses external same-origin bootstrap scripts while preserving React streaming script order. Strict CSP permits local WebAssembly/blob decoding and optional user-activated YouTube/maps resources without general JavaScript unsafe-eval or inline executable scripts. Hashed Next assets, bootstrap and hashed fonts cache immutably; HTML/RSC documents revalidate, and mutable media/models/decoder paths use a short revalidating cache.

The original full model and signature motion remain. Optional YouTube/Drive links can depend on the external provider; artwork and navigation render independently. Browser verification and publication are owned by the parent task; this repository agent commits locally without push or deployment.
