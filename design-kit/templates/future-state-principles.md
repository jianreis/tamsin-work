---
type: template
title: "Future-state design principles — SA pharmacy scripting"
status: draft
tags: [design-kit, template, domain/ux, domain/consumer]
created: "2026-06-13"
updated: "2026-06-13"
---

# Future-state design principles — SA pharmacy scripting

The design constitution for the future-state experience. Every blueprint,
journey and concept should be checkable against these. **Draft** — the synthesis
pass will attach evidence (`[[src-…]]`, wiki links) to each principle and may add
or sharpen them once the research domains land.

> Tagline: **Futuristic, but legal and operable.** Ambition constrained by SA
> reality and pharmacy law — not science fiction.

## 1. Meet people on the channel they already have
WhatsApp- and USSD-capable first; app as an enhancement, never a gate. Assume
expensive data, prepaid airtime, feature phones, and intermittent connectivity.
(grounds: [[wiki/consumer-context/digital-access-and-whatsapp]])

## 2. Design for the two South Africas at once
Insured and cash-pay are different journeys sharing one spine. Never let the
cash-pay / uninsured majority feel like a degraded afterthought.
(grounds: [[wiki/consumer-context/two-economy-affordability]], [[wiki/medical-schemes/cash-uninsured-pathway]])

## 3. Make money legible, early, always
Show price before commitment (SEP + dispensing fee), apply scheme benefits
automatically, surface co-pays *before* the till, and never spring a cost shock.
(grounds: [[wiki/sa-regulatory/sep-dispensing-fee]], [[wiki/medical-schemes/realtime-claims-switching]])

## 4. The pharmacist is the trust anchor — keep them visible
Automation handles the bookkeeping; the pharmacist's clinical judgement and human
contact remain front-and-centre and easy to reach. Never hide the human.
(grounds: [[wiki/dispensing-practice/clinical-checks-and-mtm]])

## 5. Never leave the customer guessing
Real-time, honest status at every step (received → validated → funded → ready →
on the way). Treat the silent wait and the unexplained rejection as primary pains.

## 6. Safety and legality are invisible, not absent
Valid-prescription checks, scheduling rules, clinical review and POPIA consent
happen reliably behind the line of visibility — felt as reassurance, not friction.
(grounds: [[wiki/sa-regulatory/_index]])

## 7. Chronic care should run itself
Default to proactive, predictive repeats with run-out alerts and
adherence-friendly packaging; the best refill is the one the customer didn't have
to think about. (grounds: [[wiki/dispensing-practice/adherence-packaging]], [[wiki/medical-schemes/courier-chronic-pharmacy-models]])

## 8. Fulfilment must fit SA's last mile
Offer collection, pickup-points/lockers, and delivery — and design for places
without street addresses, for load-shedding, and for cold-chain integrity.
(grounds: [[wiki/consumer-context/last-mile-addressing-logistics]])

## 9. Dignity, privacy and language by default
Respectful, stigma-aware handling of sensitive medicines; clear communication in
the customer's language; consent that's understood, not just collected.
(grounds: [[wiki/consumer-context/language-literacy-and-trust]])

## 10. Borrow proven patterns, not foreign assumptions
Adopt mechanisms that work (e-script tokens/QR, nominated pharmacy, auto-refill,
teleconsult→Rx→delivery loops) without importing US-insurance or high-address
assumptions. (grounds: [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]])

## 11. Caregivers and proxies are first-class users
Many South Africans collect/manage meds for others. Support multi-profile,
delegated authority, and proxy collection explicitly and safely.

## 12. Design for graceful failure
Out-of-stock, claim rejected, script invalid, delivery failed, power out — these
*will* happen. The experience is judged on how well it recovers, with a clear
human fallback. (grounds: [[wiki/ux-service-design/pharmacy-ux-patterns]])

## 13. Reduce the journey, don't just digitise it
Prefer eliminating steps (re-script visits, re-keying, repeat trips) over making
existing steps prettier. Measure success in friction removed and outcomes
improved, not features shipped.

## Using these principles
- **Generate:** start any concept from the jobs ([[jtbd-library]]) and pressure-test it against all 13.
- **Critique:** score a blueprint/journey 0–2 per principle; lowest scores are the redesign priorities.
- **Flag:** anything that violates a non-negotiable (1–6, 9) is a blocker; anything
  needing rule change is `🔮 requires-reform` (route to [[meta/punchlist]]).
