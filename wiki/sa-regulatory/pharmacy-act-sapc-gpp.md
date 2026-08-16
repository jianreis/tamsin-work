---
type: wiki
title: "Pharmacy Act, SAPC, Good Pharmacy Practice & dispensing doctors"
domain: sa-regulatory
status: draft
confidence: high
tags: [domain/regulatory, journey/dispense, journey/validate, region/za]
sources: [src-reg-pharmacy-act-53-1974, src-reg-gpp-rules-sapc, src-reg-affordable-medicines-concourt-2006, src-reg-medicines-act-101-1965]
created: "2026-06-13"
updated: "2026-06-17"
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
Categories: **learner basic -> basic -> learner post-basic -> post-basic**. Learners
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

## Handover away from the pharmacy - the unresolved conflict

Researched 2026-08-16 for [[wiki/concepts/remote-collection-points]]. **No SA
provision found addresses handover at a remote collection point in either
direction** - none uses "collection point", "locker" or "pick-up point". The
question turns on **Medicines Act s22A(5)**, which restricts the *sale* of
scheduled substances to a pharmacist or assistant under personal supervision, and
on where the sale is deemed to conclude [[src-reg-handover-medicines-act-s22a-sale]].
Nothing found resolves it.

Two Council instruments point opposite ways:

- **Permissive:** the **GPP mail and courier standard** contemplates supply
  "to a patient or to a person who receives medicine on behalf of the patient",
  conditioned only on protective packaging, delay detection, a report-back system
  and a PIL - **no pharmacist presence and no counselling at receipt**. GPP
  separately contemplates a locked, unattended prescription receiving box
  [[src-reg-gpp-courier-mail-delivery-standard]].
- **Restrictive, and now verified as an express prohibition:** **GPP Rule
  1.9.3(b)** - *"The installation and the location of the ADU must be such that
  medicines and medical devices are not accessed and/or received directly by the
  patient or his or her caregiver or agent."* Rule 1.9.4(a) reserves phases 1 and
  3 of dispensing to a pharmacist or pharmacy support personnel, and 1.9.4(d)
  requires in-person signature. Rule 1.9's purpose covers **community** pharmacies
  expressly, so it is not institutional-only
  [[src-reg-gpp-consolidated-verified]].
- **Restrictive beyond automation: Rule 2.7.5(d)** - in the absence of an adult
  over 14 to receive delivered medicine, it must be returned to the pharmacy. A
  locker is not an adult [[src-reg-gpp-consolidated-verified]].
- **Permissive, and the route through: Rule 1.10, the drive-through standard**
  (BN 12 of 2006). A pharmacy may serve a patient through **a window or other
  opening in its exterior wall**, without the patient entering, given two
  porticos, **two-way visual and auditory communication**, and counselling
  delivered without losing that contact. Wall-side service is already lawful; only
  the unattended version is not [[src-reg-gpp-consolidated-verified]].

Both are Council instruments, so the conflict reads as **requiring an SAPC
determination rather than statutory reform**, and Council has a demonstrated route
- minimum standards added to GPP by board notice
[[src-reg-sapc-unit-dose-dispensing-bn99]]. ⚠️ The UK needed **new legislation**
for the same question [[src-reg-uk-supervision-order-2025]], so the reform risk is
real. **Verified 2026-08-16** against the primary consolidated GPP PDF, archived at
`sources/pdfs/`. Rule numbers and wording above are quoted directly.

**On counselling, verified:** Rule 2.7.1.3.1(a) requires advising the patient or
their agent to be carried out by a pharmacist or other authorised person, with
**physical presence "preferred"** rather than required - so remote counselling is
not barred. Rule 2.7.5(a) nonetheless requires that all efforts be made to enable
face-to-face counselling, and 2.7.5(b) requires comprehensive written instructions
and a PIL where a non-pharmacist delivers [[src-reg-gpp-consolidated-verified]]. Remote counselling by a
named pharmacist therefore over-delivers against the courier standard, which
substitutes a leaflet.

## Design implications / constraints
- **A pharmacist must remain in the loop for dispensing.** An e-script can be
  generated and routed digitally, but the *dispensing act* and the *clinical check
  / counselling* must be performed by (or under direct supervision of) a registered
  pharmacist. Fully-autonomous dispensing of S2+ without a pharmacist is
  🔮 requires-reform.
- **Supervision ratios constrain automation scale.** A high-throughput central
  fill / robotic model still needs enough supervising pharmacists to satisfy the
  GPP supervision ratios. Design the staffing model around this, not around the
  machine's capacity.
- **Counselling is a mandated touchpoint, not an optional UX nicety.** The future
  journey must include a real counselling channel (in-person, video, or
  pharmacist-chat), especially for first fills and high-risk medicines.
- **Cold chain is auditable.** Any delivery/locker/courier concept for
  fridge-line medicines must carry temperature monitoring and records that satisfy
  GPP. See [[courier-online-pharmacy-rules]].
- **The legal "pharmacy" entity anchors everything.** Branded app fronts must map
  to a licensed, recorded pharmacy with a named RP.

## Open questions
- Exact current GPP rule numbering for tele-pharmacy / remote supervision (does SAPC
  yet permit a pharmacist to supervise dispensing remotely?) - ⚠️ UNVERIFIED;
  central to any "central fill + local counselling" model.

## See also
- [[medicines-act-scheduling]] · [[sahpra-overview]] · [[prescription-requirements-repeats]]
- [[courier-online-pharmacy-rules]] · [[e-prescription-telehealth-popia]]
