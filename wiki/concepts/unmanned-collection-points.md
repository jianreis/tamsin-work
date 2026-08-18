---
type: wiki
title: "Unmanned collection points"
domain: concept
status: draft
confidence: high
tags: [concept, topic/automation, topic/accessibility, journey/collect, domain/regulatory, domain/digital, region/za]
sources: [src-reg-sapc-rules-s35a-radu-courier, src-reg-gpp-consolidated-verified, src-reg-sapc-automated-dispensing-unit-application, src-reg-sapc-enote-control-sale-scheduled, src-reg-ccmdd-pickup-point-handover, src-reg-uk-gphc-distance-services-2025, src-reg-us-nc-direct-to-patient-delivery-systems, src-coldchain-rightepharmacy-collectandgo]
created: "2026-08-16"
updated: "2026-08-16"
---

# Unmanned collection points

**Can a customer take dispensed medicine from a machine with nobody there?**

This page answers that one question. It is the regulatory companion to
[[wiki/concepts/remote-collection-points]], which asks a different one - *where*
should a collection point stand, and for whom. Reach is a strategy question;
this is a compliance question, and it has a much sharper answer.

**Confidence is high here**, unusually for this vault. The position below is read
directly from the primary SAPC texts, archived at `sources/pdfs/`. Rule numbers
and wording are quoted, not paraphrased from search extracts.

## The short answer

**No - not today, and not by a small margin.** But the rule that would permit it
already exists, already covers the exact use case, and is restricted by a single
phrase in its heading. The ask of Council is an extension, not an invention.

## What the rules actually say

### The bar: GPP Rule 1.9.3(b)

> The installation and the location of the ADU must be such that medicines and
> medical devices are **not accessed and/or received directly by the patient** or
> his or her caregiver or agent.

An automated dispensing unit is defined broadly enough to catch a collection
locker - it covers "storage, picking, packaging, labelling, and/or **giving out**
medicines and medical devices". So an in-pharmacy unit the customer opens is
expressly prohibited, not merely unprovided for. Rule 1.9.4(a) reinforces it:
phases 1 and 3 of dispensing must be performed by a pharmacist or pharmacy
support personnel, and **phase 3 is the provision of information to the patient**
- the counselling and supply step. Rule 1.9.4(d) requires each prescription to be
signed **in person** [[src-reg-gpp-consolidated-verified]].

### The route through: SAPC Rule 1.11 (RADU)

The prohibition above exists because patient-facing units live somewhere else.
Council publishes a **Remote Automated Dispensing Unit** standard for exactly
this - a unit "remotely operated from a pharmacy" that dispenses to a patient far
from any pharmacist [[src-reg-sapc-rules-s35a-radu-courier]].

Council's own rationale reads like the concept brief:

> Pharmacies in the public sector may use the Remote Automated Dispensing Unit
> (RADU) for purposes of dispensing medicine and devices for long term therapy
> (Chronic) **in order to improve access to medicines and to alleviate the
> patient burden on public facilities.**

What Rule 1.11 requires:

| Requirement | Rule |
|---|---|
| A pharmacist performs phases 1 and 3 **"through the audio-visual interface, at the time of dispensing"** | 1.11.5(a) |
| One prescription at a time | 1.11.5(b) |
| Every prescription signed by the pharmacist | 1.11.5(c) |
| Labels carry **the RADU's own address**, so the dispensing unit is identifiable | 1.11.5(d) |
| Refused medicine **locked in a secure cabinet**, not re-dispensed until checked | 1.11.5(e) |
| A pharmacist accessible for all patient enquiries | 1.11.5(f) |
| Where the unit is not 24-hour, a designated pharmacist available for emergency supply | 1.11.5(g) |
| Pharmacist-on-duty contact details and operating hours **displayed visibly at the unit** | 1.11.5(h)-(i) |
| An **ISP certificate** filed with Council proving connectivity adequate for patient-to-pharmacist communication | 1.11.6(c) |
| Chronic (long-term therapy) medicine only | 1.11.4(b) |
| Only registered pharmacy personnel may access it for stock and dispensing | 1.11.4(f) |

**The single blocking phrase is in the heading: "institutional public
pharmacy".** Rule 1.11 is written for the public sector. Nothing else about it
excludes a Dis-Chem.

### Two rules that bind whether or not a machine is involved

- **GPP 2.7.5(d):** *"In the absence of an adult (a person above 14 years) to
  receive the medicine, it must be taken back to the pharmacy."* A locker is not
  an adult. This reaches every unattended handover, mechanised or not
  [[src-reg-gpp-consolidated-verified]].
- **The pharmacist's duty to refuse.** Council's e-Note on control over the sale
  of scheduled medicines requires a pharmacist to *"make enquiries"* and to
  *"refuse to dispense these medicines when circumstances warrant such refusal"*,
  with requests for abuse-liable products *"dealt with personally by the
  pharmacist"* [[src-reg-sapc-enote-control-sale-scheduled]]. A code-opened door
  can neither enquire nor refuse. This is the strongest argument for excluding
  **S5 and S6** from any unattended rail regardless of what else changes.

### And one permission that is often missed

**GPP Rule 1.10** has permitted pharmacies to serve a patient **through a window
or other opening in the exterior wall** since BN 12 of 2006, without the patient
entering the building - given two porticos, **two-way visual and auditory
communication**, and counselling delivered without losing that contact. Wall-side
service is not the novel part. Only *nobody being on the other side* is
[[src-reg-gpp-consolidated-verified]].

## Three designs, ranked by how far they sit from the rules

**1. Attended wall-side collection - lawful today.**
A serving hatch on the exterior wall, staffed, with two-way visual and auditory
contact. This is Rule 1.10 as written. It removes the queue and the need to enter
the store; it does not remove the person.

**2. Video-attended automated unit - one extension away.**
The unit is automated and the pharmacist appears on screen to complete the
handover. This is Rule 1.11 exactly, and would need only its extension from
institutional public pharmacy to community pharmacy. Every other condition is
already satisfiable, and South Africa already runs the pattern: Right ePharmacy's
medication ATM keeps a live pharmacist at handover by audio-video link, and its
Collect&Go lockers have moved 335,544 prescriptions across 39 Gauteng sites
[[src-coldchain-rightepharmacy-collectandgo]].

**3. Fully unmanned collection - two extensions away.**
Nobody present, the door opens on a code. This needs Rule 1.11 extended to
community pharmacy **and** relaxed on 1.11.5(a)'s live audio-visual handover. It
is the version drawn in
[[design-kit/journeys/to-be-acute-moments|deliverable #10's P4 collected route]]
and in the [[Express Collect]] concept, and it is marked 🔮 requires-reform there
deliberately - agreed with Tamsin on 2026-08-16, in preference to redesigning the
journey down to what is lawful now.

## What the comparators tell us

- **United Kingdom - permissive.** Prescription collection units, including
  automated machines and lockers, are a **named regulated service category** under
  Regulation 248 of the Human Medicines Regulations. GPhC requires a secure access
  code released only to the right person, tracking that confirms it reached that
  person, packaging assessed for tamper-proofing and temperature control, and
  specific risk assessment for refrigerated medicines and controlled drugs
  [[src-reg-uk-gphc-distance-services-2025]].
- **United States (North Carolina) - a ready-made rule text.** Convey the offer to
  counsel, provide **immediate real-time** pharmacist consultation, allow the
  pharmacist to **force counselling before release**, check the link daily, and
  **close the unit** if the link fails or no pharmacist is available. Fail-closed,
  not fail-open [[src-reg-us-nc-direct-to-patient-delivery-systems]].
- **South Africa's own CCMDD - staffed, not unmanned.** The SOP has the patient or
  proxy present identification *"for PuP to verify the identity"* and the
  collection card *"for PuP to complete"*. The national precedent everyone cites
  for out-of-facility collection is a **staffed** handover point
  [[src-reg-ccmdd-pickup-point-handover]].

## What to ask Council for

Framing matters. The weak ask is "may we put medicine in lockers". The strong ask
is narrower and rests on Council's own published reasoning:

> Rule 1.11 already permits a remotely operated automated unit to dispense chronic
> medicine to a patient with no pharmacist present on site, for the express
> purpose of improving access. We propose to operate to that standard in community
> pharmacy, on the same conditions.

Both GPP automation standards arrived by **board notice** - Rule 1.10 by BN 12 of
10 March 2006, Rule 1.9 by BN 50 of 27 February 2015 - so Council's mechanism for
absorbing new dispensing technology is administrative, and demonstrated twice.

Three commitments that would strengthen the application, each borrowed from a rule
that already exists somewhere:

1. **Fail-closed release** - no pharmacist reachable, no door (NC rule; and
   already half-required by SAPC 1.11.5(f)-(g)).
2. **Clinically stable chronic repeats only, S5 and S6 excluded** - mirrors
   1.11.4(b) and answers the duty-to-refuse problem.
3. **Conditioned and monitored ambient storage, cold chain on a separate route** -
   inherited from CCMDD's own insulin exclusion, and independently required by
   Rule 1.9.7(f).

## Open questions

- Whether a collection locker holding an already-dispensed, pharmacist-checked
  pack is an "ADU" within Rule 1.9.1's definition at all, or something the rules
  simply do not name. The definition's "giving out" limb suggests it is caught,
  but this has not been tested.
- Whether Rule 2.7.5(d)'s adult-recipient requirement applies to collection as
  well as delivery, or only to delivery.
- Whether Council has ever received or refused a community-pharmacy RADU
  application. Not in any retrievable record.

## See also

- [[wiki/concepts/remote-collection-points]] - where a collection point should stand, and the access case for it
- [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]] - the Pharmacy Act and GPP
- [[wiki/digital-transformation/pharmacy-automation-and-robotics]] - the units themselves
- [[wiki/digital-transformation/telepharmacy-and-omnichannel]] - remote pharmacist models
- `sources/pdfs/` - the primary documents this page is read from
