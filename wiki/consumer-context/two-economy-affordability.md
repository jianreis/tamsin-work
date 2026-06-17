---
type: wiki
title: "The two-economy reality & affordability"
domain: consumer-context
status: draft
confidence: high
tags: [domain/consumer, region/za, topic/accessibility, journey/pay]
sources: [src-con-inequality-gini, src-con-finscope-inclusion, src-con-spaza-township, src-con-stokvels, src-con-oop-health-spend, src-sch-coverage-two-economy, src-con-ramp-data-prices]
created: "2026-06-13"
updated: "2026-06-17"
---

# The two-economy reality & affordability

South Africa is the **most unequal major economy in the world**, and the
pharmacy market sits astride a structural fault line: a **small insured minority
(~16%)** with medical-scheme cover and disposable income, and a **large uninsured
majority (~84%)** who pay cash, ration data, and rely on public health and
informal economies. A future scripting experience must serve **two wallets at
once**, and must not be designed only for the affluent, app-fluent, card-paying
minority. This is the single most consequential consumer reality in the vault.

## Extreme inequality is the backdrop

SA's Gini coefficient (~**0.63–0.67** depending on measure/year) is among the
highest recorded globally; Stats SA per-capita expenditure Gini was **0.67 (2006)
→ 0.65 (2015)**, forecast ~**0.63 (2025)** [[src-con-inequality-gini]]. The
**labour market drives ~74%** of income inequality and income remains heavily
racialised [[src-con-inequality-gini]]. In practice, household budgets span orders
of magnitude, so a **single price point, single payment method, or single
delivery model will exclude a large share** of the population.

## The insured (~16%) vs uninsured (~84%) split

Roughly **one in six South Africans is on a medical scheme; ~84% rely on the
public sector or pay out of pocket** [[src-sch-coverage-two-economy]]. As of 2022,
**15.8%** of individuals were medical-aid members; some bases put it at ~17.4%
(~9.5m insured vs 44m+ not) - figures vary by source and base (self-report vs
registered beneficiaries vs population) [[src-sch-coverage-two-economy]]. SA spends
**~8.5% of GDP on health, roughly half in the private sector serving the wealthier
minority** [[src-sch-coverage-two-economy]]. (Funding mechanics are detailed in
[[wiki/medical-schemes/_index|medical schemes]]; this page treats the consumer
consequence.)

The two customers are genuinely different:
- **Insured (~16%):** scheme pays (often via DSP/courier pharmacy); main pains are
  convenience, claim friction, co-payments, and chronic-script logistics.
- **Uninsured (~84%):** pays **cash, out of pocket, at the margin**; main pains are
  affordability, the cost of travel/queues, and trust. Public clinics + CCMDD are
  the default (see [[wiki/consumer-context/health-seeking-behaviour]]).


## Out-of-pocket sensitivity

For the uninsured, medicine is a direct, visible cash expense. **Medicines and
health products are the single most-used paid health service**: households spend
**~R11.2bn on medicines** (~R5.0bn prescribed, ~R4.5bn OTC) and **~R31.5bn total
OOP**, averaging ~R1,481/household but heavily skewed to poorer/sicker households
[[src-con-oop-health-spend]]. OOP also includes **travel cost and distance,
registration, and consultation**, so trips and queues are themselves a cost
[[src-con-oop-health-spend]]. Removing a trip, a queue, or a surprise charge is a
real financial benefit, not only convenience. Price transparency before commit is
essential, and "data is money" too (see
[[wiki/consumer-context/digital-access-and-whatsapp]]) [[src-con-ramp-data-prices]].

## The township / spaza economy: proximity, cash, credit, trust

Daily purchasing for millions happens in the **informal economy**. The spaza
market is estimated **~R197bn (2023)**, with **~11.1m regular shoppers** across
**~150,000 stores**; the broader township economy ~**R900bn** [[src-con-spaza-township]].
Spaza shops are **walking-distance, cash-dominant, sometimes credit-extending
community hubs** - the proximity-and-trust standard a formal pharmacy network does
not meet in townships [[src-con-spaza-township]]. This is why **community pick-up
points** (CCMDD PUPs, lockers, retail collect) matter so much: they meet people
where they already shop (see [[wiki/consumer-context/last-mile-addressing-logistics]]).

## Cash vs card vs wallet

Formal banking access is now high - **financial exclusion fell from 51% (2014) to
~12% (2023)** - but this masks heavy **cash use for daily spend** and persistent
affordability stress: **~19% unbanked** by some measures, **~10% find a bank
account too expensive**, **40% of adults borrow for food**, and ~**12m struggle
with debt** [[src-con-finscope-inclusion]]. Low-cost digital banks
([[wiki/consumer-context/adjacent-digital-expectations|Capitec, TymeBank]]) banked
many of the previously excluded, normalising **app/USSD money movement and
instant EFT** - but card-not-present and stored-card flows are **not** universal at
the low end. **Cash-on-collection, instant EFT, and wallet options must coexist
with card.**

## Stokvels & saving for predictable costs

Roughly **half of adults belong to one of ~800,000 stokvels** (~11.5m members);
the market is ~**R45bn**, with ~R50bn saved annually [[src-con-stokvels]]. Stokvels
pool money for **groceries, funeral cover, school fees, and lump-sum needs** through
**trusted, community-governed** structures [[src-con-stokvels]]. The behavioural
signal: low-income households **plan and pool for predictable recurring costs** - 
chronic medicine is exactly such a cost. Concepts like **pre-paid refill plans,
group/family accounts, or save-toward-collection** map onto an existing mental model.

## Design implications

- **Design for two wallets:** an insured-scheme flow (claim, co-pay, courier) and a
  cash/out-of-pocket flow - do not assume scheme membership or a saved card.
- **Show price before commit; remove surprise costs.** Transparent pricing,
  generic-substitution prompts, and the avoided cost of a trip are real value to
  the uninsured.
- **Offer cash and instant-EFT/wallet payment**, not card-only. Support
  cash-on-collection and pay-at-pickup-point patterns.
- **Treat data as a cost** the user bears; lightweight flows are an affordability
  feature (cross-ref [[wiki/consumer-context/digital-access-and-whatsapp]]).
- **Lean on existing saving behaviour:** family/group accounts, pre-paid or
  save-toward-refill concepts echo stokvel logic.
- **Meet proximity expectations** set by spaza/community retail via near-home
  collection points (see [[wiki/consumer-context/last-mile-addressing-logistics]]).

## Open questions

- Precise, current **insured share** (15.8% self-report vs ~17.4% other bases) and
  absolute beneficiary count - bases differ; cross-check
  [[src-sch-cms-industry-report-2024]]. ⚠️ UNVERIFIED (exact figure/year).
- Share of low-income consumers who can transact **card-not-present** vs needing
  cash/EFT/wallet for an online medicine purchase. ⚠️ UNVERIFIED.
- Spaza market-size estimates vary widely (R197bn vs "R900bn") by method - use as
  directional, not precise. ⚠️ UNVERIFIED.
- Appetite for **save-toward-medicine / stokvel-style** payment constructs in a
  pharmacy context - unresearched here; a concept-test opportunity.

## See also
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/adjacent-digital-expectations]]
- [[wiki/medical-schemes/_index]]
- [[wiki/consumer-context/_index]]
