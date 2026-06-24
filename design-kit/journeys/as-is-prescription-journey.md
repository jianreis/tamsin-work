---
type: journey
title: "As-is prescription journey (current state — Dis-Chem, SA)"
state: as-is
scope: "SA retail pharmacy, anchored on Dis-Chem; acute + chronic; in-store / app-web / WhatsApp / courier"
status: draft
confidence: medium
tags: [domain/dischem, journey/submit, journey/validate, journey/pay, journey/dispense, journey/collect, journey/deliver, journey/adhere, journey/refill, topic/chronic, region/za]
sources: [src-dc-dispensary-services, src-dc-packmymeds, src-dc-deliverd, src-dc-app-reviews, src-dc-hellopeter-complaints, src-sa-scheme-chronic-dsp, src-clicks-direct-medicines]
created: "2026-06-13"
updated: "2026-06-17"
---

# As-is prescription journey — current state (Dis-Chem, South Africa)

> **Scope & caveats.** This is a **current-state ("as-is")** map of how a
> prescription is actually filled at **Dis-Chem in South Africa today**, covering
> both **acute** (one-off) and **chronic/repeat** paths and the in-store,
> app/web, WhatsApp and courier channels. It is the grounding artefact for
> future-state ("to-be") work per [[CLAUDE]] §8. Synthesis + evidence live in
> [[wiki/dischem/dischem-rx-current-journey]]. Some pains rest on **D-tier**
> consumer signals ([[src-dc-app-reviews]], [[src-dc-hellopeter-complaints]]),
> flagged inline and to be triangulated. Fees/timelines are date-stamped.

## Lanes (legend)
- **Customer actions** - what the person does.
- **Channels/touchpoints** - where it happens.
- **Frontstage** - visible Dis-Chem people/interfaces.
- **Backstage** - invisible processes/systems/partners.
- **Pains** - friction & failure modes (with evidence).
- **Emotion** - the felt experience (😊 positive · 😐 neutral · 😣 negative).

---

## Stage 1 — Prescribe
- **Customer actions:** See a GP/specialist/clinic or a telehealth prescriber;
  receive a script (usually paper, sometimes a photo or e-script).
- **Channels/touchpoints:** Doctor's room, hospital, clinic, **Kena Health**
  telehealth app, Dis-Chem in-store clinic/nurse.
- **Frontstage:** Prescriber; (in Dis-Chem ecosystem) clinic nurse / Kena
  clinician [[src-dc-health-kena]].
- **Backstage:** Clinical decision; paper-script issuance; SA is still largely
  **paper at the prescriber end** (no national e-script exchange).
- **Pains:** Script may be illegible/incomplete; no digital hand-off to the
  pharmacy; patient must physically carry the script.
- **Emotion:** 😐 → 😣 (unwell, anxious about cost/availability).

## Stage 2 — Submit
- **Customer actions:** Get the script to Dis-Chem - hand it in, photograph &
  upload, SMS/email it, or (chronic) order via WhatsApp.
- **Channels/touchpoints:** **In-store dispensary**; **Dis-Chem app**;
  **dischem.co.za**; **SMS/email**; **WhatsApp ("Hi" → 0860 347 243)**
  [[src-dc-dispensary-services]] [[src-dc-packmymeds]].
- **Frontstage:** Dispensary assistant/pharmacist; app/web upload screen;
  WhatsApp thread.
- **Backstage:** Script image queued for pharmacist review; **likely manual
  re-key** (no confirmed OCR/structured capture).
- **Pains:** App **login failures** (false "rooted device" blocks) can stop
  submission [[src-dc-app-reviews]]; photo quality issues; re-keying introduces
  transcription error risk.
- **Emotion:** 😐 (in-store, simple) → 😣 (app friction).

## Stage 3 — Validate
- **Customer actions:** Wait; answer pharmacist queries (allergies, chronic
  registration, ID).
- **Channels/touchpoints:** Dispensary counter; phone/WhatsApp follow-up.
- **Frontstage:** Pharmacist counselling/queries.
- **Backstage:** Legality & **scheduling** checks (valid prescriber, in-date,
  schedule, **repeats remaining - up to 6 months for S2–S4**
  [[src-dc-dispensary-services]]); interaction screening; generic-substitution
  decision; **stock check**; **chronic-condition registration** check with the
  scheme [[src-sa-scheme-chronic-dsp]].
- **Pains:** Hidden delays - missing info, **unregistered chronic condition**
  (claim will reject), **stock-out discovered here** [[src-dc-hellopeter-complaints]].
- **Emotion:** 😐 → 😣 (opaque waiting; "is it ready yet?").

## Stage 4 — Fund / Claim
- **Customer actions:** Present scheme card / pay cash; (sometimes) discover a
  co-payment.
- **Channels/touchpoints:** Dispensary till; in-app payment; scheme call-centre
  (for auth).
- **Frontstage:** Cashier/pharmacist explaining cover vs co-pay.
- **Backstage:** **Real-time electronic claim switching** to the scheme; PMB/CDL
  rules; **DSP / network-pharmacy** logic - if Dis-Chem isn't the scheme's
  chronic DSP, a **co-payment** applies; member may be locked to one pharmacy for
  6 months [[src-sa-scheme-chronic-dsp]].
- **Pains:** **Co-payment surprise**; claim rejections; auth delays; pressure to
  switch to a **courier pharmacy** (Clicks Direct / Pharmacy Direct / Medipost /
  Dis-Chem Direct) to avoid co-pays [[src-clicks-direct-medicines]].
- **Emotion:** 😣 (cost shock, confusion about what's covered).

## Stage 5 — Pay
- **Customer actions:** Settle co-pay/levy or full cash amount.
- **Channels/touchpoints:** Till; **in-app/online payment**.
- **Frontstage:** Cashier; payment screen.
- **Backstage:** Scheme pays its share; member pays balance; card/EFT settlement.
- **Pains:** **In-app payment failures** [[src-dc-app-reviews]]; queueing in
  store; surprise out-of-pocket cost.
- **Emotion:** 😐 → 😣 (if payment fails or cost is unexpected).

## Stage 6 — Dispense
- **Customer actions:** Wait for preparation; (chronic) meds **pre-packed**
  ahead via PackMyMeds.
- **Channels/touchpoints:** Dispensary; back-of-house pack station.
- **Frontstage:** Pharmacist hands over + counsels.
- **Backstage:** Pick/label/check; **PackMyMeds pre-pack at nearest store**
  [[src-dc-packmymeds]]; QA check.
- **Pains:** **Stock-outs with no generic on hand** [[src-dc-hellopeter-complaints]];
  **labelling/selection errors** (e.g. wrong product under a correct label,
  safety-critical) [[src-dc-hellopeter-complaints]] *(D-tier - triangulate)*.
- **Emotion:** 😊 (handover/advice) but 😣 if wrong/short.

## Stage 7 — Collect / Deliver
- **Customer actions:** Collect in-store / click-and-collect, or wait for
  delivery.
- **Channels/touchpoints:** Store counter; **click-and-collect (~2h)**;
  **standard courier (~24h)**; **DeliverD (~60min, R35, selected metros ≤10km)**;
  **Dis-Chem Direct** courier pharmacy [[src-dc-dispensary-services]]
  [[src-dc-deliverd]].
- **Frontstage:** Collection desk; delivery driver; status notifications.
- **Backstage:** Order routing; courier dispatch; status updates.
- **Pains:** **Orders cancelled minutes before delivery**; **missing/wrong
  items** on arrival [[src-dc-app-reviews]] [[src-dc-hellopeter-complaints]];
  coverage gaps outside metros; cold-chain handling unclear.
- **Emotion:** 😊 (convenient when it works) → 😣 (broken promise erodes trust).

## Stage 8 — Adhere
- **Customer actions:** Take medicine; try not to run out.
- **Channels/touchpoints:** Home; **SMS/WhatsApp reminders** (PackMyMeds).
- **Frontstage:** Reminder messages.
- **Backstage:** PackMyMeds schedule keyed to repeat due-date
  [[src-dc-packmymeds]].
- **Pains:** Adherence support is **reactive/opt-in**, not actively managed;
  no dose-level tracking; easy to miss/run out.
- **Emotion:** 😐 (on autopilot) → 😣 (if a reminder is missed or stock isn't
  ready).

## Stage 9 — Refill
- **Customer actions:** Tap SMS/WhatsApp link or re-order in app; **must confirm
  each cycle**; obtain a **new script** once repeats expire (~6 months).
- **Channels/touchpoints:** WhatsApp/SMS/app → back to Submit→…→Collect/Deliver.
- **Frontstage:** Reorder link; dispensary.
- **Backstage:** Repeat decrement; when repeats are exhausted, **hand-off back to
  the prescriber** (Stage 1), with no orchestration across that gap.
- **Pains:** **Opt-in, not managed**, customer effort each cycle
  [[src-dc-packmymeds]]; **hard break at script expiry** (high drop-off /
  adherence-gap risk); re-registration friction with the scheme.
- **Emotion:** 😐 → 😣 (chore; risk of lapse).

---

## Top as-is pains (ranked for design)
1. **Fulfilment integrity** - wrong/missing items, last-minute cancellations,
   dispensing errors (Stages 6–7) [[src-dc-app-reviews]]
   [[src-dc-hellopeter-complaints]].
2. **Chronic-med stock-outs** with no generic alternative (Stages 3, 6)
   [[src-dc-hellopeter-complaints]].
3. **Co-payment / DSP surprises** at funding (Stage 4) [[src-sa-scheme-chronic-dsp]].
4. **App reliability** - login, payment, search, crashes (Stages 2, 5)
   [[src-dc-app-reviews]].
5. **Refill is opt-in, not managed**, and **breaks at script expiry**
   (Stages 8–9) [[src-dc-packmymeds]].
6. **Manual, paper-to-rekey script handling** with no e-script hand-off
   (Stages 1–2).

## Moments of truth (design leverage)
- **Validate→Fund:** the first time cost/cover becomes real → biggest trust risk.
- **Collect/Deliver:** the promise either kept or broken → biggest loyalty risk.
- **Refill→new script:** the silent drop-off point → biggest adherence/retention risk.

## Open questions
- ⚠️ OCR vs manual re-key at Submit; e-script readiness in SA.
- ⚠️ Quantified co-payment frequency and delivery failure rates (only D-tier
  anecdotes so far).
- ⚠️ Cold-chain / scheduled-medicine handling across DeliverD and courier.
- ⚠️ Whether PackMyMeds re-auths scheme registration automatically.

## See also
- [[wiki/dischem/dischem-rx-current-journey]] (narrative + evidence)
- [[wiki/dischem/dischem-dispensary-services]]
- [[wiki/dischem/dischem-digital-channels]]
- [[wiki/dischem/competitive-landscape-sa-pharmacy]]
- [[CLAUDE]] §8 (how to build to-be journeys from this)
