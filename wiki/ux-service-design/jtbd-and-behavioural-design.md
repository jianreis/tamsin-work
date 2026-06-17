---
type: wiki
title: "JTBD & behavioural design for medication uptake and adherence"
domain: ux-service-design
status: draft
confidence: high
tags: [domain/ux, journey/adhere, journey/refill, topic/adherence, topic/chronic, topic/trust-safety]
sources: [src-ux-jtbd-christensen-ulwick, src-ux-com-b-behaviour-change-wheel, src-ux-east-behavioural-insights, src-ux-implementation-intentions-gollwitzer, src-ux-text-reminder-adherence-meta, src-ux-sludge-thaler-sunstein]
created: "2026-06-13"
updated: "2026-06-17"
---

# JTBD & behavioural design for medication uptake and adherence

Two lenses sit *underneath* the [[journey-mapping-method|journey]] and
[[service-blueprinting-method|blueprint]]: **Jobs To Be Done** (what progress is
the person really trying to make?) and **behavioural science** (why don't they
follow through, and what design reliably moves them?). Together they turn an
emotional low on a journey map into a specific, evidence-based design move.

## Jobs To Be Done (JTBD): frame the real job

People don't want a prescription; they "hire" the pharmacy to make **progress in
their circumstances** [[src-ux-jtbd-christensen-ulwick]]. Christensen's milkshake
study showed the *job*, not the demographic, explains behaviour: commuters hired
a milkshake to make a long, boring drive bearable [[src-ux-jtbd-christensen-ulwick]].

For chronic medication, the core job is something like:

> **"Keep my condition controlled with as little disruption to my life as
> possible, without running out, overpaying, or having to think about it."**

This job is **stable and solution-agnostic**: it stays true whether the meds
come by app, WhatsApp, or counter [[src-ux-jtbd-christensen-ulwick]]. A good job
statement carries three dimensions:
- **Functional**: never run out; correct meds; lowest hassle/cost.
- **Emotional**: feel in control, not anxious; not judged or exposed.
- **Social**: manage a parent's/child's meds; not seen as "sick" or poor.

Ulwick's **Outcome-Driven Innovation** sharpens this: decompose the job into
**desired outcomes**, each rated on **importance × current satisfaction**;
high-importance/low-satisfaction outcomes are the biggest opportunities
[[src-ux-jtbd-christensen-ulwick]]. Example outcomes for the refill job:
*minimise the chance of running out; minimise time to confirm cover; minimise
trips; minimise surprise at the till.* Evaluate every touchpoint by whether it
advances an outcome, not by whether it adds a feature.

## Behavioural design: diagnose, then nudge

Most "motivation problems" aren't. **Diagnose first** with **COM-B**, then choose
a tactic with **EAST**. Designing a nudge before diagnosing the barrier is the
classic failure.

### COM-B: the diagnostic (Capability, Opportunity, Motivation → Behaviour)
A behaviour happens only when **Capability + Opportunity + Motivation** are all
sufficient [[src-ux-com-b-behaviour-change-wheel]]:
- **Capability**: *psychological* (understand the regimen, remember it) and
  *physical* (open packaging, use an app/USSD menu).
- **Opportunity**: *physical* (cost, stock, access, distance, data) and *social*
  (norms, family support, stigma).
- **Motivation**: *reflective* (beliefs, intentions, "I should") and *automatic*
  (habits, emotions, forgetting).

Non-adherence in SA is frequently a **capability** problem (forgot; didn't
understand) or an **opportunity** problem (co-pay, out-of-stock, no data, far
from store), *not* a motivation deficit [[src-ux-com-b-behaviour-change-wheel]].
The design must match the diagnosed cause:

| Diagnosed barrier (COM-B) | Design move |
|---|---|
| Automatic motivation / forgetting | Reminders + **auto-refill default** + planning prompts |
| Psychological capability (regimen) | Plain-language dosing, teach-back, pictograms ([[healthcare-service-design-patterns]]) |
| Physical opportunity (cost) | Up-front price, co-pay clarity, cheaper-generic prompt |
| Physical opportunity (access/stock) | Delivery, stock-aware ordering, alternative-store routing |
| Social opportunity | Proxy ordering for family; normalise via social proof |

### EAST: the practical checklist
To get the behaviour, make it **Easy, Attractive, Social, Timely**
[[src-ux-east-behavioural-insights]]:

- **Easy**: use **defaults** (opt-out auto-refill for chronic scripts);
  cut the **hassle factor** (pre-fill known data; "refill in one tap"); **simplify
  the message** to one clear action. Effort is the biggest silent killer of
  uptake.
- **Attractive**: make it salient and personal (use the person's name and *their*
  medicine; clear, friendly confirmations); frame benefit, not jargon.
- **Social**: surface honest **social norms** ("most members refill before they
  run out"); enable **commitments** and proxy support from family.
- **Timely**: prompt **at the receptive moment** (a few days before supply runs
  out, payday-aware timing), and help people form **implementation intentions**,
  "if-then" plans for *when/where* they'll take or collect the medicine.

### Defaults, friction, sludge
- **Defaults** are among the strongest levers: pre-selecting a beneficial option
  (auto-refill, generic substitution where clinically fine, reminders on)
  raises uptake markedly [[src-ux-east-behavioural-insights]].
- **Friction is directional:** *remove* it from beneficial actions (refill,
  enrol, collect); a *little* friction is appropriate before irreversible or
  high-risk actions (changing a chronic dose).
- **Sludge** = friction with bad intent (hard-to-cancel, buried opt-outs, repeated
  re-entry). Audit every customer action and strip it; never use dark patterns,
  which in health is also an ethics/trust failure [[src-ux-sludge-thaler-sunstein]]
  ([[healthcare-service-design-patterns]]).

### Reminders & commitment: the evidence
SMS/text reminders **reliably improve chronic-medication adherence**: a pooled
meta-analysis found texting **~doubled the odds of adherence** (OR ≈ 2.11),
modelling a rise from ~50% to ~68% [[src-ux-text-reminder-adherence-meta]];
diabetes and CHD meta-analyses show consistent positive effects (SMD ≈ 0.36;
RR ≈ 2.85) [[src-ux-text-reminder-adherence-meta]]. Effects are **larger when
sustained (>6 months), personalised, and two-way** rather than one-way blasts
[[src-ux-text-reminder-adherence-meta]]. Reminders fix *forgetting*
(automatic motivation/capability); they do **not** fix cost or stock barriers,
which need [[pharmacy-ux-patterns|design]] elsewhere.

**Implementation intentions ("if-then" plans)** add a low-cost boost: prompting a
person to decide exactly *when, where and how* they'll act creates an automatic
cue→action link and reliably raises follow-through (meta-analytic d ≈ 0.65 across
domains incl. health) [[src-ux-implementation-intentions-gollwitzer]]. In
practice: "When will you take your evening dose, and where will you keep the
pack so you see it?"

## How to apply
1. **Write the job statement** for the persona/scenario before designing
   touchpoints; list its functional/emotional/social dimensions and 3–5
   measurable Ulwick outcomes [[src-ux-jtbd-christensen-ulwick]].
2. For each adherence/uptake pain on the journey map, **run a COM-B diagnosis** to
   find the real barrier [[src-ux-com-b-behaviour-change-wheel]].
3. **Select an EAST tactic that matches the barrier** (default, friction-cut,
   social proof, or timely prompt), not a generic nudge
   [[src-ux-east-behavioural-insights]].
4. **Default chronic scripts to auto-refill + reminders (opt-out)**, personalise,
   keep it two-way, sustain it [[src-ux-text-reminder-adherence-meta]]; add an
   **implementation-intention prompt** at first enrolment
   [[src-ux-implementation-intentions-gollwitzer]].
5. **Audit for sludge** and remove it from every beneficial action; reserve
   friction for high-risk/irreversible steps only
   [[src-ux-sludge-thaler-sunstein]].
6. Wire chosen tactics into the [[service-blueprinting-method|blueprint]] and the
   concrete states in [[pharmacy-ux-patterns]].

## Open questions
- SA-specific adherence-driver mix (cost vs forgetting vs stock) needs local data:
  triangulate [[wiki/consumer-context/_index]] + [[wiki/medical-schemes/_index]];
  log to [[meta/punchlist]].
- Ethical line for "opt-out" auto-refill under POPIA/consent: see
  [[healthcare-service-design-patterns]] and [[wiki/sa-regulatory/_index]].

## See also
- [[journey-mapping-method]] · [[service-blueprinting-method]] ·
  [[pharmacy-ux-patterns]] · [[healthcare-service-design-patterns]] ·
  [[inclusive-low-bandwidth-design]]
