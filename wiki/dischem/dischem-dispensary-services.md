---
type: wiki
title: "Dis-Chem — dispensary & scripting services"
domain: dischem
status: draft
confidence: medium
tags: [domain/dischem, journey/submit, journey/dispense, journey/collect, journey/deliver, journey/refill, topic/chronic, topic/last-mile, region/za]
sources: [src-dc-dispensary-services, src-dc-packmymeds, src-dc-deliverd, src-dc-fy2026-results, src-sa-scheme-chronic-dsp]
created: "2026-06-13"
updated: "2026-06-17"
---

# Dis-Chem — dispensary & scripting services

This page catalogues the **current-state services** through which Dis-Chem
accepts, dispenses, packs, collects and delivers prescriptions. Dis-Chem offers
a layered set of channels: walk-in dispensary, online/app script upload, a
chronic repeat-and-reminder service (**PackMyMeds**), a standard
collect/courier model, an on-demand 60-minute delivery (**DeliverD**), and a
distance **courier pharmacy** (**Dis-Chem Direct**). Most mechanics below come
from Dis-Chem's own service pages (reliability B); fees and timelines are
date-stamped because they change.

## Core dispensary
Every retail store has a **licensed dispensary** staffed by pharmacists, plus
**clinics** (well-baby, family, wound care), **vaccinations**, and
**wellness/point-of-care screening** by nursing practitioners
[[src-dc-dispensary-services]]. Standard dispensing covers acute scripts,
chronic medicine, generic substitution, and **scheme claims** adjudicated in
real time at the till (see funding under [[wiki/dischem/dischem-rx-current-journey]]).

## Script submission channels
A customer can get a prescription to Dis-Chem via [[src-dc-dispensary-services]]:
- **In person** - hand the script to the dispensary.
- **Dis-Chem app** - upload a new script or re-order an existing repeat.
- **SMS / email** - send the script to the pharmacy.
- **WhatsApp** - primarily for chronic/repeat ordering via PackMyMeds (below).

## Repeat prescriptions
Dis-Chem can dispense **repeats for up to 6 months** for **Schedule 2, 3 and 4**
medicines, in line with prescription-validity rules [[src-dc-dispensary-services]].
Repeats are the backbone of the chronic-medicine relationship and the main target
of PackMyMeds.

## PackMyMeds (chronic pre-pack + reminders)
**PackMyMeds** is Dis-Chem's chronic/repeat service [[src-dc-packmymeds]]:
1. Customers with **active/repeatable chronic prescriptions** get an **SMS** inviting
   them to **opt in**.
2. Sign-up: online (dischem.co.za/pack-my-meds), **WhatsApp "Hi" to 0860 347 243**,
   or call the careline **0860 347 243**.
3. When a repeat is **due**, Dis-Chem sends an **SMS/WhatsApp link** to order.
4. Meds are **pre-packed at the nearest store**, ready for **collection or
   delivery**; the customer gets an "it's ready" update.

It is positioned as an **adherence** tool ("on time, every time") and is the
closest thing Dis-Chem has to a proactive refill loop. (Contrast: scheme courier
pharmacies push the script to the patient automatically; PackMyMeds still requires
the customer to **re-confirm each cycle**.)

## Collection & standard delivery
For scripts/orders submitted online [[src-dc-dispensary-services]]:
- **Click-and-collect (~2 hours):** submit online → collect at a Dis-Chem
  pharmacy, presenting **order number + ID**.
- **Standard courier (~24 hours):** doorstep delivery within 24 hours.

## DeliverD (on-demand ~60-minute delivery)
**DeliverD**, launched July 2021 via the Dis-Chem app, is an **on-demand
same-day / ~60-minute** delivery service [[src-dc-deliverd]]:
- Coverage: **selected stores**, within ~**10km**, in **main metros**.
- Hours: 7 days/week - Mon–Sat 09:00–16:30; Sun & public holidays 09:00–13:00.
- Fee: **R35** (since 1 Dec 2021; launched at R60); bulk orders >10kg cost more.
  *(Fees date-stamped 2021 - ⚠️ verify for 2026.)*
- Catalogue: 7,000+ front-shop products at launch; prescription/repeat ordering
  also flows through the app.

DeliverD is Dis-Chem's headline convenience differentiator and pre-dated Clicks'
equivalent on-demand OTC service (launched April 2026) [[src-clicks-direct-medicines]].

## Dis-Chem Direct (courier pharmacy)
**Dis-Chem Direct** is a **courier pharmacy - not a physical store** - that
couriers chronic medicine to the door (direct@dischem.co.za, tel 011 589 2788)
[[src-dc-dispensary-services]]. This is Dis-Chem's answer to scheme-funded
distance pharmacies like [[src-clicks-direct-medicines|Clicks Direct Medicines]],
Pharmacy Direct and Medipost, where chronic scripts are funded by the member's
scheme under DSP/network rules [[src-sa-scheme-chronic-dsp]].

## Channel summary

| Channel | Speed | Best for | Fee (dated) |
|---|---|---|---|
| In-store dispensary | Immediate (queue) | Acute, advice, scheme claim | — |
| Click-and-collect | ~2 hours | Planned pickup | front-shop delivery fee n/a |
| Standard courier | ~24 hours | Non-urgent home delivery | per order |
| **DeliverD** | ~60 min | Urgent / convenience | R35 (2021) |
| **PackMyMeds** | Cycle-based | Chronic repeats + reminders | collect/deliver |
| **Dis-Chem Direct** | Courier | Scheme-funded chronic at distance | scheme-funded |

## Open questions
- ⚠️ **DeliverD fee in 2026** unconfirmed (R35 figure is 2021-dated). Verify.
- ⚠️ Whether **scheduled (S5/S6) or fridge-line** meds are excluded from DeliverD /
  courier; handling of cold-chain not documented in retrieved sources.
- ⚠️ Exact relationship between **Dis-Chem Direct** and **PackMyMeds** (one
  fulfilment engine or two) is unclear.
- ⚠️ Whether PackMyMeds auto-renews scheme registration or requires manual
  re-auth each cycle.
- Cost/fees for standard courier and click-and-collect on **Rx** (vs front-shop)
  not isolated.

## See also
- [[wiki/dischem/dischem-rx-current-journey]]
- [[wiki/dischem/dischem-digital-channels]]
- [[wiki/dischem/dischem-company-overview]]
- [[design-kit/journeys/as-is-prescription-journey]]
