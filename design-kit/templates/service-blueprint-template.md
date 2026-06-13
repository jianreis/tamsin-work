---
type: template
title: "Service Blueprint — template"
status: reviewed
tags: [design-kit, template, domain/ux]
method_ref: "[[wiki/ux-service-design/service-blueprinting-method]]"
created: "2026-06-13"
updated: "2026-06-13"
---

# Service Blueprint — template & instructions

A reusable, fill-in scaffold for blueprinting a stage (or the whole) future-state
prescription experience. **Method reference:** [[wiki/ux-service-design/service-blueprinting-method]].
Ground every cell in the vault and cite it (e.g. `(see [[wiki/dischem/dischem-dispensary-services]])`).

> A **journey map** is the customer's experience over time (emotion, pains).
> A **service blueprint** adds everything *behind the line of visibility* that
> must happen to deliver it — systems, staff, partners, policies. Use the
> [[journey-map-template]] for the former; this for the latter.

## How to use
1. Pick a **scenario** (e.g. "insured chronic patient refills via WhatsApp →
   home delivery") and a **persona** from `design-kit/personas/`.
2. Lay the **stages** across the top (the journey spine below).
3. Fill each lane top-to-bottom for every stage.
4. Mark **moments of truth** ⭐, **pain points** 🔴, **opportunities** 💡, and
   **fail points** ⚠️. Flag anything needing rule change `🔮 requires-reform`.
5. For each backstage step, name the **system/partner** and the **policy/reg**
   that governs it (link to `wiki/sa-regulatory/` and `wiki/medical-schemes/`).
6. Add **metrics** per stage (time, cost, drop-off, error rate, CSAT/NPS).

## The journey spine (default stages)
`PRESCRIBE → SUBMIT → VALIDATE & CLINICAL CHECK → FUND / CLAIM → PAY →
DISPENSE → COLLECT / DELIVER → ADHERE → REFILL / RENEW`

## Blueprint lanes (fill per stage)

| Lane | What goes here |
|---|---|
| **0. Physical / digital evidence** | What the customer sees/touches: app screen, WhatsApp message, SMS, label, packaging, locker, courier, store counter. |
| **1. Customer actions** | What the customer actually does this stage (verbs). |
| **2. Customer thoughts & emotions** | Mindset, anxiety, hopes; plot the emotion curve. ⭐ mark moments of truth. |
| *— line of interaction —* | (customer ↔ service boundary) |
| **3. Frontstage (onstage) contact** | Human + digital touchpoints the customer interacts with directly (pharmacist, assistant, chatbot, app UI, driver). |
| *— line of visibility —* | (what the customer can / cannot see) |
| **4. Backstage actions** | Staff/agent actions the customer doesn't see: clinical check, picking, accuracy check, claim submission, packing. |
| *— line of internal interaction —* | (org ↔ supporting systems/partners) |
| **5. Support processes & systems** | Dispensary system, claims switch, e-Rx exchange, inventory, courier API, EHR, identity/consent, robotics. Name each. |
| **6. Partners** | Prescriber, medical scheme, switching house, courier, locker network, SAHPRA-licensed entities. |
| **7. Policy / regulatory constraint** | The law/rule that governs this step (cite `wiki/sa-regulatory/*`, `wiki/medical-schemes/*`). |
| **8. Pains / risks** 🔴⚠️ | Friction, fail points, drop-off, safety risks at this stage. |
| **9. Opportunities** 💡 | Future-state improvement, with the pattern source (cite `wiki/global-benchmarks/*`). |
| **10. Metrics** | Time, cost (R), error/rejection rate, drop-off %, satisfaction. |

## Worked-cell example (Stage = VALIDATE & CLINICAL CHECK)
- **Evidence:** app shows "Pharmacist reviewing your script ✓ (avg 4 min)".
- **Customer action:** waits; can chat to pharmacist in-app.
- **Emotion:** mild anxiety ("will it be approved / in stock?") — ⭐ moment of truth.
- **Frontstage:** in-app status + optional pharmacist chat.
- **Backstage:** pharmacist performs therapeutic review & legal validity check
  (see [[wiki/dispensing-practice/dispensing-process-steps]]).
- **Support systems:** dispensary system + interaction-checking + e-Rx record.
- **Policy:** pharmacist oversight & valid-prescription rules
  (see [[wiki/sa-regulatory/prescription-requirements-repeats]]).
- **Pain 🔴:** silent waits erode trust; rejected scripts handled coldly.
- **Opportunity 💡:** transparent real-time status + proactive pharmacist
  outreach (pattern: nominated-pharmacy + status, see [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]]).
- **Metric:** median time-to-validate; % requiring intervention.

## Output format options
- **Wide table** (one column per stage, lanes as rows) — best for Miro/FigJam export.
- **Per-stage blocks** (this doc's structure) — best for LLM generation & review.
- Always end with a **summary of moments of truth, top 5 pains, top 5 opportunities, and `requires-reform` flags.**
