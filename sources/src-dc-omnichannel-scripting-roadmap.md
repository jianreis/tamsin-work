---
type: source
title: "Customer Modernisation — Omnichannel Scripting Board (Virtual Order Operational Flow, 'Script Re-imagined')"
url: "n/a (internal board export, PDF)"
author: "Dis-Chem / Bigly Labs (Customer Modernisation programme)"
publisher: "Dis-Chem (internal)"
published: "2026-06-14"
retrieved: "2026-06-14"
source_kind: company
reliability: B
tags: [domain/dischem, domain/digital, topic/automation, topic/e-prescription, journey/submit, journey/dispense, journey/collect, journey/deliver, region/za]
---

## Summary

An internal Dis-Chem "Customer Modernisation" board titled **"Script Re-imagined —
Virtual Order Operational Flow"**. It is a **future-state operational flow / technology
roadmap** for the omnichannel scripting (prescription) experience: a single virtual
order queue feeding an AI-assisted Central Care Centre, an automated dispensary
(anchored on the **ROWA** automated picker/dispensing robot), and an omnichannel
collection-and-delivery back end. It names the **specific systems/tools** intended to
run each step (Ticketing, Dashboard, BRIX, UiPath/RPA, ROWA, Label Printer, Fiori,
PICCUP) and the **operating roles** (PBQ = pharmacy-counter/back-office staff;
Pharmacist; Virtual Manager; VC = a consolidation/dispatch hub; Drivers).

The board is laid out as eight top-level stages — **Intake → Process → Pick → Check →
Pack → Collection → Dispatch & Consolidation → Deliver** — across four operational
swimlanes: **Central Care Centre (AC)**, **Pharmacy Back of House**, **Pharmacy
Counter**, and a delivery lane. A caption defines the **Dashboard** as the
**"E2E workflow manager (dispensary and front store; collections and delivery)"**.

**Reliability B (justified):** company-primary artefact, so authoritative for *what
Dis-Chem intends to build* and the *named systems*. But it is **forward-looking /
planned, not confirmed live**: it is a design board, carries unresolved annotations
(e.g. a sticky note proposing a driver collection window) and minor typos ("lables",
"councils", "PICCUP"). Treat capability existence/labels as B; treat go-live, vendor
contracts, sequencing and timelines as **unstated / not evidenced** (no dates, no
phasing, no status markers appear on the board).

## Key claims

- The board is the **"Virtual Order Operational Flow"** under a programme banner
  **"Script Re-imagined"**; it depicts a **future-state** omnichannel scripting flow. _(p.1, title)_
- Eight operational stages run left-to-right: **Intake, Process, Pick, Check, Pack,
  Collection, Dispatch & Consolidation, Deliver**. _(p.1, stage headers)_
- Stage step-labels: Intake = *Customer Calls* / *Customer virtually submits order* /
  *Order captured and confirmed*; Process = *Order prioritised* / *Order dispensed*;
  Pick = *Order picked and/or prepared*; Check = *Order checked*; Pack = *Order packed*;
  Collection = *Order stored for collection* / *Order collected by PBQ* / *Customer Pays*;
  Dispatch & Consolidation = *Order (consolidated and) dispatched* / *Order collected*;
  Deliver = *Order collected* / *Order handed over to customer*. _(p.1, step labels)_
- Four swimlanes: **Central Care Centre (AC)**, **Pharmacy Back of House**, **Pharmacy
  Counter**, and a delivery lane; a **Pharmacy Boundary** / **Window** marker separates
  in-pharmacy steps from collection/dispatch. _(p.1, lane labels)_
- The **Dashboard is the end-to-end workflow manager** spanning *"dispensary and front
  store; collections and delivery"*. _(p.1, caption)_
- **Inputs:** two intake paths feed the queue — a **Virtual Order (incl. direct to
  dispensary)** path and a **Phone Call to Dispensary** path. _(p.1, left inputs)_
- **AI captures, standardises & routes:** *"AI interprets unstructured inputs, extracts
  prescription and patient data, standardises the request into a dispensing-ready
  format, and determines whether the response or capturing requires human
  [intervention]."* Tagged **Ticketing + Dashboard**. _(p.1, Central Care Centre)_
- **PBQ captures order or resolves query:** *"PBQ responds to customer virtually or via
  call, and if relevant, captures order request into dashboard."* Tagged **Dashboard**;
  AI work can be **"Re-routed to human."** _(p.1, Central Care Centre)_
- **Workflow manager — Prioritises & Routes:** *"All orders enter a single virtual queue
  and are prioritised based on SLA, medication type, fulfilment method, and store or VC
  capacity. Orders are routed to [the appropriate dispensing path]."* Tagged
  **Ticketing + Dashboard**. _(p.1, Central Care Centre)_
- **Auto-dispense:** *"Eligible repeat orders are automatically created and dispensed in
  the dispensing system without human intervention."* Tagged **BRIX**. _(p.1, Process)_
- **PBQ/s or Pharmacist/s dispenses** (exception path): *"PBQ or Pharmacist dispenses
  orders that cannot be auto-processed due to exceptions. Example, complex orders or
  schedule 6 orders."* Reached via a **"Rerouted"** connector. Tagged **BRIX** and
  **UiPath (RPA)**. _(p.1, Process)_
- **PBQ loads stock:** *"Load stock into ROWA or shelves."* _(p.1, Pharmacy Back of House)_
- **ROWA AUTOMATED PICKER/DISPENSING ROBOT — Pick (Automated / Manual):** *"System
  generates pick instructions. **ROWA** dispenses eligible stock; non-ROWA items are
  manually picked."* Tagged **ROWA**. _(p.1, Pharmacy Back of House / Pick)_
- **PBQ prepares non-ROWA items:** *"PBQ prepares compounded, mixed, bottled, or special
  items not handled by automation."* _(p.1, Pharmacy Back of House)_
- **Pharmacist/s labels & checks:** *"Pharmacist reviews the dispensed order, verifies
  correctness, addresses clinical risks, and performs a single sign-off."* Note:
  *"Pharmacist selects next order, meds shoot out of automated dispenser, labels print
  next to shoot, check against script, and digitally signs off."* Tagged **Label Printer**.
  _(p.1, Pharmacy Back of House / Check)_
- **Assistant/s packs:** *"Dispensary Assistant packs medications, inserts, and
  documentation into a collection or delivery-ready parcel."* _(p.1, Pack)_
- **Order Storage:** *"Packed orders are staged in a secure storage area and marked as
  ready for collection."* _(p.1, Pack/Collection)_
- **Automated retrieval:** *"Automated arm and conveyor belt / pneumatic air tubes"*
  retrieve the parcel to the counter. _(p.1, Collection)_
- **PBQ/s hands over:** PBQ verifies identity and hands over the retrieved parcel at the
  counter. _(p.1, Pharmacy Counter)_
- **Customer scans QR code** (tagged **Dashboard**) → **PBQ counsels** (counselling) →
  **Customer pays** (tagged **BRIX**) → **Customer leaves**. _(p.1, Pharmacy Counter / Pay)_
- **Delivery branch:** **VC/s collects, consolidates & dispatches** — *"VC consolidates
  delivery orders, groups them into routes, and dispatches to drivers"* (tagged **Fiori**
  and **PICCUP**) → through a **Window** → **Driver collects** (PICCUP) → **Driver
  Delivers** — *"Driver delivers the order to the customer and captures proof of
  delivery"* (PICCUP) → **Customer receives**. _(p.1, Dispatch & Consolidation / Deliver)_
- **Virtual Manager** (support role): *"Manager monitors virtual queue, ensures SLAs are
  being met and assists with any issues."* _(p.1, support lane)_
- Open annotation (sticky note, not committed): *"Drivers could collect directly via a
  [collection] window."* _(p.1, idea note)_
- Named systems/tools on the board: **Ticketing**, **Dashboard** (E2E workflow manager),
  **BRIX**, **UiPath (RPA)**, **ROWA**, **Label Printer**, **Fiori**, **PICCUP**. _(p.1, tags)_
- Operating roles: **PBQ**, **Pharmacist**, **Dispensary Assistant**, **Virtual
  Manager**, **VC** (consolidation/dispatch hub), **Driver**. _(p.1, role icons)_

## Verbatim excerpts

> "Script Re-imagined — Virtual Order Operational Flow" _(title, p.1)_

> "Dashboard = E2E workflow manager (dispensary and front store; collections and delivery)" _(caption, p.1)_

> "AI interprets unstructured inputs, extracts prescription and patient data, standardises the request into a dispensing-ready format, and determines whether the response or capturing requires human [intervention]." _(AI captures, standardises & routes, p.1)_

> "All orders enter a single virtual queue and are prioritised based on SLA, medication type, fulfilment method, and store or VC capacity. Orders are routed to [the appropriate dispensing path]." _(Workflow manager, p.1)_

> "Eligible repeat orders are automatically created and dispensed in the dispensing system without human intervention." _(Auto-dispense, BRIX, p.1)_

> "PBQ or Pharmacist dispenses orders that cannot be auto-processed due to exceptions. Example, complex orders or schedule 6 orders." _(exception path, BRIX / UiPath (RPA), p.1)_

> "Load stock into ROWA or shelves." _(PBQ loads stock, p.1)_

> "System generates pick instructions. ROWA dispenses eligible stock; non-ROWA items are manually picked." _(Pick (Automated / Manual), ROWA tag, p.1)_

> "PBQ prepares compounded, mixed, bottled, or special items not handled by automation." _(PBQ prepares non-ROWA items, p.1)_

> "Pharmacist reviews the dispensed order, verifies correctness, addresses clinical risks, and performs a single sign-off." … "Pharmacist selects next order, meds shoot out of automated dispenser, lables [labels] print next to shoot, check against script, and digitally signs off." _(Pharmacist labels & checks, Label Printer, p.1)_

> "Dispensary Assistant packs medications, inserts, and documentation into a collection or delivery-ready parcel." _(Assistant packs, p.1)_

> "Packed orders are staged in a secure storage area and marked as ready for collection." _(Order Storage, p.1)_

> "Automated arm and conveyor belt / pneumatic air tubes" _(Automated retrieval, p.1)_

> "VC consolidates delivery orders, groups them into routes, and dispatches to drivers." _(VC collects/consolidates/dispatches, Fiori / PICCUP, p.1)_

> "Driver delivers the order to the customer and captures proof of delivery." _(Driver Delivers, PICCUP, p.1)_

> "Manager monitors virtual queue, ensures SLAs are being met and assists with any issues." _(Virtual Manager, p.1)_

> "Drivers could collect directly via a [collection] window." _(open sticky-note annotation, p.1)_

## Used in
- [[dischem-scripting-tech-roadmap]]
