import { readFile, writeFile, readdir, stat, mkdir, copyFile, rm } from 'node:fs/promises';
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
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://drive.google.com https://www.google.com",
  "object-src 'none'", "base-uri 'self'", "form-action 'none'",
].join('; ');
const jsonHashes = new Set();
const documentPaths = new Set(['/']);
async function walk(dir) {
  const files = [];
  for (const item of await readdir(dir, {withFileTypes: true})) {
    const file = path.join(dir, item.name);
    files.push(...(item.isDirectory() ? await walk(file) : [file]));
  }
  return files;
}
async function externalize(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { await externalize(file); continue; }
    if (!file.endsWith('.html')) continue;
    let html = await readFile(file, 'utf8');
    const scripts = [];
    const flight = [];
    html = html.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g, (match, attrs, body) => {
      if (attrs.includes('application/ld+json')) {
        jsonHashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
        return match;
      }
      if (!body.trim()) return match;
      if (!attrs.trim() && (/^\(self\.__next_f=/.test(body) || /^self\.__next_f\.push\(/.test(body))) {
        flight.push(body);
        return flight.length === 1 ? '<!--NEXT_FLIGHT_BOOTSTRAP-->' : '';
      }
      const hash = createHash('sha256').update(body).digest('hex');
      const src = `/_next/static/bootstrap/${hash}.js`;
      scripts.push({ src, body });
      return `<script${attrs} src="${src}"></script>`;
    });
    if (flight.length) {
      const body = flight.join(';\n');
      const hash = createHash('sha256').update(body).digest('hex');
      const src = `/_next/static/bootstrap/${hash}.js`;
      scripts.push({src, body});
      html = html.replace('<!--NEXT_FLIGHT_BOOTSTRAP-->', `<script src="${src}"></script>`);
    }
    const url = '/' + path.relative('out', file).split(path.sep).join('/');
    documentPaths.add(url);
    const route = url.replace(/\/index\.html$/, '/');
    documentPaths.add(route);
    if (route !== '/') documentPaths.add(route.replace(/\/$/, ''));
    await mkdir('out/_next/static/bootstrap', { recursive: true });
    for (const script of scripts) await writeFile('out' + script.src, script.body);
    html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/g, '');
    await writeFile(file, html);
  }
}
await externalize('out');

// Preserve original source assets, but upload only the public copies referenced
// by emitted code, HTML or CSS; imported art already has hashed /_next copies.
const outputText = (await Promise.all((await walk('out')).filter(file => /\.(html|js|css|json|txt)$/.test(file)).map(file => readFile(file, 'utf8')))).join('\n');
for (const source of await walk('public')) {
  const url = '/' + path.relative('public', source).split(path.sep).join('/');
  if (outputText.includes(url) || outputText.includes(encodeURI(url))) continue;
  await rm('out' + url, {force: true});
}

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
let headers = `/*
  Content-Security-Policy: ${policy}; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/Fonts/google/*
  Cache-Control: public, max-age=31536000, immutable

/*.txt
  Cache-Control: public, max-age=0, must-revalidate
`;
for (const dir of ['Audio', 'Models', 'draco', 'ProfShow', 'Registration', 'Videos']) headers += `\n/${dir}/*\n  Cache-Control: public, max-age=3600, must-revalidate\n`;
for (const url of [...documentPaths, '/sitemap.xml']) headers += `\n${url}\n  Cache-Control: public, max-age=0, must-revalidate\n`;
await writeFile('out/_headers', headers);
console.log(`Static export: ${files} files, ${(bytes / 1048576).toFixed(2)} MiB; local Draco decoder and strict CSP.`);
