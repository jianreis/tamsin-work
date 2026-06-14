# BUILD BRIEF — Deliverable #06: Interactive Click-Through Journey **Animation**

> Orchestrator's spec + shared contract for a NEW deliverable: a **cinematic,
> interactive, click-through animation** that brings the existing future-state
> journey (`deliverables/05-tobe-future-state-journey.html`) to life as a
> watch / replay / explore experience. Multiple agents build against THIS file
> as the single source of truth for the data schema, the mockup payload
> contract, the visual tokens, and the QA gate. Date stamp: 2026-06-14.

---

## 0. What we are building (and why it is different from #05)

`#05` is a **board / journey-map document** you read and expand. `#06` is a
**motion piece**: the SAME 9-moment future-state journey, re-presented as a
**self-playing, interactive animation**. Nothing new is invented about the
journey — we re-express the *existing, great* content in a beautiful visual,
animated format that anyone can **watch, replay and explore.**

The user's words: *"a simple animation that illustrates the steps the user
takes (with mockups of the various steps) and the Dis-Chem frontstage and
backstage actions… each key moment is its own animation that builds, and
pauses at the end to allow the user to expand and explore the various
components… delivered as a standalone HTML with each moment a separate visual
animation."* Goal: **compelling, useful, beautiful** — present existing info in
a new visual format. **The "medicine cabinet" idea is the strongest concept in
the work — make it the showpiece.**

**Output file:** `deliverables/06-tobe-journey-animation.html` (single,
self-contained — see §8 contract). Do NOT edit `index.html`, `05-*.html`,
`DESIGN-SPEC.md`, `pillars.md`, `qa.py`, or this brief — the orchestrator wires
those.

---

## 1. The core interaction model (the heart of the deliverable)

A full-bleed **cinematic stage** shows ONE scene (= one journey moment) at a
time. Each scene runs a **three-phase loop**:

1. **BUILD (animate-in):** the scene assembles itself in timed beats — a
   narration caption fades/types in → the **customer phone mockup** animates →
   **frontstage** action chips light up in sequence → a **"line of visibility"**
   sweep crosses → **backstage** capability chips light up. A thin progress bar
   shows the build advancing.
2. **SETTLE / PAUSE:** when the build finishes, the scene **holds** in a fully
   assembled state and surfaces an **"Explore this moment ▾"** affordance. It
   does **not** auto-advance unless autoplay is on.
3. **EXPLORE:** the viewer expands panels in place — **Today (the quoted, cited
   pain)**, **Opportunities**, **Capabilities/Tech** (ROWA etc.), **Pillars**,
   **Metrics**, and the full **frontstage / backstage** detail. Clicking any
   mockup element or chip reveals its detail + vault citation.

**This loop IS the product.** "Each key moment is its own animation that builds
and pauses to let the user explore."

### Transport / controls (all required, all keyboard-accessible)
- **◀ Prev · ▶/⏸ Play-Pause · Next ▶** (Play replays the current scene's build;
  Pause freezes mid-build).
- **↺ Replay scene.**
- **Autoplay** toggle: ON = after a scene settles, wait ~2.5 s then auto-advance;
  OFF (default) = pause at each scene for exploration.
- **Scene rail / chapter strip:** 9 labelled chapters (italic first-person
  titles), current one highlighted; click to jump. Shows ⭐ on moment-of-truth
  scenes.
- **Overall progress** (scene n / 9) + **per-scene build progress**.
- **Keyboard:** ← / → prev/next, **Space** play-pause, **R** replay, number keys
  1–9 jump. Real `<button>`s, `aria-pressed`/`aria-expanded`, focus-visible.
- **`prefers-reduced-motion`:** skip the staged build entirely — render each
  scene fully assembled instantly; controls still navigate. Also a manual
  "Reduce motion / Skip animation" toggle.
- `@media print`: expand every scene + all explore panels (static document).

### Dual economy
A segmented **Insured (Nomvula) ↔ Cash (Sipho)** toggle re-renders the scene
(mockup content, cabinet, funding, persona chip, emotion). Insured is the
default. The cash household must never read as a degraded afterthought.

---

## 2. The 9 scenes (faithful to #05 — do not re-script the journey)

Pull substance verbatim-in-spirit from `05-tobe-future-state-journey.html`'s
embedded `DATA` + `household`, and the journey notes
`design-kit/journeys/to-be-blueprint-chronic-insured.md` /
`to-be-journey-cash-acute.md`. Each scene carries a **mockup type**:

| # | id | Moment (first-person title) | Mockup type | Notes |
|---|----|------------------------------|-------------|-------|
| 1 | m1 | "My repeat is due — and I barely have to think about it" | `whatsappNudge` | proactive due-soon nudge, one-tap confirm; WhatsApp/USSD (cash) |
| 2 | m2 | "I handle Mum's and my little one's meds in the same place" | `cabinet` | **HERO — the medicine cabinet.** Household: Me / Gogo / Lethabo (insured), Sipho / mother / child (cash) |
| 3 | m3 | "I know the cost and the cover before I commit" | `costCover` | pre-adjudication → R0 / co-pay explainer (insured); itemised cash price (cash) |
| 4 | m4 | "A named pharmacist has my back" | `pharmacist` | named human sign-off; AI assistive, human-gated 🔮 |
| 5 | m5 | "It's picked, checked and packed — and I can watch it happen" | `dispenseRowa` | **ROWA** robot pick → scan-verified ✓ → adherence dose-pack |
| 6 | m6 | "It arrives when they said — and I'm never left guessing" | `deliveryTrack` | live tracking + POD; locker / click-collect option |
| 7 | m7 | "Taking it right is the easy part" | `adherencePack` | dose-pack by date/time; consented, opt-out-able reminders |
| 8 | m8 | "When life throws a curveball, the system bends — it doesn't break" | `curveball` | graceful failure: stock-out→generic, claim-reject→2-tap fix, after-hours acute teleconsult |
| 9 | m9 | "Renewing is a tap, not a trek" | `renewal` | in-WhatsApp teleconsult → new e-script **token** drops back into the loop (closes the flywheel → links to m1) |

Map each to the **Patient-Trust emotion read** (Calm→Trigger→Acceleration→
Agitation→Defection→Loyalty) already in #05; the future-state keeps the customer
**Calm/Confident**. Keep the **Trust > Convenience > Speed** philosophy.

---

## 3. MOCKUP PAYLOAD CONTRACT (the critical coordination artifact)

Every scene's customer surface renders inside a **phone device frame**. The
data agent fills `mock` payloads to these shapes; the assets agent writes
renderers to these shapes. Renderers MUST be defensive (never throw on a
missing optional field). All shapes are illustrative UI content (no citations
needed on the mock content itself — citations live on pains/opps/tech).

```js
// 1 whatsappNudge
{ contact:"Dis-Chem Pharmacy", verified:true,
  messages:[ {from:"them"|"me", text, time, quick?:["✅ Yes","✏️ Change","⏰ Snooze"]} ],
  typingBeforeIndex?:1,           // show "typing…" before this message
  footnote?:"Falls back to USSD on zero data" }

// 2 cabinet  → renderer reads household[econ] directly
{ useHousehold:true }            // members[].medicines[] = {name,strength,shape:"tablet|caplet|capsule|bottle",tone,tone2,forText,dose,supply,status:"ok|due|way",fund:{kind:"covered|copay|cash|free",text,sub},note?,proxy?}

// 3 costCover
{ heading, items:[{name, line, amount}], total:{label, amount},
  verdict:{tone:"good|warn", text:"R0 to pay ✓" }, explain?, alt?:{text, saving},
  cash?:bool }                    // cash → no scheme, itemised SEP+fee, generic option

// 4 pharmacist
{ name:"Naledi", title:"Your pharmacist", reg?:"SAPC-registered",
  statusSteps:[{label:"Order received", state:"done"},{label:"Pharmacist reviewing", state:"active"},{label:"Checked by Naledi ✓", state:"todo"}],
  checks:["Whole-regimen interaction check","Warfarin dose vs latest INR","Child's antibiotic vs household meds"],
  chatPrompt?:"Ask Naledi a question", aiNote?:"AI flags interactions; a pharmacist decides 🔮" }

// 5 dispenseRowa
{ steps:[{label:"BRIX queues the eligible repeat", icon}, {label:"ROWA robot picks each pack", icon}, {label:"Independent scan-verify ✓", icon}, {label:"Sealed into a dated dose-pack", icon}],
  robot:true, scanVerify:true, packPhoto:true, statusLine?:"You can watch each step" }

// 6 deliveryTrack
{ mode:"home|locker|collect",
  steps:[{label:"Packed & sealed", state}, {label:"Out for delivery", state}, {label:"Arriving — 12 min", state}, {label:"Delivered ✓", state}],
  driver?:{name, eta}, pod?:"Signed by Nomvula", altModes?:["Locker (PUDO)","Click & collect"],
  realisticWindow?:"Thu 08:00–12:00 — a window you can plan around" }

// 7 adherencePack
{ days:[{label:"MON", slots:[{time:"AM", pills:[tone,tone,...]},{time:"PM", pills:[...]}]}, ...],
  reminder?:"Gentle nudge tied to your routine — opt out any time",
  print?:true,                    // hybrid digital + printed instructions
  forMember?:"Gogo · INR-set warfarin packed separately" }

// 8 curveball
{ scenarios:[ {problem:"Stock-out", problemIcon:"🔴", problemText, recovery:"Funded generic, pharmacist-approved", recoveryText, pillar?:["U4"]},
              {problem:"Claim rejected", ...}, {problem:"After-hours: child spikes a fever", ...} ],
  line:"Confidence comes from clarity and fallback, not automation alone." }

// 9 renewal
{ messages:[ {from, text, time} ],   // "this is your last repeat… quick check-in to renew?"
  teleconsult:{provider:"Kena", lowData:true},
  token:{label:"New e-script token issued", reform:true},   // 🔮 AES maturity
  loopBackTo:"m1", loopNote:"…and the self-running repeat begins again." }
```

---

## 4. DATA schema for `06-anim-data.js` (data agent owns this file)

A single embeddable JS object literal. Reuse #05's `meta`, `pillars`,
`economies`, and **copy `household` verbatim** (it powers the cabinet hero).
Add the `scenes[]` array.

```js
const ANIM = {
  meta:{ title:"Script Re-imagined — the journey, in motion", subtitle, state:"to-be", variant:"aspirational", updated:"2026-06-14", useCase },
  pillars:[ {id,type,name,oneLiner} ],            // verbatim from #05 / pillars.md
  philosophy:{ pyramid:["Trust","Convenience","Speed"], line:"Predictability beats speed." },
  economies:[ {id:"insured", label, personaRef, persona:{name,bio,...}}, {id:"cash", ...} ],
  household:{ insured:{frame,asOf,members:[...]}, cash:{...} },   // VERBATIM from #05
  scenes:[ {
    id:"m1", n:1, title, spineStage, mockup:"whatsappNudge",
    pillars:["S4","U6"], flags:["momentOfTruth"]?,
    byEconomy:{
      insured:{ narration:"one cinematic line", story:"first-person para",
        emotion:1-5, trustStage:"calm|…|loyalty",
        mock:{ /* §3 payload for this mockup type */ },
        frontstage:[...], backstage:[...], support:[...], partners:[...], regulatory:[...],
        tech:[{name:"ROWA", what, cite:"src-…|wiki/…", reform:false}],
        pains:[{text, quote, cite}], opportunities:[{text, pillars:[...], cite}],
        metrics:[...], asIsBaseline:"what happens today (the quoted pain)" },
      cash:{ /* same shape */ }
    }
  } ]
}
```

**Every `cite`/`ref`/`personaRef` must resolve to a real vault file** (qa.py
checks). Reuse the exact slugs already in #05 — do not invent new ones. Emotion
/ trust values defensible from #05.

---

## 5. Visual language (inherit #05 — calm, branded, cinematic)

Reuse #05's palette tokens **verbatim** so the two deliverables are siblings:
```
--brand:#1a9b4a; --brand-dark:#157a3b; --lime:#b5d334; --mint:#bfe3cf;
--mint-deep:#9bcfb0; --ink:#1d1d1d; --ink-soft:#2b2b2b; --bg:#f6f8f6;
--card:#fff; --muted:#5d6b62; --muted2:#8a958d; --line:#d8e2db;
--purple:#5b2a6b; --grey:#5a5a5a;
--pain:#c0392b; --warn:#b9770b; --good:#1a9b4a; --reform:#7c3aed;
--font: system-ui stack; --mono: SF Mono stack; --radius:12px;
```
Reuse the **pill SVG** generator and **member avatar SVG** from #05 verbatim for
the cabinet (shapes: tablet | caplet | capsule | bottle; tone/tone2 colours).
Treatment: confident, generous whitespace, "a moving magazine spread of a
service." A subtle **Dis-Chem green** brand band on top with the lime "+" and
the **"⚠ Concept for review — not an official Dis-Chem artefact · generated
2026-06-14 from the Bigly ground-truth vault"** ribbon. Animations are smooth,
ease-out, ~300–600 ms per beat; nothing frenetic. Respect reduced-motion.

---

## 6. Honesty flags & non-negotiables (keep exactly as the vault)
⭐ moment of truth · 🔴 pain · 💡 opportunity · ⚠️ gap/unverified · 🔮
requires-reform. Honour and keep visible: pharmacist clinical check (S2+)
un-skippable · scheduling rules · POPIA consent · SEP pricing shown not
discounted · licensed pharmacy is seller of record. Flag 🔮 where #05 does
(pre-adjudication API, central-fill/remote supervision, AES e-script, locker
dispensing of scheduled meds, after-hours live authorisation).

---

## 7. Component / API contract (so parallel work integrates cleanly)

- **Mount points (build agent provides these in the HTML, assets agent targets them):**
  `#stage` (scene canvas), `#phone-mount` (device frame slot), `#frontstage-lane`,
  `#backstage-lane`, `#explore-mount`, `#scene-rail`, `#transport`, `#persona-chip`.
- **Assets agent exports** (plain functions on a global `MOCKUPS` object, no
  modules): `MOCKUPS.phoneFrame(innerNode)`, and one renderer per mockup type
  named exactly: `whatsappNudge, cabinet, costCover, pharmacist, dispenseRowa,
  deliveryTrack, adherencePack, curveball, renewal` — each `(payload, ctx) =>
  HTMLElement`. `ctx = {econ, household, reduceMotion}`. Plus `MOCKUPS.pillSVG(med)`
  and `MOCKUPS.avatarSVG(kind, econ)` (ported from #05). Each renderer must add
  CSS classes that the engine can drive for the staged build (e.g. elements
  carry `data-beat="0|1|2…"`; the engine reveals beats in order). Provide a
  `meta.beats` count or expose `el.querySelectorAll('[data-beat]')`.
- **Engine (build agent) drives the beats**: reveals `[data-beat]` groups in
  ascending order on a timer; pauses; toggles `.is-building`/`.is-settled` on
  `#stage`. Frontstage/backstage chips also carry `data-beat`.
- **Helper `el(tag, attrs, children)`** — port from #05 (defensive DOM builder).
  Use `textContent`, never `innerHTML`, for any data-derived strings.

---

## 8. Technical contract (non-negotiable — QA gate)
- **Single self-contained file.** ALL CSS in one `<style>`, ALL JS in one
  vanilla `<script>`, ALL icons inline SVG/emoji. **No external requests** (no
  CDNs / fonts / images / analytics). Opens offline by double-click.
- **Vanilla JS, no build step, no frameworks.** `node --check` must pass.
- **Defensive render** — never throw on a missing optional field; a malformed
  scene degrades gracefully (skip, don't crash the deck).
- **`python3 deliverables/_shared/qa.py deliverables/06-tobe-journey-animation.html`
  must print ✅ PASS** (no external resources, node --check clean, all
  cite/ref/personaRef slugs resolve, pillar ids are S/U).
- Accessibility: semantic HTML, real `<button>`s with aria state, keyboard
  operable, contrast ≥ AA, `prefers-reduced-motion` honoured, `@media print`
  expands everything.
- Responsive: optimised for desktop presentation; degrade gracefully on mobile.

---

## 9. Acceptance criteria (orchestrator + QA agent will verify in a real browser)
1. All **9 scenes** render; each plays a staged **build** then **settles/pauses**.
2. **Transport** works: play/pause, next/prev, replay, autoplay, scene-rail jump,
   keyboard (← → space R 1–9).
3. **Explore** expands per-moment Today-pain (quoted + cited) + opportunities +
   tech + pillars + metrics + frontstage/backstage detail.
4. **Dual economy** toggle re-renders every scene incl. the cabinet.
5. The **medicine cabinet (m2)** is a genuine showpiece — members + animated
   pills + status + funding, faithful to #05's `household` data.
6. **ROWA** + ≥6 other named roadmap capabilities appear and are cited.
7. Every scene shows an overt **Today pain (quoted + cited)** vs the future answer.
8. `qa.py` ✅ PASS; `node --check` clean; opens offline; reduced-motion + print OK.
9. Reads as **compelling, beautiful, low-friction** — watch / replay / explore.

## 10. Read before building
- `deliverables/05-tobe-future-state-journey.html` (the substance + `DATA`,
  `household`, `pillSVG`, `memberAvatarSVG`, `el()` to port).
- `deliverables/_shared/05-future-state-journey-BRIEF.md` (the journey framing).
- `deliverables/_shared/pillars.md` · `deliverables/_shared/qa.py` ·
  `deliverables/_shared/DESIGN-SPEC.md`.
- `design-kit/journeys/to-be-blueprint-chronic-insured.md` /
  `to-be-journey-cash-acute.md`.
