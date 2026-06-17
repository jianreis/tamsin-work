---
type: template
title: "Customer Journey Map — template"
status: reviewed
tags: [design-kit, template, domain/ux]
method_ref: "[[wiki/ux-service-design/journey-mapping-method]]"
created: "2026-06-13"
updated: "2026-06-17"
---

# Customer Journey Map — template & instructions

A reusable scaffold for mapping a persona's experience of the prescription
journey, as-is or to-be. **Method reference:** [[wiki/ux-service-design/journey-mapping-method]].
For the behind-the-scenes view, pair with the [[service-blueprint-template]].

## How to use
1. State the **persona** (`design-kit/personas/…`), the **scenario**, and the
   **goal/Job-To-Be-Done** (`design-kit/templates/jtbd-library`).
2. Choose **as-is** (today, with real pains) or **to-be** (future-state vision).
3. Walk the stages; fill each lane. Plot the **emotion curve**. Mark ⭐ moments
   of truth, 🔴 pain points, 💡 opportunities.
4. Cite the vault for every claim about how things work or what users feel.

## Header
- **Persona:** `[[design-kit/personas/<name>]]` (see [[design-kit/personas/_personas-index|personas]])
- **Scenario:** (e.g. "first-time acute script, cash-pay, peri-urban, low data")
- **JTBD:** "When ___, I want to ___, so I can ___."
- **Type:** as-is | to-be
- **Channels in scope:** app · WhatsApp · USSD · in-store · web · courier · locker

## Stages (default spine - adapt per scenario)
`Trigger/Need → Prescribe → Submit → Validate & clinical check → Fund/claim →
Pay → Dispense → Collect/Deliver → Adhere → Refill/Renew`

## Lanes (fill per stage)

| Lane | Prompt |
|---|---|
| **Stage** | Name + one-line goal of the stage. |
| **Doing (actions)** | Concrete actions the persona takes. |
| **Thinking** | Questions, expectations, decisions in their head. |
| **Feeling (emotion 1–5)** | Score + word (anxious, relieved, frustrated). Draw the curve across stages. |
| **Touchpoints / channels** | Where it happens; which device/channel; who they interact with. |
| **Pains** 🔴 | Friction, confusion, waits, cost shocks, failures. Cite evidence. |
| **Moments of truth** ⭐ | Make-or-break interactions (first submit, claim result, handover, first dose). |
| **Opportunities** 💡 | What would delight / de-risk; link the supporting pattern or principle. |
| **Evidence / source** | `[[src-…]]` or wiki link backing the row. |

## Emotion curve (quick capture)
```
5 😀
4 🙂        ● -  - ●
3 😐  ● -  - ●          ●
2 🙁              ● -  - ●        ●
1 😠                    ●            (plot per stage)
   Trig Presc Submit Valid Fund Pay Disp Deliver Adhere Refill
```

## SA-specific lenses to apply at every stage
Pull from [[wiki/consumer-context/_index]]:
- **Data/airtime cost** of this step (can it be done low-data / on WhatsApp / USSD / zero-rated?).
- **Language & literacy** (is copy clear in the persona's language?).
- **Money** (cash vs scheme; co-pay surprise risk; SEP transparency).
- **Trust & dignity** (privacy of health info; stigma; respectful handling).
- **Connectivity & load-shedding** (does it work offline / when power's out?).
- **Addressing & last-mile** (can they actually receive a delivery? collection alternative?).

## Output
End with: the emotion low-points, the **top 3 moments of truth**, the **top 5
pains** (ranked), and a prioritised **opportunity backlog** linking to the
[[future-state-principles]] and global patterns ([[wiki/global-benchmarks/patterns-to-borrow-and-cautions]]).
