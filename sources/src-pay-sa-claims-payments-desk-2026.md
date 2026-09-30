---
type: source
title: "SA retail pharmacy and clinic payments and medical aid claims — industry mechanics desk research (Sep 2026)"
url: "desk-research://multiple (see per-fact URLs)"
author: "Bigly Labs desk research (agent-compiled)"
publisher: "Multiple — see per-fact URLs"
published: "n.d."
retrieved: "2026-09-30"
source_kind: dataset
reliability: C
tags: [domain/schemes, domain/regulatory, journey/pay, journey/validate, region/za]
---

> **Evidence caveat.** Compiled 2026-09-30 from web-search result summaries of
> the cited URLs; direct page fetches were blocked by the network proxy. Each
> fact keeps its own URL and grade (A-D) for the *underlying* source, but
> "quotes" are search-snippet wording, not page-checked. Treat the note as C
> overall until individual facts are verified on the live page.

# Summary

Desk research on SA industry mechanics behind pharmacy and clinic payments:
real-time claims switching, SEP + dispensing fee, Medical Schemes Act s59 and
Regs 5-6 time limits (30-day payment, 4-month submission, 30/60-day
error-and-resubmit), s59(3) clawbacks (upheld June 2026), electronic remittance
and reconciliation, clinic tariff codes and practice numbers, benefit design
(MSA, self-payment gap, ATB, PMB/DSP co-payments), card/cash/QR/BNPL/PayShap
rails and settlement, payer types and finance labels, the retail insurance
regime (demarcation, exemption to 31 Mar 2027, FAIS, DebiCheck) and documented
friction points. Key claims are organised by area below.

# Key claims (by area)

Research date: 2026-09-30. Scope: SA industry mechanics, not Dis-Chem specifics.

## Read this first: how the evidence was gathered

- **Direct page fetches were blocked** by the network egress proxy for every SA domain tried (medikredit.co.za, gems.gov.za, medicalschemes.com, discovery.co.za, fanews, hpcsa-blogs, blogspot). **Every fact below comes from web-search result summaries of the cited URL, not from reading the page myself.**
- "Quotes" below are **search-snippet wording attributed to that URL**. Treat them as near-verbatim, not page-checked. Check any quote against the page before it goes on a slide.
- Grades apply to the **underlying source**: A = legislation, regulator, or official scheme/switch/bank docs. B = reputable press or industry body. C = vendor or blog. D = forum.
- **FACT** = what the source states. **INFERENCE** = my synthesis. Inferences are labelled.

---

## 1. Medical aid claim lifecycle for pharmacy

### 1.1 Switching (till to scheme)
- **FACT (C/A):** Pharmacies send claims through a switch to the scheme or administrator in real time. MediKredit's switch HealthNet ST is "integrated with the majority of Practice Management Applications in South Africa", connecting "nearly 5,000 pharmacies, over 22,000 doctor practices, over 300 private hospitals and 155 public hospitals". [https://bhf.universal.co.za/medikredit/] (C, snippet). Another MediKredit page says the switch "enables close on 9 000 providers ... to simultaneously switch claims online in real-time" [https://www.medikredit.co.za/products-and-services/healthcare-claims-switching/] (A-company, snippet). The two provider counts conflict, probably because they come from different dates.
- **FACT (C):** Named switches include MediKredit, Mediswitch, Healthbridge, Interpharm (Medscheme) and Zieto. One blog counts "four major medical switches ... administering around 151 medical aids". [https://infosapharmacy.blogspot.com/2019/05/list-of-all-medical-aid-switches-in.html] (C, dated 2019)
- **FACT (A-company):** Altron HealthTech's SwitchOn is a real-time claims switch: "107M+ transactions switched annually" and "over 8,000 healthcare practices". [https://healthtech.altron.com/product-switchon]
- **FACT (A-company):** Healthbridge conveys claims "whether by batch or in real time". In its myMPS system, "remittances are received electronically ... and matched automatically to the claims for real-time schemes". [https://healthbridgesupport.zendesk.com/hc/en-us/articles/360002744817-Manage-eRA-in-myMPS], [https://www.healthbridge.co.za/solutions/billing/]
- **FACT (C):** When the scheme or switch is down, "pharmacists may inform customers that the medical aid is down and claims cannot be processed". [infosapharmacy blog above] (C)
- **FACT (B):** News24's "The switching wars" (2005) and Competition Tribunal records (Healthbridge/Digital Healthcare Solutions, 2003–04) record a history of switch competition. [https://www.news24.com/business/the-switching-wars-20050920], [https://www.saflii.org/za/cases/ZACT/2004/7.html] (A, tribunal)
- **INFERENCE:** The real-time response tells the till the approved amount and the member portion (co-payment or levy). The till collects the member portion and books the rest as a receivable from the scheme. This is the promise-to-pay that later has to reconcile to the ERA. US literature describes the same concept ("point-of-sale adjudication ... promise-to-pay ... matched to the amount actually paid") [https://net-rx.com/pharmacy-reconciliation/] (C, US source used by analogy).
- **GAP:** No public SA pharmacy **response or rejection code list** was found. MediKredit's code documents are behind provider login or blocked. The US NCPDP code sets are not SA.

### 1.2 Regulated pricing: SEP + dispensing fee
- **FACT (B):** "The single exit price is made up of the price determined by the manufacturer or importer, a logistics fee and VAT." Final sellers add a regulated maximum dispensing fee in four price bands. [https://www.dailymaverick.co.za/article/2026-02-19-how-medicine-pricing-works-in-sa-and-how-it-might-change-in-future/] (B, Andy Gray, Feb 2026). Also carried by [https://www.medicalbrief.co.za/how-medicines-pricing-works-in-sa-how-it-might-change/].
- **FACT (B), pharmacist dispensing fee (Sept 2025 version):** SEP ≤ R159.01: max R23.13 + 46% of SEP. R159.02–R423.55: R42.91 + 33%. R423.56–R1,530.72: R122.59 + 15%. Above R1,530.73: "shall not exceed R270.54 + 5% of the single exit price". [dailymaverick, above] (VAT treatment not confirmed from the page.)
- **FACT (B):** Where a chain "owns its own wholesaler, it can gain additional income from the logistics fee". [dailymaverick, above]
- **FACT (A-gov/B):** SEP adjustments in 2026 were a first increase of 1.47% (2025: 5.25%), then an extraordinary second increase of **2.88% effective 1 October 2026**. [https://www.sanews.gov.za/south-africa/health-department-sets-increase-registered-medicines] (A), [https://www.businessday.co.za/news/2026-09-24-medicine-prices-rise-288-as-industry-warns-of-shortages/] (B)
- **FACT (A/B):** The SEP is "the only price at which manufacturers shall sell medicines ... to any person other than the State" (s22G). Section 18A bans bonuses, discounts and rebates. [https://www.lexology.com/library/detail.aspx?g=896394ee-2622-4333-a5ec-e56eac63a662] (B), [https://pmg.org.za/committee-meeting/3449/] (B)
- **INFERENCE:** Cash and medical aid customers face the same regulated medicine price ceiling (SEP + max dispensing fee). The scheme may still reimburse less (reference price, formulary, DSP rate), and the member pays the gap.

### 1.3 Time limits, payment, errors (Medical Schemes Act s59, Reg 5 and 6)
- **FACT (A via B):** s59(2): a scheme "shall ... pay to a member or a supplier of service, any benefit owing to that member or supplier of service within 30 days after the day on which the claim in respect of such benefit was received". The scheme may pay the provider or the member. [https://www.bowmanslaw.com/article-documents/medical-schemes-members-dispute-resolution.pdf] (B), [https://www.sada.co.za/sites/default/files/content-files/Clinical%20Information%20&%20Articles%20of%20Interest/SADA%20Guide%20to%20Medical%20Schemes%20Act%20%20Regulations%20June%202022.pdf] (B). An Appeal Board ruling on s59(2) is reported at [https://www.fanews.co.za/article/healthcare/6/medical-schemes/1078/appeal-board-ruling-clarifies-application-of-section-59-2-of-the-medical-schemes-act/21540] (B, not read, blocked).
- **FACT (A):** Reg 6: a scheme must not withhold payment for late submission of an account "before the end of the fourth month from the last date of the service rendered". **This is the 4-month submission window.** [https://www.medicalschemes.com/files/Acts%20and%20Regulations/MSREGS19July2004.pdf] (A, via snippet), [https://www.gems.gov.za/Information/Claims-guide] (A-scheme)
- **FACT (A):** Reg 6: if a claim is "erroneous or unacceptable for payment", the scheme must notify the member and provider **within 30 days** with reasons, and allow a corrected resubmission **within 60 days** of its return. If the scheme fails to do this, it bears the onus of proof in a dispute. [https://www.hpcsa-blogs.co.za/withholding-of-claims-due-to-practitioners-by-medical-schemes/] (B), GEMS guide (A)
- **FACT (A):** Reg 5(f): claims must contain "the relevant diagnostic ... code". ICD-10 has been mandatory on claims since 1 July 2005. Non-diagnosing providers (including pharmacists) must submit ICD-10 for all PMB claim items. [https://www.health.gov.za/wp-content/uploads/2021/02/sa_icd-10morbiditycodingstandards-1.pdf] (A)
- **FACT (A/B), s59(3) clawback:** A scheme may deduct from future benefits payable to a member or provider amounts it paid in good faith that were not due, or losses from "theft, fraud, negligence or other misconduct". **A High Court upheld s59(3) as constitutional in June 2026.** [https://www.businessday.co.za/news/health/2026-06-19-court-upholds-medical-schemes-right-to-recover-disputed-claims/] (B), [https://www.moonstone.co.za/high-court-upholds-medical-schemes-recovery-powers/] (B), [https://www.derebus.org.za/a-fly-in-the-ointment-the-headaches-caused-by-s-593-of-the-medical-schemes-act/] (B). The CMS s59 investigation into racial profiling in clawbacks is context: [https://cmsinvestigation.org.za/index.php/section-59/] (A)
- **INFERENCE for finance:** s59(3) means a remittance can net off recoveries against current claims. A remittance total can therefore be less than "claims paid" on the same run, and debtors teams must track recoveries separately.

### 1.4 Reversals, ERA, reconciliation
- **FACT (A-company):** MediKredit's Electronic Remittance Advice "allows for quick, fast, and accurate reconciliation of providers' claim payments". [https://www.medikredit.co.za/electronic-remittance-advice/] (A-company, snippet only). MediKredit also offers "Auto Statement" [https://www.medikredit.co.za/clients/pharmacy-providers/auto-statement-application-termination/].
- **FACT (C):** A reversal is a claim "reversed by the pharmacy after having been submitted", for example a prescription not collected. Schemes also keep member-side forms to "reverse the payment of a claim" [https://www.retailmedicalscheme.co.za/wcm/medical-schemes/retail/assets/app-forms/2023/request-to-reverse-the-payment-of-a-claim-that-retail-medical-scheme-received-and-paid.pdf] (A-scheme).
- **FACT (C):** Practice-side reconciliation work includes "aged balances, rejection patterns, patient balances, remittance information, and bank receipts". Unallocated payments need printing and follow-up. Firms sell short-paid and rejected claim recovery as a service. [https://gomedpay.co.za/] (C), [https://medrecons.co.za/] (C), [https://www.practiceperfect.co.za/medical-billing-in-south-africa/] (C)
- **GAP:** No public source on **payment-run frequency** (weekly or fortnightly) for specific administrators, and no ERA file format standard for SA. Ask the debtors team.
- **GAP:** **Switching fees per transaction** are not publicly disclosed. None found.

### 1.5 Recent live example of scheme-side error (friction)
- **FACT (B):** A Discovery Health Medical Scheme system error paid pharmacy claims beyond members' Above Threshold Benefit limits from Jan to Dec 2025 (about 0.6% of Executive/Comprehensive/Priority members). CMS learned of it from the media on 5 Jan 2026. Discovery later said it would absorb the cost ("up to R170m" write-off per Moonstone). [https://www.moonstone.co.za/cms-steps-in-as-discovery-health-begins-recovering-pharmacy-overpayments/], [https://www.moonstone.co.za/medicheck-claims-win-as-discovery-health-writes-off-up-to-r170m-in-atb-recoveries/], [https://www.medicalbrief.co.za/discovery-faces-cms-probe-as-it-backtracks-on-overpayments/] (all B)

---

## 2. Nurse clinic, immunisation and screening claims

- **FACT (A-industry body):** The BHF's PCNS keeps the register of practice numbers. A practice number is "a legal requirement for the process of reimbursement of a claim to either a medical scheme member or service provider". Numbers renew annually by 31 March. [https://bhfglobal.com/pcns/healthcare-service-providers/], [https://www.pcns.co.za/ApplicationForms/HspApplicationProfessions?class=elements] (A)
- **FACT (A-company):** "Pharmacy clinic tariff codes can be submitted by the onsite Registered Nurse for procedures and consultations conducted for a beneficiary of a healthcare funder." MediKredit publishes a tariff code brochure for pharmacy providers. [https://www.medikredit.co.za/clients/pharmacy-providers/tariff-code-brochure/] (A-company, snippet)
- **FACT (A-scheme):** Discovery publishes "NAPPI pharmacy clinic tariffs" (for example code 0099100-001) for screening tests, vaccine administration and consultations. Consumables are claimed on the product's NAPPI code. [https://www.discovery.co.za/wcm/discoverycoza/assets/medical-aid/benefit-information/2024/pharmacy-clinic-rates-2024.pdf], 2026 version [https://www.discovery.co.za/wcm/discoverycoza/assets/health_professionals/propbm-communiques/pharmacy-clinic-rates.pdf] (A, snippet). A snippet cites vaccine administration code 0022 at **R59.60 (2026)**. Not page-verified.
- **FACT (A-scheme):** GEMS guidance: "Tariff code 0022 ... for pharmacy administration of immunisation, 0017 for FP administration and 99378 for nurses". Discipline 088 is registered nurses in private practice. [https://www.gems.gov.za/Healthcare-Providers/Preventative-screening], [https://www.gems.gov.za/-/media/Project/Documents/tarriffs-files/tarriff-2020/Nursing.pdf] (A)
- **FACT (A-scheme):** Discovery Screening and Prevention: two Health Checks a year "at a pharmacy in the Discovery Wellness Network" (glucose, BP, cholesterol, BMI), and "the pharmacy will send the claim to Discovery Health". One flu vaccine a year is paid from Screening and Prevention for high-risk members. Other members are paid "from available day-to-day benefits". [https://www.discovery.co.za/wcm/discoverycoza/assets/medical-aid/benefit-information/2025/screening-and-prevention-benefit.pdf], [https://www.discovery.co.za/medical-aid/get-your-flu-vaccine] (A)
- **FACT (A-scheme):** For Discovery KeyCare nurse services, "the PCDT practice number must be inserted as the treating provider in the claim". [https://www.mcmas.co.za/assets/discoverycoza/health-professionals/propbm-communiques/pcdt-handbook-2024.pdf] (A)
- **FACT (C):** No uniform national tariff since 2010. Schemes set their own rates. [https://www.synchramed.co.za/medical-tariff-codes-south-africa/] (C)
- **INFERENCE:** Clinic claims usually go through the same pharmacy switch as dispensing claims, using clinic tariff/NAPPI codes under the pharmacy's or the nurse's practice number. They are then paid on the same remittance. Screening often pays from a **risk or wellness benefit**, not savings. Vaccines split into product (NAPPI) plus administration fee.
- **GAP:** Whether a chain's nurse clinics bill under the pharmacy practice number or separate nurse practice numbers, and how that shows on remittances. Ask the medical aid manager.

---

## 3. Benefit design: what the member pays at the till

- **FACT (A-scheme):** MSA: "an amount set aside at the beginning of the year, which members pay back monthly". Day-to-day claims are paid from it "as long as funds are available". [https://www.discovery.co.za/medical-aid/medical-savings-account] (A)
- **FACT (A-scheme):** Self-payment gap: "a temporary gap in cover when you run out of funds in your Medical Savings Account but have not yet reached your Annual Threshold". Members pay out of pocket but "must still submit claims" so claims accumulate to the threshold, after which the Above Threshold Benefit pays. [https://mso.discoveryholdings.com/medical-aid/self-payment-gap], [https://www.discovery.co.za/medical-aid/above-threshold-benefit] (A)
- **FACT (B/A):** PMB/CDL: medication and treatment for the CDL conditions (26 per source) must be covered. This is "subject to pre-authorisation ... clinical protocols". Under Reg 8, voluntary use of a non-DSP may attract a co-payment. Emergencies, or cases where no DSP was reasonably available, must be paid in full. [https://www.pnpms.co.za/static-assets/siteFiles/PnPMS_CMS_Understanding_PMBs_June_2025.pdf] (A-scheme/CMS), [https://cdn.discovery.co.za/wcm/discoverycoza/assets/medical-aid/benefit-information/2026/cover-for-medicine-and-treatment-of-chronic-conditions.pdf] (A)
- **FACT (A/B), co-payment drivers:** reference pricing (for example MMAP, where the member pays the difference above the reference price), non-formulary medicine ("often 20% to 30%"), and non-DSP pharmacy ("30% non-DSP co-payment" in one scheme). [https://www.mediscor.co.za/definitions/] (A-PBM), [https://www.gems.gov.za/Information/Provider-FAQ] (A), [https://hillcrestpharmacy.co.za/navigating-medical-aid-limits-digital-scripts-how-to-avoid-co-payments-in-springs/] (C)
- **FACT (A-scheme):** Medshield's "The Pharmacy Surprise": unexpected co-payments "come down to two things: whether your medicine appears on your benefit plan's approved formulary, and whether you collect it from a designated network pharmacy". [https://medshield.co.za/the-pharmacy-surprise/] (A)
- **FACT (B):** A co-payment "is not a penalty; it's part of the benefit design", and it "can arise even if the claim is approved – approval does not mean full payment". [https://www.moonstone.co.za/co-payments-unpacked-the-real-drivers-behind-member-shortfalls/] (B)
- **INFERENCE (till outcomes):** (a) MSA funds available: the scheme pays, and the member pays only co-payments or levies. (b) Self-payment gap: the member pays 100% at the till, but the pharmacy should still switch the claim so it accrues to the threshold, with a zero-paid response. (c) Above threshold: the scheme pays again, subject to limits. (d) Chronic authorised or PMB at a DSP: the scheme pays from risk, with the member paying only above-reference or non-formulary amounts. (e) Not authorised or non-DSP: co-payment or rejection. **Each of (a)–(e) creates a different split between the member portion and the scheme receivable.**

---

## 4. Card, cash and alternative payments in SA retail

- **FACT (A):** SARB regulates interchange. The first determinations applied to POS card transactions from March 2015. SARB Position Paper 02/2022 on interchange was published in Dec 2022. [https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight-and-supervision/regulatory-and-oversight-reports/Position%20Paper%20no%2002_2022%20on%20Interchange_final%20published%20version.pdf] (A)
- **FACT (C):** Reported interchange bands are 1.41–1.89% for credit and 0.36–0.53% for debit (card present). Merchant discount rates are "around 2.5% and 3.5%" for small merchants. [https://www.peachpayments.com/scale/what-is-interchange/], [https://www.launchworks.co.za/articles/true-cost-credit-card-fees-south-africa] (C). **INFERENCE:** Large retailers negotiate well below SME rates. Actual rates are confidential.
- **FACT (A-industry body):** PASA is the SARB-recognised payment system management body (since 1999). Clearing runs through authorised PCH System Operators (Strate, PayInc, Visa, Mastercard). Interbank settlement runs on SARB's SAMOS. [https://pasa.org.za/national-payment-system/key-role-players/] (A)
- **FACT (C/A-bank):** Card batches are submitted at end of day, and the acquirer "settles the net amount ... on T+1 or T+2". FNB Speedpoint pays "the next day when you bank with FNB". [https://www.finance.ezyfind.co.za/payments-collections/merchant-reconciliation/] (C), [https://www.fnb.co.za/business-banking/merchant-services/index.html] (A-bank)
- **FACT (B):** Contactless is 53% of transactions (Standard Bank data), up from 42% two years earlier. Apple brought Tap to Pay on iPhone to SA in May 2026. [https://techcentral.co.za/tap-to-pay-dominant-in-south-africa/252392/] (B), [https://www.apple.com/za/newsroom/2026/05/apple-brings-tap-to-pay-on-iphone-to-south-africa/] (A-company)
- **FACT (A/B):** PayShap launched in March 2023 (SARB, BankservAfrica, PASA). The limit rose from R3,000 to R50,000 (Aug 2024). BankservAfrica rebranded to PayInc (Aug 2025). Merchant or POS acceptance, including QR and request-to-pay, is still developing. [https://www.resbank.co.za/content/dam/sarb/publications/media-releases/2023/payshap-/Press%20release%20on%20the%20launch%20of%20Payshap%20-%20a%20digital%20payment%20service.pdf] (A), [https://blog.electrum.co.za/post/why-retailers-can-get-excited-about-payshap] (C)
- **FACT (C):** QR: SnapScan starts at 2.95% excl. VAT, falling with turnover. Zapper runs about 2.2–3.5% depending on plan. Settlement takes about 1–2 days. [https://www.snapscan.co.za/merchant], [https://smesouthafrica.co.za/snapscan-vs-zapper-online-payments-made-easier/] (C)
- **FACT (B/C):** BNPL: Payflex (about 60% share) and PayJustNow. PayJustNow went live on Peach Payments' POS device (May 2026). The NCR is requiring BNPL reporting to credit bureaus from Feb 2027. [https://www.sundaytimes.timeslive.co.za/business/2026-08-15-bnpl-users-face-new-credit-scrutiny/] (B), [https://randcash.co.za/learn/buy-now-pay-later-south-africa-credit-record-2027] (C)
- **FACT (A-bank/C):** Cash: smart safes and cash deposit devices (for example FNB SmartBox, Standard Bank CashSecure, Deposita, Cash Connect) validate notes and credit the account, often the same day, with CIT collection. "Retailer businesses have a 1 in 4 chance of being a victim to retail cash crime" (vendor claim). [https://www.standardbank.co.za/southafrica/business/products-and-services/business-solutions/specialised/cash-solutions/complex-cash-handling] (A-bank), [https://connected.co.za/cash-connect] (C)
- **FACT (C):** Integrated POS: the POS pushes the amount to the terminal and receives an approve or decline to close the sale. Semi-integration keeps card data out of the POS. [https://en.wikipedia.org/wiki/Semi-integrated_POS] (C), [https://connected.co.za/card-machine-solutions/integrated-pos-card-payments.html] (C)
- **FACT (A-scheme rules/C):** Chargebacks: cardholders usually have up to 120 days. Merchants have about 20 days (Visa) or 40 days (Mastercard) to respond. The acquirer debits the merchant and charges a fee. [https://www.mastercard.com/global/en/news-and-trends/Insights/2024/how-can-merchants-dispute-credit-card-chargebacks.html] (A-scheme), [https://www.yoco.com/za/articles/chargebacks/] (C)
- **INFERENCE (general retail finance practice, no SA source):** Store cash-up compares tender totals by type (cash, card, QR, medical aid, account) against POS. Variances go to head office. Head office matches (1) the acquirer settlement file to card tenders, net of MSC, T+1/2; (2) CIT or smart-safe credits to declared cash; (3) the switch/ERA to the medical aid tender; (4) account statements to account tender. **Medical aid is often the slowest and least certain of these four streams.**

---

## 5. Payer types and finance labels

- **FACT (A-company):** Clicks' AFS notes that trade receivables include "recoverables from vendors and medical aids with respect to pharmacy". [https://www.clicksgroup.co.za/iar2023/wp-content/uploads/Clicks-2023-AFS_download.pdf] (A-company, snippet)
- **FACT (A-company):** Courier and DSP pharmacies (Medipost, Pharmacy Direct) are contracted to most schemes for chronic medicine. Members using a non-DSP may face co-payments. [https://medipost.co.za/], [https://pharmacydirect.co.za/] (A-company), [https://www.dailymaverick.co.za/article/2020-07-20-consumers-retain-the-right-to-choose-their-pharmacy/] (B)
- **FACT (A-company):** Primary care **health insurance** (demarcation-exempt) can pay network providers directly. Discovery Flexicare: "If you use a healthcare provider on the Flexicare network, the insurance will pay the healthcare provider directly". [https://www.discovery.co.za/corporate/health-flexicare-health-insurance] (A-company). **This corrects the brief's assumption that insurance always pays members.** Gap cover and hospital cash pay the policyholder (see 6).
- **FACT (A/B):** The NHI Act was signed in May 2024, but **no section is in force**. The President agreed in Feb 2026 to delay proclamation pending ConCourt judgment. The ConCourt heard the BHF and Western Cape challenges in May 2026, and judgment is reserved. Providers would contract with the NHI Fund at Fund-set rates. [https://explain.co.za/2026/05/08/inside-the-nhi-court-battle-and-what-it-means-for-medical-aid/] (B), [https://iol.co.za/business-report/companies/2026-05-04-south-africas-national-health-insurance-faces-constitutional-challenge/] (B), [https://bowmanslaw.com/insights/south-africa-the-national-health-insurance-act-your-top-10-questions-answered/] (B)
- **FACT (A-standards):** Under IFRS 9, trade receivables use the simplified lifetime expected credit loss approach, often through a provision matrix segmented by customer type with an ageing schedule. [https://www.pwc.ch/en/publications/2020/IFRS%209%20-%20Impairment%20-%20Provision%20Matrix%20-%20Practical%20Guide.pdf] (A/B)
- **INFERENCE (working taxonomy; confirm terms with the finance team):**

| Payer | Who pays | Typical label | Timing |
|---|---|---|---|
| Walk-in cash or card | Customer at till | Cash sales / retail sales | Immediate (card T+1/2) |
| Medical aid, scheme portion | Scheme or administrator via remittance | Medical aid debtors / scheme receivables / "medical aid recoverables" | Up to 30 days under s59(2), in payment runs |
| Medical aid, member portion (co-payment, levy, self-payment gap) | Member at till | Cash sales (tender) | Immediate |
| Member-submitted claim (pay first, claim back) | Member pays pharmacy; scheme refunds member | Cash sale, with no receivable | n/a |
| Corporate / employer health / care homes / doctors' accounts | Account holder on monthly statement | Trade debtors / account customers / credit accounts | 30-day terms (typical) |
| Staff accounts | Payroll deduction | Staff debtors | Monthly |
| Exempt primary care health insurers (network) | Insurer pays provider | Often treated like a medical aid debtor | Per contract |
| Gap cover / hospital cash | Insurer pays member | n/a (no receivable) | n/a |
| Vendors / suppliers (rebates are banned for medicines under s18A, but allowed for front-shop and logistics) | Supplier | Vendor recoverables / sundry debtors | Per agreement |
| Franchise / wholesale | Franchisee | Trade debtors | Per terms |
| Government / NHI (prospect) | NHI Fund | Future: NHI Fund receivable | Not in force |

---

## 6. Insurance sold by retailers

- **FACT (B):** The Demarcation Regulations were gazetted in Dec 2016 and effective from 1 April 2017. Gap cover is capped at R150,000 a year. Hospital cash is capped at R3,000 a day and R20,000 a year per insured life (caps as reported at the time; may since be inflation-adjusted, **verify**). Hospital cash pays a fixed amount per day "not related to the actual cost of any medical service". [https://www.fin24.com/Money/Health/new-laws-on-gap-cover-and-hospital-cash-plans-20170108] (B), [https://www.masthead.co.za/newsletter/demarcation-regulations/] (B), [https://hasa.co.za/medical-schemes-gap-cover-and-hospital-plans/] (B)
- **FACT (A):** Demarcation exemption for primary care insurance (LCBO-like): CMS **Circular 9 of 2025** extended the Exemption Renewal Framework for two years, **to 31 March 2027**. Circular 23 of 2025 set the Phase 2 data deadline at 31 Oct 2025. [https://www.medicalschemes.co.za/latest-publication/circular-9-of-2025-update-on-the-demarcation-exemption-renewal-framework/], [https://www.medicalschemes.co.za/latest-publication/circular-23-of-2025-demarcation-exemption-renewal-framework-phase-2-data-submission/] (A)
- **FACT (B):** LCBO guidelines for medical schemes remain stalled. The Health Minister has signalled opposition, and litigation has been heard. [https://www.moonstone.co.za/health-minister-signals-opposition-to-low-cost-benefit-options-for-medical-schemes/], [https://www.moonstone.co.za/court-hears-case-on-low-cost-benefit-options-for-medical-schemes/], [https://www.fanews.co.za/article/healthcare/6/medical-schemes/1078/lcbo-medical-schemes-like-watching-paint-dry/36174] (B). **GAP:** Nothing found on what happens after 31 Mar 2027. No 2026 CMS circular was found.
- **FACT (A/B):** Selling insurance requires an FSP licence under FAIS or acting as a representative of a licensed FSP. Insurers pay commission to intermediaries, capped except for the Funeral class (uncapped). Binder holders are paid binder fees, capped for some categories under the LTIA regulations. [https://www.brightrock.co.za/media-centre/what-the-law-says-about-selling-funeral-insurance] (C/B), [https://www.fsca.co.za/Webinars/Funeral%20Business%20%20Requirements.pdf] (A)
- **FACT (A):** Medical scheme broker fees (Reg 28): from 1 Jan 2025, the lesser of R121.84 + VAT per member per month or 3% + VAT of contributions. Only CMS-accredited brokers may earn them. [https://www.moonstone.co.za/cap-on-healthcare-broker-fees-increases-by-4-percent/] (B), [https://www.medicalschemes.co.za/accredited-brokers-in-the-medical-schemes-environment/] (A). **GAP:** the 2026 figure was not confirmed.
- **FACT (B/C):** Premiums are collected by debit order, increasingly **DebiCheck** (the customer authenticates the mandate with their bank, including at a POS terminal with card and PIN), which reduces disputes. [https://stitch.money/blog/debicheck-the-ultimate-guide] (C), [https://nedbank.co.za/content/dam/nedbank/site-assets/Personal/Home_Loans/Product/DebiCheck_FAQ.pdf] (A-bank)
- **INFERENCE:** Retailer revenue from insurance arrives as commission or binder fee income from the insurer, usually monthly in arrears and reported against collected premiums. Claims on gap, hospital cash and funeral pay the policyholder, not the pharmacy. Primary care network products may pay the pharmacy or clinic directly, like a scheme.

---

## 7. Documented friction points

| Friction | Evidence | Grade |
|---|---|---|
| Co-payment surprises at the till (formulary, DSP) | Medshield "Pharmacy Surprise"; Moonstone "approval does not mean full payment" | A, B |
| Rejections at till (ICD-10 missing, no pre-auth, benefits exhausted, non-DSP, late) | [https://www.genesismedical.co.za/what-happens-if-my-medical-aid-claim-is-rejected-or-only-partially-paid/] | C |
| Switch or scheme downtime means no claim, so the customer pays cash or waits | infosapharmacy blog | C |
| Load-shedding: POS and terminal offline; cell towers fail after 2+ hours; offline authorisation limits | [https://timeworksdata.co.za/blog/load-shedding-pos-systems.html], [https://mangopos.co.za/blog/load-shedding-pos-checklist-south-africa] | C |
| Remittance reconciliation effort, short payments, unallocated payments | gomedpay, medrecons, practiceperfect | C |
| Scheme clawbacks under s59(3) netted against future remittances; upheld June 2026 | BusinessDay, Moonstone | B |
| Scheme system errors followed by recovery attempts (Discovery ATB 2025) | Moonstone, MedicalBrief | B |
| Reversals for uncollected or returned items | Retail Medical Scheme reversal form | A/C |

---

## Gaps (not confirmed)
1. SA pharmacy switch response or rejection code list (behind login).
2. Switching fee per transaction (not public).
3. Administrator payment-run frequency and ERA file standards.
4. Whether chain clinics bill under pharmacy or nurse practice numbers.
5. Negotiated MSC rates for large retailers (confidential).
6. Status of the demarcation exemption beyond 31 Mar 2027. No 2026 circular found.
7. 2026 Reg 28 broker fee and current demarcation benefit caps.
8. No SA source on store cash-up to head office practice. That section is general retail inference.
9. **None of the pages were read directly** (egress blocked). All quotes are search-snippet wording.

# Used in
- [[wiki/dischem/in-store-payments-and-claims]]
