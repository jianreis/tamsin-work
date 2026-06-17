---
type: wiki
title: "Voice of the customer — the in-store script journey (Dis-Chem IDIs, 2025)"
domain: consumer-context
status: draft
confidence: medium
tags: [domain/consumer, domain/dischem, domain/ux, journey/submit, journey/validate, journey/pay, journey/collect, journey/dispense, journey/adhere, journey/refill, topic/chronic, topic/acute, region/za]
sources: [src-dc-script-journey-interviews-2025]
created: "2026-06-14"
updated: "2026-06-17"
---

# Voice of the customer — the in-store script journey

This page synthesises the **customer voice** captured in a first-party
qualitative study of the Dis-Chem script journey: **10 one-hour in-depth
interviews** with in-store self-collect customers, fielded **20–25 October
2025** [[src-dc-script-journey-interviews-2025]]. It records, stage by stage,
what customers say **works** and what **causes friction**, and maps those to our
[[design-kit/journeys/as-is-prescription-journey|as-is journey spine]] and
[[design-kit/personas/_personas-index|personas]]. It is the first
**lived-experience** evidence we hold on the as-is journey. Earlier pains
rested largely on D-tier app-store / HelloPeter signals, so this materially
upgrades confidence on the in-store path while leaving digital/remote
fulfilment unevidenced.

> **Read this as sentiment, not prevalence.** Small-n (10), purposive,
> in-store-only, mostly off-peak. Counts like "7/10 acute" describe the sample,
> not the SA customer base [[src-dc-script-journey-interviews-2025]]. The study
> **explicitly excluded delivery, click-and-collect and app/web flows**, so the
> upbeat tone below is largely a verdict on the **physical in-store experience**,
> not on Dis-Chem's digital channels.

## Who was heard

10 customers who had filled an in-store script within 30 days; balanced for age
(25–60), gender and province; urban/peri-urban across five provinces. Female
7/10, mostly 35–54, Black 6/10, **acute 7/10 vs chronic 3/10**; medication-use
skewed to long-term/mixed regimen users (8/10)
[[src-dc-script-journey-interviews-2025]]. This is a **regular, in-store-loyal,
medical-aid-leaning** slice - closest to personas
[[design-kit/personas/insured-chronic-multimorbid|Nomvula (insured chronic)]],
[[design-kit/personas/elderly-poly-pharmacy|Trudie (poly-pharmacy)]] and
[[design-kit/personas/cash-pay-acute-customer|Thabo (cash acute)]] - and
**under-represents** the WhatsApp-first/low-data
([[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]]),
delivery-first ([[design-kit/personas/time-poor-urban-professional|Aisha]]) and
public-sector-bridging ([[design-kit/personas/public-sector-bridging-to-retail|Mandla]])
segments.

## The big themes (cross-journey)

- **Three drivers decide everything: speed/convenience, one-stop shopping, stock
  reliability**, and the same three explain why customers choose Dis-Chem
  specifically [[src-dc-script-journey-interviews-2025]]. A future-state design
  that trades any of these away will lose this segment.
- **Loyalty is to convenience, not to brand.** Customers keep a "main" pharmacy
  but switch to Clicks/Pharmet for speed or stock that day - "If I can't find
  something at Dis-Chem, I'll just check Clicks or Pharmet"
  [[src-dc-script-journey-interviews-2025]]. A stock-out doesn't just lose a
  sale, it relocates the customer.
- **Human service sets the emotional tone.** Friendly, knowledgeable, familiar
  staff are repeatedly the reason people stay - "they're familiar with me and my
  medication" [[src-dc-script-journey-interviews-2025]]. Confirms the
  [[design-kit/personas/frontline-pharmacist|pharmacist relationship]] as a real
  asset, not a romantic one.
- **"Chronic" is a behaviour, not a diagnosis, in the customer's head.** People
  call recurring sinus or gout "chronic" because they medicate routinely, so frame
  journeys around **ongoing-management behaviour, not clinical category**
  [[src-dc-script-journey-interviews-2025]]. Design implication: the
  "chronic flywheel" should target *self-perceived routine medicators*, who are
  a larger group than the clinically-chronic / CDL-registered set.
- **Digital is low-trust and habit-mismatched here**, not rejected, just "it
  doesn't yet fit their habits", and one participant is actively scam-wary
  [[src-dc-script-journey-interviews-2025]]. The bar for a digital front-door is
  **trust and visible control**, not features.

## Stage-by-stage: customer voice mapped to the journey spine

### Getting the prescription → maps to PRESCRIBE / SUBMIT
- **Works:** doctor-pharmacy **co-location** lets people fill immediately;
  extended hours; predictable queues; **face-to-face assurance**
  [[src-dc-script-journey-interviews-2025]].
- **Pain:** **paper everywhere**. Nearly all still get a handwritten script;
  the two who tried email/app upload found it "secondary or unreliable." When
  doctors email/fax a script, **customers can't tell if Dis-Chem received it**,
  causing double trips and calls, and there is **no confirmation system** for
  digital hand-overs [[src-dc-script-journey-interviews-2025]]. This **confirms
  and sharpens** the as-is "manual, paper-to-rekey, no e-script hand-off" pain
  ([[design-kit/journeys/as-is-prescription-journey|as-is]] Stages 1–2): the
  felt problem is **lack of a receipt/confirmation**, not the paper itself.
- **Pain:** timing is gated by **payday and errand-bundling** - "I plan it
  around payday or if I'm already going to the shops"
  [[src-dc-script-journey-interviews-2025]]. Money-timing is a real scheduling
  constraint, not only an affordability one.

### Arriving & finding the right place → maps to (in-store) SUBMIT / queue
- **Works:** **ticketing + browse-while-you-wait** is liked ("I can still
  browse"); clean, organised, separated queues; staff who direct you
  [[src-dc-script-journey-interviews-2025]].
- **Pain:** **ticketing is inconsistent across branches**, and customers notice
  instantly when it's missing. **Month-end / pensioner-day surges push waits to
  ~25–30 min**, felt acutely "when you're not feeling well"
  [[src-dc-script-journey-interviews-2025]]. New, in-store-specific pain not in
  the current as-is map (which focuses on app/fulfilment), where **peak-load fairness**
  is the issue.

### Handover & waiting → maps to VALIDATE / FUND-CLAIM
- **Works:** quick, polite **ID/loyalty profile lookup**; stored profiles speed
  repeats; **medical-aid issues resolved on the counter** (a GEMS co-pay
  "adjusted" in person); short dispense window once in the system
  [[src-dc-script-journey-interviews-2025]].
- **Pain:** **profile-lookup inconsistency across branches** (surname
  variants/duplicates, "profile not found"); **redundant digital steps**, being
  asked to WhatsApp/email a script *and* hand over the paper; and **family /
  multi-profile admin** at the counter [[src-dc-script-journey-interviews-2025]].
  Directly validates the
  [[design-kit/personas/caregiver-proxy-collector|caregiver/proxy]] persona's
  multi-profile pain. **Contrast with the as-is map:** the as-is treats
  Validate→Fund as the *biggest trust risk* (co-pay shock). Here, in this
  insured-leaning sample, **co-pay handling felt smooth and on-the-counter** -
  see contradiction below.

### Information & counselling → maps to DISPENSE (counsel)
- **Works, and frictionless:** **no significant frictions observed.**
  Printed labels trusted and clear; the **"show-and-tell" (hold the box)** style
  builds confidence; pharmacists tailor advice and even walk customers to the
  vitamin aisle; chronic users just "check the label and go"
  [[src-dc-script-journey-interviews-2025]]. A genuine **strength to protect** in
  any automation push, confirming the
  [[design-kit/personas/frontline-pharmacist|pharmacist]] counselling moment as
  high-value.

### Paying & collecting → maps to PAY / COLLECT
- **Works:** **medical-aid claims process instantly and accurately** at the till
  ("I just hand my card and it's done"); **co-pays seen as small and fair**
  ("R17 versus R300 - that's fair"); checkout doubles as a **shopping extension**
  (specials, 3-for-2) [[src-dc-script-journey-interviews-2025]].
- **Pain:** **till queues can exceed pharmacy queues**, and **idle-staff
  perception** when cashiers chat at busy times; recurring desire to **pay at the
  dispensary counter** for script-only trips
  [[src-dc-script-journey-interviews-2025]]. The "pay where you're dispensed"
  ask appears twice (Stages 5 & 6), a clear, concrete fix.

### Leaving the store & taking medication → maps to COLLECT / ADHERE
- **Works:** **one-stop reinforcement** (browse household/personal-care/snacks
  before paying); **chronic users exit fast**; **nearly all start treatment the
  same day**, trusting label + verbal recap
  [[src-dc-script-journey-interviews-2025]].
- **Pain:** the only friction is the repeated **dispensary-counter payment** ask.
  Note: ADHERE is observed only at *initiation* ("same-day start"); **ongoing
  adherence, refill orchestration and script-expiry** were out of scope, so this
  study does **not** speak to the as-is "refill is opt-in and breaks at expiry"
  pain, which remains unevidenced here.

## Strategic-pillar read (S1–S5)

- **S1 (both-economies):** sample is insured-leaning; the **payday/errand-bundle
  timing** and **cash-for-extras-when-savings-run-low** behaviours are the
  clearest two-economy signals [[src-dc-script-journey-interviews-2025]]. The
  uninsured/low-data end is under-heard, a coverage gap, not a "both economies
  work fine" finding.
- **S2 (front-door):** customers want a **confirmation/receipt** that a script
  landed, and **consistent ticketing/wayfinding**. The front door's job here is
  *certainty*, not novelty [[src-dc-script-journey-interviews-2025]].
- **S3 (service-not-price):** strongly supported. **Staff relationship,
  counselling and stock reliability** are why people stay; price (co-pay)
  rarely framed as a grievance in this sample
  [[src-dc-script-journey-interviews-2025]].
- **S4 (chronic-flywheel):** the **self-perceived-chronic** insight widens the
  flywheel's addressable base; **profile continuity** already speeds repeats and
  is worth hardening [[src-dc-script-journey-interviews-2025]].
- **S5 (pharmacist/automate):** counselling and on-counter medical-aid
  problem-solving are **high-value human moments to protect**; the automatable
  drudgery is **profile lookup, peak-queue load and re-keyed paper scripts**
  [[src-dc-script-journey-interviews-2025]].

## UX-pillar read (U1–U7)

- **U1 (WhatsApp-first):** *cautionary*. This cohort is digital-shy and
  scam-wary; WhatsApp adoption needs **visible trust + control**, and the
  "WhatsApp *and* hand over paper" double-step must be **eliminated, not added**
  [[src-dc-script-journey-interviews-2025]].
- **U2 (status):** the **single strongest unmet need**, "did Dis-Chem get my
  script?" A confirmation/status signal closes the Stage-1 coordination gap
  [[src-dc-script-journey-interviews-2025]].
- **U3 (money-legible):** co-pays already feel **fair and transparent** at the
  till here, so preserve that legibility; the ask is **pay-at-dispensary**
  convenience [[src-dc-script-journey-interviews-2025]].
- **U4 (graceful-failure):** stock-out handling ("take your details and call when
  stock comes") is a **good failure pattern to formalise** before the customer
  defects to Clicks [[src-dc-script-journey-interviews-2025]].
- **U5 (dignity/language):** **familiar, named staff** and show-and-tell
  counselling are the dignity wins; **multi-profile/family collection** is the
  dignity *risk* [[src-dc-script-journey-interviews-2025]].
- **U6 (reduce-journey):** **errand-bundling, browse-while-ticketed, and
  pay-where-dispensed** are the concrete journey-reduction levers
  [[src-dc-script-journey-interviews-2025]].
- **U7 (adherence):** only *same-day initiation* evidenced; **flexible reminders
  tied to payday/refill date** were the customers' own suggestion
  [[src-dc-script-journey-interviews-2025]].

## Where this confirms vs contradicts what we already believe

- **Confirms:** paper-script dominance and no e-script hand-off
  ([[design-kit/journeys/as-is-prescription-journey|as-is]] Stages 1–2);
  multi-profile caregiver pain ([[design-kit/personas/caregiver-proxy-collector|Lerato]]);
  pharmacist relationship as a real asset
  ([[design-kit/personas/frontline-pharmacist|Naledi]]); convenience-over-loyalty
  switching ([[wiki/consumer-context/adjacent-digital-expectations|adjacent expectations]]).
- **Contradicts / tensions (see Open questions):** the as-is map names
  **Validate→Fund (co-pay shock)** and **app reliability** as top trust risks
  drawn from D-tier signals; this study's in-store sample reports **co-pays as
  small/fair and handled smoothly** and **does not engage the app at all**
  [[src-dc-script-journey-interviews-2025]]. This is **not** a refutation. It is
  a **different population** (in-store regulars, off-peak, insured-leaning) than
  the dissatisfied app/HelloPeter reviewers. **Co-pay shock
  and app friction are real for the digital/courier segments the as-is map drew
  from, but the in-store self-collect segment experiences a markedly calmer
  journey**, and both can be true.

## Open questions
- Do the as-is "co-payment surprise" and "app reliability" pains hold for the
  **digital/delivery/courier** segments this study **excluded by design**? The
  study itself flags this as its #1 follow-up [[src-dc-script-journey-interviews-2025]].
- What is the **prevalence** behind these qualitative signals (n=10)? Needs a
  representative survey before any count is treated as fact.
- How does the journey behave at **month-end / pensioner-day peaks** (this sample
  skewed off-peak)? Stated next-step observational study
  [[src-dc-script-journey-interviews-2025]].
- Does **refill orchestration and script-expiry drop-off** (the as-is adherence
  risk) actually bite this in-store, profile-continuity-helped segment? Out of
  scope here.
- ⚠️ UNVERIFIED: whether "pay at the dispensary counter" is operationally/legally
  workable alongside scheme switching at point of sale.

## See also
- [[src-dc-script-journey-interviews-2025]] (the source)
- [[design-kit/journeys/as-is-prescription-journey]] (the spine this maps to)
- [[design-kit/personas/_personas-index]] (segments confirmed / under-heard)
- [[wiki/consumer-context/adjacent-digital-expectations]]
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/_index]]
