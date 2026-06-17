---
type: wiki
title: "UK — NHS EPS, NHS App, Pharmacy2U/LloydsDirect, Boots, Pharmacy First"
domain: global-benchmarks
status: draft
confidence: high
tags: [domain/global, region/global, journey/submit, journey/refill, journey/deliver, journey/validate, topic/e-prescription, topic/adherence, topic/acute, topic/trust-safety]
sources: [src-gbl-nhs-eps, src-gbl-nhs-app-prescriptions, src-gbl-pharmacy2u-lloydsdirect, src-gbl-pharmacy-first]
created: "2026-06-13"
updated: "2026-06-17"
---

# UK — a state-run e-prescription rail with a consumer app on top

England is the strongest benchmark for **infrastructure-led** scripting: a single
national electronic prescription rail (EPS), a free government app on top of it
(NHS App), a **nomination** model that routes scripts to the patient's chosen
pharmacy automatically, and a recent move (Pharmacy First) to use the pharmacy as
a clinical front door. For SA, which has fragmented e-prescribing and no national
rail, the UK shows what "good plumbing plus a good app" looks like, and the
nomination pattern is one of the most transferable ideas in this vault.

## The rail: NHS Electronic Prescription Service (EPS)

EPS is the national rail. A prescriber **creates and digitally signs** the script
in their clinical system; it is sent to the **NHS Spine**; a dispenser pulls it
down. The patient gets the script to a pharmacy in one of two ways
[[src-gbl-nhs-eps]]:

- **Nomination** — the patient nominates one community/internet pharmacy in
  advance, and all their scripts route there automatically. Prescribers are
  **barred from steering** patients to a particular pharmacy (anti-conflict).
- **Token** — a paper token (FP10SS) with a **scannable barcode** that pulls the
  electronic script down at *any* pharmacy.

**Over 95% of all prescriptions in England are now produced electronically**, after
a phased rollout whose national "Phase 4" began 18 November 2019 [[src-gbl-nhs-eps]].
The design principle worth taking is to **separate the rail (who carries the script)
from the choice (which pharmacy gets it)**, and make routing automatic once chosen.

## The consumer layer: NHS App

The NHS App is the patient-facing front end over EPS, and it is a mass-adoption
proof point. The flow: open prescriptions → order repeat items → request routes to
the GP for approval → if a pharmacy is nominated, the approved script flows via EPS
straight there → the app shows **real-time "Amazon-style" status** (ordered →
ready → collected/delivered) [[src-gbl-nhs-app-prescriptions]]. Adoption:
**>2.7m** people used the prescription feature in its first two months (Mar 2024);
repeat orders via the app rose **40% to 5.5m/month** (Apr 2025); the app passed
**>39 million registered users** and **67.8 million repeat prescriptions** ordered
in the year to Nov 2025 [[src-gbl-nhs-app-prescriptions]]. A July-2025 redesign made
in-app pharmacy nomination simpler, a reminder that **reducing nomination friction
is itself a growth lever**.

## Distance-selling pharmacies: Pharmacy2U / LloydsDirect (Echo)

The UK's online pharmacies are built **on top of** EPS nomination rather than
around it. Pharmacy2U (the largest) and the former Echo/LloydsDirect run the same
mechanism: the patient registers and **sets the online pharmacy as their EPS
nominee**; the app reminds them, **auto-requests the repeat from the GP**, dispenses
centrally, and **posts it free** [[src-gbl-pharmacy2u-lloydsdirect]]. Pharmacy2U
dispenses ~1.6m NHS items/month to >750k patients (company-stated). Consolidation:
Pharmacy2U **acquired LloydsDirect (Oct 2023)** as Lloyds' retail estate collapsed.

**The trust cautionary tale:** in October 2015 the ICO fined Pharmacy2U **£130,000**
(its first such penalty) for **selling >20,000 customers' details** (segmented by
condition) without consent [[src-gbl-pharmacy2u-lloydsdirect]]. Health data
monetisation destroys trust and triggers regulators, a direct **POPIA** warning
for any SA scripting product [[wiki/sa-regulatory/_index]].

## Boots — the omnichannel incumbent

Boots is the UK's largest community pharmacy chain (~1,800 pharmacies) and the
closest analogue to Dis-Chem/Clicks. Its repeat-prescription service ("Prescriptions
Plus") follows the EPS pattern: select repeat items → request to the GP → on
approval, **collect in-store nationwide or get free tracked home delivery (England)**,
tracked end-to-end via the Boots app or NHS App. **Every Boots in England**
participates in the NHS App tracker, and Boots is a major Pharmacy First provider
(>1m consultations). Boots Online Doctor is a separate **private** consult service
(weight loss, contraception, ED, acne, etc.) with clinician review and post/collect
fulfilment, a useful template for a paid telehealth-to-Rx lane alongside the public
rail.

## Pharmacy First — the pharmacy as clinical front door

From **31 January 2024**, England's Pharmacy First lets community pharmacists
**assess and supply prescription-only medicines for seven common conditions**
(sinusitis, sore throat, earache, infected insect bites, impetigo, shingles,
uncomplicated UTI in women) **without a GP appointment**, under **Patient Group
Directions** and a defined clinical pathway with safety-netting
[[src-gbl-pharmacy-first]]. Access is walk-in or referral (GP/NHS 111); six of the
seven conditions can be done remotely, but **earache requires an in-person
examination**, a sensible bound on telehealth. Outcomes: ~402k consultations for
~341k patients in year one (OpenSAFELY), reportedly ~5.4m total consultations by
Feb 2025, though **uptake ran below NHS targets** [[src-gbl-pharmacy-first]]. The
transferable idea is to **formalise the pharmacist's clinical role with protocols (PGDs)
so the pharmacy absorbs minor-ailment demand**, relevant to SA's PILZ/Schedule and
pharmacist-initiated-therapy debates [[wiki/sa-regulatory/_index]].

## What to borrow for SA

- **Nomination model**: let a patient nominate a default pharmacy once; route all
  scripts there automatically. The single most transferable UK idea.
- **Separate rail from choice**: a neutral e-script carrier the patient steers,
  with prescribers barred from steering. Builds trust and competition.
- **A free, government-or-utility app with real-time tracking**: NHS App shows that
  a single trusted app reaches tens of millions, and "Amazon-style" status reduces
  call-centre load and anxiety.
- **Online pharmacy built on the public rail** (Pharmacy2U): distance-selling that
  auto-requests repeats from the prescriber, dispenses centrally, posts free.
- **Pharmacist-led minor-ailment supply under protocols** (Pharmacy First): use the
  pharmacy as a clinical front door to offload primary care.
- **In-person bounds on telehealth** (earache must be examined): a defensible
  clinical guardrail.

## What doesn't transfer

- **A single tax-funded national payer/rail.** SA has no NHS-equivalent universal
  payer; the two-economy split (medical schemes vs cash/public) means no single rail
  exists today [[wiki/medical-schemes/_index]], [[wiki/consumer-context/_index]].
  NHI is the nearest analogue but is unbuilt (flag 🔮 requires-reform).
- **GP-as-default-prescriber assumption.** EPS assumes a registered GP issuing
  repeats; SA's primary-care access and prescriber mix differ.
- **Free universal home postal delivery** funded inside the system: SA addressing
  and last-mile economics don't support free post-to-door at national scale
  [[wiki/consumer-context/_index]].
- **The data-selling episode is an anti-pattern** rather than a pattern, cited as a POPIA
  warning and not a model.

## See also

- [[wiki/global-benchmarks/australia-chemist-warehouse-escript]] — token vs nomination contrast
- [[wiki/global-benchmarks/europe-docmorris-redcare-erezept]] — what happens when the rail is fragile
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]] — the synthesis
- [[wiki/sa-regulatory/_index]] — SA e-Rx, POPIA, pharmacist scope
- [[wiki/medical-schemes/_index]] — why SA has no single payer/rail

## Open questions

- Pharmacy2U's "1.6m items/month, 750k patients" is company-stated and undated
  precisely — treat as directional.
- Pharmacy First uptake ran below target; the durability of the
  pharmacist-front-door model under funding pressure is unresolved.
