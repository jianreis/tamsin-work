---
type: source
title: "FHIR interoperability, FAST Identity/Consent & patient matching (deterministic vs probabilistic, EMPI)"
url: "http://hl7.org/fhir/us/identity-matching/"
author: "HL7 International (FAST); ONC; industry (EMPI explainers)"
publisher: "HL7.org; HealthIT.gov (ONC); Edana; Censinet"
published: "2024-01-01"
retrieved: "2026-06-13"
source_kind: regulation
reliability: A
tags: [domain/digital, topic/e-prescription, topic/trust-safety, region/global]
---

## Summary

Interoperability and identity foundations for cross-organisation e-Rx and record
exchange. FHIR is the web/API standard enabling connected exchange; the **FAST
(FHIR at Scale Taskforce)** workstreams standardise **Identity** (interoperable
digital identity & patient matching), **Security**, **National Directory** and
**Consent** (consent management at scale, in HL7 balloting). On matching:
**deterministic** matching requires exact attribute matches (high precision, needs
clean data); **probabilistic** matching scores similarity to tolerate typos/variants
(fewer false negatives, needs threshold tuning); a modular approach applies
deterministic rules first, probabilistic for ambiguous records — typically via an
Enterprise Master Patient Index (**EMPI**). Establishes that reliable patient
identity + consent are prerequisites for safe e-prescription exchange and a shared
record — directly relevant to SA's HPRS/MPI and POPIA-consent realities.

## Key claims
- FHIR enables connected, API-based health data exchange supporting e-Rx and shared
  records.
- **FAST Identity** IG provides identity verification + patient matching for
  cross-organisation/cross-network FHIR exchange.
- **FAST Consent** IG (in HL7 balloting) standardises interoperable consent
  management at scale.
- **Deterministic** matching = exact attribute match (high precision, needs good
  data); **probabilistic** = similarity scoring (handles typos/variants, needs
  tuning); modular/EMPI combines both.
- Reliable identity + consent are prerequisites for safe e-Rx exchange and shared
  records.

## Verbatim excerpts
> "Deterministic matching offers high precision by requiring exact attribute
> matches … while probabilistic matching handles typos and variations by scoring
> similarity, reducing false negatives but requiring careful threshold tuning."

> "The FAST Consent Implementation Guide has entered formal HL7 balloting,
> providing the industry with a practical, interoperable approach to consent
> management at scale."

## Used in
- [[wiki/digital-transformation/interoperability-identity-records]]
- [[wiki/digital-transformation/e-prescribing-systems-and-standards]]
- [[wiki/digital-transformation/telepharmacy-and-omnichannel]]
