---
type: wiki
title: "Dispensing error prevention & medication safety"
domain: dispensing-practice
status: draft
confidence: high
tags: [domain/dispensing, topic/trust-safety, topic/automation, journey/dispense, journey/validate, region/global]
sources: [src-disp-who-medication-without-harm, src-disp-lasa-tallman, src-disp-barcode-nejm, src-disp-ismp-high-alert, src-disp-msh-dispensing-cycle, src-disp-gs1-serialisation]
created: "2026-06-13"
updated: "2026-06-13"
---

# Dispensing error prevention & medication safety

Medication harm is one of the largest avoidable harms in health care: WHO
estimates the **global cost of medication errors at US$42 billion annually** and
that medication harm is **around 50% of all preventable harm** in medical care
[[src-disp-who-medication-without-harm]]. WHO's **Medication Without Harm**
challenge (2017) set the goal of **halving severe avoidable medication-related
harm** [[src-disp-who-medication-without-harm]]. Error is a *system*
property: it arises "when weak medication systems and human factors such as
fatigue, poor environmental conditions or staff shortages affect the safety of
the medication-use process" [[src-disp-who-medication-without-harm]]. Safe
dispensing is therefore designed, not exhorted.

## Types of dispensing error

Drawing on MSH and WHO [[src-disp-msh-dispensing-cycle]]
[[src-disp-who-medication-without-harm]], the common failure modes are:

- **Wrong drug**: often a look-alike/sound-alike (LASA) substitution.
- **Wrong strength / dose / quantity**: selection or calculation error.
- **Wrong form** (e.g. immediate- vs extended-release).
- **Wrong patient**: mismatched bag/label at handover.
- **Labelling/instruction error**: incorrect or ambiguous directions.
- **Omission / missed interaction**: failure to catch a clinical problem (see
  [[clinical-checks-and-mtm]]).

Root causes cluster around **LASA names, illegible/ambiguous prescriptions,
distraction, high workload and inadequate environment**
[[src-disp-msh-dispensing-cycle]].

## Look-alike / sound-alike (LASA)

LASA confusions are a leading, well-characterised cause of dispensing error,
accounting for an estimated **6.2%–14.7% of all medication errors** (some
estimates up to ~25%) [[src-disp-lasa-tallman]]. They arise from visually similar
packaging and phonetically similar names. Evidence-based countermeasures are
**system-level** [[src-disp-lasa-tallman]]:

- **Tall Man lettering** — selective capitalisation to highlight differences
  (e.g. *hydrALAZINE* vs *hydrOXYzine*), recommended by both ISMP and FDA.
- **Physical separation** of confusable pairs and **brand-labelled bins/shelves**.
- **Dual brand + generic display** on labels and screens.
- **Barcode verification** from stocking through dispensing.
- **Indication on the prescription** — including the reason for use materially
  reduces mis-hearing/mis-reading of a drug name.

## Barcode / NAPPI scanning

Barcode verification at the point of selection electronically checks the "five
rights" and is one of the strongest available controls: the landmark NEJM study
found substantial reductions in errors after barcode implementation
[[src-disp-barcode-nejm]], and ASHP recommends barcode verification **across
receiving, preparation and dispensing** [[src-disp-barcode-nejm]]. In SA, the
**NAPPI code** is the national product identifier scannable at dispense. Two
design cautions: (1) a barcode system **surfaces near-misses that were
previously invisible**, so an early rise in reported catches is expected and
healthy [[src-disp-barcode-nejm]]; (2) **no system hits 100% scan rates** —
workarounds (smudged labels, un-updated barcodes, overridden warnings) must be
designed against [[src-disp-barcode-nejm]]. Serialisation/GS1 DataMatrix extends
scanning to authenticity verification (see
[[inventory-coldchain-controlled]] and [[src-disp-gs1-serialisation]]).

## Independent double-check

For routine items a structured final check against the prescription is standard;
for **high-alert medications** a true **independent double-check** (a second
qualified person verifying independently, not just glancing) is the recognised
safeguard. High-alert classes — **insulin, anticoagulants, opioids,
chemotherapy** — cause disproportionately severe harm when dispensed in error
and warrant extra safeguards and enhanced counselling
[[src-disp-ismp-high-alert]]. The check is most effective when **independent of
the person who assembled the order**.

## Near-miss reporting & safety culture

A mature dispensary treats **near-misses (caught before reaching the patient) as
free lessons**. Best practice is a **non-punitive, just-culture reporting
system**: staff report errors and near-misses without fear, the data is analysed
for systemic causes, and fixes feed back into process and design. WHO's framing
of error as a systems property is the rationale [[src-disp-who-medication-without-harm]];
and as noted, **a rise in reported near-misses after introducing barcode/reporting
tools is a sign the system is working**, not failing [[src-disp-barcode-nejm]].

## Design implications

- **Engineer the rights into software.** Forced barcode/NAPPI scan at selection,
  Tall Man rendering on every drug-name display, hard confirmation prompts for
  high-alert items, and a system-locked independent-check step.
- **Design for the single-pharmacist store.** Where a second checker is
  unavailable, lean on barcode verification + software interlocks as compensating
  controls — and make this an explicit blueprint decision.
- **Surface, don't suppress, near-misses.** Build frictionless near-miss capture
  into the dispensing UI and expect the count to rise initially; treat that as a
  success metric, not a red flag.
- **Plan for workarounds.** Assume scanning will be bypassed under pressure;
  measure scan-compliance and design the path of least resistance to be the safe
  one (e.g. label printing gated on a successful scan).
- **High-alert medicines deserve a distinct journey lane** — extra check,
  enhanced counselling, tighter refill review.

## Open questions

- ⚠️ UNVERIFIED — **SA-specific dispensing-error rates** and whether SAPC
  mandates near-miss reporting / a specific incident system. Global figures
  (US$42bn, LASA %) are cited from WHO/ISMP extracts (primary PDFs 403 on
  2026-06-13); SA-specific prevalence not located.
- Is there a **national SA medication-error reporting system** (analogous to the
  UK NRLS), or is reporting purely intra-company at Dis-Chem?
- What share of SA retail dispensing already uses **barcode/NAPPI scan
  verification** at the point of dispense vs visual check only?

## See also

- [[dispensing-process-steps]] — the independent-check step in context
- [[clinical-checks-and-mtm]] — high-alert medicines and clinical screening
- [[inventory-coldchain-controlled]] — serialisation, scanning, controlled stock
- [[counselling-and-health-literacy]] — counselling as an error barrier
- [[src-disp-who-medication-without-harm]] · [[src-disp-lasa-tallman]] · [[src-disp-barcode-nejm]] · [[src-disp-ismp-high-alert]]
