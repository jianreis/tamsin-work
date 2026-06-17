---
type: wiki
title: "Clinical checks, pharmaceutical care & MTM — and the expanding scope of the pharmacist"
domain: dispensing-practice
status: draft
confidence: high
tags: [domain/dispensing, journey/validate, journey/adhere, topic/chronic, topic/telehealth, region/global, region/za]
sources: [src-disp-mtm-five-elements, src-disp-fipwho-gpp, src-disp-ismp-high-alert, src-disp-pimart-scope-sa, src-disp-who-medication-without-harm, src-disp-coldchain-who-ashp]
created: "2026-06-13"
updated: "2026-06-17"
---

# Clinical checks, pharmaceutical care & MTM

The clinical review is the step that distinguishes a pharmacy from a vending
machine. It is the pharmacist's professional judgement applied **before** supply:
is this the right therapy, for this patient, safely? Good Pharmacy Practice
requires that pharmacists "assess and evaluate all paper or electronic
prescriptions … considering the therapeutic, social, economic and legal aspects
of the prescribed indication(s) before supplying" [[src-disp-fipwho-gpp]]. This
page covers the clinical check itself, its formalisation as Medication Therapy
Management, and the rapidly **expanding clinical scope** of the pharmacist,
including the SA-specific PIMART development.

## What the clinical check screens for

A complete therapeutic review tests the prescription against the patient, not in
isolation. Best-practice checks include:

- **Right drug for the indication** and **appropriate dose/frequency/duration**
  for the patient's age, weight, renal/hepatic function.
- **Drug–drug interactions (DDIs)**, the pharmacist's signature contribution.
  Because the pharmacist sees the patient's **entire therapy across multiple
  prescribers and OTC products**, they can catch interactions that any single
  prescriber cannot [[src-disp-mtm-five-elements]]. The review extends to
  **drug–disease (contraindication), drug–allergy and drug–food** interactions
  [[src-disp-mtm-five-elements]].
- **Therapeutic duplication, unusual dosages and effectiveness concerns**
  [[src-disp-mtm-five-elements]].
- **High-alert medicines.** A subset of drugs - insulin and oral hypoglycaemics,
  anticoagulants (warfarin, DOACs), opioids, chemotherapy/immunosuppressants -
  carry a heightened risk of serious harm if mis-prescribed or mis-taken, and
  warrant extra scrutiny and patient education at this step
  [[src-disp-ismp-high-alert]] (see [[error-prevention-and-safety]]).

The pharmacist does not just detect problems. They **recommend how to resolve or
monitor** them and, where needed, refer or contact the prescriber
[[src-disp-mtm-five-elements]]. This is the active core of **pharmaceutical
care**: taking responsibility for medication-related outcomes, not just supply.

## Medication Therapy Management (MTM)

MTM formalises the clinical role into a structured, repeatable service,
especially valuable for chronic, polypharmacy patients (the core PackMyMeds
population). It has **five core elements** [[src-disp-mtm-five-elements]]:

1. **Medication therapy review**: a systematic review of all the patient's
   medicines (prescription, OTC, supplements).
2. **Personal medication record**: a complete, shared medication list.
3. **Medication-related action plan**: patient-facing to-dos.
4. **Intervention and/or referral**: resolve problems or escalate.
5. **Documentation and follow-up**: close the loop and re-review.

DDI assessment should occur **at each MTM visit and during every dispensing
event** [[src-disp-mtm-five-elements]]; polypharmacy is also one of WHO's three
flagship medication-safety priority areas [[src-disp-who-medication-without-harm]].

## Expanded scope: from dispenser to clinician

Globally and in SA, the pharmacist's clinical scope is widening well beyond
dispensing, a structural trend a future-state experience should design *toward*,
not around.

- **Minor ailments schemes.** Pharmacists assess and treat self-limiting
  conditions (colds, hay fever, minor skin conditions), reducing GP load. SA
  community pharmacies already provide PHC services - **screening tests, family
  planning, emergency care for minor ailments** - to those who can pay
  [[src-disp-pimart-scope-sa]].
- **Vaccinations and point-of-care testing.** Pharmacist-administered
  immunisation, and POC testing/screening (BP, glucose, HbA1c, HIV), are
  established expanded services; SA's advanced service package explicitly
  includes **immunisation and comprehensive wellness screening**
  [[src-disp-pimart-scope-sa]]. Vaccines also pull cold-chain obligations into
  the pharmacy (see [[inventory-coldchain-controlled]] and
  [[src-disp-coldchain-who-ashp]]).
- **Pharmacist prescribing.** In SA, pharmacists who complete **Primary Care
  Drug Therapy (PCDT)** training hold a **s22A(15) permit** to diagnose and
  prescribe from an approved list [[src-disp-pimart-scope-sa]].
- **PIMART (SA, notable).** SAPC **Board Notice 101 of 2021** established
  **Pharmacist-Initiated Management of Antiretroviral Therapy**, letting trained,
  permitted pharmacists test for HIV and **prescribe and dispense ART for PrEP,
  PEP and first-line therapy** [[src-disp-pimart-scope-sa]]. After legal
  challenge by a private-doctor group, the **Supreme Court of Appeal dismissed
  the appeal on 9 October 2025**, but as of **June 2026 no pharmacist was yet
  permitted to provide PIMART in practice**, which shows the lag between legal
  authority and operational rollout [[src-disp-pimart-scope-sa]].

## Design implications

- **Treat the clinical check as the system's safety kernel.** Even in fast
  e-prescription and auto-refill flows, the DDI/contraindication/high-alert
  screen must run against a unified patient medication record: design for a
  single, longitudinal record, not per-transaction views.
- **Polypharmacy chronic patients are the MTM sweet spot.** A future-state
  scripting experience can layer MTM (annual review, action plan, follow-up
  reminders) onto PackMyMeds-style chronic refills, with high clinical value and
  a strong adherence link.
- **Design for expanded scope as a growth vector.** Build the experience so that
  vaccinations, minor-ailment consults, POC testing and (when operational)
  PIMART/PCDT prescribing slot into the same patient record and journey, turning
  the pharmacy into a primary-care node.
- **Anticipate the legal/operational lag.** Where a service depends on scope
  reform (e.g. PIMART), flag it `🔮 requires-reform` and design the rest of the
  journey to work without it.

## Open questions

- ⚠️ UNVERIFIED - **PIMART operational status beyond June 2026.** The SCA cleared
  the legal path (Oct 2025) but rollout was stalled at retrieval; status should
  be re-checked before any PIMART-dependent design. (Source extracts only;
  primary court/SAPC PDFs returned 403 on 2026-06-13.)
- What **clinical decision support** (interaction databases, dosing tools) is
  standard in SA retail dispensing software, and how good is its SA-specific
  content (NAPPI-linked)?
- Are SA pharmacists **reimbursed** for MTM / clinical interventions, or only for
  dispensing? Reimbursement shapes whether MTM is viable at scale (see
  `wiki/medical-schemes/`).
- Scope of **pharmacist vaccination** authority in SA specifically (which
  vaccines, which training), not fully resolved in available sources.

## See also

- [[dispensing-process-steps]] — where the clinical check sits in the workflow
- [[error-prevention-and-safety]] — high-alert medicines and safeguards
- [[adherence-packaging]] — MTM for chronic polypharmacy patients
- [[inventory-coldchain-controlled]] — cold chain for vaccines
- [[src-disp-mtm-five-elements]] · [[src-disp-pimart-scope-sa]] · [[src-disp-fipwho-gpp]]
