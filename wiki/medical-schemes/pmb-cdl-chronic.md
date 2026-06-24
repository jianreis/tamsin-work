---
type: wiki
title: "PMBs, the Chronic Disease List & chronic registration"
domain: medical-schemes
status: draft
confidence: high
tags: [domain/schemes, topic/chronic, region/za, journey/fund, journey/validate]
sources: [src-sch-cms-pmb-resource, src-sch-cms-industry-report-2024, src-sch-dsp-formulary-copay]
created: "2026-06-13"
updated: "2026-06-17"
---

# PMBs, the CDL & chronic registration

**Prescribed Minimum Benefits (PMBs)** are the legal floor of cover every
registered scheme must fund **regardless of the member's plan/option**, set by
the **Medical Schemes Act 131 of 1998** and its regulations
[[src-sch-cms-pmb-resource]]. For a scripting experience, PMBs and the chronic
list are the rules that decide **whether a prescription is funded, how richly,
and what the member must do first.**

## The three PMB categories

1. **Emergency medical conditions** - must be funded.
2. **~270 Diagnosis Treatment Pairs (DTPs)** - a defined condition paired with a
   defined treatment (~271 conditions cited) [[src-sch-cms-pmb-resource]].
3. **Chronic Disease List (CDL) - 26 chronic conditions** for which schemes must
   fund **medication + relevant consultations + certain tests**
   [[src-sch-cms-pmb-resource]].

The CDL includes **hypertension, diabetes mellitus type 1 & 2, asthma, COPD,
epilepsy, chronic renal disease, coronary artery disease, glaucoma,
hypothyroidism, HIV/AIDS** and others [[src-sch-cms-pmb-resource]]. (HIV is
funded as a PMB, material given SA's HIV burden and the CCMDD link in
[[courier-chronic-pharmacy-models]].)

## How a member gets chronic cover funded

PMB cover is **automatic for every member**, but each chronic condition must be
**registered separately** (once) on the scheme's **chronic management programme**
[[src-sch-cms-pmb-resource]]:

1. Member is diagnosed; the **treating doctor or the pharmacy contacts the
   scheme** to register the condition (often via a "Chronic Illness Benefit
   Application" / "out-of-hospital PMB" form).
2. Scheme checks the condition is a defined PMB AND the prescribed treatment
   matches the **defined benefit** - the **treatment algorithm** (published per
   CDL condition in the Government Gazette) and the scheme **formulary**
   [[src-sch-cms-pmb-resource]] (see [[dsp-formularies-copayments]]).
3. Once approved/registered, repeat scripts are funded from the **chronic
   benefit** (not the day-to-day savings pot) - a different, usually richer pool.

Until registration is complete, a chronic script may fail to fund or hit the
member's savings/acute benefit, a common, frustrating failure mode.

## The funding subtlety

PMB does **not** mean "anything goes". Schemes may steer to a **formulary** and a
**DSP** ([[dsp-formularies-copayments]]); if the member uses a non-formulary
medicine or a non-DSP voluntarily, a **co-payment** can apply even for a PMB
condition, provided the scheme offers an adequate funded option. Knowing the
condition is "PMB" is necessary but not sufficient for full funding.

## Design implications

- **Registration is a pre-claim gate, and a perfect job for the pharmacy.** The
  law lets the **pharmacy** register a chronic condition. A future scripting
  experience can **detect a likely-CDL chronic script and offer to initiate
  registration** in-flow (with consent), converting a silent rejection into a
  guided action, a high-value moment.
- **Surface PMB/chronic status to the member in plain language.** Most members
  don't know the CDL exists or that registration is required. The UI should
  explain *"this looks like a chronic condition your scheme must cover - let's
  register it so it's funded from your chronic benefit, not your savings."*
- **Match to algorithm + formulary up front.** Pre-check the prescribed
  medicine against the CDL algorithm and scheme formulary so the member learns
  *before* the counter whether it's fully funded or carries a co-payment.
- **Distinguish benefit pools.** Chronic-benefit vs savings vs acute changes the
  member's out-of-pocket. Show *which pool* will pay.

## Open questions
- The exact, current CDL condition list and any 2025/26 PMB review updates
  should be confirmed against the CMS Gazette/algorithms. ⚠️ → [[open-questions]].
- Whether/when CMS's long-running **PMB review** changes the 26-condition list.

## See also
- [[cms-medical-schemes-overview]] · [[dsp-formularies-copayments]]
- [[realtime-claims-switching]] · [[courier-chronic-pharmacy-models]]
