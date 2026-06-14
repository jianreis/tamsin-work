---
type: wiki
title: "Australia — eScript token + Active Script List, MedAdvisor, Chemist Warehouse"
domain: global-benchmarks
status: draft
confidence: high
tags: [domain/global, region/global, journey/submit, journey/refill, journey/adhere, topic/e-prescription, topic/accessibility, topic/trust-safety, topic/adherence]
sources: [src-gbl-australia-escript, src-gbl-medadvisor, src-gbl-germany-erezept]
created: "2026-06-13"
updated: "2026-06-13"
---

# Australia — the most transferable e-prescription design for SA

Australia is the standout benchmark because its e-prescription model is both
**proven at scale** (>360m scripts since 2020) and **architecturally a good fit for
SA**: it works across a **mixed funding system** (no single national payer assumed),
uses a **QR-code token by SMS/email** that any pharmacy can scan, and offers an
**Active Script List** for patients who want a managed list instead of juggling
tokens. It largely avoided the friction that plagued Germany's E-Rezept. If SA
adopts one foreign e-script design, this is the one to study first.

## Two redemption models — token and ASL

**Token model (decentralised, per-script)** [[src-gbl-australia-escript]]:
1. The prescriber generates an electronic prescription and sends the patient a
   **unique QR code ("token") by SMS or email** (or into a connected app).
2. The patient shows the token at **any pharmacy**; the pharmacist **scans it to
   unlock** the actual script from an encrypted **Prescription Delivery Service
   (PDS)**. The token is a **key/pointer, not the script data**.
3. **Repeats:** after each dispense, the pharmacy issues a **new token** for the
   remaining repeats — so the patient always holds a current code. A token can only
   be dispensed once at a time (prevents double-dispensing).
4. Because it is just an SMS/email, the patient can **forward the token to a carer
   or family member** to collect on their behalf — a strong accessibility feature.

**Active Script List (ASL) model (centralised, nomination-style)**
[[src-gbl-australia-escript]]: the patient **registers once at a pharmacy with 100
points of ID** and consents; thereafter **all their e-prescriptions auto-populate one
list** that any **consented** pharmacy can view and dispense from — no token
management. Consent is **per pharmacy** and **revocable**, governed by a federal
**ASL Privacy Framework**. Token = good for occasional/acute scripts; ASL = better
for multi-med chronic patients.

This dual design is the key insight: **give people a lightweight per-script token
*and* an opt-in managed list, and let them choose** — rather than forcing one model.

## Infrastructure and a data-breach warning

The national PDS is operated by **eRx Script Exchange (Fred IT Group)**
[[src-gbl-australia-escript]]. A second former provider, **MediSecure**, lost its
contract (~2023) and then suffered a **2024 data breach affecting ~12.9 million
Australians** before entering administration — but the government confirmed **"no
impact to the current national PDS"**. Two lessons for SA: **(1)** a critical
e-script rail concentrates enormous sensitive data and is a prime breach target
(POPIA stakes are high [[wiki/sa-regulatory/_index]]); **(2)** redundancy and clear
provider accountability matter.

## Rollout — fast, COVID-accelerated, and smoother than Germany's

The first e-script was transmitted **6 May 2020** (Anglesea, Victoria), accelerated
by COVID under National Health Act special arrangements; **over 360 million** had
been issued by 30 June 2025, with **>95% of community pharmacies** dispensing
e-scripts [[src-gbl-australia-escript]]. The contrast with Germany is instructive:
Australia's **token-to-phone, scan-at-pharmacy** flow had **no PIN-gated app
barrier** and **no single all-or-nothing central rail dependency**, so it avoided
much of the friction and outage pain that set E-Rezept back [[src-gbl-germany-erezept]].

## MedAdvisor — the adherence/refill layer on top

MedAdvisor shows what to build *on top of* the rail [[src-gbl-medadvisor]]: a patient
app that links to the chosen pharmacy and acts as a **digital script wallet** (all
e-scripts, paper scripts and repeats-remaining in one place), with **pre-order /
"tap to refill"** so medicine is **prepared and ready for pickup**, plus refill and
see-the-doctor **reminders** and a **carer mode**. It integrates the ASL and reaches
~3.7–4m patients via >95% of Australian pharmacies (FY24 revenue A$122.1m, +24.6%).
This is the model for the **adhere/refill** stages of an SA scripting app.

## Chemist Warehouse — discount scale on standard rails

Chemist Warehouse is Australia's **dominant discount/scale** pharmacy chain; its
online ordering and click-&-collect ride the **same national e-script/ASL rails** as
everyone else [[src-gbl-australia-escript]]. Its 2024–25 **backdoor ASX listing via a
Sigma Healthcare reverse takeover** (began trading 13 Feb 2025; CW shareholders
~85.75%) underlines a scale-and-low-price model — but the **prescription UX is
commoditised by the shared rail**, which is precisely the point: a neutral rail lets
many pharmacies compete on price/service rather than on locking in scripts.

## What to borrow for SA

- **QR-code token by SMS/email, scanned at any pharmacy** — the single most
  transferable e-script design; low-friction, no PIN, works on any phone.
- **New token issued per repeat** — clean repeat-dispensing UX with built-in
  anti-double-dispense control.
- **Token-forwarding to a carer** — strong accessibility for the elderly/immobile,
  highly relevant to SA chronic patients [[wiki/consumer-context/_index]].
- **Opt-in Active Script List (nomination-style) for chronic/multi-med patients** —
  with **per-pharmacy, revocable consent** and a privacy framework (POPIA-aligned).
- **Offer token *and* list, let the patient choose** — don't force one model.
- **An adherence app on top** (MedAdvisor): script wallet + pre-order/tap-to-refill
  + reminders + carer mode — maps onto Dis-Chem PackMyMeds [[src-dc-packmymeds]].
- **A neutral shared rail lets pharmacies compete on service/price** rather than
  locking scripts in.

## What doesn't transfer

- **"100 points of ID" registration** assumes Australian identity documents; SA
  needs an ID/verification model fitted to local documents and the under-documented
  [[wiki/consumer-context/_index]].
- **Government-funded PBS subsidy context** behind the system has no SA analogue
  [[wiki/medical-schemes/_index]].
- **Universal smartphone + reliable connectivity assumptions** are weaker in SA —
  the token must degrade gracefully (printed QR, USSD/WhatsApp fallback)
  [[wiki/consumer-context/_index]].

## See also

- [[wiki/global-benchmarks/europe-docmorris-redcare-erezept]] — the friction Australia avoided
- [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]] — nomination on a single payer rail
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]] — the synthesis
- [[wiki/digital-transformation/_index]] — SA e-Rx design
- [[wiki/sa-regulatory/_index]] — POPIA, e-Rx, consent

## Open questions

- ADHA adoption figures (189m Jan 2024 / 360m Jun 2025) are agency-reported via
  secondary aggregation — directionally strong, exact wording to confirm.
- "95%" is pharmacy coverage, not the share of all scripts that are electronic —
  the true electronic-share figure is unclear.
