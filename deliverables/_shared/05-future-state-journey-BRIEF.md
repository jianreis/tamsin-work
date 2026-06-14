# BUILD BRIEF — Deliverable #05: Future-State Scripting Journey (the marquee deliverable)

> Orchestrator's spec for the **first key deliverable**: an **interactive HTML
> future-state customer-journey/blueprint for a complex use case**, in the Bigly
> **board treatment**. Build agent: read this in full, then the vault pages in §9,
> then build `deliverables/05-tobe-future-state-journey.html`. Orchestrator
> reviews + runs the QA gate. Date stamp: 2026-06-14.

---

## 0. Transcript-confirmed framing (Jian × Tamsin voice note — AUTHORITATIVE; overrides anything below where they conflict)
Source: [[src-vn-cape-point-11]].
- **What it IS:** the **experience definition** — a future-state customer **journey map** in the board treatment, **indicative, not prescriptive**. It is explicitly **NOT a service blueprint** (that is the *next* step). The job is: *"let's all agree on the experience we want to create,"* then blueprint it later. So the **surface is the customer experience**; the systems depth is a lighter **Components / Capabilities** layer ("the capabilities that need to be in place"), **not** full service-blueprint lanes.
- **Per-moment anatomy — match Tamsin's board exactly:** **Moment · (Patient) Need · Activities · Previous Pain Points · Components/Capabilities.** Keep the emotion read, pillar tags and dual-economy toggle on top of that.
- **Horizon & ambition:** an **aspirational ~5-year** vision — *"What is the experience we want to build for the next five years?"* If the org buys in, **technology is led by this** to deliver.
- **Tech constraint: NONE.** *"In no way constrained by the existing technology landscape"* / *"no restrictions."* Design the ideal. **Boundary:** ambitious but **credible, not absurd** — the explicit reductio was *"UFOs deliver my meds"*; **drones are borderline/contested** — don't lean on them, or mark clearly speculative 🔮. Legacy-system replacement cost is acknowledged but **deliberately ignored** for this piece.
- **Already signed-off capabilities — show as real/grounded:** **OCR** script capture; **automated pickers (ROWA)**. (These plus the rest of the roadmap in §5 are the "Components/Capabilities" layer.)
- **Hero "manage my medications" moment:** a *"really beautiful end-to-end"* view — a clear breakdown of **every household member's medication** with a **pill visual** (inline SVG only, no external images), plus tracking and "using my medication." Make this a showpiece moment.
- **Channel-agnostic base:** this is the consistent **base** that later gets tweaked per channel (WhatsApp / app / in-store / USSD). Design it to read as that base (Pillar U1, channel ladder).

## 1. The ask (from Jian/Tamsin, verbatim intent)
A **future-state journey for a complex use case**. Constraints:
- **Not bounded by Dis-Chem's current technology** — design the ideal; *then* show it is grounded by weaving in the **already-roadmapped** tech (esp. the **ROWA** automated picker robot) so it reads as considered, not sci-fi.
- **Must touch the strategic pillars already socialised in Bigly & Dis-Chem** — the canonical **S1–S5** (strategic) and **U1–U7** (UX) in `deliverables/_shared/pillars.md`. Make recurrence visible (pillar tags + filter).
- **Must overtly reference existing pain points** — the real customer pains from the Jan-2025 complaints, the social-sentiment "Patient Trust Journey", and the customer interviews. Quote them. The future-state must visibly *answer* today's pain.
- **Super low-friction, sexy, compelling for customers.** This is a customer-facing vision piece, not an ops doc. Calm, confident, emotionally resonant. The ops/tech depth lives behind a "line of visibility" the reader can open, not on the surface.
- **Use the existing customer segmentation and all existing research.** Anchor on the vault's personas; cite the vault throughout.

## 2. The complex use case (protagonist & scenario)
**"The household medicine manager — the self-running repeat."** One person who is
simultaneously a **patient and a caregiver**: she manages **her own multimorbid
chronic medication, her elderly mother's chronic medication, and her young child's
occasional acute needs** — across one account. This is genuinely *complex* because
it exercises the whole spine, multiple members/profiles, proxy/consent, funding
edge-cases, an acute curveball mid-loop, and graceful failure — and it is exactly
the **dominant complaint cluster** (chronic re-order / repeat-script management).

It also matches the indicative **board exemplar** ("Repeat Medication Service" —
Lisa, who *"adds my mother's medication to my repeat order"* and *"adds a
dependent"*). Honour that framing.

**Dual-economy is mandatory (Pillar S1).** A segmented toggle switches the SAME
journey between:
- **Insured** — anchor on `design-kit/personas/insured-chronic-multimorbid` (Nomvula), extended with the household-manager/caregiver dimension from `design-kit/personas/caregiver-proxy-collector`.
- **Cash / uninsured** — choose the best-fit existing persona (likely `design-kit/personas/low-data-whatsapp-first-peri-urban` or `public-sector-bridging-to-retail`); the cash majority must never feel like a degraded afterthought. Show the funding/payment/fulfilment deltas honestly (cash price legible up front, CCMDD/locker options, no scheme to lean on).

Keep ONE protagonist name per economy; render both from existing personas (do not invent new segmentation).

## 3. The journey — moments (board voice) mapped to the spine
First-person **moment** titles (board treatment), each carrying a `spineStage`
tag. Suggested set (refine, keep ~7–9, keep it low-friction and human):

| # | Moment (first-person) | Spine stage(s) | The pain it answers | Hero tech woven in |
|---|---|---|---|---|
| 1 | "My repeat is due — and I barely have to think about it" | REFILL/RENEW → SUBMIT (predict & one-tap) | chronic re-order dead-ends ("App is dysfunctional"; "pulling my hair") | BRIX auto-dispense of eligible repeats; refill prediction; WhatsApp |
| 2 | "I handle Mum's and my little one's meds in the same place" | SUBMIT (multi-member/proxy) | re-key "type essays… info is on the system"; "profile not found"; family admin at counter | one household profile; AI capture/standardise/route; proxy consent (POPIA) |
| 3 | "I know the cost and the cover before I commit" | FUND/CLAIM + PAY (pre-adjudication) | co-pay surprise; "verify the co-payment"; "pricing differs dramatically between stores" | real-time claim switching; SEP + dispensing-fee legibility; cash price up front |
| 4 | "A named pharmacist has my back" | VALIDATE / CLINICAL-CHECK | "the nurse doesn't know what to do"; rudeness; safety distrust | pharmacist single sign-off; AI as assistive, human-gated; Virtual Manager |
| 5 | "It's picked, checked and packed — and I can watch it happen" | DISPENSE | "blood pressure tablets were missing"; opaque status; cold-chain anxiety | **ROWA picker robot**; scan-verified accuracy check; adherence dose-pack; live status |
| 6 | "It arrives when they said — and I'm never left guessing" | COLLECT / DELIVER | "out for delivery. I did not receive it."; unreachable dispensary; distrust of narrow windows | automated retrieval + QR handover; VC consolidation → PICCUP delivery + POD; realistic windows; locker/click-collect |
| 7 | "Taking it right is the easy part" | ADHERE | adherence after dispensing; comms overload/harassment (no opt-out) | adherence pack by date/time; hybrid digital+print instructions; reminders tied to payday/routine; consented, opt-out-able nudges |
| 8 | "When life throws a curveball, the system bends — it doesn't break" | graceful-failure (parallel) + after-hours/acute convergence | stock-out, claim reject, failed delivery, an after-hours acute episode for the child | auto-offer funded generic; plain-language reject + 2-tap fix; reroute to locker; after-hours pharmacist/teleconsult front door |
| 9 | "Renewing is a tap, not a trek" | REFILL/RENEW (script expiry) | hard break at script expiry → silent drop-off; "nurse doesn't know" | in-WhatsApp teleconsult → e-script token back into the loop |

Map every moment to a **Patient Trust Journey** emotional read (Calm → Trigger →
Acceleration → Agitation → Defection from `dischem-social-sentiment-trust-journey`);
the future-state's job is to keep the customer in **Calm/Confident** and to convert
would-be Defection into loyalty. Use the **Trust > Convenience > Speed** philosophy
from the board (predictability beats speed — SOTF finding).

## 4. Pain points to overtly reference (quote them; cite the slug)
From **`wiki/dischem/pharmacy-complaints-pain-points`** / `src-dc-complaints-jan2025`:
- "Dis-Chem App is dysfunctional." · "Repeatedly sent to the previous menu when trying to reorder."
- "I have been pulling at my hair trying to order my medication via the App or even using the WhatsApp service."
- "I received a notification that it has been processed on my medical aid and was out for delivery. I did not receive it."
- "All he needed to do was contact Dis-Chem and verify the co-payment."
- "On opening the packet a few days later, I discovered my blood pressure tablets were missing."
- "I've been trying to renew my prescription and the nurse doesn't know what to do."
- "Rudeness of pharmacy manager and pharmacist."
- "I am horrified that the pricing of scheduled medication differs so dramatically from one Dis-Chem pharmacy to another."

From **`wiki/dischem/dischem-social-sentiment-trust-journey`** / `src-dc-social-media-research-2025`:
- the 5-stage trust arc; re-key "type essays… info is on the system"; unreachable dispensary ("called 4 dispensaries, nobody picking up"); cold-chain anxiety; defection to a local pharmacy (paying ~R460 more for relationship care); 65% negative pharmacy sentiment.

From **`wiki/consumer-context/voice-of-customer-script-journey`** / `src-dc-script-journey-interviews-2025`:
- no confirmation a script was received → double trips; the WhatsApp/email **and** hand-over-paper double-step; month-end ~25–30 min waits; "profile not found"; co-pays feel fair in-store ("R17 vs R300") — *a strength to protect*; the "pay at the dispensary counter" ask; counselling is a trusted strength.

From **`wiki/dischem/store-of-the-future-customer-voice`** / `src-dc-store-future-interviews-2026`:
- predictability > speed; ticketing (11/12); missed-turn grace; phone notification of turn; QR/kiosk check-in with a human option; realistic (broader) delivery windows; **managed delivery with control points (confirm/pause/adjust)**; hybrid digital+print instructions; pre-packed dosing for complex regimens; channel-choice support. Governing line: *"Confidence comes from clarity and fallback, not from automation alone."*

Render today's pain as an **explicit per-moment "Today" baseline** (the `asIsBaseline`), beneath the future vision, so the gap is undeniable. Each pain element shows its source slug on hover/as text.

## 5. Technology to integrate (grounding — cite `src-dc-omnichannel-scripting-roadmap` / `wiki/digital-transformation/dischem-scripting-tech-roadmap`)
Weave these **named, roadmapped** capabilities into the backstage of the relevant
moments (they prove the vision is buildable). **ROWA is the hero proof-point for S5.**
- SUBMIT→VALIDATE: **AI captures/standardises/routes** the order; single **virtual queue** + **workflow manager** prioritises; **PBQ** human fallback.
- DISPENSE: **BRIX auto-dispense** of eligible repeats; **ROWA** automated pick; pharmacist **single sign-off** (human-in-loop); assistant packs.
- COLLECT: **automated retrieval** (arm/conveyor/pneumatic tubes) → counter; **QR-scan** self-identify; counsel + **pay (BRIX POS)**.
- DELIVER: **VC** consolidation → driver → **PICCUP** with **proof-of-delivery**.
- BACKSTAGE SPINE: **Dashboard (E2E workflow manager)** + **Virtual Manager (SLA oversight)** across every stage.
Flag anything legally unsettled (e.g. "auto-dispense without human intervention", fully-paperless AES e-script, locker dispensing of scheduled meds, remote supervision/central-fill, after-hours live authorisation) with **🔮 requires-reform**, consistent with the vault.

## 6. Pillars to land (cite `deliverables/_shared/pillars.md`; use exact ids)
Strategic: **S1** both-economies · **S2** health-front-door · **S3** service-not-price · **S4** chronic-flywheel · **S5** pharmacist-top-of-licence/automate-toil.
UX: **U1** WhatsApp-first/data-frugal · **U2** never-leave-guessing/status · **U3** money-legible-early · **U4** graceful-failure/human-fallback · **U5** dignity/privacy/language · **U6** reduce-the-journey · **U7** adherence-as-design.
Every moment tags ≥1 S and ≥1 U; the pillar legend filter highlights recurrence. The board's customer/dispenser principles (e.g. "Repeats should just, repeat", "The counter is for care, not admin") are **expressions of these pillars** — map them in, do **not** fork new pillar ids.

## 7. Board treatment (style — read `design-kit/templates/future-state-blueprint-board-style.md`)
**Hi-fi, branded, editorial** — diverge from the lo-fi DESIGN-SPEC aesthetic on
purpose (the user wants the board look), but keep the DESIGN-SPEC **hard technical
rules** (see §8). Treatment:
- **Dis-Chem green** brand band on top (`#1a9b4a`), lime "+" accent, **mint** moment-header band (`#bfe3cf`); near-black persona rail; purple/grey for the principles motif.
- **Sticky left persona rail**: avatar (inline-SVG/CSS placeholder, no raster), name (big), bio, **⚡ Current Friction** list, **Patient Need**, a bordered **"How might we…"** box.
- **Horizontal moment rail** (clickable, scrollable): italic first-person moment titles; click expands a moment.
- Expanded moment = **Story** (first-person narrative activity card[s], calm present-tense voice) + **Behind the line** (the blueprint lanes: customer actions · frontstage · ⎯line of visibility⎯ · backstage · support/systems · partners · regulatory · pains 🔴 · opportunities 💡 · metrics · tech-callout chips).
- Calm, confident, "a magazine spread of a service." Generous whitespace. Use the **Trust>Convenience>Speed** pyramid motif and the Patient-Trust emotion curve.

## 8. Technical contract (non-negotiable — from DESIGN-SPEC §1; QA gate §5)
- **Single self-contained file.** ALL CSS in one `<style>`, ALL JS in one vanilla `<script>`, ALL icons inline SVG/emoji. **No external requests** (no CDNs/fonts/images/analytics). Must open offline by double-click. (qa.py greps for loaded resources — must be zero.)
- **Vanilla JS, no build step**; defensive render (never throw on a missing optional field). `node --check` must pass.
- **Cite the vault** as visible text and/or hover tooltips: every pain/opportunity/tech claim carries a real vault slug or `wiki/...` path that resolves to a real file (qa.py checks `cite|ref|personaRef` slugs).
- **Honesty flags** exactly as the vault: ⭐ moment of truth · 🔴 pain · 💡 opportunity · ⚠️ gap/unverified · 🔮 requires-reform.
- Header ribbon: **"⚠ Concept for review — not an official Dis-Chem artefact"** + "generated 2026-06-14 from the Bigly ground-truth vault."
- Accessibility: semantic HTML, real `<button>`s with `aria-expanded`/`aria-pressed`, keyboard-operable, contrast ≥ AA, respect `prefers-reduced-motion`. Include a `@media print` block that expands everything.
- Responsive; optimised for desktop review; degrade gracefully on mobile.

## 9. Read these before building (ground + cite)
- `design-kit/templates/future-state-blueprint-board-style.md` (the treatment + schema)
- `deliverables/_shared/DESIGN-SPEC.md` + `deliverables/_shared/qa.py` (contract + gate) + `deliverables/_shared/pillars.md` (pillar ids/oneLiners)
- `deliverables/04-tobe-aspirational.html` (reuse interactive patterns: accordion, dual-economy toggle, emotion SVG, hover-cite, pillar filter — then re-skin to the board)
- `design-kit/journeys/to-be-blueprint-chronic-insured.md` (the substance to evolve) + `design-kit/journeys/to-be-journey-cash-acute.md` (cash treatment)
- `wiki/dischem/pharmacy-complaints-pain-points.md` · `wiki/dischem/dischem-social-sentiment-trust-journey.md` · `wiki/consumer-context/voice-of-customer-script-journey.md` · `wiki/dischem/store-of-the-future-customer-voice.md`
- `wiki/digital-transformation/dischem-scripting-tech-roadmap.md` (ROWA + the 24 capabilities)
- `wiki/dispensing-practice/after-hours-emergency-acute-access.md` (the curveball convergence)
- `design-kit/templates/future-state-principles.md` · `design-kit/personas/_personas-index.md` + the chosen personas
- For regulatory non-negotiables to honour: `wiki/sa-regulatory/_index.md` (pharmacist oversight, scheduling, SEP, POPIA)

## 10. DATA schema (single embedded source of truth; engine renders from it)
Extend the DESIGN-SPEC §4 schema with board fields:
```js
const DATA = {
  meta:{ title:"Script Re-imagined — the household repeat", subtitle:"…", state:"to-be", variant:"aspirational", updated:"2026-06-14", useCase:"…" },
  pillars:[ {id, name, type, oneLiner} ],                 // from pillars.md, verbatim ids
  philosophy:{ pyramid:["Trust","Convenience","Speed"], line:"Predictability beats speed." },
  economies:[
    { id:"insured", label:"Insured — Nomvula", personaRef:"design-kit/personas/insured-chronic-multimorbid",
      persona:{ name, bio, currentFriction:[{label,detail,cite}], patientNeed, hmw } },
    { id:"cash", label:"Cash / uninsured — <name>", personaRef:"design-kit/personas/<chosen>", persona:{…} }
  ],
  moments:[ {
    id, title,                       // italic first-person ("My repeat is due…")
    spineStage,                      // PRESCRIBE…REFILL/RENEW
    pillars:["S4","U6"],
    byEconomy:{
      insured:{ emotion:1-5, trustStage:"calm|trigger|acceleration|agitation|defection→loyalty",
                story:"first-person narrative", customerActions:[…], frontstage:[…],
                backstage:[…], support:[…], partners:[…], regulatory:[…],
                tech:[{name:"ROWA", what:"…", cite:"src-dc-omnichannel-scripting-roadmap", reform:false}],
                pains:[{text, quote, cite}], opportunities:[{text, pillars:[…], cite}],
                metrics:[…], flags:["momentOfTruth"], asIsBaseline:"what happens today (the pain)" },
      cash:{ …same shape… }
    }
  } ]
}
```
Every `cite`/`ref`/`personaRef` must resolve (run qa.py). Emotion/trust scores defensible from the vault.

## 11. Interactivity (required)
1. Sticky **persona rail**, re-renders on economy toggle.
2. **Dual-economy** segmented toggle (Insured ↔ Cash) — re-renders moments, lanes, emotion curve.
3. Clickable **moment rail** (accordion; expand-all/collapse-all).
4. Per moment: **Story** tab + **Behind-the-line** blueprint tab (lane show/hide).
5. **Pain→Today overlay** per moment (`asIsBaseline` with the quoted pain).
6. **Emotion / Patient-Trust curve** (inline SVG) across moments; ⭐ moments of truth.
7. **Pillar legend + filter** (click a pillar → highlight every moment/opportunity expressing it).
8. **Tech-callout chips** (ROWA etc.); dashed border = speculative; 🔮 where reform-dependent.
9. **Hover/focus cite** tooltips naming the vault slug.

## 12. Acceptance criteria (orchestrator will check)
- qa.py: ✅ no external resources · ✅ `node --check` clean · ✅ all slugs resolve · pillars are S/U ids.
- Both economies present for every moment; ≥1 pillar S and ≥1 U per moment; pillar filter works.
- Every moment shows an overt **Today pain (quoted + cited)** and the future answer.
- ROWA + ≥6 other named roadmap capabilities integrated and cited.
- Reads as **low-friction, confident, compelling** — customer-first surface, ops depth on demand.
- All 🔮 reform-dependencies flagged; non-negotiables (pharmacist check, scheduling, POPIA, SEP) honoured and visible.

## 13. Output
- `deliverables/05-tobe-future-state-journey.html` (the deliverable).
- Report back: file path, a short self-QA (the qa.py result + any gaps), the moment list with pillar/cite coverage, and any open decisions for the orchestrator.
- Do NOT edit shared files (index.html, BUILD-STATUS, DESIGN-SPEC, pillars.md, this brief) — the orchestrator wires those.
