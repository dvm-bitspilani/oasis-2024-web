import { readFile, writeFile, readdir, stat, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
let files=0,bytes=0;const policies=[];
async function walk(dir){for(const item of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory()){await walk(file);continue;}const info=await stat(file);files++;bytes+=info.size;if(info.size>25*1024*1024)throw new Error(`Cloudflare asset exceeds 25 MiB: ${file}`);if(file.endsWith('.html')){let html=await readFile(file,'utf8');
 let scriptIndex=0; const external=[]; html=html.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g, (_match, attrs, body) => { if(attrs.includes('application/ld+json')) return _match; const hash=createHash('sha256').update(body).digest('hex'); const src=`/_next/static/portfolio/${hash}.js`;external.push({src,body}); scriptIndex++; return `<script${attrs} src="${src}"></script>`; });
 await mkdir('out/_next/static/portfolio',{recursive:true}); for(const script of external) await writeFile('out'+script.src,script.body);
const hashes=new Set();for(const match of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g))hashes.add(`'sha256-${createHash('sha256').update(match[1]).digest('base64')}'`);
 const csp=`default-src 'self'; script-src 'self' ${[...hashes].join(' ')} https://www.youtube.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://i.ytimg.com; font-src 'self' data:; connect-src 'self'; media-src 'self' blob:; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://drive.google.com; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'`;

 const relative=path.relative('out',file).split(path.sep).join('/');const route=relative==='index.html'?'/':'/'+relative.replace(/\/index\.html$/,'/').replace(/\.html$/,'');policies.push(`${route}\n  Content-Security-Policy: default-src 'self'; script-src 'self' https://www.youtube.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://i.ytimg.com; frame-src https://www.youtube.com https://drive.google.com; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'\n`);
 // CSP meta also protects Cloudflare's 404 document when served at an arbitrary path.
 const metaCsp=csp.replace("; frame-ancestors 'none'",'');await writeFile(file,html.replace('<head>',`<head><meta http-equiv="Content-Security-Policy" content="${metaCsp.replaceAll('"','&quot;')}">`));
}}}
await walk('out');
await writeFile('out/_headers',`/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n\n${policies.join('\n')}`);
console.log(`Static export: ${files} files, ${(bytes/1048576).toFixed(2)} MiB; ${policies.length} route CSP policies.`);
