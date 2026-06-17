---
type: persona
title: "Lerato Dlamini — caregiver / proxy collector"
segment: mixed
persona_class: customer
tags: [design-kit, persona, region/za, topic/chronic, topic/accessibility, topic/trust-safety, journey/collect, journey/refill]
grounded_in:
  - "[[wiki/consumer-context/health-seeking-behaviour]]"
  - "[[wiki/consumer-context/two-economy-affordability]]"
  - "[[wiki/consumer-context/last-mile-addressing-logistics]]"
  - "[[wiki/consumer-context/language-literacy-and-trust]]"
  - "[[wiki/consumer-context/digital-access-and-whatsapp]]"
  - "[[wiki/medical-schemes/pmb-cdl-chronic]]"
created: "2026-06-13"
updated: "2026-06-17"
---

# Lerato Dlamini — caregiver / proxy collector

> **One-liner:** A 38-year-old "sandwich-generation" daughter and mother who runs
> the medicine admin for her diabetic mother, her two school-age children and
> herself - juggling several profiles, scripts and collection dates across a cash
> and a scheme wallet, and forever collecting on someone else's behalf.

## Demographics & context
- **Age 38**, lives in Soweto (Gauteng), works as an administrator. Heads a
  three-generation household: her **mother (68, type-2 diabetes + hypertension)**,
  her **two children (7 and 11)**, and herself.
- The default health manager for the family - booking, fetching, paying, and
  remembering who needs what when. This caregiving load is the lived reality
  behind the "manage care for someone else" job [[jtbd-library]].
- Home language **isiZulu**; comfortable in English on her phone; navigates her
  mother's care partly in a second language [[wiki/consumer-context/language-literacy-and-trust]].

## Health situation
- **Manages multiple people, not one condition.** Her mother is a stable,
  multi-medicine **chronic/CDL** patient - exactly the polypharmacy refill cohort
  that dominates repeat demand [[wiki/consumer-context/health-seeking-behaviour]],
  [[wiki/medical-schemes/pmb-cdl-chronic]]. The children generate **acute,
  episodic** scripts (infections, asthma). Lerato has her own occasional needs.
- The hard part is **orchestration across profiles** - different conditions,
  refill cycles, schemes and collection points, all landing on one person.

## Devices, channels & connectivity
- **Smartphone on a mix of prepaid + small data bundle**; WhatsApp is her command
  centre for the whole family [[wiki/consumer-context/digital-access-and-whatsapp]].
- Willing to use an app but resents one that forces a **separate login or profile
  per person** - she needs to act *for* several people from one place.
- Collects in person far more than she gets delivery - collection at a known
  point near home or work is more reliable than a delivery address
  [[wiki/consumer-context/last-mile-addressing-logistics]].

## Money & funding
- **Two wallets at once:** her mother may be on a modest scheme option (or pays
  cash / uses CCMDD); the children's acute scripts are typically **out of pocket**
  [[wiki/consumer-context/two-economy-affordability]]. She is the household's
  budget gatekeeper and feels every co-pay and dispensing fee.
- Plans for predictable recurring costs the way SA households pool for them
  (stokvel logic). A **family account** that shows everyone's costs in one place
  would map onto how she already thinks [[wiki/consumer-context/two-economy-affordability]].

## Goals / Jobs-To-Be-Done
See [[jtbd-library]]. Her dominant jobs:
- **Manage care for someone else** (mother + children) **without friction** -
  multiple profiles, clear authority to act and collect on their behalf.
- **Keep chronic meds flowing without thinking about it** - her mother's repeats
  prepared and ready, ideally consolidated into one collection event.
- **Get it where I am** - collect near home/work; one trip, not several.
- Emotional: **feel in control**, not buried in everyone's admin; be **trusted to
  act for her dependents** without re-proving it each time.

## Key pains in the current journey
- **No proxy model.** The as-is flow assumes one person = one patient; collecting
  for a dependent means carrying *their* ID/order number and re-explaining
  authority each time ([[as-is-prescription-journey]] Stage 7).
- **Refills are opt-in per person, per cycle** - she must track and re-confirm
  each family member separately, with hard breaks at script expiry
  ([[as-is-prescription-journey]] Stages 8–9).
- **Multiple trips and queues** for several people's medicine - every avoided
  journey is a real cost saved [[wiki/consumer-context/health-seeking-behaviour]].
- **Privacy/authority ambiguity** - collecting a relative's (possibly
  stigmatised) medicine needs discreet, lawful proxy handling, not a public
  negotiation at the counter [[wiki/consumer-context/language-literacy-and-trust]].

## Behaviours & quote
She keeps a mental (and WhatsApp-note) calendar of who runs out when, batches
pharmacy trips on payday, and is the person the whole family WhatsApps when a
script is needed. She will adopt any tool that lets her see and act for everyone
from one screen, and abandon one that makes her log in as each person.

> *"I'm fetching for my mom and my kids in one trip. Let me manage all of them in
> one place, and don't make me prove every single time that I'm allowed to collect
> Mama's medicine."*

## How to design for them
- **Build a first-class proxy / multi-profile model:** one caregiver account that
  can hold **linked dependents** with **lawful, recorded authority** to order, pay
  and collect on their behalf (consent + audit, POPIA-aligned)
  [[wiki/consumer-context/language-literacy-and-trust]].
- **Consolidate across people and cycles:** align refills so a family's due meds
  can be **prepared together and collected in one event**
  [[wiki/consumer-context/health-seeking-behaviour]].
- **One household view of cost and status** across scheme and cash wallets - a
  family account that echoes stokvel-style pooled planning
  [[wiki/consumer-context/two-economy-affordability]].
- **Proxy-safe collection:** PIN/OTP-based pickup that a named proxy can use
  discreetly at a known point [[wiki/consumer-context/last-mile-addressing-logistics]].
- **WhatsApp-first orchestration:** per-person reminders and "ready" nudges routed
  to the caregiver, in plain language [[wiki/consumer-context/digital-access-and-whatsapp]].

## Grounded in
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/language-literacy-and-trust]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/medical-schemes/pmb-cdl-chronic]]

## See also
- [[design-kit/personas/_personas-index]]
- [[design-kit/personas/elderly-poly-pharmacy]]
- [[design-kit/personas/insured-chronic-multimorbid]]
- [[as-is-prescription-journey]]
- [[jtbd-library]]
