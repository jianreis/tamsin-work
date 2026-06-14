---
type: wiki
title: "Channel ladder"
domain: concept
status: draft
confidence: high
tags: [concept, topic/accessibility, domain/consumer, domain/ux, journey/submit, region/za]
created: "2026-06-13"
updated: "2026-06-13"
---

# Channel ladder

The **channel ladder** is the principle that the service must work across a
spectrum of access levels — and that the design starts from the *bottom* of the
ladder, not the top. Ordered roughly from most to least universally reachable:

**WhatsApp → USSD → SMS → smartphone app → assisted / human (in-store, call, agent).**

Each rung reaches a different slice of South Africa. WhatsApp is the de-facto
default channel and often zero-rated; USSD and SMS reach feature phones, very low
data, and the airtime-constrained; the app is an *enhancement* for the connected
minority; and an assisted/human rung must always exist for those the digital rungs
fail. The cardinal rule is **never app-only** — an app-gated medicine service
excludes the majority it most needs to serve.

Designing for the ladder forces three properties on every flow:

- **Data-frugal** — minimal payloads, no heavy assets, works on expensive prepaid
  data and zero-rated where possible.
- **Resumable** — a dropped session (lost signal, dead airtime, load-shedding)
  picks up where it left off, not from zero.
- **Offline-tolerant** — degrade gracefully when the network or power is down,
  with queued actions and clear status when connectivity returns.

The ladder is the access counterpart to [[wiki/concepts/omnichannel-fulfilment|omnichannel
fulfilment]] (how the medicine reaches you) and the precondition for serving the
two-economy reality without making the cash-pay majority a degraded afterthought.

## In this vault
- [[wiki/consumer-context/digital-access-and-whatsapp|Digital access & WhatsApp]] — coverage vs affordability, prepaid, zero-rating, USSD, literacy gradients.
- [[wiki/ux-service-design/inclusive-low-bandwidth-design|Inclusive & low-bandwidth design]] — the USSD/WhatsApp/SMS channel ladder, multilingual, intermittent-connectivity resilience.

## Design stance
Design the lowest rung first and treat the app as the enhancement, never the gate.
Every flow must be data-frugal, resumable, and offline-tolerant, with a human rung
always available. If a journey only works on the app, it is not designed for South
Africa — see [[wiki/concepts/graceful-failure|graceful failure]] for the offline path.
