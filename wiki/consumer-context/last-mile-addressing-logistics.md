---
type: wiki
title: "Last-mile: addressing, pickup networks & load-shedding"
domain: consumer-context
status: draft
confidence: high
tags: [domain/consumer, region/za, topic/last-mile, topic/accessibility, journey/collect, journey/deliver]
sources: [src-con-pargo-pudo-lastmile, src-con-pelebox, src-con-ccmdd-ndoh, src-con-loadshedding, src-con-icasa-ict-2025, src-con-spaza-township]
created: "2026-06-13"
updated: "2026-06-17"
---

# Last-mile: addressing, pickup networks & load-shedding

Getting medicine the final few kilometres is, in South Africa, a **physical and
infrastructural problem** as much as a logistics-optimisation one. A large share of
the population has **no reliable street address**, home delivery is impossible or
unreliable in informal and rural areas, and **load-shedding** intermittently breaks
both the digital layer and the cold chain. The country has responded with a dense
network of **pickup points and lockers**, and, in the public sector, with
**CCMDD** and **Pelebox**, the strongest local precedents for collecting chronic
medicine away from a facility. The scripting experience should default to
**collection-at-a-known-point**, treat home delivery as a premium/where-feasible
option, and be resilient to power and connectivity loss.

## The addressing problem

Home delivery presumes an address that can be found. For much of SA that
assumption fails: **>21% live in informal settlements** and **>35.7% in rural
areas**, where "inconclusive addresses and subpar infrastructure make home delivery
impossible" [[src-con-pargo-pudo-lastmile]]. Informal settlements often lack street
names, house numbers, and consistent postal coverage. The practical consequence is
that **a named, findable collection point near where someone lives or shops is more
reliable than a delivery address**, which is why pickup networks and the
spaza-proximity model matter (see [[wiki/consumer-context/two-economy-affordability]])
[[src-con-spaza-township]].

## Pickup & locker networks (the established work-around)

SA consumers already use a dense click-and-collect network:
- **Pargo:** >2,500 pickup points covering **>87% of SA postal codes**, explicitly
  extending into **informal settlements** (e.g. Silulo Ulutho partnership)
  [[src-con-pargo-pudo-lastmile]].
- **PUDO (The Courier Guy):** ~**1,500 smart lockers** nationwide since 2020; 24/7
  self-service send/collect [[src-con-pargo-pudo-lastmile]].
- **Paxi** (PEP stores, ~2,000+ points), **PostNet**, and **retailer
  click-and-collect** round out the network [[src-con-pargo-pudo-lastmile]].

These map directly onto a pharmacy model: **collect at a nearby retail store, a
locker, or a partner point** rather than relying on home delivery. Dis-Chem's own
store footprint plus partner points is a natural collection backbone.

## Public-sector precedents — CCMDD and Pelebox (highly relevant)

The public sector has **already proven out-of-facility chronic-medicine collection
at national scale**, the closest existing analogue to a future scripting-and-collect
experience for the majority.

**CCMDD** (Central Chronic Medicine Dispensing & Distribution): lets **clinically
stable** public patients collect pre-packed chronic medicine at a **certified
community pick-up point of their choice** (private pharmacies, retail, schools,
churches, workplaces). **>4.9 million patients enrolled**, **~64% collecting at
external pick-up points**, across **>3,000 PUPs**; originally HIV/ART, now **all
chronic conditions**; **parcel collected every 2–3 months** [[src-con-ccmdd-ndoh]].
CCMDD demonstrates that **decentralised collection works**, reduces queues, and
that retail pharmacies are already enrolled as collection points.

**Pelebox** (Technovera / Neo Hutiri): SA-built **smart lockers, a "medicine ATM"**
used with CCMDD. Medicine is **pre-packed and loaded**; the patient gets an **SMS
with a one-time PIN**, enters **cellphone number + PIN** at the locker, and
collects, with **no app, no data**. It cuts collection from **~3.5 hours of queueing to
under ~30 seconds** [[src-con-pelebox]]. Pelebox is the benchmark for a **low-literacy,
no-app, private, fast** collection UX, and its neutral brown-box parcels also
address stigma (see [[wiki/consumer-context/language-literacy-and-trust]]).

## Courier reliability

Home delivery exists and works well for the insured/urban segment (the courier
pharmacies dispense over a million scripts/month - [[src-courier-pharmacies-sa]]),
but reliability is uneven: Dis-Chem's own app reviews surface **orders cancelled or
reversed minutes before scheduled delivery** and **multiple confusing
address-entry steps** as recurring complaints [[src-dc-app-reviews]] (D-tier
sentiment signal). The lesson is to **set honest delivery windows, communicate status
proactively (over WhatsApp/SMS), and offer collection as a reliable alternative**
when delivery can't be guaranteed.

## Load-shedding — power, cold chain, and connectivity

Load-shedding is the resilience constraint that touches every layer of fulfilment:
- **Connectivity:** tower batteries **lose efficacy beyond ~Stage 4**, so **mobile
  data itself degrades** during heavy stages, when people are home trying to
  transact [[src-con-loadshedding]]. (Coverage is otherwise near-universal,
  [[src-con-icasa-ict-2025]].)
- **Cold chain:** blackouts spoil temperature-sensitive stock; retailers cited
  **~R200m spoilage losses** and **>R500m** in generator costs in 2023
  [[src-con-loadshedding]]. **Cold-chain medicines (insulin, biologics, some
  vaccines)** are directly at risk in storage, lockers, and last-mile transport.
- **Scale:** **~335 load-shedding days in 2023**, moderating to **~83 in 2024**,
  better, but a **recurring risk**, not a solved problem [[src-con-loadshedding]].

## Design implications

- Default to collection at a known point (Dis-Chem store, partner pickup,
  locker) and treat home delivery as premium/where-feasible. Don't make a reliable
  home address a precondition for service.
- Adopt the Pelebox pattern for collection: **SMS/WhatsApp + one-time PIN**,
  no-app, sub-minute, private. It is proven, low-literacy, and stigma-aware.
- Integrate with and learn from CCMDD: retail pharmacies are already CCMDD
  collection points, so a future experience could bridge public-sector chronic
  patients into retail collection and lockers.
- Communicate fulfilment status proactively (WhatsApp/SMS), set honest windows,
  and always offer a collection fallback when delivery is uncertain.
- Engineer for load-shedding with offline-tolerant, resumable digital flows and
  **cold-chain-resilient** storage and transport (battery/solar-backed fridges,
  monitored lockers, schedule-aware dispatch).
- Use familiar collection points that match the spaza proximity expectation,
  near home or near where people already shop.

## Open questions

- The **>21% informal / >35.7% rural** addressing figures come from a vendor blog
  (Pargo); directionally consistent with census urbanisation data but the exact
  numbers are ⚠️ UNVERIFIED against Stats SA.
- Whether **regulation permits** dispensing-then-locker collection of scheduled
  medicines without pharmacist presence at the locker: clinical/legal question for
  [[wiki/sa-regulatory/_index]]; 🔮 may require reform. ⚠️ UNVERIFIED.
- Real-world **cold-chain integrity** in lockers/last-mile under load-shedding: no
  SA-specific failure-rate data captured here. ⚠️ UNVERIFIED.
- Current **geographic density of retail pharmacies** vs population in townships/
  rural areas (the access-gap quantification): to be sourced. ⚠️ UNVERIFIED.

## See also
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/adjacent-digital-expectations]]
- [[wiki/consumer-context/_index]]
