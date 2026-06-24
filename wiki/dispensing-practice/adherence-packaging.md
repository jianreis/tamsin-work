---
type: wiki
title: "Adherence packaging & dose administration aids"
domain: dispensing-practice
status: draft
confidence: high
tags: [domain/dispensing, topic/adherence, topic/chronic, journey/adhere, journey/refill, region/global, region/za]
sources: [src-disp-conn-packaging-meta, src-disp-daa-systematic-review, src-disp-sapc-gpp-manual, src-disp-teachback-ahrq, src-disp-mtm-five-elements]
created: "2026-06-13"
updated: "2026-06-17"
---

# Adherence packaging & dose administration aids

Roughly half of patients on long-term therapy do not take medicines as
prescribed, and **non-adherence is one of the largest avoidable drivers of poor
outcomes and wasted spend** in chronic care. Packaging medicines so the right
dose is obvious at the right time is one of the few adherence interventions with
strong meta-analytic support, and it maps directly onto Dis-Chem's
**[[src-dc-packmymeds|PackMyMeds]]** chronic-repeat concept.

## What dose administration aids are

**Dose administration aids (DAAs)** consolidate a patient's medicines into a
time/date-organised format. They take the form of **compartmentalised pill
boxes, automated dispensing devices, blister packs and sachet packets**
[[src-disp-daa-systematic-review]]. **Multi-dose packaging** goes further than a
single blister: it groups **all the medicines due at one dosing time** into a
single labelled compartment (e.g. "Mon AM"), so a patient on six chronic
medicines manages one pack, not six bottles.

DAAs target **unintentional non-adherence** - forgetfulness and
regimen complexity - not **intentional** non-adherence driven by beliefs, side
effects or cost [[src-disp-daa-systematic-review]]. The latter needs counselling
and behavioural support (see [[counselling-and-health-literacy]]), so packaging
is necessary but not sufficient.

## The evidence

The pivotal meta-analysis (Conn et al.) pooled **52 reports across ~22,858
subjects** and found packaging interventions improve adherence with an overall
standardised mean difference of **~0.593**, consistent with **71% adherence in
treatment groups vs 63% in controls** [[src-disp-conn-packaging-meta]]. Two
findings are directly actionable:

- **Blister packs were the most effective format** (effect size ~0.802), much
  stronger than loose pill boxes (~0.384) [[src-disp-conn-packaging-meta]].
- Interventions were **most effective when delivered in pharmacies**
  [[src-disp-conn-packaging-meta]]: the pharmacy is the right channel, and
  packaging plus pharmacist contact beats packaging alone.

Component studies link packaging to **hard clinical outcomes**: calendar-blister
packaging reduced blood pressure in hypertensives and HbA1c in poorly controlled
diabetics [[src-disp-conn-packaging-meta]]. One important caveat: benefit was
**smaller in older patients and those with cognitive impairment**
[[src-disp-conn-packaging-meta]], the group often targeted, which implies
packaging should be paired with carer involvement and follow-up, not deployed in
isolation.

## SA context and PackMyMeds

SA's GPP framework explicitly contemplates this model: **Board Notice 172 of
2019 governs Unit Dose Dispensing** [[src-disp-sapc-gpp-manual]], giving a
regulatory basis for multi-dose/unit-dose adherence packaging. Dis-Chem's
**PackMyMeds** pre-packs chronic repeats at the nearest store with SMS/WhatsApp
reminders for collection or delivery [[src-dc-packmymeds]], operationally an
adherence-packaging-plus-reminder service for the exact chronic-polypharmacy
population the evidence favours. Layering **MTM** (annual review, follow-up)
onto it would convert a logistics service into a clinical one
[[src-disp-mtm-five-elements]].

## Design implications

- **Default chronic polypharmacy patients to multi-dose blister packs**, not
  loose dispensing: the format with the strongest evidence
  [[src-disp-conn-packaging-meta]], and already lawful under SA unit-dose rules
  [[src-disp-sapc-gpp-manual]].
- **Pair packaging with pharmacist contact and reminders.** The evidence rewards
  pharmacy-delivered, contact-rich interventions; a reminder SMS/WhatsApp (the
  PackMyMeds pattern) plus periodic teach-back review is the high-value combo.
- **Segment by adherence cause.** Use packaging for forgetfulness/complexity;
  route belief- or side-effect-driven non-adherence to counselling/MTM instead.
- **Design explicitly for older / cognitively impaired patients**: include
  carer access, larger-print labels, and follow-up, since packaging alone helps
  them least.
- **Capture adherence data.** A future-state system can infer adherence from
  refill timing and pack reorders, triggering pharmacist outreach when gaps
  appear and so closing the MTM loop.

## Open questions

- ⚠️ UNVERIFIED - **PackMyMeds clinical/adherence outcomes.** It is framed as a
  reminder + pre-pack service [[src-dc-packmymeds]]; whether it uses true
  multi-dose blister packaging (vs original-pack pre-picking) and whether
  Dis-Chem measures adherence outcomes is not established (company marketing,
  Tier B).
- Are SA medical schemes / PMBs **funding adherence packaging or a dispensing fee
  for it**? Reimbursement determines viability at scale (see
  `wiki/medical-schemes/`).
- Real-world **adherence-packaging cost** vs original-pack dispensing in SA, and
  the labour model (pharmacist vs assistant vs automation) for packing.

## See also

- [[clinical-checks-and-mtm]] — MTM for the chronic polypharmacy population
- [[counselling-and-health-literacy]] — addressing intentional non-adherence
- [[dispensing-process-steps]] — packaging within preparation/labelling
- [[src-dc-packmymeds|PackMyMeds (Dis-Chem)]] · [[src-disp-conn-packaging-meta]] · [[src-disp-daa-systematic-review]]
