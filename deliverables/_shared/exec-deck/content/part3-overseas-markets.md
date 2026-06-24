# Part 3 — What we can learn from overseas markets

## SLIDE: section-divider
id: divider-overseas-markets
num: 3
title: What we can learn from overseas markets
subtitle: Borrow the mechanisms - operating models and CX - not the funding architectures
notes: Focus is on HOW these markets run the scripting loop (tokens, teleconsult loops, store-as-node, verification, AI guardrails), not how they pay for it. Funding plumbing is explicitly out of scope.

## SLIDE: theme
id: transfer-fit
kicker: Framing
title: Australia, India and China are the right teachers because they share our structure
so_what: Read overseas markets for the mechanism, not the money. The markets that fit ours are the ones that already assume mixed funding, cash payers, store estates and pragmatic verification.
body:
  - Australia, India and China assume mixed funding, cash-paying patients, dense store estates as fulfilment nodes and pragmatic verification - like SA.
  - The UK transfers poorly - it presumes a single tax-funded payer and rail SA does not have.
  - The US transfers poorly - its PBM/rebate middle layer is opaque and has no SA analogue.
  - Germany transfers poorly - rigid PIN-gated rails drove ~99% of patients to the analogue fallback.
  - The motto for this part - borrow mechanisms, reject funding architectures.
evidence: [wiki/global-benchmarks/_index, wiki/global-benchmarks/patterns-to-borrow-and-cautions]
visual: dia:transfer-fit
flags: []
notes: Sets the lens for the whole part. Keep funding out — every following slide is about operating model / CX. Germany/UK/US are the "doesn't transfer" foils.

## SLIDE: market-profile
id: australia-escript
kicker: Best fit for SA
title: Australia — a QR token the patient owns, scannable at any pharmacy
so_what: A scan-to-retrieve token (no PIN, any phone) with a fresh code per repeat gives SA a low-friction e-script design that has anti-double-dispense baked in.
facts:
  - {label: "First e-script", value: "6 May 2020 (Anglesea, VIC)"}
  - {label: "E-scripts issued", value: "~360m by 30 Jun 2025"}
  - {label: "Pharmacy coverage", value: ">95% (coverage ≠ volume)"}
  - {label: "Redemption", value: "QR token by SMS/email, no PIN"}
body:
  - Token is a key/pointer to an encrypted script store - patient shows it at any pharmacy to unlock and dispense.
  - A new token is issued after each repeat is dispensed - built-in anti-double-dispense control.
  - Because it is just an SMS/email, the token can be forwarded to a carer - strong accessibility.
  - Active Script List is an opt-in, per-pharmacy, revocable managed list - token and list, patient chooses.
evidence: [wiki/global-benchmarks/australia-chemist-warehouse-escript, wiki/concepts/e-prescription-token, src-gbl-australia-escript]
visual: dia:au-token-loop
flags: []
notes: ">95% is PHARMACY COVERAGE, not the share of all scripts that are electronic — say so on-slide. A token-by-SMS degrades gracefully to printed-QR/USSD/WhatsApp for SA low-bandwidth. ASL needs a SA-fitted ID model (not AU's 100-points-of-ID)."

## SLIDE: market-profile
id: india-epharmacy
kicker: Emerging-market template
title: India - turn the store estate into fulfilment nodes, and verify pragmatically
so_what: India shows the omnichannel/anchored model wins over venture-subsidised pure-play, and that dual verification bridges the gap where no national e-script rail exists.
facts:
  - {label: "Apollo 24|7 orders", value: "~75k/day (Q3 FY25)"}
  - {label: "Apollo Pharmacy stores", value: "~7,000"}
  - {label: "Metro delivery", value: "~19 min (density-dependent)"}
  - {label: "Tata 1mg share", value: "~31% (overtook PharmEasy)"}
body:
  - Core loop - teleconsult to e-prescription to order to deliver, fulfilled from physical stores used as dark stores.
  - Dual verification - photo upload to pharmacist digital review to phone confirm to physical check at dispense.
  - Apollo HealthCo swung to profit on the omnichannel model; PharmEasy's pure-play collapsed (cautionary tale).
  - Telemedicine Practice Guidelines 2020 are the legal hinge that let a doctor issue a dispensable e-prescription.
evidence: [wiki/global-benchmarks/india-pharmeasy-apollo-tata1mg, src-gbl-india-epharmacy, src-gbl-apollo-247-results]
visual: dia:teleconsult-loop
diagram_active: order
flags: []
notes: "~75k/day and the HealthCo profit are listed-company disclosures (A-tier); ~31% share and ~7,000 stores are from the e-pharmacy source. 19-min delivery is density-dependent and does NOT transfer across SA geography - borrow the store-as-node mechanism, not the speed promise. PharmEasy = the explicit anti-pattern."

## SLIDE: market-profile
id: china-loop
kicker: Most fully-realised loop
title: China — the regulated internet hospital and O2O nearest-store delivery
so_what: China proves the full teleconsult-to-deliver loop works only on top of deliberate regulation - licensing, non-delegable pharmacist review, and follow-up-only scope.
facts:
  - {label: "Internet hospital", value: "must be based on a licensed physical hospital (2018)"}
  - {label: "Online care scope", value: "follow-up/chronic only — no first visit online"}
  - {label: "Fulfilment", value: "O2O routing to nearest store"}
  - {label: "Platforms at scale", value: "Ping An / Alibaba / JD Health (profit 2024-25)"}
body:
  - Online prescription is valid only with real-name doctor auth, e-signature, and pharmacist review.
  - Pharmacist clinical review is non-delegable - a hard human checkpoint before any medicine is released.
  - "No first visit online" scopes digital care to follow-up/chronic, concentrating effort where it is safest.
  - Platforms route an online order to the nearest physical pharmacy for fast O2O delivery - fits dense store estates.
evidence: [wiki/global-benchmarks/china-pingan-alibaba-jdhealth, src-gbl-china-internet-hospitals]
visual: dia:teleconsult-loop
diagram_active: pharmacist
flags: []
notes: "Borrow the loop + the guardrails; reject the platform-scale super-apps and the state-directed insurance plumbing (NHSA wiring by fiat has no SA analogue). Internet-hospital-on-a-physical-hospital is a China-specific construct; SA's HPCSA telehealth rules differ."

## SLIDE: theme
id: china-ai-prescription-ban
kicker: The defensible AI guardrail
title: China bans AI from auto-generating prescriptions — "prescription first, drug second"
so_what: The safest AI stance for a future digital pharmacy is the Chinese one - AI may triage and intake, but a human clinician must diagnose and sign, and a pharmacist must review.
body:
  - NHC supervision rules (Feb 2022, reaffirmed Aug 2023) ban AI from auto-generating prescriptions.
  - "Prescription first, drug second" - no drug may be supplied before its script is issued and reviewed.
  - Rationale - patient safety, and scoping digital care to lower-risk follow-up rather than first diagnosis.
  - Implication for SA - AI may triage and intake; a licensed clinician diagnoses and signs; the pharmacist reviews.
evidence: [wiki/global-benchmarks/china-pingan-alibaba-jdhealth, src-gbl-china-eprescription-policy]
visual: dia:teleconsult-loop
diagram_active: ai-triage
flags: []
notes: "Source-confirmed verbatim - NHC supervision rules Feb 2022; reaffirmed Beijing draft Aug 2023. The most defensible AI/safety guardrail in the deck - AI in front of a human, never instead of one. dia:teleconsult-loop carries the AI-triage to human to pharmacist guardrail visually."
