---
type: wiki
title: "Adherence tech & digital therapeutics"
domain: digital-transformation
status: draft
confidence: medium
tags: [domain/digital, topic/adherence, topic/ai, topic/e-prescription, topic/automation]
sources: [src-dig-adherence-tech-evidence, src-dig-ai-clinical-pharmacy, src-dig-cv-pill-triage, src-dig-agentic-ai-governance]
created: "2026-06-13"
updated: "2026-06-17"
---

# Adherence tech & digital therapeutics

**Medication non-adherence** is the leak at the end of the scripting funnel: a
correctly prescribed, correctly dispensed medicine still fails if the patient does
not take it or does not refill. **Adherence technology** (reminder apps, smart
packaging/sensors, electronic monitoring, refill prediction) and **digital
therapeutics** (software-as-treatment) aim to plug that leak. For a chronic-heavy SA
dispensary this is also a **retention and revenue** lever: better adherence means
more on-time refills, fewer gaps, better outcomes. The evidence says these tools
work modestly and conditionally - useful, but no cure-all.

## What the evidence shows

- **Reminder/adherence apps**: meta-analyses find mobile apps are associated with a
  **significant** improvement in medication adherence for chronic disease, with the
  effect appearing **larger** than older electronic reminders (SMS, alarms, pagers)
  and some educational/psychological interventions, but the **GRADE quality of
  evidence is low** and many trials rely on self-reported adherence
  [[src-dig-adherence-tech-evidence]].
- **Electronic adherence monitoring** (e.g. smart pillboxes that log opening and
  send reminders): patients receiving these had **significantly better adherence**
  than those who did not [[src-dig-adherence-tech-evidence]].
- **Drug reminder packaging** (blister/dosette/multi-dose packs): positive effect on
  at least one adherence parameter in **57%** of reviewed studies - solid, low-tech,
  and directly relevant to SA chronic-medication packing
  [[src-dig-adherence-tech-evidence]].
- **AI-assisted adherence support**: described as **promising but the evidence is
  weak**, a caution against over-claiming "AI adherence coaching"
  [[src-dig-adherence-tech-evidence]] [[src-dig-ai-clinical-pharmacy]].

Reminder and monitoring technology reliably **nudges adherence
behaviour**, but effect sizes vary, measurement is often weak (self-report), and
**clinical-outcome** evidence is thinner than adherence-behaviour evidence. Design
for **sustained engagement** rather than novelty: the meta-analytic caveats are mostly
about durability and rigour.

## Smart packaging, sensors and remote monitoring

Smart packaging spans simple **reminder/blister packaging** (proven, cheap) up to
**sensor-enabled** packs and caps that timestamp dose events for remote monitoring.
These feed adherence data back to the pharmacy/care team and can trigger
intervention. They overlap with central-fill multi-dose packing
([[pharmacy-automation-and-robotics]]) and with refill prediction below.

## Refill prediction and proactive refills

The most operationally valuable adherence capability for a dispensary is **refill
prediction**: using dispense history and dosing to forecast when a patient will run
out, then proactively prompting (or pre-assembling) the refill. This pairs AI demand
sensing ([[ai-in-pharmacy]]) [[src-dig-ai-clinical-pharmacy]] with an **agentic
refill flow**: an agent that detects an approaching gap, checks scheme eligibility
and stock, and presents a one-tap confirmation under human/pharmacist oversight
([[telepharmacy-and-omnichannel]]) [[src-dig-agentic-ai-governance]]. This converts
adherence from a passive reminder into a proactive service moment.

## Digital therapeutics (DTx)

**Digital therapeutics** are evidence-based software interventions that treat or
manage a condition (sometimes alongside medication). They sit at the regulated end
of the spectrum: credible DTx require clinical evidence and, in many jurisdictions,
regulatory clearance as software medical devices. For scripting, the near-term role
is **adjacent** (condition-management apps bundled with chronic medication) rather
than core, and any clinical claims need an evidence and regulatory check.

## SA applicability and constraints

- **Low-tech wins first:** reminder/blister packaging is proven, cheap and fits SA
  chronic-medication packing, likely the highest-ROI adherence intervention
  [[src-dig-adherence-tech-evidence]].
- **Channel reality:** SA adherence nudges should ride **SMS/WhatsApp/USSD and
  low-data app** channels, not assume high-data smartphones (cross-link to
  `consumer-context`).
- **POPIA:** adherence/monitoring data is health data, so consent and data-protection
  obligations apply ([[interoperability-identity-records]]).
- **DTx regulation:** SAHPRA classification of software-as-medical-device DTx in SA
  is uncertain, so verify before any therapeutic claim.

## Design implications

- **Lead with proven, cheap interventions** (reminder/blister packaging and simple
  app/WhatsApp reminders) before sensor/DTx complexity.
- **Build refill prediction into the core service:** proactive, pre-assembled
  refills under pharmacist oversight, as an agentic flow with one-tap confirm.
- **Ride SA-appropriate channels** (WhatsApp/SMS/USSD/low-data) for reminders.
- **Design for sustained engagement**, since evidence shows effect but uncertain
  durability, so avoid one-off novelty features.
- **Don't over-claim AI adherence coaching:** evidence is weak, so frame it as
  supportive. Gate any DTx therapeutic claim on evidence + SAHPRA status.

## Open questions

- ⚠️ UNVERIFIED: SAHPRA's regulatory stance on digital therapeutics / software-as-
  medical-device in SA, and what clearance a therapeutic-claim DTx needs.
  🔮 may require-reform/clarification.
- ⚠️ Which adherence channel performs best in SA (WhatsApp vs SMS vs app vs USSD)
  for chronic patients? (Consumer-research gap - cross-link to `consumer-context`.)
- ⚠️ UNVERIFIED: Do adherence/monitoring tools improve **clinical outcomes** (not
  just measured adherence) durably at scale? Evidence is thinner and GRADE-low
  [[src-dig-adherence-tech-evidence]].
- ⚠️ Under POPIA, what consent supports ongoing adherence monitoring and proactive
  refill outreach?

## See also

- [[ai-in-pharmacy]]
- [[telepharmacy-and-omnichannel]]
- [[pharmacy-automation-and-robotics]]
- [[e-prescribing-systems-and-standards]]
- [[interoperability-identity-records]]
- [[wiki/digital-transformation/_index]]
