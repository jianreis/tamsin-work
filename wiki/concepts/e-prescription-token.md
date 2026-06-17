---
type: wiki
title: "E-prescription token"
domain: concept
status: draft
confidence: high
tags: [concept, topic/e-prescription, journey/submit, domain/regulatory, domain/digital, region/global]
created: "2026-06-13"
updated: "2026-06-17"
---

# E-prescription token

The **e-prescription token** model treats a prescription as a portable
digital artefact (typically a **QR code / unique token**) that the patient
holds and presents, rather than a paper script tied to one pharmacy. The
canonical flow:

1. **Issue**: the prescriber signs and issues the script electronically.
2. **Deliver**: the patient receives a token by SMS, email, app or WhatsApp.
3. **Scan anywhere**: the patient presents the token at *any* participating
   pharmacy, which retrieves the full script and dispenses.
4. **New token per repeat**: on dispensing, a fresh token for the next
   authorised repeat is issued, so the patient is never holding a "spent" code.

This decouples the script from a physical document and from a single dispenser,
giving the patient portability and choice while keeping a tamper-evident, single-
use audit trail. Australia's eScript token (with the Active Script List as the
"don't-lose-the-SMS" backstop) is the cleanest working example and the best fit
for SA. **In SA today** a truly paperless e-script needs an ECTA Advanced
Electronic Signature, and telehealth-originated scripts are now permitted, so the
token model is largely operable but its full national form may be 🔮 requires-reform
at the infrastructure/standards level.

## In this vault
- [[wiki/sa-regulatory/e-prescription-telehealth-popia|E-prescription, telehealth & POPIA]] — ECTA AES basis, what's legal in SA.
- [[wiki/global-benchmarks/australia-chemist-warehouse-escript|Australia — eScript token & Active Script List]] — the reference implementation.
- [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps|UK — NHS EPS & nominated pharmacy]] — the nomination-based alternative.
- [[wiki/digital-transformation/e-prescribing-systems-and-standards|E-prescribing systems & standards]] — NCPDP SCRIPT, FHIR MedicationRequest, failure modes.

## Design stance
Design toward a token the patient owns and can present at any node, with a
backstop list so a lost SMS never blocks care. Single-use, repeat-aware tokens;
no dependence on one pharmacy. Where SA standards/infrastructure aren't ready,
emulate the *experience* (scan-to-retrieve) over existing rails and flag the gap.
