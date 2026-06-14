---
type: persona
title: "Gertruida \"Trudie\" van Wyk — elderly poly-pharmacy patient"
segment: insured
persona_class: customer
tags: [design-kit, persona, region/za, topic/chronic, topic/adherence, topic/accessibility, topic/trust-safety, journey/dispense, journey/adhere]
grounded_in:
  - "[[wiki/consumer-context/health-seeking-behaviour]]"
  - "[[wiki/consumer-context/language-literacy-and-trust]]"
  - "[[wiki/consumer-context/digital-access-and-whatsapp]]"
  - "[[wiki/medical-schemes/pmb-cdl-chronic]]"
  - "[[wiki/dispensing-practice/clinical-checks-and-mtm]]"
created: "2026-06-13"
updated: "2026-06-13"
---

# Gertruida "Trudie" van Wyk — elderly poly-pharmacy patient

> **One-liner:** A 74-year-old retiree on seven daily medicines who values her
> known pharmacist above any app, finds logins and PDFs bewildering, and just
> wants her dose-packed medicine ready and explained by a person she trusts.

## Demographics & context
- **Age 74**, lives in a retirement complex in Bloemfontein (Free State). Widowed,
  lives alone; an adult daughter helps from another city.
- Home language **Afrikaans**; reads English on packaging but slowly, and dosage
  jargon is a real barrier — plain language and large, clear instructions matter
  [[wiki/consumer-context/language-literacy-and-trust]].
- Mobility and eyesight are declining; a pharmacy trip is an outing she plans for.

## Health situation
- **Polypharmacy:** ~**7 concurrent chronic medicines** across hypertension,
  type-2 diabetes, hypothyroidism and a statin — several on the CDL
  [[wiki/medical-schemes/pmb-cdl-chronic]]. This is the classic
  **multi-medicine, high-MTM-value** cohort [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- **High interaction / high-alert risk** (insulin or oral hypoglycaemics +
  multiple agents) makes the **pharmacist clinical check and counselling**
  genuinely safety-critical for her, not a formality
  [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- Adherence risk is about **confusion and routine**, not indifference — which
  medicine, when, why keep taking it when she "feels fine"
  [[wiki/consumer-context/health-seeking-behaviour]].

## Devices, channels & connectivity
- **Low digital literacy.** Has a smartphone (often set up and helped by her
  daughter) but is **fluent only in calls, SMS and basic WhatsApp** — not app
  stores, account creation, PDFs or card-not-present checkout. She sits at the
  far end of the **digital-literacy gradient** [[wiki/consumer-context/digital-access-and-whatsapp]].
- May use a **shared/assisted device** — her daughter sometimes acts on her phone
  — so notifications can be seen by others [[wiki/consumer-context/language-literacy-and-trust]].
- Trusts the **named pharmacist at her branch** far more than any interface;
  channel-specific trust does not transfer automatically to a bot or app
  [[wiki/consumer-context/language-literacy-and-trust]].

## Money & funding
- On a **medical scheme** (retiree option) with chronic cover; her chronic meds
  are largely funded but she is anxious about **co-payments and getting cover
  right** [[wiki/medical-schemes/pmb-cdl-chronic]].
- Not the most price-pressed persona, but **fixed retirement income** makes any
  surprise charge stressful; she wants certainty and reassurance over speed.

## Goals / Jobs-To-Be-Done
See [[jtbd-library]]. Her dominant jobs:
- **Take it correctly** — understand which pill, when, and why, in her language,
  so she gets the benefit and avoids harm.
- **Keep chronic meds flowing without thinking about it** — simple, reassuring,
  dose-packed, ready when she comes in.
- Emotional: **feel cared for by a person**, treated with **dignity**, not
  processed by a machine; **trust the medicine is right and checked**.

## Key pains in the current journey
- **The app is a barrier, not a help** — login/account friction and PDF handling
  exclude her from the very channels meant to add convenience
  ([[as-is-prescription-journey]] Stage 2) [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Refills are opt-in and break at script expiry** — confusing for someone who
  can lose track of seven cycles ([[as-is-prescription-journey]] Stages 8–9).
- **Stock-outs and wasted trips** are costly when a trip is hard for her
  ([[as-is-prescription-journey]] Stages 3, 6).
- **Counselling can feel rushed** at a busy counter, undermining the one thing she
  most relies on — clear, human explanation
  [[wiki/dispensing-practice/clinical-checks-and-mtm]].

## Behaviours & quote
She brings all her boxes to the counter and asks the pharmacist to walk her
through them. She prefers a regular branch and a familiar face, phones rather than
taps, and leans on her daughter for anything app-shaped. She will not adopt a flow
that demands she "manage an account".

> *"I don't want an app, dear — I want my medicines packed so I know what to take
> each morning, and a pharmacist who knows me to tell me if anything's changed."*

## How to design for them
- **Never make the app the entry point.** Support **assisted, phone-, SMS- and
  WhatsApp-based** interaction, and a **human/in-store fallback** for everything
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Dose-level packaging by default** (multi-dose adherence packs) so seven meds
  become a clear daily routine — a direct adherence lever for polypharmacy
  [[wiki/consumer-context/health-seeking-behaviour]].
- **Make pharmacist oversight visible and unhurried:** signal "a pharmacist
  checked this", offer real counselling (in-person or by call) using **teach-back**
  in **Afrikaans/plain language** [[wiki/dispensing-practice/clinical-checks-and-mtm]],
  [[wiki/consumer-context/language-literacy-and-trust]].
- **Layer MTM onto her refills** — periodic medication review for a high-alert
  polypharmacy patient [[wiki/dispensing-practice/clinical-checks-and-mtm]].
- **Allow assisted/proxy help** (her daughter) discreetly, and **assume shared
  devices** when wording notifications [[wiki/consumer-context/language-literacy-and-trust]].

## Grounded in
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/language-literacy-and-trust]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/medical-schemes/pmb-cdl-chronic]]
- [[wiki/dispensing-practice/clinical-checks-and-mtm]]

## See also
- [[design-kit/personas/_personas-index]]
- [[design-kit/personas/caregiver-proxy-collector]]
- [[design-kit/personas/insured-chronic-multimorbid]]
- [[design-kit/personas/frontline-pharmacist]]
- [[as-is-prescription-journey]]
- [[jtbd-library]]
