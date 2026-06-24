# BUILD BRIEF / RECORD - Deliverable #07: Future-State Acute E-Scripting Journey

> The acute/convenience counterpart to the #05 chronic-flywheel marquee. Same
> Bigly board treatment and engine as #05; new `DATA` payload. Built and
> gate-passed 2026-06-17. Output: `deliverables/07-tobe-acute-escripting-journey.html`.

## What it is
An interactive future-state customer journey for an **acute episode that starts
outside Dis-Chem** - at an external doctor. The hero is a **Dis-Chem-owned
centralised e-scripting portal**: a partner doctor prescribes with **live stock**
and a **transparent, scheme-or-cash price**, advising **generic-vs-brand at the
consult**. It is the experience-definition for the acute battle, which is **won on
speed and reliability** (research report §5.2; [[wiki/dischem/competitive-landscape-sa-pharmacy]]),
and it foregrounds **Strategic Pillar S6 - treatment orchestration**.

This borrows the Australian national e-scripting model (the QR-code token,
"Pattern 1" - [[wiki/global-benchmarks/patterns-deep-dive]], [[wiki/concepts/e-prescription-token]]),
but Dis-Chem **owns and operates** the rail, so a token redeems across the
Dis-Chem estate without waiting for a national exchange.

## Decisions (locked by Jian, 2026-06-17)
- **Dual-economy, "one of each":** insured **Aisha** (the speed/convenience-native
  persona, [[design-kit/personas/time-poor-urban-professional]]) for her **own**
  acute illness; cash **Sipho** ([[design-kit/personas/low-data-whatsapp-first-peri-urban]])
  acting for his **child** (a caregiver/proxy acute path).
- **Horizon:** aspirational ~5-year, tech-unconstrained but credible (matches #05).
- **Off-portal fallback included:** a graceful-failure moment (m8) for a doctor
  not on the portal - OCR ingest of a paper/PDF script, pharmacist-verified.
- **Second top-level view repurposed:** #05's "My medicine cabinet" becomes
  **"The doctor's portal"** - a showpiece of what the partner doctor sees at the
  consult (consented record, live stock ✓, brand-vs-generic pricing, issued token),
  per economy.

## The 9 moments (acute spine)
1. **At the doctor, my pharmacy is already in the room** - PRESCRIBE · consented record access · S6 S2 U5
2. ⭐ **Priced and in stock before I leave the consult** - HERO · FUND/PAY at point-of-prescribing · S3 S6 U3 U2
3. **It lands on my phone as a token - no paper to lose** - SUBMIT · e-script token · U1 U6 S6
4. **A named pharmacist still has the final word - fast** - VALIDATE/CLINICAL-CHECK · S5 U4 U2
5. **Picked, checked and ready in minutes** - DISPENSE · ROWA + scan-verify · S5 U2 S3
6. ⭐ **I choose how I get it - fast** - COLLECT/DELIVER · 60-min DeliverD (Aisha) / near-home locker PIN (Sipho) · S1 U2 U6
7. **Taking it right - finish the course** - ADHERE · multilingual dose, AMR stewardship · U7 U5
8. **When the doctor isn't on the portal, it still just works** - GRACEFUL-FAILURE · OCR fallback · U4 S6 U2
9. ⭐ **If it keeps coming back, we turn it into managed care** - REFILL/RENEW · acute->chronic orchestration bridge · S6 S2 S4

Every moment carries ≥1 strategic (S) and ≥1 UX (U) pillar, an emotion / Patient-Trust
read, both economies, an overt quoted-and-cited "Today" baseline, and the
roadmapped Components/Capabilities woven in.

## Honesty: legal-today vs 🔮 requires-reform
Buildable today (cited): AES-signed e-scripts (= wet-ink force) + telehealth +
POPIA-consented record access + e-script tokens across the Dis-Chem estate + SEP/
capped-fee price transparency + scheme adjudication. Flagged **🔮 requires-reform**:
ubiquitous provider-side AES e-prescribing (m3), prescriber-facing live stock at
consult (m2, marked operable-not-standard), unattended locker release of scheduled
meds (m6 cash), and a CCMDD->retail chronic bridge (m9 cash). Pharmacist clinical
sign-off and supervision are honoured throughout ([[wiki/sa-regulatory/pharmacy-act-sapc-gpp]]).

## QA
`deliverables/_shared/qa.py` -> ✅ PASS: self-contained (no external resources),
`node --check` clean, **43 citation slugs all resolve**, pillars S1–S6 + U1–U7.
A headless DOM smoke test booted the engine across both economies × both views with
no runtime errors. Browser rendering still needs a human visual confirm (the QA gate
cannot run a browser here). Reviewed against [[meta/writing-style-guide]] and the
vault; two stale "S1–S5" labels (copied from #05) corrected to S1–S6.

## See also
- [[05-future-state-journey-BRIEF]] - the chronic-flywheel marquee this complements.
- `deliverables/_shared/DESIGN-SPEC.md` · `deliverables/_shared/pillars.md` · `design-kit/templates/future-state-blueprint-board-style.md`
