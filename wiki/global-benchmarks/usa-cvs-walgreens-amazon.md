---
type: wiki
title: "USA — CVS/Caremark, Walgreens, Amazon Pharmacy/PillPack, Cost Plus, Capsule"
domain: global-benchmarks
status: draft
confidence: medium
tags: [domain/global, region/global, journey/refill, journey/deliver, journey/pay, topic/adherence, topic/last-mile, topic/trust-safety, topic/e-prescription]
sources: [src-gbl-ftc-pbm-report, src-gbl-amazon-pharmacy, src-gbl-costplus-drugs]
created: "2026-06-13"
updated: "2026-06-13"
---

# USA — retail pharmacy, PBMs, and the new direct-to-patient entrants

The US has the most commercially aggressive prescription-fulfilment UX in the
world and, simultaneously, the most distorted pricing layer. Its **feature
patterns** (auto-refill, med-sync, same-day Rx delivery, dose-packaging by mail,
subscription generics, radical price transparency) are highly borrowable; its
**funding architecture** — the pharmacy benefit manager (PBM) — is the single
biggest thing SA should *not* import. Read this page as "borrow the UX, reject
the plumbing".

## The plumbing to reject: the PBM layer

US drug payment runs through **pharmacy benefit managers**. A PBM sits between
insurer, pharmacy and manufacturer: it builds the **formulary** (which drugs are
covered/preferred), negotiates manufacturer **rebates**, adjudicates claims,
reimburses pharmacies, and runs its own mail-order/specialty pharmacies.
Three PBMs — **Caremark (CVS Health), Express Scripts (Cigna), OptumRx
(UnitedHealth)** — processed **~80% of the ~6.6 billion prescriptions** dispensed
by US pharmacies in 2023; the top six processed **>90%** [[src-gbl-ftc-pbm-report]].
Each is **vertically integrated** with a major insurer and with retail/specialty
pharmacies (CVS Health = Caremark + Aetna + CVS pharmacies), which lets the same
corporate family set the formulary, steer patients to its own pharmacies, and
retain the rebate spread. The FTC found the big three marked up many specialty
generics by hundreds-to-thousands of percent, generating **>$7.3bn** above
acquisition cost (2017–2022), and sued them in September 2024 over insulin
pricing [[src-gbl-ftc-pbm-report]]. The lesson for SA: opaque rebate-driven
middle layers destroy price legibility. SA's **single exit price (SEP)** regime
and capped dispensing fee already avoid this — protect that.

## CVS Health / Caremark — auto-refill as default

On the retail side, CVS's borrowable mechanism is **ReadyFill** auto-refill: for
eligible maintenance medicines (BP, cholesterol, diabetes), CVS automatically
prepares the next fill and notifies the patient when it is ready — no order step.
Controlled substances and short supplies are excluded; the patient toggles
auto-refill per prescription in the app. CVS layers **same-day or 1–2 day Rx
delivery** on top, and mail order via Caremark is built around 90-day supplies.
CVS Health revenue was ~**$372.8bn** in FY2024. The transferable idea is
**making the refill the default and the cancel the exception** for stable chronic
therapy — directly relevant to SA chronic/CDL repeat dispensing.

## Walgreens — med-sync and a cautionary corporate decline

Walgreens' app lets patients **scan the barcode** on a prescription label to
refill, and its **"Save a Trip Refills"** aligns all eligible maintenance meds to
a single pickup/delivery date (medication synchronisation) — a proven adherence
and convenience pattern. But Walgreens is also a cautionary tale of retail
overreach: it announced ~1,200 store closures (Oct 2024), posted a large FY2024
loss driven by a VillageMD goodwill impairment, and **went private via Sycamore
Partners** in a ~$10bn deal (announced March 2025, closed ~August 2025), ending
roughly a century as a public company. Scale and discounting alone do not
guarantee a durable pharmacy business.

## Amazon Pharmacy + PillPack — subscription generics and logistics

Amazon is the clearest "platform-grade fulfilment" benchmark. Its mechanisms:
- **Price at checkout + comparison.** Amazon Pharmacy runs the script through
  insurance and **displays the price**, auto-comparing cash/coupon options for
  transparency [[src-gbl-amazon-pharmacy]].
- **RxPass.** A flat **US$5/month** subscription for Prime members giving
  **unlimited fills of ~60 eligible generics** (80+ conditions), free delivery,
  24/7 pharmacist access — and **no insurance involved**. Launched Jan 2023;
  extended to 50m+ Medicare beneficiaries in 2024 [[src-gbl-amazon-pharmacy]].
- **Same-day delivery at scale.** Mode-appropriate logistics (e-bikes in dense
  cities, EVs in suburbs, a drone pilot from Oct 2023). Announced (Feb 2026)
  expansion to **nearly 4,500 US cities/towns by end of 2026** [[src-gbl-amazon-pharmacy]].
- **PillPack (acquired 2018).** Medicines **pre-sorted into dose packets labelled
  by date and time**, delivered by mail — adherence packaging as a default for
  multi-med patients [[src-gbl-amazon-pharmacy]].

PillPack-style dose packaging and a flat-fee chronic-generics subscription are
two of the most transferable ideas on this page. (Dis-Chem already runs a
PackMyMeds pre-pack/reminder service [[src-dc-packmymeds]]; the gap is the
subscription-economics and the dose-packet format.)

## Mark Cuban Cost Plus Drugs — transparency as the product

Cost Plus prices every drug as a **fully disclosed acquisition cost + 15% markup
+ $5 dispensing fee + $5 shipping** — **no insurance, no PBM** [[src-gbl-costplus-drugs]].
Co-founded Jan 2022, it opened its own Dallas manufacturing plant in 2023.
Crucially, independent analysis shows it is **not always cheaper** than insurance
(better off in <12% of generic cases per a 2024 STAT analysis); its real product
is **price legibility** and shortage relief, not guaranteed savings
[[src-gbl-costplus-drugs]]. The borrowable idea for SA is the **itemised,
defensible price breakdown** shown to the patient before they commit — which maps
neatly onto SA's already-transparent SEP + dispensing-fee structure.

## Capsule — same-day courier, and the limits of the model

Capsule (NYC, 2016) pioneered a phone-first pharmacy: e-prescribed → filled →
**same-day free hand-delivery by courier**, with **text-based pharmacist chat**
and insurance handled in the background. It is also a cautionary tale: it cut
~13% of staff in October 2023 amid retrenchment from aggressive multi-city
expansion. The UX (courier same-day + chat-with-pharmacist) is excellent; the
unit economics of free dedicated courier delivery are hard — a real SA constraint
given last-mile cost.

## E-prescribing rail (context)

US e-prescribing runs over the **Surescripts** network connecting prescribers,
pharmacies, PBMs and EHRs; **EPCS** is the DEA-regulated, 2FA-protected subset for
controlled substances. Surescripts reported ~2.5bn electronic prescriptions in
2023 (self-reported). Unlike the UK/Australia, the US has no single
government-run patient-facing e-script token — fulfilment UX is owned by private
players, which is why the feature innovation is intense but the system is
fragmented.

## What to borrow for SA

- **Auto-refill as the default for stable chronic therapy** (CVS ReadyFill) —
  refill is automatic, cancel is the exception. Fits SA CDL repeat dispensing and
  Dis-Chem PackMyMeds [[src-dc-packmymeds]].
- **Medication synchronisation** (Walgreens Save a Trip) — align a patient's
  repeats to one pickup/delivery date; fewer trips, better adherence.
- **PillPack-style dose packaging by date/time, delivered** — strong adherence
  aid for polypharmacy and chronic patients.
- **Flat-fee chronic-generics subscription** (RxPass) — predictable monthly cost
  for common chronic generics; aligns with SA's price-sensitive cash market.
- **Price-at-checkout transparency** (Amazon + Cost Plus) — show an itemised,
  defensible price (SEP + dispensing fee) before commit; build trust.
- **Mode-appropriate last-mile** (Amazon) — match delivery mode to geography
  rather than one expensive courier model everywhere.

## What doesn't transfer

- **The PBM/rebate layer.** SA has no PBM-style rebate middle layer; medical
  schemes + DSPs + SEP do this job differently [[wiki/medical-schemes/_index]].
  Do not recreate formulary-rebate opacity.
- **Insurance-driven pricing at the till.** US "price" is a function of plan
  design; SA SEP makes the listed price the price — a strength to keep.
- **Free dedicated same-day courier as a universal default** (Capsule). SA
  last-mile cost and addressing make this uneconomic outside dense metros
  [[wiki/consumer-context/_index]].
- **Drone delivery at national scale** — regulatory and density assumptions don't
  hold in SA today (flag 🔮 requires-reform / future).

## See also

- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions]] — the synthesis
- [[wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps]] — contrast: state-run rail
- [[wiki/medical-schemes/_index]] — SA scheme/DSP funding (vs PBMs)
- [[wiki/dischem/_index]] — Dis-Chem PackMyMeds / DeliverD current state

## Open questions

- Amazon Pharmacy's total Rx volume/revenue is not publicly broken out — scale
  is inferred, not confirmed.
- Capsule's current (2025–26) city coverage is poorly documented; treat its
  same-day model as proven-but-fragile rather than steady-state.
