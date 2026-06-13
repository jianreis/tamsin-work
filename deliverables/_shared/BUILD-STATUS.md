# BUILD-STATUS — deliverables orchestration tracker

> Orchestrator's live state for the 4-deliverable build. If a session resumes
> (token cap / hourly check), read this first to know what's done and what's next.
> Spec: [[DESIGN-SPEC]]. All work done by subagents; orchestrator reviews + gates.

**Decisions (locked by Jian, 2026-06-13):** visual = **minimal/low-fi**; journeys = **dual-economy toggle** (Nomvula insured ↔ Sipho cash); interactivity = **rich self-contained**. Aspirational (#4) keeps clinical-safety + POPIA, flags `🔮 requires-reform`.

## Wave plan & status
| Wave | Deliverable / artifact | Agent | Status |
|---|---|---|---|
| 1 | `_shared/blueprint-kit.html` + `index.html` (interactive engine + schema + sample) | kit | ⏳ dispatched |
| 1 | `01-research-report.html` + `_shared/pillars.md` (canonical pillars) | report | ⏳ dispatched |
| — | **Review gate 1**: kit self-contained + interactions present; report ≤5pp + pillars sound → lock pillars | orchestrator | pending |
| 2 | `02-asis-blueprint-journey.html` | as-is | blocked on gate 1 |
| — | **Review gate 2**: as-is grounded + gaps flagged | orchestrator | pending |
| 3 | `03-tobe-close-the-gap.html` | close-the-gap | blocked on gate 2 |
| 3 | `04-tobe-aspirational.html` | aspirational | blocked on gate 2 |
| — | **Final QA**: self-containment grep + `node --check` + cite-resolve + lint; SendUserFile all 4 | orchestrator | pending |

## Resume protocol
1. `ls deliverables/*.html deliverables/_shared/*` to see what exists.
2. Check this table; for any ⏳ with no running agent and no notification pending, re-dispatch.
3. Run the §5 QA gate on any completed HTML before marking ✅.
4. Commit + push after each wave. Stop the hourly heartbeat Monitor once all four are ✅ and sent.

## Log
- 2026-06-13 22:5x — scaffold + DESIGN-SPEC written; Wave 1 dispatched (kit, report).
