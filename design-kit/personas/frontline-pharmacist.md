---
type: persona
title: "Naledi Mahlangu — frontline dispensary pharmacist (staff persona)"
segment: staff
persona_class: staff
tags: [design-kit, persona, region/za, topic/trust-safety, topic/automation, journey/validate, journey/dispense]
grounded_in:
  - "[[wiki/dispensing-practice/dispensing-process-steps]]"
  - "[[wiki/dispensing-practice/clinical-checks-and-mtm]]"
  - "[[wiki/sa-regulatory/pharmacy-act-sapc-gpp]]"
  - "[[wiki/consumer-context/language-literacy-and-trust]]"
  - "[[wiki/medical-schemes/pmb-cdl-chronic]]"
created: "2026-06-13"
updated: "2026-06-17"
---

# Naledi Mahlangu — frontline dispensary pharmacist (staff persona)

> **One-liner:** The retail dispensary pharmacist who carries legal responsibility
> for every dispensing act and clinical check in her store - chronically
> over-stretched, the safety kernel of the whole experience, and the person whose
> time and oversight the future-state must **protect, not erode**.

## Demographics & context
- **Age 36**, registered pharmacist; **Responsible Pharmacist (RP)** for a busy
  Dis-Chem dispensary in a metro store. SAPC-registered; works alongside a small
  number of pharmacist's assistants.
- She is **not the customer** but the **frontstage clinician and backstage
  safety check** in the journey - the human the design must serve so she can serve
  patients [[wiki/dispensing-practice/dispensing-process-steps]].
- Multilingual; counsels patients across **isiZulu, Sesotho and English** and
  feels the strain of explaining regimens in patients' second languages
  [[wiki/consumer-context/language-literacy-and-trust]].

## Role & legal situation (her "health situation" analogue)
- **Legally accountable.** Under the Pharmacy Act and GPP, dispensing must be done
  **by or under the personal supervision of a pharmacist**, and counselling on
  safe use is **mandatory**, not optional [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]].
  She, with the owner, is **jointly responsible for GPP compliance**.
- **Supervision ratios bound her capacity:** no more than 3 assistants under
  direct, or 5 post-basic under indirect, supervision per pharmacist - automation
  cannot exceed what she can lawfully oversee
  [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]].
- **Owns the clinical check** (DDIs, contraindications, high-alert medicines -
  insulin, anticoagulants, opioids - and dose appropriateness), the step that makes
  the pharmacy more than a vending machine
  [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- **Owns the six-stage dispensing process:** legal validation → clinical review →
  preparation/labelling → independent accuracy check → handover/counselling →
  record-keeping [[wiki/dispensing-practice/dispensing-process-steps]].

## Tools, systems & environment
- Works in **dispensing software** with real-time scheme claim switching, a
  paper-to-rekey intake burden, and clinical-decision support of variable quality.
- **Errors cluster where the system is weak** - fatigue, distraction, staff
  shortages and time pressure are the documented drivers of medication error, not
  individual carelessness [[wiki/dispensing-practice/dispensing-process-steps]].
- Constantly **interrupted** by counter queries, phone calls, scheme rejections
  and stock-outs, fragmenting the focus the clinical check demands.

## Pressures & incentives (her "money/funding" analogue)
- **Time is her scarcest resource.** Volume pressure pushes toward skipping or
  rushing the clinical check and counselling - exactly the steps that protect the
  patient [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- **Reimbursement is dispensing-led**, so clinical work (MTM, interventions,
  registering a chronic condition) is often unpaid time - a structural
  disincentive the design should not worsen [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- Handles **scheme/co-pay friction** at the counter: chronic-registration gaps,
  PMB/CDL rules and rejections land on her to explain and resolve
  [[wiki/medical-schemes/pmb-cdl-chronic]].

## Goals / Jobs-To-Be-Done
See [[jtbd-library]] (staff lens):
- **Protect patient safety** - never let the clinical check or counselling be
  skipped under volume pressure.
- **Spend her scarce time where her judgement adds most** - clinical review,
  high-alert patients, complex counselling, not manual re-keying or chasing
  scheme rejections.
- **Stay compliant effortlessly** - supervision ratios, scheduled-substance
  registers, cold-chain records satisfied by the system, not by heroics.
- Emotional: **feel trusted and supported, not replaced or de-skilled** by
  automation; be the **named professional** patients trust.

## Key pains in the current journey
- **Manual, paper-to-rekey intake** consumes time and introduces transcription
  error ([[as-is-prescription-journey]] Stages 1–2)
  [[wiki/dispensing-practice/dispensing-process-steps]].
- **Stock-outs discovered late** force her to manage disappointed patients and
  find alternatives at the counter ([[as-is-prescription-journey]] Stages 3, 6).
- **Scheme/co-pay rejections** surface to her to triage and explain
  ([[as-is-prescription-journey]] Stage 4) [[wiki/medical-schemes/pmb-cdl-chronic]].
- **Counselling gets squeezed** by queues, risking the mandated, safety-critical
  handover step [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]].
- **Automation that bypasses her** would be both unlawful (S2+ needs pharmacist
  oversight) and unsafe - a design that erodes her role is a design that fails
  [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]].

## Behaviours & quote
She triages the queue, defends the clinical check even when slammed, escalates to
the prescriber on a query, and catches errors the system should have
caught. She welcomes anything that removes admin, and distrusts anything that
removes *her* from the loop.

> *"Automate the typing, the stock checks and the claim chasing — please. But the
> clinical check and counselling are mine by law and by conscience. Give me back
> the time to do them properly; don't design me out."*

## How to design for them
- **Automate the toil, not the judgement:** OCR/structured intake to kill
  re-keying, proactive stock checks, and auto-handling of scheme/co-pay logic - so
  her time goes to the clinical check, not admin
  [[wiki/dispensing-practice/dispensing-process-steps]].
- **Make the clinical check un-skippable by design:** even fast e-script and
  auto-refill flows must route through a pharmacist screen against a **single
  longitudinal medication record**; force confirmation for high-alert items
  [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- **Build the "rights" into the system:** barcode/NAPPI scan at selection, a
  structured independent accuracy check, scheduled-substance and cold-chain records
  captured automatically [[wiki/dispensing-practice/dispensing-process-steps]],
  [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]].
- **Respect supervision ratios:** size any central-fill/automation model to the
  pharmacists who can lawfully oversee it, not to machine throughput
  [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]].
- **Make oversight visible and counselling designable:** surface "checked by a
  pharmacist", provide a real counselling channel (in-person/video/chat) with
  multilingual **teach-back**, and let her initiate chronic registration in-flow
  [[wiki/consumer-context/language-literacy-and-trust]], [[wiki/medical-schemes/pmb-cdl-chronic]].

## Grounded in
- [[wiki/dispensing-practice/dispensing-process-steps]]
- [[wiki/dispensing-practice/clinical-checks-and-mtm]]
- [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]]
- [[wiki/consumer-context/language-literacy-and-trust]]
- [[wiki/medical-schemes/pmb-cdl-chronic]]

## See also
- [[design-kit/personas/_personas-index]]
- [[design-kit/personas/elderly-poly-pharmacy]]
- [[design-kit/personas/insured-chronic-multimorbid]]
- [[as-is-prescription-journey]]
- [[jtbd-library]]
