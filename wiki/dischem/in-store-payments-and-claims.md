---
type: wiki
title: "In-store payments and claims — how money moves at Dis-Chem (front shop, dispensary, clinic, cover)"
domain: dischem
status: draft
confidence: medium
tags: [domain/dischem, domain/schemes, journey/pay, journey/validate, project/sotf, region/za]
sources: [src-sotf-training-launch-2026, src-sotf-melrose-workshops-2026, src-sotf-steerco-decisions-2025, src-pay-dischem-payments-desk-2026, src-pay-sa-claims-payments-desk-2026, src-sch-claims-switching, src-sch-claim-rejections-gems]
created: "2026-09-30"
updated: "2026-09-30"
---

# In-store payments and claims

A first-pass map of how a rand moves from a Dis-Chem customer to a reconciled
entry in the books, built for the SOTF payments discovery work (employee lens
first, starting with retail finance on 1 Oct 2026). The shape is simple. Every
sale splits into **money paid now** (the customer, at a till) and **money
promised later** (a medical aid or insurer, paid in batches with a remittance
statement). Most of the finance work, and most of the friction, sits in
matching the promised money to what actually arrives. Internal process detail
is still thin: the vault holds the SOTF launch record and public desk research,
not finance's own procedures, so much of the backstage below is a hypothesis
to test with the team.

## The front stage: where customers pay today

- **Front shop.** Scan, Better Rewards discount applied instantly at the till
  (10% base, +5% Pharmacy Boost for 30 days after a script or OTC medicine,
  +5% when paying with a linked Capitec card, 20%+ tiers for Dis-Chem
  Health/Life policyholders) [[src-pay-dischem-payments-desk-2026]]. Tenders
  confirmed publicly: card, Mobicred (a wiCode keyed in by the cashier), RCS,
  Discovery Miles (voucher from the Discovery Bank app), virtual gift cards
  [[src-pay-dischem-payments-desk-2026]]. ⚠️ Cash-back, QR (SnapScan/Zapper),
  Payflex and store/staff accounts are unconfirmed.
- **Dispensary.** The pharmacy claims from the medical aid through a switch in
  real time and gets an answer in seconds: paid, paid with a co-payment, or
  rejected [[src-sch-claims-switching]] [[src-sch-claim-rejections-gems]]. Cash
  patients pay the regulated SEP plus dispensing fee
  ([[cash-uninsured-pathway]]). In SOTF stores the customer collects at the
  pharmacy counter and **pays at the front-shop POS**: a Magna bag means payment
  is due, a brown bag means nothing is due [[src-sotf-training-launch-2026]].
  Payment at the dispensary was deferred to 2028 with the Bricks/POS update
  [[src-sotf-melrose-workshops-2026]].
- **Clinic.** Consultation and medication are **two separate payments**; clinic
  services are paid at the Hub or POS [[src-sotf-training-launch-2026]]. Cash
  price for a Clinic Connect nurse consult is R99, R275 with a video doctor
  consult; "medical aid rates may differ" [[src-pay-dischem-payments-desk-2026]].
  Pharmacy clinics can claim with clinic tariff codes under a practice number,
  and scheme wellness benefits (e.g. Discovery health checks, flu vaccines)
  are claimed by the pharmacy [[src-pay-sa-claims-payments-desk-2026]].
- **Cover.** Card payment at the Hub and with the advisor at Melrose
  [[src-sotf-melrose-workshops-2026]]; ongoing premiums for Dis-Chem Health are
  by debit order [[src-pay-dischem-payments-desk-2026]].
- **Online.** Dis-Chem Online does not claim from medical aid; the customer pays
  and claims back. Pay on Collection routes the customer to a designated
  in-store counter [[src-pay-dischem-payments-desk-2026]].

## The backstage: from till to reconciled books

1. **Till closes the sale** and records each tender: card, cash, voucher/BNPL
   code, and the medical aid portion as a receivable.
2. **Store cash-up** compares declared tenders with the POS; cash goes by
   cash-in-transit or smart safe; card batches settle from the acquirer in
   about one to two business days [[src-pay-sa-claims-payments-desk-2026]].
3. **Medical aid pays in batches.** Schemes must pay within 30 days of receiving
   a claim (Medical Schemes Act s59(2)); claims are due by the end of the fourth
   month after service; a scheme that finds a claim wrong must say so within 30
   days, and the provider has 60 days to resubmit (Reg 6)
   [[src-pay-sa-claims-payments-desk-2026]]. Payment arrives with an electronic
   remittance advice listing which claims were paid.
4. **Reconciliation** matches each stream to sales: card settlements, cash
   deposits, remittances against claims, and ⚠️ probably supplier-funded
   Better Rewards discounts against suppliers (inferred, unconfirmed). Schemes
   can claw back overpayments from future remittances (s59(3), upheld June
   2026), so a remittance can land below the claims it covers
   [[src-pay-sa-claims-payments-desk-2026]].

## Payer types (working taxonomy, to confirm with finance)

| Payer | Who pays | Likely finance label |
|---|---|---|
| Walk-in cash/card customer | Customer at till | Cash sales / retail sales |
| Medical aid member, scheme portion | Scheme via remittance | Medical aid debtors / scheme receivables |
| Medical aid member, own portion (co-payment, self-payment gap) | Member at till | Cash sales |
| Pay-and-claim-back (e.g. online) | Customer; scheme refunds the member | Cash sales |
| Network health-insurance member (e.g. Dis-Chem Health at a clinic) | Insurer/administrator pays provider | ⚠️ Possibly treated like a medical aid debtor |
| Account customers (care homes, corporates, doctors, staff) | Account holder on statement | Trade debtors / account customers ⚠️ unconfirmed at Dis-Chem |
| Suppliers funding promotions and rewards | Supplier | Vendor recoverables ⚠️ inferred |
| TLC franchisees, independents (wholesale) | Franchisee | Trade debtors (CJ Distribution / TLC finance) |

Clicks' financial statements confirm "recoverables from vendors and medical
aids" sit inside trade receivables at its peer [[src-pay-sa-claims-payments-desk-2026]].
The care-facility "grouped scripts" process in SOTF shows institutional
collectors exist operationally [[src-sotf-training-launch-2026]].

## Friction already visible (hypotheses for discovery)

- Customers finish at the dispensary, then queue again at the front till to pay
  (the SOTF decoupled flow keeps POS-only payment until 2028).
- Co-payment surprises and rejections are discovered at the counter
  ([[realtime-claims-switching]]); "approval does not mean full payment".
- Clinic visits need two payments (consult and medication).
- Cash-versus-claim mix-ups produce double payments and slow refunds (D-grade
  complaints) [[src-pay-dischem-payments-desk-2026]].
- Online cannot claim medical aid.
- Many tender types, each with its own settlement and matching stream.
- Scheme-side errors and clawbacks land on finance weeks later (e.g. the 2025
  Discovery above-threshold overpayments) [[src-pay-sa-claims-payments-desk-2026]].

## Open questions

- Which switch(es) Dis-Chem uses; payment-run frequency by administrator; how
  remittances are matched and who chases short payments.
- Receivables mix (R3.57bn trade and other receivables at 31 Aug 2025) by payer
  type, and where ageing and write-offs concentrate.
- Whether clinics bill under the pharmacy practice number or nurses' numbers.
- How stacked Better Rewards discounts are funded and settled (Capitec 5% at
  POS or after the fact).
- Whether account, staff and corporate debtors exist and how they are invoiced.
- Whether Dis-Chem Health network claims at Dis-Chem clinics create a
  receivable from Kaelo/Centriq.

## See also

- [[wiki/dischem/store-of-the-future-programme]] · [[realtime-claims-switching]] ·
  [[dsp-formularies-copayments]] · [[cash-uninsured-pathway]] ·
  [[wiki/dischem/dischem-company-overview]]
- Discovery-session primer: `deliverables/sotf/payments-discovery-primer.html`
