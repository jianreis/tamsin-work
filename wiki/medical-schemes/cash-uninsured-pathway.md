---
type: wiki
title: "Cash / uninsured pathway — paying out of pocket"
domain: medical-schemes
status: draft
confidence: medium
tags: [domain/schemes, domain/consumer, journey/pay, region/za, topic/accessibility]
sources: [src-sch-coverage-two-economy, src-sch-sep-dispensing-fee, src-sch-cash-health-insurance, src-sch-ccmdd-public, src-sch-pharmacy-direct]
created: "2026-06-13"
updated: "2026-06-17"
---

# Cash / uninsured pathway

The **majority** of South Africans - **~84%** - are not on a medical scheme
[[src-sch-coverage-two-economy]]. For a retail pharmacy this is not a fringe
case: it is the **larger market**, and the one a future scripting experience most
risks designing past. Cash patients pay **out of pocket**, and the experience
must make that **transparent, affordable and dignified**.

## What a cash patient actually pays

In the private sector, medicine has a regulated, transparent price:

- **Single Exit Price (SEP)** - the single maximum manufacturer price, the same
  to everyone, no discounts/bonusing [[src-sch-sep-dispensing-fee]].
- **+ regulated dispensing fee** - a banded formula on top of SEP
  [[src-sch-sep-dispensing-fee]]:
  - SEP < R109.56 → max **R14.50 + 46% of SEP**
  - SEP < R292.25 → max **R27.75 + 33% of SEP**
  - SEP < R1022.94 → max **R79.00 + 15% of SEP**
  - else → max **R182.00 + 5% of SEP**

So the cash price is **predictable and computable** (SEP + the lawful
dispensing fee) and is the **same medicine the insured get**, just self-funded.
Annual SEP increases are capped (**SEPA 1.47% for 2026**, down from 5.25% in
2025) [[src-sch-sep-dispensing-fee]].

## Bridging products (not schemes)

- **Health insurance** (e.g. GetSavvi): cheaper, **primary-care** products from
  ~**R582/month** (2026) - unlimited GP, some chronic meds, emergency, HIV/STI
  testing; **no PMBs**, **not a medical scheme** [[src-sch-cash-health-insurance]].
  Useful framing: many "uninsured" customers actually hold a thin insurance
  product with limited medicine cover.
- **Medical savings accounts (MSAs)**: on many *scheme* options, members self-fund
  day-to-day/medicine from a personal pot - functionally cash once depleted
  [[src-sch-cash-health-insurance]].
- **Public CCMDD**: the uninsured chronic patient's free route - collect
  pre-packed chronic meds at a pick-up point ([[courier-chronic-pharmacy-models]],
  [[src-sch-ccmdd-public]]). Retail pharmacies are CCMDD pick-up points.

## Affordability dynamics

**Price is the leading barrier** to private healthcare
[[src-sch-cash-health-insurance]]. For a cash patient a single chronic script can
be a meaningful share of monthly income, and the dispensing fee is proportionally
heaviest on **cheap medicines** (46% band). Generic choice, pack-size and "do I
need all of this now?" are real affordability levers.

## Design implications

- **The cash path is a primary path, not an error state.** If the member says
  "no scheme," the experience must **continue smoothly** to a transparent price,
  not stall on a claim that can't run.
- **Show the price before dispensing, broken down (SEP + fee).** Cash patients
  can't "claim and see"; certainty up front is the whole game. Let them **choose
  the generic** to lower cost, and show the saving.
- **Affordability tooling.** Offer cheaper equivalents, pack-size options, and,
  where lawful, partial fills or scheduled refills to spread cost. Surface
  eligibility for **CCMDD** or a primary-care **insurance** product as a route to
  ongoing affordability.
- **Dignity and parity.** Cash patients get the *same* medicine, so the UX should
  feel equal, not second-class. Avoid scheme-only language that excludes them.
- **WhatsApp/low-data, multilingual, low-literacy friendly.** This segment skews
  to constraints documented in consumer-context; price clarity must survive a
  feature phone and a second language. (Link consumer-context when built.)

## Open questions
- Current exact dispensing-fee thresholds/top cap (Sept 2025 Gazette adds an
  R2 provision above R1,530.73 SEP) need confirmation against the primary
  Gazette. ⚠️ → [[open-questions]].
- Real out-of-pocket affordability data (what % of income a typical chronic
  script consumes) - triangulate with consumer-context research.

## See also
- [[cms-medical-schemes-overview]] · [[dsp-formularies-copayments]]
- [[courier-chronic-pharmacy-models]] · [[nhi-horizon]]
