---
type: template
title: "Work-to-be-done catalogue - frame, fields and rules"
status: draft
tags: [design-kit, template, domain/ux, project/fos]
sources: [src-dc-health-squad-capability-map-2026, src-dc-master-capability-model-2025, src-mck-e2e-fulfilment-compendium-2026, src-dc-programme-status-2026-10-04, src-bigly-blueprint-board-style]
created: "2026-10-04"
updated: "2026-10-04"
---

# Work-to-be-done catalogue - frame, fields and rules

The catalogue lists the work Dis-Chem must do to make the future-state journeys
real. It was asked for by Tamsin's executive for steerco. It has two jobs: show
the scale of the work, and show that it is organised and under control. The
frame below was agreed with Tamsin on 2026-10-04. It is **big at the bottom and
simple at the top**.

**Scope:** journeys **09: Repeat**, **10: Acute**, **11: Repeat WhatsApp** and
**12: Acute WhatsApp**. Use those names everywhere, never file numbers alone.

**Need, not how.** Every item says what must become true. A delivery route
appears only when the answer is obvious (field *Known route*), and is usually
blank by design.

**Not customer jobs-to-be-done.** The name is deliberate: this is work for the
business, not the customer's jobs.

## The grid

Items sit in a grid: **8 capability rows** by **4 work columns**. The rows use
business-capability-map logic (a stable ability the business needs, named
without saying how). The columns use people-process-technology logic, plus the
evidence and permission you need before building.

### Rows - capabilities (agreed 2026-10-04, "happy with these for now")

| # | Capability |
|---|---|
| 1 | Knowing the customer and their household |
| 2 | Receiving and validating prescriptions |
| 3 | Pricing, funding and payment |
| 4 | Knowing and managing stock |
| 5 | Dispensing and pharmacist care |
| 6 | Collection and delivery |
| 7 | Adherence and refills |
| 8 | Communicating with customers |

Rule for cross-cutting items: file under the capability the item unlocks first.

### Columns - four groups, eleven types

| Group | Type | Test question |
|---|---|---|
| **LEARN** - what we must know or choose first | 1 Research & validation | Do we need evidence before we build this? |
| | 2 Decisions to take | Does someone senior have to choose a direction first? |
| **PERMIT** - what we must be allowed to do | 3 Regulatory reform | Does a law, regulator or council rule stand in the way? |
| | 4 Internal policy change | Is it a Dis-Chem rule or SOP we could change ourselves? |
| **BUILD** - what we must create | 5 Customer-facing features | Will a customer touch it (app, web, WhatsApp, in-store screen)? |
| | 6 Staff tools | Will a pharmacist, PBQ, Adherence Centre or front-shop colleague use it? |
| | 7 Platforms & data | Does more than one feature or journey depend on it? |
| | 8 Content & standards | Is it a body of information or a design rule every channel reuses? |
| **RUN** - how we must operate | 9 Processes & ways of working | Does it change how a task is done day to day? |
| | 10 People & roles | Does it need new skills, roles, capacity or incentives? |
| | 11 Partnerships | Do we need someone outside Dis-Chem to do something? |

Tie-break: **what does the work produce?** Evidence -> Learn. Permission ->
Permit. A thing -> Build. A changed behaviour -> Run. Feature vs platform: two or
more features or journeys need it -> platform. Content vs feature: the library is
content; the screen that shows it is a feature.

## Fields

**IDs** are `GROUP-type-number`, e.g. `BLD-7-04` (LRN, PRM, BLD, RUN). Numbers run
per type across the whole catalogue. IDs are frozen once the full catalogue
ships: append, never renumber.

### Tier 1 - on the slide card

| Field | Holds |
|---|---|
| ID | Stable reference for the room |
| Title | 2-5 words, scannable |
| Capability | The grid row |
| Type | Group and type (the grid column) |
| Need | One sentence: what must become true, not how |
| Why | The first-order reason, one line ("So ...") |
| Principles | The one or two strongest Bigly board principles (below) |
| Status | In flight / Planned / Known gap / New |
| Seen in | Codes: HSQ, ECM, FUL (key on the frame slide) |

### Tier 2 - in the data file and appendix

Enables (journey + phase, by name) · Concepts (08 set) · Depends on (IDs) ·
Status note · Boundary · Known route · Evidence (vault links) · Open question.

## Status

| Status | Meaning |
|---|---|
| **In flight** | Being delivered now, with a date. BRiX early 2027, first ROWA mid-2027, OCR vendor in pilot [[src-dc-programme-status-2026-10-04]] |
| **Planned** | Marked Planned in HSQ, or a target state in FUL |
| **Known gap** | An existing catalogue names it (HSQ "Gap", FUL MLP "no change"), but nobody is solving it yet |
| **New** | Surfaced only by the journeys; in no existing catalogue |

## Seen-in codes

| Code | Catalogue | Source note |
|---|---|---|
| **HSQ** | App Health Squad customer-facing capability map (L0-L4, WIP, 2026-07-13) | [[src-dc-health-squad-capability-map-2026]] |
| **ECM** | Enterprise capability model - Dis-Chem Integrated Health master model (2025-01-06) | [[src-dc-master-capability-model-2025]] |
| **FUL** | McKinsey E2E fulfilment compendium for the App (June 2026), cited by slide | [[src-mck-e2e-fulfilment-compendium-2026]] |

## Principles

Tag from Tamsin's **future-state service design principles** - the Bigly blueprint
board set, under *Trust -> Convenience -> Speed*
[[src-bigly-blueprint-board-style]]:

- **Customer:** Repeats should just repeat · Give me all the variables upfront ·
  Don't leave me in the dark · Get the basics right, every time · Care extends
  beyond the counter · My pharmacist is my front door to care
- **Dispenser:** The counter is for care, not admin · Never turn your back on the
  customer · Separation & specialisation create focus · Fulfilment like a
  production line · Remove noise to protect flow · Many inputs, one controlled
  funnel · The system prioritises the work · Proximity without exposure

## Harvest method (per journey)

1. Walk each phase: Need, every activity (both economies), each key moment, the
   pain points, and the behind-the-line panel (front, back, regulation line,
   capability chips with 🔮 and ⚠️ flags).
2. Ask of every step: what must be true for this to work? Write one item per
   distinct need. Merge with existing items across journeys rather than duplicating
   them; add the journey to *Enables*.
3. Cross-check HSQ, ECM and FUL for each item and set Status and Seen in.
4. Carry the vault's `requires-reform` flags into Permit, and the punchlist and
   open questions into Learn.

## Build

Data: `deliverables/14-work-to-be-done-catalogue.data.js` (source of truth).
Slides: `deliverables/14-work-to-be-done-catalogue.build.js` -> `.pptx`. Edit
the data, then rebuild. Never hand-edit the deck.

## See also

- [[design-kit/templates/moments-journey-template]]
- [[design-kit/templates/future-state-blueprint-board-style]]
- [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]
