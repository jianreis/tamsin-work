---
type: source
title: "Kenya Health Insurance: Claims — Target State Customer Experience Map (Out-Patient / After-Hours Emergency)"
url: "n/a — internal Bigly Labs / Old Mutual design board (PDF export)"
author: "Tamsin Madden (Bigly Labs)"
publisher: "Bigly Labs / Old Mutual (Kenya health insurance)"
published: "n.d."
retrieved: "2026-06-14"
source_kind: company
reliability: C
tags: [domain/ux, domain/dispensing, journey/validate, journey/pay, journey/collect, journey/deliver, topic/acute, topic/telehealth, topic/trust-safety, region/global]
---

# Kenya Health Insurance — Target State CX Map (Out-Patient / After-Hours Emergency)

## Summary
An internal Bigly Labs design board (single wide-canvas PDF export, authored by
Tamsin Madden) presenting a **target-state customer-experience map** for **health
insurance claims** in a **Kenyan** context, for **Old Mutual**. It is an
**analogous artifact**, not a Dis-Chem or South African pharmacy source: the
"product" is the **claims journey**, and the pharmacy/medication step appears as
one leg inside a hospital out-patient visit. Two scenarios are mapped: (1) a
generic **Out-Patient (hospital)** claim, and (2) an **After-Hours Emergency** —
a mother ("Wanjiku") taking a sick child to an ER on a Sunday evening. The board
captures, per stage: customer need, activity, previous (as-is) pain point + root
cause, location, touchpoints, and proposed digital "components" (e.g. coverage
verification engine, pre-filled registration, real-time claim linking, digital
script fulfilment, point-of-sale clearance). It also states future-state
**experience principles** and **business objectives**, and a **CX scorecard**.

Relevance to this vault: it is a **worked design precedent for the "complex use
case" of after-hours / emergency / out-patient medication access** — the moment
a script is generated *outside* the chronic/repeat spine, under stress, with
funding uncertainty. The pains it names (pre-auth bottlenecks, no status
visibility, dependant identity/OTP friction, redundant paper claim forms,
queue-hopping between reception → doctor → pharmacy → reception, no follow-up)
map cleanly onto SA pharmacy-scripting friction. **Treat the future-state
"components" as design inspiration / signals, not validated SA evidence.**

## Key claims
- The map covers two scenarios: a generic **Out-Patient (hospital)** claim and an
  **After-Hours Emergency** visit; the latter is framed as "Emergency Visit /
  Fully Covered / Simple Treatment / Straight-Through Journey / High Stress".
- **Pre-authorisation** is named the **primary source of frustration** in the
  out-patient claims journey — both the requirement and the turnaround time.
- Most pre-auth turnarounds fall **within a 15-minute SLA**, but the **5–10%**
  that fall outside create "outsized frustration".
- Members have **no direct way to track pre-auth status** and must rely on busy
  hospital staff for updates.
- Pre-auth pain is **cumulative and repeated**: each new treatment, test, or
  medication in the same visit can re-trigger the queue → wait → front-desk loop.
- Named root causes: #1 lack of digital tools to give visibility / expectation
  that pre-auth is needed; #2 pre-auths must be **manually submitted**; #3 the
  back-end does not pass pre-auth info to front-end touchpoints; #4 weak analytics
  means more benefits must be pre-authorised; #5 pre-auths are done manually each
  time a benefit is consumed; #6 doctor clarification on a pre-auth requires a
  **manual exchange of communications**.
- After-hours scenario flow: open app → **biometric (facial) login** → select
  **Emergency Assistance** → choose **who** assistance is for (child profile) →
  choose **ambulance / nearest emergency hospital / 24-7 online doctor** →
  location-filtered list of **covered** facilities (note: "pre-approval isn't
  required for emergencies") → directions + safety/"use digital card" prompt.
- Check-in pains (as-is): manual **printed registration forms** repeating data
  the insurer already holds (**up to 20 minutes**); **dependants cannot easily
  use virtual cards** because front desks demand **OTP verification from the
  principal member**, who may be absent/unreachable; **no communication or
  reassurance after check-in**.
- Future-state check-in: virtual card / QR scan, **real-time provider–insurer
  sync**, **pre-filled registration via API**, an **in-app identity-confirmation
  prompt to the dependant** (avoiding an OTP to the principal member), a push
  notification confirming "checked in at an approved provider, consultation
  covered, broker notified".
- Medication leg (as-is pain): a **paper claim form** is still filled in by
  member + doctor but serves no real purpose (filed away); **pre-authorisation
  for medication is only triggered at the pharmacy**, sending the member back to
  the front desk; the member is **forced to move between queues** (pharmacy →
  front desk → pharmacy).
- Medication leg (future-state): the **doctor initiates cover via the integrated
  clinical system**; antibiotics within out-patient benefit rules are
  **auto-validated and approved in real time** without the front desk;
  **member chooses hospital pharmacy vs. external script**; the member gets a
  push "prescription approved, linked to the visit, **no payment required**".
- Collection / closeout (as-is pain): member must **return to reception to sign
  for a fully-covered bill**; if the member leaves without "checking out", the
  **visit stays open in the system and the hospital cannot claim**, forcing
  paper-trail chasing and delayed claim submission.
- Collection / closeout (future-state): pharmacist confirms cover at point of
  dispense, dispenses + counsels on dosage, prints a visit summary; **point-of-
  sale clearance** lets the patient exit from the pharmacy; the **visit
  auto-closes** when the invoice is generated; an **exit notification** gives a
  visit breakdown and zero balance.
- Post-event (future-state): a next-day **personalised follow-up message**;
  offer of a **virtual doctor** consult at no extra cost; an **"Am I Covered?"**
  tool that confirms (e.g.) a tonsillectomy is covered under the "AfyaImara
  Junior" plan, lists approved hospitals with **pricing, average waiting times,
  direct-billing**, remaining benefit balance, co-payment, and a pre-auth /
  health-navigator option.
- Persona "**Wanjiku**": 34, corporate professional at Safaricom, mother of a
  5-year-old, covered under a **corporate** plan administered by **Minet Kenya**
  brokerage; digitally confident; values clarity, speed and reassurance.
- Five **future-state experience principles**: *Empower the Right Person at the
  Right Time*; *Run Ahead of the Customer* (anticipate, pre-authorise
  pre-emptively, remove friction before it's hit); *Curated Clarity* (right
  clarity for the moment, pair simplicity with specificity); *Seen, Not Just
  Served* (small reassurance moments); *Omnichannel, but mobile-first*; *Every
  "No" Comes With a Next* (declines always carry alternatives/referrals).
- Business objectives (A–E): customer retention/loyalty; operational efficiency;
  higher digital-channel adoption (app/portal/WhatsApp, off-loading call centres);
  brand trust/reputation; improved data utilisation for decision-making.
- CX scorecard metrics named: CSAT at moments of truth, NPS, Customer Effort
  Score (CES), Emotional Sentiment Index, Empathy rating, Perceived Transparency
  Score, Customer Trust Index, % of claims appealed/reworked, complaint rate per
  1,000 claims.
- In-canvas sticky notes (Tamsin Madden) flag open design questions: "How do we
  let the hospital know / expect the customer? 'We are on standby for pre-auth'";
  "How do we feel like a premium experience. Priority queue"; "Add a measure CX
  (survey)"; "Intercept journey to see a doctor, to rather go to a pharmacy".

## Verbatim excerpts
- Title block: *"Kenya Health Insurance: Claims — Target State Customer
  Experience Map"*; scenario tag *"Out Patient (Hospital)"*.
- After-hours scenario set-up: *"One Sunday evening, Wanjiku notices that her
  daughter's sore throat has worsened. After several days of self-medicating at
  home, the pain is now severe and her child is in visible distress. With no
  local GPs available after hours, Wanjiku decides to take her daughter to the
  nearest emergency room for immediate attention. She's anxious — unsure whether
  the visit will be covered and how long the process will take…"*
- *"In most cases, pre-authorisations turnaround times fall within the 15-minute
  SLA — but the 5–10% that fall outside of this window create outsized
  frustration for everyone involved: the provider, the Old Mutual team, and most
  importantly, the patient."*
- *"Even though the doctor has already prescribed the medication, the
  pre-authorisation isn't initiated until the member reaches the pharmacy. This
  means the pharmacist must send them back to the front desk to begin the
  process — a completely avoidable delay that breaks the care flow."*
- *"To complete the pre-authorisation, the member has to queue at the pharmacy,
  then again at the front desk, and possibly again at the pharmacy to collect the
  medication… The entire experience feels circular and inefficient."*
- *"When a dependant arrives at the hospital — such as a spouse or child —
  front-desk staff often require OTP verification from the primary member to
  validate the policy. But in many cases, the principal member isn't present or
  reachable."*
- Principle — *Run Ahead of the Customer*: *"The pain of waiting is cumulative.
  It's not just the 5-minute pre-auth — it's the 10-minute queue before that, and
  the 15-minute wait after. So we design our systems to anticipate where the
  customer is going… initiating processes earlier, authorising preemptively, and
  removing friction before the customer hits it."*
- Principle — *Every "No" Comes With a Next*: *"Saying no isn't the failure —
  leaving the customer stranded is… A good system doesn't just close doors — it
  opens others. We give customers clarity, alternatives, referrals, and
  support."*
- Future-state medication leg: *"Using the integrated clinical system, the doctor
  initiates a request for cover for the prescribed antibiotics. Since the
  treatment falls within Old Mutual's outpatient benefit rules, the request is
  automatically validated and approved in real time — without involving the front
  desk."*
- Closeout: *"Because the visit is already linked and settled within the system,
  there's no need for Wanjiku to return to reception — the visit is automatically
  closed once the invoice is generated."*

## Used in
- [[wiki/dispensing-practice/after-hours-emergency-acute-access]]
