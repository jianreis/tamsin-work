---
type: source
title: "Voice note — Jian × Tamsin: the shape of the future-state scripting deliverable (Cape Point 11)"
url: ""
author: "Jian Reis (Bigly Labs) & Tamsin Madden (Bigly Labs / Dis-Chem)"
publisher: "Bigly Labs (internal voice note)"
published: "2026-06-14"
retrieved: "2026-06-14"
source_kind: company
reliability: B
tags: [domain/ux, domain/dischem, topic/automation, journey/submit, journey/refill, journey/adhere, region/za]
---

# Voice note — the shape of the future-state scripting deliverable (Cape Point 11)

## Summary
An informal working discussion between **Jian** and **Tamsin** defining the
**shape of the first key deliverable** for the Dis-Chem scripting project. The
deliverable is an **experience-definition** artefact: a future-state customer
**journey map** (the Bigly "board" treatment) that takes a person through the
key stages of the scripting experience — receiving a script, viewing and managing
their medication, tracking, and using their medication — *"really beautiful end to
end."* It is **indicative, not prescriptive**, and explicitly **not a service
blueprint** (the blueprint is the next step, once the experience is agreed). It is
an **aspirational ~5-year vision**, **not constrained by Dis-Chem's existing
technology landscape**, that touches the strategic pillars and overtly references
existing customer pain points. This note is the authoritative brief for
deliverable #05 (see *Used in*).

**Transcription note / reliability caveat.** Audio (12.1 min, m4a) was transcribed
locally with `whisper.cpp` (large-v3) — Hugging Face / Azure model hosts are
firewalled in the build environment, so the model was sourced from a GitHub
release. The **first portion is coherent and decision-useful**; the **tail
degraded into a repetition loop** (a known Whisper failure mode on silence/low
SNR), so the closing minutes are not faithfully captured. A clean
`no_context` re-run **reproduced the same tail loop**, confirming the loss is
**intrinsic to the audio's final segment** (not a decoder-settings artefact); the
coherent opening — which carries the **full brief** — is **identical across both
independent runs**, so it is high-confidence. The claims below are taken only from
that coherent portion and are corroborated by Jian's written instructions in the
same session. Reliability **B**: authoritative for *intent/brief* (primary
stakeholders), but informal/verbal and partially lost at the tail.

## Key claims
- **The deliverable = an experience-definition journey map**, not a service
  blueprint. *"We have to define the experience first… the service blueprint is
  the next step."* It is the thing physically handed over at quarter-end.
- **Indicative, not prescriptive** about how the experience gets built.
- **Per-moment structure:** *moment · need · activities · previous pain points ·
  components (capabilities that need to be in place).*
- **A channel-agnostic base** that is then **tweaked per channel** to stay
  consistent across all channels.
- **Aspirational ~5-year vision.** *"What is the experience we want to build for
  the next five years?"* — if the org buys in, technology is to be **led by this**.
- **Not constrained by current technology.** Asked "how anchored to current
  technical systems?" → *"Doesn't."* / *"no restrictions."*
- **Boundary on ambition:** credible, not absurd — the reductio was *"UFOs deliver
  my meds."* **Drones** were debated as borderline/contested (legacy-system
  replacement cost is the real-world constraint, deliberately set aside here).
- **Already signed-off enabling capabilities:** **OCR** (script capture) and
  **automated pickers** (the ROWA robot). The business is aware of and happy with
  these.
- **A "beautiful end-to-end" medication-management view** is wanted — a clear
  breakdown of all of the customer's medication (with a pill image), plus tracking
  and using the medication.

## Verbatim excerpts
> "What is the deliverable in your mind at the end of the quarter? … For me, it's
> these things … these journeys … moment, need, activities, previous pain points …
> and then I've got components here … what are the capabilities … that need to be
> in place."

> "Not a service blueprint? Not for now. The service blueprint is the next step …
> We have to define the experience first."

> "How anchored does this have to be to any of the current reality in terms of the
> technical systems? — Doesn't."

> "Is this an aspirational five-year plan? — Yeah … if the organization buys into
> this, then technology needs to be led by this to deliver."

> "We've already gotten sign off on things like the use of OCR … automated
> pickers." · "This is in no way constrained by the existing technology landscape
> … no restrictions."

> "What is the experience we want to build for the next five years?"

> "… a frictionless scripting journey … in the future that pays no attention to the
> existing technology requirements or realities — as long as it's not like UFOs
> deliver my meds." *(register: informal; drones debated as the borderline case.)*

> "… key stages of the … scripting experience … from receiving it to viewing and
> managing my scripts, tracking, using my medication … a really nice breakdown of
> all of my medication with a picture of the pill on it, like really beautiful end
> to end."

## Used in
- [[deliverables/_shared/05-future-state-journey-BRIEF|Build brief — Deliverable #05]] (§0 authoritative framing).
- Deliverable `deliverables/05-tobe-future-state-journey.html` (the future-state scripting journey).
