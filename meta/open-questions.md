---
type: meta
title: "Open questions — unresolved & contradictory facts"
updated: "2026-06-13"
tags: [meta]
---

# Open questions & unverified claims

Tracks factual gaps, `⚠️ UNVERIFIED` claims, and contradictions between sources.
Resolve by finding a higher-reliability source (see [[source-reliability-guide]])
and update the relevant wiki page + this list.

> **⚠️ Systemic caveat (2026-06-13 build):** during the initial research run, the
> `WebFetch` tool returned **HTTP 403** on most regulator / government / company
> PDF hosts (SAHPRA, SAFLII, gov.za, CMS, dischem.co.za, SENS, even Wikipedia for
> some agents). Load-bearing **regulatory, pricing and company figures were
> therefore triangulated from multiple search-engine extracts of the primary
> texts plus Tier-B commentary, not read off the source PDF directly.** They are
> flagged per-claim below and in each source note. **Top priority for re-verification
> against primary PDFs** (ideally via an authenticated/browser fetch or Tamsin's
> internal access): the dispensing-fee bands, CMS coverage split, exact Reg-33 &
> §22A wording, and the Dis-Chem FY2026 figures.
>
> This table holds **cross-cutting / contradiction-level** questions. Each wiki
> page also carries its own `## Open questions` section for domain-specific gaps
> (the Wave-2/3 domains — dispensing, digital, global, UX, consumer — keep theirs
> in-page by design).

| Status | Question / claim | Where it appears | Notes |
|---|---|---|---|
| open | CMS 2024/25 exact figures (beneficiaries, 16/55 split, ages) need confirming vs primary PDF | [[cms-medical-schemes-overview]], [[src-sch-cms-industry-report-2024]] | CMS site + PMG PDF returned HTTP 403 to automated fetch 2026-06-13; figures from CMS-sourced search extracts. |
| open | Coverage discrepancy: "9.5m / 17.4%" vs "9.17m / 15.8%" insured | [[cms-medical-schemes-overview]], [[src-sch-coverage-two-economy]] | Different bases (CMS registered beneficiaries vs Stats SA GHS self-report) and years. Use CMS for absolute, GHS for %, state year. |
| open | Current exact CDL 26-condition list + any 2025/26 PMB review changes | [[pmb-cdl-chronic]] | Confirm against CMS Gazette / treatment algorithms. |
| open | Current dispensing-fee thresholds & top cap (Sept 2025 Gazette R2 provision above SEP R1,530.73) | [[cash-uninsured-pathway]], [[src-sch-sep-dispensing-fee]] | Confirm against primary Government Gazette; bands cited from 2025 regs via secondary reports. |
| open | MMAP methodology + whether per-product reference prices are accessible for real-time pre-checks | [[dsp-formularies-copayments]] | Needed for member-facing co-payment pre-computation. |
| open | Standard rejection-reason code sets across switches/administrators (harmonised enough to map to remedies?) | [[realtime-claims-switching]] | Affects ability to translate rejections to plain-language fixes. |
| open | Whether real-time pre-adjudication ("can-I-claim?" dry run) is exposed via any switch/scheme API | [[realtime-claims-switching]] | Key enabler for "tell the member before they commit". |
| open | Scriptpharm + non-Discovery MedXpress ownership/model specifics | [[courier-chronic-pharmacy-models]] | ⚠️ UNVERIFIED — Scriptpharm not found in searches. |
| open | Who funds the courier leg per scheme (DSP-funded vs member-funded) | [[courier-chronic-pharmacy-models]] | Varies by scheme/option; needs scheme-rule confirmation. |
| open | NHI ConCourt judgment outcome & timing (heard 5–7 May 2026, pending) | [[nhi-horizon]], [[src-sch-nhi-act-status]] | Re-check; "fully implemented" trigger (s33) undefined in Act. |
| open | Whether retail pharmacy is accreditable as NHI dispensing/pick-up provider + on what tariff | [[nhi-horizon]] | 🔮 requires-reform; scenario-dependent. |
| open | Dis-Chem employee count: 18,500 vs "20,000+" | [[dischem-company-overview]], [[src-dc-tlc-500-franchise]] | Sources disagree; confirm from FY2026 integrated report. |
| open | Dis-Chem number of dispensaries/pharmacists (vs store count) + scripts dispensed/year | [[dischem-company-overview]] | Not isolated in retrieved sources; confirm from integrated report. |
| open | FY2026 SENS exact decimals (revenue, HEPS, dividend) | [[dischem-company-overview]], [[src-dc-fy2026-results]] | SENS PDF returned 403 to fetch 2026-06-13; figures from indexed summaries + B-tier press. |
| open | DeliverD delivery fee in 2026 (R35 figure is 2021-dated) | [[dischem-dispensary-services]], [[src-dc-deliverd]] | Verify current fee + coverage; dischem.co.za blocked fetch. |
| open | Whether Dis-Chem script upload uses OCR/structured capture or image-only re-key | [[dischem-digital-channels]], [[dischem-rx-current-journey]] | Affects transcription error rate; not documented. |
| open | Relationship between Dis-Chem Direct (courier pharmacy) and PackMyMeds | [[dischem-dispensary-services]] | One fulfilment engine or two? Unclear. |
| open | Cold-chain / scheduled-medicine (S5/S6, fridge-line) handling in DeliverD & courier | [[dischem-dispensary-services]], [[as-is-prescription-journey]] | Not documented in sources. |
| open | Current live Dis-Chem app-store ratings (numeric) + recent review volume | [[dischem-digital-channels]], [[src-dc-app-reviews]] | D-tier sentiment only; pull live Apple/Play scores. |
| open | Mopani national store count; Alpha Pharm membership; Pick n Pay pharmacy count; MedXpress/Scriptpharm models | [[competitive-landscape-sa-pharmacy]], [[src-retail-pharmacy-competitors]] | ⚠️ UNVERIFIED in retrieved sources. |
| open | Dis-Chem stock-out / mis-delivery / dispensing-error rates (only D-tier anecdotes) | [[dischem-rx-current-journey]], [[as-is-prescription-journey]] | Triangulate HelloPeter/app signals with B-tier audit/scheme complaint data. |
| open | Current active Better Rewards membership post-migration (9m was pre-migration Benefit base) | [[dischem-company-overview]], [[src-dc-better-rewards]] | Confirm from FY2026 disclosures. |
| open | Verbatim §22A subsection wording (exact prescriber list per schedule S2–S6) | [[medicines-act-scheduling]] | All legislation PDFs (SAHPRA/SAFLII/gov.za/faolex) returned HTTP 403 to fetch 2026-06-13; triangulated from search extracts. Confirm vs gazetted Act. |
| open | Exact Reg-33 wording for *original* prescription validity period (vs the 6-month repeat ceiling) | [[prescription-requirements-repeats]] | ⚠️ UNVERIFIED; 6-month is the repeat ceiling — first-dispensing validity wording needs primary confirmation. |
| open | Whether SAPC accepts ECTA AES-signed e-scripts for S5/S6 or requires extra controls | [[prescription-requirements-repeats]], [[e-prescription-telehealth-popia]] | S5/S6 fax/email flagged contentious by SAPC/SAPJ; confirm any schedule-specific e-Rx limit. |
| open | Exact current dispensing-fee band thresholds + very-high-SEP cap (overlaps schemes note) | [[sep-dispensing-fee]], [[src-reg-sep-pricing-regulations]] | ⚠️ UNVERIFIED; confirm vs latest Government Gazette. Cross-ref [[src-sch-sep-dispensing-fee]]. |
| open | Existence of a dedicated SAHPRA/SAPC courier-pharmacy or e-pharmacy standard (vs general GPP+licensing) | [[courier-online-pharmacy-rules]], [[sahpra-overview]] | ⚠️ UNVERIFIED; no standalone code surfaced. Page confidence set to medium. |
| open | Chain-of-custody rules for third-party last-mile couriers physically holding S5/S6 in transit | [[courier-online-pharmacy-rules]] | ⚠️ UNVERIFIED; key for last-mile design of controlled meds. |
| open | Whether SAPC permits remote pharmacist supervision of dispensing (tele-pharmacy / central fill) | [[pharmacy-act-sapc-gpp]] | ⚠️ UNVERIFIED; central to "central fill + local counselling" models. |
| open | Status/scope of new 2026 POPIA health-information regulations | [[e-prescription-telehealth-popia]] | In flux; Fasken flagged April 2026. Monitor Information Regulator. |
| open | Whether independent nurse-prescriber scope has expanded under recent NDoH PHC policy | [[medicines-act-scheduling]] | Affects who may originate S4 scripts in a digital flow. |

## Conventions
- When a wiki page can't source a claim, it marks it `⚠️ UNVERIFIED` and adds a
  row here.
- When two A/B sources disagree, record both, prefer the higher tier, and note
  the disagreement on the wiki page rather than silently picking one.
