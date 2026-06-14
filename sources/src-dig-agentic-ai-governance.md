---
type: source
title: "Agentic AI in healthcare: scoping review, governance, hallucination & accountability"
url: "https://www.nature.com/articles/s41746-026-02517-5"
author: "Various (npj Digital Medicine scoping review; arXiv Tiered Agentic Oversight; National Academy of Medicine)"
publisher: "npj Digital Medicine (Nature); arXiv; NAM; Wolters Kluwer"
published: "2026-01-01"
retrieved: "2026-06-13"
source_kind: peer-reviewed
reliability: B
tags: [domain/digital, topic/ai, topic/automation, topic/trust-safety, region/global]
---

## Summary

State-of-the-art on **agentic AI** (LLM agents that plan, call tools, and execute
multi-step workflows with some autonomy) in healthcare. Prime near-term candidates
are administrative/back-office workflows — pharmaceutical supply chain, prior
authorisation, revenue cycle, documentation, surfacing care gaps. Reviews stress
governance is immature and risk is concentrated where error tolerance is low:
multi-agent miscoordination can produce inconsistent recommendations or systemic
errors; hallucination and incorrect reasoning are dangerous in dosing/clinical
decisions, so fully autonomous decision-making there is "problematic". Recommended
guardrails: human-in-the-loop escalation, audit trails, bias/hallucination
monitoring, clear accountability. The National Academy of Medicine published an AI
Code of Conduct (2025); regulation is fragmenting (US state-by-state). Signals: use
agents for orchestration/admin under human oversight, not unattended clinical
decisions.

## Key claims
- **Agentic AI** = AI that plans + acts across multi-step workflows with autonomy;
  near-term fit is admin/supply-chain/prior-auth, not autonomous clinical decisions.
- Multi-agent miscoordination → inconsistent recommendations / systemic errors when
  agents operate with incomplete context.
- Autonomous decision-making is "problematic" where precision matters (e.g.
  medication dosing); hallucination risk is acute.
- Required guardrails: human-in-the-loop escalation, audit trails, bias &
  hallucination monitoring, clear accountability "from day one".
- **National Academy of Medicine AI Code of Conduct (2025)**; regulatory landscape
  fragmented (US state laws — Colorado risk-based AI Act, California disclosure, etc.).

## Verbatim excerpts
> "Failures in multi-agent coordination can lead to inconsistent recommendations or
> systemic errors when agents miscommunicate or operate with incomplete context …
> particularly concerning in clinical scenarios with low tolerance for error …"

> "In settings where precision, predictability, and timely execution are essential,
> such as medication dosing … autonomous decision-making by Agentic AI may be
> problematic."

> "Agentic AI in healthcare needs guardrails, audit trails, human-in-the-loop
> escalation, bias monitoring, hallucination controls, and clear accountability from
> day one."

## Used in
- [[wiki/digital-transformation/ai-in-pharmacy]]
- [[wiki/digital-transformation/telepharmacy-and-omnichannel]]
