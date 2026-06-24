---
type: template
title: "Future-State Blueprint Board — style & treatment reference"
status: reviewed
tags: [design-kit, template, domain/ux, topic/automation]
method_ref: "[[wiki/ux-service-design/journey-mapping-method]]"
sources: [src-bigly-blueprint-board-style]
created: "2026-06-14"
updated: "2026-06-14"
---

# Future-State Blueprint Board — style & treatment reference

A precise, reusable capture of the **indicative Bigly "board" treatment** so an
HTML build-agent can faithfully **reproduce and extend** it for the future-state
customer-journey/blueprint deliverables. Source artefact:
[[src-bigly-blueprint-board-style]] (a *design reference, not evidence* — never
cite it for facts).

> **Scope note.** The two captured PDFs are two *different* views, not two views
> of one board: (1) a **wide landscape journey board** (persona "Sarah" + a
> moment→activity flow), and (2) a **tall portrait principles deck** (Speed /
> Convenience / Trust + Customer & Dispenser principle sets). The brief's
> "Lisa / Repeat Medication" board is the same *family* of treatment; this
> reference generalises both so it works for **any persona and any journey
> spine**, including the repeat-medication exemplar.

---

## 1. The treatment in one breath

A **wide, horizontally-scrolling board**: a fixed **persona rail** on the left,
then a sequence of **MOMENT columns** running left→right across the top, each
moment owning one or more **ACTIVITY cards** of first-person narrative beneath
it. A bold **Dis-Chem green** brand band tops the board; **moment headers** sit
on a softer mint band; **activity bodies** are quiet black-on-white prose.
Calm, editorial, confident — "a magazine spread of a service", not a busy Miro
wall. Pairs with a **principles deck** (dark, sectioned by audience) that states
the design philosophy the journey is built to honour.

---

## 2. Layout & grid

### 2.1 Wide journey board (primary treatment)
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ███ DIS-CHEM GREEN BRAND BAND ███   wordmark+｜ "Script Re-imagined"   bigly   │  ← brand band (full width)
│                                                  [ Future State Journey Map ]  │
├───────────────┬────────────┬────────────┬────────────┬────────────┬───────────┤
│ PERSONA RAIL  │  ░ MINT MOMENT BAND ░  clock⏱  *Moment title (italic)*  …→ …   │  ← moment header row
│ (dark, fixed) ├────────────┼────────────┼────────────┼────────────┼───────────┤
│  photo        │  ⌗ Activity │            │            │            │           │  ← activity row label (left) + cards
│  NAME (big)   │  ┌────────┐ │ ┌────────┐ │ ┌────────┐ │ ┌────────┐ │           │
│  bio          │  │ card   │ │ │ card   │ │ │ card   │ │ │ card   │ │           │
│  ⚡ Current   │  │ title  │ │ │ title  │ │ │ title  │ │ │ title  │ │           │
│    Friction   │  │ body…  │ │ │ body…  │ │ │ body…  │ │ │ body…  │ │           │
│  Patient Needs│  └────────┘ │ └────────┘ │ └────────┘ │ └────────┘ │           │
│  ┌HMW box────┐│  (a moment  │            │            │            │           │
│  └───────────┘│   may stack │            │            │            │           │
│               │   2+ cards) │            │            │            │           │
└───────────────┴────────────┴────────────┴────────────┴────────────┴───────────┘
        ↑ persona rail ≈ 18–22% width        ↑ moment columns share remaining width; board scrolls →
```
- **Two structural axes:** a **vertical lane axis** on the far left (two stacked
  row-labels: a **Moment** row on the mint band, an **Activity** row below it,
  each with its own icon — a clock for Moment, a node/sitemap glyph for Activity)
  and a **horizontal moment axis** running across the top.
- **Persona rail:** full-height, dark (near-black) panel, fixed/sticky as the
  board scrolls horizontally. ≈ 18–22% of viewport width on desktop.
- **Moment columns:** equal-ish width; the board is **wider than the screen** and
  **scrolls horizontally**. Each column = one moment header + its activity card(s).
- **Density:** generous whitespace; one to three activity cards per moment;
  cards left-aligned, breathing room between. Not grid-dense — editorial.

### 2.2 Tall principles deck (companion treatment)
Vertical scroll, full-bleed **sections stacked top→bottom**, each section a flat
colour block:
1. **Cover** — near-black; centred Dis-Chem wordmark + lime "+", "Future State
   Scripting" kicker, bigly mark at base.
2. **Philosophy** — near-black; oversized headline with one accent word
   underlined in green; the **Speed / Convenience / Trust pyramid** (Trust =
   green base, Convenience = mid, Speed = apex) flanked by **Customer** (left) and
   **Dispenser** (right) read-outs.
3. **Customer principles** — solid **purple** block; section eyebrow "Customer /
   Service Design Principles", then a list of principle cards.
4. **Dispenser principles** — solid **grey** block; same structure for the ops/
   dispenser audience.

---

## 3. Component anatomy

### 3.1 Persona panel (rail)
| Element | Treatment |
|---|---|
| **Photo** | Large lifestyle photo, top of rail, bleeds to rail edges; subject mid-action (reading a script box). On web → a flat illustrated/greyscale placeholder is acceptable. |
| **Eyebrow** | Small caps label `Patient` above the name. |
| **Name** | Oversized white display type (e.g. *Sarah*), overlapping the photo's lower third. |
| **Bio** | Short greyed paragraph: age, life situation, relationship to medication, stated preference (e.g. "39 · divorced · on long-term medication · prefers flexible, low-friction solutions"). |
| **Current Friction** | Sub-head + a list; **each item a bold short label** (e.g. *Long queues*) with a **lightning-bolt ⚡ icon** and a 1–3 line explanation under it. |
| **Patient Needs** | Sub-head + one bold need statement (e.g. "Flexible, low-friction access to repeat medication"). |
| **How might we…** | A **bordered box** (thin green outline on dark) holding the framing HMW question; "How might we" emphasised. This is the design brief in one line. |

### 3.2 Moment header
- Sits on the **mint band**; left: a **clock ⏱ icon** + the word **"Moment"**;
  right (the column's own cell): the **italic moment title** in first-person
  customer voice (e.g. *Seeking advice*).

### 3.3 Activity card
- Under the **Activity** row (dark node/sitemap ⌗ icon + "Activity" label on the
  left rail). Each card = **bold sentence-case title** (first-person, e.g. "I
  need sinus relief", "Consult with the pharmacist") + **body prose** (calm,
  several short paragraphs, present-tense first-person narration of the
  experience). No emotion scores or lane tables on the board itself — the board
  is a **narrative storyboard**, not a filled blueprint grid. (We will *add* the
  blueprint lanes when we extend it; see §7.)

### 3.4 Principle card (deck)
- Small **hexagon/badge glyph** + **bold title** (e.g. "Repeats should just,
  repeat") + an **italic "from X → to Y" or one-line restatement** subhead +
  body paragraph + a **"Why this matters (ops)"** labelled note. Used for both
  Customer (purple ground) and Dispenser (grey ground) sets.

---

## 4. Visual style

### 4.1 Colour
| Token | Value (indicative) | Use |
|---|---|---|
| Brand green | `#1a9b4a` (Dis-Chem green) | top brand band, accents, HMW box outline, pyramid base |
| Lime accent | `#b5d334`-ish | the Dis-Chem "+" mark; underline on accent words |
| Mint band | `#bfe3cf`-ish (pale green) | moment header band |
| Ink/near-black | `#1d1d1d` | persona rail, deck cover/philosophy, activity titles |
| White | `#ffffff` | activity body background |
| Body grey | `#52525b`-ish | bios, body copy on light |
| Purple | `#5b2a6b`-ish | Customer principles section |
| Grey | `#5a5a5a`-ish | Dispenser principles section |

Colour is **sectional/flat** (whole blocks of one colour), not per-element
decoration. One brand green carries the identity; the mint band is its tint.

### 4.2 Typography
- **Display/headlines:** heavy sans (board name, persona name, principle
  headlines). Big, confident.
- **Moment titles:** *italic* serif-or-sans, medium weight — gives the moments a
  "chapter heading" voice.
- **Activity titles:** bold sans, sentence case.
- **Body:** regular sans, comfortable line-height, generous measure.
- **Eyebrows/labels:** small, letter-spaced (`Patient`, `Current Friction`,
  `Activity`, `Why this matters (ops)`).

### 4.3 Iconography & affordances
- **⚡ lightning** = a friction/pain item (persona rail).
- **⏱ clock** = a Moment marker.
- **⌗ node/sitemap glyph** = an Activity marker.
- **⬡ hexagon badge** = a principle.
- Pyramid (Trust→Convenience→Speed) as a literal triangle.
- Flat, line/solid icons; no skeuomorphism, no shadows.

### 4.4 Voice
First-person, present tense, calm and reassuring ("When I arrive at the store, I
indicate that I want to speak to a pharmacist… the experience feels organised
rather than crowded"). Confidence and dignity over hype.

---

## 5. The board as a SCHEMA (maps to an HTML component model)

```jsonc
Board = {
  brand: { wordmark, plus, kicker:"Script Re-imagined", coBrand:"bigly labs",
           bandColour:"#1a9b4a", title:"Future State Customer Journey Map" },
  persona: {
    name, photo, eyebrow:"Patient",
    bio,                                  // age / situation / med relationship / preference
    currentFriction: [ { label, detail } ],   // ⚡ items
    patientNeed,                          // one bold statement
    hmw                                   // "How might we …?" framing question
  },
  laneLabels: { moment:{icon:"clock", text:"Moment"},
                activity:{icon:"node", text:"Activity"} },
  moments: [                              // horizontal axis, ordered
    {
      id, title,                          // italic, first-person ("Seeking advice")
      spineStage,                         // ← see §6 mapping to PRESCRIBE…RENEW
      activities: [
        { title, body }                   // bold title + narrative prose
        // EXTENSION fields we layer on (not on the original board): see §7
      ]
    }
  ]
}

PrinciplesDeck = {
  cover: { wordmark, kicker:"Future State Scripting" },
  philosophy: { headline, accentWord:"trust",
                pyramid:["Trust","Convenience","Speed"],
                readouts:{ customer:[...], dispenser:[...] } },
  sets: [
    { audience:"customer", ground:"purple", principles:[ {title, fromTo, body, opsWhy} ] },
    { audience:"dispenser", ground:"grey",   principles:[ {title, fromTo, body, opsWhy} ] }
  ]
}
```

### 5.1 The exact content observed (use as worked exemplar)
**Persona (board 1):** Sarah · 39 · divorced · on long-term medication · prefers
flexible, low-friction solutions.
**Current friction:** Long queues · Queue confusion · Surprise costs · Low
customer autonomy · Opaque order status.
**Patient need:** "Flexible, low-friction access to repeat medication."
**HMW:** "How might we standardise ad-hoc repeat ordering through guided
automation, while preserving pharmacist access?"
**Moments (in order):** `Seeking advice → I receive clinical confirmation → I
collect my medication → I follow the treatment`.
**Activity titles (in order):** I need sinus relief · Arrive at store · Consult
with the pharmacist · I'm advised to consider seeing a nurse · I'm seamlessly
redirected within the ecosystem · Nurse evaluates · My care concludes
efficiently · Immediate post-collection guidance · Follow-up.

**Customer principles:** Repeats should just, repeat · Give me all the variables
upfront · Don't leave me in the dark · Get the basics right, every time · Care
extends beyond the counter · My pharmacist is my front door to care.
**Dispenser principles:** The counter is for care, not admin · Never turn your
back on the customer · Separation & specialisation create focus · Fulfillment
like a production line · Remove noise to protect flow · Many inputs, one
controlled funnel · The system prioritises the work · Proximity without exposure.

> The brief's **repeat-medication exemplar (Lisa)** maps cleanly onto this same
> schema — substitute persona = Lisa (34, married, 2-yr-old, receptionist) and
> moments = "My monthly medication order is being prepared → I get order progress
> updates → My medication is delivered → I manage my repeat medication → I renew
> a prescription before it runs out → I add my mother's medication → I add a
> dependent". Same component model; different `moments[]` payload.

---

## 6. Relationship to our journey spine

The board's moments are **persona-voiced labels**, not spine stages — so the HTML
build should carry a `spineStage` tag on each moment to keep it reconciled with
our canonical spine
(`PRESCRIBE → SUBMIT → VALIDATE & CLINICAL CHECK → FUND/CLAIM → PAY → DISPENSE →
COLLECT/DELIVER → ADHERE → REFILL/RENEW`; see [[design-kit/templates/service-blueprint-template]]).

Example mapping for board 1 (acute advice flow):

| Board moment | Spine stage(s) |
|---|---|
| Seeking advice | PRESCRIBE (self-triage → pharmacist-prescribed / nurse referral) |
| I receive clinical confirmation | VALIDATE & CLINICAL CHECK · FUND/CLAIM |
| I collect my medication | DISPENSE · PAY · COLLECT/DELIVER |
| I follow the treatment | ADHERE · REFILL/RENEW |

Example mapping for the repeat exemplar (Lisa):

| Board moment | Spine stage(s) |
|---|---|
| My monthly order is being prepared | REFILL/RENEW → DISPENSE |
| I get order progress updates | DISPENSE (status) |
| My medication is delivered | COLLECT/DELIVER |
| I manage my repeat medication | ADHERE · REFILL/RENEW |
| I renew a prescription before it runs out | PRESCRIBE · VALIDATE |
| I add my mother's / a dependent's medication | SUBMIT (multi-member) |

Keeping `spineStage` on every moment lets the same data drive both this narrative
board **and** the lane-based blueprint engine in
[[design-kit/templates/service-blueprint-template]].

---

## 7. Reconciliation with `deliverables/_shared/DESIGN-SPEC.md`

The board treatment and the DESIGN-SPEC build contract are **largely compatible
but have real tensions the orchestrator must resolve.** The DESIGN-SPEC is
authoritative for the four shipped HTML deliverables; this board is the
*aesthetic and narrative reference*. Where they conflict, **DESIGN-SPEC wins for
the four numbered files**; this treatment can live fuller in a separate "board
view" or inform the look within DESIGN-SPEC's constraints.

| Dimension | Board treatment | DESIGN-SPEC | Resolution / tension flag |
|---|---|---|---|
| **Aesthetic** | Polished, brand-rich, editorial; full-bleed colour blocks; lifestyle photo. | **Wireframe-grade, minimal/low-fi**, greyscale + ONE accent, no heavy colour. | ⚠️ **Tension.** The board is "hi-fi"; DESIGN-SPEC is deliberately "lo-fi for review". Recommend: keep the four deliverables lo-fi per spec, but adopt the board's **layout/structure and narrative voice** there; reserve the full brand treatment for an optional, clearly-marked "presentation skin" toggle or a separate board view. |
| **Accent colour** | Dis-Chem green is the identity. | accent = `#2563eb` blue; green reserved for `--good`. | ⚠️ **Tension.** Using Dis-Chem green as the primary accent conflicts with the token set. Recommend: respect DESIGN-SPEC tokens in #01–#04; if a brand skin is built, theme via CSS variables so green swaps in cleanly. |
| **Photography** | Lifestyle persona photo. | No external images; inline SVG/emoji only; "Concept — not official Dis-Chem artefact" ribbon. | Use a flat inline-SVG/CSS persona placeholder (initials/silhouette). No raster persona photos in the self-contained files. |
| **Persona rail** | Left rail: photo, bio, ⚡ friction, needs, HMW. | Personas referenced via `personaRef`; dual-economy toggle. | ✅ **Compatible & additive.** Render the rail from `economies[].personaRef`; the rail's *Current Friction* maps to per-stage `pains`, *Patient Need* to the JTBD, *HMW* to a header framing line. |
| **Moments vs stages** | First-person *moments*. | Horizontal **stage rail** = journey spine; click to expand. | ✅ **Compatible.** Render moments as the clickable stage rail, each tagged `spineStage` (§6); the moment's italic title is the human label, the spine id is the machine key. |
| **Activity cards** | Narrative prose cards. | Per-stage **blueprint lanes** (actions/frontstage/backstage/support/partners/regulatory/pains/opps/metrics). | ✅ **Additive.** Put the narrative card *body* into the spec's `thoughts`/`customerActions`; the lanes are the behind-the-line extension the board lacks. Show narrative as the "story" tab, lanes as the "blueprint" tab of the same expanded stage. |
| **Principles deck** | Customer + Dispenser principle sets; Speed/Convenience/Trust. | `pillars[]` + pillar legend/filter from `_shared/pillars.md`. | ✅ **Compatible.** The board's customer/dispenser principles are a candidate **pillar source**; reconcile names with `_shared/pillars.md` (owned by the report agent) rather than introducing competing ones. Render the Trust pyramid as a small inline-SVG motif in the pillar legend. |
| **Emotion / flags** | Not on the board. | Emotion curve, ⭐🔴💡⚠️🔮 flags required. | ✅ **Additive — we extend.** The board has no emotion lane; add per the spec. |

---

## 8. How the HTML deliverable should be structured (recommendation)

Honour the board's **calm, persona-led, moment-driven storytelling** while
extending it into a true interactive blueprint within DESIGN-SPEC's lo-fi
contract:

1. **Persona rail (sticky left).** Render from `economies[].personaRef`: avatar
   placeholder, bio, **⚡ Current Friction** (top pains), **Patient Need**
   (JTBD), boxed **How might we…** header line. Honours the board's rail anatomy.
2. **Moment / stage rail (horizontal, scrollable, clickable).** The journey spine
   as the board's moment row — italic human moment label up top, `spineStage` as
   the key. Click a moment to expand its detail (accordion); "expand all /
   collapse all". This is the board's left→right moment axis made interactive.
3. **Expanded stage = two tabs:**
   - **Story** — the board's narrative activity card(s): first-person prose,
     bold title. Preserves the board voice.
   - **Blueprint** — the DESIGN-SPEC lanes (Customer actions · Frontstage · ⎯line
     of visibility⎯ · Backstage · Support systems · Partners · Regulatory · Pains
     🔴 · Opportunities 💡 · Metrics), with lane show/hide. The behind-the-line
     depth the board omits.
4. **Dual-economy toggle** (Insured ↔ Cash/uninsured) — re-renders persona rail,
   story, lanes, and emotion curve. Honours the "serve both economies" principle
   and the board's persona-led framing.
5. **Pain → Future overlay.** Per stage, a toggle reveals `asIsBaseline` (today's
   friction, drawn from the persona's ⚡ list) beneath the future vision — the
   board's "Current Friction" promise, made per-moment and dynamic.
6. **Emotion curve** (inline SVG) across moments for the active economy; ⭐ marks
   moments of truth. (Board-absent; spec-required extension.)
7. **Pillar legend + Trust pyramid motif.** Render the principles as the pillar
   legend; clicking a pillar highlights every moment/opportunity expressing it; a
   small Speed/Convenience/Trust pyramid icon anchors the philosophy.
8. **Tech / ROWA / automation callouts.** Where a moment leans on automation
   ("guided automation", "production-line fulfillment", "one controlled funnel",
   ROWA dispensing robotics, locker/last-mile, status orchestration), surface a
   small **tech-callout chip** on the Blueprint tab (dashed border per
   DESIGN-SPEC's "speculative" cue; `🔮 requires-reform` where rules must change).
9. **Optional brand skin toggle.** A clearly-labelled switch that themes the lo-fi
   view toward the board's brand palette (green band, mint moment headers, purple/
   grey principle blocks) **via CSS variables only** — default OFF so #01–#04 ship
   lo-fi-compliant; ON for stakeholder presentation. Flag this choice to the
   orchestrator; do not break the DESIGN-SPEC `https://`/external-resource QA gate.

**Net:** the board gives us the *spine of the story and the voice*; DESIGN-SPEC
gives us the *engine and the rigour*. Drive both from one `DATA`/`Board` object
(§5) tagged with `spineStage`, so the narrative board and the lane blueprint are
two renderings of the same single source of truth.

## Open questions
- Which principle set (board customer/dispenser) becomes canonical **pillars** vs
  what `deliverables/_shared/pillars.md` already defines? (Reconcile with the
  report agent — do not fork pillar ids.) See [[meta/open-questions]].
- Brand-skin: in-scope for the four deliverables, or a separate fifth "board"
  view? Orchestrator to decide given the lo-fi mandate.

## See also
- [[src-bigly-blueprint-board-style]] — the captured source artefact.
- [[design-kit/templates/journey-map-template]] · [[design-kit/templates/service-blueprint-template]]
- [[design-kit/templates/future-state-principles]]
- `deliverables/_shared/DESIGN-SPEC.md` — the build contract these reconcile with.
