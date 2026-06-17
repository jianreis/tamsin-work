---
type: wiki
title: "Courier & chronic-medicine pharmacy models"
domain: medical-schemes
status: draft
confidence: high
tags: [domain/schemes, domain/dischem, topic/chronic, journey/deliver, journey/refill, journey/collect, region/za, topic/last-mile]
sources: [src-sch-courier-models, src-sch-pharmacy-direct, src-sch-ccmdd-public, src-sch-dsp-formulary-copay, src-sch-largest-schemes-administrators]
created: "2026-06-13"
updated: "2026-06-17"
---

# Courier & chronic-medicine pharmacy models

Chronic medicine is the **repeat, predictable, high-volume** core of pharmacy,
and SA has built a mature **courier / meds-by-mail** layer around it. Roughly
**10% of all chronic medicine** is dispensed via courier pharmacy
[[src-sch-courier-models]]. For a future scripting experience, this is the
proven pattern to learn from (and compete with): **register a chronic script
once -> auto-dispense monthly -> deliver free -> member barely touches it.**

## The core model

A chronic prescription (with [[pmb-cdl-chronic|chronic registration]]) is loaded
once; repeats are dispensed automatically each cycle and **delivered free** to
the member's **home or a collection point**, with the scheme funding the medicine
and, under the **DSP** arrangement ([[dsp-formularies-copayments]]), typically
the **courier and admin** too [[src-sch-courier-models]]. When the courier is the
scheme's **DSP**, using it means **no co-payment**; using another pharmacy may
incur one.

## The players

| Service | Owner / link | Model & scale |
|---|---|---|
| **Pharmacy Direct** | AfroCentric (sister to **Medscheme**) | National courier; **>1.2m scripts/month**, 99.9% on-time; also NDoH **CCMDD** provider [[src-sch-pharmacy-direct]] |
| **Clicks Direct Medicines** | Clicks Group (60% of Direct Medicines) | Free chronic delivery to home or nearest Clicks; **100+ schemes** [[src-sch-courier-models]] |
| **Medipost Pharmacy** | Independent | SA's first national pharmacy; **~730k scripts/month**; **free** courier/admin; ~400k scheme members [[src-sch-courier-models]] |
| **Dis-Chem Direct** | Dis-Chem | Courier pharmacy (not a store); plus **Pack My Meds** (repeat pre-pack) & **DeliverD** (on-demand) [[src-sch-courier-models]] |
| **Discovery MedXpress** | Discovery Health | **Order online → deliver OR collect at any Clicks/Dis-Chem**, no extra cost; **1,800+ network pharmacies** [[src-sch-courier-models]] |
| **MedXpress / Scriptpharm / others** | Various | Network-pharmacy and courier variants ⚠️ Scriptpharm specifics unconfirmed |

Note the **vertical integration**: AfroCentric owns both an administrator
(Medscheme) and a courier (Pharmacy Direct) [[src-sch-pharmacy-direct]]
[[src-sch-largest-schemes-administrators]], so the scheme can steer its own members
to its own courier as DSP. **Dis-Chem and Clicks** appear on *both* sides: their
own courier brands **and** as collection nodes in Discovery's MedXpress network
[[src-sch-courier-models]].

## Two variants worth distinguishing

1. **Pure courier / meds-by-mail** (Pharmacy Direct, Medipost, Clicks Direct,
   Dis-Chem Direct): centrally dispensed, posted to the member.
2. **Order-and-collect network** (Discovery MedXpress): member orders online, a
   **local network pharmacy** dispenses and the member **collects same-day**
   (3–6h) or has it delivered; the network pharmacy holds clinical responsibility
   [[src-sch-courier-models]]. This blends retail footprint with digital ordering,
   directly relevant to a Dis-Chem store-network strategy.

## The public-sector mirror - CCMDD

The uninsured majority has its own version: **CCMDD** (Central Chronic Medicine
Dispensing & Distribution), the NDoH programme that **pre-packs chronic meds
centrally** and distributes to **external pick-up points** (retail pharmacies,
churches) and clinics for clinically stable patients (HIV/ARV + chronic NCDs),
**>4.9m enrolled** [[src-sch-ccmdd-public]]. Retail pharmacies (incl. Dis-Chem/
Clicks footprints) already act as **CCMDD pick-up points**, a bridge between the
two economies and a route to serve the uninsured at scale. Documented CCMDD pain
points (late delivery, no parcel tracking, late collection SMSes, wrong meds,
rural gaps) are **direct UX evidence** of what to fix [[src-sch-ccmdd-public]].

## Design implications

- **The chronic refill is the flywheel.** It's predictable, recurring and
  delivery-friendly, the natural anchor for a future scripting experience.
  Design for **"set up once, runs itself,"** with proactive refill prompts,
  adherence nudges and effortless re-authorisation when the script expires.
- **Own the collection node.** A retail network (Dis-Chem stores) is a strategic
  asset: it can be the **collect** endpoint for online orders (MedXpress-style),
  a courier origin, **and** a CCMDD pick-up point, serving insured and uninsured
  from the same footprint.
- **Make "free delivery" legible and trustworthy.** Members value free courier
  but distrust silent changes, so show *who pays, when it arrives, and live
  tracking*, exactly the gaps CCMDD exposes.
- **Re-adjudicate at order, not dispatch.** For delivery flows, run the claim
  ([[realtime-claims-switching]]) at order time so co-payments aren't a surprise
  on arrival.
- **Design the script-expiry / re-auth moment.** The biggest churn risk in
  meds-by-mail is an expired chronic script; build doctor-renewal prompts and
  (where lawful) e-prescription renewal into the loop. 🔮 may need e-Rx reform.

## Open questions
- **Scriptpharm** and **MedXpress (non-Discovery)** ownership/model specifics
  unconfirmed. ⚠️ → [[open-questions]].
- Exact split of who funds the courier leg across schemes (DSP-funded vs
  member-funded) - varies by scheme/option.

## See also
- [[dsp-formularies-copayments]] · [[pmb-cdl-chronic]] · [[cash-uninsured-pathway]]
- [[realtime-claims-switching]] · [[cms-medical-schemes-overview]]
