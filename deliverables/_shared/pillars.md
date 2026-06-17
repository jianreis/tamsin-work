---
type: meta
title: "Canonical pillars — strategic + UX (single source of truth)"
status: reviewed
created: "2026-06-13"
updated: "2026-06-17"
owner: report-agent
consumed_by: ["01-research-report.html", "02-asis-blueprint-journey.html", "03-tobe-close-the-gap.html", "04-tobe-aspirational.html"]
---

# Canonical pillars — the spine of all four deliverables

> **This file is the single source of truth for pillar ids, names and one-liners.**
> The interactive kit (#2–#4) embeds these in `DATA.pillars`; the research report
> (#1) presents them as its backbone. **IDs are stable - never renumber.** Add new
> pillars with the next free id; supersede rather than reassign. Each pillar is
> distilled from the vault (esp. `design-kit/templates/future-state-principles.md`,
> `wiki/ux-service-design/consultancy-pharmacy-research.md`,
> `wiki/global-benchmarks/patterns-to-borrow-and-cautions.md`).

The set is two layers. **Strategic pillars (S1–S6)** answer *why build this and what
business it is* - the "store of the future" operating-model bets. **UX pillars
(U1–U7)** answer *how the experience must behave* at every touchpoint - the design
constitution. A good blueprint step is defensible from at least one S and one U.

---

## Strategic pillars (S1–S6)

### S1 — Serve both economies on one spine
- **id:** S1
- **type:** strategic
- **oneLiner:** Insured (~16%) and cash/uninsured (~84%) are different journeys sharing one service spine; the cash majority must never feel like a degraded afterthought.
- **sources:** `wiki/consumer-context/two-economy-affordability`, `design-kit/templates/future-state-principles` (#2), `wiki/medical-schemes/cash-uninsured-pathway`

### S2 — Pharmacy as the health front door / destination
- **id:** S2
- **type:** strategic
- **oneLiner:** Design scripting as the entry to an ongoing care relationship (screening, advice, chronic management, telehealth), not a one-off transaction — treat the store + clinic estate as a strategic asset.
- **sources:** `wiki/ux-service-design/consultancy-pharmacy-research` (Oliver Wyman, Deloitte, McKinsey, EY), `wiki/dischem/competitive-landscape-sa-pharmacy`, `wiki/ux-service-design/healthcare-service-design-patterns` (digital front door)

### S3 — Compete on service, not price (price is regulated)
- **id:** S3
- **type:** strategic
- **oneLiner:** SEP + capped dispensing fee mean the medicine price is largely fixed; the only durable differentiator is the experience wrapped around the drug — convenience, reliability, trust.
- **sources:** `wiki/sa-regulatory/sep-dispensing-fee`, `wiki/ux-service-design/consultancy-pharmacy-research` (Bain "beyond the pill"), `wiki/dischem/competitive-landscape-sa-pharmacy`

### S4 — The chronic-medicine flywheel is the retention engine
- **id:** S4
- **type:** strategic
- **oneLiner:** Proactive, managed chronic repeats (CDL/CCMDD) are the recurring relationship that compounds loyalty and adherence — own the proactive refill loop the courier pharmacies currently win.
- **sources:** `wiki/dischem/competitive-landscape-sa-pharmacy`, `wiki/global-benchmarks/patterns-to-borrow-and-cautions` (#5 auto-refill/med-sync), `wiki/ux-service-design/consultancy-pharmacy-research` (McKinsey med-sync), `design-kit/templates/future-state-principles` (#7)

### S5 — Pharmacist at top-of-licence; automate the toil
- **id:** S5
- **type:** strategic
- **oneLiner:** Use automation, central-fill and telepharmacy to absorb dispensing mechanics so pharmacists do counselling and clinical work — the human moments that build trust and the front door's value.
- **sources:** `wiki/ux-service-design/consultancy-pharmacy-research` (Deloitte/McKinsey/EY, IDEO "pharmacist forward"), `wiki/digital-transformation/telepharmacy-and-omnichannel`, `design-kit/templates/future-state-principles` (#4)

### S6 — From prescription fulfilment to treatment orchestration
- **id:** S6
- **type:** strategic
- **oneLiner:** Today the patient is forced to coordinate across prescriber, pharmacy, scheme, stock and delivery; the opportunity is to absorb that coordination into one system — shifting from dispensing a script to orchestrating the whole treatment journey.
- **sources:** `wiki/dischem/dischem-rx-current-journey`, `wiki/dischem/pharmacy-complaints-pain-points`, `wiki/concepts/omnichannel-fulfilment`, `wiki/digital-transformation/interoperability-identity-records`, `wiki/concepts/chronic-medicine-flywheel`

---

## UX pillars (U1–U7)

### U1 — Channel ladder: WhatsApp-first & data-frugal
- **id:** U1
- **type:** ux
- **oneLiner:** Meet people on the channel they already have — WhatsApp/USSD/SMS first, app as enhancement never a gate; low-data, async, resumable, idempotent by default.
- **sources:** `wiki/ux-service-design/inclusive-low-bandwidth-design`, `design-kit/templates/future-state-principles` (#1, #10), `wiki/consumer-context/_index`

### U2 — Never leave them guessing (status & transparency)
- **id:** U2
- **type:** ux
- **oneLiner:** Honest real-time status at every step (received → validated → funded → ready → on the way); the silent backstage wait and unexplained rejection are the primary pains to kill.
- **sources:** `design-kit/templates/future-state-principles` (#5), `wiki/ux-service-design/healthcare-service-design-patterns` (transparency), `wiki/global-benchmarks/patterns-to-borrow-and-cautions` (#4 tracking)

### U3 — Give me all the variables upfront
- **id:** U3
- **type:** ux
- **oneLiner:** Surface everything that materially affects the decision before commitment — cost, funding/cover, stock availability, timing/ETA, and alternatives — never spring a surprise. (Money is the sharpest case, not the whole of it.)
- **sources:** `wiki/sa-regulatory/sep-dispensing-fee`, `wiki/medical-schemes/realtime-claims-switching`, `wiki/consumer-context/two-economy-affordability`, `wiki/global-benchmarks/patterns-to-borrow-and-cautions` (#11), `design-kit/templates/future-state-principles` (#3), `wiki/consumer-context/last-mile-addressing-logistics`, `wiki/medical-schemes/dsp-formularies-copayments`

### U4 — Design for graceful failure (always a human fallback)
- **id:** U4
- **type:** ux
- **oneLiner:** Out-of-stock, claim rejected, invalid script, failed delivery, power-out will happen; judge the service on recovery — plain-language errors that blame the system, never a dead end, always a route to a pharmacist.
- **sources:** `wiki/ux-service-design/healthcare-service-design-patterns` (error/safety messaging), `design-kit/templates/future-state-principles` (#12), `wiki/ux-service-design/inclusive-low-bandwidth-design` (offline-tolerant)

### U5 — Dignity, privacy & language by default
- **id:** U5
- **type:** ux
- **oneLiner:** Stigma-aware handling of sensitive medicines, discreet notifications, plain language in the user's language, and POPIA-grade consent that is understood — not just collected; caregivers/proxies are first-class users.
- **sources:** `wiki/ux-service-design/healthcare-service-design-patterns` (trust & safety, consent), `wiki/ux-service-design/inclusive-low-bandwidth-design` (multilingual), `design-kit/templates/future-state-principles` (#9, #11)

### U6 — Reduce the journey, don't just digitise it
- **id:** U6
- **type:** ux
- **oneLiner:** Prefer eliminating steps (re-script visits, re-keying, repeat trips) over making existing steps prettier; one profile across channels, never re-disclose; measure friction removed and outcomes improved, not features shipped.
- **sources:** `design-kit/templates/future-state-principles` (#13), `wiki/digital-transformation/telepharmacy-and-omnichannel` (one profile, many channels), `wiki/global-benchmarks/patterns-to-borrow-and-cautions` (#1 token)

### U7 — Adherence-as-design (effectiveness, not compliance)
- **id:** U7
- **type:** ux
- **oneLiner:** Effectiveness is the delta between a drug's efficacy and real-world use, lost in the experience after dispensing; design the label/schedule and refill loop as a behaviour-change surface, not a reminder bolt-on.
- **sources:** `wiki/ux-service-design/consultancy-pharmacy-research` (frog efficacy→effectiveness, CVS ScriptPath, Mad*Pow), `wiki/global-benchmarks/patterns-to-borrow-and-cautions` (#6 adherence packaging), `design-kit/templates/future-state-principles` (#7)

---

## Quick map (for embedding)

| id | type | name |
|---|---|---|
| S1 | strategic | Serve both economies on one spine |
| S2 | strategic | Pharmacy as the health front door |
| S3 | strategic | Compete on service, not price |
| S4 | strategic | Chronic-medicine flywheel = retention engine |
| S5 | strategic | Pharmacist at top-of-licence; automate the toil |
| S6 | strategic | From prescription fulfilment to treatment orchestration |
| U1 | ux | Channel ladder: WhatsApp-first & data-frugal |
| U2 | ux | Never leave them guessing (status & transparency) |
| U3 | ux | Give me all the variables upfront |
| U4 | ux | Design for graceful failure |
| U5 | ux | Dignity, privacy & language by default |
| U6 | ux | Reduce the journey, don't just digitise it |
| U7 | ux | Adherence-as-design |

**JS-ready (for `DATA.pillars` in #2–#4):**
```js
const PILLARS = [
  {id:"S1", type:"strategic", name:"Serve both economies on one spine", oneLiner:"Insured (~16%) and cash (~84%) are different journeys sharing one spine; the cash majority is never a degraded afterthought."},
  {id:"S2", type:"strategic", name:"Pharmacy as the health front door", oneLiner:"Scripting is the entry to an ongoing care relationship, not a one-off transaction; the store+clinic estate is a strategic asset."},
  {id:"S3", type:"strategic", name:"Compete on service, not price", oneLiner:"SEP + capped dispensing fee fix the price; the durable differentiator is the experience around the drug."},
  {id:"S4", type:"strategic", name:"Chronic-medicine flywheel = retention engine", oneLiner:"Proactive managed chronic repeats are the recurring relationship that compounds loyalty and adherence."},
  {id:"S5", type:"strategic", name:"Pharmacist at top-of-licence; automate the toil", oneLiner:"Automation/central-fill/telepharmacy absorb mechanics so pharmacists do the clinical, trust-building work."},
  {id:"S6", type:"strategic", name:"From prescription fulfilment to treatment orchestration", oneLiner:"Today the patient coordinates across prescriber, pharmacy, scheme, stock and delivery; absorb that coordination into one system — from dispensing a script to orchestrating the whole treatment journey."},
  {id:"U1", type:"ux", name:"Channel ladder: WhatsApp-first & data-frugal", oneLiner:"WhatsApp/USSD/SMS first, app as enhancement; low-data, async, resumable, idempotent by default."},
  {id:"U2", type:"ux", name:"Never leave them guessing", oneLiner:"Honest real-time status at every step; the silent wait and unexplained rejection are the primary pains."},
  {id:"U3", type:"ux", name:"Give me all the variables upfront", oneLiner:"Surface everything that materially affects the decision before commitment — cost, cover, stock, timing/ETA, alternatives; never spring a surprise (money is the sharpest case, not the whole of it)."},
  {id:"U4", type:"ux", name:"Design for graceful failure", oneLiner:"Plain-language recovery, never a dead end, always a route to a pharmacist."},
  {id:"U5", type:"ux", name:"Dignity, privacy & language by default", oneLiner:"Stigma-aware, discreet, multilingual, POPIA-grade consent; caregivers/proxies are first-class users."},
  {id:"U6", type:"ux", name:"Reduce the journey, don't just digitise it", oneLiner:"Eliminate steps and re-keying; one profile across channels; measure friction removed, not features shipped."},
  {id:"U7", type:"ux", name:"Adherence-as-design", oneLiner:"Effectiveness is lost after dispensing; design the schedule/label and refill loop as a behaviour-change surface."}
];
```
