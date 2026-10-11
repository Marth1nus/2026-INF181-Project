
import MarkdownIt from 'markdown-it';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceDir = path.join(root, 'source');
const scriptsDir = path.join(root, 'scripts');
const outputDir = path.join(root, 'output');

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

try {
  await main()
}
catch (error) {
  console.error('Build failed:', error);
  process.exitCode = 1;
}

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

async function main() {
  console.log('Preparing build directory...');

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const [template, css, presentation, rationale] = await Promise.all([
    readFile(path.join(scriptsDir, 'index.template.html'), 'utf8'),
    readFile(path.join(scriptsDir, 'styles.css'), 'utf8'),
    renderMarkdown('presentation.md'),
    renderMarkdown('rationale.md'),
  ]);

  console.log('Rendering website...');

  const websiteHtml = renderTemplate(template, {
    title: 'INF1781 — Information Systems Project',
    stylesheet: `<style>${css}</style>`,
    content: presentation,
  });

  await writeFile(
    path.join(outputDir, 'presentation.html'),
    websiteHtml,
    'utf8',
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
      path: path.join(outputDir, 'rationale.pdf'),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
  } finally {
    await browser.close();
  }

  console.log('Build complete.');
  console.log('  Website: output/presentation.html');
  console.log('  PDF:     output/rationale.pdf');
}
