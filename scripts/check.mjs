import assert from 'node:assert/strict';
import {readdir, readFile, stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) files.push(...(entry.isDirectory() ? await walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]));
  return files;
}
const files = await walk('out');
const routes = files.filter(file => file.endsWith('.html'));
const unwanted = /Portfolio archive|Portfolio demonstration|Representative demo|showcase · demo|Fictional portfolio|Play archived|interactive demos|Demo interactions|explore demo|Demo completed/i;
for (const file of routes) {
  const html = await readFile(file, 'utf8');
  assert(!unwanted.test(html), `Added wording in ${file}`);
  assert(!/<script(?![^>]*src=)[^>]*>\s*[^<\s]/.test(html), `Inline executable script in ${file}`);
  for (const match of html.matchAll(/(?:src|href|poster)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const url = decodeURI(match[1]);
    if (!/\.(?:js|css|png|jpe?g|webp|avif|svg|woff2|pdf|opus|mp4)$/.test(url)) continue;
    assert((await stat(`out${url}`)).isFile(), `Missing resource ${url}`);
  }
  for (const match of html.matchAll(/<audio\b[^>]*>/g)) assert(match[0].includes('preload="none"'), `Audio loads before playback in ${file}`);
}
for (const file of files.filter(file => file.endsWith('.js'))) {
  const code = await readFile(file, 'utf8');
  assert(!unwanted.test(code), `Simulated content in ${file}`);
  for (const match of code.matchAll(/["'](\/[^"'#?]+\.(?:woff2|ttf|otf|png|jpe?g|webp|svg|mp4|opus|glb|pdf|wasm))["']/g)) assert((await stat(`out${decodeURI(match[1])}`)).isFile(), `Missing dynamic resource ${match[1]}`);
}
for (const file of files.filter(file => file.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/url\(["']?(\/[^)"'#?]+)(?:[?#][^)"']*)?["']?\)/g)) assert((await stat(`out${decodeURI(match[1])}`)).isFile(), `Missing stylesheet resource ${match[1]}`);
}
for (const route of ['Registration', 'dashboard']) {
  const html = await readFile(`out/${route}/index.html`, 'utf8');
  assert(html.includes('Registration is closed for this edition') && html.includes('registration-closed-title'));
  assert(!/<input|<select|visitor@example|googleSignIn/.test(html), `Registration still collects data on ${route}`);
  assert(html.includes('RouletteWheel.webp'), `Original roulette art missing on ${route}`);
}
const events = await readFile('out/events/index.html', 'utf8');
assert(!/<script[^>]*src="[^"]*\/app\/page-/.test(events), 'Events loads the landing client entry');
assert(events.includes('fetchPriority="high"') && events.includes('(min-width: 550px)'), 'Responsive critical art priority missing');
assert.equal([...events.matchAll(/<source media="\(max-width: 549px\)"/g)].length, 12, 'Category copies do not select responsive artwork');
for (const label of ['Music', 'Quizzes', 'Drama', 'Dance', 'Photography', 'Miscellaneous']) assert(events.includes(`alt="${label}"`), `Category label missing: ${label}`);
assert(!/<iframe[^>]*youtube/.test(await readFile('out/index.html', 'utf8')), 'Secondary video loads before interaction');
for (const route of ['brochure', 'articles']) {
  const html = await readFile(`out/${route}/index.html`, 'utf8');
  assert(!/<iframe[^>]*drive\.google\.com/.test(html), 'Document preview loads before interaction');
  assert(html.includes('https://drive.google.com/file/d/') && html.includes('/view'), `Original document link missing on ${route}`);
}
for (const category of ['music', 'quizzes', 'drama', 'dance', 'photography', 'misc']) {
  const html = await readFile(`out/events/${category}/index.html`, 'utf8');
  assert(html.includes(category.toUpperCase()) && html.includes(`${category.toUpperCase()} category`), `Category artwork missing for ${category}`);
  assert(!/Demonstration venue|Contact: N\/A|TBA|LoaderChip/.test(html), `Fictional details on ${category}`);
}
for (const file of await readdir('out/_next/static/bootstrap')) {
  const body = await readFile(`out/_next/static/bootstrap/${file}`);
  assert.equal(file, `${createHash('sha256').update(body).digest('hex')}.js`, 'Bootstrap filename does not match content');
}
const headers = await readFile('out/_headers', 'utf8');
assert(headers.includes("script-src 'self'") && !headers.includes("'unsafe-eval'") && !headers.includes("script-src 'unsafe-inline'"));
assert(headers.includes("'wasm-unsafe-eval'") && headers.includes("worker-src 'self' blob:"));
assert(headers.includes('/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable'));
for (const url of ['/', '/events/', '/Registration/', '/gallery/', '/shows/']) assert(headers.includes(`${url}\n  Cache-Control: public, max-age=0, must-revalidate`), `HTML cache policy missing for ${url}`);
assert(headers.split('\n').every(line => Buffer.byteLength(line) < 2000));
for (const decoder of ['draco_wasm_wrapper.js', 'draco_decoder.wasm', 'draco_decoder.js']) assert((await stat(`out/draco/${decoder}`)).size > 0);
assert((await readFile('components/Landing/Scene/SlotMachine2.tsx', 'utf8')).includes('"/draco/"'), 'Local decoder is not configured');
const model = await readFile('out/Models/uSlotM.glb');
assert.equal(model.readUInt32LE(0), 0x46546c67);
assert.equal(model.readUInt32LE(8), model.length);
assert(!/(Mobile mode|mobile-mode|Portfolio archive)/.test(await readFile('components/Landing/Scene/ProgressiveScene.tsx', 'utf8')));
console.log(`${routes.length} routes, wording removal, original category and roulette artwork, closed dialog, deferred audio, local resources, bootstrap hashes, CSP, cache headers and local Draco passed.`);
