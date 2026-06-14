---
type: meta
title: "Research log"
updated: "2026-06-13"
tags: [meta]
---

# Research log

Append-only log of what's been ingested and built. One line per meaningful step.

| Date | Agent | Action |
|---|---|---|
| 2026-06-13 | build | Initialised vault: schema (CLAUDE.md), Home MOC, structure, meta files. |
| 2026-06-13 | build | Wave 1 research dispatched: Dis-Chem current state, SA regulatory, medical schemes. |
| 2026-06-13 | build | Wave 2 research dispatched: dispensing practice, digital transformation, global benchmarks, UX/service design, SA consumer context. |
| 2026-06-13 | build | Authored design-kit templates: service blueprint, journey map, JTBD library, future-state principles. |
| 2026-06-13 | dischem | Ingested 15 Dis-Chem/competitor sources (FY2025-26 SENS, PackMyMeds, DeliverD, dispensary, app/HelloPeter signals, Better Rewards, Health/Kena, Clicks, courier pharmacies, retail competitors, scheme chronic/DSP). |
| 2026-06-13 | dischem | Built wiki: company-overview, dispensary-services, digital-channels, rx-current-journey, competitive-landscape-sa-pharmacy. |
| 2026-06-13 | dischem | Built design-kit/journeys/as-is-prescription-journey (structured 9-stage as-is map). Updated dischem & sources indexes. Note: dischem.co.za + SENS PDFs blocked automated fetch (403); facts taken from indexed summaries + corroborating Tier-A/B press, flagged. |
| 2026-06-13 | schemes | Built medical-schemes domain: 7 wiki pages (CMS overview, PMB/CDL, DSP/formulary/co-pay, real-time claims/switching, courier/CCMDD models, cash/uninsured, NHI horizon) + 14 src-sch-* sources. Updated _index, glossary (funding), open-questions (11 rows), sources-index. Note: CMS/PMG/scheme/Spotlight sites returned HTTP 403 to WebFetch; relied on WebSearch extracts — flagged for primary-PDF re-verify. |
| 2026-06-13 | regulatory | Built sa-regulatory domain: 7 wiki pages (medicines-act-scheduling, sahpra-overview, pharmacy-act-sapc-gpp, prescription-requirements-repeats, sep-dispensing-fee, e-prescription-telehealth-popia, courier-online-pharmacy-rules) + 14 src-reg-* sources (12 Tier-A, 2 Tier-B). Each page has Design implications/constraints + 🔮 requires-reform flags. Updated _index (with cross-page top constraints), sources-index, open-questions (10 rows). Note: ALL legislation/regulator PDFs (SAHPRA, SAFLII, gov.za, faolex, PMC, even Wikipedia) returned HTTP 403 to WebFetch this session; statutory content triangulated across multiple WebSearch extractions of primary texts + Tier-B legal commentary — verbatim/section gaps flagged ⚠️ UNVERIFIED for primary re-verify. |
| 2026-06-13 | ux | Built ux-service-design domain: 6 wiki pages (service-blueprinting-method, journey-mapping-method, jtbd-and-behavioural-design, healthcare-service-design-patterns, inclusive-low-bandwidth-design, pharmacy-ux-patterns) + 15 new src-ux-* sources (NN/g, TiSDD/Stickdorn, Christensen/Ulwick JTBD, Michie COM-B, BIT EAST, Gollwitzer impl-intentions, Thaler sludge, SMS-adherence meta-analyses, Picker/IOM, GOV.UK/NHS, AHRQ teach-back, WCAG/W3C older-users, NHS digital-front-door, SA data-cost/Freedom House, MomConnect USSD/WhatsApp, SA WhatsApp commerce, pharmacy-app patterns). Method pages made actionable (lane lists, build steps, checklists, worked health example, error-state table) as the authoritative reference design-kit templates will cite. Updated ux _index. Note: NN/g, gov.uk, bi.team, PMC, AHRQ all returned HTTP 403 to WebFetch; content triangulated from WebSearch extractions of those primary sources + the pre-existing src-ux-nng-service-blueprints note — flagged in source notes.
| 2026-06-13 | dispensing | Built dispensing-practice domain: 6 wiki pages + 15 src-disp-* sources (FIP/WHO GPP, WHO Medication Without Harm, ISMP, NEJM barcode, Conn/DAA adherence meta-analyses, AHRQ teach-back, GS1, cold chain). |
| 2026-06-13 | digital | Built digital-transformation domain: 6 wiki pages + 15 src-dig-* sources (HL7 FHIR, NCPDP/CMS, automation evidence, AI/agentic governance, telepharmacy, SA HNSF/HPRS & Reg-33). |
| 2026-06-13 | global | Built global-benchmarks domain: 7 wiki pages (US/UK/EU/India/China/Australia + synthesis) + 17 src-gbl-* sources; ran nested sub-agents for India deep-dives (PharmEasy, Apollo 24\|7, Tata 1mg/Netmeds, India e-pharmacy regulation). Headline: AU/IN/CN transfer to SA better than US/UK/EU. |
| 2026-06-13 | consumer | Built consumer-context domain: 6 wiki pages + 18 src-con-* sources (ICASA, Census 2022, NDoH/CCMDD, Pelebox, DataReportal, FinScope, peer-reviewed). WhatsApp-first, two-economy, CCMDD/Pelebox precedents. |
| 2026-06-13 | build | All 8 research domains complete: 50 wiki pages + 130 source notes. Committed & pushed incrementally to the branch. |
| 2026-06-13 | build | Lint tooling added (meta/lint.py) + ran LINT: 0 orphan pages; fixed 1 dead source link + 1 pipe-in-alias; catalogued 62 ⚠️ UNVERIFIED / 39 🔮 requires-reform markers. |
| 2026-06-13 | build | Populated glossary across all sections + cross-links; consolidated open-questions with systemic HTTP-403 caveat & re-verification priorities. |
| 2026-06-13 | build | Wave 3 dispatched: 8 research-backed personas + 10 cross-cutting concept pages. |
| 2026-06-13 | build | Added 11th concept `dual-journey` (two-economy hub) + wired into index. |
| 2026-06-13 | build | Wrote 2 worked future-state exemplars: to-be blueprint (chronic insured, Nomvula) + to-be journey (cash acute, Thabo). Surfaced in Home + design-kit index. |
| 2026-06-13 | build | Final LINT clean: 227 files, 0 dead links / 0 orphans / 0 stubs; 63 ⚠️ UNVERIFIED + 48 🔮 requires-reform flags tracked. Vault build v1 complete. |
