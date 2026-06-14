---
type: wiki
title: "Medicine pricing — Single Exit Price, logistics fee & dispensing fee"
domain: sa-regulatory
status: draft
confidence: high
tags: [domain/regulatory, journey/pay, region/za]
sources: [src-reg-sep-pricing-regulations, src-reg-gray-pricing-2026, src-reg-medicines-act-101-1965, src-reg-nhi-act-2023]
created: "2026-06-13"
updated: "2026-06-13"
---

# Medicine pricing: SEP, logistics fee & dispensing fee

SA medicine pricing is **regulated end-to-end** under **§22G** of the Medicines Act
and the **Regulations Relating to a Transparent Pricing System**
[[src-reg-medicines-act-101-1965]] [[src-reg-sep-pricing-regulations]]. There is no
free pricing of medicines: a manufacturer sets one price, and downstream margins are
capped by regulation.

## Single Exit Price (SEP)
The **SEP is the only price** at which a manufacturer/importer may sell a medicine
or scheduled substance to **anyone other than the State**
[[src-reg-sep-pricing-regulations]] [[src-reg-medicines-act-101-1965]]. It must be
**published**, applies uniformly nationwide, and **no discounts, rebates, bonuses or
sampling** to non-State buyers are allowed — a core anti-perverse-incentive control.

## Logistics fee
Wholesalers do **not** add a mark-up to SEP; instead the **manufacturer pays the
wholesaler a regulated logistics fee** (incl. VAT) for logistical services, as a
portion of the exit price [[src-reg-gray-pricing-2026]] [[src-reg-sep-pricing-regulations]].

## Dispensing fee (the pharmacy's regulated margin)
A pharmacist's (and dispensing doctor's) charge on top of SEP is the **regulated
dispensing fee** = **flat amount + % of SEP**, in **four price bands**; the %
component **falls as price rises**. Indicative maxima (ex-VAT)
[[src-reg-sep-pricing-regulations]]:

| SEP band | Max dispensing fee (ex-VAT) |
|---|---|
| < R118.80 | R15.80 + 46.0% of SEP |
| < R315.53 | R30.24 + 33.0% of SEP |
| < R1,104.40 | R86.11 + 15.0% of SEP |
| ≥ R1,104.40 | R198.36 + 5.0% of SEP |

(Bands are themselves adjusted over time; treat the figures as current-indicative
and recompute from the latest Gazette.)

## Annual adjustment (SEPA)
Each year the **Pricing Committee** advises the Minister on (1) the **dispensing
fees** and (2) the **SEP Adjustment (SEPA)** — the max % manufacturers may raise
SEP. **SEPA 2026 = max 1.47%** (2025 was 5.25%) [[src-reg-gray-pricing-2026]]
[[src-reg-sep-pricing-regulations]]. This mechanism has kept SA insulated from
large international price increases.

## In flux — NHI
The **NHI Act 20 of 2023** (signed 2024, not yet in force) brings the **NHI Fund
into Pricing-Committee appointments**; deeper future change to procurement/
reimbursement is possible but unproclaimed [[src-reg-nhi-act-2023]].

## Design implications / constraints
- **Price is not a lever the platform controls.** A scripting experience cannot
  discount the medicine itself; the SEP is fixed and discounting to consumers is
  unlawful. Competition is on **service, the dispensing fee, convenience and
  adherence**, not headline medicine price. 🔮 requires-reform for any
  "we'll beat the price" mechanic on the medicine component.
- **Transparent, itemised pricing should be a feature.** Because pricing is
  regulated and public, the UI can confidently show **SEP + dispensing fee (+ VAT)**
  line-by-line — a trust and price-transparency win that is fully compliant.
- **Dispensing-fee bands affect basket economics.** Margin on cheap chronic generics
  is dominated by the flat fee; on expensive specialty items the % is tiny. A
  fulfilment/courier cost model must reconcile against the *capped* dispensing fee,
  not assume an open margin.
- **Annual SEPA / band changes must be ingested.** Pricing logic must update each
  year from the Gazette; do not hard-code fees.
- **Watch NHI.** Procurement and reimbursement assumptions for chronic medicines may
  shift if/when NHI is proclaimed — design for configurability.

## Open questions
- Exact current dispensing-fee band thresholds and the very-high-SEP cap (search hinted
  at a ~R1,500+ band with a capped rand fee) — ⚠️ UNVERIFIED; confirm vs latest
  Gazette.

## See also
- [[medicines-act-scheduling]] · [[sahpra-overview]] · [[pharmacy-act-sapc-gpp]]
