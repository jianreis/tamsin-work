# Part 4 — The South African reality: Regulated, Multi-Funder, Low-Bandwidth

## SLIDE: section-divider
id: divider-sa-reality
num: 4
title: The South African reality
subtitle: Regulated · Multi-Funder · Low-Bandwidth - the three constraints that shape every design choice
notes: This part grounds the global vision in SA's actual operating conditions and sets up the Two-Economies opportunity. Three theme slides - one per constraint - each ending on a takeaway.

## SLIDE: theme
id: sa-regulated
kicker: Constraint 1 of 3 · Regulated
title: Price is fixed and transparent by law - so the only place left to compete is service
so_what: Because the medicine price is regulated end-to-end, a scripting experience cannot win on headline price - it must win on service, convenience and trust.
body:
  - Single Exit Price (§22G) is the one lawful price to non-State buyers - no discounts, rebates or bonuses.
  - The pharmacy's margin is a capped dispensing fee - flat amount + % of SEP across four bands; SEPA 2026 caps SEP rises at max 1.47%.
  - Scheduling S0–S8 is the master switch - S3+ gates behind a valid prescription, pharmacist validation mandatory.
  - POPIA treats all prescription data as special personal information - consent must be explicit, scoped, revocable.
  - Takeaway - price is regulated and transparent, so compete on service; show SEP + dispensing fee + VAT line-by-line as a trust win.
evidence: [wiki/sa-regulatory/sep-dispensing-fee, wiki/sa-regulatory/medicines-act-scheduling, wiki/sa-regulatory/e-prescription-telehealth-popia, src-reg-gray-pricing-2026]
visual: omit
flags: []
notes: "SEPA 2026 = max 1.47% (2025 was 5.25%) - Gray/Daily Maverick Feb 2026, B-tier. Dispensing-fee bands are current-indicative; recompute from latest Gazette (exact thresholds flagged unverified in the wiki). SEPA bands are volatile per SPEC §5 - do not hard-code."

## SLIDE: theme
id: sa-multi-funder
kicker: Constraint 2 of 3 · Multi-Funder
title: Two economies, one spine - ~16% insured, ~84% cash, and the funding logic forks at step one
so_what: A scripting experience must run an insured path and a cash path as first-class parallel flows from the first question - funding status re-routes the entire journey.
facts:
  - {label: "Insured share", value: "~16% (GHS 15.8%, 2022)"}
  - {label: "Scheme beneficiaries", value: "~9.17m (CMS, 2024)"}
  - {label: "Schemes", value: "71 — 16 open + 55 restricted"}
  - {label: "CDL conditions", value: "26 (per-condition registration gate)"}
  - {label: "Public chronic mirror", value: "CCMDD >4.9m enrolled"}
body:
  - Coverage is reported two ways - CMS beneficiary counts for absolute numbers, GHS % for population share; always state the year.
  - PMB/CDL conditions are a legal funding floor, but each must be registered separately before a chronic script funds richly.
  - DSP co-pay steering, real-time claims switching and formulary/MMAP rules turn a valid script into the number the member actually pays.
  - The uninsured majority has its public mirror - CCMDD pre-packs chronic meds to >4.9m at external pick-up points.
  - Takeaway - capture funding status first; pre-adjudicate before commit so co-payments are never a counter surprise.
evidence: [wiki/medical-schemes/cms-medical-schemes-overview, wiki/medical-schemes/pmb-cdl-chronic, wiki/medical-schemes/dsp-formularies-copayments, wiki/medical-schemes/realtime-claims-switching, wiki/medical-schemes/courier-chronic-pharmacy-models]
visual: dia:two-economies-one-spine
flags: [reform]
notes: "Insured % basis VARIES - cite both: ~16% headline / 15.8% GHS 2022 / 9.17m CMS 2024 beneficiaries. NHI is the reform flag - NHI Act signed 2023, paused and in court 2026; design for the status-quo scheme model and monitor. CCMDD >4.9m is the public-sector bridge into retail collection. dia:two-economies-one-spine belongs here (or on a closing Part-4 slide)."

## SLIDE: theme
id: sa-low-bandwidth
kicker: Constraint 3 of 3 · Low-Bandwidth
title: Connectivity is solved - affordability is the constraint
so_what: Signal reaches almost everyone, but data costs and prepaid rationing mean the experience must be lightweight, async, resumable and WhatsApp/USSD-first.
facts:
  - {label: "Network coverage", value: "3G 99.79% / 4G 99.07% / 5G 46.64%"}
  - {label: "Smartphone subs", value: "82.74m (multi-SIM)"}
  - {label: "Internet penetration", value: "~74.7% (1 in 4 not online)"}
  - {label: "WhatsApp", value: "#1 channel, ~93–96%"}
  - {label: "Data cost (1GB)", value: "~R20.50 at scale vs ~R79 prepaid"}
body:
  - Coverage is near-universal - the gap is the cost of data and devices, plus digital literacy, not signal.
  - Small-bundle data carries a poverty premium - those who can only top up in small increments pay the most per MB.
  - Prepaid dominates and runs to zero balance - USSD and SMS need no data and reach any handset.
  - Load-shedding degrades connectivity (tower batteries fade beyond ~Stage 4) just when people are home trying to transact.
  - Takeaway - connectivity is solved, affordability is not; build lightweight, async, resumable, WhatsApp/USSD-first flows.
evidence: [wiki/consumer-context/digital-access-and-whatsapp, wiki/consumer-context/last-mile-addressing-logistics, src-con-icasa-ict-2025, src-con-ramp-data-prices, src-con-loadshedding]
visual: omit
flags: [unverified]
notes: "Data costs are volatile per SPEC §5 (~R20–R79/GB; RAMP warns of a possible fourth price-increase cycle) - date the figure. WhatsApp exact % (93–96%) is a wide-band signal flagged unverified in the wiki; the central claim (WhatsApp = #1 channel) is well-supported. ICASA figures are 2024 reporting year (A-tier)."
