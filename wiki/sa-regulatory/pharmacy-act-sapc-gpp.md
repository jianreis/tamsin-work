---
type: wiki
title: "Pharmacy Act, SAPC, Good Pharmacy Practice & dispensing doctors"
domain: sa-regulatory
status: draft
confidence: high
tags: [domain/regulatory, journey/dispense, journey/validate, region/za]
sources: [src-reg-pharmacy-act-53-1974, src-reg-gpp-rules-sapc, src-reg-affordable-medicines-concourt-2006, src-reg-medicines-act-101-1965]
created: "2026-06-13"
updated: "2026-06-13"
---

# Pharmacy Act 53 of 1974, SAPC & Good Pharmacy Practice

The **Pharmacy Act 53 of 1974** establishes the **South African Pharmacy Council
(SAPC)** and governs who may practise pharmacy, how pharmacies are owned/licensed,
and the obligatory **Good Pharmacy Practice (GPP)** standards
[[src-reg-pharmacy-act-53-1974]]. Where the Medicines Act controls *the medicine*,
the Pharmacy Act controls *the pharmacy and its people*.

## SAPC & pharmacy/person registration
- **SAPC** registers pharmacists, interns, pharmacist's assistants and pharmacy
  support personnel, and **records pharmacies** [[src-reg-pharmacy-act-53-1974]].
- A pharmacy must be **licensed by the NDoH Director-General** (Regulations Relating
  to the Ownership and Licensing of Pharmacies) **and recorded with SAPC**.
- Every pharmacy must have a **Responsible Pharmacist (RP)**. A pharmacy operating
  **without a pharmacist** risks losing its SAPC recording and DoH licence
  [[src-reg-pharmacy-act-53-1974]].

## Pharmacist's assistants & supervision
Categories: **learner basic → basic → learner post-basic → post-basic**. Learners
and basics work under the **direct personal supervision** of a pharmacist;
post-basics may work under **indirect** supervision (reg 12)
[[src-reg-pharmacy-act-53-1974]]. Supervision ratios: **no more than 3** assistants
under direct supervision, and **no more than 5** post-basic assistants under
indirect supervision, per pharmacist [[src-reg-pharmacy-act-53-1974]].

## Good Pharmacy Practice (GPP)
GPP is **obligatory** under **§35A** of the Pharmacy Act (and reg 20(1) Practice of
Pharmacy + reg 7(a) Ownership/Licensing) [[src-reg-pharmacy-act-53-1974]]. SAPC
publishes the binding GPP rules/manual covering professional standards for
**premises, services, human resources and management** [[src-reg-gpp-rules-sapc]].
Relevant to scripting:
- **Dispensing** must be done **by or under the personal supervision of a
  pharmacist**; patient **counselling** on safe/effective use is required.
- **Cold chain:** thermolabile products identified on receipt, stored per written
  instructions, **temperature monitored and recorded twice daily**; controlled-temp
  areas need recorders maintaining the whole area in range [[src-reg-gpp-rules-sapc]].
- RP and owner are **jointly responsible** for GPP compliance; breaches trigger
  enforcement.

## Dispensing doctors (§22C(1)(a))
A medical practitioner/dentist/nurse may **dispense** (not merely prescribe) only
with a **§22C(1)(a) licence** from the Director-General, after completing a
**SAPC-accredited dispensing course** [[src-reg-medicines-act-101-1965]]. The
Constitutional Court (**Affordable Medicines Trust, 2006**) upheld this licensing
requirement as a valid regulation of the profession
[[src-reg-affordable-medicines-concourt-2006]]. This is the legal basis for keeping
**prescribing and dispensing functionally separate** unless a licence bridges them.

## Design implications / constraints
- **A pharmacist must remain in the loop for dispensing.** An e-script can be
  generated and routed digitally, but the *dispensing act* and the *clinical check
  / counselling* must be performed by (or under direct supervision of) a registered
  pharmacist. Fully-autonomous dispensing of S2+ without a pharmacist is
  🔮 requires-reform.
- **Supervision ratios constrain automation scale.** A high-throughput central
  fill / robotic model still needs enough supervising pharmacists to satisfy the
  GPP supervision ratios — design the staffing model around this, not around the
  machine's capacity.
- **Counselling is a mandated touchpoint, not an optional UX nicety.** The future
  journey must include a real counselling channel (in-person, video, or
  pharmacist-chat) — especially for first fills and high-risk medicines.
- **Cold chain is auditable.** Any delivery/locker/courier concept for
  fridge-line medicines must carry temperature monitoring and records that satisfy
  GPP. See [[courier-online-pharmacy-rules]].
- **The legal "pharmacy" entity anchors everything.** Branded app fronts must map
  to a licensed, recorded pharmacy with a named RP.

## Open questions
- Exact current GPP rule numbering for tele-pharmacy / remote supervision (does SAPC
  yet permit a pharmacist to supervise dispensing remotely?) — ⚠️ UNVERIFIED;
  central to any "central fill + local counselling" model.

## See also
- [[medicines-act-scheduling]] · [[sahpra-overview]] · [[prescription-requirements-repeats]]
- [[courier-online-pharmacy-rules]] · [[e-prescription-telehealth-popia]]
