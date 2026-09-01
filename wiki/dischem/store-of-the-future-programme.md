---
type: wiki
title: "Store of the Future (SOTF) — programme overview"
domain: dischem
status: draft
confidence: low
tags: [domain/dischem, domain/ux, project/sotf, region/za]
sources: [src-dc-store-future-interviews-2026]
created: "2026-09-01"
updated: "2026-09-01"
---

# Store of the Future (SOTF) — programme overview

The hub page for **Store of the Future**, the Bigly Labs / Dis-Chem programme
(Tribe 4: Enterprise Acceleration) building a future-forward store experience.
Unlike [[Home|Future of Scripting]], which designs a future state that does not
yet exist, SOTF has a **live MVP**: real solutions in real stores, with customer
feedback and early results now driving evolution. This page anchors everything
the vault knows about the programme and names what still needs ingesting.

**Status of this page:** draft on thin evidence. The vault currently holds one
strong SOTF source (the pre-launch customer interviews); the programme
definition, MVP scope and post-launch results below are pending ingestion and
flagged accordingly.

## Programme ambitions

As relayed by the project lead (Tamsin, 2026-09-01), SOTF aims to move Dis-Chem
stores toward:

1. **Integrated healthcare** - the store as part of Dis-Chem's broader
   healthcare offer (clinics, Health/Kena, insurance), not a dispensing counter
   with a shop attached. See [[wiki/dischem/dischem-company-overview]].
2. **Increased access** - more South Africans able to reach that healthcare.
3. **Reduced cost to the customer** - through the improved Better Rewards
   programme ([[src-dc-better-rewards]], [[src-capitec-dischem-better-rewards-2025]]).
4. **Better customer experiences** in store.

⚠️ UNVERIFIED against programme documents - these four ambitions are the
lead's framing, not yet backed by an ingested strategy source. Logged in
[[meta/open-questions|open questions]].

## What the vault already holds

- **Pre-launch customer evidence.** The January 2026 interview study (n=12,
  scenario-based, Melrose Arch pilot context) tested proposed future-state
  dispensary journeys. Headline: customers value predictability, reassurance
  and recovery over speed or novelty, and trust digital only where it keeps a
  visible human fallback. Full synthesis in
  [[wiki/dischem/store-of-the-future-customer-voice]]
  [[src-dc-store-future-interviews-2026]].
- **Strategic context.** The strategic pillars in
  `deliverables/_shared/pillars.md` already treat "store of the future"
  operating-model bets as part of the shared strategy frame, and the FoS
  journey work (#09, #10) cites SOTF findings in its pain lanes.
- **Surrounding current state.** Company scale, dispensary services, digital
  channels and complaint patterns across [[wiki/dischem/_index|the Dis-Chem
  domain]] apply to SOTF as much as to scripting.

## What needs ingesting (the intake list)

Each item becomes a `src-sotf-...` source note via the INGEST workflow, then
feeds back into this page:

| Gap | What it covers | Why it matters now |
|---|---|---|
| Programme definition | Vision/strategy material behind the four ambitions | Turns the ⚠️ above into cited claims |
| MVP scope | Which solutions went live, where, when | The baseline the evolution work starts from |
| Early results | Metrics, adoption, operational findings since launch | Evidence for what to evolve and why |
| Post-launch customer feedback | Anything beyond the Jan 2026 pre-launch study | Live behaviour vs concept-test sentiment - expect contradictions worth reconciling |
| The solution being evolved | Which solution, and the feedback driving the change | The immediate project brief |

## Relationship to Future of Scripting

The two programmes share this vault's evidence base and differ in horizon.
FoS designs the future-state scripting experience end to end; SOTF is live and
iterating, and scripting is one lane within its wider store experience. Where
SOTF evidence speaks to scripting (as the interview study does), it feeds both.
FoS deliverables (`deliverables/01`-`13`) are preserved as they are; SOTF work
lands in `deliverables/sotf/`. Programme-specific notes carry `project/sotf`
or `project/fos` tags per `CLAUDE.md` §5.

## Open questions

- ⚠️ The four programme ambitions are unverified against programme documents.
- ⚠️ MVP scope, launch dates, pilot stores and results are entirely absent
  from the vault.
- Does post-launch behaviour confirm the pre-launch preference for
  predictability over speed, and the guardrails (grace periods, human
  fallback) customers asked for? Reconcile once results are ingested.
- Which SOTF solution is being evolved, and against which feedback?

## See also

- [[wiki/dischem/store-of-the-future-customer-voice]] - the customer evidence
- [[src-dc-store-future-interviews-2026]] - the interview study
- [[wiki/dischem/dischem-company-overview]] - the healthcare offer SOTF integrates
- [[wiki/dischem/pharmacy-complaints-pain-points]] - as-is pain baseline
- [[wiki/dischem/dischem-social-sentiment-trust-journey]] - sentiment context
