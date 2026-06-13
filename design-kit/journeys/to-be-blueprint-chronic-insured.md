---
type: blueprint
title: "To-be service blueprint — chronic, insured (Nomvula): the self-running repeat"
state: to-be
persona: "[[design-kit/personas/insured-chronic-multimorbid|Nomvula Khumalo]]"
scenario: "Insured multimorbid chronic patient — proactive WhatsApp-orchestrated repeat → home delivery, fully funded, pharmacist-checked"
status: draft
confidence: medium
method_ref: "[[design-kit/templates/service-blueprint-template]]"
tags: [design-kit, blueprint, journey/refill, journey/dispense, journey/deliver, topic/chronic, region/za]
created: "2026-06-13"
updated: "2026-06-13"
---

# To-be service blueprint — the self-running repeat (Nomvula, insured chronic)

> **Worked proof-of-concept** showing how this vault produces a future-state
> blueprint. It evolves the [[as-is-prescription-journey]] for persona
> [[design-kit/personas/insured-chronic-multimorbid|Nomvula Khumalo]] (Discovery
> member, hypertension + type-2 diabetes on the CDL). Method:
> [[design-kit/templates/service-blueprint-template]]. Stance:
> [[design-kit/templates/future-state-principles]]. Every step is defensible from
> a wiki page; assumptions and reform-dependencies are flagged.

**JTBD:** *"Keep my chronic meds flowing automatically and fully funded, without
disrupting my life."* ([[jtbd-library]])
**Core pattern:** [[wiki/concepts/chronic-medicine-flywheel]] — register once →
auto-dispense → proactive refill → deliver. **Primary channel:**
[[wiki/concepts/channel-ladder|WhatsApp-first]], native app for power features.

**As-is pains this targets** (from [[as-is-prescription-journey]]): #5 refill is
opt-in & breaks at script expiry · #3 co-payment/DSP surprise · #1 fulfilment
integrity · #2 stock-outs. **Moments of truth** (⭐): the funding result, the
fulfilment hand-over, and the silent refill→renewal gap.

---

## Stage A — Predict & trigger  *(new front-end to the loop)*
- **Evidence:** A WhatsApp message lands ~7 days before run-out: *"Hi Nomvula —
  your BP & diabetes meds are due. Ready to send the same as last month? ✅ Yes / ✏️ Change / ⏰ Snooze."*
- **Customer action:** One tap. (She didn't have to remember — the system did.)
- **Emotion:** 🙂 in control, unburdened.
- **Frontstage:** WhatsApp thread (low-data, [[wiki/concepts/channel-ladder]]).
- *— line of interaction —*
- **Backstage:** Refill-prediction from dispensing history + days-supply; cycle
  pre-assembled for one-tap confirm. ([[wiki/digital-transformation/adherence-tech-and-digital-therapeutics]])
- **Support systems:** Dispensary record · adherence/refill engine · WhatsApp Business API.
- **Policy/reg:** POPIA consent for proactive contact obtained at enrolment
  ([[wiki/concepts/identity-and-consent]]).
- **Fixes as-is pain:** #5 (refill was opt-in/manual). **Pattern:** auto-refill /
  med-sync ([[wiki/global-benchmarks/usa-cvs-walgreens-amazon]]).
- **Metric:** % cycles auto-initiated; time-to-confirm; opt-out rate.

## Stage B — Confirm & pre-check  *(the no-surprise promise)* ⭐
- **Evidence:** Within seconds: *"All in stock ✓. Discovery covers this in full —
  **R0 to pay** ✓. Pharmacist will do a quick safety check. Deliver to home
  Thursday AM?"* (or, if applicable: *"R42 co-pay — here's why, and a fully-funded
  generic option."*)
- **Customer action:** Confirms delivery slot; optionally swaps to the funded generic.
- **Emotion:** 🙂 reassured — **cost is known before commit**, not after.
- **Frontstage:** WhatsApp summary card (price, cover, stock, slot).
- *— line of visibility —*
- **Backstage:** **Real-time pre-adjudication** ("can-I-claim?" dry run) against
  the scheme; live stock check; generic-substitution option surfaced
  (§22F, [[wiki/sa-regulatory/prescription-requirements-repeats]]).
- **Support systems:** Claims switch (SwitchOn/MediKredit/Healthbridge) ·
  formulary/MMAP rules · inventory. ([[wiki/medical-schemes/realtime-claims-switching]], [[wiki/medical-schemes/dsp-formularies-copayments]])
- **Partners:** Discovery Health; switching house.
- **Policy/reg:** SEP + dispensing fee shown transparently
  ([[wiki/concepts/price-transparency]], [[wiki/sa-regulatory/sep-dispensing-fee]]).
- **Fixes as-is pain:** #3 (co-pay surprise) and #2 (stock-out found late).
- **🔮 requires-reform / assumption:** real-time **pre-adjudication exposed via a
  switch/scheme API** is not confirmed available — see [[open-questions]]. If
  unavailable, degrade to last-cycle cost + "subject to confirmation".
- **Metric:** % cycles with cost shown pre-commit; co-pay-surprise rate (target →0).

## Stage C — Clinical check  *(safety kernel — un-skippable)*
- **Evidence:** Status moves to *"Pharmacist reviewing ✓"* then *"Checked by
  Naledi, your pharmacist ✓"*; chat open if she has questions.
- **Customer action:** None required (can chat).
- **Emotion:** 🙂 trust — a named human stands behind it ([[wiki/concepts/trust-and-dignity]]).
- **Backstage:** Pharmacist therapeutic review across her **whole** regimen
  (interactions, doses, contraindications) — the legally required check for S2+
  ([[wiki/dispensing-practice/clinical-checks-and-mtm]], [[wiki/dispensing-practice/dispensing-process-steps]]).
  Automation removed the *toil* (re-keying, claim admin), protecting
  [[design-kit/personas/frontline-pharmacist|Naledi's]] scarce clinical time.
- **Support systems:** Clinical decision support / interaction checker
  ([[wiki/digital-transformation/ai-in-pharmacy]]) — **assistive, human-gated**.
- **Policy/reg:** SAPC pharmacist oversight & GPP ([[wiki/sa-regulatory/pharmacy-act-sapc-gpp]]).
- **Non-negotiable:** the clinical check is never automated away.
- **Metric:** median time-to-check; % needing pharmacist intervention (a feature, not a defect).

## Stage D — Dispense & adherence-pack
- **Evidence:** *"Packed & sealed ✓"* with a photo of the dose-pack.
- **Backstage:** Pick → label → **independent accuracy check** (barcode/NAPPI
  scan) → **adherence pack by date/time** (PackMyMeds, evolved)
  ([[wiki/dispensing-practice/error-prevention-and-safety]], [[wiki/dispensing-practice/adherence-packaging]]).
- **Support systems:** Dispensary system; optional automation/central-fill for
  volume ([[wiki/digital-transformation/pharmacy-automation-and-robotics]]) — with
  load-shedding-resilient fallback.
- **Fixes as-is pain:** #1 (fulfilment integrity) via scan-verified packing.
- **🔮 requires-reform / assumption:** **remote pharmacist supervision / central
  fill** legality unconfirmed (see [[open-questions]]); default to in-store
  dispense + local check until clarified.
- **Metric:** dispensing-accuracy / scan-verified %.

## Stage E — Fund & settle  *(invisible)*
- **Customer action:** Nothing — R0 already confirmed; or pre-authorised co-pay
  auto-charged to a saved method (her choice).
- **Backstage:** Claim submitted & reconciled; member balance (if any) settled.
- **Policy/reg:** PMB/CDL funding ([[wiki/medical-schemes/pmb-cdl-chronic]]).
- **Fixes as-is pain:** #4 (payment friction) — payment is resolved up front, not at a failing till.
- **Metric:** claim first-pass acceptance rate.

## Stage F — Deliver / collect  *(promise kept)* ⭐
- **Evidence:** Live tracking in WhatsApp; driver ETA; *"Delivered ✓ — signed by
  Nomvula."* Choice of **home delivery, click-and-collect, or a locker/pickup point**.
- **Backstage:** Omnichannel routing; **cold-chain-aware** handling for fridge
  lines; proof-of-delivery; **no silent cancellation** — any exception escalates
  (Stage G). ([[wiki/concepts/omnichannel-fulfilment]], [[wiki/consumer-context/last-mile-addressing-logistics]])
- **Partners:** courier / locker network (Pargo/PUDO).
- **Policy/reg:** controlled-meds chain-of-custody for S5/S6 in transit
  ([[wiki/sa-regulatory/courier-online-pharmacy-rules]] — ⚠️ rules to confirm).
- **Fixes as-is pain:** #1 (last-minute cancellations, wrong/missing items).
- **Pattern:** real-time tracking + nominated fulfilment ([[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]], [[wiki/global-benchmarks/australia-chemist-warehouse-escript]]).
- **Metric:** on-time-in-full %; delivery-failure rate; cold-chain breach rate.

## Stage G — Graceful failure  *(the real test — runs in parallel)*
- **Triggers & recovery** ([[wiki/concepts/graceful-failure]], [[wiki/ux-service-design/pharmacy-ux-patterns]]):
  - *Stock-out* → auto-offer funded generic (pharmacist-approved) or split/partial + ETA, never a silent gap.
  - *Claim rejects* → plain-language reason + the fix (e.g. "chronic condition not registered — register now in 2 taps"; the pharmacy can register CDL — [[wiki/medical-schemes/pmb-cdl-chronic]]).
  - *Delivery fails / load-shedding* → reroute to collection/locker; keep her informed.
  - *Out of repeats* → see Stage H.
- **Metric:** % exceptions resolved without customer chasing; recovery satisfaction.

## Stage H — Proactive renewal  *(close the script-expiry gap)* ⭐
- **Evidence:** *"This is your last repeat. Want a quick check-in with a clinician
  to renew — no clinic trip?"* → in-WhatsApp **Kena** teleconsult → new **e-script
  token** issued back into the loop.
- **Backstage:** Telehealth consult → e-prescription; orchestration spans the
  prescriber gap the as-is journey breaks at.
  ([[wiki/concepts/e-prescription-token]], [[wiki/dischem/dischem-digital-channels]])
- **Policy/reg:** telehealth-originated scripts are **now lawful** post-COVID
  ([[wiki/sa-regulatory/e-prescription-telehealth-popia]]); a fully paperless
  e-script needs an **ECTA AES** — **🔮 requires-reform/maturity** until the
  prescriber side supports it (interim: clinician-signed digital script + pharmacist
  verification).
- **Fixes as-is pain:** #5b (hard break at script expiry → silent drop-off).
- **Pattern:** teleconsult→e-Rx→dispense→deliver loop ([[wiki/global-benchmarks/india-pharmeasy-apollo-tata1mg]], [[wiki/global-benchmarks/china-pingan-alibaba-jdhealth]]).
- **Metric:** repeat-to-renewal continuation rate (the retention/adherence KPI).

---

## What changed vs as-is (summary)
| As-is pain | To-be move | Where proven |
|---|---|---|
| Refill opt-in, manual | **Predict & one-tap confirm** | [[wiki/concepts/chronic-medicine-flywheel]] |
| Cost/cover only real at till | **Pre-adjudicated, shown before commit** | [[wiki/concepts/price-transparency]] |
| Stock-out found late | **Live stock + auto generic/partial** | [[wiki/concepts/graceful-failure]] |
| Fulfilment integrity failures | **Scan-verified pack + tracked, no silent cancel** | [[wiki/dispensing-practice/error-prevention-and-safety]] |
| Hard break at script expiry | **Proactive teleconsult renewal → e-token** | [[wiki/concepts/e-prescription-token]] |
| Pharmacist time lost to toil | **Automate toil, protect the clinical check** | [[design-kit/personas/frontline-pharmacist]] |

## Non-negotiables honoured
Pharmacist clinical check (S2+) un-skippable · scheduling rules · POPIA consent ·
SEP pricing shown, not discounted · licensed pharmacy is seller of record.
(See [[wiki/sa-regulatory/_index]].)

## `🔮 requires-reform` / assumptions to validate (route to [[meta/punchlist]])
1. Real-time **pre-adjudication API** from switches/schemes (Stage B).
2. **Remote supervision / central-fill** legality (Stage D).
3. **AES e-script** end-to-end + prescriber-side e-script adoption (Stage H).
4. **Locker collection of scheduled medicines** without on-site pharmacist (Stage F).

## See also
- [[as-is-prescription-journey]] · [[to-be-journey-cash-acute]] (the uninsured contrast)
- [[design-kit/templates/service-blueprint-template]] · [[design-kit/templates/future-state-principles]]
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]]
