---
type: wiki
title: "Interoperability, identity & records"
domain: digital-transformation
status: draft
confidence: medium
tags: [domain/digital, topic/e-prescription, topic/automation, topic/ai, topic/trust-safety]
sources: [src-dig-fhir-identity-matching, src-dig-fhir-medication-resources, src-dig-sa-digital-health-strategy-hnsf, src-dig-sa-hprs-records, src-dig-ncpdp-script-cms, src-dig-sa-eprescribing-reg33]
created: "2026-06-13"
updated: "2026-06-13"
---

# Interoperability, identity & records

Interoperability is the **plumbing** beneath every other digital-transformation
capability: e-prescribing, omnichannel, AI forecasting and a unified patient
profile all assume that systems can exchange data about the **right person** with
the **right consent**. This page covers the standards (FHIR), the identity problem
(patient matching, master patient indexes), e-Rx exchange, consent, and the SA
realities — fragmentation and NHI's digital ambitions — that constrain what is
buildable.

## FHIR-based interoperability

**HL7 FHIR** is the modern, web/API-based interoperability standard, exchanging
discrete resources (e.g. `Patient`, `MedicationRequest`, `MedicationDispense`) over
REST [[src-dig-fhir-medication-resources]]. It enables a more connected ecosystem
than older document/message standards and is increasingly the substrate for new
national programmes. The **FHIR at Scale Taskforce (FAST)** is standardising the
hard cross-organisation pieces: **Identity** (digital identity + patient matching),
**Security**, **National Directory**, and **Consent** (interoperable consent
management, in HL7 balloting) [[src-dig-fhir-identity-matching]]. In a scripting
context FHIR lets a script, its dispense, the patient identity and the consent all
travel as linked, queryable data rather than a flat message.

## Patient identity and matching

Nothing works without correct patient matching — the wrong-patient match is a
safety event, not just a data error. Two approaches, usually combined
[[src-dig-fhir-identity-matching]]:

- **Deterministic** matching requires **exact** attribute matches (e.g. ID number +
  name + DOB). High precision, but brittle when data is dirty or missing.
- **Probabilistic** matching **scores similarity** to tolerate typos, name variants
  and transpositions, reducing false negatives but needing careful threshold tuning
  (and risking false positives).

A modular approach applies deterministic rules first and probabilistic scoring for
ambiguous records, typically operationalised through an **Enterprise Master Patient
Index (EMPI)** [[src-dig-fhir-identity-matching]]. SA's national equivalent is the
**HPRS**, a patient registry / MPI keyed on the SA ID number (and passports)
[[src-dig-sa-hprs-records]].

## E-Rx exchange and consent

E-prescription exchange layers a medication standard (FHIR
`MedicationRequest`/`MedicationDispense`, or NCPDP SCRIPT transactions) on top of
reliable identity and consent [[src-dig-fhir-medication-resources]]
[[src-dig-ncpdp-script-cms]]. **Consent** is not optional plumbing — sharing a
medication history across providers/channels requires a recorded, interoperable
consent, which is exactly what FAST Consent aims to standardise
[[src-dig-fhir-identity-matching]]. In SA this maps onto **POPIA** obligations
(lawful basis, purpose limitation, data-subject rights) — any unified patient
profile or cross-provider e-Rx must carry POPIA-compliant consent.

## SA realities: fragmentation and NHI

SA's interoperability posture is a mix of ambition and fragmentation:

- The **National Digital Health Strategy 2019–2024** and the **Health Normative
  Standards Framework (HNSF)** set the policy, but HNSF names **older standards** —
  HL7 v2.x/CDA + Continuity of Care Document for content, ISO 22220/ISO-TS 27527 for
  identifiers, ICD-10 for terminology — rather than centrally mandating FHIR
  [[src-dig-sa-digital-health-strategy-hnsf]]. A future-state design should use FHIR
  internally while mapping to HNSF where required.
- The **HPRS** exists as the national MPI, but the EHR diagnostic/treatment/billing
  modules NHI needs **remain undeveloped** [[src-dig-sa-hprs-records]]
  [[src-dig-sa-digital-health-strategy-hnsf]].
- **Fragmentation** is the operative reality: non-compliant and paper-based
  record-keeping persists (with judicial criticism), and systems integration across
  programmes/provinces is a known weakness; unique patient identification is still
  maturing regionally [[src-dig-sa-hprs-records]].
- **NHI** is positioned as the driver of future digital-health investment and a
  potential national interoperability backbone — but it is an ambition, not yet an
  operable shared record [[src-dig-sa-hprs-records]].

Implication for Dis-Chem: do **not** assume a national shared record or e-Rx
exchange. Build a robust **internal unified patient profile** (own EMPI-style
matching on SA ID number, POPIA consent, FHIR-shaped medication data) that can
*later* interoperate with NHI/FHIR when it arrives — designed for, but not dependent
on, a national backbone.

## Design implications

- **Own your identity layer.** Implement EMPI-style matching (deterministic on SA ID
  number first, probabilistic fallback) so the unified profile is reliable without a
  national MPI.
- **Model medication data as FHIR internally** (`MedicationRequest`/
  `MedicationDispense`) for portability and future NHI interoperability; map to HNSF
  (HL7 v2/CDA) only at integration boundaries.
- **Make consent a first-class, POPIA-compliant record** that travels with the
  profile and gates cross-channel/cross-provider sharing.
- **Design for an absent national backbone** today, but standards-align so you can
  plug into NHI/FHIR when it exists. 🔮 a national FHIR-based e-Rx exchange would be
  transformative — flag as requires-reform.
- **Treat wrong-patient matching as a safety risk,** not a data nicety — tune
  thresholds and keep human review for ambiguous matches.

## Open questions

- ⚠️ UNVERIFIED: Will NHI/NDoH adopt **FHIR** as the national e-Rx/record standard,
  or persist with HL7 v2/CDA per HNSF? Timeline unknown [[src-dig-sa-digital-health-strategy-hnsf]].
- ⚠️ Can private pharmacy systems query or contribute to the **HPRS** today, or is
  it public-sector only? [[src-dig-sa-hprs-records]]
- ⚠️ What exact POPIA consent mechanism is required to maintain a cross-channel
  unified patient profile and share medication history? (Cross-link to
  `sa-regulatory`.)
- ⚠️ UNVERIFIED: How is patient matching handled today across SA medical schemes /
  pharmacy / prescriber systems — is there a common identifier beyond the SA ID
  number?

## See also

- [[e-prescribing-systems-and-standards]]
- [[telepharmacy-and-omnichannel]]
- [[ai-in-pharmacy]]
- [[pharmacy-automation-and-robotics]]
- [[wiki/digital-transformation/_index]]
