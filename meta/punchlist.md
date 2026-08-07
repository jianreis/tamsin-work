---
type: meta
title: "Punchlist — open decisions"
updated: "2026-08-07"
tags: [meta, punchlist]
---

# Punchlist — decisions for Tamsin + Jian

Things I (the build agent) proceeded on with a sensible default, but that you
may want to steer. Nothing here is blocking the build.

| # | Item | My default | Needs your call? |
|---|---|---|---|
| 1 | **Internal Dis-Chem / Bigly material** (current journey maps, dispensary SOPs, app analytics, research decks) | Building from *public* sources only. Vault's INGEST workflow can absorb internal docs dropped into `sources/` later. | Drop files when ready. |
| 2 | **Notion / Google Drive mirror** (both connected this session) | Default = Obsidian-in-git only. | Want a non-technical Notion view for stakeholders? |
| 3 | **Depth vs breadth** | Going broad first (all 9 domains), then deepening hot spots (submit, dispense, deliver). | Any domain you want deepest? |
| 4 | **Geographic benchmark set** | US (CVS, Amazon Pharmacy, Mark Cuban), UK (Boots, Pharmacy2U, NHS EPS), EU (DocMorris/Redcare, German E-Rezept), India (PharmEasy, Apollo, 1mg), China (Ping An, Alibaba Health), Australia (Chemist Warehouse, eScript). | Any market to add/drop? |
| 5 | **Personas** | Building 6–8 research-backed personas spanning insured/uninsured, urban/peri-urban, chronic/acute, caregiver, elderly, low-data. | Real Bigly persona set to align to? |
| 6 | **"Futuristic" horizon** | Designing for ~2026–2030 (operable-soon), flagging anything needing regulatory reform as `🔮 requires-reform`. | Different horizon? |
| 7 | **NHI assumptions** | Treating NHI as a known unknown — documenting status + scenarios, not betting the design on a timeline. | — |
| 8 | **Output artifacts** | ✅ **Done** — two worked exemplars built: [[to-be-blueprint-chronic-insured]] (insured chronic) + [[to-be-journey-cash-acute]] (cash acute), demonstrating the [[wiki/concepts/dual-journey]]. Further blueprint/journey *production* is the next phase Tamsin/agents drive. | — |
| 9 | **#09 moments-journey design assumptions** (2026-07-17, ext. 2026-07-19) | Six unsourced constructs in [[to-be-household-repeat-moments]] / deliverable #09, flagged ⚠️ in the build: (a) **partner-bank locker network** (Capitec branch as collection point, cash payment at the bank counter releasing the locker); (b) **the order window** (open repeat order until a relative cutoff - the day before delivery - with history-based specials suggestions - the Standing Order concept's mechanics); (c) **split delivery on stock-out**; (d) **OTC add-ons on the locker route** (medicine-only filter admits OTC; chat-commerce free entry with a clarifying question and priced options; cash total updates before travel - agreed with Tamsin 2026-07-19); (e) **photo-triggered immediate human callback at handover** (post-handover contents list, photo in the same thread escalates to a person phoning back at once - the need is sourced in the sentiment research, the mechanism is ours; agreed with Tamsin 2026-07-19); (f) **cycle-sync part-fills** (Script Sync's convergence mechanics: a costed top-up fill in month one to land the household on one date - scheme early/part-fill rules unsourced, see the open-questions row; agreed with Tamsin 2026-07-19). All plausible extensions of sourced patterns (Pelebox, VC consolidation, WhatsApp commerce) but need sourcing or a feasibility read. | Source or validate; upgrade the chips when done. |

| 10 | **#10 acute-moments design assumptions** (2026-07-26, P1-P2 passes) | Constructs in [[to-be-acute-moments]], ⚠️-flagged in the spec/build: (a) **the express pickup zone** (scan the order QR, named priority handover, no dispensary queue - the research holds the "pay where you're dispensed" ask and peak-queue pain, the zone mechanics are ours); (b) **after-hours external pickup point** (code-opened collection outside the store after closing - also 🔮, see open-questions); (c) **acute symptom add-on attach** (diagnosis-led OTC suggestions riding the script order, cutoff at packing, never gating the medicine); (d) **same-day scripted-delivery slots** (extends today's OTC-only ~60-min service to scripts - today scripted delivery is next-day only, per stakeholder confirmation); (e) **stores-with-stock routing reply** (nearest stores holding the item, own store flagged, delivery cost alongside); (f) **15-minute snap-to-price reply** on WhatsApp; (g) **hold-at-counter with price lock** (the money-isn't-there scenario: held order, unchanged price, no re-order - dignity mechanics ours); (h) **claim-delta detection gating dispatch** (final adjudication differing from the consult dry-run caught and surfaced before the parcel moves); (i) **ID fallback at the express counter** (dead-phone handover on identity, not the code). All plausible extensions of sourced patterns; need sourcing or a feasibility read. | Source or validate; upgrade the chips when done. |

| 11 | **#11 WhatsApp channel-mock basis** (2026-08-07, P1 pass) | The Sipho WhatsApp conversational mock ([[sipho-whatsapp-flow]] / deliverable #11) leans on two things not yet in the vault, ⚠️-flagged in the build: (a) **WhatsApp Business Platform feature inventory** - interactive reply buttons (max 3), list messages (max 10 rows), WhatsApp Flows, utility-template rules for business-initiated messages - stated from Meta developer-docs knowledge, no `src-` note yet; INGEST the Meta docs before this page is used as feasibility evidence. (b) **Illustrative rand amounts** in the P1 price message (generic amlodipine + dispensing fee) - demonstrate the price-before-travel mechanic, not sourced SEP maths. Also inherits punchlist 9(a)'s partner-bank locker assumption wholesale. | Ingest Meta platform docs; replace prices with sourced SEP examples if the mock graduates beyond concept. |

## Questions I'd genuinely like answered later
- Who are the **priority customer segments** for the future-state pilot
  (chronic-on-scheme? cash acute? caregivers)?
- Is there a **target channel** (app-first? WhatsApp-first? in-store kiosk?)
  Bigly is leaning toward?
- Any **fixed tech constraints** (existing dispensary system, claims switch,
  app platform) the future state must integrate with?
- Appetite for **pharmacist-led clinical services** expansion (point-of-care
  testing, minor ailments, vaccinations) as part of the journey?

_See also [[open-questions]] for factual/contradiction tracking._
