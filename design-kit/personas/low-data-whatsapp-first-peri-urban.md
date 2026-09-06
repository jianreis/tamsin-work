---
type: persona
title: "Sipho Ndlovu — low-data, peri-urban, WhatsApp-first"
segment: uninsured
persona_class: customer
tags: [design-kit, persona, region/za, topic/accessibility, topic/last-mile, topic/chronic, journey/submit, journey/collect]
grounded_in:
  - "[[wiki/consumer-context/digital-access-and-whatsapp]]"
  - "[[wiki/consumer-context/last-mile-addressing-logistics]]"
  - "[[wiki/consumer-context/two-economy-affordability]]"
  - "[[wiki/consumer-context/health-seeking-behaviour]]"
  - "[[wiki/consumer-context/language-literacy-and-trust]]"
  - "[[wiki/medical-schemes/cash-uninsured-pathway]]"
created: "2026-06-13"
updated: "2026-09-06"
---

# Sipho Ndlovu — low-data, peri-urban, WhatsApp-first

> **One-liner:** A 45-year-old hypertensive family man in a peri-urban settlement
> with a cheap Android, intermittent signal, no formal street address and almost no
> spare data — who collects medicine for a whole household, not just himself, and
> for whom a WhatsApp message, an SMS PIN and a collection point near home are the
> only things that reliably work.

## Demographics & context
- **Age 45**, lives in an informal/peri-urban settlement outside Durban
  (KwaZulu-Natal). Informal/part-time work; income is irregular.
- **No reliable street address** - his area lacks consistent street names and
  numbers, so home delivery often simply fails to find him
  [[wiki/consumer-context/last-mile-addressing-logistics]].
- Home language **isiZulu** - the home language of 81.8% of KwaZulu-Natal
  (Census 2022) [[src-con-languages-census2022]]; limited English; navigates
  anything official in a second language
  [[wiki/consumer-context/language-literacy-and-trust]].
- Sits squarely in the **~84% uninsured majority** and the
  affordability-constrained, low-digital-literacy end of the market
  [[wiki/consumer-context/two-economy-affordability]].

## Household - who he collects for

Sipho is the household's medicine runner: the person the pharmacy actually sees is
one man, but the basket behind him is a family.

- **Married** to **Thandi (41)**, who is on a **repeat oral contraceptive**. Sipho
  usually collects it together with his own tablets - one trip, one queue. It is
  routine to him, but it is still her private medicine: neutral packaging and
  neutral message wording matter inside a household as much as outside it
  [[wiki/consumer-context/language-literacy-and-trust]].
- **Two children, 14 and 12** - generally healthy; their needs are acute and
  unpredictable (a script after a clinic visit, cough syrup, a school-sores
  ointment).
- His **nephew Lwazi (17) lives with them** - extended family under one roof.
  Lwazi is not on chronic medicine, but when he needs anything, Sipho is the one
  who fetches and pays for it.
- His **mother, Grace,** lives close by; her chronic parcel comes through her own
  public programme, and Sipho keeps an eye on her collection dates (she is the
  CarerConsent case in [[to-be-household-repeat-moments]]).

The design consequence: any flow built around one patient, one account, one script
at a time makes Sipho repeat the same journey four times over
([[design-kit/personas/caregiver-proxy-collector|see the caregiver/proxy persona]]
for the insured mirror of this pattern,
[[wiki/consumer-context/voice-of-customer-script-journey]]).

## Health situation
- **Stable chronic** patient: hypertension, on one or two repeat medicines.
  Currently collects through the public **CCMDD** route. In plain terms: CCMDD
  (Central Chronic Medicine Dispensing & Distribution) is the state programme that
  pre-packs a stable patient's repeat medicine so they collect a parcel every two
  to three months from a pick-up point near home - a pharmacy, school, church or
  locker - instead of queueing at the clinic. It is the default for stable chronic
  public patients [[wiki/consumer-context/health-seeking-behaviour]],
  [[src-con-ccmdd-ndoh]].
- His risk is the **silent lapse** - a missed collection because of distance,
  data, or a broken reminder, not a clinical decision to stop.

## Devices, channels & connectivity
- **Cheap entry-level Android** (or at times a basic feature phone); frequently at
  a **zero data balance**, buys airtime in tiny increments and pays the
  **small-bundle "poverty premium"** per MB [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Intermittent connectivity** - signal degrades during heavy load-shedding when
  tower batteries fade, often exactly when he is home
  [[wiki/consumer-context/digital-access-and-whatsapp]],
  [[wiki/consumer-context/last-mile-addressing-logistics]].
- **WhatsApp + SMS + USSD are his whole digital surface.** He will not install an
  app, create an account, or download heavy images/PDFs - every download is a real
  rand cost [[wiki/consumer-context/digital-access-and-whatsapp]].

## Money & funding
- **Cash, out of pocket, at the margin.** A single private script can be a
  meaningful share of an irregular week's income; the dispensing fee bites hardest
  on cheap medicines (the 46% band) [[wiki/medical-schemes/cash-uninsured-pathway]].
- The **trip and the queue are themselves a cost** - travel and time are part of
  out-of-pocket spend [[wiki/consumer-context/two-economy-affordability]].
- Pays in **cash / instant EFT**, not a stored card; would value a **save-toward /
  pre-paid refill** construct echoing stokvel logic
  [[wiki/consumer-context/two-economy-affordability]].

## Goals / Jobs-To-Be-Done
See [[jtbd-library]]. His dominant jobs:
- **Submit a script with whatever I have** - a WhatsApp photo or a USSD step, no
  new app, no data he can't afford.
- **Get it where I am** - collect at a **known point near home** because distance
  and a missing address must not be a barrier.
- **Know it's handled** - a simple, low-data confirmation that it's ready and what
  it costs.
- **Sort the household in one trip** - his own tablets, Thandi's repeat, whatever
  the kids or Lwazi need this week: one thread, one collection point, one queue.
- Emotional: **be treated with dignity**, not as a second-class, can't-pay case.

## Key pains in the current journey
- **App-first, data-heavy flows lock him out** - login, account creation, large
  image/PDF downloads ([[as-is-prescription-journey]] Stage 2)
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Home delivery assumes a findable address he doesn't have**, and delivery is
  unreliable in informal areas ([[as-is-prescription-journey]] Stage 7)
  [[wiki/consumer-context/last-mile-addressing-logistics]].
- **Flows that fail when data/airtime runs out mid-step** - no resume, lost
  progress [[wiki/consumer-context/digital-access-and-whatsapp]].
- **No price certainty before he commits**, and a cash path treated as an error
  state [[wiki/medical-schemes/cash-uninsured-pathway]].
- **One-patient-one-account flows can't see his household** - collecting for
  Thandi, the kids, Lwazi and Grace means separate profiles, separate proofs,
  separate trips; the multi-profile pain the caregiver research surfaces hits him
  in cash form [[wiki/consumer-context/voice-of-customer-script-journey]].

## Behaviours & quote
He answers an **SMS reminder**, taps a WhatsApp link only if it's light, and
collects on the way home using a **PIN** - the Pelebox/CCMDD pattern he already
trusts. If a flow demands an app or burns his data, he abandons it and reverts to
the clinic queue.

> *"Send me a WhatsApp or an SMS with a PIN, and let me fetch it close to home.
> Don't send me to an app — I don't have the data, and the delivery man can't find
> my place anyway."*

## How to design for them
- **WhatsApp/USSD/SMS-first, no-app, data-frugal:** photo-or-USSD submission, text
  status, **small payloads**, and **resume-after-reconnect** so a dropped
  connection never loses progress [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Adopt the Pelebox pattern for collection:** **SMS/WhatsApp + one-time PIN**,
  collect at a **locker or known point near home** - proven, low-literacy,
  private, sub-minute, no address required
  [[wiki/consumer-context/last-mile-addressing-logistics]].
- **Default to collection, treat delivery as where-feasible** - never make a
  reliable street address a precondition for service
  [[wiki/consumer-context/last-mile-addressing-logistics]].
- **Quote a clear cash price up front**, with generic and pack-size choices, and
  support **save-toward / instant-EFT / cash-on-collection**
  [[wiki/medical-schemes/cash-uninsured-pathway]],
  [[wiki/consumer-context/two-economy-affordability]].
- **Bridge his CCMDD chronic collection into retail rails** where lawful, so the
  same low-data, near-home pattern serves him
  [[wiki/consumer-context/health-seeking-behaviour]].
- **Treat the household as the unit, discreetly:** let one thread carry the whole
  family's dates and one PIN collect the bundled parcels (the "both dates, one
  thread" mechanic in [[to-be-household-repeat-moments]]), with proxy collection
  that doesn't demand the patient in person - while keeping each member's medicine
  private by default, including from each other: Thandi's contraceptive is hers,
  named in no shared notification
  [[wiki/consumer-context/language-literacy-and-trust]].

## Grounded in
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/language-literacy-and-trust]]
- [[wiki/consumer-context/voice-of-customer-script-journey]]
- [[wiki/medical-schemes/cash-uninsured-pathway]]

## See also
- [[design-kit/personas/_personas-index]]
- [[design-kit/personas/cash-pay-acute-customer]]
- [[design-kit/personas/public-sector-bridging-to-retail]]
- [[design-kit/personas/caregiver-proxy-collector]]
- [[as-is-prescription-journey]]
- [[jtbd-library]]
