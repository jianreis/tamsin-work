---
type: journey
title: "Core future-state service blueprints - 09: Repeat and 10: Acute"
state: to-be
variant: aspirational
persona: "Nomvula / Sipho (09: Repeat) · Aisha / Thabo (10: Acute)"
status: draft
confidence: medium
tags: [design-kit, blueprint, to-be, domain/ux, domain/digital, topic/automation, topic/chronic, topic/acute, project/fos, region/za]
sources: [src-dc-omnichannel-scripting-roadmap, src-dc-programme-status-2026-10-04, src-dc-health-squad-capability-map-2026, src-mck-e2e-fulfilment-compendium-2026]
created: "2026-10-07"
updated: "2026-10-07"
---

# Core future-state service blueprints - 09: Repeat and 10: Acute

Content spec for `deliverables/15-core-service-blueprints.html`. The content
itself lives in the deliverable's `DATA` object. This note records the
structure, the decisions behind it and where each part comes from.

## What it is

One high-level service blueprint for each future-state journey, plus a
roll-up of the capabilities, technology and processes each needs. It sits one
level above the journeys: the detail behind every cell is in the journey's own
behind-the-line panels ([[design-kit/journeys/to-be-household-repeat-moments]],
[[design-kit/journeys/to-be-acute-moments]]). Requested by Tamsin on
2026-10-07: "core, high level future state service blueprint/s for the #09 and
#10 journeys, noting the core capabilities, technologies and processes that
would need to be in place for each."

## Structure

1. **Scenario strip** per journey: the promise, the insured track, the cash track.
2. **Blueprint grid**: phases across, the journey's own phase set (09: P0-P5 + ∥;
   10: P1-P6 + ∥). Lanes down, per [[design-kit/templates/service-blueprint-template]]
   condensed to seven: key moments · customer actions · *line of interaction* ·
   frontstage screens and messages · frontstage people · *line of visibility* ·
   backstage people and processes · *line of internal interaction* · technology
   and data · rules that apply. Insured-only and cash-only items carry an
   INS / CASH tag, so one grid holds both economies.
3. **What must be in place**: per journey, the eight capability rows of the
   work-to-be-done catalogue ([[design-kit/templates/work-to-be-done-catalogue-template]]),
   each with *what must be true*, *technology and data*, *processes and people*.
   The same rows keep #14 and #15 readable side by side.
4. **Rules to change or confirm** per journey: the 🔮 and ⚠️ flags gathered in one box.
5. **Shared foundation**: what both journeys need (build once), and what each
   adds alone.

## Decisions

- Key moments are copied verbatim from the journey specs. No new moments.
  09's P4 moment "I could track it from Dis-Chem's door to mine" covers both
  economies, as in the spec.
- Status chips (In flight / Planned / Known gap / New) are taken from
  `deliverables/14-work-to-be-done-catalogue.data.js` (09 harvest) and the
  dated roadmap ([[wiki/digital-transformation/dischem-scripting-tech-roadmap]]:
  BRiX early 2027, first ROWA mid-2027, OCR vendor in pilot). Acute-only items
  carry no chip yet, because #14 has not harvested 10: Acute. They should take
  their status from that harvest, not be guessed here.
- Regulatory flags carry over unchanged from the journeys' behind-the-line
  panels (SAPC rule 1.9.7(e), GPP 1.9.3(b), rule 1.11, Schedule 6 repeats,
  punchlist 9 and 10(a), (g), (j), (k)). No new legal claims.

## Open questions

- Should the shared foundation become the first section of the #14 steerco
  catalogue, as the investment case for building once?
- Acute-only items need statuses once #14 harvests 10: Acute.

## See also

- [[design-kit/templates/service-blueprint-template]] - lane definitions
- [[design-kit/templates/work-to-be-done-catalogue-template]] - the capability rows
- `deliverables/09-tobe-household-repeat-moments.html`, `deliverables/10-tobe-acute-moments.html`
