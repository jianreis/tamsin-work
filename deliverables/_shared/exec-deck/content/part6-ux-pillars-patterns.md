# Part 6 — UX pillars and transferable patterns (strategy made buildable)

## SLIDE: section-divider
id: divider-ux-pillars-patterns
num: 6
title: From strategy to the touchpoint — seven UX pillars, proven patterns
subtitle: How the experience must behave, and where each behaviour has already worked abroad
notes: Part 5 set the strategic bets (S-pillars); Part 6 is the design constitution (U-pillars) and the proof that each is buildable. Every pillar carries a real-world org example with a vault citation. U3 has been renamed — see the hero slide.

## SLIDE: pillar-grid
id: ux-pillars-overview
title: The seven UX pillars — the design constitution for every touchpoint
cards:
  - {id: U1, name: "Channel ladder: WhatsApp-first & data-frugal", oneLiner: "WhatsApp/USSD/SMS first, app as enhancement; low-data, async, resumable, idempotent by default."}
  - {id: U2, name: "Never leave them guessing", oneLiner: "Honest real-time status at every step; the silent wait and unexplained rejection are the primary pains."}
  - {id: U3, name: "Give me all the variables upfront", oneLiner: "Surface everything that materially affects the decision before commitment — cost, cover, stock, timing/ETA, alternatives; never spring a surprise (money is the sharpest case, not the whole of it)."}
  - {id: U4, name: "Design for graceful failure", oneLiner: "Plain-language recovery, never a dead end, always a route to a pharmacist."}
  - {id: U5, name: "Dignity, privacy & language by default", oneLiner: "Stigma-aware, discreet, multilingual, POPIA-grade consent; caregivers/proxies are first-class users."}
  - {id: U6, name: "Reduce the journey, don't just digitise it", oneLiner: "Eliminate steps and re-keying; one profile across channels; measure friction removed, not features shipped."}
  - {id: U7, name: "Adherence-as-design", oneLiner: "Effectiveness is lost after dispensing; design the schedule/label and refill loop as a behaviour-change surface."}
evidence: [deliverables/_shared/pillars.md, design-kit/templates/future-state-principles, wiki/global-benchmarks/patterns-to-borrow-and-cautions]
notes: Names and one-liners are verbatim from the canonical pillars.md. U3 uses the RENAMED wording per SPEC §6 (was "Make money legible, early, always"). These seven answer HOW the experience must behave; a good blueprint step is defensible from at least one S and one U.

## SLIDE: comparison
id: pattern-pillar-map
kicker: UX · The map
title: Every pillar is already buildable — each behaviour maps to a pattern that has shipped abroad
so_what: We are not inventing experience principles, we are importing proven mechanisms — so each UX pillar can point to working journey moments and a real overseas precedent, not aspiration.
columns: ["UX pillar", "Future-state journey moment", "Global pattern (precedent)"]
rows:
  - ["U1 — WhatsApp-first & data-frugal", "WhatsApp-first nudge; USSD/SMS fallback (m1)", "QR token on any phone, forwardable; WhatsApp as SA's default channel"]
  - ["U2 — Never leave them guessing", "Realistic tracking + QR proof-of-delivery (m6); live ROWA pick status (m5)", "NHS App real-time 'Amazon-style' tracking"]
  - ["U3 — Give me all the variables upfront", "Cost, cover & alternatives legible before commit (m3)", "PillPack copay-vs-cash + delivery date upfront; Cost Plus itemised price"]
  - ["U4 — Design for graceful failure", "Graceful-failure loops; Pelebox locker reroute (m8, m6)", "Dual verification; AI-triage-before-human with hard guardrails"]
  - ["U5 — Dignity, privacy, language & proxy", "Household medicine cabinet + proxy consent (m2); named pharmacist + AI co-pilot (m4)", "Australia eScript token forwarded to a carer; nominated/ASL with revocable consent"]
  - ["U6 — Reduce the journey", "Renewal via teleconsult → new e-script token (m9); auto-refill + one household profile (m1, m2)", "New-token-per-repeat; auto-refill/med-sync; teleconsult loop; omnichannel/dark-store"]
  - ["U7 — Adherence-as-design", "ROWA robot pick + adherence dose-pack; hybrid printed instructions (m5, m7)", "PillPack date/time dose sachets; adherence packaging"]
evidence: [deliverables/_shared/06-anim-data.js, wiki/global-benchmarks/patterns-to-borrow-and-cautions, wiki/global-benchmarks/australia-chemist-warehouse-escript, wiki/global-benchmarks/amazon-pharmacy-pillpack-deepdive]
visual: dia:pattern-pillar-map
flags: []
notes: Left = the North Star deck's nine journey moments (m1–m9 in 06-anim-data.js); right = the 11 transferable global patterns from patterns-to-borrow-and-cautions.md. Borrow the mechanism, reject the foreign funding architecture (no PBM, no single-payer rail). All precedents are "direction of travel" — no SA-local proof exists.

## SLIDE: pillar
id: u3-variables-upfront-hero
kicker: UX · Hero pillar (renamed)
name: U3 — Give me all the variables upfront
what: Surface everything that materially affects the decision BEFORE commitment — cost, funding/cover, stock availability, timing/ETA, alternatives, and anything else that would change the choice — never spring a surprise at the till.
why: Money is the sharpest case, not the whole of it — the trust-breaker is any hidden variable revealed too late (an out-of-stock after the trip, an ETA that slips, a co-pay at the counter), so legibility before commit is the single highest-trust design move and SEP makes the price half of it free.
evidence: [wiki/global-benchmarks/amazon-pharmacy-pillpack-deepdive, wiki/global-benchmarks/usa-cvs-walgreens-amazon, wiki/sa-regulatory/sep-dispensing-fee, deliverables/_shared/06-anim-data.js]
example: Amazon PillPack / Amazon Pharmacy shows insured copay vs cash price side-by-side, the delivery date, and generic alternatives upfront at checkout; Mark Cuban Cost Plus shows a fully itemised cost + markup + fees — both make the variables legible before you pay.
visual: dia:variables-upfront
flags: []
notes: This is the SPEC §6 rename (was "Make money legible, early, always"). Broaden the radial diagram beyond price: Cost · Funding/cover · Stock · Timing/ETA · Alternatives · (and any other decision-material variable). SA's SEP + capped dispensing fee already make the cost spoke natural — lean into it. Anim m3 ("I know the cost and the cover before I commit") is the in-journey proof.

## SLIDE: theme
id: ux-pillars-each-grounded
kicker: UX · Grounded
title: Each pillar earns its place — one proven org example apiece
so_what: Every UX pillar already has a working real-world implementation we can point to, so the design constitution is defensible to a sceptical executive, not a designer's wish-list.
body:
  - U1 — WhatsApp is SA's default channel (#1 app, ~99% mobile coverage); USSD/SMS for the low end; India/China platform loops prove the model at scale.
  - U2 — NHS App: >39m users, real-time "Amazon-style" status (ordered → ready → collected) cuts call-centre load and anxiety.
  - U4 — Dual prescription verification (India) + AI-triage-before-human with hard guardrails (China bans AI-generated scripts) = graceful, safe failure.
  - U5 — Australia eScript token is an SMS the patient can forward to a carer; nominated/ASL consent is per-pharmacy and revocable — proxy/caregiver as a first-class user.
  - U6 — MedAdvisor: a digital script wallet + "tap to refill" so medicine is prepared and ready; new-token-per-repeat removes the re-submit step.
  - U7 — PillPack pre-sorts daily medicines into per-dose sachets labelled by date and time — the dose, not the bottle, is the unit patients manage.
evidence: [wiki/consumer-context/digital-access-and-whatsapp, wiki/global-benchmarks/uk-boots-pharmacy2u-nhs-eps, wiki/global-benchmarks/patterns-to-borrow-and-cautions, wiki/global-benchmarks/australia-chemist-warehouse-escript, wiki/global-benchmarks/amazon-pharmacy-pillpack-deepdive]
flags: [unverified]
notes: U3 is covered by its own hero slide (PillPack/Cost Plus), so it is intentionally not repeated here. FLAG unverified — NHS App user/order counts, MedAdvisor reach, PillPack scale and Amazon ~99%-pricing-estimate are company/agency-reported; cite the mechanism as proven, the magnitudes as directional. All examples are "direction of travel," not SA-local proof.
