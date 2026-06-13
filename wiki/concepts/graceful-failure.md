---
type: wiki
title: "Graceful failure"
domain: concept
status: draft
confidence: high
tags: [concept, domain/ux, topic/trust-safety, journey/validate, journey/pay, journey/deliver, region/za]
created: "2026-06-13"
updated: "2026-06-13"
---

# Graceful failure

**Graceful failure** is the discipline of designing the *unhappy paths* as
first-class experiences, on the premise that in SA pharmacy they are not edge
cases — they are routine. The experience is judged not on the happy path but on
how well it recovers when something breaks. The recurring failures to design for:

- **Claim rejected** — scheme adjudication declines (formulary, exhausted benefit,
  PMB dispute). The patient needs the *reason* and a path, not a dead end.
- **Out-of-stock** — the item isn't at this node. Offer substitution, another
  node, or a held order — never a silent gap.
- **Invalid / expired script** — schedule rules, missing repeat, lapsed validity.
  Route to a safe, fast renewal rather than refusal.
- **Delivery failed** — wrong/absent address, missed handover, cold-chain risk.
  Re-attempt, divert to pickup, or fall back to collection.
- **Power out / offline** — load-shedding kills the till, the network, the fridge.
  The flow must be resumable and offline-tolerant.

The common thread: an unexplained failure is the trust-killer; an explained
failure with a clear next step and a visible human fallback can actually *build*
trust. Failure handling is where the [[wiki/concepts/moment-of-truth|moments of truth]]
are won or lost.

## In this vault
- [[wiki/ux-service-design/pharmacy-ux-patterns|Pharmacy UX patterns]] — concrete error states (rejected, out-of-stock, invalid, delivery failed).
- [[wiki/medical-schemes/realtime-claims-switching|Real-time claims switching]] — how and why adjudication rejects, and what the patient sees.
- [[wiki/consumer-context/last-mile-addressing-logistics|Last-mile & load-shedding]] — delivery failure, addressing gaps, power resilience.

## Design stance
Design the worst path first. Every failure must give a plain-language reason, a
clear next step, and an easy route to a human. Make flows resumable and offline-
tolerant for load-shedding. Score blueprints on their unhappy paths — a service
that only works when everything works is not designed for South Africa.
