---
type: index
title: "SA regulatory — index"
domain: sa-regulatory
updated: "2026-06-13"
tags: [index, domain/regulatory]
status: draft
---

# South African pharmacy regulation

The **regulatory ground truth** — the non-negotiable legal constraints any
future-state scripting design must respect. Covers the Medicines Act & scheduling,
SAHPRA, SAPC/Pharmacy Act & Good Pharmacy Practice, prescription validity & repeats,
generic substitution, SEP & dispensing fees, e-prescriptions/telehealth/POPIA, and
courier/online pharmacy rules. Each page ends with **Design implications /
constraints**; items needing law/rule change are flagged 🔮 requires-reform.

> Sourcing note (2026-06-13): regulator/legislation PDFs (SAHPRA, SAFLII, gov.za,
> faolex, PMC) returned HTTP 403 to the fetch tool this session. Claims are
> triangulated across multiple independent web-search extractions of the primary
> texts plus Tier-B legal commentary; verbatim-confirmation gaps are flagged
> ⚠️ UNVERIFIED and logged in [[open-questions]].

## Pages
- [[medicines-act-scheduling]] — Medicines Act 101/1965; schedules S0–S8; who may
  prescribe/sell/dispense; S6 30-day/no-repeat rule. (§22A, §22C)
- [[sahpra-overview]] — SAHPRA mandate, medicine registration (§14), supply-chain
  licensing (§22C(1)(b)), stance on online/distance selling.
- [[pharmacy-act-sapc-gpp]] — Pharmacy Act 53/1974, SAPC, pharmacist's assistants &
  supervision, Good Pharmacy Practice (§35A), dispensing doctors (§22C(1)(a)).
- [[prescription-requirements-repeats]] — Reg 33 valid-prescription content,
  validity/repeats by schedule, generic substitution (§22F), emergency supply,
  who counsels.
- [[sep-dispensing-fee]] — Single Exit Price (§22G), logistics fee, regulated
  dispensing-fee bands, annual SEPA, NHI in flux.
- [[e-prescription-telehealth-popia]] — ECTA AES e-prescriptions, HPCSA telehealth
  (Booklet 10, Dec 2021), POPIA health-data obligations.
- [[courier-online-pharmacy-rules]] — courier/online/distance-selling licensing,
  who may deliver scheduled medicines, cold chain, app/WhatsApp ordering.

## Most design-critical constraints (cross-page)
1. S3+ medicines gate behind a **valid prescription**; the **schedule is the master
   switch** for the whole flow.
2. A **registered pharmacist** must validate and (directly supervise) dispensing of
   S2+; **counselling is mandatory** (GPP).
3. The legal seller of scheduled medicines is always a **DoH-licensed, SAPC-recorded
   pharmacy** — an app is only a channel.
4. **S6 = no repeats, 30-day cap, register**; S2–S5 repeats ≤ 6 months (S4 needs a
   stated repeat count).
5. A true paperless e-script needs an **ECTA Advanced Electronic Signature**;
   telehealth-originated scripts are now allowed (HPCSA, post-COVID).
6. **Medicine price is fixed (SEP)** — no discounting; compete on service. Pricing
   can be shown transparently (SEP + dispensing fee + VAT).
7. **POPIA** governs all prescription/health data as "special personal information".
