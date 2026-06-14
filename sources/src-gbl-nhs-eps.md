---
type: source
title: "NHS Electronic Prescription Service (EPS) — service & nomination model"
url: "https://digital.nhs.uk/services/electronic-prescription-service"
author: "NHS England Digital"
publisher: "NHS England Digital (digital.nhs.uk); Community Pharmacy England"
published: "n.d."
retrieved: "2026-06-13"
source_kind: gov
reliability: A
tags: [domain/global, region/global, journey/submit, journey/refill, topic/e-prescription]
---

# Summary

How England's national e-prescription rail works: GP signs a prescription
electronically, it lands on the NHS Spine, and the patient either **nominates** a
pharmacy to receive scripts automatically or presents a **scannable token
barcode** at any pharmacy. The "nomination" pattern is the most directly
transferable design idea for SA. NHS official + sector body → A.

# Key claims
- Flow: prescriber creates and **digitally signs** the prescription in their
  clinical system → sent to the **NHS Spine** → made available to a dispenser →
  patient collects at their **nominated** pharmacy (automatic routing) or via a
  **paper token (FP10SS)** whose **barcode is scanned** to pull the script down.
- **Nomination:** a patient may nominate up to one of each dispenser type (one
  community/internet pharmacy, one appliance contractor, one dispensing doctor).
  Prescribers are **barred from steering** patients to a particular pharmacy.
- **Over 95% of all prescriptions in England are now produced electronically.**
- Rollout was phased (Release 1 → Release 2); **Phase 4** national rollout began
  **18 November 2019**, making EPS the default prescribing/dispensing/
  reimbursement method.

# Verbatim excerpts
> "EPS is already widely used in primary care with over 95% of all prescriptions
> in England now being produced electronically." (NHS England Digital)

> "The barcode on a token can be scanned to download the electronic prescription
> from the NHS Spine." (Community Pharmacy England)

# Used in
- [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]]
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]]
