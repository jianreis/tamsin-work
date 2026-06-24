---
type: wiki
title: "Inclusive & low-bandwidth design for South Africa"
domain: ux-service-design
status: draft
confidence: high
tags: [domain/ux, domain/consumer, topic/accessibility, region/za, journey/submit, journey/collect]
sources: [src-ux-wcag-older-users-accessibility, src-ux-sa-data-cost-digital-divide, src-ux-momconnect-ussd-whatsapp, src-ux-sa-whatsapp-conversational-commerce, src-ux-ahrq-health-literacy-teachback, src-ux-nhs-govuk-design-principles, src-ux-east-behavioural-insights]
created: "2026-06-13"
updated: "2026-06-17"
---

# Inclusive & low-bandwidth design for South Africa

"**This is for everyone**" [[src-ux-nhs-govuk-design-principles]] is not a slogan
in South Africa, it is the design problem. The scripting service must work for
an elderly chronic patient on a feature phone with R5 of prepaid airtime, in
isiZulu, during load-shedding, as well as for an affluent smartphone user on
fibre. This page sets out the accessibility and low-resource patterns that make
that possible. It is the most SA-specific page in this domain; pair it with
[[wiki/consumer-context/_index|consumer context]].

## The SA constraint stack (design *from* these, not around them)

- **Data is expensive relative to income.** ~R34.69/GB (2023); **59% of people
  earning < R2,500/month** say data cost is their main barrier to going online
  [[src-ux-sa-data-cost-digital-divide]]. Users **ration every megabyte**.
- **Prepaid dominates (~76%).** People top up small amounts and watch the meter;
  a heavy app that "eats data" is abandoned [[src-ux-sa-data-cost-digital-divide]].
- **Widest urban–rural connectivity gap in the world** (~57% urban vs ~23% rural
  online, 2024): assume **intermittent or absent** connectivity for a large
  share of users [[src-ux-sa-data-cost-digital-divide]].
- **Load-shedding**: scheduled power cuts mean towers, routers, and phones go
  flat; the service must tolerate **going offline mid-task** and resume
  gracefully [[src-ux-sa-whatsapp-conversational-commerce]].
- **11 official languages**; many users are not English-first
  [[src-ux-sa-whatsapp-conversational-commerce]].
- **Mixed device capability**: smartphones, but also **feature phones**; shared
  and borrowed phones are common.

## Channel strategy: meet users at their device (layered, not single)

Never bet on one channel. MomConnect proved a **layered, low-bandwidth health
service scales nationally in SA**, with USSD registration on feature phones (no
data), stage-based SMS, and a WhatsApp chatbot for smartphones, reaching ~5m
mothers across >95% of facilities [[src-ux-momconnect-ussd-whatsapp]]. Apply the
same ladder to scripting:

- **WhatsApp (primary smartphone channel).** SA's de-facto conversational-commerce
  channel; supports end-to-end flows (capture → confirm → pay → track) and **all
  11 official languages** [[src-ux-sa-whatsapp-conversational-commerce]]. Often the
  cheapest/most familiar channel and frequently zero-rated by operators.
- **USSD (feature-phone fallback).** Menu-driven, **no data, no smartphone**, works
  on any handset, ideal for refill requests, status checks, and registration
  [[src-ux-momconnect-ussd-whatsapp]]. Constraints: short sessions, ~182-char
  screens, numeric menus, session timeouts, so design terse, stateful, resumable.
- **SMS (universal notify).** For confirmations, "ready"/"dispatched", reminders;
  reaches every handset; assume it may be the *only* reliable outbound channel.
- **App / web (richer, optional).** For users who want it, but it must degrade to
  the above, never be the only door.
- **Voice / IVR & in-store assisted**, for the digitally excluded; a **human
  fallback is mandatory** [[src-ux-nhs-govuk-design-principles]].

Design each step so it can complete on the **lowest-capability channel** that
suits it; richer channels add convenience, not gatekeeping.

## Low-data / intermittent-connectivity patterns

- **Low-data by default**: lightweight pages, **no autoplay video/heavy images**,
  compressed assets, text-first. Show a visible **data/size cost** where relevant.
- **Offline-tolerant & resumable**: cache state locally; let a user **resume a
  half-finished refill** after a dropped connection or a load-shedding outage
  without re-entering everything [[src-ux-sa-whatsapp-conversational-commerce]].
- **Asynchronous, not real-time-dependent**: chat/USSD/SMS flows that don't
  require a continuous session survive flaky networks better than live web forms.
- **Idempotent submissions**: a refill sent twice (because the user wasn't sure
  it went through on a bad line) must not create a double order.
- **Zero-rating where possible**: pursue operator zero-rating for the health
  service so cost never blocks a refill.
- **Confirm receipt explicitly**: on poor networks, silence reads as failure;
  always echo "got it" so the user doesn't resend or give up.

## Accessibility (overlaps strongly with the chronic-patient population)

Older and lower-literacy users dominate chronic medication; accessible design
helps them **and everyone** [[src-ux-wcag-older-users-accessibility]]. Baseline
to **WCAG 2.x AA** (Perceivable, Operable, Understandable, Robust):

- **Vision / contrast**: text contrast ≥ **4.5:1** (3:1 large text); high
  contrast aids ageing eyes; base text ≥ **16px**, resizable to **200%** without
  breaking [[src-ux-wcag-older-users-accessibility]].
- **Motor / touch**: generous targets (**≥24×24 CSS px**, ~44px practical for
  touch), forgiving spacing, no precision-dependent gestures
  [[src-ux-wcag-older-users-accessibility]].
- **Cognition / low digital literacy**: **selection over free-text input**,
  one task per screen, explicit step-by-step instructions, consistent and
  predictable navigation, icon **+** text labels, clear/forgiving error recovery.
  These improved older-user performance **without harming younger users**
  [[src-ux-wcag-older-users-accessibility]].
- **Robust**: works with screen readers and assistive tech; semantic structure.

## Low-literacy & multilingual design

- **Plain language + health-literacy universal precautions**: assume some users
  won't fully understand; short common words, active voice, define terms, and use
  **teach-back / Ask Me 3** for dosing and safety
  [[src-ux-ahrq-health-literacy-teachback]].
- **Visual support**: **pictograms** for dosing (sun/moon, with/without food),
  icons, and numbers reduce reliance on reading.
- **Multilingual by design, not afterthought**: offer the **11 official
  languages** (at minimum the locally dominant ones), let users set and remember a
  language, and **translate for comprehension** (idiomatic, reviewed by native
  speakers), not literal machine output for clinical content
  [[src-ux-sa-whatsapp-conversational-commerce]]. Greet in the user's language to
  build trust [[src-ux-sa-whatsapp-conversational-commerce]].
- **Numeracy care**: show prices and dosages simply and concretely.

## How to apply
- Treat the **constraint stack** as fixed design inputs; default the service to
  **low-data, async, resumable, idempotent** [[src-ux-sa-data-cost-digital-divide]].
- Implement a **layered channel ladder** (WhatsApp → USSD → SMS → assisted/human)
  so every core task completes on a feature phone; never make app/web the only
  door [[src-ux-momconnect-ussd-whatsapp]] [[src-ux-nhs-govuk-design-principles]].
- Meet **WCAG AA** and apply the older-user pattern set (large text, high
  contrast, selection inputs, big targets, step-by-step)
  [[src-ux-wcag-older-users-accessibility]].
- Ship **plain-language, pictogram-supported, multilingual** content; use
  teach-back for critical instructions [[src-ux-ahrq-health-literacy-teachback]].
- Use **EAST "easy"** ruthlessly, since every removed step or megabyte raises uptake
  among exactly the users hardest to reach [[src-ux-east-behavioural-insights]].
- Pursue **zero-rating** so cost never blocks a refill.

## Open questions
- Current operator **zero-rating** options for a Dis-Chem health service: verify;
  log to [[meta/open-questions]].
- Which languages to prioritise for the target catchment: needs
  [[wiki/consumer-context/_index|consumer-context]] data.
- USSD session/cost economics for a commercial (non-government) health service in
  SA: see [[wiki/digital-transformation/_index]].

## See also
- [[pharmacy-ux-patterns]] · [[healthcare-service-design-patterns]] ·
  [[journey-mapping-method]] · [[jtbd-and-behavioural-design]] ·
  [[wiki/consumer-context/_index|SA consumer context]]
