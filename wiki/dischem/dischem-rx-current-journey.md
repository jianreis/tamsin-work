---
type: wiki
title: "Dis-Chem — current prescription journey (as-is)"
domain: dischem
status: draft
confidence: medium
tags: [domain/dischem, journey/submit, journey/validate, journey/pay, journey/dispense, journey/collect, journey/deliver, journey/refill, topic/chronic, topic/acute, region/za]
sources: [src-dc-dispensary-services, src-dc-packmymeds, src-dc-deliverd, src-dc-app-reviews, src-dc-hellopeter-complaints, src-sa-scheme-chronic-dsp, src-clicks-direct-medicines]
created: "2026-06-13"
updated: "2026-06-13"
---

# Dis-Chem — current prescription journey (as-is)

This is the **narrative** of how a customer gets a prescription filled at
Dis-Chem **today**. The structured stage-by-stage map (customer actions /
frontstage / backstage / pains / emotions) lives in
[[design-kit/journeys/as-is-prescription-journey]]; this page is the synthesised
prose and evidence base behind it. It covers both **acute** (one-off) and
**chronic** (repeat) journeys, across in-store, app/web and WhatsApp.

## 1. Prescribe
The journey starts **outside Dis-Chem**: a GP, specialist, hospital, or
(increasingly) a telehealth prescriber (e.g. Kena Health within Dis-Chem's own
ecosystem [[src-dc-health-kena]]) issues a **paper or electronic script**. SA is
still **largely paper-based** at the prescriber end, so the customer typically
arrives holding a physical script or a phone photo of one.

## 2. Submit
The customer gets the script to Dis-Chem via one of
[[src-dc-dispensary-services]]:
- **In person** at the dispensary (most common, especially acute).
- **App/web upload** (photo of the script).
- **SMS or email** to the pharmacy.
- **WhatsApp** (chronic/repeat via PackMyMeds [[src-dc-packmymeds]]).

Friction: a photo upload still needs a pharmacist to **read and re-key** it;
unclear whether OCR is used [[src-dc-app-reviews]]. App login failures can block
submission entirely [[src-dc-app-reviews]].

## 3. Validate
The pharmacist checks the script's **legitimacy and scheduling** (valid
prescriber, in-date, schedule, repeats remaining), screens for interactions, and
applies **generic substitution** rules. For **chronic** meds the **scheme
chronic registration** must be in place, or the claim will reject
[[src-sa-scheme-chronic-dsp]]. Repeats are valid for **up to 6 months** for
Schedule 2–4 [[src-dc-dispensary-services]]. This step is **invisible to the
customer** but is where many delays originate (missing info, unregistered chronic
condition, stock checks).

## 4. Fund / Claim
For **scheme members**, this is the make-or-break step
[[src-sa-scheme-chronic-dsp]]:
- The dispensary submits a **real-time claim** to the scheme (electronic
  switching) and learns on the spot what is **covered vs co-payable**.
- If Dis-Chem is **not the scheme's DSP / network pharmacy** for chronic meds, a
  **co-payment** applies — a frequent, poorly-anticipated surprise that pushes
  chronic patients toward courier pharmacies (Clicks Direct, Pharmacy Direct,
  Medipost, or **Dis-Chem Direct**) [[src-clicks-direct-medicines]].
- Members can usually pick one chronic pharmacy within ~10km and must **stay 6
  months** [[src-sa-scheme-chronic-dsp]] — a lock-in that shapes channel choice.

For **cash** customers, this collapses into a price quote at the till.

## 5. Pay
Payment is settled at the till (in-store) or in-app/online: **scheme pays its
portion + member pays any co-pay/levy**, or **cash/card** for the full amount.
In-app **payment failures** are a reported pain [[src-dc-app-reviews]].

## 6. Dispense
The pharmacist **dispenses, labels, and counsels**. For chronic repeats via
PackMyMeds, meds are **pre-packed at the nearest store** ahead of pickup
[[src-dc-packmymeds]]. Risks here are operational: **stock-outs** (incl. no
generic alternative) and **labelling/selection errors** are documented in
consumer complaints — e.g. a wrong product dispensed under a correct-drug label
[[src-dc-hellopeter-complaints]]. (Anecdotal D-tier, but a recurring theme.)

## 7. Collect / Deliver
- **Collect:** in-store immediately, or **click-and-collect (~2h)** with order
  number + ID [[src-dc-dispensary-services]].
- **Deliver:** **standard courier (~24h)**, or **DeliverD (~60min)** in selected
  metros within ~10km (R35, 2021-dated) [[src-dc-deliverd]]; chronic at distance
  via **Dis-Chem Direct** courier pharmacy [[src-dc-dispensary-services]].

Friction: delivery **reliability** is a top complaint — orders **cancelled
minutes before delivery**, **missing/wrong items** on arrival
[[src-dc-app-reviews]] [[src-dc-hellopeter-complaints]].

## 8. Adhere
Between fills, the customer is expected to **take the medicine and not run out**.
Dis-Chem's adherence lever is **PackMyMeds reminders** (SMS/WhatsApp when a
repeat is due) [[src-dc-packmymeds]]. This is **reactive/opt-in** rather than a
fully managed refill — the patient must still confirm each cycle.

## 9. Refill
At repeat time, the customer taps the **SMS/WhatsApp link** (PackMyMeds) or
re-orders in the app; the cycle returns to **Validate → Fund → Dispense →
Collect/Deliver** [[src-dc-packmymeds]]. When repeats run out (after ~6 months),
the customer must obtain a **new script** — re-entering at **Prescribe** — a
hard hand-off point with high drop-off risk.

## As-is pain points (evidence-backed)
1. **Stock-outs of chronic meds with no generic on hand** — patients left without
   essential medicine [[src-dc-hellopeter-complaints]].
2. **Delivery unreliability** — late, cancelled, missing or wrong items
   [[src-dc-app-reviews]] [[src-dc-hellopeter-complaints]].
3. **Dispensing/labelling errors** — safety-critical
   [[src-dc-hellopeter-complaints]].
4. **App reliability** — login blocks, payment failures, weak search, crashes
   [[src-dc-app-reviews]].
5. **Co-payment surprises** at the funding step for non-DSP chronic scripts
   [[src-sa-scheme-chronic-dsp]].
6. **Manual script handling** — photo upload still re-keyed by a pharmacist;
   no clear structured/e-script capture.
7. **Refill is opt-in, not managed** — adherence relies on the patient
   re-confirming each cycle [[src-dc-packmymeds]].
8. **New-script hand-off** — when repeats expire, the journey breaks back out to
   the prescriber with no orchestration.

## Open questions
- ⚠️ Whether script upload uses **OCR/structured capture** or image-only.
- ⚠️ Real-world **co-payment frequency** at Dis-Chem dispensaries (no quantified
  source).
- ⚠️ Whether **DeliverD/courier carry Rx** routinely or mostly front-shop OTC.
- ⚠️ Cold-chain / scheduled-medicine handling in delivery channels.
- Pain points 1–3 rest on **D-tier anecdotes** — triangulate with B-tier audit /
  scheme complaint data before treating as quantified.

## See also
- [[design-kit/journeys/as-is-prescription-journey]] (structured map)
- [[wiki/dischem/dischem-dispensary-services]]
- [[wiki/dischem/dischem-digital-channels]]
- [[wiki/dischem/competitive-landscape-sa-pharmacy]]
