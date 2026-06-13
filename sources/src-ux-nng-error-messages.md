---
type: source
title: "Error-Message Guidelines & Usability Heuristics (error prevention, recovery)"
url: "https://www.nngroup.com/articles/error-message-guidelines/"
author: "Jakob Nielsen / Page Laubheimer (Nielsen Norman Group)"
publisher: "Nielsen Norman Group (NN/g)"
published: "2001-06-24"
retrieved: "2026-06-13"
source_kind: industry-report
reliability: A
tags: [domain/ux, topic/trust-safety, region/global]
---

# Summary

NN/g's error-message guidance plus the two relevant usability heuristics:
**#5 Error prevention** and **#9 Help users recognise, diagnose, and recover from
errors**. The authoritative basis for designing graceful, blame-free, actionable
error states — essential for the high-stakes failure modes in scripting (claim
rejected, out of stock, invalid script, delivery failed).

> Note: nngroup.com returns HTTP 403 to automated fetch; claims taken from NN/g's
> indexed article summaries and the "Hostile Patterns in Error Messages" article,
> retrieved 2026-06-13.

# Key claims
- A good error message: (1) is **highly visible** and uses clear visual styling;
  (2) is in **plain language** (no codes/jargon like "Error 4002");
  (3) **explains the problem precisely**; (4) **offers a constructive way
  forward** (the next action/solution); (5) is **polite and blames the system,
  not the user**.
- **Prevent errors** where possible (good defaults, constraints, confirmation for
  destructive actions, inline format hints) — error prevention beats recovery.
- Place the message **next to the field/cause**, in context, and use **inline
  validation** so users can fix problems immediately.
- Avoid **hostile patterns**: blaming, vague, dead-end, or shaming messages.
  Provide a route to **human help** when self-service recovery isn't possible.
- For high-stakes/health contexts, an error must always leave the user with a
  **safe next step and a way to reach a person** — never a dead end.

# Verbatim excerpts
> "Error messages should be expressed in plain language (no codes), precisely
> indicate the problem, and constructively suggest a solution."

> Heuristic 9: "Help users recognize, diagnose, and recover from errors."

> "Avoid placing blame on users" — replace accusatory phrasing with neutral,
> helpful guidance.

# Used in
- [[wiki/ux-service-design/pharmacy-ux-patterns]]
- [[wiki/ux-service-design/healthcare-service-design-patterns]]
</content>
