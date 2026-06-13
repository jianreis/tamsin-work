---
type: wiki
title: "Service blueprinting — the method"
domain: ux-service-design
status: draft
confidence: high
tags: [domain/ux, journey/submit, journey/dispense, journey/deliver, topic/trust-safety, topic/accessibility]
sources: [src-ux-nng-service-blueprints, src-ux-tisdd-stickdorn, src-ux-nhs-govuk-design-principles, src-ux-com-b-behaviour-change-wheel, src-ux-sludge-thaler-sunstein]
created: "2026-06-13"
updated: "2026-06-13"
---

# Service blueprinting — the method

A **service blueprint** is a diagram that visualises the relationships between
the components of a service — **people, props (physical/digital evidence), and
processes** — tied to the touchpoints of **one specific customer journey**
[[src-ux-nng-service-blueprints]]. Where a [[journey-mapping-method|journey map]]
shows the *customer's* experience, a blueprint extends **below the line of
visibility** to expose the frontstage, backstage, and support work that
*delivers* that experience — making hand-offs, silos, and failure points visible
[[src-ux-nng-service-blueprints]]. A blueprint is normally the **next step after
a journey map** [[src-ux-tisdd-stickdorn]].

Use a blueprint when a service is **omnichannel, complex, or cross-departmental**
— exactly the SA scripting case, which spans patient, app/WhatsApp, pharmacist,
dispensary system, medical-scheme claim switch, courier, and regulator
[[src-ux-nng-service-blueprints]]. This page is the authoritative method the
vault's blueprint template should cite (see [[CLAUDE|schema §8]]).

## The layered anatomy (swim lanes)

A blueprint is a grid: **columns = the chronological steps/phases** of the
customer journey (reuse the stages from the journey map); **rows = lanes**,
stacked top to bottom and separated by three "lines"
[[src-ux-nng-service-blueprints]] [[src-ux-tisdd-stickdorn]].

Top-to-bottom, the core lanes are:

1. **Physical / digital evidence** — the props and places anyone in the blueprint
   touches at each step: the WhatsApp message, the app screen, the SMS, the
   medicine box and label, the collection counter, the courier's proof-of-delivery.
   Sits across the top; can relate to both frontstage and backstage
   [[src-ux-nng-service-blueprints]].
2. **Customer actions** — what the customer does, step by step (photograph the
   script, confirm details, pay co-pay, collect/receive). These **anchor the
   columns**; build the blueprint around them first [[src-ux-nng-service-blueprints]].
   --- *line of interaction* ---
3. **Frontstage / onstage actions** — visible contact actions by people *and*
   technology that the customer directly interacts with (pharmacist greeting, the
   app's "script received" confirmation, the chatbot reply).
   --- *line of visibility* ---
4. **Backstage actions** — actions the customer does **not** see: pharmacist
   clinically checks the script, dispensary labels and packs, stock is picked,
   the claim is built.
   --- *line of internal interaction* ---
5. **Support processes** — internal systems, teams, and **partners** that enable
   the contact staff but never touch the customer: the dispensary management
   system, the medical-scheme **claims switch**, NAPPI/formulary lookups, the
   courier integration, IT, regulatory compliance [[src-ux-nng-service-blueprints]].

### The three lines (memorise these)
- **Line of interaction** — every crossing is a **touchpoint** (a direct
  customer↔organisation interaction).
- **Line of visibility** — separates what the customer **sees** (frontstage,
  above) from what they don't (backstage, below). The single most useful line:
  everything below it is the hidden machinery a journey map can't show.
- **Line of internal interaction** — separates customer-facing staff from the
  support processes/partners behind them [[src-ux-nng-service-blueprints]].

## Additional lanes (add per goal)

A bare blueprint shows mechanics; the value lanes show *why it matters and where
to act*. Add only the lanes your decision needs [[src-ux-nng-service-blueprints]]:

- **Time / duration** — elapsed time per step; exposes waits (e.g. claim
  adjudication latency, dispensing queue, courier window).
- **Emotion** — the customer's emotional state per step (carry the curve over
  from the journey map); aligns operational failure points with felt pain.
- **Pain points** — where the service breaks or frustrates (claim rejection,
  out-of-stock, "your script is invalid").
- **Opportunities** — design ideas to fix the pain at that step.
- **Metrics / KPIs** — measurable targets per step (first-time-right dispense
  rate, % auto-refill, time-to-ready, claim rejection rate).
- **Regulations / policy** — the non-negotiable rules touching that step
  (scheduling law, valid-prescription rules, pharmacist oversight, POPIA) — vital
  for the SA scripting blueprint; flag reform-dependent steps `🔮 requires-reform`
  per [[CLAUDE|schema §8]].
- **Channel / system of record** — which channel (WhatsApp/app/USSD/in-store) and
  which back-end owns the step.

## How to build one (step by step)

Adapted from NN/g's 5 steps [[src-ux-nng-service-blueprints]] and the TiSDD
practice [[src-ux-tisdd-stickdorn]]:

1. **Choose the scenario.** One persona, one journey, one zoom level. State it
   explicitly: e.g. "Thandi refills her chronic hypertension script via WhatsApp
   for courier delivery, scheme-funded." Decide **high-level** (strategic) vs
   **detailed** (operational) — match the decision being made.
2. **Lay down customer actions** as the column spine, in chronological order.
   Reuse the journey-map stages so the two artefacts stay aligned.
3. **Add frontstage actions** above the line of interaction (people *and* tech),
   then **backstage actions**, then **support processes**, mapping the real work
   behind each customer step. Interview the people who do the work; don't guess.
4. **Draw the three lines and the evidence lane.** Add arrows showing
   dependencies and hand-offs across lanes (this is where failure points surface).
5. **Layer the value lanes** (emotion, pain, time, metrics, regulation) for the
   decision at hand.
6. **Identify fail points and "moments of truth," then redesign.** Mark every
   hand-off and dependency that can break; propose the to-be blueprint.
7. **Validate and keep it living.** Blueprints decay; treat them as owned,
   evidence-updated artefacts, not one-off deliverables [[src-ux-tisdd-stickdorn]].

## Common mistakes

- **Skipping research** — blueprinting from assumptions about backstage work.
  Verify backstage/support steps with the staff who perform them.
- **Wrong zoom** — mixing strategic and operational detail in one diagram. Pick a
  level [[src-ux-nng-service-blueprints]].
- **No clear scenario / persona** — a blueprint that tries to cover every variant
  shows nothing clearly. One journey per blueprint.
- **Treating it as a flowchart** — omitting the customer-emotion and evidence
  lanes loses the "why." A blueprint without the line of visibility is just a
  process map.
- **Ignoring partners** — leaving the medical-scheme claims switch or courier out
  of support processes hides the most common SA failure points.
- **Designing in sludge** — adding steps that benefit the org, not the patient;
  audit every customer action for removable friction [[src-ux-sludge-thaler-sunstein]].
- **Not closing the loop to metrics** — fail points with no KPI never get fixed.

## Worked health example (scripting, abbreviated)

Scenario: *Chronic refill via WhatsApp, courier delivery, scheme-funded.*

| Step | 1. Request refill | 2. Confirm & consent | 3. Pay co-pay | 4. Dispense | 5. Deliver |
|---|---|---|---|---|---|
| **Evidence** | WhatsApp thread, saved script | Consent text, item list | Payment link/receipt | Labelled meds, info leaflet | Parcel, POD SMS |
| **Customer action** | "Refill my BP meds" | Confirms items + ID | Pays co-payment | (waits) | Receives, signs |
| *— interaction —* | | | | | |
| **Frontstage** | Chatbot ack + ETA | Pharmacist confirms via chat | Payment confirmation | "Ready/dispatched" msg | Courier hand-off msg |
| *— visibility —* | | | | | |
| **Backstage** | Pull patient profile | **Pharmacist clinical check** | — | Pick, label, pack, check | Pack handed to courier |
| *— internal interaction —* | | | | | |
| **Support** | Dispensary system, last-script lookup | NAPPI/formulary, **scheme claim switch** | Payment gateway | Stock/inventory system | Courier integration, tracking |
| **Emotion** | hopeful | reassured (or anxious if delay) | mild friction | uncertain (silence) | relieved |
| **Pain / KPI** | — / response < 2 min | claim reject? / first-time-right | co-pay surprise / clear price | out-of-stock / fill rate | failed delivery / on-time % |
| **Regulation** | POPIA consent | valid-Rx rule, pharmacist oversight | scheme rules | scheduling law, labelling | — |

The silent gap at step 4 (customer sees nothing while backstage works) and the
scheme-claim dependency at steps 2–3 are the **moments of truth** — exactly what
a journey map alone would miss. Pain points such as claim rejection and
out-of-stock are designed for in [[pharmacy-ux-patterns]].

## How to apply

- For any scripting blueprint, **start from the journey map**, reuse its stages
  as columns, then drive *downward* through frontstage → backstage → support.
- Always populate the **support-process lane with SA-specific partners**: the
  medical-scheme **claims switch**, NAPPI/formulary, courier, and regulatory
  compliance — these own most failure points (ground them in
  [[wiki/medical-schemes/_index|medical-schemes]] and [[wiki/sa-regulatory/_index|regulatory]]).
- Add the **regulation lane** and flag anything needing reform `🔮 requires-reform`
  [[src-ux-nhs-govuk-design-principles]] [[CLAUDE|schema §8]].
- Tie each fail point to a **metric** and a **redesign opportunity**; audit every
  customer action for **removable sludge** [[src-ux-sludge-thaler-sunstein]].
- Verify backstage/support steps against the people who do them and against
  [[wiki/dispensing-practice/_index|dispensing practice]].

## Open questions
- Exact latency of the SA medical-scheme **claims switch** during dispensing (for
  the time lane) — see [[wiki/medical-schemes/_index]].
- Which backstage steps are legally **pharmacist-only** vs delegable — affects the
  line of internal interaction.

## See also
- [[journey-mapping-method]] · [[pharmacy-ux-patterns]] ·
  [[healthcare-service-design-patterns]] · [[jtbd-and-behavioural-design]] ·
  [[inclusive-low-bandwidth-design]]
- [[CLAUDE|Vault schema §8 — how to build blueprints]]
</content>
