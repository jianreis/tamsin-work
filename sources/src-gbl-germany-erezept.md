---
type: source
title: "Germany E-Rezept — national e-prescription rollout, adoption, and its difficulties"
url: "https://www.gematik.de/newsroom/news-detail/eine-milliarde-eingeloeste-e-rezepte"
author: "gematik (national digital-health agency); ABDA"
publisher: "gematik; ABDA; Handelsblatt/MarketScreener; Taylor Wessing"
published: "2025-10-17"
retrieved: "2026-06-13"
source_kind: gov
reliability: A
tags: [domain/global, region/global, journey/submit, journey/prescribe, topic/e-prescription, topic/trust-safety, topic/automation]
---

# Summary

THE cautionary case study. Germany made e-prescriptions mandatory on 1 Jan 2024
after years of delay; the backend scaled (1 billion redeemed by Oct 2025) but
the rollout exposed hard lessons about central-infrastructure fragility,
consumer login friction, and provider workflow burden. gematik (regulator) +
national pharmacists' association → A; press for the outage colour → B.

# Key claims
- **Mechanism:** doctor signs the script electronically (eHBA card); it is stored
  on the central **Telematics Infrastructure (TI)** under **gematik**. Patient
  redeems by **(a) inserting the eGK health card** at the pharmacy reader,
  **(b) the "Das E-Rezept" app** (requires an insurer-issued PIN to log in),
  **(c) a paper token with data-matrix code**, or **(d) CardLink** (NFC card +
  phone, no PIN; enables mail-order, from 2024).
- **Adoption:** mandatory since **1 January 2024**; **100m** redeemed by early
  March 2024; **~84%** of practices issuing by mid-2024; **one billionth
  redeemed 17 October 2025**. Redemption split (2024): **~80–90% via eGK card**,
  ~10–20% paper, **only ~1% via the app** — the app login was too high-friction.
- **Delay history (the warning):** legal basis from Oct 2020; mandatory start
  originally **1 Jan 2022** but postponed (only ~42 e-prescriptions written by
  early Dec 2021) — slipped two full years to 2024.
- **Reliability failures:** a central **TI outage on 14 Feb 2024** (Arvato
  certificate fault) knocked out components nationwide; recurring downtime into
  2025 — the pharmacists' federation (ABDA) reported five outage days in a single
  August-2025 fortnight. ABDA/IQVIA survey of ~1,100 pharmacies (early 2024):
  ~**69%** said the top problem was "patient present but e-prescription not yet
  available"; ~70% reported delayed medication supply.
- **Forward risk:** RSA-2048 → ECC crypto migration end-2025 could force
  thousands of practices with non-ECC health-professional cards back to paper.

# Verbatim excerpts
> "The e-prescription is outperforming Deutsche Bahn in terms of unreliability."
> (Thomas Preis, ABDA, Aug 2025 — on recurring TI outages)

> gematik six-month report: "100 million" e-prescriptions redeemed by early March
> 2024; "one billion" redeemed by 17 October 2025.

# Used in
- [[wiki/global-benchmarks/europe-docmorris-redcare-erezept]]
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]]
- [[wiki/global-benchmarks/australia-chemist-warehouse-escript]]
