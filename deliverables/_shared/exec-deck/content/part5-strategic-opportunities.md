# Part 5 — Strategic Opportunities (the six pillars)

> The "why build this, and what business it is" layer. Six strategic pillars (S1–S6).
> S1–S5 are compact; **S6 is the hero** (net-new synthesis) and gets a diagram + a deep pillar slide.

## SLIDE: section-divider
id: part5-divider
num: "5"
title: Strategic Opportunities
subtitle: Six pillars for the store of the future — and one that reframes the whole game
notes: Green full-bleed opener. Pillar ids are canonical (pillars.md); never renumber.

## SLIDE: pillar-grid
id: strategic-pillars-overview
title: Six strategic bets — five sharpen the model, one changes the game
cards:
  - {id: S1, name: "Serve both economies on one spine", oneLiner: "Insured (~16%) and cash (~84%) are different journeys on one service spine; the cash majority is never a degraded afterthought."}
  - {id: S2, name: "Pharmacy as the health front door", oneLiner: "Scripting is the entry to an ongoing care relationship, not a one-off transaction; the store + clinic estate is a strategic asset."}
  - {id: S3, name: "Compete on service, not price", oneLiner: "SEP + capped dispensing fee fix the price; the only durable differentiator is the experience around the drug."}
  - {id: S4, name: "Chronic-medicine flywheel = retention engine", oneLiner: "Proactive managed chronic repeats are the recurring relationship that compounds loyalty and adherence."}
  - {id: S5, name: "Pharmacist at top-of-licence; automate the toil", oneLiner: "Automation, central-fill and telepharmacy absorb mechanics so pharmacists do the clinical, trust-building work."}
  - {id: S6, name: "From prescription fulfilment to treatment orchestration", oneLiner: "Absorb the coordination patients do today — across prescriber, pharmacy, scheme, stock and delivery — into one system."}
visual: dia:strategic-pillars-grid
notes: S6 is the synthesis the other five point at; flag it visually as the hero on the grid.

## SLIDE: pillar
id: pillar-s1-two-economies
kicker: S1 · Serve both economies on one spine
title: The cash majority is the market, not the edge case — design for two wallets at once
so_what: A structural ~16/~84 insured-to-cash split means a scheme-first design quietly excludes most of the country; one spine must serve both, with the cash path a first-class path.
what: One service spine, two journeys — an insured/scheme flow (claim, co-pay, courier) and a cash/out-of-pocket flow — sharing identity, status and fulfilment.
why: SA is the most unequal major economy; ~84% are uninsured and pay cash at the margin, where a removed trip, queue or surprise charge is real money, not just convenience.
evidence: [wiki/consumer-context/two-economy-affordability, wiki/medical-schemes/cash-uninsured-pathway]
example: SEP + capped dispensing fee make the cash price computable up front — show SEP + fee line-by-line, offer the generic, support cash / instant-EFT / wallet, never card-only.
visual: dia:two-economies-one-spine
flags: []
notes: Date the insured share (~16%, base/year varies 15.8–17.4%). Keep compact — deep dive is S6.

## SLIDE: pillar
id: pillar-s4-chronic-flywheel
kicker: S4 · Chronic-medicine flywheel
title: Own the proactive refill loop the courier pharmacies are winning
so_what: Chronic repeats are the predictable, recurring, high-margin relationship that compounds loyalty — whoever runs the proactive loop owns the patient, and today that is the couriers.
what: Register once → auto-dispense on schedule → proactively prompt the refill → deliver or collect → repeat; each turn lowers patient effort and raises stickiness.
why: It is the proven SA model (Pharmacy Direct >1.2m scripts/month; Clicks Direct, Medipost, Dis-Chem Direct) and CCMDD at public scale (>4.9m enrolled) — a managed loop the patient barely touches.
evidence: [wiki/concepts/chronic-medicine-flywheel, wiki/medical-schemes/courier-chronic-pharmacy-models, src-gbl-medadvisor]
example: Australia's MedAdvisor is the polished benchmark — a digital script wallet with "tap to refill", reminders and carer mode over the e-script rail (~3.7–4m patients, >95% of AU pharmacies).
flags: []
notes: Wire the flywheel into scheme/DSP registration, not bolted on. Treat a lapsed registration or expired repeat as a P1 incident.

## SLIDE: pillar
id: pillar-s3-service-not-price
kicker: S3 · Compete on service, not price
title: You cannot win on price — so the experience is the only durable battleground
so_what: Because SEP + a capped dispensing fee fix the medicine price by law, the only place to compete is the service wrapped around the drug — and Dis-Chem's own data says that is exactly where it is losing.
what: Discounting the medicine is unlawful; competition is on convenience, reliability, transparency and trust — the experience, not the headline price.
why: Dis-Chem's Jan-2025 complaints (n=360) are overwhelmingly service, digital and fulfilment failures — broken re-orders, "processed but never arrived", dispensing errors — not price.
evidence: [wiki/sa-regulatory/sep-dispensing-fee, wiki/dischem/pharmacy-complaints-pain-points, src-dc-complaints-jan2025]
example: The striking "scheduled meds priced differently between stores" complaint is almost certainly a transparency failure under SEP, not a real price gap — i.e. a service fix, not a pricing one.
flags: []
notes: SEP is regulated end-to-end (§22G Medicines Act); use itemised pricing as a trust feature, not a discount lever.

## SLIDE: pillar
id: pillar-s2-front-door
kicker: S2 · Pharmacy as the health front door
title: Treat scripting as the front door to a care relationship, not a one-off transaction
so_what: Consumers already want primary care from the pharmacy; designing scripting as the entry to an ongoing relationship turns the dense store + clinic estate from a cost centre into a strategic asset.
what: Scripting is the entry point to screening, advice, chronic management and telehealth — an ongoing care relationship, with the physical estate as an integrated health touchpoint.
why: The strategy firms converge on it — McKinsey (~40% want broader clinical services via pharmacy), Bain (≥65% already use pharmacy as a primary point of care; ~74% of Gen Z), Oliver Wyman ("pharmacy services as a strategic asset, not a downstream function").
evidence: [wiki/ux-service-design/consultancy-pharmacy-research]
example: England's Pharmacy First lets pharmacists assess and supply for 7 conditions without a GP visit — the front-door model under protocol.
flags: []
notes: Frame global firms as "direction of travel," not local proof — no SA-local consultancy POV exists.

## SLIDE: pillar
id: pillar-s5-top-of-licence
kicker: S5 · Pharmacist at top-of-licence; automate the toil
title: Automate the mechanics so pharmacists do the work only they can do
so_what: Automation, central-fill and telepharmacy can absorb the dispensing mechanics, freeing pharmacists for the counselling and clinical work that builds trust and powers the front door (S2).
what: Use robots, central-fill and remote pharmacist verification to take the counting/checking toil off the counter; pharmacists move to counselling, chronic management and clinical services.
why: The consultancy and design canon agree (Deloitte, McKinsey, EY); EY cites ~70% of Danish pharmacies using dispensing robots, and telepharmacy studies show no drop in medication-use quality.
evidence: [wiki/digital-transformation/telepharmacy-and-omnichannel, wiki/ux-service-design/consultancy-pharmacy-research]
example: Accenture/CCS reported an AI model lifting adherence in targeted high-risk patients by up to ~50% — promising, but vendor-reported.
flags: [unverified]
notes: ⚠️ the ~50% adherence lift and ~70% Danish-robot figures are vendor/extract-only. Remote verification + unattended-locker hand-over likely needs SAPC clarity (🔮 see S6 reform list).

## SLIDE: diagram-hero
id: pillar-s6-diagram
kicker: S6 · From fulfilment to orchestration — THE HERO
title: Today the patient is the integration layer between five silos that don't talk
so_what: The patient personally carries the coordination tax across prescriber, pharmacy, scheme, stock and delivery — and the strategic move is to absorb that complexity into the system instead.
visual: dia:fragmentation-vs-orchestration
caption: "Left — fragmentation: prescriber (diagnose/prescribe; at script expiry the journey breaks back out to the prescriber with no orchestration) → pharmacy (opt-in reorder loop) → scheme (PMB registration + claim adjudication) → stock → delivery, with no single owner of a stuck repeat. The patient absorbs the delays, uncertainty, repeat visits, stock surprises, funding shocks and admin. Right — orchestration: one system owns the hand-offs end-to-end; the patient sees one continuous journey."
notes: This is the deck's pivot. Builder: render the left as five disconnected silos with the patient shuttling between them; right as one spine with a single owner. Quotes "breaks back out to the prescriber with no orchestration" and "no single owner of a stuck repeat" are verbatim from the vault.

## SLIDE: pillar
id: pillar-s6-orchestration
kicker: S6 · From prescription fulfilment to treatment orchestration
title: "How do we eliminate the need for patients to coordinate their own medication fulfilment?"
so_what: Today the patient is forced to coordinate across prescriber, pharmacy, scheme, stock and delivery; the opportunity is to absorb that coordination into one system — shifting from dispensing a script to orchestrating the whole treatment journey.
what: Move from prescription FULFILMENT (hand over a script, dispense a box) to treatment ORCHESTRATION (one system owns the end-to-end journey, the hand-offs, and the recovery when something breaks).
why: The pain is structural, not incidental — the journey "breaks back out to the prescriber with no orchestration" at script expiry, and there is "no single owner of a stuck repeat" across app / WhatsApp / store / call-centre; the patient pays the coordination tax in delays, uncertainty, repeat visits, stock issues, funding surprises and admin.
body:
  - Building blocks already in the vault — omnichannel fulfilment (one order, one profile, store-as-node).
  - Telepharmacy's unified patient profile — one identity, history, eligibility and consent across channels.
  - Build an internal EMPI + FHIR-shaped record now; do not assume a national shared record arrives.
  - The chronic flywheel (S4) is orchestration for the repeat case — extend the pattern to the whole journey.
  - Benchmarks hint at it — India/China teleconsult→Rx→deliver loop, Australia's Active-Script-List, China's internet hospital.
evidence: [wiki/dischem/dischem-rx-current-journey, wiki/dischem/pharmacy-complaints-pain-points, wiki/concepts/omnichannel-fulfilment, wiki/digital-transformation/interoperability-identity-records, wiki/concepts/chronic-medicine-flywheel]
example: No one has built end-to-end orchestration for a regulated, multi-funder, low-bandwidth market — it is a direction requiring new capability, with reform-gated steps (pharmacist-initiated renewal, scheme claim-continuity automation, locker dispensing of scheduled meds).
flags: [reform]
notes: HERO slide. Use the EXACT S6 oneLiner from SPEC §6 as so_what (done). The title is the core question, on-slide. 🔮 reform items are honest gaps — flag, don't promise. EMPI/FHIR stance is from interoperability-identity-records (build internal, don't depend on NHI).
