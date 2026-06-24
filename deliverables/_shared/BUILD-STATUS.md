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
- 2026-06-14 — **Added marquee deliverable #05** `05-tobe-future-state-journey.html` (Tamsin intake batch). Interactive board-treatment future-state journey for the *household-medicine-manager* complex use case: dual-economy (Insured Nomvula ⇄ Cash Sipho), 9 moments (Moment·Need·Activities·Previous-Pains·Components/Capabilities), a **"My medicine cabinet"** hero view (inline-SVG pill breakdown per household member), **ROWA + OCR + BRIX + the 24-capability roadmap** woven in, overt complaint/sentiment pain quotes (cited), S1–S5/U1–U7 tags + filter, Patient-Trust emotion curve. Aspirational ~5-yr, unconstrained by current tech (per the Jian×Tamsin voice note, [[src-vn-cape-point-11]]); non-negotiables (pharmacist sign-off, POPIA, SEP) honoured. **qa.py ✅ PASS** (self-contained, node --check clean, 31 cites resolve). Brief: [[05-future-state-journey-BRIEF]]. Built by a sub-agent fleet; orchestrator gate-passed + wired into index.html.
- 2026-06-17 — **Added deliverable #07** `07-tobe-acute-escripting-journey.html` (Tamsin intake). The **acute / convenience** counterpart to #05: a patient sees an **external doctor** who prescribes via a **Dis-Chem-owned e-scripting portal** (live stock + transparent scheme/cash price + generic-vs-brand advice at the consult; the Australian token/Pattern 1, Dis-Chem-owned). Dual-economy **Insured Aisha (own acute) ⇄ Cash Sipho (for his child)**; 9 moments foregrounding **speed/reliability** and **S6 treatment orchestration**, bookended (consented record → e-script token → pharmacist check → ROWA dispense → fast delivery/locker → adherence → off-portal OCR fallback → acute→chronic bridge). Second view repurposed to **"The doctor's portal"** showpiece. Same #05 engine/CSS (preserved verbatim) + new DATA. **qa.py ✅ PASS** (self-contained, node --check clean, 43 cites resolve, S1–S6/U1–U7); headless render smoke test clean across both economies × both views. Reviewed vs writing-style-guide + vault (two stale S1–S5 labels corrected). Brief: [[07-acute-escripting-journey-BRIEF]]. Orchestrated by Claude (scout + review sub-agents; core authoring + gate by orchestrator).
