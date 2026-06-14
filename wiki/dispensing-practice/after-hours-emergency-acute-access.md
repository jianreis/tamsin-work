---
type: wiki
title: "After-hours, emergency & out-patient acute medication access (the off-spine complex use case)"
domain: dispensing-practice
status: draft
confidence: medium
tags: [domain/dispensing, domain/ux, journey/validate, journey/pay, journey/collect, journey/deliver, topic/acute, topic/telehealth, topic/trust-safety, region/za, region/global]
sources: [src-om-kenya-outpatient-afterhours-emergency]
created: "2026-06-14"
updated: "2026-06-14"
---

# After-hours, emergency & out-patient acute medication access

The vault's design spine is built around the **chronic / repeat** flywheel
([[wiki/concepts/chronic-medicine-flywheel]]) — a predictable, schedulable,
relationship-based journey. But a meaningful share of real scripting moments are
**off-spine**: a new acute script is generated **under stress, outside business
hours, away from the customer's usual pharmacy, with funding uncertain**. The
clearest worked example we have is an analogous Bigly Labs design board for a
**Kenyan health-insurance** out-patient / after-hours-emergency claims journey
([[src-om-kenya-outpatient-afterhours-emergency]]) — a sick child taken to an ER
on a Sunday evening, where collecting the prescribed antibiotic is one leg of a
larger, anxious visit. Although the artifact is **insurance-claims-centric and
Kenyan** (treat its future-state mechanics as **design signals, not SA
evidence** — reliability C), its pain analysis transfers almost directly to the
SA pharmacy-scripting problem and surfaces a **candidate complex use case** worth
designing for explicitly.

## The scenarios (triggers)
Two related off-spine scenarios appear in the source
([[src-om-kenya-outpatient-afterhours-emergency]]):

1. **After-hours emergency.** Trigger: an acute condition worsens when the usual
   front door (GP/clinic/regular pharmacy) is closed; the customer escalates to
   an ER under time pressure and emotional stress. The medication is a
   **single, simple, covered course** (here, antibiotics for tonsillitis) — but
   the *experience* around obtaining it is heavy.
2. **Out-patient (hospital) visit.** Trigger: a consultation, test, minor
   procedure or **medication dispensed during a hospital visit** without
   admission. The claim is assessed against benefit rules in real time.

Both share a defining property: **the script originates at the point of care,
not from the customer's repeat history**, and **funding/eligibility must be
resolved synchronously** while the customer waits.

## Who is involved
Member/patient and an accompanying **caregiver** (often a parent acting *for a
dependant*); the **doctor** (who prescribes and, in the future state, initiates
cover); **hospital reception/triage**; the **hospital pharmacist**; the
**insurer/case manager** and **broker**; and the **app** as connective tissue
([[src-om-kenya-outpatient-afterhours-emergency]]). The source's principle
*"Empower the Right Person at the Right Time"* explicitly distributes the support
role across doctor, case manager and broker rather than centralising it.

## The pains (and why they generalise to SA pharmacy)
The board's named pains map onto SA scripting friction documented elsewhere in
the vault:

- **Authorisation is the primary bottleneck.** Pre-auth is called *the* primary
  frustration; most clear within a 15-minute SLA but the **5–10% that don't**
  create outsized pain, and it is **manually submitted** with **no member-facing
  status** ([[src-om-kenya-outpatient-afterhours-emergency]]). SA analogue:
  point-of-sale **scheme adjudication / claim rejections** and chronic
  authorisation, where the customer also lacks live visibility — argues for
  [[wiki/concepts/moment-of-truth|status as a designed surface]] and
  [[wiki/concepts/graceful-failure]].
- **Cumulative, repeated waiting.** Each new test/treatment/medication can
  re-trigger the queue → front-desk → wait loop; pain is *cumulative*, not a
  single SLA number ([[src-om-kenya-outpatient-afterhours-emergency]]). The
  proposed counter-principle, *"Run Ahead of the Customer"* (authorise
  pre-emptively, remove friction before it's hit), is directly reusable for the
  SA scripting blueprint.
- **Medication authorised too late / queue-hopping.** Cover for the medication is
  only triggered **at the pharmacy**, sending the patient back to reception, so
  they shuttle **pharmacy → front desk → pharmacy**
  ([[src-om-kenya-outpatient-afterhours-emergency]]). This is the off-spine
  version of the SA "go to the till to find out the price/cover" black box.
- **Dependant identity friction.** Front desks demand **OTP verification from the
  absent principal member**, blocking a caregiver from acting for a child/spouse
  ([[src-om-kenya-outpatient-afterhours-emergency]]). Directly relevant to
  [[wiki/concepts/identity-and-consent]] and POPIA-compliant
  proxy/caregiver access in SA.
- **Redundant paper + reconciliation tail.** A **paper claim form** is completed
  but serves no purpose; the **visit stays "open"** unless the member returns to
  reception to "check out", blocking the provider's claim
  ([[src-om-kenya-outpatient-afterhours-emergency]]). SA analogue: paper-script
  handling and manual claim closeout.
- **No follow-up.** After discharge there is typically **no proactive outreach**;
  benefit descriptions are jargon-heavy and hard to check, so customers delay
  follow-up care ([[src-om-kenya-outpatient-afterhours-emergency]]). Links to
  [[wiki/concepts/medication-adherence]] and post-fill care.

## The gaps it exposes for the SA spine
The future-state mechanics the board proposes — biometric login, **emergency
triage logic** (ambulance / nearest covered hospital / 24-7 virtual doctor),
coverage-filtered facility lookup, **doctor-initiated real-time cover**,
**pre-filled registration**, **point-of-sale clearance** and **auto-close**, plus
an **"Am I Covered?"** tool — are aspirational and unvalidated for SA. They
expose concrete gaps:

- We have **no off-spine acute/emergency journey** in `design-kit/journeys/`
  (we have chronic-insured, cash-acute, and as-is). This is a distinct case.
- The **caregiver-acting-for-a-dependant** identity path is under-specified in
  our [[wiki/concepts/identity-and-consent]] work.
- **After-hours availability** of pharmacist oversight, e-script transmission and
  scheme authorisation is a real SA constraint (most authorisation rails and
  many pharmacies are not 24/7) — likely a `🔮 requires-reform` / partner
  question, not solvable by UX alone.

## Is this a candidate "complex use case"? — Verdict
**Yes.** After-hours / emergency / out-patient acute access is a high-value
**complex, off-spine use case** that the chronic/repeat flywheel does not cover:
the script is *new*, the moment is *high-stress*, the customer may be acting *for
someone else*, and funding must clear *synchronously*. It is the
emergency-pressure analogue of the cash-acute journey
([[design-kit/journeys/to-be-journey-cash-acute]]) and a stress-test for
[[wiki/concepts/graceful-failure]] and [[wiki/concepts/moment-of-truth]].

**How it interacts with the chronic spine.** It is mostly a **distinct entry
point** that should *converge* with the spine afterwards: an after-hours acute
fill is an opportunity to (a) capture the customer into a profile, (b) reconcile
the new medicine against any existing chronic regimen (interaction/duplication
check — [[wiki/dispensing-practice/clinical-checks-and-mtm]]), and (c) offer
enrolment/adherence follow-up if the acute condition becomes chronic. The spine's
**"run ahead"** assets (known profile, stored consent, pre-validated funding)
make the emergency path faster; conversely the emergency path is a strong
**acquisition / first-door** moment ([[wiki/concepts/dual-journey]]).

## Open questions
- What is the realistic **after-hours availability** in SA of (a) pharmacist
  oversight, (b) e-script transmission, and (c) live scheme authorisation? If any
  is not 24/7, the "straight-through emergency" pattern is partly
  `🔮 requires-reform`.
- How do we give a **caregiver POPIA-compliant proxy access** to act for a
  dependant *without* an OTP to an absent principal member? (See
  [[wiki/concepts/identity-and-consent]].)
- Does an **emergency-supply / urgent acute** lane (vs. chronic repeat) need its
  own SA-specific blueprint, or can it be a branch of the cash-acute journey?
- The source is Kenyan insurance-claims; what is the **SA pharmacy equivalent**
  of "pre-auth at the point of care" — scheme PMB/chronic authorisation, or
  largely a cash transaction for after-hours acute? (Verify against
  [[wiki/medical-schemes/_index]].)

## See also
- [[src-om-kenya-outpatient-afterhours-emergency]] — the source design board.
- [[design-kit/journeys/to-be-journey-cash-acute]] — the closest existing journey
  (acute, transparent, today).
- [[wiki/concepts/chronic-medicine-flywheel]] — the on-spine counterpart.
- [[wiki/concepts/graceful-failure]] · [[wiki/concepts/moment-of-truth]] ·
  [[wiki/concepts/identity-and-consent]] · [[wiki/concepts/dual-journey]] ·
  [[wiki/concepts/omnichannel-fulfilment]].
- [[wiki/dispensing-practice/clinical-checks-and-mtm]] — reconciling a new acute
  script against an existing regimen.
