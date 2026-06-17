---
type: wiki
title: "DSPs, formularies, reference pricing & co-payments"
domain: medical-schemes
status: draft
confidence: high
tags: [domain/schemes, journey/pay, journey/fund, region/za, topic/chronic]
sources: [src-sch-dsp-formulary-copay, src-sch-cms-pmb-resource, src-sch-sep-dispensing-fee, src-sch-claim-rejections-gems, src-sch-courier-models]
created: "2026-06-13"
updated: "2026-06-17"
---

# DSPs, formularies, reference pricing & co-payments

These are the four levers schemes use to **steer where and what** a member gets
dispensed, and the source of most "you owe an extra Rxx" moments at the
counter. For a scripting experience, they are the rules that turn a valid
prescription into a number the member actually pays.

## Designated Service Providers (DSPs)

A **DSP** is a provider (pharmacy, doctor, hospital) the scheme **contracts** as
its preferred channel for a service [[src-sch-dsp-formulary-copay]]. Using a
**non-DSP** voluntarily can trigger a **co-payment** - often a **percentage** or
the **difference between the DSP tariff and what the chosen provider charged**
[[src-sch-dsp-formulary-copay]]. For chronic medicine, the DSP is frequently a
**courier pharmacy** (e.g. Pharmacy Direct, Clicks Direct Medicines, MedXpress
network); see [[courier-chronic-pharmacy-models]]. This is why "where you fill
your script" is a funded-vs-co-pay decision, not just convenience.

## Formularies

A **formulary** is the scheme's list of reimbursed medicines (generics + some
originals) [[src-sch-dsp-formulary-copay]]. **Off-formulary medicine is subject
to a co-payment** (or rejection) [[src-sch-dsp-formulary-copay]]
[[src-sch-claim-rejections-gems]]. Formularies differ by scheme **and option**,
and change at least annually.

## Reference pricing — MMAP

**MMAP (Maximum Medical Aid Price)** is a **reference-price model** setting the
maximum the scheme reimburses for a medicine, applied to **chronic and acute**
[[src-sch-dsp-formulary-copay]]. Reference pricing **groups generically/
therapeutically equivalent medicines** and pays up to a group maximum; if the
member insists on a pricier equivalent, **they pay the difference**
[[src-sch-dsp-formulary-copay]]. This is the funding mechanism that makes
**generic substitution** financially live at the counter.

## How the costs stack

For any given line item the member's liability is the sum of:

1. **Above-MMAP difference** (chose a product priced above the reference) +
2. **Off-formulary / non-preferred co-payment** +
3. **Non-DSP penalty** (used a non-preferred pharmacy) +
4. Plus, underlying everything, the **SEP + regulated dispensing fee** that sets
   the gross price [[src-sch-sep-dispensing-fee]] (see [[cash-uninsured-pathway]]).

Each layer is a separate, scheme-specific rule resolved in **real time** at
dispensing ([[realtime-claims-switching]]).

## Design implications

- **Pre-compute the co-payment before the member commits.** The single most
  valuable thing the experience can do is tell the member, *before* they confirm,
  *"at this pharmacy, with this generic, you pay R0 / you'll owe R37"*, and offer
  the funded alternative (switch generic, switch to the DSP courier).
- **Make DSP steering a helpful nudge, not a trap.** Surface *"your scheme's
  preferred pharmacy for this chronic script is X - using it means no co-payment"*
  with a one-tap route to that channel.
- **Generic substitution as a money-saving feature.** Where MMAP/reference price
  bites, present the equivalent generic and the saving explicitly (respect
  prescriber/patient choice and scheduling law).
- **Formulary checks must be option-aware and current.** Cache scheme/option
  formularies and refresh; never assume a prior answer still holds.

## Open questions
- Current MMAP methodology and whether the regulator/PBMs publish per-product
  reference prices accessibly for real-time pre-checks. ⚠️ → [[open-questions]].

## See also
- [[pmb-cdl-chronic]] · [[realtime-claims-switching]] · [[cash-uninsured-pathway]]
- [[courier-chronic-pharmacy-models]] · [[cms-medical-schemes-overview]]
