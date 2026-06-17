---
type: wiki
title: "Real-time claims & switching (point-of-dispensing adjudication)"
domain: medical-schemes
status: draft
confidence: high
tags: [domain/schemes, domain/digital, journey/validate, journey/pay, region/za, topic/trust-safety]
sources: [src-sch-claims-switching, src-sch-nappi-coding, src-sch-claim-rejections-gems, src-sch-dsp-formulary-copay]
created: "2026-06-13"
updated: "2026-06-17"
---

# Real-time claims & switching

At the moment of dispensing, a SA pharmacy doesn't "bill the scheme and wait":
it submits the claim **electronically through a switching house** and gets a
**real-time adjudicated answer**: paid in full, paid with a co-payment, or
rejected [[src-sch-claims-switching]] [[src-sch-claim-rejections-gems]]. This
adjudication is the **financial moment of truth** of the entire scripting
journey.

## The switching layer

A **switch** (clearing house) routes the claim from the pharmacy's dispensing
system to the scheme/administrator and returns the response **instantly**
[[src-sch-claims-switching]]. The main switches:

- **SwitchOn (formerly MediSwitch)** - Altron HealthTech; real-time submission +
  instant adjudicated response [[src-sch-claims-switching]].
- **MediKredit (HealthNet ST)** - connects ~**9,000 providers** incl. pharmacies
  in real time [[src-sch-claims-switching]]; also **owns/manages the NAPPI file**
  [[src-sch-nappi-coding]].
- **Healthbridge** - switching + claim-rejection-reduction tooling
  [[src-sch-claims-switching]].

Adjudicated amounts settle to the provider's bank in ~**14–30 days**
[[src-sch-claims-switching]].

## What gets adjudicated against (the data triad)

A medicine claim is matched against scheme rules using:

- **NAPPI code** - 9-digit unique product identifier (6 = product, 3 = pack
  size); the standard for claiming medicines [[src-sch-nappi-coding]].
- **ICD-10 diagnosis code** - links the medicine to a fundable condition (and to
  PMB/chronic logic); coding errors cause rejections [[src-sch-claims-switching]]
  [[src-sch-nappi-coding]].
- **Member identity & a valid prescription** - name/ID/membership/DOB must match
  the scheme database [[src-sch-claim-rejections-gems]].

The adjudication then applies **formulary, MMAP, DSP, benefit pool and PMB/chronic
status** ([[dsp-formularies-copayments]], [[pmb-cdl-chronic]]) to compute what
the scheme pays and what the member owes.

## What the pharmacist/member sees

- **Approved + funds available** → medicine dispensed immediately
  [[src-sch-claim-rejections-gems]].
- **Approved with co-payment** → pharmacist tells the member the amount; member
  pays the difference.
- **Rejected** → pharmacist relays the reason; member may also get an **SMS**
  [[src-sch-claim-rejections-gems]].

Common rejection causes [[src-sch-claim-rejections-gems]]: **data mismatch**
(ID/membership), **off-formulary** medicine, **benefit exhausted**, **chronic
not registered** ([[pmb-cdl-chronic]]), **missing/invalid NAPPI or ICD-10**,
failed medical-necessity. Appeals typically take ~**30 days**.

## Design implications

- **Real-time claim rejection is a critical moment of truth needing graceful
  UX.** Today a member often discovers the problem only at the till, in a queue,
  with no clear next step. The future experience should: **(a) pre-adjudicate
  before the member travels/commits** (dry-run the claim), **(b) translate the
  rejection code into plain language + a specific remedy** (register chronic,
  switch generic, use the DSP, top up savings), and **(c) keep the member moving**
  rather than dead-ending.
- **Catch the data-mismatch class early.** Validate member identity against the
  scheme up front so name/ID/DOB mismatches never reach the counter.
- **Make NAPPI/ICD-10 correctness invisible to the member but bulletproof
  backstage**: these are silent rejection causes the member can't fix.
- **Design for the co-payment moment specifically.** It's the most common
  non-rejection friction; show it before commit, with funded alternatives.
- **Asynchronous channels (courier/app) need the same adjudication, earlier.**
  For delivery flows, adjudicate at order time, not dispatch, so the member isn't
  surprised by a co-payment after the parcel is on its way.

## Open questions
- Standard rejection-reason code sets across switches/administrators (are they
  harmonised enough to map to plain-language remedies?). ⚠️ → [[open-questions]].
- Whether real-time pre-adjudication ("can-I-claim?" dry run) is exposed via any
  switch/scheme API for member-facing apps.

## See also
- [[dsp-formularies-copayments]] · [[pmb-cdl-chronic]] · [[cms-medical-schemes-overview]]
- [[courier-chronic-pharmacy-models]]
