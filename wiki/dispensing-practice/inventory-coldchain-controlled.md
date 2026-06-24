---
type: wiki
title: "Inventory, cold chain & controlled substances"
domain: dispensing-practice
status: draft
confidence: high
tags: [domain/dispensing, topic/scheduling, topic/automation, topic/trust-safety, journey/dispense, region/global, region/za]
sources: [src-disp-coldchain-who-ashp, src-disp-sahpra-scheduling, src-disp-sapc-gpp-manual, src-disp-gs1-serialisation, src-disp-barcode-nejm, src-disp-fipwho-gpp]
created: "2026-06-13"
updated: "2026-06-17"
---

# Inventory, cold chain & controlled substances

The clinical front-of-house only works if the stock behind it is **correct,
potent, in-date, secure and traceable**. This page covers three operational
pillars that the dispensing workflow depends on: stock control (FEFO), cold
chain for refrigerated lines and vaccines, and the handling of controlled
(scheduled) substances, each with hard SA regulatory edges.

## Stock control: FEFO and expiry management

Best practice for medicines is **FEFO** (First-Expiry-First-Out), not merely
FIFO: stock is issued in order of **expiry date**, so the soonest-to-expire pack
goes first regardless of when it arrived. GPP requires **regular monitoring of
the medicines inventory, including periodic inspection for expiry dates and
removal of outdated stock** [[src-disp-fipwho-gpp]]. Supporting practices
include **short-date review cycles, segregation/quarantine of expired or
recalled stock, and reverse distribution** for credit. FEFO is widely known but
inconsistently executed in practice [[src-disp-coldchain-who-ashp]], so it must
be designed-in (system-driven pick prompts) rather than left to staff diligence.

## Cold chain

Many high-value lines (**vaccines, insulin, GLP-1 agonists, biologics**) lose
potency outside a controlled temperature window. WHO requires vaccines to be held
at **+2°C to +8°C throughout the supply chain** [[src-disp-coldchain-who-ashp]].
Both directions of excursion matter: **below 0°C freezes and irreversibly damages
many vaccines; above 8°C accelerates degradation** [[src-disp-coldchain-who-ashp]].
Best practice requires:

- **Continuous temperature monitoring** with data-logging, plus manual readings
  **several times per day recorded near the product** [[src-disp-coldchain-who-ashp]].
- **Validated equipment** (purpose-built pharmaceutical fridges, not domestic),
  **backup power**, and **insulated packaging** for transport
  [[src-disp-coldchain-who-ashp]] - directly relevant to SA **load-shedding** and
  to last-mile delivery of fridge lines.
- **Trained handlers and documented excursion procedures** - quarantine affected
  stock and assess viability before use [[src-disp-coldchain-who-ashp]].

Cold-chain integrity is both a **patient-safety** and a **stock-loss** issue, and
becomes more complex as pharmacies add vaccination services (see
[[clinical-checks-and-mtm]]) and home delivery.

## Controlled / scheduled substances (SA)

SA classifies medicines into **Schedules 0–6** by abuse potential; the schedule
dictates where/how a medicine may be sold and what must be recorded
[[src-disp-sahpra-scheduling]]. Key controls:

- **Schedule 2–6 may only be sold/dispensed by a pharmacist** (or an intern /
  pharmacist's assistant under personal supervision)
  [[src-disp-sahpra-scheduling]] [[src-disp-sapc-gpp-manual]].
- **Schedule 3–6 require a valid prescription**; **Schedule 5 and 6** have
  moderate-to-high abuse/dependence potential requiring **strict control over
  supply** [[src-disp-sahpra-scheduling]].
- **All prescribed particulars of every scheduled-substance sale must be recorded
  in a prescription book or other permanent register** kept in the prescribed
  manner [[src-disp-sahpra-scheduling]], the statutory dispensing register that
  feeds the record-keeping step of [[dispensing-process-steps]].
- Physical security (locked/controlled storage) for higher schedules.

## Traceability & serialisation

The global direction is **item-level serialisation**: a unique serial per pack,
encoded in **GS1 DataMatrix / GS1-128 barcodes**, verified and decommissioned at
the point of dispense to confirm authenticity and combat falsified medicines
[[src-disp-gs1-serialisation]]. Under the EU Falsified Medicines Directive,
pharmacies scan and verify each pack before handover [[src-disp-gs1-serialisation]].
In SA, packs carry **NAPPI codes** (the national product identifier used for
pricing/claims and scannable at dispense) [[src-disp-gs1-serialisation]];
scanning at dispense doubles as an **accuracy control** (see
[[error-prevention-and-safety]] and [[src-disp-barcode-nejm]]). Full SA item-level
serialisation is not yet a universal mandate.

## Design implications

- **Make FEFO system-driven.** Pick lists and pre-pack flows should auto-order by
  expiry and warn on short-dated stock; never rely on the picker to remember.
- **Design cold chain for SA realities.** Backup power, validated fridges and
  logged monitoring are essential given load-shedding; **last-mile delivery of
  fridge lines needs validated cold packaging and a temperature audit trail**,
  especially as vaccines/biologics grow.
- **Bake scheduling rules into the digital journey.** An e-script flow must
  classify the item's schedule and enforce the matching rules (prescription
  required, pharmacist supply, register entry): these are `non-negotiable`
  legal gates, not configurable options.
- **Use NAPPI/barcode scanning as the backbone** linking accuracy checking, stock
  control, claims and (future) authenticity verification - one scan, multiple
  controls.
- **Treat the scheduled-substances register as structured data**, enabling audit
  and feeding the patient medication record.

## Open questions

- ⚠️ UNVERIFIED: exact **SA serialisation / track-and-trace mandate status**.
  NAPPI is established for pricing/claims; whether SAHPRA mandates item-level
  serialisation à la EU FMD is not confirmed (primary regs 403 on 2026-06-13).
- Precise **SA cold-chain documentation requirements for retail pharmacy and for
  home delivery** of fridge lines: needs the SAPC GPP cold-storage rules
  verbatim.
- How are **Schedule 5/6 registers** kept in modern SA retail systems (paper vs
  electronic) and what is accepted by SAHPRA inspectors?

## See also

- [[dispensing-process-steps]] — record-keeping and intake/validation
- [[error-prevention-and-safety]] — barcode scanning and serialisation as controls
- [[clinical-checks-and-mtm]] — cold chain for pharmacist-administered vaccines
- [[src-disp-coldchain-who-ashp]] · [[src-disp-sahpra-scheduling]] · [[src-disp-gs1-serialisation]] · [[src-disp-sapc-gpp-manual]]
