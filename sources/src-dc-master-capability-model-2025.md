---
type: source
title: "Dis-Chem Integrated Health - Master Capability Model"
url: "n/a (internal spreadsheet, 20250106_Capability_map_Shared_NL.xlsx)"
author: "Dis-Chem App Health Squad"
publisher: "Dis-Chem (internal)"
published: "2025-01-06"
retrieved: "2026-10-04"
source_kind: company
reliability: B
tags: [domain/dischem, domain/digital, region/za]
---

## Summary

The enterprise-level capability model for Dis-Chem Integrated Health, in classic
business-capability-map form: L1 domains, L2 groups and L3 capabilities, each with
a definition, an ownership note (mostly "Enterprise-level capability (shared)")
and a phase. L1 domains, as numbered in the file:

1 Channels · 2 Patient Access · 3 Care Delivery · 4 Ancillary Care · 5 Provider
Revenue Management · 7 Population Health Management · 8 Health Research & Trial
Enablement · 9 Enterprise shared platforms · 10 Growth & Care Model Design.
(There is no domain 6 in the file.) A glossary sheet separates clinician,
pharmacist, provider, patient and customer.

Code in the work-to-be-done catalogue: **ECM** (enterprise capability model).

**Reliability B (justified):** company-primary architecture artefact,
authoritative for how Dis-Chem names its enterprise capabilities. It names what
must exist, not status or delivery, so it can't say whether a capability is live.

Full text extract: `sources/extracts/ecm-master-capability-model-2025.txt`.

## Key claims

- Enterprise shared platforms include an **Enterprise Master Patient Index**
  ("a single, trusted patient/customer identity"), master data services (NAPPI,
  formularies, products), identity governance, an API & integration layer, an
  **Enterprise Switching Engine** (benefit, claim and funding routing), an
  **Automated Engagement & Nudge System**, an Enterprise Data Platform and
  **Real-Time Event Processing** ("refill alerts, pathway steps, and engagement nudges").
- Pharmacy-relevant L3s include Prescribing & Prescription Management, Clinical
  Decision Support, Medication Counselling & Guidance, Adherence & Continuity
  Support, Medication Substitution & Cost Optimisation, Dispensing Oversight &
  Verification, Automated Dispensing Integration, Pharmacy Management System,
  Formulary & Substitution Management, Pharmacy Operations Enablement (incl.
  inventory handling), Patient Education and General Patient Education Assets.
- Patient Access includes Prospective Eligibility Check, Care-episode cost
  estimation and Upfront Payments; Growth & Care Model Design includes Pricing &
  Cost Modelling.
- Channels list WhatsApp as the "primary South African secure messaging interaction".
- Gaps relevant to scripting: no stand-alone inventory or stock-accuracy
  capability (inventory sits inside Pharmacy Operations Enablement), no last-mile
  delivery or collection capability, and nothing on dispensing-label or
  instruction content.

## Verbatim excerpts

> "Establishes and maintains a single, trusted patient/customer identity across the ecosystem" (L3, Enterprise Master Patient Index)

> "Supports event-driven triggers such as refill alerts, pathway steps, and engagement nudges" (L3, Real-Time Event Processing)

> "Primary South African secure messaging interaction supporting richer, conversational engagement" (L3, WhatsApp)

## Used in

- [[design-kit/templates/work-to-be-done-catalogue-template]]
- `deliverables/14-work-to-be-done-catalogue.data.js` (Seen-in code ECM)
