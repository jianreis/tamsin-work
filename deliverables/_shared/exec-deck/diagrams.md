# diagrams.md - native diagram design specs (WS3)

> **Audience:** the WS4 engine agent who draws these as python-pptx shapes in
> `build-executive-strategy-deck.py`. These are **renderer-agnostic specs** -
> exact labels, layout grid (inches), arrows, and palette roles. No python here.
> Read `SPEC.md` §1 (palette/geometry), §2 (layouts), §4 (catalogue) first.

---

## Shared conventions (read once, applies to every `dia:*`)

### Palette roles (hex verbatim from `build-northstar-deck.py`)
| token | hex | role in diagrams |
|---|---|---|
| `GREEN` | `#1A9B4A` | primary accent — the "good"/orchestrated/future path, key arrows, active nodes |
| `GREEN_DK` | `#126E35` | strong labels, node titles, dark accent strokes |
| `LIME` | `#B5D334` | sparing highlight — the single hero element, ticks, "now" markers |
| `INK` | `#1D1D1D` | primary text on light fills |
| `SLATE` | `#52525B` | secondary/caption text, muted nodes |
| `MINT` | `#E8F5EC` | light fill for cards/nodes |
| `MINT_MD` | `#BFE3CF` | mid-mint fill for emphasis/second-tier nodes |
| `WHITE` | `#FFFFFF` | card fill on tinted bands, text on green |
| `PAPER` | `#FAFBFA` | near-white panel background |
| `LINE` | `#D7DDD9` | hairline borders, dividers, muted connectors |
| `AMBER` | `#B06A00` | **reform / caution only** — `🔮 requires-reform` strokes & flag chips |
| `CARD_BG` | `#F4F8F5` | neutral card fill |

### Canvas & geometry (16:9, `SW=13.333in`, `SH=7.5in`)
Every diagram below assumes the standard content slide:
- **Title band** occupies the top; diagrams start at **y ≈ 1.7in**.
- **"So what:" band** sits at **y ≈ 6.0in** (engine-drawn, not the diagram's job).
- **Footer hairline** at y ≈ 7.18in.
- **Diagram canvas = x 0.6 → 12.73 (width ~12.13in), y 1.7 → 5.9 (height ~4.2in).**
  Specs below use this box. All x/y/w/h are in **inches** unless noted. Round to
  the engine's grid as needed; positions are guidance, not pixel-exact.
- Default node corner radius: ~0.08in (rounded rectangles). Default stroke 1pt
  `LINE` unless a role above overrides. Arrowheads filled, ~0.12in.

### Convention legend (apply uniformly)
- **Solid stroke** = exists / operable today-ish. **Dashed stroke (`AMBER`, ~1.5pt,
  dash 4-2)** = speculative or `reform`-flagged element. Add a small `🔮` glyph or
  "needs reform" micro-caption beside any dashed element.
- **Accent (GREEN/GREEN_DK)** = the desired/orchestrated path. **Muted
  (SLATE/LINE/PAPER fills)** = legacy, siloed, or "today" path.
- Node label text: Calibri, INK, ~11–12pt bold for titles, ~9–10pt SLATE for
  sub-captions. Keep every label ≤ ~6 words; these are exec-readable, not prose.
- One `LIME` element max per diagram (the hero/focal point). Don't dilute it.

---

## dia:front-door
**Insight:** the pharmacy stops being a transactional counter and becomes the ongoing front door to health.
**Used on:** Part 1 - `front-door` (theme); reused on `synthesis-direction-of-travel`.

**Layout:** left→right transformation, two states with a chevron between.
Canvas split 45% / 10% (arrow) / 45%.

- **Left block ("TODAY") - x 0.6, y 2.0, w 5.0, h 3.4**, fill `PAPER`, stroke `LINE`.
  - Header chip top-left: `"TODAY"` (SLATE, 10pt bold).
  - Centre: a single muted rectangle `"Dispensing counter"` (fill `WHITE`, stroke
    `LINE`, INK text) with sub-caption `"one-off transaction"`.
  - Below it, three faint stacked grey bars labelled `"Queue"`, `"Hand over script"`,
    `"Pay & leave"` - deliberately flat/transactional, all SLATE/LINE.
- **Chevron arrow - centred x ~5.8, y ~3.5, w 0.9**, GREEN, pointing right.
- **Right block ("FRONT DOOR") - x 6.9, y 2.0, w 5.3, h 3.4**, fill `MINT`, stroke `GREEN`.
  - Header chip: `"THE FRONT DOOR"` (GREEN_DK, 10pt bold).
  - Centre hub node: rounded rect `"Ongoing care relationship"` (fill `GREEN`,
    WHITE text, 12pt bold) - this is the focal node.
  - Five small satellite chips around/below the hub (MINT_MD fill, GREEN_DK text,
    ~9pt), arranged in a fan: `"Screening"` · `"Advice"` · `"Chronic management"` ·
    `"Telehealth"` · `"Behaviour change"`. Thin GREEN connectors from hub to each.
- **Footnote caption (whole diagram, y ~5.5, SLATE 9pt italic):**
  `"~40% of consumers want broader clinical services via the pharmacy - direction of travel."`

**Colour:** left muted (PAPER/LINE/SLATE) vs right accented (MINT/GREEN). Hub = GREEN solid.

---

## dia:fulfilment-node
**Insight:** the store becomes one omnichannel fulfilment hub - one regimen, many channels, one record.
**Used on:** Part 1 - `fulfilment-node` (theme).

**Layout:** a **hub-and-spoke "channel ladder"**. One central node, channels fanned
on the left feeding in, fulfilment modes fanned on the right coming out.

- **Centre hub - x 5.0, y 2.6, w 3.3, h 1.6**, rounded rect, fill `GREEN`, WHITE text:
  title `"The store as fulfilment node"`, sub-caption (WHITE/MINT, 9pt)
  `"one inventory · one record"`.
- **Left column - inbound channels (3 chips, x 0.7, w 2.6, h ~0.7 each, stacked
  y 2.0 / 3.0 / 4.0)**, fill `MINT`, GREEN_DK text, arrows → hub (GREEN):
  `"WhatsApp / USSD / SMS"` · `"App"` · `"Walk-in / counter"`.
  - Micro-caption under the column (SLATE 8pt): `"channel ladder - meet them where they are"`.
- **Right column - outbound fulfilment (3 chips, x 9.4, w 2.8, h ~0.7 each, stacked
  y 2.0 / 3.0 / 4.0)**, fill `MINT_MD`, GREEN_DK text, arrows hub → mode (GREEN):
  `"Collect in store"` · `"Home delivery"` · `"Locker / pickup point"`.
  - **Locker chip stroke = dashed `AMBER`** with `🔮` glyph - locker dispensing of
    scheduled meds is `reform`-flagged. Micro-caption: `"scheduled-med lockers need reform"`.
- **Bottom band (full width, y 5.2, h 0.5)**, fill `CARD_BG`, INK 9pt:
  `"The convenience bar is set by retail (Sixty60), not other pharmacies · only ~1 in 10 UK patients manage repeats digitally - the adoption gap."`

**Colour:** hub GREEN solid; inbound MINT; outbound MINT_MD; the one dashed AMBER locker chip is the only caution element.

---

## dia:time-reallocation
**Insight:** automate the dispensing toil so the scarce pharmacist hour shifts to clinical, trust-building work.
**Used on:** Part 1 - `time-reallocation` (theme).

**Layout:** two **stacked horizontal bars** representing a pharmacist's time budget - 
a "before" bar and an "after" bar - with the toil portion shrinking and the clinical
portion growing. Reads as a reallocation, not a clock.

- **Bar 1 ("TODAY") - x 1.6, y 2.3, w 10.0, h 0.9.** Divided left→right:
  - ~70% segment `"Counting · checking · admin (toil)"` - fill `SLATE`, WHITE text.
  - ~30% segment `"Clinical · counselling"` - fill `MINT_MD`, INK text.
  - Left-margin label (x 0.6, SLATE 10pt bold): `"TODAY"`.
- **Down arrow / transition glyph centred x ~6.5, y ~3.4, GREEN**, with a small
  inline caption `"automation + AI absorb the toil"` (GREEN_DK 9pt).
- **Bar 2 ("FUTURE") - x 1.6, y 3.9, w 10.0, h 0.9.** Divided:
  - ~25% segment `"Automated dispense (robots / central-fill)"` - fill `LINE`, SLATE
    text - visibly smaller.
  - ~75% segment `"Manage chronic disease · counsel · top-of-licence"` - fill
    `GREEN`, WHITE text - the grown, accented segment (this is the hero block).
  - Left-margin label (x 0.6, GREEN_DK 10pt bold): `"FUTURE"`.
- **Evidence caption (y 5.2, SLATE 9pt italic, full width):**
  `"~70% of Danish community pharmacies already run dispensing robots · but 81% of UK pharmacists considered leaving in 2022 - the workforce is the live risk."`

**Colour:** toil = SLATE/LINE (muted, shrinking); clinical = GREEN (accent, growing). The growth of the GREEN segment is the whole message.

---

## dia:efficacy-effectiveness
**Insight:** real-world effectiveness falls below clinical efficacy, and that gap is the post-dispensing experience (adherence).
**Used on:** Part 2 - `efficacy-effectiveness` (theme).

**Layout:** a **two-bar gap chart** with the shortfall called out as "the experience gap."
Simple, exec-legible - not a line chart.

- **Bar A - x 2.2, y 2.2, w 1.8, h 3.0**, fill `GREEN`, WHITE label at top
  `"Efficacy"`, sub `"what the drug can do"` (9pt). Full height = 100%.
- **Bar B - x 5.2, y 3.0, w 1.8, h 2.2**, fill `MINT_MD`, INK label `"Effectiveness"`,
  sub `"what it does in real life"` - visibly shorter (top is lower).
- **Gap bracket - between the two bar tops (x ~4.0 → 5.2, y 2.2 → 3.0)**: a vertical
  brace / dashed `LIME` bracket spanning Bar B's shortfall, with a callout box to the
  right (x 7.4, y 2.6, w 4.6, h 1.4), fill `MINT`, stroke `GREEN`:
  - Title (GREEN_DK 12pt bold): `"This gap = adherence"`
  - Body (INK 9pt): `"the experience after dispensing - the artefact in the patient's hand"`.
- **Bottom evidence strip (y 5.4, full width, SLATE 9pt):**
  `"Adherence packaging: 71% vs 63% (blister strongest, meta-analytic) - works best pharmacy-delivered & contact-rich."`
  - Append a small `⚠️` chip `"vendor app/lift figures unverified"` (AMBER text, 8pt)
    since the slide carries the `unverified` flag.

**Colour:** Efficacy bar GREEN (full), Effectiveness bar MINT_MD (short); the LIME bracket is the single focal highlight naming the gap.

---

## dia:script-artefact
**Insight:** the prescription label/schedule is itself a designable adherence surface (CVS ScriptPath pattern).
**Used on:** Part 2 - `script-artefact` (pillar layout).

**Layout:** a **stylised "redesigned label" card** in the centre, with three callout
tags pointing to its features. Think of a single large medicine-label mock drawn as shapes.

- **Central label card - x 3.8, y 2.0, w 5.7, h 3.4**, fill `WHITE`, stroke `GREEN_DK`
  1.5pt, rounded. Internal structure (top→bottom):
  1. Header bar (fill `GREEN`, WHITE text): `"YOUR DAY"` + a faint Dis-Chem-style mark.
  2. A 4-row icon schedule - each row = a time-of-day with an icon glyph + dose:
     `"☀ Morning - 2 tablets"` · `"🌤 Midday - 1 tablet"` · `"🌆 Evening - 1 tablet"` ·
     `"🌙 Night - 1 tablet"`. Icons drawn as simple shapes; rows separated by `LINE`
     hairlines; alternate row fill `CARD_BG`.
  3. Footer strip (MINT fill, GREEN_DK 9pt): `"One picture of the whole regimen"`.
- **Three callout tags (rounded chips with leader lines to the card):**
  - Left (x 0.7, y 2.4, w 2.7, MINT_MD): `"Icon-led - works at low literacy"`.
  - Left-lower (x 0.7, y 4.0, w 2.7, MINT_MD): `"Multilingual by default"`.
  - Right (x 9.8, y 2.8, w 2.9, MINT_MD): `"Same artefact on paper · SMS · WhatsApp · app"`.
  - Leader lines = thin GREEN connectors from chip to relevant card region.
- **Attribution caption (y 5.5, SLATE 8pt italic):**
  `"Pattern: CVS ScriptPath (Deborah Adler, creator of Target ClearRx) - consolidates timing & dosing for polypharmacy."`

**Colour:** card WHITE with GREEN_DK frame; header GREEN; callouts MINT_MD. No dashed elements (lawful pattern).

---

## dia:transfer-fit  *(priority — rich matrix)*
**Insight:** the emerging-market + Australia models transfer to SA far better than the UK/US/EU models, because they assume what SA actually is.
**Used on:** Part 3 - overseas-market wrap / "which regions to weight" (`comparison` layout) - confirm with WS Part-3 content.

**Layout:** a **ticked capability matrix.** 4 condition columns × 6 region rows.
This is a grid; the engine can draw it as a table of cells or as shape rectangles.

- **Grid box - x 0.7, y 1.9, w 11.9, h 3.7.** Header row + 6 data rows.
- **Columns (left → right):**
  1. Row-label column (x 0.7, w 2.3) - region names.
  2. `"Mixed funding"` (assumes no single payer)
  3. `"Cash patients"` (cash-pay is normal, not edge)
  4. `"Store as asset"` (dense estate = fulfilment node)
  5. `"Pragmatic verification"` (works without a national e-Rx rail)
  - Header cells: fill `GREEN_DK`, WHITE 10pt bold. Each header gets a one-line
    sub-caption (8pt) as above.
- **Rows (top → bottom) with fit shading on the row-label cell:**
  | Region | Mixed funding | Cash patients | Store as asset | Pragmatic verification |
  |---|---|---|---|---|
  | **Australia** (fill MINT, "Highest") | ✓ | ✓ | ✓ | ✓ |
  | **India** (fill MINT, "High") | ✓ | ✓ | ✓ | ✓ |
  | **China** (fill MINT_MD, "High — loop+guardrails") | ✓ | ✓ | ✓ | ✓ |
  | **UK** (fill PAPER, "Medium") | ✗ | – | ✓ | ✓ |
  | **US** (fill PAPER, "Lowest — features only") | ✗ | – | ✓ | – |
  | **Germany / EU** (fill PAPER, "Medium — as warning") | ✗ | – | – | ✗ |
- **Tick / cross glyphs:** `✓` = filled GREEN circle/check; `✗` = LINE/SLATE light
  cross (muted, not red - keep palette-true); `–` = small SLATE dash for "partial".
- **Right-edge or row-label sub-text** carries the transfer-strength word
  ("Highest"/"High"/"Medium"/"Lowest") in GREEN_DK (top 3) vs SLATE (bottom 3).
- **Caption (y 5.4, SLATE 9pt):** `"Borrow mechanisms, reject funding architectures · all figures company/agency-reported - directional."`

**Colour:** top 3 rows tinted MINT/MINT_MD (the rows to weight); bottom 3 PAPER (borrow-features-only). GREEN ticks vs muted crosses make the visual gradient read instantly. No dashed elements.

---

## dia:au-token-loop  *(priority)*
**Insight:** Australia's e-script token is a forwardable key, with a fresh token issued per repeat as a built-in anti-double-dispense control - plus a register-once Active Script List option.
**Used on:** Part 3 - Australia market profile (`market-profile`); referenced where U6/token patterns appear.

**Layout:** a **circular loop (4 nodes clockwise)** for the token flow, with a small
**parallel ASL lane** beneath it. The loop is the hero.

- **Loop centre ~ x 5.0, y 3.4.** Four rounded-rect nodes on a circle (~1.7in radius),
  connected by curved GREEN arrows clockwise:
  1. **Top - `"Token issued"`** (fill `GREEN`, WHITE) · sub `"SMS / email · no PIN"`.
  2. **Right - `"Scan at any pharmacy"`** (fill `MINT`, GREEN_DK) · sub `"any phone · forwardable to a carer"`.
  3. **Bottom - `"Dispense"`** (fill `MINT`, GREEN_DK).
  4. **Left - `"New token per repeat"`** (fill `MINT_MD`, GREEN_DK) · sub
     `"anti-double-dispense built in"` - arrow from here loops back up to node 1
     (closing the cycle) - this closing arrow is the focal `LIME` highlight.
  - Centre of the circle: small label `"e-script token"` (SLATE 10pt) or a key glyph.
- **Parallel ASL lane - x 1.2, y 5.0, w 10.6, h 0.7**, fill `CARD_BG`, stroke `LINE`,
  laid out as: `"Register once (Active Script List)"` → `"consent per pharmacy (revocable)"`
  → `"all scripts in one managed list"`. Three chips with thin SLATE arrows.
  - Label to the left (GREEN_DK 9pt bold): `"Parallel option:"`.
- **Caption (y 5.85, SLATE 8pt italic):** `"Offer token AND list - let the patient choose · SA needs a printed-QR / USSD / WhatsApp fallback."`

**Colour:** clockwise loop in GREEN/MINT; the "new token per repeat → reissue" closing arrow is LIME (the clever bit). ASL lane muted CARD_BG. No dashed (all operable patterns).

---

## dia:teleconsult-loop  *(priority — guardrails called out)*
**Insight:** the India/China teleconsult→Rx→deliver loop works for SA *only* with hard safety guardrails - AI triages, a human clinician diagnoses & e-signs, a pharmacist reviews.
**Used on:** Part 3 - India/China market profile (`market-profile`); referenced wherever telehealth/AI guardrails appear.

**Layout:** a **left→right 4-stage pipeline** with **guardrail call-out chips below**
each relevant stage. The pipeline is solid (operable); the guardrails are the point.

- **Pipeline - 4 nodes, x starts 0.7, each w 2.6, h 1.2, y 2.2, gap ~0.35, GREEN
  chevron arrows between:**
  1. `"AI triage / intake"` (fill `MINT`, GREEN_DK) · sub `"structured questions"`.
  2. `"Human clinician"` (fill `GREEN`, WHITE) · sub `"diagnoses & e-signs the Rx"`.
  3. `"Pharmacist review"` (fill `GREEN`, WHITE) · sub `"clinical check"`.
  4. `"Dispense & deliver"` (fill `MINT`, GREEN_DK).
- **Guardrail call-out band - y 3.8, three AMBER-outlined chips (dashed where the
  rule is a constraint, solid where it's a hard ban), each with a `⛔`/`🛡` glyph:**
  - Under node 1 (x ~0.7, w 3.4): `"No AI-generated prescriptions"` (AMBER text/stroke).
  - Under node 2 (x ~4.4, w 3.4): `"No first-visit-online - follow-up / chronic only"` (AMBER).
  - Under node 3 (x ~8.1, w 3.4): `"Pharmacist review is non-delegable"` (AMBER).
  - Header for the band (left, GREEN_DK 9pt bold rotated or inline): `"GUARDRAILS"`.
- **Caption (y 5.5, SLATE 9pt italic):** `"China bans AI-generated Rx and enforces 'prescription first, drug second' - a defensible AI/safety stance for SA."`

**Colour:** pipeline GREEN/MINT solid (the loop is real); the guardrail chips use AMBER strokes/text (the safety boundaries) - the only place AMBER appears, making the constraints pop. The two human-controlled nodes (clinician, pharmacist) are GREEN-filled to signal "human stays in the loop."

---

## dia:two-economies-one-spine  *(priority — hero for S1)*
**Insight:** insured (~16%) and cash (~84%) are two different journeys that must share ONE service spine - the cash majority is never a degraded afterthought.
**Used on:** Part 5 - Pillar S1 (`pillar` / `diagram-hero`); Part 4 SA-reality slides.

**Layout:** **two parallel horizontal tracks** (top = Insured, bottom = Cash) that
**converge into one shared spine bar** on the right. Reads as "two rails, one platform."

- **Top track ("INSURED ~16%") - x 0.7, y 2.0, w 8.4, h 1.0**, fill `MINT`, stroke
  `GREEN`. Left label chip (GREEN_DK 11pt bold): `"INSURED · ~16%"`. Four small
  step-chips left→right inside/along the track (WHITE fill, GREEN_DK 9pt), thin GREEN
  arrows: `"Scheme adjudication"` → `"DSP / formulary"` → `"Co-pay surfaced"` →
  `"Courier / collect"`.
- **Bottom track ("CASH / UNINSURED ~84%") - x 0.7, y 3.6, w 8.4, h 1.0**, fill
  `MINT_MD`, stroke `GREEN_DK`. Left label chip (GREEN_DK 11pt bold):
  `"CASH / UNINSURED · ~84%"`. Four step-chips: `"SEP + dispensing fee"` →
  `"CCMDD / retail pickup"` → `"Price-sensitive choice"` → `"Collect / delivery"`.
  - **Make this track visually equal weight to the top** (same height, equal accent)
 - the design *is* the message: not a degraded afterthought.
- **Convergence - both tracks' right ends funnel (two GREEN arrows angling inward)
  into a single tall spine bar - x 9.6, y 2.0, w 2.9, h 2.6**, fill `GREEN`, WHITE text:
  - Title (13pt bold): `"ONE SERVICE SPINE"`.
  - Two sub-lines (MINT/WHITE 10pt): `"Unified profile"` · `"Omnichannel - same steps, both journeys"`.
  - This spine bar is the focal element; outline it or top-strip it in `LIME`.
- **Caption (y 5.0, SLATE 9pt italic, full width):**
  `"~16% insured figure is volatile (state/basis/year) · data cost ~R20–R79/GB shapes the cash journey."`

**Colour:** both tracks accented (MINT vs MINT_MD - distinct but equal); spine GREEN with a LIME accent strip. Deliberately NO muting of the cash track - equality is the whole point. No dashed elements.

---

## dia:fragmentation-vs-orchestration  *(TOP priority — Pillar F / S6 hero)*
**Insight:** today the patient is forced to coordinate across five silos (re-entering data, chasing status); the opportunity is to absorb that coordination into ONE orchestration system so the patient sees one state and one next step.
**Used on:** Part 5 - Pillar S6 deep slide (`pillar` + `diagram-hero`). The signature visual of the deck.

**Layout:** a **before/after split**, left = fragmentation (chaos), right =
orchestration (calm). Vertical divider down the centre (`LINE`, with a `→` chevron
midway). Each half is its own self-contained scene. Give this the most space.

### LEFT HALF — "TODAY: the patient is the integration layer" (x 0.6 → 6.3)
- Header chip top-left (SLATE 10pt bold): `"TODAY - patient coordinates everything"`.
- **Patient icon centred-left - x ~1.0, y 3.3, ~0.9in** (a simple person glyph,
  fill `INK`/`SLATE`), labelled `"Patient"`.
- **Five silo boxes arranged in an arc/scatter around the patient** (deliberately
  un-aligned to feel fragmented), each fill `PAPER`, stroke `LINE`, SLATE text,
  ~1.5in × 0.6in:
  `"Prescriber"` · `"Scheme"` · `"Pharmacy"` · `"Stock"` · `"Delivery"`.
- **Connectors:** thin **two-way** SLATE arrows between the patient and EACH silo - 
  and a few **silo-to-silo dashed `LINE` arrows that don't connect cleanly** (gaps),
  to show broken hand-offs. The patient node has the most arrows - visually the
  patient is doing all the work.
- **Friction micro-labels** scattered on the connectors (SLATE 8pt, italic):
  `"re-enter details"` · `"chase status"` · `"call to check"` · `"repeat trip"` ·
  `"surprise co-pay"`.
- Overall feel: tangled, no single source of truth. (Engine: jitter node positions
  ±0.1in and vary arrow angles to read as messy.)

### CENTRE divider — vertical `LINE` at x ~6.45, y 2.0 → 5.4, with a GREEN `→` chevron at mid-height and a tiny label `"absorb the coordination"`.

### RIGHT HALF — "FUTURE: one system orchestrates the treatment journey" (x 6.6 → 12.73)
- Header chip (GREEN_DK 10pt bold): `"FUTURE - one system orchestrates"`.
- **Central orchestration node - x 8.4, y 2.5, w 3.6, h 1.3**, fill `GREEN`, WHITE
  text, bold: `"Treatment Orchestration"` · sub `"one system absorbs the coordination"`.
  This is the hero node (give it a `LIME` top strip).
- **Same five silos, but now demoted to a neat row of small chips BEHIND/BELOW the
  orchestration node** (x 6.7 → 12.6, y 4.1, five equal chips, fill `MINT`, GREEN_DK
  9pt): `"Prescriber"` · `"Scheme"` · `"Pharmacy"` · `"Stock"` · `"Delivery"`.
  Each connects UP to the orchestration node with a thin GREEN arrow - the *system*
  talks to the silos now, not the patient.
- **Patient icon - x ~11.6, y 2.6, ~0.8in**, connected to the orchestration node by a
  **single clean GREEN arrow**. Beside the patient, a small phone/card mock chip
  (WHITE fill, GREEN stroke) showing exactly two lines:
  `"Status: Ready for collection"` and `"Next: Tap to confirm delivery"`.
  - Caption beside it (GREEN_DK 9pt): `"Patient sees ONE state + ONE next step."`
- Overall feel: orderly, single spine, patient offloaded.

- **Bottom caption (full width, y 5.5, SLATE 9pt italic):**
  `"S6 — from dispensing a script to orchestrating the whole treatment journey."`

**Colour:** LEFT entirely muted (PAPER/LINE/SLATE, tangled, dashed broken hand-offs)
= the problem. RIGHT accented (GREEN/MINT, clean single arrows) with the LIME-topped
orchestration node as the deck's signature focal element. The contrast in *visual
order* (messy vs tidy) carries as much meaning as the colour.

---

## dia:variables-upfront  *(priority — U3 radial)*
**Insight:** surface everything that materially affects the decision *before* commitment - never spring a surprise (money is the sharpest case, not the whole of it).
**Used on:** Part 5 - Pillar U3 (`pillar`).

**Layout:** a **radial / hub-and-spoke** - one central demand node with five satellite
variables evenly spaced around it (72° apart). Clean, symmetric - the symmetry signals
"all of these, together, upfront."

- **Centre hub - x 5.4, y 3.0, w 2.6, h 1.3**, fill `GREEN`, WHITE text, bold:
  `"Give me all the variables upfront"` (wrap to 2–3 lines). Focal node; LIME ring/strip optional.
- **Five satellite chips on a circle (~2.0in radius from hub centre ~6.7, 3.65),
  each rounded rect ~2.0in × 0.7in, fill `MINT`, GREEN_DK 10pt bold, GREEN spoke
  line to hub:**
  - Top (12 o'clock): `"Cost"` · sub `"SEP + dispensing fee, before the till"`.
  - Upper-right (~2 o'clock): `"Funding / cover"` · sub `"scheme benefit, co-pay"`.
  - Lower-right (~5 o'clock): `"Stock availability"` · sub `"is it actually here?"`.
  - Lower-left (~7 o'clock): `"Timing / ETA"` · sub `"when can I have it?"`.
  - Upper-left (~10 o'clock): `"Alternatives"` · sub `"generic / substitute options"`.
- **Caption (y 5.5, SLATE 9pt italic):** `"Money is the sharpest case, not the whole of it - never spring a surprise at the till."`

**Colour:** hub GREEN (LIME accent), satellites MINT with GREEN spokes. Symmetric, all-equal weighting. No dashed elements.

---

## dia:strategic-pillars-grid
**Insight:** the six strategic ("what business is this") bets, seen at a glance.
**Used on:** Part 5 opener / overview (`pillar-grid`). Companion to the per-pillar deep slides.

**Layout:** a **2-row × 3-column card grid** (S1–S6), uniform cards.

- **Grid area - x 0.7, y 1.9, w 11.9, h 3.6.** Six cards, each ~3.7in × 1.65in,
  column gutter ~0.25in, row gutter ~0.3in.
- **Each card** (fill `CARD_BG`, stroke `LINE`, rounded):
  - Top-left ID badge: small GREEN rounded square with WHITE bold id (`"S1"`…`"S6"`).
  - Title (INK 12pt bold) + one-liner (SLATE 9pt, ≤ ~18 words). Use the canonical
    short names + one-liners verbatim from `pillars.md`:
    - **S1 — Serve both economies on one spine** · "Insured (~16%) and cash (~84%) share one spine; the cash majority is never a degraded afterthought."
    - **S2 — Pharmacy as the health front door** · "Scripting is the entry to an ongoing care relationship; the store+clinic estate is a strategic asset."
    - **S3 — Compete on service, not price** · "SEP + capped fee fix the price; the durable differentiator is the experience around the drug."
    - **S4 — Chronic-medicine flywheel = retention engine** · "Proactive managed chronic repeats are the recurring relationship that compounds loyalty."
    - **S5 — Pharmacist at top-of-licence; automate the toil** · "Automation/central-fill/telepharmacy absorb mechanics so pharmacists do the clinical work."
    - **S6 — From fulfilment to treatment orchestration** · "Absorb the coordination across prescriber, pharmacy, scheme, stock, delivery into one system."
  - **Highlight S6** with a GREEN border (1.5pt) + small `"NEW"` LIME chip - it is the
    new pillar this deck introduces and the spine of the orchestration story.

**Colour:** uniform CARD_BG cards, GREEN id badges; S6 gets the single GREEN/LIME emphasis. No dashed elements.

---

## dia:pattern-pillar-map  *(priority — patterns ↔ U-pillars)*
**Insight:** the North Star design patterns (what we borrowed from global benchmarks) each land on a specific UX pillar - the patterns are not loose ideas, they map to the constitution.
**Used on:** Part 5 / Part 6 - bridge slide linking benchmark patterns to the UX pillars (`diagram-hero` or custom two-column).

**Layout:** a **two-column linkage diagram** - LEFT = North Star patterns (borrowed
mechanisms), RIGHT = UX pillars U1–U7 — with connector lines showing which pattern
feeds which pillar. Like a bipartite "mapping" graph.

- **Left column - 7 pattern chips, x 0.7, w 4.6, h ~0.55 each, stacked y 2.0 → 5.3,
  ~0.45 gap**, fill `MINT`, GREEN_DK 10pt. Use these (the highest-value transferable
  patterns from `patterns-to-borrow-and-cautions.md`):
  1. `"QR e-script token, scan anywhere"`
  2. `"New token per repeat (anti-double-dispense)"`
  3. `"Nominated pharmacy / Active Script List"`
  4. `"Real-time order tracking (NHS-App style)"`
  5. `"Auto-refill / med-sync default"`
  6. `"Dose-by-time packaging + app (PillPack/MedAdvisor)"`
  7. `"Price transparency at point of commit"`
- **Right column - 7 UX pillar chips, x 8.0, w 4.6, h ~0.55 each, same vertical
  rhythm**, fill `MINT_MD`, GREEN_DK 10pt, each with its id badge:
  - `"U1 — Channel ladder (WhatsApp-first)"`
  - `"U2 — Never leave them guessing"`
  - `"U3 — All the variables upfront"`
  - `"U4 — Design for graceful failure"`
  - `"U5 — Dignity, privacy & language"`
  - `"U6 — Reduce the journey, don't just digitise"`
  - `"U7 — Adherence-as-design"`
- **Connector lines (thin GREEN curves, left → right):**
  - Token (1) → U6 · Token (1) → U1
  - New-token-per-repeat (2) → U4 (safe failure / control)
  - Nominated / ASL (3) → U6
  - Real-time tracking (4) → U2  *(emphasise this line - thicker/GREEN_DK, it is the cleanest 1:1)*
  - Auto-refill / med-sync (5) → U7
  - Dose-by-time packaging (6) → U7
  - Price transparency (7) → U3
  - (U5 has no borrowed pattern - it is the SA-specific addition; mark its chip with a
    small `"SA-specific"` LIME tag and no incoming line. This is a *feature* of the
    diagram, showing where SA reality goes beyond the global playbook.)
- **Caption (y 5.6, SLATE 9pt italic):** `"Borrowed mechanisms map onto the UX constitution; U5 (dignity/POPIA) is the SA-specific layer no benchmark supplied."`

**Colour:** patterns MINT, pillars MINT_MD, connectors GREEN (the 4→U2 line GREEN_DK as the exemplar). U5's LIME "SA-specific" tag is the single highlight. No dashed.

---

## Asset curation — existing image PNGs

All four confirmed present in `deliverables/_shared/deck-assets/`:

| asset id | file | dimensions (px) | aspect | recommended placement |
|---|---|---|---|---|
| `img:medicine-cabinet` | `medicine-cabinet.png` | 1600 × 2474 | 0.647 (tall portrait) | Part 2 `pillpack-dose-sachets` (already tagged) and any **adherence / orchestration** slide (S6, U7). Portrait → place right-rail (e.g. x ~9.8, w ~2.9, full content height) beside body text; do **not** stretch to landscape. |
| `img:journey-board` | `journey-board.png` | 1600 × 1050 | 1.524 (landscape) | "From our journey work" **evidence** image — the insured/full as-is or to-be journey board. Best on a Part 4 (SA reality / to-be) or Part 6 slide as a `diagram-hero`/`theme` visual. Landscape fits the 12×4.2 canvas at ~5.5–6.4in wide. |
| `img:journey-cash` | `journey-cash.png` | 1600 × 1050 | 1.524 (landscape) | The **cash/uninsured** journey board — natural pairing with `dia:two-economies-one-spine` (S1) as the "this is the cash journey we mapped" evidence, or side-by-side with `journey-board` to show the two economies. |
| `img:journey-moment-expanded` | `journey-moment-expanded.png` | 1600 × 1050 | 1.524 (landscape) | A zoomed-in single journey moment — use where the deck needs to show **depth of the journey work** (e.g. a Part 2 trust/scripting-moment slide, or as proof-of-rigour on the closing slide). |

**Placement notes for WS4:** all three journey boards share the 1.524 aspect - if two
appear on one slide, size them equally (~5.6in wide each, side by side) to keep the
"two economies, equal weight" message consistent with `dia:two-economies-one-spine`.
The medicine-cabinet is the only portrait asset; reserve it for right-rail use.

---

## Candidate fresh screenshots (NOTE ONLY — do not build)

`deliverables/_shared/06-mockups.html` renders a WhatsApp-first mockup gallery (driven
by `06-anim-data.js`) organised by journey stage. Where a real UI shot would beat a
drawn diagram, these components could be screenshotted later:

- **WhatsApp status thread (REFILL/RENEW → SUBMIT → … → COLLECT)** - would strengthen
  any slide invoking **U2 (never leave them guessing)** with a real "received →
  validated → funded → ready → on the way" status timeline, and supports
  `dia:fragmentation-vs-orchestration`'s right-half "patient sees one state" claim.
- **FUND/CLAIM + PAY (pre-adjudication) screen** - a concrete "variables upfront" cost
  breakdown would reinforce `dia:variables-upfront` (U3) far better than the radial alone.
- **GRACEFUL-FAILURE screen** - a real out-of-stock / claim-rejected recovery flow for
  any **U4** slide.
- **Backstage components - "BRIX auto-dispense", "Refill prediction", "Workflow
  manager", "CCMDD→retail bridge"** - would substantiate **S5 (automate the toil)** /
  `dia:time-reallocation` and **S4 (chronic flywheel)** with operational backstage UI.
- **Multi-member / proxy SUBMIT screen ("one WhatsApp number, the whole family")** - 
  supports **U5 (caregivers/proxies first-class)**, which currently has no image asset.

None of these are required for the deck to ship; the native diagrams above cover every
`visual:` reference. Flagged here so a future pass can swap a drawn diagram for a real
screenshot if higher fidelity is wanted.
