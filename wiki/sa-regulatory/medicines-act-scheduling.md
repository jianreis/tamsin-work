---
type: wiki
title: "Medicines Act & medicine scheduling (S0–S8)"
domain: sa-regulatory
status: draft
confidence: high
tags: [domain/regulatory, topic/scheduling, journey/validate, journey/dispense, region/za]
sources: [src-reg-medicines-act-101-1965, src-reg-consolidated-schedules-2025, src-reg-sahpra-scheduling-guideline, src-reg-affordable-medicines-concourt-2006]
created: "2026-06-13"
updated: "2026-06-17"
---

# Medicines Act & medicine scheduling (S0–S8)

The **Medicines and Related Substances Act 101 of 1965** is the backbone of SA
medicines control. It classifies every medicine/substance into a **schedule
(S0–S8)**, and the schedule dictates **where it can be sold, who can prescribe it,
who can sell/dispense it, and whether/how it can be repeated** [[src-reg-medicines-act-101-1965]].
The operative schedule list is SAHPRA's periodically-updated **Consolidated
Schedules** (latest 01 August 2025) [[src-reg-consolidated-schedules-2025]].
Section **22A** governs sale/prescribing of scheduled substances; the
constitutionally-upheld licensing of dispensers sits in **§22C**
[[src-reg-affordable-medicines-concourt-2006]].

## The schedules at a glance

| Sched | Meaning | Prescription? | Where / who sells | Key controls |
|---|---|---|---|---|
| **S0** | General sale | No | Any outlet (supermarket, dealer) | May advertise to public |
| **S1** | Pharmacist advice | No | Pharmacy only, via pharmacist | May advertise (S1 only) |
| **S2** | Pharmacist-initiated | No | Pharmacy only, pharmacist authorises | Record name + medicine + qty |
| **S3** | Prescription-only | Yes | Pharmacy on Rx (or §22C dispenser) | Repeats ≤ 6 months |
| **S4** | Prescription-only | Yes | Pharmacy on Rx | Repeats ≤ 6 months; prescriber must state # repeats |
| **S5** | Controlled, Rx-only | Yes | Pharmacy on Rx | Repeats ≤ 6 months; emergency = 48h supply |
| **S6** | Controlled (addictive) | Yes | Pharmacy on Rx | **No repeats; max 30-day supply**; strict register; emergency = 48h |
| **S7** | Prohibited (no medical use) | Permit only | — | Director-General permit; scientific use only |
| **S8** | Highly controlled, some use | Special permission | Named practitioner only | DG special permission per patient |

[[src-reg-consolidated-schedules-2025]] [[src-reg-sahpra-scheduling-guideline]]

## Who may prescribe / sell / dispense (§22A)
- **S2–S6** may be sold only by a medical practitioner, dentist, pharmacist, or a
  practitioner/nurse/other person registered under the **Health Professions Act
  1974**, acting within scope [[src-reg-medicines-act-101-1965]].
- **Nurses and other registered prescribers** may prescribe/supply S4 (and some S6)
  **only within their scope of practice**, for the approved indication, under
  SAHPRA-set conditions, and only if their own council has registered them as
  prescribers [[src-reg-sahpra-scheduling-guideline]].
- **Emergency supply by a pharmacist:** S2/S3/S4 on a non-recurring basis; S5/S6 up
  to a 48-hour quantity [[src-reg-medicines-act-101-1965]].
- **Dispensing vs prescribing are separated:** a doctor who wishes to *dispense*
  (not just prescribe) needs a **§22C(1)(a) dispensing licence**, upheld by the
  Constitutional Court [[src-reg-affordable-medicines-concourt-2006]]. See
  [[pharmacy-act-sapc-gpp]].

## S6 controlled substances - the strictest everyday tier
S6 (e.g. opioid analgesics) **cannot be repeated** (a new prescription is required
each time) and may be sold only if the **treatment course does not exceed 30
consecutive days**; a controlled register is mandatory
[[src-reg-medicines-act-101-1965]] [[src-reg-consolidated-schedules-2025]]. S7/S8
are essentially out of scope for retail scripting (permit / DG special permission).

## Design implications / constraints
- **The schedule is the master switch.** Any future scripting experience must
  resolve a medicine's *current* schedule (from the live SAHPRA Consolidated
  Schedules) before deciding the flow: S0–S2 can be a self-service / pharmacist-OTC
  path; **S3+ must gate behind a valid prescription**.
- **S6 needs a hard stop on repeats and a 30-day cap.** A digital refill engine
  must *block* automatic repeats for S6 and force a fresh prescriber interaction.
- **Prescriber identity must be schedule-aware.** The UI must confirm the prescriber
  is entitled to prescribe that schedule (e.g. a nurse-prescriber cannot script
  outside scope). 🔮 requires-reform if the design wants to let an AI/algorithm
  "prescribe" S3+ without a registered human prescriber, which is not currently
  lawful.
- **Scheduling is a moving target.** Substances are rescheduled by Gazette; the
  product catalogue must sync to the latest Consolidated Schedules, not hard-code.
- **Sale channel is constrained by schedule.** S0 anywhere; S1/S2 pharmacy-only via
  a pharmacist; this shapes which items a non-pharmacy app surface may sell.

## Open questions
- Exact verbatim §22A subsection wording (prescriber lists per schedule) needs
  confirmation against the gazetted Act text - logged ⚠️ UNVERIFIED.
- Whether independent nurse-prescriber scope has expanded under recent NDoH policy
  (PHC) - verify.

## See also
- [[sahpra-overview]] · [[pharmacy-act-sapc-gpp]] · [[prescription-requirements-repeats]]
- [[courier-online-pharmacy-rules]] · [[sep-dispensing-fee]]
