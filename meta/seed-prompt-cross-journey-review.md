---
type: meta
title: "Seed prompt - cross-journey consistency review (#09 × #10)"
updated: "2026-07-26"
tags: [meta, design-kit, domain/ux, journey/refill, topic/acute, topic/chronic]
---

# Seed prompt - cross-journey consistency review (#09 × #10)

Paste the block below as the first message of a fresh workspace session to
run the review with full context. Authored at the close of the #10 build
(2026-07-26, Tamsin + build agent). The goal, in Tamsin's words: **the two
journeys need to look like they've been created by the same person, with the
same intent and effort.**

---

We're continuing the future-state journey workstream for the Dis-Chem
scripting experience: this session is a **consistency and quality review of
the two published moments journeys** - #09 (the household repeat) and #10
(the acute script) - against their specs, the template canon, and each
other. Nothing new gets designed this session; the deliverable is a
findings-and-fixes pass. Read `CLAUDE.md` first as always, then absorb the
canon in this order:

1. `design-kit/templates/moments-journey-template.md` - the canon for
   structure, register AND process. Note it now carries TWO rule layers:
   the v3.1 register (from the #09 pass) and the #10 additions (register
   additions, six process rules, ways of working). **#09 was written before
   the #10 rules existed** - expect honest asymmetries, and treat "which
   #10 rules should be backported into #09's copy" as a core question of
   this review, not a foregone conclusion.
2. `design-kit/journeys/to-be-household-repeat-moments.md` +
   `deliverables/09-tobe-household-repeat-moments.html` - #09's spec and
   page. The spec governs; the `DATA` object mirrors it.
3. `design-kit/journeys/to-be-acute-moments.md` +
   `deliverables/10-tobe-acute-moments.html` - #10's spec and page, built
   phase-by-phase with Tamsin 2026-07-26; every word approved.
4. `deliverables/08-concepts.html` + the concept-card template - 16 cards
   (06 archived, superseded by 15 Made-for-Me Medicine; 16 The Pharmacist
   Who Stays). #10 links concepts with card anchors (`#c8`-`#c16`); #09
   predates the anchors.
5. `deliverables/index.html` - both journey cards and the surrounding
   catalogue copy.
6. `meta/writing-style-guide.md` - prose voice; the deliverable-overrides
   principle applies.

**The review dimensions, in order:**

1. **Spec ↔ HTML fidelity, per journey.** Every need, activity, moment
   block, pain card and panel in each `DATA` object against its spec.
   Divergences are bugs (the spec wins) unless the spec itself notes the
   change.
2. **Each journey against the template canon** - including the #10 rules.
   For every #09 breach of a #10-era rule (transcription-test failures,
   benefit lines without value added, "till" vs "counter", needs without
   "I need", unnamed-vs-named people in statuses, notification wording,
   concept links without card anchors, pain cards vs the
   no-manufactured-pains bar), classify it: (a) backport-worthy - the rule
   is universal and #09 reads worse for missing it; (b) journey-specific -
   the asymmetry is honest (different register, different world); or
   (c) grey - present both readings. Do NOT assume backporting is free:
   #09's copy is approved canon and every change to it needs Tamsin's
   explicit sign-off, spec first.
3. **Cross-journey voice and effort parity** - the "same person, same
   intent, same effort" test. Compare: needs register and length; activity
   anatomy and density; moment-block weight (human beat vs machinery);
   star logic and distribution rationale; the shared signature lines
   ("Every check ran before it left the building", "Medication you can't
   take wrong") - their whys must rhyme, not contradict; shared concepts
   referenced consistently; pain-card attribution style and SRC labels;
   behind-the-line lane density and chip citation formats; emotion-curve
   calibration; page furniture (ribbon, standfirst, philosophy line,
   persona strips, scope-notes footer) as siblings, not clones.
4. **Cross-references and continuity.** #09's scope-notes footer still
   signposts after-hours acute to #07 - #10 now exists; check every
   cross-link in both pages, both specs, the index cards and the concept
   set for staleness. Persona-universe coherence (Nomvula/Sipho vs
   Aisha/Thabo; Naledi appears in both journeys - is that continuity or
   collision?). #05 and #07 remain untouched reference deliverables -
   never rework them.
5. **Sourcing integrity.** Every pain card in both pages traces to its
   research page with an honest attribution; verbatim quotes are verbatim;
   the practice-literature exception appears exactly once and is labelled;
   honest no-complaint notes where the research is silent.

**Process (in order, with the human lead):**

1. **Read-only audit first.** No edits of any kind until the audit is
   complete.
2. **Present a findings report** - grouped, not a prose wall: (A)
   mechanical fixes (spec-HTML drift, stale links, formatting) with a
   recommendation each; (B) backport candidates into #09 copy, each with
   the current text, the proposed text, and the rule invoked; (C) honest
   asymmetries to leave and document; (D) anything discovered that improves
   the template canon itself. Tamsin picks per item or per group -
   AskUserQuestion where it works, numbered plain-text options when the
   dialog drops.
3. **Apply only what she approves** - spec first, then the HTML mirror,
   NEVER copy she hasn't seen (the standing hard rule).
4. **Render-check both pages** (both economies, both panel states, headless
   Chromium, zero console errors) after any change; re-verify the concept
   links resolve.
5. **Commit per batch** (`vault: <area> - <what changed>`), push to the
   designated feature branch; log every pass in `meta/research-log.md`;
   anything deferred goes to `meta/punchlist.md`.

House rules that bit us: straight quotes, SA spelling, no em-dashes (spaced
hyphen ` - `); "in my language" for first-person language references;
"counter" never "till" (#10 rule - a known backport candidate); moments'
crafted lines never leak into activities; page-level copy is Tamsin-approved
before it renders; previous deliverables (#05, #07) never reworked in place;
work on the designated feature branch off `main` (main contains #09 v3.1 AND
the full #10 build, merged 2026-07-26).

Ways of working (carry over exactly): **interactive-lite** - options and
recommendations, not prose walls; propose-then-ask on every copy change;
when codes pile up (P6s, M7s), stop and recap in plain English - people and
stories, not labels; expect Tamsin's replacements to land the set; commit
and push per approved batch.

Start by confirming you've absorbed the canon - both specs, both pages, the
two-layer template canon, the concept set and the index - then present the
findings report, leading with the three or four findings that most threaten
the "same person, same intent, same effort" test.
