---
type: meta
title: "Source reliability guide"
updated: "2026-06-13"
tags: [meta]
---

# Source reliability guide

Used in the `reliability:` field of every source note. Be honest; tier drives
how much weight a claim carries in synthesis and blueprints.

## Tier A — Primary / authoritative
Legislation and regulations; regulators (SAHPRA, SAPC, Council for Medical
Schemes, HPCSA, NDoH); peer-reviewed journals; official technical standards
(HL7 FHIR, NCPDP SCRIPT, GS1); a company's own primary disclosures (audited
annual reports, official service/policy pages, SENS announcements).
→ Suitable to anchor **regulatory, clinical, pricing, and factual** claims.

## Tier B — Strong secondary
Reputable industry analysts and consultancies; established trade and business
press with clear sourcing; academic working papers; government-adjacent bodies
and well-run NGOs; standards-body explainers.
→ Suitable for **market, trend, and contextual** claims; corroborate Tier-A facts.

## Tier C — Useful but weaker
General news without deep sourcing; vendor / company **marketing** content;
single-author blogs from credible practitioners.
→ Use for **colour and leads**; verify any load-bearing claim against A/B.

## Tier D — Anecdotal / signal-only
Forums, social posts, **app-store reviews**, Reddit, single user testimonials.
→ **Never** a factual basis. Valuable only as **consumer-sentiment signals**,
and must be labelled as such (e.g. "App-store reviews suggest…").

## Rules of thumb
- Regulatory & clinical → **A** (B only to explain, not to assert).
- Prices/dates → **A**, with a `retrieved` date (they change).
- Consumer pain points → triangulate **C/D signals** with **B** research.
- One source is a lead; two independent sources is a finding.
