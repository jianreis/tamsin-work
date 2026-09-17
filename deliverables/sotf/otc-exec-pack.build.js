const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9'; // 10 x 5.625
pres.title = 'The OTC Solve';

const C = { green:'0A7A44', greenDeep:'0B5C36', greenTint:'E7F2EA', gold:'E3B71E', goldTint:'FAF3D9',
  ink:'1C2420', soft:'4C5A52', faint:'7D8A82', line:'DCDFD8', ground:'F7F6F2', white:'FFFFFF', warn:'B4552A', warnTint:'F8ECE4' };
const F = 'Arial';
const W = 10, H = 5.625, M = 0.5;

function base(section, eyebrow, title, standfirst, notes) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  if (section) s.addText(section.toUpperCase(), { x: M, y: 0.22, w: 4, h: 0.25, fontFace: F, fontSize: 9, color: C.green, bold: true, charSpacing: 2, isTextBox: true, margin: 0 });
  if (eyebrow) s.addText(eyebrow, { x: W - M - 2.5, y: 0.22, w: 2.5, h: 0.25, fontFace: F, fontSize: 9, color: C.faint, align: 'right', isTextBox: true, margin: 0 });
  s.addText(title, { x: M, y: 0.48, w: W - 2 * M, h: 0.8, fontFace: F, fontSize: 21, bold: true, color: C.ink, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink' });
  if (standfirst) s.addText(standfirst, { x: M, y: 1.26, w: W - 2 * M, h: 0.52, fontFace: F, fontSize: 11, color: C.soft, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink' });
  if (notes) s.addNotes(notes);
  return s;
}
function card(s, x, y, w, h, label, head, body, opts = {}) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: opts.fill || C.ground }, line: { color: opts.border || C.line, width: opts.borderW || 0.75 } });
  let cy = y + 0.12;
  if (label) { s.addText(label.toUpperCase(), { x: x + 0.15, y: cy, w: w - 0.3, h: 0.22, fontFace: F, fontSize: 8, bold: true, color: C.green, charSpacing: 1.5, isTextBox: true, margin: 0 }); cy += 0.24; }
  if (head) { s.addText(head, { x: x + 0.15, y: cy, w: w - 0.3, h: 0.34, fontFace: F, fontSize: 10.5, bold: true, color: C.ink, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink' }); cy += 0.36; }
  if (body) s.addText(body, { x: x + 0.15, y: cy, w: w - 0.3, h: y + h - cy - 0.12, fontFace: F, fontSize: opts.fs || 8.5, color: C.soft, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink', paraSpaceAfter: 4 });
}
function callout(s, x, y, w, h, text, big, opts = {}) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: opts.fill || C.goldTint }, line: { color: opts.fill || C.goldTint } });
  if (big) {
    s.addText(big, { x: x + 0.18, y: y + 0.1, w: w - 0.36, h: 0.42, fontFace: F, fontSize: 18, bold: true, color: C.ink, isTextBox: true, margin: 0, fit: 'shrink' });
    s.addText(text, { x: x + 0.18, y: y + 0.52, w: w - 0.36, h: h - 0.6, fontFace: F, fontSize: 9, color: C.ink, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink' });
  } else {
    s.addText(text, { x: x + 0.18, y: y + 0.08, w: w - 0.36, h: h - 0.16, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'middle', isTextBox: true, margin: 0, fit: 'shrink' });
  }
}
function bullets(s, x, y, w, h, items, fs = 10.5) {
  s.addText(items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } })),
    { x, y, w, h, fontFace: F, fontSize: fs, color: C.ink, valign: 'top', isTextBox: true, margin: 0, paraSpaceAfter: 6, fit: 'shrink' });
}
function numbered(s, x, y, w, h, items, fs = 10, color = C.green, start = 1) {
  const rowH = h / items.length;
  items.forEach((t, i) => {
    const yy = y + i * rowH;
    s.addShape(pres.shapes.OVAL, { x, y: yy + 0.02, w: 0.26, h: 0.26, fill: { color }, line: { color } });
    s.addText(String(start + i), { x, y: yy + 0.02, w: 0.26, h: 0.26, fontFace: F, fontSize: 9, bold: true, color: color === C.gold ? C.ink : C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
    s.addText(t, { x: x + 0.36, y: yy, w: w - 0.36, h: rowH - 0.04, fontFace: F, fontSize: fs, color: C.ink, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink' });
  });
}
function subhead(s, x, y, w, text) {
  s.addText(text.toUpperCase(), { x, y, w, h: 0.22, fontFace: F, fontSize: 8, bold: true, color: C.green, charSpacing: 1.5, isTextBox: true, margin: 0 });
}
function table(s, x, y, w, rows, colW, opts = {}) {
  const fs = opts.fs || 9;
  const data = rows.map((r, ri) => r.map((c, ci) => ({
    text: c, options: {
      fontFace: F, fontSize: ri === 0 ? 8 : fs, bold: ri === 0 || (opts.boldFirstCol && ci === 0), color: ri === 0 ? C.faint : C.ink,
      fill: { color: ri === 0 ? C.ground : C.white }, valign: 'top', margin: [3, 5, 3, 5],
      border: [{ type: 'solid', pt: 0.5, color: C.line }, { type: 'none' }, { type: 'solid', pt: 0.5, color: C.line }, { type: 'none' }],
    }
  })));
  s.addTable(data, { x, y, w, colW, rowH: opts.rowH || 0.28, autoPage: false });
}
function footer(s, text) {
  s.addText(text, { x: M, y: H - 0.42, w: W - 2 * M, h: 0.3, fontFace: F, fontSize: 8, color: C.faint, valign: 'bottom', isTextBox: true, margin: 0, fit: 'shrink' });
}

// ---------- Title ----------
{
  const s = pres.addSlide(); s.background = { color: C.ink };
  s.addText('STORE OF THE FUTURE  ·  STEER GROUP PACK  ·  DRAFT', { x: M, y: 1.2, w: 9, h: 0.3, fontFace: F, fontSize: 10, color: C.gold, bold: true, charSpacing: 2, isTextBox: true, margin: 0 });
  s.addText('The OTC Solve', { x: M, y: 1.6, w: 9, h: 1.1, fontFace: F, fontSize: 54, bold: true, color: C.white, isTextBox: true, margin: 0 });
  s.addText('Two Store of the Future pharmacies are live. Scripts are served faster than before. Over-the-counter medicine, folded into the same process, is where the friction sits. This pack plays back what changed, what the two stores have taught us, where the pharmacy should go, and how we get there.',
    { x: M, y: 2.8, w: 7.5, h: 1.2, fontFace: F, fontSize: 13, color: 'CFD8D2', isTextBox: true, margin: 0 });
  s.addText('Bigly Labs for Dis-Chem  ·  September 2026  ·  figures marked as working numbers until pulled from reporting', { x: M, y: H - 0.7, w: 9, h: 0.3, fontFace: F, fontSize: 9, color: '84908A', isTextBox: true, margin: 0 });
}

// ---------- Contents ----------
{
  const s = base(null, null, 'Four questions', null);
  const qs = [['1', 'Where are we now?', 'What changed in the pharmacy, how two live stores run it, and how many follow before Christmas.'],
    ['2', 'What have we learned?', 'What is working, where the friction sits, what it costs, and what the two stores teach side by side.'],
    ['3', 'Where are we going?', 'The target pharmacy in the simplest terms we can state it, so the roadmap follows from it.'],
    ['4', 'How do we get there?', 'Three routes, every option placed, and the decisions we ask the Steer Group to make.']];
  qs.forEach((q, i) => {
    const x = M + i * 2.3, y = 1.5, w = 2.15, h = 2.6;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: C.ground }, line: { color: C.line, width: 0.75 } });
    s.addShape(pres.shapes.OVAL, { x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5, fill: { color: C.green }, line: { color: C.green } });
    s.addText(q[0], { x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5, fontFace: F, fontSize: 16, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
    s.addText(q[1], { x: x + 0.2, y: y + 0.85, w: w - 0.4, h: 0.6, fontFace: F, fontSize: 15, bold: true, color: C.ink, isTextBox: true, margin: 0 });
    s.addText(q[2], { x: x + 0.2, y: y + 1.45, w: w - 0.4, h: 1.05, fontFace: F, fontSize: 10, color: C.soft, valign: 'top', isTextBox: true, margin: 0 });
  });
  s.addText('An answer slide sits in front. An evidence appendix sits behind.', { x: M, y: 4.4, w: 9, h: 0.3, fontFace: F, fontSize: 10, color: C.faint, isTextBox: true, margin: 0 });
}

// ---------- 0.1 ----------
{
  const s = base('The answer', 'Slide 0.1', 'The answer on one slide', 'What we found, what we recommend, and what we need from the room.',
    'Written last. Every line traces to a slide in the body.');
  bullets(s, M, 1.75, 9, 3.4, [
    'Store of the Future serves scripts faster. A five-item script that took fifteen minutes at the counter now takes about five, and the frontline wants to keep it that way.',
    "Over-the-counter medicine went into the same process, and that is where the friction sits. A customer who came for one box takes a ticket, waits twice and walks three times for an item every other Dis-Chem hands over in under a minute. Irene's team changed it in the first weeks. Melrose's OTC turnover runs R50-100k a month below a lower-income comparator.",
    "The fix is one rule at the counter: what is within the pharmacist's reach goes now; what is not gets a time. A shelf of the top OTC lines behind the pharmacist is the default threshold. Data widens it.",
    'The rule holds in every store size and needs no new systems. Fifteen stores open before Christmas, the first in five weeks; they should open on it.',
    'We ask the Steer Group to adopt the rule, approve three changes to the Q4 training, approve the data plan, and review in January with three months of data.'], 12);
}

// ---------- 1.1 ----------
{
  const s = base('Section 1 · Where are we now?', 'Slide 1.1', 'Three changes to the pharmacy, and the problem each one solved',
    'Store of the Future changed three things about how a customer gets medicine. Each was made on purpose, and the reasons behind them still hold.',
    'Evidence: SteerCo #1 pack and decision log (Nov 2025); Bigly dispenser principles; OTC brainstorm 2 Sep 2026 (space rationale, legacy OTC wall objections).');
  const cw = 2.9, gap = 0.15, y = 1.85, h = 2.85;
  card(s, M, y, cw, h, 'Change 1', 'Decoupled counters',
    'The customer hands in at one counter and collects at another, with the picking done out of sight in between.\n\nIn a legacy store the pharmacist takes the script, turns round, and hunts stock for up to five minutes while the customer stands at the counter. Decoupling keeps the pharmacist facing the customer and turns the picking into a production line, so a long script no longer holds up the counter and a customer with time to wait can roam the store instead of standing in a queue.');
  card(s, M + cw + gap, y, cw, h, 'Change 2', 'One queue for everything',
    'Scripts and over-the-counter medicine (OTC: the pain, cold, allergy and stomach lines a pharmacist can sell without a prescription) go through the same ticket, the same counter and the same pick-and-pack.\n\nOne process means less counter space given to the pharmacy, one set of staff to train, and no second counter to run. It also changes how customers think. With one counter for everything, they stop treating scripts and OTC as two separate errands and stop forgetting to ask for the OTC item at the dispensing counter. Every visit becomes one combined script-and-OTC conversation, and one combined sale.', { fs: 8 });
  card(s, M + 2 * (cw + gap), y, cw, h, 'Change 3', 'No visible stock',
    'Every medicine sits behind the wall. Nothing is on a shelf the customer can see or the pharmacist can reach.\n\nThis protects the decoupling: if stock is within reach, the pharmacist will turn round and fetch it, and the customer, seeing it there, will ask why they must wait for a picker when the pharmacist could just turn round. Moving the stock out of reach removes both the temptation and the complaint. It also retired the legacy OTC wall, which was untidy, carried slow stock for years, and let the queue see what the person in front was buying.', { fs: 8 });
  callout(s, M, 4.78, 9, 0.6, "These three came from the programme's own design principles for the dispenser, agreed before Melrose Arch opened: never turn your back on the customer, fulfil like a production line, keep the counter for care. This pack scores every option against them.");
}

// ---------- 1.2 ----------
{
  const s = base('Section 1 · Where are we now?', 'Slide 1.2', 'Two stores are live. They run the pharmacy two different ways',
    'Melrose Arch runs the pharmacy as it was trained. Irene runs the same process for scripts and a faster path for OTC that its own team built in the first weeks. Both are worth understanding before we change anything.',
    "PRESENTER CAVEAT: there are reports that some Irene pharmacists walk to the back and pick the OTC item themselves rather than waiting for it to be brought forward. If that is happening, it breaks 'never turn your back'. Confirm with the business analyst's ticketing data before presenting the Irene path as clean.\n\nDATA STILL NEEDED: ticket volume and time to serve at Irene by OTC vs script, month by month.\n\nIrene's dispensary manager reports no OTC complaints since the change and no fairness complaints from script customers.");
  subhead(s, M, 1.85, 4.4, 'Melrose Arch · opened 7 May 2026 · the process as trained');
  numbered(s, M, 2.1, 4.4, 2.35, ['Ticket at the Health Hub, digital or printed.',
    'Roam until called to the drop-off counter. The dispenser takes the script or the OTC request, captures it, and upsells there.',
    'Roam again while the order goes through pick-and-pack. The dashboard prioritises the work.',
    'Called to the collections counter. Sign, take the bag.',
    'Pay at the front-shop till (payment at the pharmacy counter is planned for 2028).'], 9);
  s.addText('The same five steps apply whether the customer has a 24-item script or a single box of antihistamine.', { x: M, y: 4.5, w: 4.4, h: 0.3, fontFace: F, fontSize: 8.5, italic: true, color: C.soft, isTextBox: true, margin: 0 });
  subhead(s, 5.2, 1.85, 4.3, 'Irene · live since July 2026 · the process as run');
  numbered(s, 5.2, 2.1, 4.3, 2.65, ['Scripts, and scripts with OTC add-ons, follow the five steps unchanged.',
    'An OTC-only customer stays at the drop-off counter. The dispenser captures the sale as normal, but the label prints to a dedicated printer in the back (printer 9).',
    'Whoever is free in the back reads that print as a signal, picks the item at once, and brings it to the dispenser.',
    'The dispenser hands it over. One stop, no second queue, and the pharmacist never turns away from the customer. Built with no new technology.',
    'Collections changed too: any free counter can hand over an order that is ready, so fewer people pile up around the Hub waiting to be called.'], 8.5, C.gold);
  callout(s, M, 4.85, 9, 0.6, 'As described, the Irene path keeps every design principle intact. What it changes is where the OTC customer waits: at the counter, for under a minute, instead of in a second queue. And it takes those customers out of the two places the store bottlenecks, the pick-and-pack dashboard and the collections queue.');
}

// ---------- 1.3 ----------
{
  const s = base('Section 1 · Where are we now?', 'Slide 1.3', 'Fifteen more stores open before Christmas, the first in five weeks',
    'Melrose Arch and Irene are the only two stores running this pharmacy today. By 3 December there will be seventeen. Every one of them opens with manual pick-and-pack, because the first automated picker store is planned for next year.',
    'Store count and dates from the programme rollout plan (Sep 2026). The ROWA figures (first store 2027, about a third of the estate) are the team\'s working numbers from the 2 September session and need confirming with the programme.');
  // timeline
  const tx = M, ty = 2.2, tw = 5.6;
  s.addShape(pres.shapes.LINE, { x: tx, y: ty, w: tw, h: 0, line: { color: C.line, width: 2 } });
  const pts = [[0, '16 Sep', 'Today', C.warn, 0.12], [0.33, '22 Oct', 'Rand View · 1', C.green, 0.16], [0.395, '29 Oct', '5 stores', C.green, 0.24], [0.42, '1 Nov', 'Umhlanga · 1', C.green, 0.16], [0.65, '26 Nov', '5 stores', C.green, 0.24], [0.71, '3 Dec', '3 stores', C.green, 0.2]];
  pts.forEach(([p, d, lab, col, sz], i) => {
    const x = tx + p * tw;
    s.addShape(pres.shapes.OVAL, { x: x - sz / 2, y: ty - sz / 2, w: sz, h: sz, fill: { color: col }, line: { color: C.white, width: 1 } });
    const up = i % 2 === 0;
    s.addText(d, { x: x - 0.5, y: up ? ty - 0.55 : ty + 0.2, w: 1, h: 0.18, fontFace: F, fontSize: 8, bold: true, color: C.ink, align: 'center', isTextBox: true, margin: 0 });
    s.addText(lab, { x: x - 0.5, y: up ? ty - 0.38 : ty + 0.37, w: 1, h: 0.18, fontFace: F, fontSize: 7.5, color: C.soft, align: 'center', isTextBox: true, margin: 0 });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: tx + tw * 0.86, y: ty - 0.3, w: tw * 0.14, h: 0.6, fill: { color: C.greenTint }, line: { color: C.green, width: 0.5, dashType: 'dash' } });
  s.addText('ROWA stores from 2027', { x: tx + tw * 0.86 - 0.3, y: ty + 0.62, w: 1.4, h: 0.3, fontFace: F, fontSize: 7.5, color: C.green, align: 'center', isTextBox: true, margin: 0 });
  table(s, M, 3.15, 5.6, [['Opens', 'Stores', 'Where'], ['22 Oct', '1', 'Rand View'], ['29 Oct', '5', 'October cluster'], ['1 Nov', '1', 'Umhlanga Crescent'], ['26 Nov', '5', 'November cluster'], ['3 Dec', '3', 'December cluster'], ['On hold', '3', 'Awaiting landlord handover']], [1.2, 0.9, 3.5], { rowH: 0.26, fs: 8.5 });
  callout(s, 6.4, 1.85, 3.1, 1.05, 'Six of them in October. The first opens on 22 October, five weeks from this meeting.', '15 stores in six weeks');
  s.addText('Each of these stores will be trained on a pharmacy process in the weeks before it opens. Whatever we decide about OTC, the training either carries the Melrose process as it stands, or it carries a change. After 22 October the decision stops being about two stores and starts being about a network.\n\nThe automated picker (ROWA) answers the OTC question on its own, because any item reaches the front counter in seconds. But it arrives in 2027 and covers roughly a third of the estate. The other two thirds will pick by hand for the foreseeable future, so manual OTC needs a proper process of its own, not a stopgap. These fifteen stores are the chance to test that process and get it right before it goes to the rest of the network.',
    { x: 6.4, y: 3.0, w: 3.1, h: 2.45, fontFace: F, fontSize: 8.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink', paraSpaceAfter: 6 });
}

// ---------- 2.1 ----------
{
  const s = base('Section 2 · What have we learned?', 'Slide 2.1', 'A five-item script took fifteen minutes. It now takes about five',
    'The pharmacy was redesigned to serve scripts faster and better. On the evidence so far, it does, and the people running it want to keep it that way.',
    "Time-to-serve figures are the team's working numbers, TO BE CONFIRMED against the product manager's data before this pack is presented.\n\nDATA STILL NEEDED: ticket volume and time to serve for both stores, split OTC vs script, month by month since opening.");
  callout(s, M, 1.85, 4.1, 1.5, 'Before Store of the Future, a new script with five items took about 15 minutes to dispense at the counter, with the customer standing there for all of it. In the new pharmacy the average time to serve at the dispensary is about 5 minutes.', '15 min  ->  about 5 min');
  s.addText('How the time was won: the customer hands in and walks away, the picking happens in the back as a production line, and the counter is used only for the two conversations that need a pharmacist, handing in and handing over. A long script no longer holds up everyone behind it.',
    { x: M, y: 3.5, w: 4.1, h: 1.6, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  subhead(s, 4.95, 1.85, 4.55, 'What the stores say is working');
  bullets(s, 4.95, 2.1, 4.55, 3.2, [
    "Both pharmacy managers want to keep decoupling for scripts. Irene's manager: \"we'd rather keep the patients we're getting\".",
    'Local doctors who bring four or five scripts at once are impressed, because the first scripts are picked while the later ones are still being captured.',
    'Friction fades as customers learn. At Melrose Arch, four months in, return customers ticket themselves without help, and the daily "why is it like this?" has largely stopped.',
    'The process is faster than it feels. A Melrose customer who complained of a 30-minute wait had waited 44 seconds for the pick and 10 seconds to sign. Time to serve is as much a matter of perception as of the clock.',
    'Fewer visible prices has made premium advice easier to give, and to take. Melrose has sold more of a R394 antihistamine than its manager ever has, because the cheaper anchor is not sitting beside it.'], 9);
}

// ---------- 2.2 journey ----------
{
  const s = base('Section 2 · What have we learned?', 'Slide 2.2', 'The friction sits at three points in the journey, and OTC customers hit all three',
    'Run the same steps for a script customer and for someone buying one box of painkillers, and the friction lands in different places. For the script customer the process fits the wait. For the OTC customer the wait is the process.',
    'Sources: pharmacy managers and hub advisors of both stores (10 Sep workshop); Careline complaints; mystery shops by the team; the Jan 2026 customer study for "waiting is fine, being unsure isn\'t". Most of this comes from the people running the two stores. Customer measurement is still to come.');
  const stages = ['Ticket at the Hub', 'Roam', 'Drop-off counter', 'Roam again', 'Collections counter', 'Pay at front till'];
  const lx = M, lw = 0.95, gx = lx + lw + 0.05, cw = (W - M - gx - 0.25) / 6, gap = 0.05, y0 = 1.85;
  stages.forEach((st, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: gx + i * (cw + gap), y: y0, w: cw, h: 0.34, fill: { color: C.green }, line: { color: C.green } });
    s.addText(st, { x: gx + i * (cw + gap), y: y0, w: cw, h: 0.34, fontFace: F, fontSize: 8, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  });
  const lanes = [
    ['Script customer', 0.75, [null, ['Long new scripts (24 items) hold the queue at peak for everyone behind.', 'Irene manager'], null, null, ['OTC ticket P006 called before script P005: "why?"', 'Melrose hub advisor'], null], C.gold],
    ['OTC-only customer', 1.75, [
      ['One item, but take a ticket and wait, when every other Dis-Chem hands it over.', 'Both managers · Careline'],
      ['~80% of Irene customers do not want to shop; they hover round the four-seat Hub. The post-op husband in the car: his wife told to "go shop".', 'Irene manager · Careline'],
      ['Nothing to point at: no side-by-side options, no jogged memory. The second sale rests on the dispenser\'s selling skill.', 'Both stores'],
      ['Feels far longer than it is: A to B to C with nobody visibly working. "If I can\'t see you, I can\'t put pressure on you."', 'Melrose manager'],
      ['A second queue, shared with scripts, for an item that took under a minute to pick.', 'Both stores · mystery shop'],
      ['A third stop, at a till the customer walked past to get here.', 'Launch process']], C.warn],
    ['What Dis-Chem pays', 0.55, [['Hub congestion at peak', ''], ['Hub advisors explaining, not serving', ''], ['Dispenser time on a one-item order', ''], ['Picker time on the same order', ''], ['Collections queue shared with scripts', ''], ['A missed second sale', '']], C.faint],
  ];
  let y = y0 + 0.4;
  lanes.forEach(([name, h, cells, col]) => {
    s.addText(name.toUpperCase(), { x: lx, y, w: lw, h, fontFace: F, fontSize: 7, bold: true, color: C.soft, valign: 'top', isTextBox: true, margin: 0 });
    cells.forEach((c, i) => {
      const x = gx + i * (cw + gap);
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: cw, h, fill: { color: C.ground }, line: { color: C.line, width: 0.5 } });
      if (c) {
        s.addShape(pres.shapes.RECTANGLE, { x: x + 0.04, y: y + 0.04, w: 0.05, h: h - 0.08, fill: { color: col }, line: { color: col } });
        s.addText(c[0], { x: x + 0.13, y: y + 0.04, w: cw - 0.17, h: c[1] ? h - 0.24 : h - 0.08, fontFace: F, fontSize: 7, color: C.ink, valign: 'top', isTextBox: true, margin: 0, fit: 'shrink' });
        if (c[1]) s.addText(c[1].toUpperCase(), { x: x + 0.13, y: y + h - 0.2, w: cw - 0.17, h: 0.16, fontFace: F, fontSize: 5.5, color: C.faint, isTextBox: true, margin: 0 });
      }
    });
    y += h + 0.06;
  });
  s.addText('Pin colour: gold = script friction · orange = OTC friction · grey = cost to Dis-Chem. Each pin names its source. Most are frontline-reported; customer measurement is still to come.',
    { x: M, y: H - 0.45, w: 9, h: 0.3, fontFace: F, fontSize: 7.5, color: C.faint, isTextBox: true, margin: 0 });
}

// ---------- 2.3 ----------
{
  const s = base('Section 2 · What have we learned?', 'Slide 2.3', 'The cost to Dis-Chem: FTE, congestion, and an early sales signal',
    'The OTC friction has a cost to the customer and a cost to the business. Three show up already, and two of them come with numbers we still need to firm up.',
    "All three figures are the managers' own working numbers.\n\nDATA STILL NEEDED: pharmacy revenue and transaction volume for both stores, split OTC vs script, month by month since opening, against the programme's original projections. Visit-level reporting for both stores.");
  const cw = 2.9, gap = 0.15, y = 1.85, h = 2.65;
  card(s, M, y, cw, h, 'FTE', 'One picker for every dispenser',
    'Running submission, picking and collection as separate jobs needs roughly one picker in the back for every dispenser at the front. Both pharmacy managers arrived at that ratio independently. Overweight the front and the queue moves to pick-and-pack, where the customer cannot see it, and trust drops.\n\nIrene needs eight on a Saturday and its takings justify six. Melrose opened with nine, twice a conventional store of its turnover, and is stress-testing at five or six. Small stores, some with three permanent staff and under R1m a month, cannot split roles at all.', { fs: 8 });
  card(s, M + cw + gap, y, cw, h, 'Congestion', 'A four-seat Hub that fills on quiet days',
    'The Health Hub fills even on quiet days. On a busy Saturday two long scripts are enough to fill the shared queue, and the hub advisors spend their shift steering people rather than serving them.');
  card(s, M + 2 * (cw + gap), y, cw, h, 'Sales', 'An early gap against a lower-income store',
    "Melrose Arch's manager benchmarks his OTC turnover against two stores of similar size that opened a month earlier. Blueberry Square, in a lower income area where OTC sales would normally be lower, takes R50,000 to R100,000 a month more in OTC than Melrose.\n\nHe puts the gap down to the missing display, not the process: \"six out of every ten patients who come to buy one item will see a second item on the shelf\". With no shelf, the whole job of prompting a second item sits with the dispenser, and dispensers differ in how good they are at selling. Against that, hidden prices have made premium advice easier to sell.", { fs: 8 });
  callout(s, M, 4.58, 9, 0.85, 'The OTC turnover gap between Melrose Arch and a lower-income comparator store, as reported by the Melrose dispensary manager. A working number until pulled from reporting.', 'R50-100k a month');
}

// ---------- 2.4 ----------
{
  const s = base('Section 2 · What have we learned?', 'Slide 2.4', 'Melrose Arch vs Irene: comparative learnings',
    'One store kept to the process and one changed it. That is not a verdict on the process. It says a lot about the two stores, and what it says is useful.',
    "TO CHECK WITH FIRAZ: weekday vs weekend ticket split; share of customers he recognises as regulars; the nearest legacy Dis-Chem and whether he sees customers switching to it; his busiest hour; floor area of Melrose vs Irene. The business-park reading, the leakage point and the 'one box of Adcodol' line are the team's, to be confirmed with him.\n\nDATA STILL NEEDED: ticket volume and time to serve by OTC vs script, monthly; revenue and transactions vs projections, monthly; Careline complaints coded.");
  subhead(s, M, 1.85, 4.4, 'Why Melrose Arch holds to the process, and why it works there');
  bullets(s, M, 2.1, 4.4, 3.3, [
    'Exposure. A small store in a business park. The same office workers come back several times a month, so each customer meets the process many times and gets used to it. People still complain, but far less than at opening and far less than at Irene.',
    'Visit intent. A lunch-break customer came for something specific and expected a queue. Fewer wait complaints, but also less browsing, which is where the OTC sales gap shows up.',
    'Size and shape. Short walks from Hub to drop-off to collections, and weekday traffic never builds the Saturday wall that drowns Irene.',
    'Leakage. A legacy Dis-Chem nearby. Customers who truly dislike the process most likely go there. We hear the complaints of the people who stayed.',
    'The same complaint, even here. The unhappy customers came for one item, most often OTC. Before, OTC took almost no effort. Now it takes a ticket and two queues. "Why all this effort for one box of Adcodol?"'], 8.5);
  subhead(s, 5.2, 1.85, 4.3, 'Why Irene changed, and what the change does');
  bullets(s, 5.2, 2.1, 4.3, 1.5, [
    'Pressure. Weekend peaks, new patients with very long scripts, and about 80% of customers who do not want to shop. One-item customers waited six or seven minutes behind a 24-item script: "queuing twice".',
    'The fix removes people from the bottlenecks. The OTC path takes the one-item customer out of the pick-and-pack dashboard and out of the collections queue, instead of sending them into the same jams a little faster.',
    'The residual Saturday chaos is understaffing (six on shift when the store needs eight) and long new scripts, not OTC.'], 8.5);
  subhead(s, 5.2, 3.65, 4.3, 'Three differences to control for');
  numbered(s, 5.2, 3.9, 4.3, 1.5, [
    'Age of store. New stores open OTC-heavy and drift to scripts. Melrose: 72% OTC at opening, about 45% now. Irene at 60-70% expects the same drift.',
    'Staffing. Irene ran six on Saturdays when it needs eight. Melrose opened with nine.',
    "Technology. Irene has a collections call-out flow Melrose lacks: \"Melrose is now the forgotten child.\""], 8, C.gold);
}

// ---------- 3.1 ----------
{
  const s = base('Section 3 · Where are we going?', 'Slide 3.1', 'Two questions decide every pharmacy visit',
    'The future pharmacy asks the customer one question at the kiosk and the pharmacist one question at the counter. Everything else is a mechanism for making the answers true.',
    "For scripts this is the pharmacy as designed. Decoupling still happens. It happens after the pharmacist knows what the order is, instead of at the ticket before anyone does.\n\nThe time is the promise. \"Waiting is fine, being unsure isn't\" was the clearest finding of the January customer study.");
  subhead(s, M, 1.85, 4.4, 'At the kiosk · Talk to a pharmacist, or do you know what you want?');
  card(s, M, 2.1, 4.4, 1.1, null, 'Talk to a pharmacist', 'Take a ticket. Scan your script at the kiosk if you have one, so it is open in front of the pharmacist when you are called. One conversation covers the script, generics, anything else you need, and how to take it.');
  card(s, M, 3.27, 4.4, 1.5, null, 'I know what I want', 'Build the order at the kiosk or on your phone: repeats from your profile, over-the-counter items from a categorised list. Your details are captured there, so nobody asks again. Collect at the collections counter when it is ready. Pharmacy-only medicines are still handed over by pharmacy staff, as the law requires. The conversation is the part you skip, not the pharmacist.');
  subhead(s, 5.2, 1.85, 4.3, 'At the counter · Is everything on this order within my reach?');
  card(s, 5.2, 2.1, 4.3, 0.85, null, 'Yes. It goes now.', 'The pharmacist reaches for it, explains it, hands it over. One stop.', { border: C.green, borderW: 1.5, fill: C.greenTint });
  card(s, 5.2, 3.02, 4.3, 0.9, null, 'No. It needs preparation time.', 'The pharmacist says how long. The customer collects at the collections counter, or roams, or leaves and comes back.');
  s.addText('Decided once, when the order is confirmed, from what the pharmacist can see: the shelf behind them, what is in stock, and whether anything needs a medical scheme authorisation. It never changes mid-conversation, so the back always knows which orders are theirs.',
    { x: 5.2, y: 4.0, w: 4.3, h: 0.78, fontFace: F, fontSize: 8, color: C.soft, valign: 'top', isTextBox: true, margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: M, y: 4.88, w: 9, h: 0.5, fill: { color: C.goldTint }, line: { color: C.goldTint } });
  s.addText('What is behind me goes now. What is not gets a time.', { x: M + 0.18, y: 4.88, w: 8.64, h: 0.5, fontFace: F, fontSize: 15, bold: true, color: C.ink, valign: 'middle', isTextBox: true, margin: 0 });
  // make callout text bigger
}

// ---------- 3.2 ----------
{
  const s = base('Section 3 · Where are we going?', 'Slide 3.2', 'One rule, three kinds of store',
    "The rule does not change from store to store. What changes is how much sits within the pharmacist's reach, and that is what the roadmap is really deciding.",
    'DATA STILL NEEDED: SKU-level OTC volume curve from Unisolv (share of OTC-only transactions the top 100 lines cover). At Irene, per order: line count and item type against pick time, and against whether the item was handed over at the counter or fell back to collections. How often the Irene fast path falls back today.');
  table(s, M, 1.85, 9, [
    ['', 'Small manual store', 'Medium manual store (Melrose Arch, Irene, the Q4 stores)', 'Automated picker store (ROWA, from 2027)'],
    ['Within reach', 'A curated shelf of the top OTC lines behind the pharmacist', 'The same shelf, plus in-stock small orders brought forward from the back when the data shows it can be done in under two minutes', 'Everything the machine holds. The wall itself is within reach'],
    ['Goes now', 'Shelf items only', 'Shelf items; then small repeats and OTC as the fast path earns it', 'Almost every order, delivered to the counter in seconds'],
    ['Gets a time', 'Everything behind the wall', 'Everything else', 'Only genuine waits: scheme authorisation, compounding, out of stock'],
    ['Collections', 'One collections counter', 'One collections counter', 'One collections counter. A known order built at the kiosk can also be released directly by the machine'],
    ['Staff it needs', 'No spare hands. The pharmacist is the picker', 'Roughly one picker per dispenser to run the fast path', 'Fewer pickers. The machine picks']],
    [1.3, 2.3, 2.9, 2.5], { rowH: 0.4, fs: 8.5, boldFirstCol: true });
  s.addText('Two thirds of the estate will pick by hand for the foreseeable future, so the medium manual store is the one to get right. The Q4 openings are fifteen chances to do that. The automated store does not need a different process. It needs the same rule with a much wider shelf.',
    { x: M, y: 4.45, w: 5.4, h: 0.95, fontFace: F, fontSize: 9, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  callout(s, 6.1, 4.4, 3.4, 1.0, 'The planogram decides what "now" covers. Data decides when to widen it.', 'The shelf is the dial');
}

// ---------- 3.3 ----------
{
  const s = base('Section 3 · Where are we going?', 'Slide 3.3', 'What has to be true for the rule to work',
    'Six things make the rule real. Three we can do in the Q4 stores. Three depend on systems already on the roadmap, and the rule tells us why they matter.',
    'The earlier guardrails still hold and sit beneath this one: never turn your back on the customer; never trade off the urgently sick customer; keep the pharmacy\'s health authority visible; the script flow for orders that need preparation is unchanged.');
  subhead(s, M, 1.85, 4.4, 'In the Q4 stores');
  numbered(s, M, 2.1, 4.4, 2.6, [
    'A shelf behind the pharmacist, planogrammed from the volume data, screened from the queue. It is the threshold, the display that prompts the second sale, and the visible cue of a pharmacy.',
    'Route set at confirmation. The order carries "now" or "collect" from the moment it is confirmed, on the label and on the dashboard, so the back never receives an order the counter is also handling.',
    'One collections counter, called from any free counter when the store is busy, as Irene already does.'], 9);
  subhead(s, 5.2, 1.85, 4.3, 'On the systems roadmap');
  numbered(s, 5.2, 2.1, 4.3, 2.6, [
    'Orders captured at the kiosk. A known-item order built before the customer is called is preparation moved earlier, so more orders are ready sooner. Needs the kiosk basket to land in the dispensing system.',
    'Payment at the pharmacy counter. Until then, "one stop" is still two stops. Currently planned for 2028; the rule makes the case to bring it forward.',
    'Line-by-line release in Bricks. Today the whole script is dispensed as one order, so picking starts only after the conversation ends. Releasing each line as the pharmacist confirms it is what lets "now" grow beyond the shelf.'], 9, C.gold, 4);
  callout(s, M, 4.8, 9, 0.6, 'The guardrail this pack asks the Steer Group to adopt: decoupling at the counter is data-driven. The default is the shelf. Anything wider has to be earned by measured pick times, store by store.');
}

// ---------- 4.1 ----------
{
  const s = base('Section 4 · How do we get there?', 'Slide 4.1', 'Three routes from here',
    'Fifteen stores open before Christmas. Each one is trained on a pharmacy process in the weeks before. There are three things we can do about that, and we recommend the second.', null);
  const cw = 2.9, gap = 0.15, y = 1.85, h = 2.85;
  card(s, M, y, cw, h, 'Route 1', 'Measure first',
    'Leave both stores as they are, pull the data, decide in the new year.\n\nCost: fifteen stores open on the current process and are retrained later, and the OTC sales gap runs for another quarter. Value: the cleanest data on the unchanged process.');
  card(s, M + cw + gap, y, cw, h, 'Route 2 · recommended', 'Put the rule into the Q4 stores, and measure',
    "Before Rand View trains, add the shelf, route-at-confirmation and the single collections counter to the pharmacy process. Keep Irene's fast printer running as the phase-two test. Pull the digital planogram forward onto the existing screens as display support. Run the data plan for three months across all stores.\n\nCost: a planogram, a training update and a dashboard flag. Value: fifteen stores open on a process that already answers the one-item customer, and the threshold is set from measured data by the review.", { border: C.green, borderW: 2, fill: C.greenTint });
  card(s, M + 2 * (cw + gap), y, cw, h, 'Route 3', 'Structural change now',
    'A separate OTC counter, split flows, the kiosk basket build, an OTC vending unit.\n\nHeld for the future state. Each depends on systems that are not yet there (Bricks, kiosk-to-dispensing integration) or reopens a SteerCo decision without data behind it.');
  callout(s, M, 4.78, 9, 0.6, 'Route two changes three things in the stores and nothing in the systems. Everything it needs exists in a Dis-Chem pharmacy today.');
}

// ---------- 4.2 ----------
{
  const s = base('Section 4 · How do we get there?', 'Slide 4.2', 'Every option we have heard, placed',
    'Two workshops produced twelve options. Placed against impact and effort, with the staffing each one needs and whether it works in a small store, they sort themselves into four groups.',
    "Impact and effort are the team's judgement from the two workshops, not measured. Regulatory flag on every screen option: Schedule 0 and 1 medicines may be advertised to the public, Schedule 2 may not, and whether an in-pharmacy display of stock counts as advertising is unresolved.");
  table(s, M, 1.85, 9, [
    ['Option', 'What it is', 'Impact', 'Effort', 'Spare hands?', 'Small store?', 'Group'],
    ['Curated shelf behind the pharmacist', 'Top OTC lines within reach, planogrammed, screened', 'High', 'Low', 'No', 'Yes', 'Now · route 2'],
    ['Route set at confirmation', 'Order flagged now / collect on the label and dashboard', 'High', 'Low', 'No', 'Yes', 'Now · route 2'],
    ['One collections counter, any counter calls', "Irene's collections change", 'Medium', 'Low', 'No', 'Yes', 'Now · route 2'],
    ['Digital OTC planogram on existing screens', 'Product display; rotating slots sellable to vendors', 'Medium', 'Low', 'No', 'Yes', 'Now · route 2'],
    ['Fast printer and bring-forward (Irene)', 'In-stock small orders brought to the counter', 'High', 'Low', 'Yes', 'No', 'Test · phase 2'],
    ['Interactive categorised browse screen', 'Pain and fever, sinus, etc. at Hub or counter', 'Medium', 'Medium', 'No', 'Yes', 'Test'],
    ['Better Rewards purchase-history lookup', '"I can\'t remember which one" answered from the profile', 'Low', 'Low', 'No', 'Yes', 'Test'],
    ['Invisible back-of-house OTC priority lane', 'Separate queue in the back, same front', 'Medium', 'Medium', 'Yes', 'No', 'Later · needs Bricks routing'],
    ['Kiosk or phone basket before ticketing', 'Order built while waiting; pick starts early', 'High', 'High', 'No', 'Yes', 'Later · integration'],
    ['Pass-through hatch or pneumatic tube', 'Item delivered to the counter mechanically', 'Medium', 'High', 'Partly', 'No', 'Later · fit-out'],
    ['Separate OTC counter / split flows', 'A distinct OTC service point', 'Medium', 'High', 'Yes', 'No', 'Not now · reopens SteerCo'],
    ['OTC vending unit', 'Self-dispensing machine', 'Unknown', 'High', 'No', 'Unknown', 'Not now · unresearched'],
    ['Do nothing and observe', 'Deliberate non-intervention', 'Low', 'None', 'No', 'Yes', 'Superseded by route 1']],
    [2.3, 2.6, 0.7, 0.7, 0.8, 0.8, 1.1], { rowH: 0.245, fs: 7.5, boldFirstCol: true });
}

// ---------- 4.3 ----------
{
  const s = base('Section 4 · How do we get there?', 'Slide 4.3', 'What we ask the Steer Group to decide',
    'Four decisions, one date, and a measurement plan with owners.', 'Owners as proposed by the team; to be confirmed with each person.');
  subhead(s, M, 1.85, 4.2, 'The decisions');
  numbered(s, M, 2.1, 4.2, 2.7, [
    'Adopt the rule and the guardrail. What is within the pharmacist\'s reach goes now; what is not gets a time. Decoupling at the counter is data-driven, with the shelf as the default.',
    'Approve the three Q4 changes for the pharmacy training: the shelf, route at confirmation, one collections counter. Rand View trains first, so the update is needed before mid-October.',
    'Approve the data plan, with the owners named.',
    'Review in January with three months of data, to set the threshold per store and decide whether the fast path becomes phase two.'], 9);
  callout(s, M, 4.85, 4.2, 0.6, 'The first store trains in five weeks. Decisions one and two are the ones with a date on them.');
  subhead(s, 5.0, 1.85, 4.5, 'The measurement plan');
  table(s, 5.0, 2.1, 4.5, [
    ['What we measure', 'Source', 'Owner'],
    ['Share of OTC-only visits served in one stop', 'Ticketing by order type', 'Business analyst'],
    ['Time to serve by order type, monthly, all stores', 'Qmatic and dashboard', 'Product manager'],
    ['Pick time by line count and item type; Irene fast-path fallback rate', 'Dashboard, Irene', 'Business analyst'],
    ['OTC revenue and transactions vs projections, monthly', 'Reporting', 'Carol Mazaris'],
    ['Complaints coded OTC / queue / wait', 'Careline (C4C)', "Tamsin's team"],
    ['Hub congestion and walk-outs at peak', 'Saturday intercepts, both stores', 'Lizette'],
    ['Shelf coverage of OTC-only transactions', 'Unisolv SKU volume', 'Business analyst']],
    [2.2, 1.3, 1.0], { rowH: 0.36, fs: 7.5 });
}

// ---------- Appendix A.1 sources ----------
{
  const s = base('Appendix', 'A.1', 'Sources and evidence tiers', 'What the pack rests on, and how far each source can be trusted.', null);
  table(s, M, 1.85, 9, [
    ['Source', 'Date', 'What it gives the pack', 'Tier'],
    ['SteerCo #1 pack and decision log', 'Nov 2025', 'The original decisions and their stated rationales', 'A · programme record'],
    ['Bigly dispenser principles board', 'Feb 2026', 'Never turn your back; production-line fulfilment; counter for care', 'Design intent'],
    ['Melrose MVP workshops', 'Feb 2026', 'What launched vs what was deferred (payment 2028, digital shelves)', 'A · programme record'],
    ['SOTF customer study, n=12', 'Jan 2026', '"Waiting is fine, being unsure isn\'t"; visible human fallback', 'B · small-n qualitative'],
    ['Training pack as launched', 'May-Jul 2026', 'The live process spine, queue rules, workarounds', 'A · operating procedure'],
    ['Internal OTC brainstorm', '2 Sep 2026', 'Irene workaround, Medirite/Clicks precedent, options, guardrails', 'A as record; store figures relayed'],
    ['Frontline OTC workshop', '10 Sep 2026', 'Both stores\' managers and hub advisors: friction, mix drift, sales gap, staffing ratio', 'A as record; figures are managers\' working numbers'],
    ['Q4 rollout plan', 'Sep 2026', '15 stores, 22 Oct to 3 Dec, 3 on hold', 'A · plan, not outcome'],
    ['Careline complaints', 'ongoing', 'The post-operative husband case; OTC and queue complaints', 'Signals; coding outstanding']],
    [2.4, 1.0, 3.6, 2.0], { rowH: 0.3, fs: 8 });
}

// ---------- Appendix A.2 data + reg flag ----------
{
  const s = base('Appendix', 'A.2', 'Data still needed, and one regulatory flag', 'Every figure quoted from a store manager is a working number until one of these pulls confirms it.', null);
  subhead(s, M, 1.85, 5.4, 'Data pulls');
  numbered(s, M, 2.1, 5.4, 3.2, [
    'Pharmacy revenue and transaction volume for both stores, OTC vs script, month by month, against original projections.',
    'Ticket volume and time to serve for both stores, OTC vs script, month by month.',
    'Ticketing data to confirm how the Irene OTC path actually runs (who picks, who hands over) and how often it falls back.',
    'Careline complaints for both stores, coded OTC / queue / wait.',
    'Time-to-serve baseline confirmed with the product manager.',
    'SKU-level OTC volume curve from Unisolv, to size the shelf.',
    'Legacy-store time-and-motion observation for OTC.'], 9);
  card(s, 6.2, 1.85, 3.3, 3.45, 'Regulatory flag', 'Advertising Schedule 2 medicines',
    'Schedule 0 and Schedule 1 medicines may be advertised to the public. Schedule 2 may not. A good share of over-the-counter lines are Schedule 2.\n\nWhether a digital shelf showing stock and prices inside the pharmacy counts as advertising is not settled. Until it is, treat it as a constraint on every screen option (digital planogram, browse screen, kiosk basket display), and check the Medicines Act advertising provisions and the Good Pharmacy Practice rules before any screen goes live.', { fill: C.warnTint, border: C.warn, fs: 9 });
}

// ---------- Appendix A.3 2x2 ----------
{
  const s = base('Appendix', 'A.3', 'Every customer need lands in one of the two paths', 'The customer-needs grid behind section 3. Product class never appears on the axes: OTC vs script was a proxy for preparation time, and the shelf rule uses preparation time directly.', null);
  const gx = 2.2, gy = 2.1, cw = 3.4, ch = 1.5, gap = 0.1;
  s.addText('NO TIME  ·  "the pharmacy is my whole visit, get me out"', { x: gx, y: gy - 0.3, w: cw, h: 0.25, fontFace: F, fontSize: 8, bold: true, color: C.green, align: 'center', isTextBox: true, margin: 0 });
  s.addText('TIME TO SPARE  ·  "one stop of many, I\'ll look around"', { x: gx + cw + gap, y: gy - 0.3, w: cw, h: 0.25, fontFace: F, fontSize: 8, bold: true, color: C.green, align: 'center', isTextBox: true, margin: 0 });
  s.addText('I KNOW WHAT I WANT', { x: M, y: gy, w: 1.6, h: ch, fontFace: F, fontSize: 8, bold: true, color: C.green, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('I WANT ADVICE', { x: M, y: gy + ch + gap, w: 1.6, h: ch, fontFace: F, fontSize: 8, bold: true, color: C.green, valign: 'middle', isTextBox: true, margin: 0 });
  const cells = [
    ['One-box OTC, one-item repeat, the pop-in', 'Kiosk order, collect, gone. Shelf items go now if they see a pharmacist.', 'Know what I want path'],
    ['The monthly chronic run', 'Kiosk order, roam or leave, collect later. Decoupling as designed.', 'Know what I want path'],
    ['The sick person, the parent with a feverish child', 'Pharmacist now. Shelf items handed over in the conversation. Never sent to roam.', 'Talk to a pharmacist path'],
    ['"What should I take for sinus?"', 'Pharmacist. The shelf as display. Second item prompted.', 'Talk to a pharmacist path']];
  cells.forEach((c, i) => {
    const x = gx + (i % 2) * (cw + gap), y = gy + Math.floor(i / 2) * (ch + gap);
    card(s, x, y, cw, ch, c[2], c[0], c[1], { fs: 9 });
  });
}

pres.writeFile({ fileName: '/home/user/tamsin-work/deliverables/sotf/otc-exec-pack.pptx' }).then(f => console.log('wrote', f));
