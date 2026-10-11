
import { readFile, mkdir, rm, copyFile, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';
import { chromium } from 'playwright';
import * as archiver from 'archiver';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceDir = path.join(root, 'source');
const scriptsDir = path.join(root, 'scripts');
const distDir = path.join(root, 'dist');
const siteDir = path.join(distDir, 'presentation');

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

async function renderMarkdown(filename) {
  const source = await readFile(
    path.join(sourceDir, filename),
    'utf8',
  );

  return md.render(source);
}

function renderTemplate(template, { title, stylesheet, content }) {
  const replacements = {
    '{{TITLE}}': title,
    '{{STYLESHEET}}': stylesheet,
    '{{CONTENT}}': content,
  };

  let html = template;

  for (const [placeholder, value] of Object.entries(replacements)) {
    if (!html.includes(placeholder)) {
      throw new Error(`Missing template placeholder: ${placeholder}`);
    }

    html = html.replaceAll(placeholder, value);
  }

  return html;
}

async function createZip(directory, outputPath) {
  await new Promise((resolve, reject) => {
    const output = createWriteStream(outputPath);
    const archive = new archiver.ZipArchive({
      zlib: { level: 9 },
    });

    output.on('close', resolve);
    output.on('error', reject);
    archive.on('error', reject);

    archive.pipe(output);
    archive.directory(directory, false);
    archive.finalize();
  });
}

async function main() {
  console.log('Preparing build directory...');

  await rm(distDir, { recursive: true, force: true });
  await mkdir(siteDir, { recursive: true });

  const [template, css, presentation, rationale] = await Promise.all([
    readFile(path.join(scriptsDir, 'index.template.html'), 'utf8'),
    readFile(path.join(scriptsDir, 'styles.css'), 'utf8'),
    renderMarkdown('presentation.md'),
    renderMarkdown('rationale.md'),
  ]);

  console.log('Rendering website...');

  const websiteHtml = renderTemplate(template, {
    title: 'INF1781 — Information Systems Project',
    stylesheet: '<link rel="stylesheet" href="styles.css">',
    content: presentation,
  });

  await writeFile(
    path.join(siteDir, 'index.html'),
    websiteHtml,
    'utf8',
  );

  await copyFile(
    path.join(scriptsDir, 'styles.css'),
    path.join(siteDir, 'styles.css'),
  );

  console.log('Generating rationale PDF...');

  const rationaleHtml = renderTemplate(template, {
    title: 'INF1781 — Design Rationale',
    stylesheet: `<style>${css}</style>`,
    content: rationale,
  });

  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 900 },
    });

    await page.setContent(rationaleHtml, {
      waitUntil: 'load',
    });

    await page.pdf({
      path: path.join(distDir, 'rationale.pdf'),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
  } finally {
    await browser.close();
  }

  console.log('Creating website ZIP...');

  await createZip(siteDir, `${siteDir}.zip`);

  console.log('Build complete.');
  console.log('  PDF:      dist/rationale.pdf');
  console.log('  ZIP:      dist/presentation.zip');
  console.log('  Website:  dist/presentation/index.html');
}

main().catch((error) => {
  console.error('Build failed:', error);
  process.exitCode = 1;
});
