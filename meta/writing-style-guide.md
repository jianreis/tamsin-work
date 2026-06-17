---
type: meta
title: "Writing style guide - anti-AI-slop reference for the scripting vault"
updated: "2026-06-17"
tags: [meta]
---

# Writing style guide - anti-AI-slop reference for the scripting vault

Single consolidated reference for all reader-facing prose written by or with AI assistance in this vault: wiki synthesis pages, personas, journey and blueprint notes, deliverables (exec-deck content), the `## Summary` prose of source notes, and the prose in meta docs. Where sources disagreed, the strictest rule won.

Scope: this guide governs reader-facing PROSE. It does NOT govern YAML frontmatter, verbatim source excerpts, citation slugs and wikilinks, commit messages, code, or the structural conventions already set in [[CLAUDE|the vault schema]] (frontmatter schema, slugs, tags, dates, currency notation, wikilink mechanics). It is complementary to CLAUDE.md §5 (Conventions): CLAUDE.md owns structure, this guide owns prose voice. Where the two overlap, follow both.

### Audience

The outputs governed by this guide are read by the Bigly team producing the work, and by AI agents that read the vault to generate blueprints, journeys, concepts and copy. The human readers are generally fluent in the medical and pharmacy space but are not always highly technical, and often come from CX, UX, design, or development backgrounds. The practical implications for prose:

- Define regulatory, technical, or clinical jargon on first use, or link to [[glossary]], rather than assuming the reader carries it. A first mention of PMB, SEP, Reg 33, FHIR, or PIMART should be readable by a designer, not only a pharmacist.
- Do not over-explain pharmacy basics to a pharmacy-literate reader. A page does not need to define what a prescription is or why chronic medicine is taken daily.
- Write for both humans and agents. An agent pulls single claims and citations; a human skims and reads aloud. Prose that survives both is the target.

---

## 1. Voice fundamentals

- Neutral, precise, decision-useful. State things plainly. Lead with the point, then support it.
- Be direct and pragmatic. Acknowledge complexity and trade-offs honestly rather than overselling.
- Use contractions naturally where the surface allows: doesn't, won't, it's, that's, you'll, we've. (Wiki synthesis and source-note summaries run more formal; personas and templates run warmer.)
- Ground abstract ideas in concrete examples quickly. Don't linger on theory.
- Mix short punchy sentences with longer explanatory ones. Vary the rhythm. Prefer active voice.
- Specific numbers over vague claims. "A 6-month repeat ceiling on a chronic script", not "valid for a while".
- Understated confidence: demonstrate expertise through specificity, never announce it.
- Qualify where honest: "That's not a reason to avoid courier delivery, but it is a cost you should be explicit about."
- Questions can frame sections, but never answer your own rhetorical question in the next sentence.

## 2. The AI pattern catalogue

Any single pattern used once might be fine. The AI feel comes from patterns clustering: multiple tropes together, one trope repeated, or violations concentrated in the opening and close (AI front-loads and back-loads slop). The frequency budget in section 3 sets the hard numbers; this section is the full catalogue.

### 2.1 Word choice

Banned vocabulary (always flag, zero budget):

- delve, utilise (use "use"), leverage (as a verb), robust, streamline, harness, certainly
- tapestry, landscape (metaphorical), paradigm, synergy, ecosystem and framework (unless literally accurate)
- seamless, empower, comprehensive (when meaning "thorough"), cutting-edge, game-changing, innovative, revolutionise, transformative, holistic, unprecedented
- Title/heading extras: ultimate, complete, essential, powerful, unlock, maximise, mastering, supercharge

Note for this vault: "ecosystem" is literally accurate when naming the medical-scheme ecosystem or the broader healthcare ecosystem Dis-Chem is building into, and "framework" when naming an actual named framework (a regulatory framework, a named service-design framework such as COM-B or EAST). The ban is on the decorative uses.

Magic adverbs (zero budget when injecting false significance): quietly, deeply, fundamentally, remarkably, arguably.

The "serves as" dodge: don't replace "is"/"are" with "serves as", "stands as", "marks", "represents". Use the copula.

Dramatic intensifiers (budgeted, not banned): precisely, directly, critically, deliberately, crucial, essential. Only when they add actual meaning. Max one per ~500 words.

### 2.2 Sentence structure

- "Not X; it's Y" rhetorical inversions. All variants: "X isn't the Y. It's the Z" / "X is not Y, it's Z" / "aren't X. They're Y". The test: does the sentence need the negation to make its point? If the positive claim loses nothing, the negation is slop. This is the single most telling AI signature in the catalogue.
- "Not X. Not Y. Just Z." dramatic countdowns.
- "The X? A Y." self-answered rhetorical questions ("The result? Devastating.") - state the point.
- Anaphora abuse: the same sentence opening 3+ times in succession ("They could... They could... They could...").
- Tricolon abuse: one three-part list is fine; back-to-back tricolons are a pattern-recognition failure.
- Filler transitions: "It's worth noting", "It bears mentioning", "Importantly", "Interestingly", "Notably". Connect the point or just state it.
- Trailing "-ing" phrases for shallow analysis: "...highlighting its importance", "...reflecting broader trends". If there's analysis to do, give it a real sentence.
- False ranges: "from X to Y" where X and Y aren't on a real scale ("from submission to societal transformation").
- Semicolons for rhetorical contrast ("We don't guess and hope; we ground every step in the vault"). Two sentences, or "but". Semicolons in multi-clause lists are fine.

### 2.3 Paragraph and document structure

- Dramatic single-sentence paragraphs used as reveals ("That changes everything."). Fold in or cut.
- The one-line-reveal structure specifically: regular paragraph -> single-sentence paragraph restating its thrust -> next paragraph. Zero budget.
- Fragment strings: runs of one-sentence paragraphs for manufactured emphasis ("He collects at the clinic. On foot. Every month.").
- Listicles in a trench coat: "The first consideration is... The second is..." prose. Use a real list or real paragraphs.
- Fractal summaries: summarising every subsection, then the section, then the document.
- Signposted conclusions: "In conclusion", "To sum up", "In summary", "Let's recap". Just end; the reader can feel it.
- One-point dilution: restating one argument ten ways across thousands of words to seem comprehensive.
- Content duplication: near-identical paragraphs in different sections.
- Stat-dump openings: a wall of numbers before any thesis (a documented failure mode, see section 7).

### 2.4 Tone

- False suspense: "Here's the kicker", "Here's the thing", "Here's where it gets interesting", "Here's what most people miss".
- Patronising analogies: "Think of a prescription as a boarding pass for your medicine". If a metaphor is needed, make it specific and clarifying.
- Futurism invitations: "Imagine a world where...", "Picture this:".
- False vulnerability: performative self-awareness ("And yes, we're a little obsessed with adherence"). Real candour is specific and uncomfortable.
- Truth assertions: "The truth is simple", "The reality is clear", "It's obvious that". If you must assert clarity, it isn't clear.
- Stakes inflation: a note about dispensing-fee bands is not a meditation on the fate of healthcare. (The inverse trap exists here too: access to chronic medicine for the uninsured majority genuinely is high-stakes, so earn the stakes with evidence instead of asserting them.)
- Pedagogy markers: "Let's break this down", "Let's unpack this", "Let's explore", "Let's dive in".
- Directness assertions: "Let's be clear", "To be explicit", "We want to be direct". Just be those things.
- Vague attributions: "experts agree", "industry observers note", "studies show". Cite the source note or cut the claim (see section 4).
- The dismissal formula: "Despite these challenges, [optimistic conclusion]". Engage honestly instead.
- Moralising: telling the reader what to care about or how to feel. Present information; let them conclude.
- Importance constructions: "This matters because...", "This is critical because...". Show it through evidence.

### 2.5 Composition

- Dead metaphors beaten into the ground: introduce a metaphor, use it, move on. Not 5-10 callbacks.
- Historical analogy stacking: rapid-fire lists of companies or revolutions for false authority ("Amazon didn't build Sixty60. Checkers didn't build PillPack.").
- Preamble bloat: anecdotal scene-setting, "I've been in enough pharmacies to know Y", or recaps of someone else's argument before the first concrete claim. SEO-recipe openings ("In today's healthcare landscape, pharmacies are increasingly...") fail at any length.
- Fabricated experience: "teams I talk to", "in my experience", "what customers tell me" framings that don't trace to a real conversation, transcript, sourced signal, or lived event. These are empirical claims dressed as opinion. Zero budget unless sourced.
  - Persona exception: persona quotes and first-person persona narration are a sanctioned design artefact in `design-kit/personas/`, not a violation, provided they are illustrative archetypes grounded in cited consumer-context research (typically C/D sentiment signals triangulated with B research) and clearly framed as persona voice, never attributed to a real named individual. Sipho's "Send me a WhatsApp or an SMS with a PIN, and let me fetch it close to home" in [[design-kit/personas/low-data-whatsapp-first-peri-urban]] is the model: an archetype's voice, grounded in cited research, not a real person's quotation. What stays zero-budget everywhere is fabricated experiential claims in synthesis, wiki, or deliverable prose ("customers tell us...", "teams I talk to...") that don't trace to a sourced signal.

### 2.6 Formatting tells

- Em dashes. Zero. Use a regular hyphen with spaces ( - ) for asides. A human uses 2-3 per piece; AI uses 20+. Also no double hyphens.
- Bold-first bullets: every bullet starting with a bolded keyword. Almost nobody formats lists this way by hand. Zero budget in drafted reader-facing prose. Bold for genuine structural labels in reference docs (glossary entries, persona fact rows, template fields) is fine.
- Unicode decoration: arrows and characters you can't type on a standard keyboard, used decoratively. Use -> or => in prose. (Note: existing vault pages use a `→` after glossary and tier definitions as a structural convention; that is structure under CLAUDE.md, not prose, and is out of scope here. Don't introduce decorative arrows into running prose.)
- Smart/curly quotes: use straight quotes.
- Bold for emphasis in running prose: almost never. Bold is for headings and list labels. Same for italics: titles, introducing terms, genuine emphasis only. (Wiki pages in this vault do bold key terms inline as a house convention; that is allowed where it labels a defined term, not where it manufactures emphasis.)
- Headers should be descriptive and practical, not clever or teasing.
- Prose over bullets for argument in longform synthesis. Numbered lists only for genuinely sequential steps. Tables and bullets are fine for reference material, journey stages, and blueprint cells.

### 2.7 Short-form tells (titles, headings, slide lines, one-liners)

Short-form is where tells are easiest to smell. This vault's short-form surfaces are wiki page titles and headings, slide titles, kickers and "so what" lines, persona one-liners, glossary definitions, and open-question rows.

Banned title and heading patterns: "The Ultimate Guide to E-Prescriptions", "E-Prescriptions: Everything You Need to Know", "How to Submit a Script: A Complete Guide", "Mastering Adherence in 2026", "Unlock the Power of Courier Pharmacy". Bare "Introduction", "Conclusion", "What is X?", "Benefits of X", "Why X Matters", "The Future of X".

Good title and heading patterns: a specific, falsifiable claim ("Price is not a lever the platform controls"); a question the reader actually asks ("Can a courier pharmacy dispense a Schedule 5 repeat?"); a concrete topic plus practitioner angle; honest framing ("The real cost of a cash acute script"). The exec-deck pattern is a strong model: a title that asserts ("Adherence is a design problem, and the label is the design surface") paired with a one-line "so what" that earns it.

Glossary definitions: one plain-language line that a non-pharmacist can read, then the wikilink to the page treating it in depth. Open-question rows: the question stated as a question, not as a teaser.

If external comms (for example a LinkedIn post) are ever drawn from this vault, the same short-form discipline applies.

### 2.8 Performed analysis (chat-voice leakage)

The register of an AI assistant performing close reading, leaked into prose. It reads as analysis while containing none. Zero budget in reader-facing prose.

- Structural-discovery jargon: calling claims "load-bearing", hunting "smoking guns", announcing the "spine", "structural spine", or "architecture" of an argument, narrating "moves" and "gaps" as if annotating a chess game.
- Reviewer courtesies with no interlocutor: "Let me push back on that framing", "That's a sharp observation", "Let me refine that rather than just accepting it", "It's worth sitting with this for a moment". These are chat-transcript throat-clearing; prose has nobody to flatter.
- Analysis announcements and colon-reveals: "The tell: ...", "The gap is what's actually interesting", "That's the real story". State the observation instead of announcing that you've made one.
- Capitalised copula for emphasis ("the constraint IS the design"). If the verb needs caps, the sentence hasn't earned the claim.

Exception (re-pointed for this vault): this vault has no fact ledgers. Its analytical and archival register, including any "load-bearing"-style labelling, is acceptable in the `## Key claims` bullets of source notes and in meta tracking docs (open-questions rows, punchlist). It must stay OUT of reader-facing synthesis prose: wiki pages, personas, and deliverables. See the source-note register row of the surface table (section 5).

## 3. The frequency budget

Rules without numbers don't hold (see section 7). These are hard limits per page. A draft exceeding any limit gets revised; you cannot flag your way past a hard limit. "Five load-bearing inversions" means the page is structured around an AI pattern and needs rewriting, not defending.

The numeric budgets here were inherited from a prior Bigly content engagement's hard-won failures and are kept because the failure modes generalise. This vault's typical reader-facing page is shorter than that engagement's pieces: wiki synthesis runs ~600-1,400 words, personas ~600-750, templates ~500-700. The default budget assumes a typical page of around 600-1,400 words; the scaling rules below handle shorter and longer surfaces.

### Zero-tolerance items (any length, any surface)

| Pattern | Budget |
|---|---|
| Banned vocabulary (section 2.1 list) | 0 |
| Em dashes / double hyphens | 0 |
| Semicolon-for-contrast | 0 |
| Dramatic one-line reveals (paragraph -> one-line restatement -> paragraph) | 0 |
| Bold-first bullet runs | 0 |
| Unicode decoration / smart quotes (in prose) | 0 |
| Filler transitions ("It's worth noting", "Importantly", "Notably") | 0 |
| Signposted conclusions ("In conclusion", "To sum up") | 0 |
| Self-answered rhetorical questions ("The result? A 40% gain.") | 0 |
| Consecutive rhetorical questions | 0 pairs (one question at a time) |
| Anaphora runs (same opener 3+ times in succession) | 0 |
| Back-to-back tricolons | 0 |
| Vague attributions ("experts say") | 0 |
| Naked external attributions (named source, no `[[src-]]` citation) | 0 |
| Fabricated experiential claims ("teams I talk to" without a sourced signal; persona voice in `design-kit/personas/` is exempt per 2.5) | 0 |
| Performed-analysis register in reader-facing prose (section 2.8) | 0 |

### Budgeted items (defaults per page)

| Pattern | Budget | Notes |
|---|---|---|
| "Not X; it's Y" inversions (all variants) | 1 per piece | Does NOT scale with length. One is a deliberate voice move; two is pattern abuse. The single instance should be load-bearing (e.g. the thesis). |
| Single-sentence paragraphs | 1 per 500 words | A 1,200-word page gets at most 2. Three in the opening 500 words is an AI pattern, not voice. |
| "That X" / "And X" sentence openings | 2 per piece | A two-beat rhythm marker, used sparingly, never a default sentence shape. |
| Dramatic intensifiers (precisely, directly, critically, deliberately) | 1 per ~500 words | Only where they add real meaning. |
| Tricolons (three-part lists) | 1 per section, never adjacent | One is rhythm; stacks are slop. |
| Extended metaphor | 1 per piece, max 2 callbacks | Introduce, use, move on. |
| Rhetorical questions (non-consecutive, not self-answered) | 2 per 1,000 words | Section-framing questions are fine if the section answers them, not the next sentence. |
| Pre-thesis preamble | 150 words default | Words from the title to the first concrete, falsifiable claim: a specific number, a cited source, a named system with detail, or a declarative thesis the page will defend. Calibrations: wiki synthesis 80 (the lead paragraph IS the synthesis), persona one-liner hook then straight in, exec-deck slide leads with the title and "so what". |

### Scaling rules

- Under 500 words (templates, persona one-liners, glossary entries, slide content, open-question rows): every "per piece" budget drops to 0, including the inversion. Exception: a persona's one-line hook and its single illustrative quote are the native idiom there, so the single-sentence-paragraph budget doesn't apply to them.
- Over 1,400 words (longer journey or blueprint notes): the per-500-word budgets scale linearly. The inversion budget stays at 1. The preamble budget stays fixed.
- Judgment calls: if a deliberate exception is genuinely load-bearing, keep it within budget and note which instance and why in your self-review. Exceeding the budget is never a judgment call.

### The gate principle

The budget is a ceiling on slop, not a target for voice. A draft can pass every count and still read as AI-assembled: stat-dump opening, no register, generic transitions. The lint catches the extreme, not the baseline. Constraints on a page narrow the available moves; they never lower the bar. After the counts pass, read the page aloud and ask: does this sound like a person who did the work, telling a peer what they found?

## 4. Evidence and citation rules

This vault has its own evidence system; follow it, not embedded markdown links.

- Every material claim (a statistic, a regulation, a date, a price, any contestable fact) cites a source note via `[[src-slug]]`, per CLAUDE.md §5. The source note carries the canonical URL, the `retrieved` date, and the reliability tier. The prose does not repeat the URL.
- Reliability tiers drive how much weight a claim carries (see [[source-reliability-guide]]). Regulatory, clinical, and pricing claims rest on Tier A (Tier B may explain them, not assert them). Market, trend, and contextual claims rest on A or B. Consumer-sentiment may use C or D but MUST be framed as a signal ("App-store reviews suggest...", "HelloPeter complaints point to..."), never stated as fact.
- One source is a lead; two independent sources is a finding.
- A claim with no source gets marked `⚠️ UNVERIFIED` and logged to [[open-questions]], or it gets cut. Do not smuggle an unsourced claim into prose by softening its wording.
- Numbers must agree with each other within a page. Restating the same quantity two ways ("46% band" next to "almost half the price") is a contradiction the reader will catch. Date every price, in Rand (R) per CLAUDE.md §5.
- Verify volatile figures against current reality before citing. A figure quoted faithfully from a superseded source is still a factual error. This vault has a documented, honest example of the hazard: during the initial research run many regulator, government, and company PDF hosts returned HTTP 403 to automated fetches, so several Tier-A figures were triangulated from search-engine extracts of the primary texts rather than read off the PDF. The dispensing-fee bands, the CMS coverage split, the Dis-Chem FY2026 figures, and the exact Reg-33 and §22A wording are among the claims flagged for re-verification in [[open-questions]]. Treat anything carrying that flag as provisional, and re-confirm against the primary Gazette, SENS, or regulator text before it anchors a blueprint step.
- First-person experiential framing in reader-facing synthesis must trace to a real transcript, meeting note, sourced signal, or lived event. If a page is seeded from someone else's material, use attribution or pattern framing ("the pattern looks like...") instead. The persona exception in section 2.5 applies only in `design-kit/personas/`: persona voice and quotes are sanctioned design artefacts there, grounded in cited research and never attributed to a real named individual.

## 5. Surface calibration

The catalogue and budget apply everywhere. Voice and length vary by surface. There are no personal bylines in this vault; outputs are produced by Tamsin and the agentic fleet, grounded in the vault and cited back to it.

| Surface | Voice | Length / preamble notes |
|---|---|---|
| Wiki synthesis pages (`wiki/`) | Neutral, precise, decision-useful. The lead paragraph IS the synthesis. Inline-cite material claims with `[[src-]]`. | ~600-1,400 words. Tight preamble: get to the claim in the first sentence (cap ~80 words to first concrete claim). |
| Personas (`design-kit/personas/`) | Human-centred. First-person narration and one illustrative quote permitted, grounded in cited research and framed as archetype, not a real individual. | ~600-750 words. Opens with a one-line hook. |
| Journey maps and service blueprints (`design-kit/journeys/`, blueprint templates) | Structured and tabular. Stage descriptions human-readable; every cell traceable to the vault. | ~1,500-2,000 words. Per-500-word budgets scale at this length. |
| Templates (`design-kit/templates/`) | Task-oriented, instructional, with a worked example. | ~500-700 words. Per-piece budgets at 0; instructional fragments are fine. |
| Exec-deck and deliverables content (`deliverables/`) | Strategic, assertion-first, but every assertion evidence-backed. Where global benchmarks are used, frame as "direction of travel, not local proof". Slide titles, kickers, and one-line "so what". Audience is leadership and executive. | Slide-sized units; lead with the title and the "so what", not a preamble. |
| Meta docs (`meta/`) | Transparent, self-documenting, internal. Agents leave a trail for humans. | n/a |
| Source-note synthesis prose (the `## Summary` of `sources/`) | Archival. Facts plainly stated, no editorialising. Verbatim excerpts and key-claim bullets are evidence, not prose to restyle. The analytical/archival register (including "load-bearing"-style labelling) is acceptable here and in meta tracking docs; keep it out of wiki, persona, and deliverable prose. | n/a |

Spelling: South African English throughout (organise, behaviour, colour, optimise, centre; licence as a noun, license as a verb; practise as a verb, practice as a noun), per CLAUDE.md §5. No per-surface exceptions; normalise stray American spellings when touching a draft. Rand is `R` / `ZAR`; dates are ISO `YYYY-MM-DD`.

## 6. Checking a draft

Self-check before any handoff; reviewers re-run the same checks as a hard gate (failures bounce the draft without further review). `draft.md` is a generic placeholder; the checks apply to any .md prose file being reviewed.

```bash
# Banned vocabulary
grep -inE "delve|leverage|robust|streamline|comprehensive|seamless|empower|holistic|unprecedented|cutting-edge|game-changing|revolutionar|serves as|worth noting|dive into|unpack" draft.md

# American spellings to normalise to South African
grep -inE "organize|organization|behavior|color|optimize|center|license to|defense|fulfill" draft.md

# Inversions (budget: 1 total across all signals)
grep -cE "isn't the|isn't a|aren't the|aren't a|is not the|is not a|are not the|are not a|isn't about|is not about" draft.md

# Semicolon-for-contrast (budget: 0)
grep -cE "; it's |; they're |; it is |; they are " draft.md

# "That X" / "And X" openings (budget: 2 combined)
grep -cE "^(That|And) " draft.md; grep -cE "\. (That|And) " draft.md

# Single-sentence paragraphs (budget: word_count / 500)
awk 'BEGIN{RS=""; FS="\n"} {if (gsub(/[.!?]/, "&", $0) <= 1) c++} END{print c}' draft.md

# Fabricated experiential claims (budget: 0 unless sourced; persona voice in design-kit/personas/ is exempt)
grep -inE "(teams|customers|people|patients) (I|we) (talk|talked|spoke|speak|see|have seen|work with)|in (conversations|practice|my experience)|what (customers|teams|patients) tell" draft.md

# Em dashes and unicode decoration (budget: 0; -> and => are the allowed replacements in prose)
grep -nE "—|→|"|"|'" draft.md

# Performed-analysis register (budget: 0 in reader-facing prose; allowed in source-note key-claims and meta tracking docs)
grep -inE "load-bearing|smoking gun|structural spine|the spine of|the tell:|sharp observation|push back on (that|the|your)|worth sitting with" draft.md

# External attributions: for each hit, verify a [[src- citation appears in the same claim
grep -nE "(said|wrote|argued|claimed|reported|noted|observed|stated|told|suggests|according to)" draft.md
```

Then the manual passes, in order: counts (above), voice fidelity against the surface table, word-level tell sweep, evidence trace (every material claim carries a `[[src-]]`; every external attribution carries a citation in the same claim; consumer-sentiment is framed as a signal; volatile and `⚠️ UNVERIFIED` figures are flagged), craft (does the close reframe rather than summarise; is the preamble within cap; is the length earned for the surface).

Cumulative scoring for review verdicts: a single violation means little. Flag hard when 3+ categories fire at once, any one pattern appears 5+ times, violations cluster in one paragraph, or the opening and close carry most of them.

## 7. Why the numbers exist

The numeric budgets were inherited from a prior Bigly content engagement, where each one traced to a real failure in an agentic content factory. The engagement changed and its specific incidents do not belong here, but the failure modes generalise, so the durable lessons are kept as the reasoning behind the budgets:

- A pattern ban without a number doesn't hold. "Avoid inversions" loses to "one inversion per piece, counted".
- A gate without enforcement doesn't hold. A rule documented in three places still ships if nothing counts it at handoff.
- Reviewers are bound by the same gates as drafters. A reviewer's suggested edit is subject to the same counts as the original draft; a reviewer cannot license a violation they would bounce.
- The lint catches the extreme, not the baseline. A clean count is not the same as good prose: a page can pass every grep and still read as AI-assembled (stat-dump opening, no register, generic transitions). Read it aloud.
- When adding a future rule to this file, give it a number and a grep where possible, so it can be enforced rather than merely hoped for.

## 8. Provenance

Adapted on 2026-06-17 from a writing style guide originally developed for a different Bigly project (a content engagement), with that project's specifics (its surfaces, bylines, domain examples, and incident history) stripped out and the rules recalibrated for this Dis-Chem scripting vault. The anti-slop catalogue, the frequency budget, and the gate discipline carry over; the evidence rules, surface calibration, short-form surfaces, and the "why the numbers exist" rationale were rebuilt around this vault's own conventions and citation system.

This file is now the canonical prose-style reference for the vault, complementary to [[CLAUDE|the vault schema]]: CLAUDE.md owns structure, this guide owns prose voice. It is internal to the Bigly team producing the work and is not itself a client or stakeholder deliverable.
