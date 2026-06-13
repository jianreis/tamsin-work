---
type: wiki
title: "Pharmacy UX patterns for the scripting journey"
domain: ux-service-design
status: draft
confidence: medium
tags: [domain/ux, journey/submit, journey/validate, journey/refill, journey/collect, journey/deliver, topic/trust-safety, topic/accessibility]
sources: [src-ux-pharmacy-app-patterns, src-ux-nng-error-messages, src-ux-east-behavioural-insights, src-ux-implementation-intentions-gollwitzer, src-ux-ahrq-health-literacy-teachback, src-ux-sludge-thaler-sunstein, src-ux-momconnect-ussd-whatsapp, src-ux-wcag-older-users-accessibility, src-ux-text-reminder-adherence-meta, src-ux-jtbd-christensen-ulwick]
created: "2026-06-13"
updated: "2026-06-13"
---

# Pharmacy UX patterns for the scripting journey

Concrete, reusable interaction patterns for the scripting journey — the building
blocks an agent assembles into a future-state [[journey-mapping-method|journey]]
and [[service-blueprinting-method|blueprint]]. They apply the method
([[jtbd-and-behavioural-design]]), trust-safety
([[healthcare-service-design-patterns]]), and SA constraints
([[inclusive-low-bandwidth-design]]) to specific moments. Established pharmacy
apps (Walgreens/CVS et al.) set baseline expectations consumers already carry
[[src-ux-pharmacy-app-patterns]]; the SA design must meet or beat them within
local realities (data cost, scheme claims, scheduling law) — treat the precedent
as Tier-C pattern, not proof.

Every pattern below should work on the **lowest suitable channel** (WhatsApp /
USSD / SMS), default to **low-data and resumable**, and meet **WCAG AA**
[[src-ux-momconnect-ussd-whatsapp]] [[src-ux-wcag-older-users-accessibility]].

## 1. Rx capture (photo / scan / e-token)

How a script enters the system.
- **Photo capture** — take/upload a photo of the paper script (WhatsApp-native);
  guide framing, auto-detect legibility, and let the user retake. Most inclusive
  for the paper-script reality.
- **Barcode / Rx-number scan** — for refills, scan the bottle/box barcode or enter
  the Rx number — the established fast path [[src-ux-pharmacy-app-patterns]].
- **e-Token / e-prescription** — accept a digital prescription token/reference
  (future-state; flag `🔮 requires-reform` pending SA e-Rx readiness — see
  [[wiki/sa-regulatory/_index]] / [[wiki/digital-transformation/_index]]).
- **Patterns:** confirm what was read back to the user in plain language ("I see
  Amlodipine 5mg — correct?"); never silently accept an unreadable image; allow
  resume if the connection drops mid-upload.

## 2. Identity & consent

- **Lightweight, progressive identity** — ask only what the step needs; reuse the
  WhatsApp/phone number as a stable identifier; avoid forcing re-disclosure of a
  sensitive condition repeatedly [[src-ux-ahrq-health-literacy-teachback]].
- **Explicit, revocable consent** — plain-language statement of *what/why/how
  long/who*; **no pre-ticked boxes or dark patterns**
  [[src-ux-sludge-thaler-sunstein]]; anchor to
  [[healthcare-service-design-patterns|POPIA-grade consent]].
- **Proxy / dependant flows** — let one account manage a family member's or
  child's scripts with appropriate consent [[src-ux-pharmacy-app-patterns]] — a
  core part of the JTBD social dimension [[src-ux-jtbd-christensen-ulwick]].

## 3. Refill & auto-refill

- **One-tap refill** — for a known chronic script, refill in a single confirmed
  action; pre-fill everything known (item, quantity, last fulfilment, channel)
  [[src-ux-pharmacy-app-patterns]] [[src-ux-east-behavioural-insights]].
- **Auto-refill as a default (opt-out)** — enrol chronic scripts in scheduled
  refills timed to supply; defaults are one of the strongest uptake levers
  [[src-ux-east-behavioural-insights]]. Keep it **honest and easy to cancel**
  (the opposite of sludge) [[src-ux-sludge-thaler-sunstein]], and respect consent
  limits ([[healthcare-service-design-patterns]]).
- **Pickup vs delivery choice** at refill [[src-ux-pharmacy-app-patterns]].
- **Implementation-intention prompt at enrolment** — "When/where will you take
  this dose?" to lock in the habit cue [[src-ux-implementation-intentions-gollwitzer]].

## 4. Funding & price transparency

- **Show cover and co-pay *before* commit** — funded amount, co-payment, and any
  cheaper generic, up front; price surprise at the till is a top trust-breaker
  [[src-ux-pharmacy-app-patterns]] ([[healthcare-service-design-patterns]]).
- **Scheme claim happens backstage** — surface a simple status; never expose raw
  switch errors to the patient (translate them — see error patterns). Ground the
  claim mechanics in [[wiki/medical-schemes/_index]].

## 5. Order status & tracking

- **Proactive, discreet status** — confirm receipt, then notify at *received →
  pharmacist-checked → ready/dispatched → delivered*, closing the silent
  backstage gap that drives anxiety (see [[service-blueprinting-method]] worked
  example) [[src-ux-pharmacy-app-patterns]].
- **Discreet wording** — "Your order is ready," not the condition/medicine name,
  for privacy on shared/lock screens ([[healthcare-service-design-patterns]]).
- **Channel-appropriate** — push for app users, **SMS for everyone** as the
  universal fallback [[src-ux-momconnect-ussd-whatsapp]].

## 6. Reminders & adherence nudges

- **Personalised, two-way, sustained reminders** — evidence shows texting ~doubles
  adherence odds; effects are larger when personalised, two-way, and >6 months
  [[src-ux-text-reminder-adherence-meta]]. Use the person's name and *their* med.
- **Timely** — fire a few days before supply runs out (and payday-aware where
  relevant) [[src-ux-east-behavioural-insights]].
- **No shame mechanics** — no streaks/guilt; supportive, dignified tone
  ([[healthcare-service-design-patterns]]).
- **Refill-when-low** — connect the reminder directly to the one-tap refill so the
  prompt and the action are one easy step [[src-ux-east-behavioural-insights]].

## 7. Graceful error states (the trust make-or-break)

Apply the rules every time: **plain language, no codes; explain the problem and
the way forward; blame the system, not the user; never a dead end; always a route
to a human (pharmacist)** [[src-ux-nng-error-messages]]
([[healthcare-service-design-patterns]]). Patterns for the high-stakes failures:

| Failure | Don't say | Do (pattern) |
|---|---|---|
| **Claim rejected** (scheme) | "Error: claim 403 declined" | "Your medical aid didn't cover this yet. It may need authorisation, or your benefit may be exhausted. You can: pay R___ now, ask us to query your scheme, or talk to a pharmacist." Offer **self-pay**, **query**, and **human** routes. Translate the backstage switch code; never expose it [[src-ux-nng-error-messages]]. Ground rejection causes in [[wiki/medical-schemes/_index]]. |
| **Out of stock** | "Item unavailable" | "We're out of [med] at [store]. We can: deliver it from another branch by [date], suggest an equivalent your doctor allows, or notify you when it's back." Offer alternatives + ETA, not a dead stop [[src-ux-pharmacy-app-patterns]]. |
| **Script invalid / expired** | "Invalid prescription" | "This script can't be filled because it's expired / unreadable / out of repeats. Here's what to do: [retake photo / get a new script / book a renewal]." Be specific about *why* and the next step; flag scheduling/validity rules (regulatory) without jargon. |
| **Delivery failed** | "Delivery exception" | "We couldn't deliver to [address] today. We can: retry tomorrow, hold at [store] for collection, or update your address/instructions." Keep the medicine safe and the next action obvious; SMS the options for low-data users. |
| **Connection dropped mid-flow** | (silent loss) | Resume the half-finished refill; confirm whether the order went through; ensure **idempotency** so it isn't duplicated [[src-ux-momconnect-ussd-whatsapp]]. |

**Prevent** where possible: validate the script image at capture, check stock and
cover *before* the user commits, and confirm risky/irreversible actions
[[src-ux-nng-error-messages]].

## 8. Dosing & safety information

- **Plain-language dosing** with **pictograms** (sun/moon, with/without food) and
  **teach-back / Ask Me 3** for critical meds — *what it's for, what to do, why it
  matters* [[src-ux-ahrq-health-literacy-teachback]].
- **Multilingual** clinical content, comprehension-checked, in the user's language
  ([[inclusive-low-bandwidth-design]]).

## How to apply
- Assemble these patterns into the **to-be journey** and place each in the
  [[service-blueprinting-method|blueprint]] (which lane, which channel, which
  KPI). Keep the **happy path one-tap** and design **every error state** above as
  a first-class screen, not an afterthought.
- Default chronic scripts to **auto-refill + personalised two-way reminders
  (opt-out, easy cancel)** with an **implementation-intention prompt** at
  enrolment [[src-ux-east-behavioural-insights]]
  [[src-ux-implementation-intentions-gollwitzer]]
  [[src-ux-text-reminder-adherence-meta]].
- **Show price/cover before commit**; translate every backstage/scheme error into
  a plain-language, action-bearing message with a **human fallback**
  [[src-ux-nng-error-messages]].
- Make every pattern **low-data, resumable, idempotent, WCAG-AA, multilingual**,
  and runnable on **WhatsApp/USSD/SMS** [[src-ux-momconnect-ussd-whatsapp]]
  [[src-ux-wcag-older-users-accessibility]] ([[inclusive-low-bandwidth-design]]).
- **Audit for sludge** — strip friction from refill/collect; reserve it for
  high-risk actions only [[src-ux-sludge-thaler-sunstein]].

## Open questions
- SA **e-prescription / e-token** readiness and legal status for digital Rx
  capture — see [[wiki/sa-regulatory/_index]] / [[wiki/digital-transformation/_index]];
  mark `🔮 requires-reform` until confirmed.
- Real distribution of claim-rejection reasons (for the rejection-state copy) —
  see [[wiki/medical-schemes/_index]]; log to [[meta/punchlist]].
- Which dosing counselling may be delivered digitally vs pharmacist-only (SAPC) —
  see [[wiki/dispensing-practice/_index]].

## See also
- [[journey-mapping-method]] · [[service-blueprinting-method]] ·
  [[jtbd-and-behavioural-design]] · [[healthcare-service-design-patterns]] ·
  [[inclusive-low-bandwidth-design]]
</content>
