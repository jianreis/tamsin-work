# CLAUDE.md — The Vault Schema & Operating Manual

> This file is **the Schema** in the Karpathy "LLM Wiki" pattern. It tells any
> agent (or human) how this vault is structured, how to read it, and how to
> extend it without breaking it. Read this first, every time.

---

## 1. What this vault is

This is a **ground-truth knowledge vault** for designing a **future-state
prescription ("scripting") experience for a South African retail pharmacy**
(anchored on **Dis-Chem**, built inside Bigly Labs).

Its job is to be the **single source of truth** that lets a human service
designer **and an agentic fleet** produce research-backed **service design
blueprints** and **customer journey maps** for prescription submission,
dispensing, collection, and delivery — practical but futuristic.

**Primary user:** Tamsin (service designer, Bigly Labs / Dis-Chem).
**Secondary users:** AI agents that read this vault to generate blueprints,
journeys, concepts, and copy.

The vault is **research-backed**: every non-obvious claim traces to a source.

---

## 2. The three-layer architecture (Karpathy LLM Wiki)

Source pattern: <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>

| Layer | Folder | Who owns it | Mutable? | Purpose |
|---|---|---|---|---|
| **Raw Sources** | `sources/` | Curators (human + ingest agent) | Append-only; don't rewrite captured facts | One note per source. Citation + verbatim excerpts + extracted claims. The evidence base. |
| **The Wiki** | `wiki/`, `design-kit/` | Agents (synthesis) | Yes — kept current | Synthesised entity / concept / domain pages. Cross-linked. This is the working knowledge. |
| **The Schema** | `CLAUDE.md` (this file) + `meta/` | Maintainers | Rarely | Conventions + workflows. The rules of the game. |

**Golden rule:** *Synthesis happens in `wiki/`. Sources are evidence, not
narrative.* A wiki page makes a claim → it links to the `sources/` note(s) that
back it. Never bury a finding only inside a source note.

---

## 3. Folder map

```
/
├── CLAUDE.md                 # this schema
├── README.md                 # human onboarding
├── Home.md                   # Map of Content (start here to navigate)
├── sources/                  # RAW SOURCES (evidence) — one note per source
├── wiki/                     # SYNTHESIS (the knowledge)
│   ├── dischem/              # Dis-Chem company, services, current state
│   ├── sa-regulatory/        # SAHPRA, SAPC, Medicines Act, GPP, POPIA, e-Rx
│   ├── medical-schemes/      # CMS, PMBs, CDL, DSPs, courier pharmacy, NHI
│   ├── dispensing-practice/  # clinical/operational dispensing best practice
│   ├── digital-transformation/ # e-prescribing, automation, AI, telepharmacy
│   ├── global-benchmarks/    # leading pharmacies abroad (US/UK/EU/Asia/AU)
│   ├── ux-service-design/    # service blueprinting, journey mapping, health UX
│   ├── consumer-context/     # SA consumer behaviour, expectations, constraints
│   └── concepts/             # reusable cross-cutting concepts & definitions
├── design-kit/               # ACTIONABLE outputs for blueprint/journey work
│   ├── personas/             # research-backed personas
│   ├── templates/            # service blueprint + journey map templates
│   └── journeys/             # as-is and to-be journey notes
└── meta/                     # punchlist, open questions, glossary, logs, guides
```

---

## 4. Note types & frontmatter conventions

Every note starts with YAML frontmatter. Use the schema for its type.

### 4.1 Source note (`sources/src-<slug>.md`)
```yaml
---
type: source
title: "<exact source title>"
url: "<canonical url>"
author: "<author or org>"
publisher: "<publisher / site>"
published: "<YYYY-MM-DD or 'n.d.'>"
retrieved: "<YYYY-MM-DD>"
source_kind: regulation | gov | peer-reviewed | industry-report | news | company | vendor | blog | dataset
reliability: A | B | C | D     # see meta/source-reliability-guide.md
tags: [domain/xxx, ...]
---
```
Body sections: `## Summary` · `## Key claims` (bulleted, each as a checkable
fact) · `## Verbatim excerpts` (quoted, page/section ref where possible) ·
`## Used in` (wikilinks to wiki pages that cite this).

### 4.2 Wiki page (`wiki/<domain>/<slug>.md`)
```yaml
---
type: wiki
title: "<page title>"
domain: dischem | sa-regulatory | medical-schemes | dispensing-practice | digital-transformation | global-benchmarks | ux-service-design | consumer-context | concept
status: stub | draft | reviewed
confidence: high | medium | low      # overall confidence in the synthesis
tags: [...]
sources: [src-xxx, src-yyy]          # primary source slugs
created: "<YYYY-MM-DD>"
updated: "<YYYY-MM-DD>"
---
```
Body: lead paragraph (the synthesis), then sections. **Inline-cite** material
claims with `[[src-slug]]`. End with `## Open questions` and `## See also`.

### 4.3 Persona (`design-kit/personas/<name>.md`) and journeys/templates
See `design-kit/_design-kit-index.md` for those schemas.

---

## 5. Conventions

- **Wikilinks:** `[[note-slug]]` or `[[note-slug|display text]]`. Link entities
  the first time they appear on a page. Prefer linking over re-explaining.
- **Citations:** every statistic, regulation, date, price, or contestable claim
  gets a `[[src-...]]` link. If you cannot source it, mark it
  `⚠️ UNVERIFIED` and add it to `meta/open-questions.md`.
- **Naming:** lowercase-kebab-case slugs. Sources prefixed `src-`. Be specific:
  `wiki/sa-regulatory/medicines-act-scheduling.md`, not `wiki/sa-regulatory/1.md`.
- **Dates:** ISO `YYYY-MM-DD`. Always record `retrieved` for web sources — SA
  pharmacy regs and Dis-Chem services change.
- **Currency:** South African Rand = `R` / `ZAR`. Note the date of any price.
- **Voice:** neutral, precise, decision-useful. Short sentences. No marketing fluff.
- **South African spelling** (organise, behaviour) in prose.

### Tag taxonomy (use `domain/...` + facets)
`domain/dischem` `domain/regulatory` `domain/schemes` `domain/dispensing`
`domain/digital` `domain/global` `domain/ux` `domain/consumer` ·
`journey/submit` `journey/validate` `journey/dispense` `journey/pay`
`journey/collect` `journey/deliver` `journey/adhere` `journey/refill` ·
`topic/chronic` `topic/acute` `topic/scheduling` `topic/e-prescription`
`topic/adherence` `topic/telehealth` `topic/last-mile` `topic/accessibility`
`topic/trust-safety` `topic/automation` `topic/ai` · `region/za` `region/global`

---

## 6. Source reliability tiers (quick ref — full guide in `meta/`)
- **A** — Primary/authoritative: legislation, regulators (SAHPRA, SAPC, CMS,
  HPCSA), peer-reviewed studies, official standards (FHIR, NCPDP), company
  primary disclosures (annual reports, official service pages).
- **B** — Strong secondary: reputable industry analysts, established trade press,
  government-adjacent bodies, well-sourced reporting.
- **C** — Useful but weaker: general news, vendor marketing, single-source blogs.
- **D** — Anecdotal / unverified: forums, app-store reviews (useful as *signals*
  of consumer sentiment, never as fact). Label clearly.

Regulatory, pricing, and clinical claims should rest on **A/B** sources.
Consumer-sentiment signals may use **C/D** but must be framed as signals.

---

## 7. Workflows (how agents operate on the vault)

### INGEST (a new source arrives)
1. Create `sources/src-<slug>.md` with full frontmatter + summary + key claims +
   verbatim excerpts.
2. Decide which wiki pages it touches (often 3–10). Update each: weave in the
   claim, add inline `[[src-...]]` citation, bump `updated`, add slug to `sources`.
3. Add new cross-links both directions. Update relevant `_index` pages.
4. If it contradicts an existing claim → flag in `meta/open-questions.md` and
   reconcile (prefer higher-reliability tier; note the disagreement).
5. Append a one-line entry to `meta/research-log.md`.

### QUERY (a question is asked)
1. Search `wiki/` first, then `sources/`. Synthesise an answer **with citations**.
2. If the answer is novel and reusable, file it back as a new/updated wiki page.

### LINT (periodic health check)
Run the checklist in `meta/` : orphan pages, dead wikilinks, `⚠️ UNVERIFIED`
claims, stale `updated` dates on volatile topics (Dis-Chem services, prices,
NHI status), `stub` pages with no owner, missing back-links (`Used in`).

---

## 8. How to USE this vault to build blueprints & journeys (the point)

When generating a **service blueprint** or **journey map** for the future-state
scripting experience, an agent should:
1. Ground the **as-is** in `wiki/dischem/` + `design-kit/journeys/` + regulatory
   constraints in `wiki/sa-regulatory/` and `wiki/medical-schemes/`.
2. Pull **best practice** from `wiki/dispensing-practice/` and **proven patterns**
   from `wiki/global-benchmarks/`.
3. Anchor the experience in **real SA consumers** via `design-kit/personas/` +
   `wiki/consumer-context/` (data costs, WhatsApp, languages, two-economy,
   load-shedding, addressing, trust).
4. Apply **method** from `wiki/ux-service-design/` (blueprint layers:
   evidence → customer actions → frontstage → backstage → support processes;
   plus emotion/pain/opportunity lanes).
5. Respect **non-negotiables**: scheduling law, valid-prescription rules,
   pharmacist oversight, POPIA, medical-scheme claim flows.
6. Cite the vault. Every blueprint step should be defensible from a wiki page.
7. Log assumptions and gaps to `meta/punchlist.md`.

**Constraint principle:** *Futuristic, but legal and operable today-ish.* Flag
anything that needs regulatory change as `🔮 requires-reform`.

---

## 9. Maintenance etiquette for agents
- Prefer **updating** an existing page over creating a near-duplicate. Search first.
- Keep `Home.md` and the `_index` pages current when you add pages.
- Never delete a source's captured facts; supersede with a dated note instead.
- When unsure, write it down in `meta/open-questions.md` rather than guessing.
- Commit messages: `vault: <area> — <what changed>`.
