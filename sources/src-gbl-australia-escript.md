---
type: source
title: "Australia electronic prescriptions — token + Active Script List, MedAdvisor, Chemist Warehouse"
url: "https://www.digitalhealth.gov.au/initiatives-and-programs/electronic-prescriptions"
author: "Australian Digital Health Agency; Dept of Health; healthdirect"
publisher: "ADHA; Dept of Health (Australia); healthdirect; MedAdvisor; ASX"
published: "n.d."
retrieved: "2026-06-13"
source_kind: gov
reliability: A
tags: [domain/global, region/global, journey/submit, journey/refill, topic/e-prescription, topic/accessibility, topic/trust-safety]
---

# Summary

Australia's e-prescription design is the most directly transferable to SA: a
**QR-code token** sent by SMS/email that any pharmacy scans, plus an **Active
Script List (ASL)** for patients on multiple/regular medicines who consent once.
No single national payer is assumed — it works across a mixed funding system,
which is why it fits SA better than the NHS rail. ADHA/Dept of Health official +
company/press → A (adoption counts ADHA-reported via secondary, flagged).

# Key claims
- **Token model:** prescriber generates an e-prescription; patient receives a
  **unique QR code ("token") by SMS or email**; patient shows it at **any
  pharmacy**, which **scans it to unlock the script** from an encrypted
  **Prescription Delivery Service (PDS)**. The token is a key/pointer, not the
  script data; can be **forwarded to a carer/family member**. **Repeats:** the
  pharmacy issues a **new token after each dispense** until repeats are exhausted;
  a token can only be dispensed once at a time (prevents double-dispensing).
- **Active Script List (ASL):** patient **registers once at a pharmacy with 100
  points of ID** and consents; thereafter **all e-prescriptions auto-populate one
  list** that any **consented** pharmacy can view and dispense from — no token
  juggling. Per-pharmacy consent; patient can revoke. Governed by a federal **ASL
  Privacy Framework**. (Token = decentralised per-script; ASL = centralised
  nomination-style list.)
- **Infrastructure:** national PDS operated by **eRx Script Exchange (Fred IT
  Group)**. The former second PDS, **MediSecure**, lost its contract (~2023) and
  suffered a **2024 data breach (~12.9m Australians)** then entered administration —
  but government confirmed **"no impact to the current national PDS" (eRx)**.
- **Rollout/scale:** first e-script transmitted **6 May 2020** (Anglesea, Victoria),
  accelerated by COVID under the National Health Act 1953 special arrangements.
  **Over 360 million** e-prescriptions issued by 30 June 2025; **>95% of community
  pharmacies** dispense e-scripts (coverage metric, not script share).
- **MedAdvisor:** medication-management app = digital script wallet linked to the
  patient's pharmacy; stores e-scripts + repeats; **pre-order / tap-to-refill** so
  meds are ready for pickup; reminders; ASL integration; carer mode. ~3.7–4m
  connected patients via >95% of AU pharmacies; FY24 revenue A$122.1m (+24.6%).
- **Chemist Warehouse:** dominant **discount/scale** chain; standard national
  e-script/ASL flow + click & collect; **backdoor ASX listing via Sigma Healthcare
  reverse takeover** began trading **13 Feb 2025** (CW shareholders ~85.75%); ~A$10.3bn
  CW network sales FY25.

# Verbatim excerpts
> "the patient can receive their prescription via an app, SMS or email in the form
> of a link to a unique QR code or 'token' … scanned by the pharmacy to unlock the
> electronic form of the prescription from an encrypted and secure electronic
> prescription delivery service." (healthdirect)

> "For repeat prescriptions, your pharmacist will send you a new QR code after each
> repeat is dispensed until all the repeats are complete." (healthdirect)

# Used in
- [[wiki/global-benchmarks/australia-chemist-warehouse-escript]]
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]]
