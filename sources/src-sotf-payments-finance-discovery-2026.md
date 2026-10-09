---
type: source
title: "Stitch POC Discovery Workshop — retail finance payments discovery (transcript, 1 Oct 2026)"
url: "internal://dischem/stitch-poc-discovery-workshop-2026-10-01"
author: "Dis-Chem retail finance (medical aid, debtors, bookkeeping) with Bigly Labs"
publisher: "Dis-Chem — internal meeting recording (auto-transcript)"
published: "2026-10-01"
retrieved: "2026-10-09"
source_kind: company
reliability: B
tags: [domain/dischem, domain/schemes, journey/pay, journey/validate, journey/deliver, project/sotf, region/za]
---

# Summary

Auto-transcript (1h55m) of the SOTF payments discovery session with Dis-Chem
retail finance, framed around a possible **Stitch** payments proof of concept.
Participants heard in the room: the head of the area (addressed as Shama), the
medical aid team supervisor (Lorraine), debtors (Limahl), and bookkeeping
(Sanja, remote); Lizelle (medical aid/debtors) was referenced but absent. It is
the first employee-side evidence on how payments, medical aid claims, debtors
and store reconciliation actually run. **Reliability B, not A**: first-hand
from the people who run the processes, but the auto-transcript garbles names,
system names and numbers (e.g. "Unisoft" = Unisolv; the card switch is
rendered "Eccentric"/"Essentrix"/"Centric"). Verify any named system, account
number or figure before reuse.

Headline: the brief's hypothesis that **reconciliation is this team's biggest
pain is wrong for in-store** ("from a store perspective, we definitely get what
we need"). The pain sits in **online orders**, **recovering medical aid
shortfalls from customers months later**, **master data and operations at
source**, and **shared bot capacity**.

# Key claims

## Payer / customer types named
- **Standard debtors (BP accounts):** institutions (a university, old age homes),
  corporates and legacy pre-approved individuals with buying limits (~R500 to
  ~R10,000), set up at head office, used at any store via the business-partner
  (BP) number; customer swipes their loyalty card at the till and buys on
  account; monthly email statements; team collects. New individual accounts are
  no longer opened ("trying to get customers onto a prepaid basis").
- **Medical aid** (scheme pays; member pays levy/co-payment at the till).
- **Medical aid debtors:** shortfalls, rejections and reversals transferred
  from the medical aid team to debtors to recover from the member. Classified
  with standard debtors.
- **Online debtors:** online payments sit as a credit on the customer account
  until goods issue clears them. "Our online debtors are huge."
- **Cash/card customers; "buy aids"** (non-bank credit providers such as RCS)
  that settle Dis-Chem on 30 or 60 day terms, usually on 15th-15th or 5th-5th
  cycles.
- Dis-Chem Health / Dis-Chem Life premiums: "We don't get involved at all.
  They run their own accounting departments."

## Medical aid claim and payment
- Claims go from Unisolv (dispensing) through a switching house (MediKredit,
  MediSwitch named) or directly to some schemes; response returns via Unisolv;
  ERA and payments come directly from schemes, not via the switch.
- Levy/co-payment is posted to GK POS by article code and paid at the till.
- Most schemes pay ~30 days; some 60-90 days; Discovery pays weekly, per item
  per script.
- A shared **UiPath bot** matches electronic remittance to bank payment and
  updates the Remittances Register; mismatches (even small differences) need
  manual investigation, a call to the scheme, and transfer to debtors if the
  member is liable.
- All medical aid reconciliation happens in Unisolv ("claim settlement" is the
  team's "Bible"; plus the "script tracking" report). A nightly feed (~2am)
  updates a control account in SAP. **Bricks will replace Unisolv** with the
  same functionality.
- Each store needs its own bank account because the pharmacy licence/practice
  is linked to one bank account; medical aid payments go to Standard Bank.

## Store and bookkeeping reconciliation
- Per-store bank accounts: Absa for cash, Standard Bank for cards and medical
  aid; dual acquiring (Absa and Standard Bank) for resilience after banks "fell
  over"; Nedbank phased out.
- SAP GL main bank account plus 6-8 sub-accounts per store (debtors, medical
  aid, cash, cards, buy aids, merchants); bank statements auto-imported; sales
  interfaces matched against bank imports. Control accounts include safe, cash,
  offline cards, COD and script rejection.
- Bot exports sub-accounts split by tender to Excel; each bookkeeper covers ~14
  stores; work is mostly monthly, at month end.
- A payment switch between GK POS and banks/credit providers provides tender
  reports and a daily store **workbench** for matched/unmatched transactions.
  Duplicate debits are queried through a provider heard as "Dumo".
- "From a store perspective, we definitely get what we need" from the switch;
  "We personally don't see the need to replace it in store. The thought
  actually scares me."

## Friction (as stated)
- **Switch timeouts** drop single items from scripts that showed as approved at
  the counter; a whole day's claims for one scheme (ProfMed via MediKredit)
  never arrived (~200 scripts). MediSwitch emails about timeouts; others don't.
  Stores can only rewrite within 7 days; head office lacks capacity to
  reprocess script by script in Unisolv.
- Reprocessed claims can create a **levy the customer learns about only on a
  later visit**, via a pop-up the dispenser may not mention. Dispensary managers
  carry a KPI (with bonus deductions) to clear the script tracking file.
- **Scheme clawbacks** (Discovery named) three to four months after paying in
  full; finance tries to fight them, then transfers to the member.
- **Rejections** after approval are frequent ("A lot"); reasons often missing
  from statements or given as codes; customers want proof from the medical aid.
  Recovery rate is low enough that the head floated **writing off small medical
  aid rejections**.
- **Recovering from customers:** outdated contact details (traces needed);
  calls marked as spam; the GK POS debtor pop-up was effectively replaced by a
  Better Rewards prompt, so cashiers miss balances; customers who come to pay
  are told nothing is owed; older account holders don't use QR payment options.
- **Proof:** unsigned scripts and PODs signed by drivers or staff, not the
  customer, leave nothing to recover against; camera footage works but is slow;
  by the time debtors get a case it is ~4 months old.
- **Master data and fraud:** wrong profile selected (date of birth matches),
  payments posting to the wrong BP (a daughter's number on a mother's profile),
  a BP created for a one-year-old; **187 fraud claims** reported this year to
  date, including syndicates using copied IDs and medical aid cards via
  WhatsApp orders. Dispensaries don't consistently ask for card and ID; "each
  Dis-Chem does things their own way".
- **Shared bot capacity:** one bot shared across finance; on Fridays (Discovery
  payments) teams wait until ~11am; month-end workings delayed; small changes
  break the bank recon run; adding schemes slows it; improvement ideas blocked.
  Momentum and its savings arm pay separately against one remittance and must
  be added together.
- **Online:** never reconciled end to end; manual sales-order allocation;
  Magento vs SAP price differences leave balances; PayGate bulk settlements to
  unpack; online credit spendable in store. Stitch testing has shown order-to-
  settlement visibility; going live first on smaller in-house sites.
- **Bookkeeping:** card report shows totals only (no Visa/Mastercard split; BI
  adding it, then SnapScan, Zapper and buy aids); bank statement imports
  sometimes late; depositor-to-GK-to-sub-account postings often fail, needing
  manual journals (Fidelity replacing the depositor).
- **Delivery payments:** unclear how the driver knows an Ozow pay-by-link
  payment cleared between dispensary, dispatch and doorstep.
- Foreign scheme payments (e.g. Namibia) stopped being released after a
  notification process changed.

## Stitch POC position
- Single consolidated bank account is a non-starter: per-store accounts are
  required for medical aid, a 37-person team is organised around them, and
  stores span multiple legal entities (~25 JV stores, Baby City).
- Concerns: acquirer reliability in brick-and-mortar, and next-day settlement
  versus same-day from the bank.
- Bar for in-store: "zero impact plus cost savings". Online is where Stitch
  helps.

# Verbatim excerpts

> "From an in-store perspective, we get what we need [from the switch]. There
> hasn't been any issues."

> "Reconciling the online store has been impossible."

> "What is the point of us trying to collect something that happened four
> months ago?"

> "You're asking me to take 300 stores payments into one bank account, asking a
> team of 37 to recover from one bank account. Fundamentally, you're changing
> how the team operates."

> "There's one bot that is being shared amongst multiple finance."

> "The only visibility issue we had was the online thing."

# Used in
- [[wiki/dischem/in-store-payments-and-claims]]
- `deliverables/sotf/payments-discovery-findings.html`
