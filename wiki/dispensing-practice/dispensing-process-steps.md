---
type: wiki
title: "The dispensing process: end-to-end best-practice workflow"
domain: dispensing-practice
status: draft
confidence: high
tags: [domain/dispensing, journey/dispense, journey/validate, topic/trust-safety, region/global, region/za]
sources: [src-disp-fipwho-gpp, src-disp-msh-dispensing-cycle, src-disp-sapc-gpp-manual, src-disp-who-medication-without-harm, src-disp-barcode-nejm, src-disp-mtm-five-elements, src-disp-teachback-ahrq]
created: "2026-06-13"
updated: "2026-06-13"
---

# The dispensing process: end-to-end best-practice workflow

Dispensing is not "handing over a box". Global Good Pharmacy Practice (GPP)
treats it as a **defined clinical-operational process** in which a pharmacist
takes professional responsibility for converting a prescription into a safe,
understood supply of medicine. The goal, in the durable MSH formulation, is to
deliver "the right medicine, to the right patient, in the correct dosage and
quantity, with clear instructions, and in a package that maintains the potency
of the medicine" [[src-disp-msh-dispensing-cycle]]. This page sets out the
canonical step sequence and the "rights" that govern it — the spine that every
future-state scripting blueprint should be defensible against.

## The process, step by step

Synthesising the MSH dispensing cycle [[src-disp-msh-dispensing-cycle]], the
Joint FIP/WHO GPP standard [[src-disp-fipwho-gpp]] and South Africa's binding
SAPC GPP rules [[src-disp-sapc-gpp-manual]], the best-practice workflow is:

1. **Prescription intake & legal validation.** Receive the prescription (paper
   or electronic) and confirm it is valid: a legible, authorised prescriber; a
   real, identifiable patient; and a lawful item for the channel. Scheduling law
   is a hard gate — under SA's Medicines Act, Schedule 3–6 items need a valid
   prescription and Schedule 2–6 may only be supplied by a pharmacist or a
   supervised assistant [[src-disp-sapc-gpp-manual]]. SAPC frames this as
   **Phase 1: interpretation and evaluation of the prescription**
   [[src-disp-sapc-gpp-manual]].

2. **Clinical / therapeutic review (screening).** Before supply, the pharmacist
   assesses the prescription on its **therapeutic, social, economic and legal**
   merits [[src-disp-fipwho-gpp]]: correct drug for the indication, dose and
   frequency appropriate for the patient, no contraindication, and screening for
   drug–drug, drug–disease and drug–allergy interactions against the patient's
   full medication record [[src-disp-mtm-five-elements]]. See
   [[clinical-checks-and-mtm]] for the detail of this clinical layer.

3. **Preparation & labelling.** Select the correct product (right strength, form
   and quantity), prepare/repackage as needed, and apply a clear, accurate label
   with the patient name, drug, strength, directions, quantity, date and
   warnings — SAPC **Phase 2: preparation and labelling** [[src-disp-sapc-gpp-manual]].
   Barcode/NAPPI verification at product selection is an evidence-based control
   here (see step 4).

4. **Independent accuracy check.** A best-practice safeguard is a **final check
   independent of the person who assembled the order** — ideally a second
   pharmacist, or at minimum a structured self-check against the prescription.
   Barcode scanning verifies the "five rights" electronically and reduces
   selection error [[src-disp-barcode-nejm]]; for high-alert medicines a true
   independent double-check is warranted (see [[error-prevention-and-safety]]).

5. **Patient handover & counselling.** Supply to the patient with the
   information and instructions they need to use the medicine safely — SAPC
   **Phase 3: provision of information and instructions** [[src-disp-sapc-gpp-manual]].
   Confirm understanding using **teach-back** rather than "do you understand?"
   [[src-disp-teachback-ahrq]]. See [[counselling-and-health-literacy]].

6. **Record-keeping.** Record the dispensing action in the patient medication
   record and, for scheduled substances, the statutory register
   [[src-disp-sapc-gpp-manual]]. Documentation and follow-up is also the fifth
   element of MTM [[src-disp-mtm-five-elements]] and the evidentiary backbone for
   continuity of care and audit.

These steps are sequential but not strictly linear: a clinical query at step 2
can loop back to the prescriber, and an accuracy fail at step 4 returns to
step 3.

## The "rights" of dispensing

The discipline is encoded in the **"rights"** — a checklist the workflow must
satisfy at the point of handover. The classic **five rights** are *right
patient, right drug, right dose, right route, right time*; WHO endorses the
"rights" as a core countermeasure to medication error
[[src-disp-who-medication-without-harm]]. Best practice extends these to include
**right documentation** (record the action), **right indication** (the medicine
matches the diagnosis), and **right information/counselling** (the patient knows
how to use it) [[src-disp-msh-dispensing-cycle]]. Barcode verification operationalises
several rights at once at the point of selection [[src-disp-barcode-nejm]].

## Why the environment matters

Errors cluster where the system is weak, not only where individuals are careless.
WHO attributes medication error to "weak medication systems and human factors
such as fatigue, poor environmental conditions or staff shortages"
[[src-disp-who-medication-without-harm]]. A best-practice dispensary therefore
designs for **low distraction, adequate space and lighting, organised stock, and
manageable workload** [[src-disp-msh-dispensing-cycle]] — a direct cue for the
physical and digital service blueprint.

## Design implications

- **Model the journey as six explicit stages, not one "dispense" box.** A
  future-state scripting blueprint should surface intake/validation, clinical
  review, preparation/labelling, independent check, handover/counselling and
  record-keeping as distinct backstage steps with their own owners and SLAs.
- **Make the clinical review a first-class step, even in fast/remote flows.**
  Any e-prescription or PackMyMeds-style refill must still route through a
  pharmacist clinical check — design the system so this cannot be skipped under
  volume pressure.
- **Build the "rights" into the interface.** Barcode/NAPPI scan at selection,
  forced confirmation prompts for high-alert items, and a structured independent
  check should be system-enforced rather than relying on memory.
- **Teach-back is a designable interaction.** Whether in-store or via
  WhatsApp/video, the handover step should prompt confirmation of understanding,
  not just delivery of a leaflet.
- **Record-keeping is continuity-of-care infrastructure**, not bureaucracy — the
  patient medication record built here feeds adherence, refills and MTM.

## Open questions

- ⚠️ UNVERIFIED — the **exact wording and numbering of SAPC GPP Rule 2.7** (the
  dispensing phases) is drawn from search extracts because pharmcouncil.co.za and
  WHO PDFs returned HTTP 403 on 2026-06-13. The phase structure is corroborated
  across SAPC and academic sources but the verbatim rule text should be confirmed
  from the GPP manual PDF directly.
- Does SA GPP **mandate an independent second check** for routine retail
  dispensing, or only recommend it / reserve it for high-risk items? Needs the
  primary GPP manual.
- How is the **independent check** preserved when a single pharmacist works a
  small store (common in SA) — what compensating controls (barcode, software
  lock) are accepted?

## See also

- [[clinical-checks-and-mtm]] — the clinical/therapeutic review layer
- [[error-prevention-and-safety]] — the accuracy-check and safety layer
- [[counselling-and-health-literacy]] — the handover/counselling layer
- [[inventory-coldchain-controlled]] — stock, scheduling and storage controls
- [[adherence-packaging]] — preparation/packaging for chronic patients
- [[src-disp-fipwho-gpp]] · [[src-disp-msh-dispensing-cycle]] · [[src-disp-sapc-gpp-manual]]
