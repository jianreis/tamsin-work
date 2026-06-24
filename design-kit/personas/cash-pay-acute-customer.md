---
type: persona
title: "Thabo Mokoena — cash-pay acute customer"
segment: uninsured
persona_class: customer
tags: [design-kit, persona, region/za, topic/acute, topic/accessibility, journey/pay]
grounded_in:
  - "[[wiki/medical-schemes/cash-uninsured-pathway]]"
  - "[[wiki/consumer-context/two-economy-affordability]]"
  - "[[wiki/consumer-context/digital-access-and-whatsapp]]"
  - "[[wiki/consumer-context/health-seeking-behaviour]]"
  - "[[wiki/consumer-context/language-literacy-and-trust]]"
created: "2026-06-13"
updated: "2026-06-17"
---

# Thabo Mokoena — cash-pay acute customer

> **One-liner:** A 31-year-old uninsured father in a peri-urban township who needs
> a one-off antibiotic for his sick child *today*, pays cash, rations prepaid
> data, and lives on WhatsApp - and just needs to know the price before he leaves.

## Demographics & context
- **Age 31**, lives in Tembisa (peri-urban Gauteng). Works shifts at a logistics
  warehouse; partner sells at a market stall. One young child.
- Represents the **~84% uninsured majority**, the larger market rather than a
  fringe case [[wiki/medical-schemes/cash-uninsured-pathway]],
  [[wiki/consumer-context/two-economy-affordability]].
- Home language **isiZulu/Sesotho**; functional English; reads dosage
  instructions in a second language, so plain language matters
  [[wiki/consumer-context/language-literacy-and-trust]].

## Health situation
- **Acute, episodic** need: his child has a chest infection; a clinic GP issued a
  paper script for **antibiotics + paediatric syrup**. One-off, time-sensitive,
  emotionally charged ("my child is sick").
- Otherwise healthy; he is not a chronic/repeat patient. His job-to-be-done is
  **get this filled fast and start treatment**.

## Devices, channels & connectivity
- **Entry-level Android on prepaid**, frequently near a **zero data balance**;
  buys small daily bundles and pays the **small-bundle "poverty premium"** per MB
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- **WhatsApp-first** - it is effectively his operating system; he will not install
  or learn a new app or create an account
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- Every image/PDF a flow makes him download has a **real rand cost** to him.

## Money & funding
- **No medical scheme.** Pays **out of pocket, at the margin** - a single script
  is a meaningful share of the week's money
  [[wiki/consumer-context/two-economy-affordability]].
- The cash price is **regulated and computable** (SEP + the banded dispensing
  fee), and the dispensing fee bites **hardest on cheap medicines** (the 46%
  band), so generic and pack-size choices are real affordability levers
  [[wiki/medical-schemes/cash-uninsured-pathway]].
- Uses **cash / instant EFT / wallet**, not necessarily a stored card; the trip
  and the queue are themselves a cost [[wiki/consumer-context/two-economy-affordability]].

## Goals / Jobs-To-Be-Done
See [[jtbd-library]]. His dominant jobs:
- **Get a new (acute) script filled fast** with minimum extra effort.
- **Submit a script with whatever I have** - a WhatsApp photo, no new app, no data
  he can't afford.
- **Pay in a way that works for me** - a clear cash price up front, no surprises;
  choose the cheaper generic.
- Emotional: **not feel poor or judged** when asking about cost; **be treated with
  dignity**.

## Key pains in the current journey
- **No transparent price before he commits** - a cash patient can't "claim and
  see"; uncertainty up front is the whole game
  [[wiki/medical-schemes/cash-uninsured-pathway]].
- **App friction blocks the channel he can't use anyway** - login failures,
  account creation, heavy downloads ([[as-is-prescription-journey]] Stage 2)
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Cash path treated as an error state**, with scheme-only language that
  excludes and subtly shames him [[wiki/medical-schemes/cash-uninsured-pathway]].
- **The trip and queue** when he's already taken time off shift to care for a
  sick child [[wiki/consumer-context/health-seeking-behaviour]].

## Behaviours & quote
He snaps the script on WhatsApp from the clinic gate, asks "how much?", and
decides on the spot. If the answer is slow, opaque, or needs an app, he walks to
the nearest store or a spaza for what he can afford.

> *"Just tell me the price on WhatsApp. If it's too much, show me a cheaper one
> that works - I'm not made of money and my child is sick now, not next week."*

## How to design for them
- **WhatsApp-first, no app, data-frugal:** photo-of-script submission, a text
  price quote, small payloads, resumable if his data runs out mid-flow
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Quote the cash price up front, broken down (SEP + fee), with a one-tap
  generic-swap that shows the saving** [[wiki/medical-schemes/cash-uninsured-pathway]].
- **Make the cash path first-class, not an error state** - no scheme-membership
  precondition, no saved card required; support cash-on-collection / instant EFT
  [[wiki/consumer-context/two-economy-affordability]].
- **Offer the nearest fast collection point** so he avoids a long trip with a sick
  child [[wiki/consumer-context/health-seeking-behaviour]].
- **Plain-language, multilingual dosage** for the child's medicine - a
  clinical-safety lever for a second-language reader
  [[wiki/consumer-context/language-literacy-and-trust]].

## Grounded in
- [[wiki/medical-schemes/cash-uninsured-pathway]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/language-literacy-and-trust]]

## See also
- [[design-kit/personas/_personas-index]]
- [[design-kit/personas/low-data-whatsapp-first-peri-urban]]
- [[design-kit/personas/public-sector-bridging-to-retail]]
- [[as-is-prescription-journey]]
- [[jtbd-library]]
