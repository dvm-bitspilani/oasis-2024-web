import { readFile, writeFile, readdir, stat, mkdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

// Use the shipped decoder instead of Drei's remote CDN default.
await mkdir('out/draco', { recursive: true });
for (const name of ['draco_wasm_wrapper.js', 'draco_decoder.wasm', 'draco_decoder.js']) {
  await copyFile(`node_modules/three/examples/jsm/libs/draco/gltf/${name}`, `out/draco/${name}`);
}
const basePolicy = [
  "default-src 'self'",
  "script-src 'self' 'wasm-unsafe-eval' https://www.youtube.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com",
  "font-src 'self' data:", "connect-src 'self' blob:", "worker-src 'self' blob:",
  "media-src 'self' blob:",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://drive.google.com https://www.google.com",
  "object-src 'none'", "base-uri 'self'", "form-action 'none'",
].join('; ');
const jsonHashes = new Set();
async function externalize(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { await externalize(file); continue; }
    if (!file.endsWith('.html')) continue;
    let html = await readFile(file, 'utf8');
    const scripts = [];
    html = html.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g, (match, attrs, body) => {
      if (attrs.includes('application/ld+json')) {
        jsonHashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
        return match;
      }
      const hash = createHash('sha256').update(body).digest('hex');
      const src = `/_next/static/portfolio/${hash}.js`;
      scripts.push({ src, body });
      return `<script${attrs} src="${src}"></script>`;
    });
    await mkdir('out/_next/static/portfolio', { recursive: true });
    for (const script of scripts) await writeFile('out' + script.src, script.body);
    html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/g, '');
    await writeFile(file, html);
  }
}
await externalize('out');

// A single policy covers clean URLs and error responses without conflicting policies.
const policy = basePolicy.replace("script-src 'self'", `script-src 'self' ${[...jsonHashes].join(' ')}`);
if (Buffer.byteLength('  Content-Security-Policy: ' + policy) > 2000) throw new Error('CSP exceeds Cloudflare header size limit');
let files = 0, bytes = 0;
async function finalize(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { await finalize(file); continue; }
    if (file.endsWith('.html')) {
      const html = await readFile(file, 'utf8');
      await writeFile(file, html.replace('<head>', `<head><meta http-equiv="Content-Security-Policy" content="${policy.replaceAll('"', '&quot;')}">`));
    }
    const info = await stat(file);
    if (info.size > 25 * 1024 * 1024) throw new Error(`Cloudflare asset exceeds 25 MiB: ${file}`);
    files++; bytes += info.size;
  }
}
await finalize('out');
await writeFile('out/_headers', `/*\n  Content-Security-Policy: ${policy}; frame-ancestors 'none'\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()\n\n/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
console.log(`Static export: ${files} files, ${(bytes / 1048576).toFixed(2)} MiB; local Draco decoder and strict CSP.`);
