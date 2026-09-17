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
  s.addText('STORE OF THE FUTURE  ·  STEER GROUP PACK  ·  VERSION 2', { x: M, y: 1.2, w: 9, h: 0.3, fontFace: F, fontSize: 10, color: C.gold, bold: true, charSpacing: 2, isTextBox: true, margin: 0 });
  s.addText('The OTC Solve', { x: M, y: 1.6, w: 9, h: 1.1, fontFace: F, fontSize: 54, bold: true, color: C.white, isTextBox: true, margin: 0 });
  s.addText("The business asked us to address a concern: OTC sales are dropping because the OTC process runs against how people shop for OTC. This pack says what we know, what we don't, the three things we could do, and the one we recommend.",
    { x: M, y: 2.8, w: 7.5, h: 1.2, fontFace: F, fontSize: 13, color: 'CFD8D2', isTextBox: true, margin: 0 });
  s.addText('Bigly Labs for Dis-Chem  ·  September 2026  ·  store figures are working numbers until pulled from reporting', { x: M, y: H - 0.7, w: 9, h: 0.3, fontFace: F, fontSize: 9, color: '84908A', isTextBox: true, margin: 0 });
}
// ---------- 1 ----------
{
  const s = base('The OTC solve', 'Slide 1', 'The ask, and an honest answer', 'Store of the Future is our responsibility. The business has asked us to do something about OTC. Here is where we stand before we propose anything.', null);
  subhead(s, M, 1.85, 4.4, 'The ask');
  s.addText('Address the perception that OTC sales are dropping because the current OTC process now runs contrary to how people want to shop for OTC. Come back with a solve, or with the evidence that one is not needed.', { x: M, y: 2.1, w: 4.4, h: 0.85, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  subhead(s, M, 3.0, 4.4, 'What we can say with confidence');
  bullets(s, M, 3.25, 4.4, 2.1, ['Scripts work decoupled. Both pharmacy managers want to keep it that way. Scripts are not in question in this pack.', 'OTC is where the complaints are, at both stores, and most come from customers who came for one item.', "Irene's team changed the OTC process in its first weeks and reports no OTC complaints since. Melrose Arch kept to the process and reports complaints fading as customers learn it."], 9);
  subhead(s, 5.2, 1.85, 4.3, 'What we cannot say yet');
  bullets(s, 5.2, 2.1, 4.3, 2.1, ["Whether OTC sales are actually down. The one number we hold is a manager's benchmark against a comparator store. No sales data by OTC vs script has been pulled for either store.", 'What the OTC process costs a customer in minutes. No time-to-serve data by order type has been pulled.', 'A like-for-like comparison. Melrose is four months older, in a business park, with a different customer. Irene has changed the process, so it no longer measures the process as designed.'], 9);
  callout(s, 5.2, 4.3, 4.3, 0.95, 'The evidence is anecdotal and it points one way. That is enough to act on carefully, and not enough to act on expensively.');
}
// ---------- 2 ----------
{
  const s = base('The OTC solve', 'Slide 2', 'Three changes to the pharmacy, and the problem each one solved', 'Store of the Future changed three things about how a customer gets medicine. Each was made on purpose, and the reasons behind them still hold.',
    'Evidence: SteerCo #1 pack and decision log (Nov 2025); Bigly dispenser principles; OTC brainstorm 2 Sep 2026.');
  const cw = 2.9, gap = 0.15, y = 1.85, h = 2.85;
  card(s, M, y, cw, h, 'Change 1', 'Decoupled counters', 'The customer hands in at one counter and collects at another, with the picking done out of sight in between.\n\nIn a legacy store the pharmacist takes the script, turns round, and hunts stock for up to five minutes while the customer stands at the counter. Decoupling keeps the pharmacist facing the customer and turns the picking into a production line, so a long script no longer holds up the counter and a customer with time to wait can roam the store instead of standing in a queue.');
  card(s, M + cw + gap, y, cw, h, 'Change 2', 'One queue for everything', 'Scripts and over-the-counter medicine (OTC: the pain, cold, allergy and stomach lines a pharmacist can sell without a prescription) go through the same ticket, the same counter and the same pick-and-pack.\n\nOne process means less counter space given to the pharmacy, one set of staff to train, and no second counter to run. It also changes how customers think. With one counter for everything, they stop treating scripts and OTC as two separate errands and stop forgetting to ask for the OTC item at the dispensing counter. Every visit becomes one combined script-and-OTC conversation, and one combined sale.', { fs: 8 });
  card(s, M + 2 * (cw + gap), y, cw, h, 'Change 3', 'No visible stock', 'Every medicine sits behind the wall. Nothing is on a shelf the customer can see or the pharmacist can reach.\n\nThis protects the decoupling: if stock is within reach, the pharmacist will turn round and fetch it, and the customer, seeing it there, will ask why they must wait for a picker when the pharmacist could just turn round. Moving the stock out of reach removes both the temptation and the complaint. It also retired the legacy OTC wall, which was untidy, carried slow stock for years, and let the queue see what the person in front was buying.', { fs: 8 });
  callout(s, M, 4.78, 9, 0.6, "These three came from the programme's own design principles for the dispenser, agreed before Melrose Arch opened: never turn your back on the customer, fulfil like a production line, keep the counter for care. The options that follow are judged against them.");
}
// ---------- 3 ----------
{
  const s = base('The OTC solve', 'Slide 3', 'Where OTC hurts: the customer, the store, the business', 'For a script customer the process fits the wait. For someone buying one box of painkillers, the wait is the process. Every line names where it came from.',
    'Sources: both dispensary managers and hub advisors (10 Sep workshop); Careline complaint (24 points, the post-operative husband); Melrose mystery shop. The R50-100k figure is the Melrose dispensary manager\'s working number until pulled from reporting.');
  const cw = 2.9, gap = 0.15, y = 1.85, h = 3.45;
  card(s, M, y, cw, h, 'The customer', '"Why all this effort for one box?"', 'Take a ticket. Wait to be called to hand in. Wait again to be called to collect. Walk to the front till to pay. Three walks and two queues for an item every other Dis-Chem hands over in under a minute.\n\nWith no stock on view, customers who know the box but not the name give up and leave. The wait feels far longer than it is, because the work is invisible: a customer who complained of 30 minutes had waited 44 seconds.\n\nThe customer who cannot roam: a woman collecting for her husband, waiting in the car after an operation, was told repeatedly to "go shop".\n\nSources: both managers · Irene hub advisor · Careline · mystery shop', { fs: 8 });
  card(s, M + cw + gap, y, cw, h, 'The store', 'One picker for every dispenser', 'Running hand-in, picking and collection as separate jobs needs roughly one picker in the back for every dispenser at the front. Both managers arrived at that ratio independently. Irene needs eight on a Saturday and its takings justify six. Small stores with three staff cannot split roles at all.\n\nAt peak, two long scripts fill the shared queue. About 80% of Irene\'s customers do not want to shop; they hover around the four-seat Hub and block the aisles, and hub advisors spend their shift steering people rather than serving them.\n\nSources: both managers · Irene hub advisor', { fs: 8 });
  card(s, M + 2 * (cw + gap), y, cw, h, 'The business', 'An early sales signal', 'Melrose Arch\'s manager benchmarks his OTC turnover against two stores of similar size that opened a month earlier. Blueberry Square, in a lower-income area where OTC would normally sell less, takes R50,000 to R100,000 a month more in OTC than Melrose. He puts it down to the missing display: "six out of every ten patients who come to buy one item will see a second item on the shelf".\n\nAgainst that: hidden prices have made premium advice easier to sell.\n\nSource: Melrose dispensary manager. A working number until pulled from reporting.', { fs: 8 });
}
// ---------- 4 ----------
{
  const s = base('The OTC solve', 'Slide 4', 'Two stores are live. They run the pharmacy two different ways', 'Melrose Arch runs the pharmacy as it was trained. Irene runs the same process for scripts and a faster path for OTC that its own team built in the first weeks.',
    "TO CONFIRM BEFORE PRESENTING: reports that some Irene pharmacists walk to the back and pick the OTC item themselves. If so, it breaks 'never turn your back'. Check against the business analyst's ticketing data.");
  subhead(s, M, 1.85, 4.4, 'Melrose Arch · opened 7 May 2026 · as trained');
  numbered(s, M, 2.1, 4.4, 1.9, ['Ticket at the Health Hub.', 'Called to the drop-off counter. The dispenser captures the script or the OTC request.', 'Roam while the order goes through pick-and-pack.', 'Called to the collections counter. Sign, take the bag.', 'Pay at the front-shop till.'], 9);
  s.addText('Same five steps for a 24-item script and a single box of antihistamine. Complaints have faded as regulars learn it. The customers who still dislike it came for one item.', { x: M, y: 4.1, w: 4.4, h: 0.9, fontFace: F, fontSize: 9, italic: true, color: C.soft, valign: 'top', isTextBox: true, margin: 0 });
  subhead(s, 5.2, 1.85, 4.3, 'Irene · live since July 2026 · as run');
  numbered(s, 5.2, 2.1, 4.3, 2.0, ['Scripts, and scripts with OTC add-ons, follow the five steps unchanged.', 'An OTC-only customer stays at the drop-off counter. The dispenser captures the sale; the label prints to a dedicated printer in the back.', 'Whoever is free in the back picks it at once and brings it to the dispenser, who hands it over. One stop.', 'Collections are called from any free counter, so fewer people pile up around the Hub.'], 9, C.gold);
  s.addText('No new technology. The manager reports no OTC complaints since, and no fairness complaints from script customers. It needs a spare pair of hands in the back.', { x: 5.2, y: 4.2, w: 4.3, h: 0.8, fontFace: F, fontSize: 9, italic: true, color: C.soft, valign: 'top', isTextBox: true, margin: 0 });
}
// ---------- 5 ----------
{
  const s = base('The OTC solve', 'Slide 5', 'Three options for OTC', 'Scripts stay decoupled in all three. The choice is about OTC only.', null);
  const cw = 2.9, gap = 0.15, y = 1.85, h = 3.2;
  card(s, M, y, cw, h, 'Option 1', 'Do nothing, and get the data', 'Leave both stores as they are. Pull sales, ticket and time-to-serve data by OTC vs script for both, run Saturday intercepts, observe a legacy store, and decide in the new year on evidence rather than a hunch.\n\nIrene keeps running its path as a live proof of concept, framed as an operations-led adjustment to the process rather than a breach of it.', { fs: 9 });
  card(s, M + cw + gap, y, cw, h, 'Option 2', 'Roll OTC back to a coupled counter', 'A conscious recoupling for OTC only. One or more pharmacists own the whole OTC journey at a counter: the conversation, the pick from a wall of stock behind them, the handover. Scripts stay in the decoupled flow beside it.\n\nThis is a shopfit: counter positions, an OTC wall, stock in two places. It is the legacy OTC experience placed inside the new store.', { fs: 9 });
  card(s, M + 2 * (cw + gap), y, cw, h, 'Option 3', 'A hybrid: stay decoupled, bring the item to the pharmacist', 'What Irene does, formalised. OTC-only orders route to a dedicated printer; someone in the back brings the item to the counter while the pharmacist stays with the customer. Stock stays behind the wall, the pharmacist never turns round, scripts run as designed.\n\nA partial recoupling of the decoupled process, for the one order type that never needed the wait.', { fs: 9, border: C.green, borderW: 2, fill: C.greenTint });
}
// ---------- 6 ----------
{
  const s = base('The OTC solve', 'Slide 6', 'Pros and cons', 'Judged on cost, speed, what each does for the one-item customer and the sales question, what it asks of staffing, and what it risks.', null);
  table(s, M, 1.85, 9, [
    ['', '1 · Do nothing, get the data', '2 · Roll OTC back to a coupled counter', '3 · Hybrid, Irene formalised'],
    ['Cost', 'None now', 'Shopfit in every store: counter, OTC wall, split stock', 'A printer, a training update, a routing rule'],
    ['Speed to act', 'Nothing changes for fifteen new stores', 'Months; too late for the Q4 openings', 'Before the first Q4 store trains in mid-October'],
    ['The one-item customer', 'Keeps queuing twice', 'Served as in a legacy store', 'Served in one stop at the counter'],
    ['Display and sales', 'Unanswered', 'Answered by the wall', 'Not by itself; needs the digital planogram alongside'],
    ['Staffing', 'As today', 'Dedicated OTC pharmacists at peak', 'A spare pair of hands in the back; hard for three-staff stores'],
    ['Design principles', 'Held', 'Stock within reach, pharmacist turns round: two given up for OTC', 'All held: stock behind the wall, pharmacist facing the customer, scripts untouched'],
    ['Risk', 'Sales gap runs another quarter; fifteen stores to retrain later', 'Reopens a SteerCo decision on a hunch; hardest to undo', 'Falls back to collections at peak if the back is short; needs measuring'],
    ['Evidence behind it', 'The case for it is the lack of data', 'Legacy stores, and no OTC standard across them', 'One store, ten weeks, manager-reported']],
    [1.5, 2.3, 2.6, 2.6], { rowH: 0.36, fs: 8.5, boldFirstCol: true });
}
// ---------- 7 ----------
{
  const s = base('The OTC solve', 'Slide 7', "Recommendation: the hybrid, Irene's version with four changes", 'It captures most of the upside of a rollback without the shopfit, it keeps every design principle, and the people running the stores have already proven it works on a normal day. We formalise what they found.',
    'Known limit: the hybrid needs a spare pair of hands in the back. The measurement plan tracks how often it falls back to collections at peak and in smaller stores, so the January review can set where it applies.');
  subhead(s, M, 1.85, 4.6, 'The four changes to the pharmacy process');
  numbered(s, M, 2.1, 4.6, 3.1, ['A dedicated OTC printer in the back. When the dispenser confirms an OTC-only order it prints there; anything else follows the normal flow. Decided once, at confirmation, so the back always knows which orders are theirs.', 'Counter handover for OTC-only orders. The pharmacist stays with the customer; the item is brought forward and handed over. Scripts with OTC add-ons stay in the decoupled flow.', 'Collections called from any free counter, as Irene already does, so people stop piling up around the Hub.', 'The digital OTC planogram on the existing screens, to answer the display question. Both stores back it; rotating slots can be sold to vendors.'], 9);
  subhead(s, 5.4, 1.85, 4.1, 'Why this one');
  bullets(s, 5.4, 2.1, 4.1, 1.9, ['Nothing in the systems changes. Everything it needs exists in a Dis-Chem pharmacy today.', 'Fifteen stores train before Christmas, the first in five weeks. They can open on this.', 'It keeps the option to roll back later if the data says so, and keeps decoupling for scripts, which works.', 'It trusts the people working the system. They found the way through. We write it down and measure it.'], 9);
  callout(s, 5.4, 4.1, 4.1, 1.15, 'Approve the four changes for the Q4 pharmacy training, and the measurement plan on slide 9. Review in January with three months of data.', 'The ask');
}
// ---------- 8 ----------
{
  const s = base('The OTC solve', 'Slide 8', 'What is coming anyway, and the friction each piece removes', 'Four pieces already on the roadmap take congestion and waiting out of the pharmacy on their own. The hybrid is the bridge to them, not a substitute for them.',
    'In-store digital script submission was deferred from the Melrose MVP to H2 2026; OCR script checkout is in the app rebuild; express collect is in the future-state scripting concept set. Dates are plans, not commitments.');
  table(s, M, 1.85, 9, [
    ['Piece', 'What it is', 'The friction it removes'],
    ['Script scan at the kiosk', 'The customer scans their script when they take a ticket. It is captured before they are called.', 'The counter conversation starts with the script already open, so hand-in is shorter and the queue behind it moves. Picking can begin before the customer reaches the counter.'],
    ['OCR at the counter', 'The script is read by the system rather than typed line by line by the dispenser.', 'Cuts the typing that makes a five-item hand-in slow and a one-item OTC capture slower than a repeat. Shorter counter dwell means shorter queues at the Hub.'],
    ['Drop and shop', 'Hand in and choose: collect in ten minutes, or come back later today or tomorrow.', 'The customer who does not want to shop can leave instead of hovering. Fewer people around the four-seat Hub at peak, and the wait stops being a wait.'],
    ['Express collect', 'A ready order is collected by code, without a counter conversation, with the pharmacist a few steps away if wanted.', 'Takes the customers who only need a handover out of the collections queue, so the counter is left for the people who need the pharmacist.']],
    [1.7, 3.3, 4.0], { rowH: 0.5, fs: 8.5, boldFirstCol: true });
  callout(s, M, 4.5, 9, 0.8, 'Each of these moves work earlier or takes a customer out of a queue. None changes the rule the hybrid relies on: a one-item OTC customer should not wait twice. When the automated picker arrives in 2027 it removes the need for the runner, and the same rule holds.');
}
// ---------- 9 ----------
{
  const s = base('The OTC solve', 'Slide 9', 'What we measure, and when we come back', 'Whichever option the room chooses, these are the pulls that turn a hunch into a decision. Owners as proposed, to be confirmed.', null);
  table(s, M, 1.85, 5.3, [
    ['What we measure', 'Source', 'Owner'],
    ['OTC revenue and transactions vs projections, monthly, both stores', 'Reporting', 'Carol Mazaris'],
    ['Ticket volume and time to serve by OTC vs script, monthly', 'Qmatic and dashboard', 'Product manager'],
    ['Share of OTC-only visits served in one stop; Irene fallback rate', 'Ticketing data', 'Business analyst'],
    ['Complaints coded OTC / queue / wait', 'Careline (C4C)', "Tamsin's team"],
    ['Hub congestion and walk-outs at peak', 'Saturday intercepts', 'Lizette'],
    ['OTC time and motion in a legacy store', 'One observer morning', "Tamsin's team"]],
    [2.6, 1.4, 1.3], { rowH: 0.4, fs: 8 });
  subhead(s, 6.1, 1.85, 3.4, 'Research alongside the data');
  bullets(s, 6.1, 2.1, 3.4, 1.9, ['Structured interviews with the Irene team: what triggers the path, who runs, what breaks at peak.', 'Clarifying questions for the Melrose manager on weekday vs weekend mix, regulars, and leakage to the nearby legacy store.', 'Confirm the time-to-serve baseline with the product manager.'], 9);
  callout(s, 6.1, 4.1, 3.4, 1.15, 'Three months of data across both stores and the first Q4 openings. Confirm, adjust or roll back on evidence.', 'January');
}
// ---------- A1 ----------
{
  const s = base('Appendix', 'A1', 'Fifteen more stores open before Christmas, the first in five weeks', 'Every one of them opens with manual pick-and-pack. Whatever we decide about OTC is what they are trained on.',
    "Programme rollout plan, Sep 2026. ROWA figures are the team's working numbers and need confirming with the programme.");
  table(s, M, 1.85, 4.4, [['Opens', 'Stores', 'Where'], ['22 Oct', '1', 'Rand View'], ['29 Oct', '5', 'October cluster'], ['1 Nov', '1', 'Umhlanga Crescent'], ['26 Nov', '5', 'November cluster'], ['3 Dec', '3', 'December cluster'], ['On hold', '3', 'Awaiting landlord handover']], [1.1, 0.9, 2.4], { rowH: 0.3, fs: 9 });
  s.addText('The automated picker (ROWA) arrives in 2027 and covers roughly a third of the estate. The other two thirds pick by hand, so the manual OTC process is a permanent process for most stores, and the Q4 openings are where it gets tested and made right.', { x: 5.2, y: 1.85, w: 4.3, h: 1.4, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  callout(s, 5.2, 3.35, 4.3, 1.2, 'Six of them in October. Rand View trains first, so any change to the pharmacy process is needed before mid-October.', '15 stores in six weeks');
}
// ---------- A2 ----------
{
  const s = base('Appendix', 'A2', 'Where this could go: the pharmacy in the simplest terms', 'Design thinking from the working sessions, parked here for later. Not a decision this pack asks for.', null);
  subhead(s, M, 1.85, 4.4, 'One question at the kiosk');
  s.addText('Do you want to talk to a pharmacist, or do you know what you want? Those who know build the order at the kiosk and collect. Those who want advice take a ticket and have one conversation.', { x: M, y: 2.1, w: 4.4, h: 0.95, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  subhead(s, M, 3.1, 4.4, 'One rule at the counter');
  s.addText('Is everything on this order within my reach? If yes, it goes now. If not, it needs preparation time and the pharmacist says how long. Decided once, at confirmation.', { x: M, y: 3.35, w: 4.4, h: 0.95, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  subhead(s, 5.2, 1.85, 4.3, 'Why it matters for the roadmap');
  s.addText("The rule does not change from store to store. What changes is how much sits within the pharmacist's reach: a shelf in a small store, a shelf plus a runner in a medium store, the whole wall once the automated picker arrives. The hybrid recommended in this pack is the medium-store version of that rule with the shelf still to come.\n\nThe customer-needs grid behind it (advice vs know-what-I-want; no time vs time to spare) shows every need lands in one of the two paths, and that OTC vs script was only ever a proxy for preparation time.", { x: 5.2, y: 2.1, w: 4.3, h: 2.6, fontFace: F, fontSize: 9.5, color: C.ink, valign: 'top', isTextBox: true, margin: 0, paraSpaceAfter: 6 });
}
// ---------- A3 ----------
{
  const s = base('Appendix', 'A3', 'Sources, evidence tiers, data still needed', null, null);
  table(s, M, 1.4, 9, [
    ['Source', 'Date', 'What it gives the pack', 'Tier'],
    ['SteerCo #1 pack and decision log', 'Nov 2025', 'The original decisions and their stated rationales', 'A · programme record'],
    ['Bigly dispenser principles board', 'Feb 2026', 'Never turn your back; production-line fulfilment; counter for care', 'Design intent'],
    ['Melrose MVP workshops', 'Feb 2026', 'What launched vs what was deferred', 'A · programme record'],
    ['SOTF customer study, n=12', 'Jan 2026', '"Waiting is fine, being unsure isn\'t"', 'B · small-n qualitative'],
    ['Training pack as launched', 'May-Jul 2026', 'The live process spine and queue rules', 'A · operating procedure'],
    ['Internal OTC brainstorm', '2 Sep 2026', 'Irene workaround, Medirite/Clicks precedent, options', 'A as record; store figures relayed'],
    ['Frontline OTC workshop', '10 Sep 2026', "Both stores' managers and hub advisors", "A as record; managers' working numbers"],
    ['Q4 rollout plan', 'Sep 2026', '15 stores, 22 Oct to 3 Dec', 'A · plan, not outcome']],
    [2.4, 1.0, 3.6, 2.0], { rowH: 0.3, fs: 8 });
  card(s, M, 4.45, 9, 0.85, 'Regulatory flag on any screen showing OTC', null, 'Schedule 0 and 1 medicines may be advertised to the public; Schedule 2 may not, and many OTC lines are Schedule 2. Whether an in-pharmacy display of stock counts as advertising is unresolved. Check before the digital planogram goes live.', { fill: C.warnTint, border: C.warn, fs: 8.5 });
}
pres.writeFile({ fileName: '/home/user/tamsin-work/deliverables/sotf/otc-exec-pack-v2.pptx' }).then(f => console.log('wrote', f));
