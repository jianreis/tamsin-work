# SPEC - Executive Scripting Strategy Deck (build contract)

> Coordination contract for all build agents. **Read this first.** Owner: orchestrator.
> Goal: a polished, insight-led **executive slide deck** (`.pptx` + `.pdf`) telling Tamsin's
> six-part strategic story. Built by extending the North Star deck pipeline. Nothing existing
> is overwritten - not `01-research-report.html`, not the `#06` North Star deck.

## 0. Outputs & locations (filenames are fixed)
- Engine: `deliverables/_shared/build-executive-strategy-deck.py` (NEW; copies palette+helpers from `build-northstar-deck.py`)
- Content specs: `deliverables/_shared/exec-deck/content/part{0..6}-*.md` (one file per part)
- Diagram designs: `deliverables/_shared/exec-deck/diagrams.md`
- New image assets (if any): `deliverables/_shared/deck-assets/*.png`
- Built deck: `deliverables/00-scripting-strategy-deck.pptx` and `deliverables/00-scripting-strategy-deck.pdf`
- Linked from `deliverables/index.html` and `Home.md`

## 1. Engine & toolchain
- **python-pptx** (target 1.0.2) builds the `.pptx` programmatically (no template). **LibreOffice** (`/usr/bin/libreoffice --headless --convert-to pdf`) renders the `.pdf`.
- 16:9 geometry: `SW=Inches(13.333)`, `SH=Inches(7.5)`. Font: **Calibri** / Calibri Light.
- Reuse the Dis-Chem palette verbatim from `build-northstar-deck.py`:
  `GREEN #1A9B4A · GREEN_DK #126E35 · LIME #B5D334 · INK #1D1D1D · SLATE #52525B · MINT #E8F5EC · WHITE`.
- Footer on every slide: `Concept for review — not an official Dis-Chem artefact  ·  Bigly Labs × Dis-Chem`.

## 2. Layout-template catalogue (engine implements; content tags one per slide)
| layout | use | key fields |
|---|---|---|
| `cover` | title slide | title, subtitle, date |
| `exec-summary` | one-slide thesis | title, so_what, body[] (3–5), visual? |
| `section-divider` | part opener (green full-bleed) | num, title, subtitle |
| `theme` | workhorse insight slide (Parts 1,2,4,6) | kicker, title, so_what, body[], evidence[], visual?, flags[] |
| `market-profile` | one overseas market (Part 3) | kicker, title, so_what, facts[] (label+value), body[], evidence[], visual?, flags[] |
| `comparison` | table/matrix (e.g. transfer-fit) | kicker, title, so_what, columns[], rows[], evidence[] |
| `pillar` | one strategic pillar deep (Part 5, esp. F) | id, name, what, why, evidence[], example, visual?, flags[] |
| `pillar-grid` | compact multi-pillar overview (S1–S6 / U1–U7) | title, cards[](id,name,oneLiner) |
| `diagram-hero` | big diagram + caption (Pillar F, two-SAs) | title, so_what, visual, caption |
| `sources` | vault citation list | title, items[] |
| `closing` | what's next / the bets | title, body[] |

## 3. Content-spec schema (Markdown - what content agents write)
Each part file is an ordered list of slide blocks. One block per slide:

```
## SLIDE: <layout>
id: <short-stable-id>
kicker: <small eyebrow text, optional>
title: <the slide title — make it an INSIGHT, not a label>
so_what: <ONE sentence: the strategic implication, stated first ("so what")>
body:
  - <bullet, exec-tight, ≤ ~16 words>
  - <bullet>
facts:                # market-profile only
  - {label: "Apollo 24|7 orders", value: "~75k/day (Q3 FY25)"}
evidence: [wiki/..., src-...]      # vault paths/slugs backing this slide
visual: <one of the visual catalogue ids, or omit>
flags: []             # any of: unverified, reform   (see §5)
notes: <optional aside to builder/reviewer>
```
Rules: keep `body` to 3–5 bullets max; every non-obvious claim needs an `evidence` entry; lead with `so_what`.

## 4. Visual catalogue (content references by id; WS3 produces)
**Embedded images (exist):** `img:journey-board` · `img:journey-cash` · `img:journey-moment-expanded` · `img:medicine-cabinet`
**Native diagrams (WS3 designs; engine draws as pptx shapes):**
`dia:front-door` (counter→front-door) · `dia:fulfilment-node` (channel ladder / store-as-darkstore) ·
`dia:time-reallocation` (toil→clinical) · `dia:efficacy-effectiveness` (the gap) · `dia:script-artefact` (ScriptPath-style label) ·
`dia:transfer-fit` (AU/India/China vs UK/US) · `dia:au-token-loop` · `dia:teleconsult-loop` (AI-triage→human→pharmacist guardrail) ·
`dia:two-economies-one-spine` · `dia:fragmentation-vs-orchestration` (Pillar F hero) ·
`dia:strategic-pillars-grid` (S1–S6) · `dia:pattern-pillar-map` (U1–U7 ↔ patterns) · `dia:variables-upfront` (U3 radial).

## 5. Voice & honesty rules
- **Executive voice:** lead with the implication, then evidence. Concise, synthesis > completeness. No consultant jargon. South African spelling.
- **Mechanism vs magnitude:** cite mechanisms as proven; flag vendor-reported numbers (frog ~70%, Accenture ~50% adherence lift) as `unverified`.
- **No SA-local consultancy POV exists** → frame all global firms as "direction of travel," not local proof.
- **Date volatile data:** NHI (in court), insured % (~16%, state basis/year), data cost (~R20–R79/GB), SEPA bands.
- **Flags:** `unverified` = ⚠️ vendor/extract-only; `reform` = 🔮 needs regulatory change (e.g. pharmacist-initiated renewal, locker dispensing of scheduled meds). Surface these honestly on-slide (small footnote).
- **Cite the vault** on substantive slides via the `evidence` field (visible `wiki/...` / `src-...`).

## 6. Canonical pillar updates (use this EXACT wording in pillars.md AND the deck)
New strategic pillar (next free id - do NOT renumber existing):
- **S6 — From prescription fulfilment to treatment orchestration**
  oneLiner: "Today the patient is forced to coordinate across prescriber, pharmacy, scheme, stock and delivery; the opportunity is to absorb that coordination into one system — shifting from dispensing a script to orchestrating the whole treatment journey."
  sources: `wiki/dischem/dischem-rx-current-journey`, `wiki/dischem/pharmacy-complaints-pain-points`, `wiki/concepts/omnichannel-fulfilment`, `wiki/digital-transformation/interoperability-identity-records`, `wiki/concepts/chronic-medicine-flywheel`
Rename (keep id U3; change name + oneLiner only):
- **U3 — Give me all the variables upfront** (was "Make money legible, early, always")
  oneLiner: "Surface everything that materially affects the decision before commitment — cost, funding/cover, stock availability, timing/ETA, and alternatives — never spring a surprise. (Money is the sharpest case, not the whole of it.)"
  sources: keep existing + `wiki/consumer-context/last-mile-addressing-logistics`, `wiki/medical-schemes/dsp-formularies-copayments`
