---
type: wiki
title: "Synthesis — global patterns to borrow for SA, and what doesn't transfer"
domain: global-benchmarks
status: draft
confidence: medium
tags: [domain/global, region/global, journey/submit, journey/validate, journey/dispense, journey/pay, journey/collect, journey/deliver, journey/adhere, journey/refill, topic/e-prescription, topic/adherence, topic/last-mile, topic/trust-safety, topic/telehealth, topic/ai]
sources: [src-gbl-australia-escript, src-gbl-nhs-eps, src-gbl-nhs-app-prescriptions, src-gbl-germany-erezept, src-gbl-docmorris-redcare, src-gbl-amazon-pharmacy, src-gbl-costplus-drugs, src-gbl-india-epharmacy, src-gbl-apollo-247-results, src-gbl-china-internet-hospitals, src-gbl-china-eprescription-policy, src-gbl-pharmacy-first, src-gbl-medadvisor, src-gbl-ftc-pbm-report, src-gbl-walgreens-capsule, src-gbl-pharmacy2u-lloydsdirect, src-gbl-us-surescripts-eprescribing]
created: "2026-06-13"
updated: "2026-06-17"
---

# Synthesis — what to borrow, and what doesn't transfer to SA

This page distils the six regional benchmark pages into a decision-useful pattern
library for the future-state Dis-Chem scripting experience. **Headline judgement:
the emerging-market models (India, China) and Australia transfer to SA far better
than the US/UK/EU models, because they assume mixed funding, cash-paying patients,
dense store estates as fulfilment nodes, and pragmatic verification rather than a single
tax-funded payer or an insurance-PBM middle layer.** Borrow the mechanisms and reject
the funding architectures.

## The 11 highest-value transferable patterns

1. **QR-code e-script token (SMS/email), scanned at any pharmacy**, the single most
   transferable design. Australia's token is a *key* that unlocks the script from a
   secure delivery service: low-friction, no PIN, works on any phone, forwardable to
   a carer [[src-gbl-australia-escript]]. Germany shows the inverse, where a PIN-gated app
   drove ~99% of patients to the analogue fallback [[src-gbl-germany-erezept]]. **For
   SA, make redemption a scan/tap, and design a printed-QR / USSD / WhatsApp fallback for
   low-connectivity and load-shedding** [[wiki/consumer-context/_index]].

2. **New token issued per repeat (built-in anti-double-dispense)**: Australia issues
   a fresh token after each dispense until repeats are exhausted [[src-gbl-australia-escript]].
   Clean repeat UX with a safety control baked in. Fits SA chronic repeat dispensing.

3. **Nominated / Active-Script-List model for chronic patients**: let a patient
   nominate a default pharmacy (UK EPS) or consent once to a managed list of all
   their scripts (Australia ASL), with **per-pharmacy, revocable consent**
   [[src-gbl-nhs-eps]], [[src-gbl-australia-escript]]. **Offer token *and* list and
   let the patient choose** rather than forcing one model.

4. **A free, trusted app with real-time "Amazon-style" tracking**: the NHS App
   reached >39m users and 67.8m repeat orders/year, with status tracking that cuts
   call-centre load and anxiety [[src-gbl-nhs-app-prescriptions]]. Reducing
   nomination friction is itself a growth lever.

5. **Auto-refill / medication synchronisation as the default for stable chronic
   therapy**: make the refill automatic and the cancel the exception (CVS ReadyFill,
   Walgreens Save a Trip) [[src-gbl-amazon-pharmacy]], [[src-gbl-walgreens-capsule]].
   Aligns with SA CDL repeats and Dis-Chem PackMyMeds [[src-dc-packmymeds]].

6. **Adherence packaging by date/time, delivered (PillPack), with an app layer
   (MedAdvisor)**: pre-sorted dose packets for polypharmacy, plus a script wallet +
   pre-order/"tap to refill" + reminders + carer mode for the adhere/refill stages
   [[src-gbl-amazon-pharmacy]], [[src-gbl-medadvisor]].

7. **Teleconsult → e-prescription → order → deliver as one integrated loop**: the
   India and China core loop, scoped to follow-up/chronic care with explicit
   exclusions for high-risk scheduled drugs [[src-gbl-india-epharmacy]],
   [[src-gbl-china-internet-hospitals]].

8. **Omnichannel: turn the store estate into fulfilment / dark-store nodes**: Apollo
   fulfils online orders from Asia's largest pharmacy network for ~19-minute metro
   delivery [[src-gbl-apollo-247-results]]. Dis-Chem/Clicks already have the footprint
   [[wiki/dischem/_index]], [[src-clicks-direct-medicines]]. Own inventory + logistics
   buys reliability (JD Health) [[src-gbl-china-internet-hospitals]].

9. **Pragmatic dual prescription verification** where there's no national rail:
   digital pharmacist review **+** physical validation at dispense (India)
   [[src-gbl-india-epharmacy]]. A workable bridge for SA before a national e-Rx exists
   [[wiki/digital-transformation/_index]].

10. **AI triage in front of a human prescriber, with hard guardrails**: AI does
    intake/triage, and a licensed clinician diagnoses and signs. China's rules
    **ban AI-generated prescriptions** and enforce "prescription first, drug second"
    [[src-gbl-china-eprescription-policy]], a defensible AI/safety stance for SA
    [[wiki/sa-regulatory/_index]].

11. **Price transparency at the point of commit**: show an itemised, defensible
    breakdown before the patient pays (Amazon price-at-checkout; Cost Plus cost +
    markup + fees) [[src-gbl-amazon-pharmacy]], [[src-gbl-costplus-drugs]]. SA's SEP +
    capped dispensing fee already make this natural, so lean into it
    [[wiki/medical-schemes/_index]].

(Honourable mention, **the pharmacist as clinical front door** under protocols:
England's Pharmacy First lets pharmacists assess and supply for 7 conditions without
a GP visit [[src-gbl-pharmacy-first]], relevant to SA pharmacist-initiated-therapy
scope debates [[wiki/sa-regulatory/_index]].)

## The main "doesn't transfer" cautions

- **The US PBM / rebate middle layer.** Three vertically-integrated PBMs control ~80%
  of US scripts and distort pricing opaquely [[src-gbl-ftc-pbm-report]]. SA has no
  PBM-style layer; schemes + DSPs + **single exit price (SEP)** do this differently
  and more transparently [[wiki/medical-schemes/_index]]. **Do not import rebate
  opacity.**

- **A single tax-funded national payer/rail (NHS).** SA has no NHS-equivalent; the
  two-economy split means no single rail exists today [[wiki/medical-schemes/_index]],
  [[wiki/consumer-context/_index]]. NHI is the nearest analogue but unbuilt
  (🔮 requires-reform).

- **A single centralised online-only rail with no offline fallback.** Germany's
  central TI became a nationwide single point of failure (repeated outages)
  [[src-gbl-germany-erezept]]. SA's load-shedding and connectivity gaps make an
  offline/degraded mode **non-negotiable** [[wiki/consumer-context/_index]].

- **PIN-gated / smart-card redemption (eGK + insurer PIN).** Assumes universal
  statutory insurance and a smart-card estate SA lacks; it also created the friction
  that suppressed app use to ~1% [[src-gbl-germany-erezept]].

- **Free dedicated same-day courier as a universal default.** Capsule's economics
  proved fragile even in dense US metros [[src-gbl-walgreens-capsule]]. SA last-mile
  cost and **addressing gaps** make this uneconomic outside metros, so prefer
  **mode-appropriate** delivery + store collection [[wiki/consumer-context/_index]].

- **Population-density-dependent speed promises** (19-minute / 30-minute delivery)
  do not hold across SA's geography [[wiki/consumer-context/_index]].

- **State-directed insurance integration** (China's NHSA wiring reimbursement by
  fiat), incompatible with SA's multi-scheme regulated environment
  [[wiki/medical-schemes/_index]].

- **Universal-smartphone / always-on-data assumptions**: SA data costs and device
  access require graceful degradation (USSD, WhatsApp, printed QR)
  [[wiki/consumer-context/_index]].

- **Lax data governance.** Pharmacy2U's 2015 data-selling fine and MediSecure's 2024
  breach are anti-patterns under **POPIA**: consent must be explicit, scoped,
  revocable, and never monetised [[src-gbl-pharmacy2u-lloydsdirect]],
  [[src-gbl-australia-escript]], [[wiki/sa-regulatory/_index]].

- **Venture-subsidised growth-at-all-costs** (PharmEasy): convenience burned on a
  subsidy does not last, and SA models should anchor on existing estate/funding
  [[src-gbl-india-epharmacy]].

## Which regions to weight most for SA

| Region | Transfer strength | Why |
|---|---|---|
| **Australia** | Highest | Token+ASL works across mixed funding; no single-payer assumed; smooth rollout |
| **India** | High | Same EM structure — fragmented chemists, cash buyers, omnichannel wins, regulatory grey-zone |
| **China** | High (loop + guardrails) | Full teleconsult→Rx→deliver loop and AI/safety guardrails; reject the state-scale plumbing |
| **UK** | Medium | Great nomination + app patterns, but assumes a single tax-funded payer |
| **EU/Germany** | Medium (as a warning) | The cautionary tale on rollout fragility and redemption friction |
| **US** | Lowest (borrow features only) | Strong feature UX (auto-refill, subscription, transparency) but reject the PBM plumbing |

## See also

- [[wiki/global-benchmarks/australia-chemist-warehouse-escript]] · [[wiki/global-benchmarks/india-pharmeasy-apollo-tata1mg]] · [[wiki/global-benchmarks/china-pingan-alibaba-jdhealth]]
- [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]] · [[wiki/global-benchmarks/europe-docmorris-redcare-erezept]] · [[wiki/global-benchmarks/usa-cvs-walgreens-amazon]]
- [[wiki/medical-schemes/_index]] · [[wiki/sa-regulatory/_index]] · [[wiki/consumer-context/_index]] · [[wiki/digital-transformation/_index]] · [[wiki/dischem/_index]]

## Open questions

- The SA-specific identity/consent model for an e-script (vs Australia's 100-points-
  of-ID) is unresolved and needs a local design [[wiki/sa-regulatory/_index]].
- Whether SA should build a single national e-Rx rail or a federated/standards-based
  one (more outage-tolerant) is a key open architectural decision
  [[wiki/digital-transformation/_index]].
- Most foreign scale figures are company- or agency-reported; treat as directional.
