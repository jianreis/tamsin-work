---
type: wiki
title: "The dual journey (two-economy design)"
domain: concept
status: draft
confidence: high
tags: [concept, domain/consumer, domain/schemes, region/za, topic/chronic, topic/acute]
created: "2026-06-13"
updated: "2026-06-17"
---

# The dual journey - designing for two South Africas at once

South Africa runs a **two-economy** healthcare system: only roughly **16%** of
people belong to a medical scheme, while the other **~84%** rely on the public sector
or pay **cash** out of pocket ([[wiki/consumer-context/two-economy-affordability]],
[[wiki/medical-schemes/cms-medical-schemes-overview]]). This split, not age,
device, or geography, is **the single most decisive design variable** in the
prescription experience. It is [[design-kit/templates/future-state-principles|Principle #2]].

A scheme-first design that treats cash payment as an *error state* or an
afterthought fails the majority of the market. Equally, a bare cash flow that
ignores the real-time claim machinery insured members expect will feel broken to
the 16% who fund most of pharmacy revenue. The answer is **two first-class
journeys that share one spine** (submit → validate → fund/price → pay → dispense →
fulfil → adhere → refill), diverging only where money works differently:

| | **Insured journey** | **Cash / uninsured journey** |
|---|---|---|
| Funding moment | Real-time claim **pre-adjudication**; show co-pay before commit | **Transparent cash price** (SEP + dispensing fee) before commit |
| Default fulfilment | Home delivery / collection | **Nearest collection / locker** (delivery = premium) |
| Payment | Scheme + saved method | **Cash-on-collection + multi-rail**, no saved card assumed |
| Steering | DSP / formulary / co-pay logic | Generic-first for affordability |
| Worked example | [[to-be-blueprint-chronic-insured]] (Nomvula) | [[to-be-journey-cash-acute]] (Thabo) |

The unifying move is the same in both: **make money legible early** (Principle #3,
[[wiki/concepts/price-transparency]]). The form of the answer differs (covered/co-pay
vs. cash total), but the promise of *no surprise at the till* does not.

## In this vault
- Funding reality: [[wiki/medical-schemes/cash-uninsured-pathway]] · [[wiki/medical-schemes/dsp-formularies-copayments]] · [[wiki/medical-schemes/realtime-claims-switching]]
- Consumer reality: [[wiki/consumer-context/two-economy-affordability]] · [[wiki/consumer-context/health-seeking-behaviour]]
- Public-sector mirror (the uninsured chronic precedent): CCMDD / Pelebox — [[wiki/medical-schemes/courier-chronic-pharmacy-models]], [[wiki/consumer-context/last-mile-addressing-logistics]]
- Related concepts: [[wiki/concepts/price-transparency]] · [[wiki/concepts/channel-ladder]] · [[wiki/concepts/chronic-medicine-flywheel]]
- Personas spanning the split: [[design-kit/personas/_personas-index]]

## Design stance
Build **one spine, two funded paths**. Never branch the cash user into a degraded
flow. Decide the funding path as early as possible (ask "scheme or cash?" once,
remember it), then keep the experience (speed, dignity, transparency, fulfilment
choice) equally good on both sides. Test every concept against **both** a scheme
persona and a cash persona before shipping.
