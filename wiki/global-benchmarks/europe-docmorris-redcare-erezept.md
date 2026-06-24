---
type: wiki
title: "Europe — DocMorris, Redcare (Shop Apotheke) & Germany's E-Rezept (and its lessons)"
domain: global-benchmarks
status: draft
confidence: high
tags: [domain/global, region/global, journey/submit, journey/prescribe, journey/refill, journey/deliver, topic/e-prescription, topic/trust-safety, topic/automation, topic/chronic]
sources: [src-gbl-docmorris-redcare, src-gbl-germany-erezept]
created: "2026-06-13"
updated: "2026-06-17"
---

# Europe — mail-order pharmacy unlocked by a national e-prescription (the hard way)

Germany is the most instructive European case because it shows both halves of the
story: a national **e-prescription (E-Rezept)** that finally let online pharmacies
capture the prescription market at scale, and a **painful, multi-year, glitch-prone
rollout** that is the single best cautionary tale in this vault for SA. The lesson:
mandating a national e-script is the easy part; shipping a *reliable, low-friction*
one is the hard part, and getting that order wrong sets adoption back years.

## DocMorris and Redcare — mail-order built on the rail

The two dominant EU online pharmacies are **DocMorris** (formerly Zur Rose Group;
Netherlands-based, serving Germany cross-border) and **Redcare Pharmacy** (the
renamed **Shop Apotheke Europe**, 2023; Europe's largest online pharmacy by
revenue, ~7 countries) [[src-gbl-docmorris-redcare]]. Both grew by mail-ordering
OTC and now, increasingly, **prescription (Rx)** medicines. Scale: Redcare 2024
revenue **€2.37bn (+32%)**, **12.5m active customers** (>13.7m by Q3 2025), with Rx
guided to roughly double in 2025; DocMorris **10.3m active customers (end 2024)**,
revenue **CHF 1,085m**, reporting a fivefold rise in new Rx customers since the
e-prescription unlock [[src-gbl-docmorris-redcare]].

The mechanism that unlocked Rx is **CardLink** (live in their apps from April/May
2024): the patient **holds their NFC electronic health card (eGK) to their phone**
inside the pharmacy's app; the app reads the card (Card Access Number + an SMS
verification step, **no PIN**) and pulls the e-prescription off the national
Telematics Infrastructure for **remote mail-order fulfilment**
[[src-gbl-docmorris-redcare]], [[src-gbl-germany-erezept]]. gematik (the national
agency) extended both firms' CardLink approval **to 31 January 2027**. The strategic
point for SA: **whoever owns the digital redemption flow of the national e-script
captures the mail-order Rx market** - that is the prize, and it sat behind a
national rail.

## E-Rezept — how it works

The German e-prescription flow [[src-gbl-germany-erezept]]:
1. The doctor **issues and signs** the script electronically (with the electronic
   health-professional card, eHBA); it is stored on the central **Telematics
   Infrastructure (TI)** operated under **gematik**.
2. The patient redeems it one of four ways:
   - **(a) eGK card insertion** - insert the health card at the pharmacy reader
     (became the dominant method);
   - **(b) the "Das E-Rezept" app** - but login requires an **insurer-issued PIN**;
   - **(c) a paper token** with a data-matrix code; or
   - **(d) CardLink** - NFC card + phone, no PIN, enabling mail-order (from 2024).

It became **mandatory for statutory-insurance prescriptions on 1 January 2024**.
The backend scaled impressively: **100 million** e-prescriptions redeemed by early
March 2024 and the **one-billionth on 17 October 2025** [[src-gbl-germany-erezept]].

## The lessons — why this is the key cautionary tale

**1. Don't mandate ahead of a stable, low-friction stack.** The mandatory start
was originally set for **1 January 2022** but had to be postponed - by early
December 2021 only ~**42 e-prescriptions** had been written nationwide - slipping
**two full years** to 2024 [[src-gbl-germany-erezept]]. Shipping a mandate before
the tooling existed bought delay and credibility damage.

**2. A single central rail is a single point of failure.** A central TI outage on
**14 February 2024** (a certificate-verification fault at a service provider)
knocked out components nationwide; recurring downtime continued into 2025 - the
pharmacists' federation reported **five outage days in a single August-2025
fortnight**, each affecting tens of thousands of patients. Its memorable line:
*"The e-prescription is outperforming Deutsche Bahn in terms of unreliability"*
[[src-gbl-germany-erezept]]. **For SA - where load-shedding and connectivity gaps
are real - a single online-only dependency without an offline fallback is
dangerous** [[wiki/consumer-context/_index]].

**3. Consumer login friction routes people to the path of least resistance.** Of
2024 redemptions, ~**80–90% were via the plastic eGK card** and only ~**1% via the
app**, because the app login was gated behind an insurer-issued PIN
[[src-gbl-germany-erezept]]. The "digital" experience lagged the digital backend
until CardLink removed the PIN. **Lesson: the redemption UX must be effortless
(scan/tap), or patients default to the analogue option.**

**4. If the new flow is slower for providers, it is resented - even when
mandatory.** An ABDA/IQVIA survey of ~1,100 pharmacies (early 2024) found ~**69%**
said the top problem was "patient present but the e-prescription not yet
available", and ~70% reported delayed medication supply [[src-gbl-germany-erezept]].
Provider workflow burden is an adoption tax.

**5. Plan the standards/crypto migration early.** A deferred RSA-2048 → ECC crypto
migration at end-2025 threatened to push thousands of practices with non-ECC
health-professional cards back to paper - self-inflicted technical debt resurrecting
the fallback years later [[src-gbl-germany-erezept]].

## Broader EU context

In many EU countries, online pharmacy was long confined mostly to **OTC/non-Rx**;
cross-border players like DocMorris built their model on EU free-movement law, and
Germany's fixed-price/bonus rules were repeatedly litigated (ECJ 2016; VOASG 2020;
ECJ Feb 2025 upheld a ban on Rx-drug discount promotions) [[src-gbl-docmorris-redcare]].
The decisive unlock for digital Rx was the **national e-prescription**, not any
single retailer.

## What to borrow for SA

- **A national/utility e-script rail is the unlock for scaled digital Rx** - the
  prize is real, so invest in it; relevant to SA e-Rx ambitions
  [[wiki/digital-transformation/_index]], [[wiki/sa-regulatory/_index]].
- **Make redemption effortless (scan/tap), never PIN-gated.** CardLink's
  card-to-phone (no-PIN) redemption is the pattern; the app-with-PIN is the
  anti-pattern.
- **Design an explicit offline/degraded-mode fallback** - paper token / cached
  QR - so an outage doesn't halt dispensing (critical for load-shedding SA).
- **Minimise provider workflow burden** - if e-prescribing is slower than paper at
  the counter, adoption suffers regardless of mandate.

## What doesn't transfer

- **The eGK national health-card + insurer-PIN architecture** assumes universal
  statutory insurance and a smart-card estate SA does not have
  [[wiki/medical-schemes/_index]].
- **A single centralised TI as the only rail** - SA should prefer a more resilient,
  offline-tolerant design given connectivity/power realities
  [[wiki/consumer-context/_index]].
- **Cross-border free-movement mail-order economics** are an EU-single-market
  artefact with no SA analogue.

## See also

- [[wiki/global-benchmarks/australia-chemist-warehouse-escript]] — a token model that
  avoided much of this friction
- [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]] — a smoother state-rail rollout
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]] — the synthesis
- [[wiki/digital-transformation/_index]] — SA e-prescribing/interoperability

## Open questions

- Whether Germany's "PoPP" next-gen redemption (replacing CardLink approvals from
  2027) resolves the friction - not yet demonstrated.
- Long-run TI reliability after 2024–25 outages remains to be proven.
