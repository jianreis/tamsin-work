// Builds the work-to-be-done catalogue deck from 14-work-to-be-done-catalogue.data.js.
// Frame and rules: design-kit/templates/work-to-be-done-catalogue-template.md
// Run: node deliverables/14-work-to-be-done-catalogue.build.js [out.pptx]
//   (needs pptxgenjs; if it isn't global, set NODE_PATH to a folder that has it)
const path = require('path');
const pptxgen = require('pptxgenjs');
const { CAPS, TYPES, ITEMS } = require('./14-work-to-be-done-catalogue.data.js');

const OUT = process.argv[2] || path.join(__dirname, '14-work-to-be-done-catalogue-sample-09.pptx');
const SCOPE = 'Sample: 09: Repeat';

// FoS palette (deliverables/_shared/build-executive-strategy-deck.py)
const C = {
  green: '1A9B4A', greenDk: '126E35', lime: 'B5D334', ink: '1D1D1D', slate: '52525B',
  mint: 'E8F5EC', mintMd: 'BFE3CF', white: 'FFFFFF', paper: 'FAFBFA', line: 'D7DDD9',
  amber: 'B06A00', card: 'F4F8F5', faint: '8A8F8C',
};
const STATUS = {
  'In flight': { fill: C.greenDk, text: C.white, blurb: 'Being delivered now, with a date' },
  'Planned':   { fill: '7FC79A', text: C.ink, blurb: 'In an existing plan or target state' },
  'Known gap': { fill: C.amber, text: C.white, blurb: 'Named in a catalogue, nobody solving it yet' },
  'New':       { fill: C.lime, text: C.ink, blurb: 'Surfaced only by our journeys' },
};
const STATUS_ORDER = ['In flight', 'Planned', 'Known gap', 'New'];
const GROUPS = ['LEARN', 'PERMIT', 'BUILD', 'RUN'];
const GROUP_BLURB = {
  LEARN: 'What we must know or choose first', PERMIT: 'What we must be allowed to do',
  BUILD: 'What we must create', RUN: 'How we must operate',
};
const TESTS = {
  1: 'Do we need evidence before we build this?', 2: 'Does someone senior have to choose a direction first?',
  3: 'Does a law, regulator or council rule stand in the way?', 4: 'Is it a Dis-Chem rule or SOP we could change ourselves?',
  5: 'Will a customer touch it?', 6: 'Will a pharmacist, PBQ or store colleague use it?',
  7: 'Does more than one feature or journey depend on it?', 8: 'Is it information or a design rule every channel reuses?',
  9: 'Does it change how a task is done day to day?', 10: 'Does it need new skills, roles, capacity or incentives?',
  11: 'Do we need someone outside Dis-Chem to do something?',
};
const PRINCIPLES = {
  Customer: ['Repeats should just repeat', 'Give me all the variables upfront', 'Don\'t leave me in the dark',
    'Get the basics right, every time', 'Care extends beyond the counter', 'My pharmacist is my front door to care'],
  Dispenser: ['The counter is for care, not admin', 'Never turn your back on the customer',
    'Separation & specialisation create focus', 'Fulfilment like a production line', 'Remove noise to protect flow',
    'Many inputs, one controlled funnel', 'The system prioritises the work', 'Proximity without exposure'],
};
const SHORT_TYPE = [null, 'Research', 'Decision', 'Regulatory reform', 'Internal policy', 'Customer feature', 'Staff tool',
  'Platform & data', 'Content & standards', 'Process', 'People & roles', 'Partnership'];
const PHASES = ['Signing up', 'Repeats are due', 'Adding to the order', 'Checked and packed', 'In hand', 'Taking it', 'When something breaks'];

// ---- IDs: GROUP-type-NN, numbered per type in data order
const seq = {};
ITEMS.forEach((it) => {
  seq[it.type] = (seq[it.type] || 0) + 1;
  it.id = `${TYPES[it.type].code}-${it.type}-${String(seq[it.type]).padStart(2, '0')}`;
});
ITEMS.forEach((it) => {
  if ((it.status === 'New') !== (it.seen.length === 0)) console.warn(`check status vs seen-in: ${it.key} (${it.status}, seen ${it.seen.length})`);
});
const byKey = Object.fromEntries(ITEMS.map((i) => [i.key, i]));
const group = (it) => TYPES[it.type].group;
const count = (fn) => ITEMS.filter(fn).length;

// ---- deck
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pres.title = 'Work-to-be-done catalogue';
pres.author = 'Bigly Labs';
pres.theme = { headFontFace: 'Calibri', bodyFontFace: 'Calibri' };
const W = 13.333, H = 7.5, M = 0.6;

pres.defineSlideMaster({
  title: 'DARK', background: { color: C.ink },
  objects: [{ placeholder: { options: { name: 'title', type: 'title', x: M, y: 2.3, w: 11, h: 1.4, fontSize: 48, bold: true, color: C.white, valign: 'bottom', margin: 0 }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: M, y: 3.85, w: 11, h: 1.6, fontSize: 18, color: C.mintMd, valign: 'top', margin: 0 }, text: '' } }],
});
pres.defineSlideMaster({
  title: 'CONTENT', background: { color: C.white },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', x: M, y: 0.35, w: W - 2 * M, h: 0.75, fontSize: 28, bold: true, color: C.ink, valign: 'top', margin: 0 }, text: '' } },
    { text: { text: `Work-to-be-done catalogue · ${SCOPE} · Draft for review`, options: { x: M, y: H - 0.42, w: 8, h: 0.25, fontSize: 9, color: C.faint, margin: 0 } } },
  ],
  slideNumber: { x: W - M - 0.5, y: H - 0.42, w: 0.5, h: 0.25, fontSize: 9, color: C.faint, align: 'right' },
});

function content(section, title, standfirst, notes) {
  const s = pres.addSlide({ masterName: 'CONTENT', sectionTitle: section });
  s.addText(title, { placeholder: 'title' });
  if (standfirst) s.addText(standfirst, { x: M, y: 1.05, w: W - 2 * M, h: 0.5, fontSize: 14, color: C.slate, valign: 'top', isTextBox: true, margin: 0 });
  if (notes) s.addNotes(notes);
  return s;
}
function chip(s, x, y, status, w = 1.0, fs = 9) {
  const st = STATUS[status];
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.26, rectRadius: 0.13, fill: { color: st.fill }, line: { color: st.fill } });
  s.addText(status, { x, y, w, h: 0.26, fontSize: fs, bold: true, color: st.text, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
}
function statusKey(s, x, y, gap = 2.6) {
  STATUS_ORDER.forEach((st, i) => {
    chip(s, x + i * gap, y, st);
    s.addText(STATUS[st].blurb, { x: x + i * gap + 1.08, y: y - 0.04, w: gap - 1.15, h: 0.34, fontSize: 9, color: C.slate, valign: 'middle', isTextBox: true, margin: 0 });
  });
}

// ===================================================================== OVERVIEW
pres.addSection({ title: 'Overview' });
{
  const s = pres.addSlide({ masterName: 'DARK', sectionTitle: 'Overview' });
  s.addText('Work to be done', { placeholder: 'title' });
  s.addText(`Catalogue sample: 09: Repeat\nDraft for review, 4 October 2026`, { placeholder: 'body' });
  s.addNotes('Sample built from journey 09: Repeat only, so Tamsin can react to the frame, the item wording and the slide treatment before 10: Acute, 11: Repeat WhatsApp and 12: Acute WhatsApp are harvested.');
}

// ---- 2. The number
{
  const total = ITEMS.length;
  const s = content('Overview', `One journey needs ${total} pieces of work`,
    'Everything Dis-Chem must learn, be allowed to do, build or run differently to make the household repeat journey real.',
    'The headline count is for one journey. Items will be shared across journeys, so the full catalogue will be larger but not four times larger. Status counts come from cross-checking the Health Squad map (HSQ), the enterprise capability model (ECM) and the McKinsey fulfilment compendium (FUL).');
  s.addText(String(total), { x: M, y: 1.6, w: 3.2, h: 2.1, fontSize: 120, bold: true, color: C.green, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('items for 09: Repeat', { x: M, y: 3.6, w: 3.2, h: 0.4, fontSize: 16, color: C.slate, isTextBox: true, margin: 0 });
  // four group tiles
  const gx = 4.3, gw = 2.0, gg = 0.2;
  GROUPS.forEach((g, i) => {
    const x = gx + i * (gw + gg), n = count((it) => group(it) === g);
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.8, w: gw, h: 2.2, fill: { color: C.card }, line: { color: C.line, width: 0.75 } });
    s.addText(g, { x: x + 0.2, y: 1.95, w: gw - 0.4, h: 0.3, fontSize: 12, bold: true, color: C.green, charSpacing: 2, isTextBox: true, margin: 0 });
    s.addText(String(n), { x: x + 0.2, y: 2.3, w: gw - 0.4, h: 0.9, fontSize: 48, bold: true, color: C.ink, isTextBox: true, margin: 0 });
    s.addText(GROUP_BLURB[g], { x: x + 0.2, y: 3.2, w: gw - 0.4, h: 0.65, fontSize: 11, color: C.slate, valign: 'top', isTextBox: true, margin: 0 });
  });
  // status bar
  const by = 4.75, bx = M, bw = W - 2 * M;
  s.addText('Where each item stands today', { x: M, y: 4.35, w: 6, h: 0.3, fontSize: 13, bold: true, color: C.ink, isTextBox: true, margin: 0 });
  let cx = bx;
  STATUS_ORDER.forEach((st) => {
    const n = count((it) => it.status === st), w = (n / total) * bw;
    s.addShape(pres.shapes.RECTANGLE, { x: cx, y: by, w, h: 0.6, fill: { color: STATUS[st].fill }, line: { color: C.white, width: 1 } });
    s.addText(String(n), { x: cx, y: by, w, h: 0.6, fontSize: 18, bold: true, color: STATUS[st].text, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
    cx += w;
  });
  statusKey(s, M, 5.6, 3.05);
  const known = count((it) => it.status !== 'New');
  s.addText([{ text: `${known} items are already known `, options: { bold: true } },
    { text: `to an existing Dis-Chem plan or catalogue, so this builds on work under way. ` },
    { text: `${count((it) => it.status === 'New')} are new: `, options: { bold: true } },
    { text: 'they only show up when you design the journey end to end.' }],
  { x: M, y: 6.15, w: W - 2 * M, h: 0.55, fontSize: 13, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
}

// ---- 3. The frame
{
  const s = content('Overview', 'Four kinds of work, eleven types',
    'Every item is one of these. The four groups also read as a rough order: learn and get permission before you build and run.',
    'Tie-break rule: what does the work produce? Evidence goes to Learn, permission to Permit, a thing to Build, a changed behaviour to Run. Feature vs platform: if two or more features or journeys need it, it is a platform. Content vs feature: the instruction library is content; the screen that shows it is a feature.');
  const cw = (W - 2 * M - 3 * 0.25) / 4, top = 1.75;
  GROUPS.forEach((g, gi) => {
    const x = M + gi * (cw + 0.25);
    s.addShape(pres.shapes.RECTANGLE, { x, y: top, w: cw, h: 0.85, fill: { color: C.greenDk }, line: { color: C.greenDk } });
    s.addText([{ text: g, options: { fontSize: 16, bold: true, color: C.white, charSpacing: 2, breakLine: true } },
      { text: GROUP_BLURB[g], options: { fontSize: 11, color: C.mintMd } }],
    { x: x + 0.15, y: top, w: cw - 0.3, h: 0.85, valign: 'middle', isTextBox: true, margin: 0 });
    const types = TYPES.map((t, i) => ({ t, i })).filter((o) => o.t && o.t.group === g);
    const th = (3.9 - (4 - 1) * 0.12) / 4;
    types.forEach((o, k) => {
      const y = top + 1.0 + k * (th + 0.12);
      const n = count((it) => it.type === o.i);
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: cw, h: th, fill: { color: C.card }, line: { color: C.line, width: 0.75 } });
      s.addText(`${o.i}  ${o.t.name}`, { x: x + 0.15, y: y + 0.1, w: cw - 0.5, h: 0.3, fontSize: 11, bold: true, color: C.ink, isTextBox: true, margin: 0 });
      s.addText(String(n), { x: x + cw - 0.4, y: y + 0.08, w: 0.3, h: 0.34, fontSize: 16, bold: true, color: C.green, align: 'right', isTextBox: true, margin: 0 });
      s.addText(TESTS[o.i], { x: x + 0.15, y: y + 0.43, w: cw - 0.3, h: th - 0.5, fontSize: 11, italic: true, color: C.slate, valign: 'top', isTextBox: true, margin: 0 });
    });
  });
  s.addText('Seen in:  HSQ = App Health Squad capability map (2026)  ·  ECM = Enterprise capability model (2025)  ·  FUL = McKinsey fulfilment compendium (2026), by slide',
    { x: M, y: 6.75, w: W - 2 * M, h: 0.28, fontSize: 10, color: C.slate, isTextBox: true, margin: 0 });
}

// ---- 4. The grid
{
  const s = content('Overview', 'Where the work sits',
    'Eight things Dis-Chem must be able to do, by the four kinds of work. Darker cells hold more items; the bar shows their status.',
    'Rows are capabilities, named without saying how they are delivered, following business-capability-map practice and drawing on HSQ and ECM names. Rule for cross-cutting items: file under the capability the item unlocks first.');
  const lx = M, lw = 3.5, gx = lx + lw + 0.1, tw = 0.9, top = 1.6;
  const cw = (W - M - gx - tw - 0.1 - 3 * 0.08) / 4, rh = 0.52, rg = 0.06;
  const maxCell = Math.max(...[1, 2, 3, 4, 5, 6, 7, 8].flatMap((r) => GROUPS.map((g) => count((it) => it.cap === r && group(it) === g))));
  GROUPS.forEach((g, gi) => s.addText(g, { x: gx + gi * (cw + 0.08), y: top, w: cw, h: 0.3, fontSize: 12, bold: true, color: C.green, align: 'center', charSpacing: 2, isTextBox: true, margin: 0 }));
  s.addText('TOTAL', { x: W - M - tw, y: top, w: tw, h: 0.3, fontSize: 12, bold: true, color: C.green, align: 'center', charSpacing: 2, isTextBox: true, margin: 0 });
  for (let r = 1; r <= 8; r++) {
    const y = top + 0.4 + (r - 1) * (rh + rg);
    s.addText(`${r}  ${CAPS[r]}`, { x: lx, y, w: lw, h: rh, fontSize: 12, bold: true, color: C.ink, valign: 'middle', isTextBox: true, margin: 0 });
    GROUPS.forEach((g, gi) => {
      const x = gx + gi * (cw + 0.08);
      const cell = ITEMS.filter((it) => it.cap === r && group(it) === g);
      const n = cell.length;
      const shade = n === 0 ? 100 : Math.round(85 - (n / maxCell) * 85);
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: cw, h: rh, fill: { color: n ? C.green : C.paper, transparency: n ? shade : 0 }, line: { color: C.line, width: 0.5 } });
      s.addText(n ? String(n) : '-', { x: x + 0.1, y, w: 0.6, h: rh - 0.14, fontSize: 18, bold: true, color: n / maxCell > 0.55 ? C.white : C.ink, valign: 'middle', isTextBox: true, margin: 0 });
      // status mini bar
      let bx = x + 0.75; const bw = cw - 0.9;
      STATUS_ORDER.forEach((st) => {
        const k = cell.filter((it) => it.status === st).length;
        if (!k) return;
        const w = (k / n) * bw;
        s.addShape(pres.shapes.RECTANGLE, { x: bx, y: y + rh / 2 - 0.07, w, h: 0.14, fill: { color: STATUS[st].fill }, line: { color: C.white, width: 0.5 } });
        bx += w;
      });
    });
    s.addText(String(count((it) => it.cap === r)), { x: W - M - tw, y, w: tw, h: rh, fontSize: 18, bold: true, color: C.ink, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  }
  statusKey(s, M, 6.72, 3.05);
}

// ---- 5. The wall
{
  const s = content('Overview', `All ${ITEMS.length} items on one page`,
    null,
    'Every item for 09: Repeat as a tile, by capability row, coloured by status. Detail for each tile is on the capability slides that follow.');
  const lx = M, lw = 2.45, tx = lx + lw + 0.1, top = 1.2;
  const avail = W - M - tx, perLine = 9, tg = 0.05, tw = (avail - (perLine - 1) * tg) / perLine, th = 0.32;
  let y = top;
  for (let r = 1; r <= 8; r++) {
    const row = ITEMS.filter((it) => it.cap === r);
    const lines = Math.ceil(row.length / perLine);
    const bandH = lines * th + (lines - 1) * tg;
    s.addText(CAPS[r], { x: lx, y, w: lw, h: Math.max(bandH, th), fontSize: 9, bold: true, color: C.ink, valign: 'middle', isTextBox: true, margin: 0 });
    row.forEach((it, k) => {
      const x = tx + (k % perLine) * (tw + tg), ty = y + Math.floor(k / perLine) * (th + tg);
      const st = STATUS[it.status];
      s.addShape(pres.shapes.RECTANGLE, { x, y: ty, w: tw, h: th, fill: { color: st.fill }, line: { color: C.white, width: 0.5 } });
      s.addText(it.title, { x: x + 0.04, y: ty, w: tw - 0.08, h: th, fontSize: 7, color: st.text, valign: 'middle', isTextBox: true, margin: 0 });
    });
    y += Math.max(bandH, th) + 0.14;
  }
  statusKey(s, M, Math.min(y + 0.05, 6.8), 3.05);
}

// ---- 6. Coverage
{
  const s = content('Overview', 'We are building on Dis-Chem\'s existing plans',
    'How many items each existing catalogue already names, and how many appear in none of them.',
    'An item can be seen in more than one catalogue. HSQ is customer-facing only, so it names none of the staff tools, operations, regulation or content items. ECM names capabilities, not status. FUL covers fulfilment operations.');
  const seenIn = (code) => count((it) => it.seen.some((x) => x.startsWith(code)));
  const none = count((it) => !it.seen.length);
  const labels = ['HSQ: Health Squad map', 'ECM: Enterprise model', 'FUL: Fulfilment compendium', 'In no catalogue'];
  const values = [seenIn('HSQ'), seenIn('ECM'), seenIn('FUL'), none];
  s.addChart(pres.charts.BAR, [{ name: 'Items', labels, values }], {
    x: M, y: 1.7, w: 6.6, h: 4.6, barDir: 'bar', chartColors: [C.green, C.green, C.green, C.lime],
    showValue: true, dataLabelPosition: 'outEnd', dataLabelFontSize: 14, dataLabelColor: C.ink, dataLabelFontFace: 'Calibri',
    catAxisLabelFontSize: 13, catAxisLabelColor: C.ink, catAxisLabelFontFace: 'Calibri', catAxisOrientation: 'maxMin',
    valAxisHidden: true, valGridLine: { style: 'none' }, catGridLine: { style: 'none' }, showLegend: false, barGapWidthPct: 45,
  });
  // notable new items
  const x = 7.6, w = W - M - x;
  s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w, h: 4.6, fill: { color: C.card }, line: { color: C.line, width: 0.75 } });
  s.addText('Examples only our journeys surfaced', { x: x + 0.25, y: 1.85, w: w - 0.5, h: 0.35, fontSize: 14, bold: true, color: C.ink, isTextBox: true, margin: 0 });
  const picks = ['s6-repeats', 'script-sync', 'reserve-for-repeats', 'named-check-status', 'locker-scheduled', 'label-design-system', 'autorefill-validation', 'commercial-model'];
  s.addText(picks.map((k, i) => ({ text: `${byKey[k].title}  (${TYPES[byKey[k].type].name})`, options: { bullet: true, breakLine: i < picks.length - 1 } })),
    { x: x + 0.25, y: 2.3, w: w - 0.5, h: 3.85, fontSize: 13, color: C.ink, valign: 'top', paraSpaceAfter: 6, isTextBox: true, margin: 0 });
}

// ---- 7. The spine
{
  const dep = {};
  ITEMS.forEach((it) => (it.deps || []).forEach((d) => { dep[d] = (dep[d] || 0) + 1; }));
  const top = Object.entries(dep).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const s = content('Overview', 'A handful of foundations carry the rest',
    'How many other items in this journey depend on each one. Get these wrong and the work above them stalls.',
    'Dependency counts are within 09: Repeat only and will grow as 10, 11 and 12 are added. Stock is the thinnest row on the grid (4 items), yet live stock visibility is one of the foundations here.');
  s.addChart(pres.charts.BAR, [{ name: 'Depended on by', labels: top.map(([k]) => `${byKey[k].title}  ${byKey[k].id}`), values: top.map(([, v]) => v) }], {
    x: M, y: 1.7, w: 8.2, h: 4.9, barDir: 'bar', chartColors: [C.greenDk],
    showValue: true, dataLabelPosition: 'outEnd', dataLabelFontSize: 14, dataLabelColor: C.ink, dataLabelFontFace: 'Calibri',
    catAxisLabelFontSize: 13, catAxisLabelColor: C.ink, catAxisLabelFontFace: 'Calibri', catAxisOrientation: 'maxMin',
    valAxisHidden: true, valGridLine: { style: 'none' }, catGridLine: { style: 'none' }, showLegend: false, barGapWidthPct: 40,
  });
  const x = 9.2, w = W - M - x;
  s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w, h: 4.9, fill: { color: C.card }, line: { color: C.line, width: 0.75 } });
  s.addText([{ text: 'Why this matters', options: { bold: true, fontSize: 14, breakLine: true } },
    { text: 'Most of these are platforms customers never see: one customer record, one order workflow, refill prediction, live stock. Each one feeds several features customers do see. That makes them the place to start, and the reason the visible features can\'t be built in isolation.', options: { fontSize: 13 } }],
  { x: x + 0.25, y: 1.9, w: w - 0.5, h: 4.5, color: C.ink, valign: 'top', paraSpaceAfter: 8, isTextBox: true, margin: 0 });
}

// ===================================================================== CAPABILITY SECTIONS
const CARDS_PER = 6, COLS = 3;
function itemNotes(it) {
  return [
    `${it.id}  ${it.title}`,
    `Enables: ${(it.enables || []).join('; ') || '-'}`,
    it.concepts && it.concepts.length ? `Concepts: ${it.concepts.join(', ')}` : null,
    it.deps && it.deps.length ? `Depends on: ${it.deps.map((d) => `${byKey[d].id} ${byKey[d].title}`).join('; ')}` : null,
    it.statusNote ? `Status note: ${it.statusNote}` : null,
    it.reform ? 'Flag: requires regulatory reform' : null,
    it.evidence && it.evidence.length ? `Evidence: ${it.evidence.join('; ')}` : null,
    it.question ? `Open question: ${it.question}` : null,
  ].filter(Boolean).join('\n');
}
function card(s, it, x, y, w, h) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: C.card }, line: { color: C.line, width: 0.75 } });
  const ix = x + 0.2, iw = w - 0.4;
  s.addText([{ text: it.id + '  ', options: { bold: true, color: C.green } },
    { text: SHORT_TYPE[it.type] + (it.reform && it.type !== 3 ? ' · reform' : ''), options: { color: it.reform ? C.amber : C.slate, bold: !!it.reform } }],
  { x: ix, y: y + 0.14, w: iw - 1.05, h: 0.26, fontSize: 10, valign: 'middle', isTextBox: true, margin: 0 });
  chip(s, x + w - 0.2 - 1.0, y + 0.14, it.status);
  s.addText(it.title, { x: ix, y: y + 0.46, w: iw, h: 0.32, fontSize: 14, bold: true, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  s.addText(it.need, { x: ix, y: y + 0.84, w: iw, h: 0.72, fontSize: 10.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  s.addText(it.why, { x: ix, y: y + 1.6, w: iw, h: 0.52, fontSize: 10, italic: true, color: C.slate, valign: 'top', isTextBox: true, margin: 0 });
  const foot = [];
  foot.push({ text: 'Principles  ', options: { bold: true, color: C.ink } });
  foot.push({ text: it.principles.length ? it.principles.join(' · ') : 'none fits yet', options: { color: C.slate, breakLine: true } });
  foot.push({ text: 'Seen in  ', options: { bold: true, color: C.ink } });
  foot.push({ text: it.seen.length ? it.seen.join(' · ') : 'none', options: { color: C.slate } });
  s.addText(foot, { x: ix, y: y + h - 0.58, w: iw, h: 0.48, fontSize: 9, valign: 'bottom', isTextBox: true, margin: 0 });
}

pres.addSection({ title: 'The work, by capability' });
for (let r = 1; r <= 8; r++) {
  const row = ITEMS.filter((it) => it.cap === r);
  const pages = Math.ceil(row.length / CARDS_PER);
  for (let p = 0; p < pages; p++) {
    const chunk = row.slice(p * CARDS_PER, (p + 1) * CARDS_PER);
    const counts = GROUPS.map((g) => `${row.filter((it) => group(it) === g).length} ${g.toLowerCase()}`).join(' · ');
    const s = content('The work, by capability', `${r}  ${CAPS[r]}${pages > 1 ? `  (${p + 1} of ${pages})` : ''}`,
      null, chunk.map(itemNotes).join('\n\n'));
    s.addText(`${row.length} items: ${counts}`, { x: M, y: 0.98, w: W - 2 * M, h: 0.24, fontSize: 11, color: C.slate, isTextBox: true, margin: 0 });
    const gw = 0.2, cw = (W - 2 * M - (COLS - 1) * gw) / COLS, top = 1.32, ch = (H - top - 0.55 - gw) / 2;
    chunk.forEach((it, k) => card(s, it, M + (k % COLS) * (cw + gw), top + Math.floor(k / COLS) * (ch + gw), cw, ch));
  }
}

// ===================================================================== APPENDIX
pres.addSection({ title: 'Appendix' });
{
  const s = content('Appendix', 'Traceability: what each phase of 09: Repeat needs',
    'Every item listed under each journey phase it makes possible. Items that serve several phases appear in each.',
    'From the Tier 2 "Enables" field. Shared items will gain 10, 11 and 12 entries as those journeys are harvested.');
  const cw = (W - 2 * M - 6 * 0.12) / 7, top = 1.6;
  PHASES.forEach((ph, i) => {
    const x = M + i * (cw + 0.12);
    const list = ITEMS.filter((it) => (it.enables || []).some((e) => e.endsWith(ph)));
    s.addShape(pres.shapes.RECTANGLE, { x, y: top, w: cw, h: 0.6, fill: { color: C.greenDk }, line: { color: C.greenDk } });
    s.addText([{ text: ph, options: { bold: true, breakLine: true } }, { text: `${list.length} items`, options: { fontSize: 9, color: C.mintMd } }],
      { x: x + 0.08, y: top, w: cw - 0.16, h: 0.6, fontSize: 11, color: C.white, valign: 'middle', isTextBox: true, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: top + 0.65, w: cw, h: H - top - 0.65 - 0.55, fill: { color: C.card }, line: { color: C.line, width: 0.5 } });
    s.addText(list.map((it, k) => ({ text: it.title, options: { breakLine: k < list.length - 1 } })),
      { x: x + 0.08, y: top + 0.72, w: cw - 0.16, h: H - top - 0.65 - 0.7, fontSize: 8, color: C.ink, valign: 'top', paraSpaceAfter: 1, isTextBox: true, margin: 0 });
  });
}
{
  const s = content('Appendix', 'The principles each item is tagged against',
    'Tamsin\'s future-state service design principles, under one rule: optimise for speed and convenience, never at the expense of trust.',
    'Source: the Bigly blueprint board (sources/src-bigly-blueprint-board-style.md). Counts show how many 09 items carry each principle.');
  const tagged = (p) => count((it) => it.principles.includes(p));
  ['Customer', 'Dispenser'].forEach((side, si) => {
    const x = M + si * ((W - 2 * M) / 2 + 0.1), w = (W - 2 * M) / 2 - 0.1;
    s.addText(`${side} principles`, { x, y: 1.7, w, h: 0.35, fontSize: 15, bold: true, color: C.green, isTextBox: true, margin: 0 });
    PRINCIPLES[side].forEach((p, k) => {
      const y = 2.15 + k * 0.52;
      s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: 0.44, fill: { color: C.card }, line: { color: C.line, width: 0.5 } });
      s.addText(p, { x: x + 0.15, y, w: w - 1.0, h: 0.44, fontSize: 13, color: C.ink, valign: 'middle', isTextBox: true, margin: 0 });
      s.addText(String(tagged(p)), { x: x + w - 0.75, y, w: 0.6, h: 0.44, fontSize: 15, bold: true, color: C.green, align: 'right', valign: 'middle', isTextBox: true, margin: 0 });
    });
  });
}

pres.writeFile({ fileName: OUT }).then((f) => console.log('wrote', f));
