// Service feature catalogue - review deck.
// Source of truth: design-kit/feature-catalogue.md (edit there, then rebuild).
// Run: node deliverables/16-feature-catalogue.build.js [out.pptx]

const fs = require('fs');
const path = require('path');
const pptxgen = require('pptxgenjs');

const SRC = path.join(__dirname, '..', 'design-kit', 'feature-catalogue.md');
const OUT = process.argv[2] || path.join(__dirname, '16-feature-catalogue-review.pptx');
const MAX_ROWS = 11; // rows per table slide before it splits (split evenly)

// FoS palette (as 14-work-to-be-done-catalogue.build.js)
const C = {
  green: '1A9B4A', greenDk: '126E35', lime: 'B5D334', ink: '1D1D1D', slate: '52525B',
  mint: 'E8F5EC', white: 'FFFFFF', line: 'D7DDD9', amber: 'B06A00', card: 'F4F8F5', faint: '8A8F8C',
};
const HEAD = 'Cambria', BODY = 'Calibri';

// ---------------------------------------------------------------- parse the markdown
const clean = (s) => s
  .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
  .replace(/\[\[([^\]]+)\]\]/g, (m, a) => a.split('/').pop())
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/\*\*([^*]+)\*\*/g, '$1')
  .replace(/\*([^*]+)\*/g, '$1')
  .trim();

const md = fs.readFileSync(SRC, 'utf8').replace(/^---[\s\S]*?---\n/, '');
const sections = md.split(/\n(?=## )/).filter((s) => s.startsWith('## ')).map((block) => {
  const lines = block.split('\n');
  const title = lines[0].replace(/^## /, '').trim();
  const rows = [];
  const paras = [];
  let buf = [];
  const flush = () => { if (buf.length) { paras.push(buf.join(' ')); buf = []; } };
  for (const l of lines.slice(1)) {
    if (/^\|/.test(l)) {
      flush();
      const cells = l.split('|').slice(1, -1).map((c) => c.trim());
      if (/^-+$/.test(cells[0]) || cells[0] === 'ID') continue;
      rows.push(cells);
    } else if (l.trim() === '' || l.trim() === '---') flush();
    else { if (/^(\d+\.|-)\s/.test(l.trim())) flush(); buf.push(l.trim()); }
  }
  flush();
  return { title, rows, paras };
});
const get = (t) => sections.find((s) => s.title === t);

const FEATURE_SECTIONS = sections.filter((s) => s.rows.length && /^[A-Z0-9]+-\d+$/.test(s.rows[0][0]));

// ---------------------------------------------------------------- deck
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pres.title = 'Service feature catalogue - review';
pres.theme = { headFontFace: HEAD, bodyFontFace: BODY };

pres.defineSlideMaster({
  title: 'CONTENT',
  background: { color: C.white },
  objects: [
    { text: { text: 'Service feature catalogue · draft for review · 2026-10-08',
      options: { x: 0.5, y: 7.05, w: 8, h: 0.3, fontSize: 10, color: C.faint, fontFace: BODY, margin: 0 } } },
  ],
  slideNumber: { x: 12.3, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: C.faint, fontFace: BODY, align: 'right' },
});
pres.defineSlideMaster({ title: 'DARK', background: { color: C.greenDk } });

const title = (s, text, sub) => {
  s.addText(text, { x: 0.5, y: 0.4, w: 12.3, h: 0.7, fontFace: HEAD, fontSize: 32, bold: true, color: C.ink, margin: 0, isTextBox: true });
  if (sub) s.addText(sub, { x: 0.5, y: 1.1, w: 12.3, h: 0.4, fontFace: BODY, fontSize: 16, italic: true, color: C.slate, margin: 0, isTextBox: true });
};

const bulletBox = (s, items, opts) => s.addText(
  items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } })),
  { fontFace: BODY, fontSize: 15, color: C.ink, paraSpaceAfter: 8, valign: 'top', isTextBox: true, ...opts },
);

// 1 Title
{
  const s = pres.addSlide({ masterName: 'DARK' });
  s.addText('Service feature catalogue', { x: 0.8, y: 2.3, w: 11.5, h: 1.0, fontFace: HEAD, fontSize: 44, bold: true, color: C.white, margin: 0, isTextBox: true });
  s.addText('Every customer-facing feature, grouped under the concept that makes it work', { x: 0.8, y: 3.35, w: 11.5, h: 0.6, fontFace: BODY, fontSize: 20, color: C.mint, margin: 0, isTextBox: true });
  s.addText('Draft for review · 2026-10-08 · ' + FEATURE_SECTIONS.reduce((n, x) => n + x.rows.length, 0) + ' features across ' + FEATURE_SECTIONS.length + ' groups',
    { x: 0.8, y: 4.3, w: 11.5, h: 0.4, fontFace: BODY, fontSize: 14, color: C.lime, margin: 0, isTextBox: true });
}

// 2 How to read it
{
  const s = pres.addSlide({ masterName: 'CONTENT' });
  title(s, 'How to read this catalogue');
  const rules = get('Rules (agreed with Tamsin, 2026-10-08)');
  const ruleLines = rules.paras.filter((p) => /^\d\./.test(p)).map((p) => clean(p.replace(/^\d\.\s*/, '')));
  bulletBox(s, ruleLines, { x: 0.5, y: 1.4, w: 7.6, h: 5.4, fontSize: 14 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.5, y: 1.4, w: 4.3, h: 5.4, fill: { color: C.card }, line: { color: C.line }, rectRadius: 0.1 });
  s.addText([
    { text: 'Channels', options: { bold: true, fontSize: 16, breakLine: true } },
    { text: 'App · WA (WhatsApp) · Store · Portal (the doctor\'s prescribing screen) · Paper · Phone · SMS', options: { breakLine: true } },
    { text: ' ', options: { breakLine: true } },
    { text: 'Flags', options: { bold: true, fontSize: 16, breakLine: true } },
    { text: '🔮  needs regulatory change', options: { breakLine: true } },
    { text: '⚠️  open question', options: { breakLine: true } },
    { text: ' ', options: { breakLine: true } },
    { text: 'Uses', options: { bold: true, fontSize: 16, breakLine: true } },
    { text: 'Features a concept relies on but another concept owns. Listed under each table so nothing is counted twice.', options: { breakLine: true } },
    { text: ' ', options: { breakLine: true } },
    { text: 'Business unit', options: { bold: true, fontSize: 16, breakLine: true } },
    { text: 'Left blank for you to fill in.' },
  ], { x: 8.75, y: 1.6, w: 3.8, h: 5.0, fontFace: BODY, fontSize: 14, color: C.ink, valign: 'top', margin: 0, isTextBox: true });
}

// 3 Decisions to check
{
  const s = pres.addSlide({ masterName: 'CONTENT' });
  title(s, 'Decisions made in this pass - please check', 'Plus the ownership rule you agreed: each feature lives with the concept that makes it work');
  const dec = get('Structural decisions made in this pass');
  const items = dec.paras.map((p) => clean(p.replace(/^-\s*/, '')));
  items.push('Shared features have one home: messaging a pharmacist and booking a doctor sit with The Pharmacist Who Stays; the collect-for-me code sits with CarerConsent.');
  items.push('Backstage work is left out (last slide) and belongs in the work-to-be-done catalogue.');
  items.forEach((t, i) => {
    const y = 1.75 + i * 1.0;
    s.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.05, w: 0.5, h: 0.5, fill: { color: C.green }, line: { color: C.green } });
    s.addText(String(i + 1), { x: 0.5, y: y + 0.05, w: 0.5, h: 0.5, fontFace: HEAD, fontSize: 16, bold: true, color: C.white, align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    s.addText(t, { x: 1.25, y, w: 11.5, h: 0.85, fontFace: BODY, fontSize: 15, color: C.ink, valign: 'top', margin: 0, isTextBox: true });
  });
}

// 4 Overview
{
  const s = pres.addSlide({ masterName: 'CONTENT' });
  title(s, 'The groups at a glance', 'Features each concept owns, in the order they appear in this deck');
  const cols = 4, w = 2.95, h = 1.15, gx = 0.17, gy = 0.17;
  FEATURE_SECTIONS.forEach((sec, i) => {
    const x = 0.5 + (i % cols) * (w + gx), y = 1.7 + Math.floor(i / cols) * (h + gy);
    const core = sec.title === 'Core service';
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: core ? C.mint : C.card }, line: { color: C.line }, rectRadius: 0.08 });
    s.addText(String(sec.rows.length), { x: x + 0.15, y, w: 0.8, h, fontFace: HEAD, fontSize: 36, bold: true, color: C.green, valign: 'middle', margin: 0, isTextBox: true });
    s.addText(sec.title.replace(/^The /, ''), { x: x + 0.95, y, w: w - 1.05, h, fontFace: BODY, fontSize: 14, bold: true, color: C.ink, valign: 'middle', margin: 0, isTextBox: true });
  });
}

// 5 One slide (or more) per concept
const HEADER = ['ID', 'Feature', 'The customer can…', 'Channel', 'Business unit'];
const COLW = [1.05, 2.5, 5.85, 1.45, 1.45];
const hdrCell = (t) => ({ text: t, options: { bold: true, color: C.white, fill: { color: C.greenDk }, fontSize: 13 } });

for (const sec of FEATURE_SECTIONS) {
  const tagline = sec.paras.find((p) => /^\*[^*]/.test(p) && !/^\*\*/.test(p));
  const notes = sec.paras.filter((p) => p !== tagline).map(clean);
  const chunks = [];
  const per = Math.ceil(sec.rows.length / Math.ceil(sec.rows.length / MAX_ROWS));
  for (let i = 0; i < sec.rows.length; i += per) chunks.push(sec.rows.slice(i, i + per));
  chunks.forEach((rows, ci) => {
    const s = pres.addSlide({ masterName: 'CONTENT' });
    const t = sec.title + (chunks.length > 1 ? ` (${ci + 1} of ${chunks.length})` : '');
    title(s, t, tagline ? clean(tagline) : (notes[0] && notes[0].length < 140 ? notes[0] : undefined));
    const body = rows.map((r, ri) => {
      const fill = { color: ri % 2 ? C.white : C.card };
      return [
        { text: r[0], options: { fill, color: C.slate, fontSize: 12 } },
        { text: clean(r[1]), options: { fill, bold: true, fontSize: 13 } },
        { text: clean(r[2]), options: { fill, fontSize: 13 } },
        { text: r[3], options: { fill, fontSize: 12, color: C.slate } },
        { text: r[4] || '', options: { fill } },
      ];
    });
    s.addTable([HEADER.map(hdrCell), ...body], {
      x: 0.5, y: 1.65, w: 12.3, colW: COLW, fontFace: BODY, color: C.ink, valign: 'top',
      border: { type: 'solid', pt: 0.5, color: C.line }, margin: [0.06, 0.08, 0.06, 0.08],
    });
    // notes (Uses, flags) on the last chunk
    if (ci === chunks.length - 1) {
      const extra = notes.filter((n) => !(tagline === undefined && n === notes[0] && n.length < 140));
      if (extra.length) {
        s.addText(extra.map((n, i) => ({ text: n, options: { breakLine: i < extra.length - 1, paraSpaceAfter: 4 } })),
          { x: 0.5, y: 5.75, w: 12.3, h: 1.2, fontFace: BODY, fontSize: 12, color: C.slate, valign: 'bottom', margin: 0, isTextBox: true });
      }
    }
    s.addNotes('Review notes for ' + t + ':\n');
  });
}

// 6 Left out + open questions
{
  const s = pres.addSlide({ masterName: 'CONTENT' });
  title(s, 'Left out on purpose, and still open');
  const left = get('Left out on purpose (backstage)').paras.map(clean).join(' ');
  const open = get('Open questions').paras.map((p) => clean(p.replace(/^-\s*/, '')));
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.5, w: 5.9, h: 5.2, fill: { color: C.card }, line: { color: C.line }, rectRadius: 0.1 });
  s.addText([
    { text: 'Backstage - not in this catalogue', options: { bold: true, fontSize: 18, breakLine: true } },
    { text: left },
  ], { x: 0.8, y: 1.75, w: 5.3, h: 4.8, fontFace: BODY, fontSize: 15, color: C.ink, valign: 'top', margin: 0, isTextBox: true, paraSpaceAfter: 10 });
  s.addText('Open questions', { x: 6.9, y: 1.75, w: 5.9, h: 0.4, fontFace: BODY, fontSize: 18, bold: true, color: C.ink, margin: 0, isTextBox: true });
  bulletBox(s, open, { x: 6.9, y: 2.3, w: 5.9, h: 4.4 });
}

pres.writeFile({ fileName: OUT }).then(() => console.log('Wrote ' + OUT));
