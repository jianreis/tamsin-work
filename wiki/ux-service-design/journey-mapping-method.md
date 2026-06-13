---
type: wiki
title: "Journey mapping — the method"
domain: ux-service-design
status: draft
confidence: high
tags: [domain/ux, journey/submit, journey/collect, journey/deliver, journey/adhere, topic/trust-safety, topic/accessibility]
sources: [src-ux-nng-journey-mapping, src-ux-nng-service-blueprints, src-ux-tisdd-stickdorn, src-ux-picker-patient-centred-care]
created: "2026-06-13"
updated: "2026-06-13"
---

# Journey mapping — the method

A **customer/patient journey map** is "a visualization of the process that a
person goes through in order to accomplish a goal" [[src-ux-nng-journey-mapping]].
It tells the chronological story of **what one persona does, thinks, and feels**
while pursuing one goal, and is the field's primary tool for building shared
empathy and surfacing pain points and opportunities [[src-ux-tisdd-stickdorn]].
This page is the authoritative method the vault's journey template should cite.

The cardinal rule: **one map = one persona × one scenario.** A map that tries to
cover every customer and every path shows nothing clearly
[[src-ux-nng-journey-mapping]].

## Anatomy (the three zones)

NN/g frames a journey map in three zones [[src-ux-nng-journey-mapping]]:

**Zone A — the lens (who & what).**
- **Persona / point of view** — the specific actor (e.g. "Thandi, 58, chronic
  hypertension, scheme member, WhatsApp-first, prepaid data"). Anchor to a real
  [[design-kit/personas/_personas-index|persona]].
- **Scenario & expectations** — the goal and the situation ("refill three-month
  chronic script with minimal data and no trip to the store") and what the
  persona expects at the outset.

**Zone B — the experience (the heart).** The chronological narrative, organised by:
- **Stages / phases** — high-level steps that structure the map (e.g. for
  scripting: *realise I'm low → submit/refill → validate & fund → dispense →
  collect/deliver → take & adhere → reorder*). Stages vary per scenario
  [[src-ux-nng-journey-mapping]]. Use the vault's `journey/*` tags.
- **Actions** — what the persona actually does in each stage.
- **Thoughts** — questions, goals, and mindset ("Will my scheme cover this?
  Is my script still valid?").
- **Emotions / the emotional curve** — a line plotting highs and lows across
  stages. The **lows are where you intervene**; the curve is the map's most
  persuasive artefact [[src-ux-nng-journey-mapping]].
- **Touchpoints** — the specific moments of contact (the WhatsApp confirmation,
  the "ready" SMS, the pharmacist counter).
- **Channels** — *where/how* each interaction happens (WhatsApp, app, USSD, SMS,
  phone, in-store). Channel and touchpoint are distinct: a touchpoint can recur
  across channels.

**Zone C — the insights (output).**
- **Pain points** — derived from the emotional lows and friction in the story.
- **Opportunities** — design responses to those pains.
- **Internal ownership / next steps** — who acts on each opportunity. A map with
  no owner changes nothing [[src-ux-nng-journey-mapping]].

In a **health** context, evaluate the experience against patient-centred-care
dimensions — *information & education, emotional support, access, continuity &
transition, respect for preferences* — so the map captures clinical/emotional
needs, not just task efficiency [[src-ux-picker-patient-centred-care]].

## Moments of truth

**Moments of truth** are the few touchpoints that disproportionately shape the
whole perception of the service — make-or-break instants. In scripting these
typically cluster at: **first submission** (does it accept my script?),
**funding** (is it covered / what do I pay?), and **fulfilment** (is it ready /
did it arrive, correct and on time?). Map them explicitly and over-invest design
effort there. (Often these align with the **fail points** found below the line of
visibility in the [[service-blueprinting-method|blueprint]].)

## As-is vs to-be (future-state)

- An **as-is map** documents the *current* experience, warts and all — grounded
  in research and used to build a shared, honest baseline
  [[src-ux-nng-journey-mapping]]. For SA scripting, ground the as-is in
  [[wiki/dischem/_index|Dis-Chem current state]] and
  [[design-kit/journeys/_design-kit-index|journey notes]].
- A **to-be / future-state map** envisions the *ideal/improved* experience and
  aligns the team on a target [[src-ux-nng-journey-mapping]]. Build the as-is
  first; the contrast between the two is what justifies investment. Keep
  future-state steps *legal and operable* and flag reform-dependent steps
  `🔮 requires-reform` per [[CLAUDE|schema §8]].

## Journey map vs service blueprint (the key distinction)

| | **Journey map** | **Service blueprint** |
|---|---|---|
| **Focus** | The customer's experience | The organisation's delivery of it |
| **Scope** | Actions, thoughts, emotions (above the line) | Adds frontstage, **backstage**, support below the line of visibility |
| **Question** | *What is it like to be the patient?* | *What must we do — visibly and invisibly — to deliver that?* |
| **Best for** | Empathy, prioritising pain | Operations, hand-offs, fixing fail points |
| **Sequence** | Usually **first** | Usually the **next step** |

A journey map shows the *symptom* (the emotional low); the blueprint shows the
*cause* (the broken backstage hand-off) [[src-ux-nng-service-blueprints]]
[[src-ux-tisdd-stickdorn]]. An **experience map** is the more general,
product-agnostic cousin (a human behaviour with no specific persona/business);
narrow it to a persona+scenario to get a journey map [[src-ux-nng-journey-mapping]].

## How to build one (step by step)

1. **Set the lens** — pick one persona and one scenario; write the goal and
   starting expectations [[src-ux-nng-journey-mapping]].
2. **Gather evidence** — interviews, diary studies, contextual inquiry, support
   logs, app-store reviews (as *signals* only, per [[meta/source-reliability-guide]]).
   An unresearched map is a **hypothesis map** to be validated, not a finding
   [[src-ux-nng-journey-mapping]].
3. **List actions on a timeline**, then group them into **stages**.
4. **Add thoughts and emotions**; draw the **emotional curve**.
5. **Layer touchpoints and channels** onto each stage.
6. **Mark moments of truth and pain points**; derive **opportunities** and assign
   **owners**.
7. **Validate, then keep it living** — maps decay as the service changes; treat
   them as owned, evidence-updated artefacts [[src-ux-tisdd-stickdorn]].

## Common mistakes
- **No persona/scenario** (a generic "everyone" map). One lens per map.
- **Inventing the emotional curve** instead of grounding it in research.
- **Stopping at the map** — no opportunities, no owners, no action.
- **Confusing channels with touchpoints**, or listing features instead of needs.
- **Mapping only the happy path** — the error/edge paths (claim rejected,
  out-of-stock) are where trust is won or lost; map them too.

## How to apply
- For SA scripting, build the **as-is** from [[wiki/dischem/_index|Dis-Chem]],
  [[wiki/consumer-context/_index|consumer context]], and real
  [[design-kit/personas/_personas-index|personas]]; then a **to-be** that applies
  the patterns in [[pharmacy-ux-patterns]] and [[jtbd-and-behavioural-design]].
- Reuse the **stages as the column spine** of the
  [[service-blueprinting-method|blueprint]] so the two artefacts stay aligned.
- Tag stages with the vault's `journey/*` taxonomy
  (submit/validate/dispense/pay/collect/deliver/adhere/refill).
- Always map the **error/edge journeys**, not just the happy path; design their
  states with [[pharmacy-ux-patterns]].
- Place a **moment of truth** at submission, funding, and fulfilment, and
  over-invest there.

## Open questions
- Real emotional-curve data for SA chronic-script patients (needs primary
  research / diary studies) — log to [[meta/punchlist]].

## See also
- [[service-blueprinting-method]] · [[pharmacy-ux-patterns]] ·
  [[jtbd-and-behavioural-design]] · [[healthcare-service-design-patterns]] ·
  [[inclusive-low-bandwidth-design]]
- [[CLAUDE|Vault schema §8 — how to build journeys]]
</content>
