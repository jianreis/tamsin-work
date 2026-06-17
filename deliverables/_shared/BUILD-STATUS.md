# BUILD-STATUS - deliverables orchestration tracker

> Orchestrator's live state for the 4-deliverable build. If a session resumes
> (token cap / hourly check), read this first to know what's done and what's next.
> Spec: [[DESIGN-SPEC]]. All work done by subagents; orchestrator reviews + gates.

**Decisions (locked by Jian, 2026-06-13):** visual = **minimal/low-fi**; journeys = **dual-economy toggle** (Nomvula insured ↔ Sipho cash); interactivity = **rich self-contained**. Aspirational (#4) keeps clinical-safety + POPIA, flags `🔮 requires-reform`.

## Wave plan & status
| Wave | Deliverable / artifact | Agent | Status |
|---|---|---|---|
| 1 | `_shared/blueprint-kit.html` + `index.html` | kit | ✅ done — QA passed (self-contained, node --check OK, all 8 components) |
| 1 | `01-research-report.html` + `_shared/pillars.md` | report | ✅ done — QA passed (clean, 2955w ≈ 5pp) |
| — | **Review gate 1** | orchestrator | ✅ PASSED — pillars S1–S5 + U1–U7 locked |
| 2 | `02-asis-blueprint-journey.html` | as-is | ✅ done — gate 2 passed (25 cites resolve, both economies × 9 stages) |
| — | **Review gate 2** | orchestrator | ✅ PASSED |
| 3 | `03-tobe-close-the-gap.html` | close-the-gap | ✅ done — gate passed (legal-today, 0 reform flags, 23 cites) |
| 3 | `04-tobe-aspirational.html` | aspirational | ✅ done — gate passed (12 🔮 reform flags, 34 cites) |
| — | **Final QA** | orchestrator | ✅ PASSED — all 4 self-contained, JS-valid, all cites resolve; vault lint 0 dead links; files sent to Jian + Tamsin |

**BUILD COMPLETE (2026-06-13).** All five HTML artifacts in `deliverables/` gate-passed and delivered. Heartbeat monitor stopped.

## Resume protocol
1. `ls deliverables/*.html deliverables/_shared/*` to see what exists.
2. Check this table; for any ⏳ with no running agent and no notification pending, re-dispatch.
3. Run the §5 QA gate on any completed HTML before marking ✅.
4. Commit + push after each wave. Stop the hourly heartbeat Monitor once all four are ✅ and sent.

## Log
- 2026-06-13 22:5x — scaffold + DESIGN-SPEC written; Wave 1 dispatched (kit, report).
- 2026-06-13 23:0x — Wave 1 ✅ (kit, index, report, pillars committed); gate 1 passed, pillars locked; Wave 2 (as-is) dispatched.
- 2026-06-13 23:1x — Wave 2 ✅ (as-is committed); gate 2 passed; qa.py added; Wave 3 (close-the-gap + aspirational) dispatched in parallel.
- 2026-06-13 23:3x — Wave 3 ✅ both to-be journeys gate-passed (#3 legal-today/0 reform; #4 aspirational/12 🔮 reform). Final QA green across all 4 + index. Files sent. BUILD COMPLETE.
- 2026-06-17 — **Added sibling deliverable #07** `07-tobe-acute-escript-journey.html` ("Same-Day Script"). The acute/convenience counterpart to #05, won on **speed + reliability**, in the same board treatment and reusing #05's engine. Distinctive shift: the journey **starts outside Dis-Chem** — an external **partner doctor** issues a secure **e-script token** and sees **live stock + an adjudicated price during the consult** (the **S6 treatment-orchestration** hero, borrowing Australia's token model but Dis-Chem-operated — honestly flagged 🔮 + **designed against steering**: prescriber-independence/Competition Act/HPCSA-ethics). Dual-economy swaps the whole scenario (Insured **Nomvula**'s own adult infection ⇄ Cash **Sipho**'s sick child's acute), 7 moments, ≥1 S + ≥1 U each, overt cited Today baselines, ≥6 named bookend capabilities. Second hero view **"💬 The script in my pocket"** — a per-economy **WhatsApp-style** message thread (generic chat treatment, no brand assets, all inline SVG; isiZulu on the cash side). pillars include **S6**; non-negotiables (pharmacist sign-off, SEP, §22F generic substitution, POPIA) honoured + visible. **qa.py ✅ PASS** (self-contained, node --check clean, 41 cites resolve, S/U ids). Brief: [[07-acute-escript-journey-BRIEF]] (build brief in session). Wired into index.html.
- 2026-06-14 — **Added marquee deliverable #05** `05-tobe-future-state-journey.html` (Tamsin intake batch). Interactive board-treatment future-state journey for the *household-medicine-manager* complex use case: dual-economy (Insured Nomvula ⇄ Cash Sipho), 9 moments (Moment·Need·Activities·Previous-Pains·Components/Capabilities), a **"My medicine cabinet"** hero view (inline-SVG pill breakdown per household member), **ROWA + OCR + BRIX + the 24-capability roadmap** woven in, overt complaint/sentiment pain quotes (cited), S1–S5/U1–U7 tags + filter, Patient-Trust emotion curve. Aspirational ~5-yr, unconstrained by current tech (per the Jian×Tamsin voice note, [[src-vn-cape-point-11]]); non-negotiables (pharmacist sign-off, POPIA, SEP) honoured. **qa.py ✅ PASS** (self-contained, node --check clean, 31 cites resolve). Brief: [[05-future-state-journey-BRIEF]]. Built by a sub-agent fleet; orchestrator gate-passed + wired into index.html.
