---
type: journey
title: "To-be journey — cash-pay acute (Thabo): fast, transparent, near home"
state: to-be
persona: "[[design-kit/personas/cash-pay-acute-customer|Thabo Mokoena]]"
scenario: "Uninsured peri-urban father, one-off antibiotic for his child, today — WhatsApp submit → transparent cash price → nearest collection"
status: draft
confidence: medium
method_ref: "[[design-kit/templates/journey-map-template]]"
tags: [design-kit, journey, journey/submit, journey/validate, journey/pay, journey/collect, topic/acute, region/za]
created: "2026-06-13"
updated: "2026-06-17"
---

# To-be journey — fast, transparent, near home (Thabo, cash-pay acute)

> **Worked proof-of-concept** for the **uninsured ~84% majority**, the contrast
> to [[to-be-blueprint-chronic-insured]]. Persona:
> [[design-kit/personas/cash-pay-acute-customer|Thabo Mokoena]]. Method:
> [[design-kit/templates/journey-map-template]]. Stance:
> [[design-kit/templates/future-state-principles]]. This is the case a
> scheme-first "happy path" fails. Here it is first-class. See
> [[wiki/concepts/dual-journey]].

**JTBD:** *"Get this acute script filled fast, at a price I can see, near home - 
with whatever phone and airtime I have."* ([[jtbd-library]])
**Primary channel:** [[wiki/concepts/channel-ladder|WhatsApp → USSD/SMS fallback]];
**no app install, low-data, resumable**. **Fulfilment:** nearest collection /
locker rather than delivery-first ([[wiki/consumer-context/last-mile-addressing-logistics]]).

| Lens applied at every stage (from [[wiki/consumer-context/_index]]) |
|---|
| 💸 data/airtime cost · 🗣️ language & literacy · 💰 cash money · 🔒 dignity/privacy · 🔌 connectivity/load-shedding · 📍 addressing/collection |

---

## Stage 1 — Need / Prescribe
- **Doing:** Child has an infection; clinic/GP issues a paper script.
- **Thinking:** *"How much will this cost? Which pharmacy is cheapest and nearest? Will it be in stock?"*
- **Feeling:** 😣 anxious, time-pressed, money-worried.
- **Touchpoints:** clinic/GP; paper script in hand.
- **Pain (as-is):** no price visibility; cost is a black box until the till
  ([[as-is-prescription-journey]] Stage 4).
- **Opportunity 💡:** let him find out cost **before travelling**.

## Stage 2 — Submit (WhatsApp, low-data) ⭐
- **Doing:** Sends *"Hi"* to the pharmacy WhatsApp, snaps a photo of the script.
- **Thinking:** *"This is the app I already have. It's not eating my data."*
- **Feeling:** 🙂 familiar, easy.
- **Touchpoints:** WhatsApp (image compressed/low-data); **USSD/SMS fallback** if data runs out, with **state persisting server-side, resumable** ([[wiki/concepts/channel-ladder]], [[wiki/ux-service-design/inclusive-low-bandwidth-design]]).
- **Pain resolved:** as-is app login failures / data cost ([[as-is-prescription-journey]] Stage 2).
- **MoT ⭐:** first contact, which must feel effortless and trustworthy.
- **Evidence:** [[wiki/consumer-context/digital-access-and-whatsapp]], [[wiki/consumer-context/adjacent-digital-expectations]].

## Stage 3 — Validate & clinical check
- **Doing:** Answers two quick questions (child's age/weight, allergies); waits briefly.
- **Thinking:** *"A real pharmacist is checking it - good."*
- **Feeling:** 🙂 reassured.
- **Touchpoints:** WhatsApp status *"Pharmacist checking ✓"*; chat available.
- **Backstage (visible as status):** legality + **scheduling** check, dose-for-weight, interaction screen; **photo script verified by pharmacist** (a photo is a "transmission", not yet a paperless e-script, see [[wiki/sa-regulatory/e-prescription-telehealth-popia]]).
- **Policy/reg:** pharmacist oversight for S2+ ([[wiki/sa-regulatory/pharmacy-act-sapc-gpp]]).
- **Evidence:** [[wiki/dispensing-practice/dispensing-process-steps]].

## Stage 4 — Price (cash, transparent) ⭐
- **Doing:** Sees an itemised cash price **before committing**: *"R74.50 total =
  medicine (SEP R52) + dispensing fee + VAT. A generic is R48.30 - switch? ✅"*
- **Thinking:** *"Now I know. I can choose the generic and afford it."*
- **Feeling:** 😀 relief, trust, control.
- **Touchpoints:** WhatsApp price card; generic toggle.
- **Backstage:** SEP + regulated dispensing fee computed; generic-substitution
  option (§22F).
- **Policy/reg:** [[wiki/concepts/price-transparency]], [[wiki/sa-regulatory/sep-dispensing-fee]]: price is fixed by law, so **transparency, not discounting, is the win**.
- **Pain resolved:** the as-is **cost shock** ([[as-is-prescription-journey]] Stage 4), the single biggest cash-pay trust risk.
- **MoT ⭐:** the price reveal. Get this right and he trusts the brand.

## Stage 5 — Pay (his way)
- **Doing:** Pays by the rail he has - card, instant EFT, **cash on collection**, or a voucher/health-wallet.
- **Thinking:** *"I don't need a saved card or a bank app."*
- **Feeling:** 🙂.
- **Touchpoints:** WhatsApp pay link / pay-on-collect.
- **Design note:** never assume a saved card or scheme; **cash-on-collection is a first-class option** ([[wiki/consumer-context/two-economy-affordability]]).

## Stage 6 — Dispense
- **Backstage:** pick → label → **scan-verified accuracy check**; ready for nearest pickup ([[wiki/dispensing-practice/error-prevention-and-safety]]).
- **Feeling (later):** 😀 if right; the integrity check protects against the as-is wrong/short-item pain (#1).

## Stage 7 — Collect (nearest / locker) ⭐
- **Doing:** Collects at the **nearest store or a PIN-locker/pickup point near home or transport route**: *"Ready at [store] until 8pm. Locker PIN: 4821."*
- **Thinking:** *"I don't need a street address or to wait at home for a driver."*
- **Feeling:** 🙂 convenient, dignified.
- **Touchpoints:** store collection desk / **Pelebox-style locker** (proven SA precedent), pickup point ([[wiki/concepts/omnichannel-fulfilment]], [[wiki/consumer-context/last-mile-addressing-logistics]]).
- **🔮 requires-reform:** **locker collection of scheduled medicines without an
  on-site pharmacist** needs regulatory clarity (default: pharmacist-staffed
  collection / counselling-on-handover until clarified - see [[meta/open-questions]]).
- **Pain resolved:** as-is delivery-failure / no-address problem; broken-promise risk.
- **MoT ⭐:** the hand-over, promise kept.

## Stage 8 — Adhere (acute course)
- **Doing:** Takes the full antibiotic course for his child.
- **Touchpoints:** dose instructions in **his language + pictograms**; an opt-in WhatsApp reminder to **finish the course** (AMR-relevant).
- **Evidence:** [[wiki/dispensing-practice/counselling-and-health-literacy]], [[wiki/consumer-context/language-literacy-and-trust]].

---

## Emotion curve (as-is → to-be)
```
       Need  Submit Valid  Price   Pay   Disp  Collect Adhere
as-is:  😣 -  - 😣 -  -  - 😐 -  -  - 😣 -  -  - 😣 -  -  - 😐 -  -  - 😣 -  -  - 😐   (cost shock + fulfilment risk)
to-be:  😣 -  - 🙂 -  -  - 🙂 -  -  - 😀 -  -  - 🙂 -  -  - 🙂 -  -  - 🙂 -  -  - 🙂   (transparency + reliability lift the curve)
```

## Top 3 moments of truth
1. **Price reveal (Stage 4)** - transparent cash price before commit = trust.
2. **First WhatsApp contact (Stage 2)** - effortless, low-data, no app gate.
3. **Collection hand-over (Stage 7)** - promise kept, near home, dignified.

## Opportunity backlog (ranked)
1. Itemised **cash price before commit** (SEP + dispensing fee + generic option).
2. **WhatsApp/USSD-first**, resumable, low-data submit.
3. **Locker / nearest-point collection** as default (delivery is the premium add).
4. **Pay-on-collection + multi-rail** payment.
5. Multilingual, pictogram dosage + finish-the-course nudge.

## Non-negotiables honoured
Pharmacist validation of the photo script (S2+) · scheduling rules · SEP pricing
shown transparently · POPIA consent for WhatsApp data. ([[wiki/sa-regulatory/_index]])

## See also
- [[to-be-blueprint-chronic-insured]] (the insured contrast) · [[wiki/concepts/dual-journey]]
- [[as-is-prescription-journey]] · [[design-kit/templates/journey-map-template]]
- [[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]] · [[design-kit/personas/public-sector-bridging-to-retail|Mandla]] (adjacent low-data/uninsured cases)
