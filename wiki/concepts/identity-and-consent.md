---
type: wiki
title: "Identity & consent"
domain: concept
status: draft
confidence: high
tags: [concept, topic/trust-safety, domain/regulatory, domain/digital, domain/ux, journey/submit, journey/validate, region/za]
created: "2026-06-13"
updated: "2026-06-13"
---

# Identity & consent

**Identity** is verifying *who the patient is* with enough assurance for the action
at hand; **consent** is the lawful basis for collecting, using and sharing their
health data. In a prescription service these are inseparable: the system must know
whose script this is, that it may process their special personal information, and
who is allowed to act on their behalf.

Three forces make this a first-class concept:

- **POPIA.** Prescription and health data is "special personal information" under
  POPIA, carrying stricter conditions for processing, sharing (e.g. with a scheme
  or courier), and retention. Consent must be informed and specific, not a buried
  tick-box — and understandable across languages and literacy levels.
- **Proxy and caregiver authority.** Many South Africans collect or manage medicine
  for a child, parent, or dependent. The design must support **delegated authority
  and proxy collection** explicitly and safely — multiple profiles under one
  account, clear who-is-acting-for-whom, and a verifiable chain so a proxy hand-over
  is both lawful and dignified.
- **Assurance proportional to risk.** Identity proofing should scale to the action:
  light-touch to check refill status, stronger to release a scheduled medicine or
  change a delivery address. Over-verifying everything adds friction at the
  [[wiki/concepts/channel-ladder|low rungs]]; under-verifying risks the wrong person
  getting a controlled medicine.

Identity matching across fragmented SA health records (no universal patient
identifier) is itself unsolved — a known interoperability gap, not a given.

## In this vault
- [[wiki/sa-regulatory/e-prescription-telehealth-popia|E-prescription, telehealth & POPIA]] — POPIA health-data obligations and consent.
- [[wiki/digital-transformation/interoperability-identity-records|Interoperability & identity]] — patient matching (EMPI), e-Rx exchange, consent, SA fragmentation.
- [[wiki/ux-service-design/pharmacy-ux-patterns|Pharmacy UX patterns]] — identity & consent interaction patterns.

## Design stance
Make consent informed, specific and in-language by default; scale identity
assurance to the risk of the action, not the same gate everywhere. Treat
caregivers and proxies as first-class users with explicit, verifiable delegated
authority. Tie this tightly to [[wiki/concepts/trust-and-dignity|trust & dignity]]:
privacy by default, minimal data shared, no surprise about who can see what.
