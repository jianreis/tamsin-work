---
type: persona
title: "Nomvula Khumalo — insured chronic, multimorbid"
segment: insured
persona_class: customer
tags: [design-kit, persona, region/za, topic/chronic, topic/adherence, journey/refill]
grounded_in:
  - "[[wiki/medical-schemes/pmb-cdl-chronic]]"
  - "[[wiki/medical-schemes/cms-medical-schemes-overview]]"
  - "[[wiki/medical-schemes/dsp-formularies-copayments]]"
  - "[[wiki/consumer-context/health-seeking-behaviour]]"
  - "[[wiki/consumer-context/adjacent-digital-expectations]]"
  - "[[wiki/consumer-context/digital-access-and-whatsapp]]"
created: "2026-06-13"
updated: "2026-07-19"
---

# Nomvula Khumalo — insured chronic, multimorbid

> **One-liner:** A 54-year-old Discovery member on the Chronic Disease List for
> hypertension *and* type-2 diabetes who just wants her several repeats to flow
> automatically, fully funded, without a counter queue or a co-payment surprise.

## Demographics & context
- **Age 54**, lives in Midrand (Gauteng suburb), works full-time as an HR
  manager. Married; two adult children, a 12-year-old daughter, **Zanele**,
  and a late-arrival 7-year-old son, **Lethabo**.
- Owns a home with a findable street address; commutes daily; chronically
  **time-pressured** between work, family and her own care.
- **Household medicine manager:** in the future-state journey work (deliverable
  05 onwards) she also runs the medicine admin for her mother, **Grace Khumalo**
  (76, chronic hypertension, lives with the family, **on her own medical scheme
  which covers her chronic meds partially** - Nomvula carries the shortfall and
  needs it visible in the same cost breakdown), her daughter **Zanele** (12,
  **ADHD**, on a chronic Schedule 6 methylphenidate script - repeat rules are
  stricter) and her son **Lethabo** (7, **asthma**, on a chronic controller
  inhaler). Both children are on chronic medication (updated 2026-07-19, agreed
  with Tamsin). Refer to her mother as **Grace** in all deliverables - never
  "Gogo".
- **Delivery preference:** a **two-hour morning window (09:00-11:00), to home**
  - a time-of-month arrangement, not a weekday promise. She chose it because
  she can reliably be there; self-selected narrow windows are the
  research-backed exception to the broader-window preference
  ([[wiki/dischem/store-of-the-future-customer-voice]]).
- Comfortable in **English** at work but speaks **isiZulu** at home; reads
  health information fine but resents jargon.

## Health situation
- **Multimorbid:** hypertension + **type-2 diabetes** - both on the 26-condition
  Chronic Disease List, so her scheme **must** fund medication, consultations and
  certain tests as PMBs [[wiki/medical-schemes/pmb-cdl-chronic]].
- On **4–5 concurrent chronic medicines** (incl. metformin and an
  ACE-inhibitor); diabetes meds make her a **high-alert / monitoring** patient.
  Multimorbidity (HTN + DM) is exactly the rising NCD pattern driving repeat
  demand [[wiki/consumer-context/health-seeking-behaviour]].
- Stable and well-controlled - her need is **continuity**, not diagnosis.

## Devices, channels & connectivity
- **Smartphone + the Dis-Chem app**, home fibre and uncapped work Wi-Fi - she is
  the **app-capable minority**, not data-constrained.
- Lives on WhatsApp for everything else and would happily refill there
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- Benchmarks the pharmacy against **Sixty60, Takealot and Discovery's own app** -
  expects live status, an honest ETA, two-tap reorder
  [[wiki/consumer-context/adjacent-digital-expectations]].

## Money & funding
- On a **medical scheme** (open scheme, comprehensive option); chronic meds
  funded from her **chronic benefit pool**, not savings - *when* registration and
  formulary line up [[wiki/medical-schemes/pmb-cdl-chronic]].
- Not price-poor, but **allergic to co-payment surprises**: a non-formulary or
  non-DSP fill can trigger an unexpected co-pay even on a PMB condition
  [[wiki/medical-schemes/dsp-formularies-copayments]]. She wants the scheme
  applied automatically and the out-of-pocket shown *before* she commits.

## Goals / Jobs-To-Be-Done
See [[jtbd-library]]. Her dominant jobs:
- **Keep chronic meds flowing without thinking about it** - repeats handled
  automatically and reliably, never run out, never re-do admin.
- **Pay in a way that works for me** - scheme applied automatically, co-pay (if
  any) shown up front, no counter surprise.
- **Get it where I am** - delivery to door or a fast collect that fits a workday.
- Emotional: **feel in control of my health, not processed by a system.**

## Key pains in the current journey
- **Co-payment / DSP surprise at funding** - the single biggest trust risk in the
  [[as-is-prescription-journey|as-is journey]] (Stage 4); she discovers a co-pay
  only at the till [[wiki/medical-schemes/dsp-formularies-copayments]].
- **Refill is opt-in, not managed**, and **breaks hard at script expiry (~6
  months)** - she must re-confirm each cycle and chase a new script
  ([[as-is-prescription-journey]] Stages 8–9).
- **Chronic stock-outs with no generic on hand** force a wasted trip
  ([[as-is-prescription-journey]] Stages 3, 6).
- **App reliability** (login/payment failures) breaks the very channel she'd
  prefer ([[as-is-prescription-journey]] Stage 2).

## Behaviours & quote
She pre-orders the night before, checks status on her phone between meetings, and
abandons any flow that makes her phone the doctor's office. She has switched a
script to a courier pharmacy once, purely to dodge a co-pay.

> *"I don't have time to stand in a queue to be told my medicine isn't covered.
> Just tell me what it costs before I press pay, and don't make me re-apply every
> six months."*

## How to design for them
- **Make the repeat truly managed, not opt-in:** auto-prepare on cycle, proactive
  "ready" nudge, and **orchestrate the script-renewal gap** (prompt/renew before
  the 6-month expiry instead of letting it lapse).
- **Show funded vs co-pay *before* commit:** pre-check the prescribed medicine
  against the scheme **formulary + CDL algorithm + DSP** and surface the
  out-of-pocket in plain language [[wiki/medical-schemes/pmb-cdl-chronic]],
  [[wiki/medical-schemes/dsp-formularies-copayments]].
- **Offer a generic-substitution prompt with the saving shown**, so she chooses
  rather than is surprised.
- **Meet the Sixty60 bar:** live status, honest ETA, named pharmacist, two-tap
  reorder over **WhatsApp or app** [[wiki/consumer-context/adjacent-digital-expectations]].
- **Consolidate her 4–5 scripts into one prepared parcel + one collection/delivery
  event** [[wiki/consumer-context/health-seeking-behaviour]].

## Grounded in
- [[wiki/medical-schemes/pmb-cdl-chronic]]
- [[wiki/medical-schemes/cms-medical-schemes-overview]]
- [[wiki/medical-schemes/dsp-formularies-copayments]]
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/adjacent-digital-expectations]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]

## See also
- [[design-kit/personas/_personas-index]]
- [[design-kit/personas/time-poor-urban-professional]]
- [[design-kit/personas/caregiver-proxy-collector]]
- [[as-is-prescription-journey]]
- [[jtbd-library]]
