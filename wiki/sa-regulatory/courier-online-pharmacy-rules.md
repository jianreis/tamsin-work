---
type: wiki
title: "Courier, online & distance-selling pharmacy rules"
domain: sa-regulatory
status: draft
confidence: medium
tags: [domain/regulatory, journey/deliver, journey/dispense, topic/last-mile, topic/e-prescription, region/za]
sources: [src-reg-online-pharmacy-study-2024, src-reg-sahpra-licensing, src-reg-pharmacy-act-53-1974, src-reg-gpp-rules-sapc, src-reg-medicines-act-101-1965, src-reg-popia-health-data]
created: "2026-06-13"
updated: "2026-06-17"
---

# Courier, online & distance-selling pharmacy rules

SA permits **courier / mail-order / online dispensing of scheduled medicines**, but
only through the same regulated spine as a physical pharmacy. There is no
"lighter-touch" regime for digital channels: the **channel is digital, the seller
is still a licensed pharmacy** [[src-reg-online-pharmacy-study-2024]]
[[src-reg-sahpra-licensing]].

## The four-part legitimacy test
A legitimate online/courier medicine sale requires
[[src-reg-online-pharmacy-study-2024]] [[src-reg-sahpra-licensing]]:
1. The **medicine is SAHPRA-registered**.
2. The selling website/app is **linked to a physical community or institutional
   pharmacy** that is **NDoH-licensed and SAPC-recorded** (with a Responsible
   Pharmacist). See [[pharmacy-act-sapc-gpp]].
3. **Scheduled medicines are sold by, or under the direct supervision of, a
   pharmacist**; S3+ requires a **valid prescription on ordering**.
4. Full compliance with the **Medicines Act + Pharmacy Act + GPP**.

A common illegal pattern (2024 audit): online sellers that ship S3+ **without
requesting a prescription**, or sell **unregistered** products
[[src-reg-online-pharmacy-study-2024]].

## Who may deliver scheduled medicines
Delivery is part of the dispensing supply chain and remains under **pharmacist
accountability** and **GPP**. Courier pharmacies (e.g. the Medipost / Clicks-Medirite
type models) operate as **licensed pharmacies** with a Responsible Pharmacist and
distribution oversight [[src-reg-pharmacy-act-53-1974]] [[src-reg-gpp-rules-sapc]].
The courier is a logistics agent, but the **pharmacy retains responsibility** for the
medicine until it reaches the patient.

## Cold chain & records
GPP cold-chain rules apply through the **entire distribution chain**: thermolabile
products identified on receipt, stored per written instructions, **temperature
monitored/recorded twice daily**, validated equipment
[[src-reg-gpp-rules-sapc]]. Records of dispensing/supply (incl. scheduled-substance
registers, S6 control) must be kept [[src-reg-medicines-act-101-1965]].

## App / WhatsApp ordering
No rule forbids taking orders via **app or WhatsApp** as a *channel*, provided the
four-part test holds: the order routes to a licensed pharmacy, S3+ requires a valid
(verified) prescription, a pharmacist authorises dispensing, and **POPIA** governs
the health data carried over that channel (security safeguards, consent). See
[[e-prescription-telehealth-popia]] [[src-reg-popia-health-data]].

## Design implications / constraints
- **Map every node to a licence.** A central-fill hub, dark store, locker network or
  courier leg must each sit under the correct pharmacy/wholesale licence; the
  pharmacy of record (with RP) owns clinical accountability end-to-end. A pure-tech
  marketplace that "connects" patients to medicines without being/working through a
  licensed pharmacy is 🔮 requires-reform.
- **Prescription gate before fulfilment for S3+.** The ordering flow must capture and
  **verify a valid prescription** *before* a courier is dispatched, not collect it
  on delivery.
- **Pharmacist authorisation + counselling stay in the loop**, even for delivery.
  Build a remote counselling channel (call/video/chat) into the last-mile journey.
- **Cold-chain-as-a-feature.** Fridge-line items (e.g. insulin, biologics) need a
  monitored, recorded cold chain to the door; design temperature-logged packaging /
  locker handling that can satisfy GPP audit.
- **POPIA on the wire.** App/WhatsApp ordering must meet s19 security; minimise data
  shared with couriers (delivery data ≠ full clinical record).
- **S6 cannot be casually couriered on repeat:** no repeats + 30-day cap +
  register. A delivery model must respect the schedule controls in
  [[medicines-act-scheduling]].

## Open questions
- Is there a **dedicated SAPC/SAHPRA courier-pharmacy or e-pharmacy standard**, or is
  it governed only by general GPP + licensing? Search did not surface a standalone
  code - ⚠️ UNVERIFIED (page confidence set to medium accordingly).
- Rules on **third-party last-mile couriers** handling scheduled medicines (chain of
  custody / who may physically hold S5/S6 in transit) - ⚠️ UNVERIFIED.

## See also
- [[sahpra-overview]] · [[pharmacy-act-sapc-gpp]] · [[medicines-act-scheduling]]
- [[e-prescription-telehealth-popia]] · [[prescription-requirements-repeats]]
