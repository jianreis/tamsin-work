---
type: source
title: "Pharmacy app UX patterns: Rx capture, refill, auto-refill, status tracking (Walgreens/CVS et al.)"
url: "https://www.walgreens.com/topic/pharmacy.jsp"
author: "Walgreens; CVS; established US pharmacy apps (pattern survey)"
publisher: "Walgreens / CVS (official product pages)"
published: "2025-01-01"
retrieved: "2026-06-13"
source_kind: company
reliability: C
tags: [domain/ux, journey/refill, journey/submit, region/global]
---

# Summary

Survey of established consumer-pharmacy app patterns (Walgreens, CVS, and
comparable apps) for the core scripting interactions: **adding a prescription
(scan/photo/Rx number), refilling, auto-refill, pickup-vs-delivery choice,
order-status tracking, and ready-for-collection notifications**, plus managing
**family members' / dependents'** scripts and seeing **price before** filling.
Used as concrete interaction precedent (treated as Tier-C precedent, not proof of
effectiveness).

# Key claims
- **Rx capture / add a prescription:** users add a script by **scanning the label
  barcode** or **entering the Rx number**; "scan the bottle" is a core
  convenience pattern.
- **Refill:** scan the bottle barcode *or* enter the Rx number, choose
  **pickup or delivery**, and submit with a single action.
- **Auto-refill:** users can enrol selected chronic prescriptions in **automatic
  refills** (a beneficial default/subscription), and check refill status.
- **Order status & notifications:** **push notifications** alert when a
  prescription is **ready**; users can track status through the app.
- **Family / dependents:** manage prescriptions for **family members (and pets)**
  from a single account — a profile/proxy pattern.
- **Price transparency:** ability to **see the cost ahead of time** before
  committing to fill.
- These are de-facto baseline expectations consumers carry into any modern
  pharmacy experience; the SA design must meet or beat them within local
  constraints (data cost, scheme claims, scheduling law).

# Verbatim excerpts
> "Scan the medication's barcode or enter the medication's Rx number, select
> pickup or delivery and push a button to send a message to the pharmacy."

> "Apps allow users to check on the status of refills and apply Auto Refill to
> certain prescriptions."

# Used in
- [[wiki/ux-service-design/pharmacy-ux-patterns]]
- [[wiki/ux-service-design/jtbd-and-behavioural-design]]
