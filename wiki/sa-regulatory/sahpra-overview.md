---
type: wiki
title: "SAHPRA — mandate, registration, licensing & online-selling stance"
domain: sa-regulatory
status: draft
confidence: high
tags: [domain/regulatory, topic/trust-safety, topic/scheduling, region/za]
sources: [src-reg-sahpra-licensing, src-reg-medicines-act-101-1965, src-reg-online-pharmacy-study-2024, src-reg-nhi-act-2023]
created: "2026-06-13"
updated: "2026-06-13"
---

# SAHPRA — the medicines regulator

The **South African Health Products Regulatory Authority (SAHPRA)** is the
statutory regulator created under the Medicines Act, operational from **2018**
(replacing the Medicines Control Council). It regulates **medicines, medical
devices, IVDs and complementary/biological medicines** for quality, safety and
efficacy [[src-reg-sahpra-licensing]].

## Core mandate
1. **Register medicines (§14).** No health product may be legally marketed,
   distributed or sold in SA without prior SAHPRA registration
   [[src-reg-sahpra-licensing]] [[src-reg-medicines-act-101-1965]]. Unregistered
   products are sold only under narrow exceptions (e.g. §21 named-patient access).
2. **License the supply chain (§22C(1)(b)).** SAHPRA's Pharma Licensing unit issues
   licences to **manufacturers, importers, exporters, wholesalers and
   distributors**, on **GMP/GWDP** conditions [[src-reg-sahpra-licensing]].
3. **Schedule substances.** SAHPRA classifies substances into S0–S8 and publishes
   the Consolidated Schedules (see [[medicines-act-scheduling]]).
4. **Pharmacovigilance & enforcement.** Recalls, adverse-event monitoring, and
   action against unregistered/illegal supply.

Note: **§22C(1)(a) dispensing licences** (incl. dispensing doctors) and **pharmacy
premises licences** are issued by the **NDoH Director-General** (with SAPC
recording), not SAHPRA — a common point of confusion. See [[pharmacy-act-sapc-gpp]].

## Stance on online / distance selling
SAHPRA's position (reinforced by a 2024 peer-reviewed audit) is that **online
medicine sale is permitted only where**: (a) the medicine is **SAHPRA-registered**;
and (b) the website is **linked to a physical community/institutional pharmacy that
is NDoH-licensed and SAPC-recorded**, with scheduled medicines sold by/under a
pharmacist [[src-reg-sahpra-licensing]] [[src-reg-online-pharmacy-study-2024]].
Unregistered "online pharmacies" that ship S3+ without a prescription are illegal;
SAHPRA and SAPC have taken **enforcement action** (e.g. compounded GLP-1 weight-loss
medicines, 2026) [[src-reg-sahpra-licensing]].

## In flux
- The **NHI Act 20 of 2023** (signed 15 May 2024, not yet in force) brings the NHI
  Fund into Pricing-Committee appointments but does not yet restructure SAHPRA's
  core functions [[src-reg-nhi-act-2023]]. See [[sep-dispensing-fee]].

## Design implications / constraints
- **Registration gate on the catalogue.** A scripting/ordering experience may only
  surface and dispense **SAHPRA-registered products**; the catalogue should
  validate against the SAHPRA register and hide/flag unregistered items.
- **The selling entity must be a licensed pharmacy.** An app, WhatsApp bot or web
  storefront is a *channel*; the legal seller must be a **DoH-licensed,
  SAPC-recorded pharmacy** with a pharmacist. A pure-tech intermediary cannot itself
  sell scheduled medicines — 🔮 requires-reform if the design assumes a
  non-pharmacy platform as the seller of record.
- **Distinguish the two licence streams.** Supply-chain (SAHPRA §22C(1)(b)) vs
  dispensing/premises (NDoH + SAPC). A multi-site / dark-store / courier fulfilment
  model must hold the right licence for each node.
- **Anti-illegitimacy as a trust feature.** Because illegal online sellers are a
  known SA problem, surfacing "SAHPRA-registered + licensed pharmacy" provenance can
  be a differentiating trust signal.

## Open questions
- Whether SAHPRA has published a *dedicated* e-pharmacy / distance-selling guideline
  (vs general guidance) — search surfaced general guidelines (SAHPGL-HPA-07) but no
  standalone online-pharmacy code; logged ⚠️ UNVERIFIED.

## See also
- [[medicines-act-scheduling]] · [[pharmacy-act-sapc-gpp]] · [[courier-online-pharmacy-rules]]
- [[sep-dispensing-fee]]
