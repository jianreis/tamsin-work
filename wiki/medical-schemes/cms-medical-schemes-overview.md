---
type: wiki
title: "CMS & the medical schemes landscape (the two-economy split)"
domain: medical-schemes
status: draft
confidence: high
tags: [domain/schemes, region/za, journey/fund, journey/pay]
sources: [src-sch-cms-industry-report-2024, src-sch-coverage-two-economy, src-sch-largest-schemes-administrators, src-sch-cash-health-insurance, src-sch-nhi-act-status]
created: "2026-06-13"
updated: "2026-06-13"
---

# CMS & the medical schemes landscape

South African healthcare runs on a **two-economy split**: a private, scheme-funded
minority and a public-sector / out-of-pocket majority. This single fact shapes
every design decision for a retail-pharmacy scripting experience — who pays,
which rails the claim runs on, and what "the customer" can even afford.

## The regulator and the law

Medical schemes are **not-for-profit member funds** regulated by the **Council
for Medical Schemes (CMS)** under the **Medical Schemes Act 131 of 1998**. The
Act mandates community rating (no risk-based premiums), open enrolment for open
schemes, and a legal floor of cover — the **Prescribed Minimum Benefits**
([[pmb-cdl-chronic|PMBs]]). Schemes are distinct from **health insurance**
products (short-term insurance, e.g. GetSavvi), which are cheaper, primary-care
focused, and **carry no PMB obligation** [[src-sch-cash-health-insurance]].

## The two-economy split (the central tension)

- Only **~16% of the population** is covered by a medical scheme; as of **2022,
  15.8%** were members [[src-sch-coverage-two-economy]].
- The **~84% majority** rely on the **public sector**; many low-income uninsured
  also **pay out of pocket** for private primary care
  [[src-sch-coverage-two-economy]] (see [[cash-uninsured-pathway]]).
- South Africa spends **~8.5% of GDP** on health, **roughly half in the private
  sector** serving the wealthier minority [[src-sch-coverage-two-economy]].

Coverage is reported two ways and they differ: **~9.17 million registered
beneficiaries** (CMS, 2024) [[src-sch-cms-industry-report-2024]] vs **~15.8%**
self-reported membership (Stats SA GHS). Use **CMS beneficiary counts** for
absolute numbers and **GHS %** for population share, and always state the year.

## Industry shape (CMS 2024/25)

- **71 schemes**: **16 open** (anyone may join) + **55 restricted** (employer/
  sector-bound, e.g. GEMS) [[src-sch-cms-industry-report-2024]].
- **9.1m+ beneficiaries**, +0.45% on 2023 — **slow growth, ageing** (avg age
  32 → 34.2) [[src-sch-cms-industry-report-2024]].
- Bigger, older, more concentrated; by 2024 open schemes = 56.1% of principal
  members, restricted 43.9% (restricted rising) [[src-sch-cms-industry-report-2024]].

## Who's who (schemes & administrators)

Schemes (the fund) are usually run by separate **administrators** (the operations/
claims engine). Key players [[src-sch-largest-schemes-administrators]]:

| Entity | Role | Scale (latest) |
|---|---|---|
| **Discovery Health** | Largest open scheme + largest administrator | ~1.36m members / ~2.8m beneficiaries |
| **GEMS** | Largest restricted scheme (public servants) | >2m beneficiaries |
| **Bonitas** | 2nd-largest open scheme | ~731,576 beneficiaries (2024) |
| **Momentum Health** | Administrator; **takes over Bonitas admin from June 2026** | ~30% admin share post-Bonitas |
| **Medscheme** (AfroCentric) | Administrator; owns courier **Pharmacy Direct** | >3.2m lives, 15 schemes |

The **Momentum → Bonitas** administration switch (June 2026, from Medscheme
after 43 years) is the biggest scheme-admin transfer in SA history — a live
reminder that the **administrator behind a scheme can change**, altering claim
rails, formularies and preferred-pharmacy networks [[src-sch-largest-schemes-administrators]].

## The NHI shadow

The **NHI Act (2023)** would eventually relegate schemes to "complementary cover"
(Section 33) — but implementation is **paused and in court** as of mid-2026
[[src-sch-nhi-act-status]]. See [[nhi-horizon]]. For the medium term, **the
scheme-funded model stands.**

## Design implications

- **Design for two customers from step one.** A scripting experience anchored
  only on the insured ~16% ignores the majority. Build an **insured path**
  (scheme claim, PMB/chronic logic, DSP steering) and a **cash path** (SEP +
  dispensing fee, affordability tools) as **first-class, parallel flows**, not an
  afterthought. See [[cash-uninsured-pathway]].
- **Capture funding status early.** The first question that re-routes the whole
  journey is *"are you on a medical scheme?"* and *"which one / which option?"* —
  it determines claimability, co-payments, formulary and preferred pharmacy.
- **Treat scheme/option/administrator as volatile data.** Members switch options
  annually; administrators change (Bonitas 2026). Don't hard-code; re-validate
  membership at each dispensing event via real-time switching ([[realtime-claims-switching]]).
- **Don't conflate scheme and insurance.** A GetSavvi-type member has no PMB and
  different rules; mislabeling drives wrong expectations and failed claims.

## Open questions
- Exact CMS 2024/25 figures need confirmation against the primary PDF (site
  returned 403 to automated fetch). ⚠️ Re-verify beneficiary count and scheme
  split. → see [[open-questions]].
- Reconcile "9.5m insured / 17.4%" vs "9.17m / 15.8%" — different bases/years.

## See also
- [[pmb-cdl-chronic]] · [[dsp-formularies-copayments]] · [[realtime-claims-switching]]
- [[courier-chronic-pharmacy-models]] · [[cash-uninsured-pathway]] · [[nhi-horizon]]
