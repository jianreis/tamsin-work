---
type: source
title: "E2E fulfilment compendium (June 2026)"
url: "n/a (internal deck, 202506_E2E_fulfilment_compendium_vFinal_Share_1.pptx)"
author: "McKinsey & Company for Dis-Chem (App programme)"
publisher: "Dis-Chem (internal)"
published: "2026-06"
retrieved: "2026-10-04"
source_kind: company
reliability: B
tags: [domain/dischem, domain/digital, topic/automation, journey/validate, journey/dispense, journey/collect, journey/deliver, region/za]
---

## Summary

A 69-slide compendium closing out Phase 2 of the App fulfilment work. It covers
the current state of script and OTC fulfilment (Adherence Centre, dispensary,
DeliverD, e-commerce), local and global benchmarks, the **MLP** (minimum lovable
product) journey and E2E blueprints, six future-state principles, staffing
models for the Adherence Centre, and fulfilment decisions and operating-model
archetypes.

Its "activities that change" tables (slides 17-22) list about 45 numbered
activities. Each gives the current state, the MLP, the future state and an owner,
grouped under the six principles. Slide 40 plots strategic unlocks on impact and
feasibility.

Code in the work-to-be-done catalogue: **FUL**, cited by slide number (for
example FUL s21). The text extract interleaves table cells, so activity numbers
are not quoted.

**Reliability B (justified):** consultancy work commissioned by Dis-Chem and
built from Dis-Chem interviews and store visits. It is authoritative for the
agreed MLP and target-state direction, but many future-state items are marked TBD
and none carry dates.

Full text extract: `sources/extracts/ful-e2e-fulfilment-compendium-2026-06.txt`.

## Key claims

- **Six principles** (s34): patient safety and script accuracy; fast and
  predictable fulfilment; continuous improvement and automation; positive patient
  experience; straight-through processing; omnichannel bridges.
- **Inventory** (s21): store inventory updates nightly and miscounts partial
  packs. The future state is accurate, real-time stock with stock-on-order
  transparency, but the MLP is "no change vs. current state".
- **Workflow** (s21): the Adherence Centre processes orders across three
  dashboards (Rubix, Vexall, Unisolv). The future state is one end-to-end
  workflow manager powered by BRiX, extending to the counter and delivery.
- **Auto-dispense** (s17): eligible repeat orders (e.g. long-term) are
  auto-dispensed and sent to pharmacy without PBQ review in the future state.
  Health Window notifies refills 3-6 days ahead.
- **Automated picking** (s21): ROWA in Store of the Future stores with space;
  scanners elsewhere.
- **OCR** (s21): lower efficacy today, requiring manual checks; vendor TBD.
- **GP integration** (s18): future state is verified email or a GP submission
  platform, with all scripts to the Adherence Centre.
- **S6 delivery** (s18): possible in future only if the GP submits directly via
  the secured platform.
- **Proxy ordering** (s22): future state allows complex family structures and
  third-party submission "with the right level of proxy & consent".
- **Profiles** (s22): duplicate store-level profiles are common. The future state
  is profiles cleaned and centralised through BRiX.
- **Multiple funders** (s22): multiple scripts across funders are processed as
  multiple orders today. The future state is seamless submission (MLP no change).
- **Missed promises** (s20): follow-up when a customer promise is missed is TBD.
- **Unlocks** (s40): real-time dispensary stock visibility; E2E workflow tool;
  automated picking; automated dispensing without PBQs for select orders;
  increased OCR accuracy; live driver tracking; real-time order notifications;
  unified collections across store types; centralised customer profiles.
- **Staffing** (s43-44): about 11-12 PBQs per 1,000 scripts a day; reaching
  roughly 14k scripts a day needs about 65-80 more PBQs.

## Verbatim excerpts

> "Store inventory levels are updated nightly and do not count partial orders correctly (e.g., 5 pills instead of 10)." (s21, current state)

> "Eligible repeat orders (e.g., long-term) are auto-dispensed and sent to pharmacy without PBQ review; customer is then notified of process." (s17, future state)

> "Reaching Y1 ambition of ~14k scripts per day will require an additional ~65-80 PBQs" (s44, title)

> "Complex family structures and 3rd party patients' script submission allowed with the right level of proxy & consent" (s22, future state)

## Used in

- [[design-kit/templates/work-to-be-done-catalogue-template]]
- `deliverables/14-work-to-be-done-catalogue.data.js` (Seen-in code FUL)
