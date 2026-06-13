# DESIGN-SPEC — deliverables build contract (READ FIRST)

> Authoritative spec for the four HTML deliverables. **Every build subagent must
> read this and conform.** The orchestrator owns this file; build agents do NOT
> edit it. Goal: four **consistent, self-contained, minimal/low-fi, interactive**
> HTML artifacts for review by Tamsin + Jian.

## 0. The four deliverables (filenames are fixed)
| # | File | What it is |
|---|---|---|
| 1 | `deliverables/01-research-report.html` | ≤5-page research report: "store of the future" + scripting thought leadership; TL;DR; the canonical **strategic + UX pillars**. |
| 2 | `deliverables/02-asis-blueprint-journey.html` | Current-state Dis-Chem scripting — interactive service blueprint + journey. |
| 3 | `deliverables/03-tobe-close-the-gap.html` | Moderately ambitious to-be: parity with SA consumer expectations, operable ~12–24 months, legal today. |
| 4 | `deliverables/04-tobe-aspirational.html` | Aspirational to-be: global best practice, untethered to current tech; keeps clinical-safety + POPIA; flags `🔮 requires-reform`. |
| – | `deliverables/index.html` | Landing page linking the four (built by the kit agent). |
| – | `deliverables/_shared/pillars.md` | Canonical pillars (owned by the report agent; others consume). |
| – | `deliverables/_shared/blueprint-kit.html` | Reference implementation of the interactive engine (owned by the kit agent). |

## 1. Hard rules (non-negotiable)
- **Self-contained single file.** ALL CSS in one `<style>`, ALL JS in one `<script>`, ALL icons as inline SVG or unicode/emoji. **No external requests of any kind** — no CDNs, web-fonts, Google Fonts, external images, analytics. (The environment's egress allowlist blocks them, and reviewers must be able to open the file offline.) A grep for `https://` / `http://` / `src=` / `@import` / `cdn`/`googleapis` must find **zero loaded resources** (citation URLs printed as visible text are fine).
- **No build step.** Plain HTML+CSS+vanilla JS. Must open by double-click in any modern browser.
- **Cite the vault.** Every substantive claim links (as visible text, e.g. `wiki/dischem/dischem-rx-current-journey`) or hover-cites to its vault page/source slug. Where knowledge is missing, render an explicit **⚠️ gap** marker with a short note — do not invent.
- **Honesty:** mark `⚠️ UNVERIFIED` / `⚠️ gap` and `🔮 requires-reform` exactly as the vault does.

## 2. Design language — minimal / low-fi (design tokens)
Wireframe-grade. Content and structure over polish. Inline this token set as CSS variables in every file:
```css
:root{
  --bg:#ffffff; --ink:#18181b; --muted:#52525b; --line:#d4d4d8; --panel:#f4f4f5;
  --accent:#2563eb;            /* interactive / active only */
  --pain:#dc2626; --warn:#d97706; --good:#16a34a; --reform:#7c3aed;
  --font: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --mono: ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  --sp:8px; --radius:6px; --maxw:1200px;
}
```
- Greyscale base + ONE accent; semantic colours only for pain/warn/good/reform.
- System font stack only. 8px spacing grid. Flat: 1px solid `--line` borders, `--radius` corners, no heavy shadows/gradients.
- **Low-fi cue:** use **dashed** borders (`1px dashed`) for anything speculative, unknown, or `requires-reform`; solid for established/as-is fact.
- Responsive (CSS grid/flex, wraps on mobile) but optimised for desktop review. Include a `@media print` block so each file prints/PDFs cleanly (expand all collapsibles when printing).
- Accessibility: semantic HTML; toggles are real `<button>`s with `aria-expanded`/`aria-pressed`; keyboard-operable; contrast ≥ AA; respect `prefers-reduced-motion`.
- Every file header shows a **"⚠ Concept for review — not an official Dis-Chem artefact"** ribbon and a "generated 2026-06-13 from the Bigly ground-truth vault" line.

## 3. Interactive kit — required components (deliverables #2–#4)
The kit renders from a single embedded `const DATA = {…}` (schema in §4). Required, all vanilla JS:
1. **Stage rail** — the journey spine as a horizontal, clickable row of stages; clicking a stage expands its detail panel (accordion); a "tap to expand / expand all / collapse all" control.
2. **Dual-economy toggle** — a segmented control switching **Insured (Nomvula)** ↔ **Cash/uninsured (Sipho)**; all stage content + the emotion curve re-render for the selected economy. (Honours the #1 "serve both economies" principle.)
3. **Emotion curve** — an inline `<svg>` line chart of emotion (1–5) across stages for the active economy; updates on economy toggle; marks ⭐ moments of truth.
4. **Blueprint lanes** (per expanded stage) — labelled rows: *Customer actions · Frontstage · ⎯ line of visibility ⎯ · Backstage · Support systems · Partners · Regulatory constraint · Pains 🔴 · Opportunities 💡 · Metrics*. A lane-visibility control to show/hide lanes.
5. **Hover-to-cite** — any element with a citation shows a small tooltip (on hover AND keyboard focus) naming the vault source (e.g. `[[src-dc-deliverd]]` / `wiki/...`).
6. **Pillar legend + filter** — list the pillars; each stage/opportunity is tagged with the pillar id(s) it expresses; clicking a pillar highlights everywhere it appears. This is how themes "recur throughout."
7. **As-is/To-be compare** (deliverables #3 & #4 only) — a toggle that reveals, per stage, the `asIsBaseline` vs the future vision (show the delta/gap). Deliverable #2 omits this.
8. **Flag badges** — legended: ⭐ moment of truth · 🔴 pain · 💡 opportunity · ⚠️ knowledge gap/unverified · 🔮 requires-reform.

Keep JS dependency-free and defensive (render must not throw if an optional field is missing).

## 4. DATA schema (content agents fill this; kit agent implements the renderer)
```js
const DATA = {
  meta:{ title, subtitle, state:"as-is"|"to-be", variant:null|"close-the-gap"|"aspirational", updated:"2026-06-13" },
  pillars:[ {id:"P1", name:"…", type:"strategic"|"ux", oneLiner:"…"} ],        // from _shared/pillars.md
  economies:[ {id:"insured", label:"Insured — Nomvula", personaRef:"design-kit/personas/insured-chronic-multimorbid"},
              {id:"cash",    label:"Cash/uninsured — Sipho", personaRef:"design-kit/personas/low-data-whatsapp-first-peri-urban"} ],
  stages:[ {
    id:"submit", name:"Submit", goal:"…",
    byEconomy:{
      insured:{
        emotion:3,                                  // 1=😠 … 5=😀
        customerActions:["…"], thoughts:"…",
        touchpoints:["WhatsApp","app"],
        frontstage:["…"], backstage:["…"], support:["dispensary system","claims switch"],
        partners:["medical scheme"], regulatory:["pharmacist must validate — wiki/sa-regulatory/prescription-requirements-repeats"],
        pains:[{text:"…", cite:"src-dc-app-reviews"}],
        opportunities:[{text:"…", pillars:["P3","P7"], cite:"wiki/global-benchmarks/…"}],
        metrics:["median time-to-validate"],
        flags:["momentOfTruth"],
        asIsBaseline:"… (only in #3/#4, what happens today)",
        citations:[{label:"DeliverD", ref:"src-dc-deliverd"}]
      },
      cash:{ … same shape … }
    }
  } ]
}
```
Rules: every `cite`/`ref`/`citations.ref` is a real vault slug or path (verify it exists). Unknown content → add a `pains`/note entry tagged as a gap and set a stage-level `gaps:["…"]` so the ⚠️ marker renders. Emotion scores must be defensible from the vault (as-is) or the design rationale (to-be).

## 5. QA gate (orchestrator runs before sign-off)
- `grep -nE "https?://|cdn|googleapis|unpkg|jsdelivr|@import|<link|<img|src=" <file>` → only visible-text citations, no loaded resources.
- `node --check` on the extracted `<script>` (no JS syntax errors).
- All `cite`/`ref` slugs resolve to real files in the vault.
- Pillars referenced in #2–#4 match the ids in `_shared/pillars.md`.
- Renders without console errors (reviewer confirms visually — orchestrator cannot run a browser here; flag this).
