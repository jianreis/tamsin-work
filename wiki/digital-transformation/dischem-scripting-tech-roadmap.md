---
type: wiki
title: "Dis-Chem scripting tech roadmap (Virtual Order Operational Flow)"
domain: digital-transformation
status: draft
confidence: medium
tags: [domain/dischem, domain/digital, topic/automation, topic/e-prescription, topic/ai, journey/submit, journey/validate, journey/dispense, journey/pay, journey/collect, journey/deliver, region/za]
sources: [src-dc-omnichannel-scripting-roadmap]
created: "2026-06-14"
updated: "2026-06-14"
---

# Dis-Chem scripting tech roadmap (Virtual Order Operational Flow)

This page inventories the **technology capabilities Dis-Chem has already roadmapped**
for its future-state omnichannel scripting (prescription) experience, captured from the
internal **"Script Re-imagined — Virtual Order Operational Flow"** board
[[src-dc-omnichannel-scripting-roadmap]]. It exists so the future-state journey/blueprint
build can **weave in technology that is already planned** — grounding the deliverable in
Dis-Chem's own intent rather than inventing capability. The proof-point for the
"automate-the-toil" strategy is the **ROWA automated picker/dispensing robot**.

**What the board describes.** A single **virtual order queue** feeds an **AI-assisted
Central Care Centre (AC)**, routes orders to an **automated dispensary** (ROWA-anchored),
then through **omnichannel collection and delivery**. The flow runs across eight stages —
**Intake → Process → Pick → Check → Pack → Collection → Dispatch & Consolidation →
Deliver** — and four swimlanes: **Central Care Centre (AC)**, **Pharmacy Back of House**,
**Pharmacy Counter**, and **delivery**. The unifying spine is the **Dashboard**, defined
on the board as the *"E2E workflow manager (dispensary and front store; collections and
delivery)"* [[src-dc-omnichannel-scripting-roadmap]].

**Status caveat.** This is a **planned / forward-looking design**, not a confirmation of
live systems. The board carries **no dates, phasing or go-live markers**, and includes an
unresolved annotation (a proposed driver collection window). Treat capability *labels* as
reliable; treat *timeline, sequencing and live-status* as **unstated** (see Open
questions). Source is company-primary but forward-looking → Tier B.

## Roadmapped capability inventory

> Legend — **Journey spine:** PRESCRIBE · SUBMIT · VALIDATE/CLINICAL-CHECK · FUND/CLAIM ·
> PAY · DISPENSE · COLLECT/DELIVER · ADHERE · REFILL/RENEW.
> **Strategic pillars:** S1 both-economies · S2 front-door · S3 service-not-price ·
> S4 chronic-flywheel · S5 pharmacist/automate-toil.
> **UX pillars:** U1 WhatsApp-first · U2 status · U3 money-legible · U4 graceful-failure ·
> U5 dignity/language · U6 reduce-journey · U7 adherence.
> Named systems/tools on the board: **Ticketing**, **Dashboard**, **BRIX**, **UiPath (RPA)**,
> **ROWA**, **Label Printer**, **Fiori**, **PICCUP**.

| # | Capability (board label) | What it does | Journey stage | Strategic pillar(s) | UX pillar(s) | Named tool / status |
|---|---|---|---|---|---|---|
| 1 | **Virtual Order intake (incl. direct to dispensary)** | Customer virtually submits an order; can route straight to the dispensary | SUBMIT | S2, S4 | U1, U6 | Dashboard · *planned* |
| 2 | **Phone Call to Dispensary intake** | Voice channel into the same virtual queue | SUBMIT | S1, S2 | U1, U5 | Ticketing · *planned* |
| 3 | **AI captures, standardises & routes** | AI reads unstructured inputs, extracts script + patient data, standardises into a dispensing-ready format, and decides whether human handling is needed | SUBMIT → VALIDATE | S5, S2 | U4, U6 | Ticketing + Dashboard · *planned* |
| 4 | **PBQ captures order / resolves query** | Human fallback: PBQ answers (virtually or by call) and captures the order into the dashboard; AI work can be "re-routed to human" | SUBMIT → VALIDATE | S3, S5 | U4, U5 | Dashboard · *planned* |
| 5 | **Workflow manager — Prioritises & Routes** | Single virtual queue; prioritises by SLA, medication type, fulfilment method, and store/VC capacity; routes to the right dispensing path | VALIDATE → DISPENSE | S5, S4 | U2, U6 | Ticketing + Dashboard · *planned* |
| 6 | **Auto-dispense (eligible repeats)** | Eligible repeat orders auto-created and dispensed in the dispensing system without human intervention | DISPENSE · REFILL/RENEW | S4, S5 | U6, U7 | BRIX · *planned* |
| 7 | **PBQ/s or Pharmacist/s dispenses (exception path)** | Manual dispense for orders that cannot be auto-processed (e.g. complex or Schedule 6 orders) | DISPENSE | S5 | U4 | BRIX, UiPath (RPA) · *planned* |
| 8 | **PBQ loads stock** | Stock loaded into ROWA or onto shelves (feeds the automated picker) | DISPENSE (support) | S5 | — | — · *planned* |
| 9 | **ROWA — Pick (Automated / Manual)** ⭐ | **ROWA automated picker/dispensing robot**: system generates pick instructions; ROWA dispenses eligible stock; non-ROWA items manually picked | DISPENSE (Pick) | **S5**, S4 | U6 | **ROWA** · *planned* |
| 10 | **PBQ prepares non-ROWA items** | Human prep of compounded, mixed, bottled or special items not handled by automation | DISPENSE | S5, S3 | U4 | — · *planned* |
| 11 | **Pharmacist labels & checks (single sign-off)** | Pharmacist reviews dispensed order, verifies correctness, addresses clinical risks; meds shoot from the automated dispenser, labels print at point, checked against script, digital sign-off | CLINICAL-CHECK (Check) | S5, S3 | U4 | Label Printer · *planned* |
| 12 | **Assistant/s packs** | Dispensary Assistant packs meds, inserts and documentation into a collection- or delivery-ready parcel | DISPENSE (Pack) | S5 | — | — · *planned* |
| 13 | **Order Storage** | Packed orders staged in a secure store area, marked ready for collection | COLLECT (stage) | S5, S2 | U2 | — · *planned* |
| 14 | **Automated retrieval** | Automated arm + conveyor belt / pneumatic tubes bring the parcel to the counter | COLLECT | S5 | U6 | — · *planned* |
| 15 | **PBQ/s hands over** | PBQ verifies identity and hands the retrieved parcel to the customer at the counter | COLLECT | S3, S5 | U5 | — · *planned* |
| 16 | **Customer scans QR code** | Customer self-identifies / confirms collection by scanning a QR code | COLLECT | S2 | U2, U6 | Dashboard · *planned* |
| 17 | **PBQ counsels** | Pharmacy counter staff provide medication counselling at handover | COLLECT · ADHERE | S3, S5 | U5, U7 | — · *planned* |
| 18 | **Customer pays** | Payment taken at the counter (point-of-sale) | PAY | S3 | U3 | BRIX · *planned* |
| 19 | **VC/s collects, consolidates & dispatches** | Consolidation hub (VC) groups delivery orders into routes and dispatches to drivers | COLLECT/DELIVER (Dispatch & Consolidation) | S1, S4 | U6 | Fiori, PICCUP · *planned* |
| 20 | **Driver collects** | Driver collects consolidated parcels (via a pharmacy/collection window) | DELIVER | S1 | U6 | PICCUP · *planned* |
| 21 | **Driver Delivers (proof of delivery)** | Driver delivers to the customer and captures proof of delivery | DELIVER | S1, S2 | U2, U6 | PICCUP · *planned* |
| 22 | **Customer receives** | Last-mile completion at the customer's location | DELIVER | S1 | U6 | PICCUP · *planned* |
| 23 | **Dashboard (E2E workflow manager)** | The spine: one workflow manager across dispensary + front store + collections + delivery | ALL STAGES | S2, S5 | U2 | Dashboard · *planned* |
| 24 | **Virtual Manager (SLA oversight)** | Human supervises the virtual queue, ensures SLAs are met, resolves issues | ALL STAGES (support) | S5, S3 | U4, U2 | Dashboard · *planned* |

⭐ = key automation proof-point for **S5 (pharmacist / automate-the-toil)**.

## ROWA — the automation anchor

The **ROWA automated picker/dispensing robot** is the centrepiece of the back-of-house
automation and the clearest evidence that Dis-Chem's future-state intends to **remove
manual picking toil** so pharmacist attention shifts to clinical check and counselling
[[src-dc-omnichannel-scripting-roadmap]]. On the board it sits in the **Pick** stage of
**Pharmacy Back of House**: PBQ loads stock into ROWA, the system generates pick
instructions, **ROWA dispenses eligible stock automatically**, and **only non-ROWA items
(compounded, bottled, special) are picked or prepared by hand**. The downstream
**"meds shoot out of automated dispenser, labels print next to shoot"** note implies a
ROWA-to-checking-bench conveyance feeding the pharmacist's single sign-off. ROWA is a
recognised commercial robotic dispensing system (see general evidence in
[[pharmacy-automation-and-robotics]]), so the throughput/accuracy case is well-established
in principle; what the board adds is that Dis-Chem **has named it as the intended platform**.

## How to use this page (for the journey/blueprint build)

- This is an **integration menu**: when a future-state journey step needs a technology
  enabler, pull the matching row above and cite [[src-dc-omnichannel-scripting-roadmap]].
- The board is an **operational** flow (frontstage + backstage), so it maps cleanly onto
  the backstage/support-process lanes of a service blueprint (see
  [[telepharmacy-and-omnichannel]] for the omnichannel-fulfilment framing and
  [[pharmacy-automation-and-robotics]] for the automation evidence base).
- Where the board is silent on customer-facing channel detail (it assumes a generic
  "virtual order"), combine with [[wiki/consumer-context/_index|consumer-context]] WhatsApp-first / status / money-legible
  patterns rather than treating the board as the channel design.

## Open questions

- **No timeline or sequencing.** The board shows no dates, phasing or live-status. Which
  capabilities are live now vs. in-build vs. aspirational? ROWA in particular — deployed,
  piloted, or planned? ⚠️ UNVERIFIED.
- **Vendor/system identities.** What exactly are **BRIX**, **PICCUP**, **VC** and the
  **Ticketing** platform (internal names vs. vendors)? **Fiori** implies an SAP front end
  and **UiPath** confirms RPA, but the dispensing system behind "BRIX" and the WMS/TMS
  behind "PICCUP" are not specified. ⚠️ UNVERIFIED.
- **Regulatory fit of fully automated dispensing.** "Auto-dispense ... without human
  intervention" for eligible repeats must still satisfy pharmacist-oversight and
  valid-prescription rules; the board's "single sign-off" suggests a pharmacist remains in
  the loop, but the legal boundary of *which* steps may run unattended needs checking
  against [[wiki/sa-regulatory/_index|sa-regulatory]] (GPP, Pharmacy Act supervision). 🔮 possibly requires-reform.
- **Where do funding/claim (medical-scheme) steps sit?** The board jumps from dispense to
  "Customer pays" (BRIX) with no explicit claim-switching/adjudication step. Is real-time
  scheme adjudication assumed inside BRIX, or out of scope here?
- **AI "human-in-the-loop" thresholds.** What triggers "re-routed to human" from the AI
  capture/route step, and how is that governed (clinical-safety, automation bias)?
- **Channel coverage.** Does "Virtual Order" include WhatsApp/USSD, or only app/web? Not
  specified.

## See also
- [[src-dc-omnichannel-scripting-roadmap]] — the board (source)
- [[pharmacy-automation-and-robotics]] — ROWA-class robotic dispensing evidence
- [[telepharmacy-and-omnichannel]] — omnichannel fulfilment & unified profile
- [[ai-in-pharmacy]] — AI capture/routing, agentic workflow risks & governance
- [[e-prescribing-systems-and-standards]] — e-Rx/standards underpinning "virtual order"
- [[dischem-dispensary-services]] · [[dischem-digital-channels]] — current-state Dis-Chem
- [[dischem-rx-current-journey]] — as-is scripting journey this roadmap re-imagines
</content>
