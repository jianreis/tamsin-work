---
type: wiki
title: "Healthcare service-design patterns & trust-safety in health UX"
domain: ux-service-design
status: draft
confidence: high
tags: [domain/ux, topic/trust-safety, topic/telehealth, topic/accessibility, journey/validate, journey/adhere]
sources: [src-ux-picker-patient-centred-care, src-ux-nhs-digital-front-door, src-ux-nhs-govuk-design-principles, src-ux-ahrq-health-literacy-teachback, src-ux-sludge-thaler-sunstein, src-ux-nng-error-messages, src-ux-com-b-behaviour-change-wheel]
created: "2026-06-13"
updated: "2026-06-13"
---

# Healthcare service-design patterns & trust-safety in health UX

Health services carry stakes ordinary retail does not: a confused dosing message
or a dead-end error can cause real harm, and users often arrive **anxious,
unwell, low on confidence, or acting for someone they love**. This page collects
the patient-experience frameworks and the trust-and-safety patterns a scripting
service must honour.

## Patient-experience frameworks (the bar to clear)

Evaluate every journey and blueprint against an established patient-experience
frame. The **IOM** defines patient-centred care as care "respectful of, and
responsive to, individual patient preferences, needs and values, ensuring that
patient values guide all clinical decisions" [[src-ux-picker-patient-centred-care]].
**Picker's eight principles** give the concrete checklist
[[src-ux-picker-patient-centred-care]]:

1. **Respect for preferences** (values, autonomy, dignity)
2. **Coordination & integration of care**
3. **Information & education** (about condition, meds, process)
4. **Physical comfort**
5. **Emotional support** (relieve fear and anxiety)
6. **Involvement of family & friends** (caregivers/proxies)
7. **Continuity & transition** (clear "what happens next")
8. **Access to care** (get the medicine when needed)

For a scripting service the load-bearing dimensions are **information &
education, emotional support, continuity & transition, access, and respect for
preferences** — use them as evaluation lanes on the journey map.

## Public-sector design canons (proven, transferable)

The **GOV.UK** and **NHS** design principles are the most authoritative
public-facing guidance and transfer cleanly to pharmacy
[[src-ux-nhs-govuk-design-principles]]:
- **Start with user needs**; **do the hard work to make it simple** (absorb
  complexity into the org, not the patient); **this is for everyone**
  (accessible/inclusive by default — see [[inclusive-low-bandwidth-design]]).
- NHS: **understand and respect the whole person** — emotional, physical *and*
  technical needs; **NHS services are for everyone**; plain language first
  [[src-ux-nhs-govuk-design-principles]].
- Accessibility (WCAG AA) is a baseline, not an add-on.

## The digital front door & care navigation

A **digital front door** is a single, coherent patient-facing entry point through
which people access services, navigate to the right next step, and self-serve —
"a front door, not the whole building" [[src-ux-nhs-digital-front-door]]. Two
design imperatives:

- **Care navigation / triage, not a menu.** The front door should *route* the
  user to the right service or channel (refill vs new script vs clinical query vs
  acute referral), reducing wrong turns and needless contact
  [[src-ux-nhs-digital-front-door]].
- **Never the only door.** Keep **assisted-digital and offline routes** (phone,
  in-store, proxy) for those who can't or won't use digital, and **co-design with
  the people who face the biggest barriers** [[src-ux-nhs-digital-front-door]].
  This is non-negotiable in SA (see [[inclusive-low-bandwidth-design]]).

For scripting, the front door consolidates submit/refill, funding check, status,
adherence support, and "talk to a pharmacist" into one trusted, consistent
entry — reducing the fragmentation of separate apps/portals.

## Trust & safety in health UX

Trust is the currency of a health service; it is built (and lost) in details.

### Consent & privacy (POPIA-grade)
- **Explicit, specific, revocable consent** for processing health data; state
  *what* is collected, *why*, *how long*, *who sees it*, and that it is not sold.
  Make consent easy to give **and to withdraw**; **no pre-ticked boxes or
  misleading opt-outs** (those are sludge and a trust breach)
  [[src-ux-sludge-thaler-sunstein]]. Ground specifics in
  [[wiki/sa-regulatory/_index|POPIA]].
- **Data minimisation & dignity** — ask only for what the step needs; don't make
  a person re-disclose a sensitive condition repeatedly across channels.
- **Privacy by context** — health status is sensitive; default to discreet
  notifications ("Your order is ready" not "Your ARV/insulin is ready"), and let
  users control what shows on a lock screen or a shared phone.

### Transparency
- Be honest about **what the service can and can't do**, **who sees the data**,
  and **what it costs** before the user commits. Up-front price and cover status
  prevent the till-shock that destroys trust.
- Show **where things stand** (status, ETA) rather than leaving silent gaps — the
  silent backstage wait is a top anxiety driver (see
  [[service-blueprinting-method|blueprint]] worked example).

### Error & safety messaging
High-stakes failures (claim rejected, out-of-stock, invalid script, delivery
failed) must be handled gracefully [[src-ux-nng-error-messages]]:
- **Plain language, no codes**; **explain the problem and the way forward**;
  **blame the system, not the user**.
- **Prevent** errors where possible (constraints, confirmation for risky/
  irreversible actions, inline validation).
- **Never a dead end** — every error leaves a **safe next step and a route to a
  human (pharmacist)**. In health, dead-end errors are a safety risk, not just a
  usability flaw [[src-ux-nng-error-messages]].
- Concrete state designs live in [[pharmacy-ux-patterns]].

### Health-literacy as a safety practice
Treat **every** user as possibly not fully understanding — *health-literacy
universal precautions* [[src-ux-ahrq-health-literacy-teachback]]:
- **Plain language**, short sentences, active voice; define necessary terms.
- **Teach-back / confirm-understanding** for critical instructions ("just to
  check — how will you take this?"); it tests the explanation, not the patient
  [[src-ux-ahrq-health-literacy-teachback]].
- **Ask Me 3** spine for any med: *What is it for? What do I do? Why does it
  matter?* [[src-ux-ahrq-health-literacy-teachback]].
- Low health literacy correlates with worse adherence and more errors — so
  clarity is **safety**.

## Designing for anxiety & vulnerability

Users may be frightened, in pain, recently diagnosed, elderly, or caring for
someone. Design accordingly:
- **Calm, predictable, low-effort flows** — reduce choices and steps at stressful
  moments; one clear action per screen (echoes COM-B *capability* and EAST *easy*)
  [[src-ux-com-b-behaviour-change-wheel]] [[src-ux-nhs-govuk-design-principles]].
- **Reassurance and progress** — confirm receipt, set expectations, show status;
  never leave a worried user in silence.
- **No shaming or pressure mechanics** — avoid streaks, countdowns, or guilt
  framing around adherence; they induce anxiety and shame.
- **Dignity for sensitive conditions** — discreet language, private collection
  options, and proxy/caregiver flows that don't expose the patient.
- **Trauma-informed defaults** — safety, predictability, and user **control**
  (let people pause, skip, revisit, or withdraw).
- **Always a human fallback** — a clear, low-friction route to a pharmacist for
  anything the self-service path can't safely resolve.

## How to apply
- Add **Picker dimensions** (information, emotional support, continuity, access,
  respect) as evaluation lanes on the scripting [[journey-mapping-method|journey map]]
  [[src-ux-picker-patient-centred-care]].
- Design the scripting entry as a **digital front door with care-navigation** and
  a **mandatory non-digital fallback** [[src-ux-nhs-digital-front-door]]
  ([[inclusive-low-bandwidth-design]]).
- Make **consent explicit and revocable, with no dark patterns**; default to
  **discreet** health notifications; minimise re-disclosure
  [[src-ux-sludge-thaler-sunstein]] — anchor to [[wiki/sa-regulatory/_index|POPIA]].
- Apply **error-message rules** to every failure state and guarantee a **human
  fallback**; build the concrete states in [[pharmacy-ux-patterns]]
  [[src-ux-nng-error-messages]].
- Use **plain language, teach-back, and Ask Me 3** for all dosing/safety content
  [[src-ux-ahrq-health-literacy-teachback]].

## Open questions
- POPIA specifics for consent UX and lawful basis for auto-refill/proxy ordering —
  see [[wiki/sa-regulatory/_index]]; log to [[meta/open-questions]].
- SAPC/clinical rules on what dosing counselling may be delivered digitally vs
  pharmacist-only — see [[wiki/dispensing-practice/_index]].

## See also
- [[pharmacy-ux-patterns]] · [[inclusive-low-bandwidth-design]] ·
  [[jtbd-and-behavioural-design]] · [[journey-mapping-method]] ·
  [[service-blueprinting-method]]
