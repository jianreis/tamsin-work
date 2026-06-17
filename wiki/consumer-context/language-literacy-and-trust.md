---
type: wiki
title: "Language, health literacy, trust & stigma"
domain: consumer-context
status: draft
confidence: medium
tags: [domain/consumer, region/za, topic/trust-safety, topic/accessibility, topic/adherence]
sources: [src-con-languages-census2022, src-con-health-seeking-traditional, src-con-adherence-stigma]
created: "2026-06-13"
updated: "2026-06-17"
---

# Language, health literacy, trust & stigma

South Africa is **multilingual, multi-literate, and stigma-sensitive**. No single
language is spoken at home by even a quarter of the population, English (the default
of most apps and labels) is a home language for fewer than one in ten, and health
information competes with low health literacy and deep, well-founded fears about
**privacy and disclosure** — especially around HIV, mental health, and chronic
illness. A scripting experience that is English-only, jargon-heavy, or careless
with privacy will exclude or alienate the majority. Trust is **earned per channel**:
South Africans extend it to pharmacists and clinics differently than to apps.

## 12 official languages - English is a minority home language

SA recognises **12 official languages** (the historical "11" plus **South African
Sign Language**, added 2023) [[src-con-languages-census2022]]. Census 2022 home
languages: **isiZulu 24.4%, isiXhosa 16.3%, Afrikaans 10.6%, English 8.7%**,
Sesotho 7.8%, then Setswana, Sepedi, Xitsonga (4.7%), siSwati (2.8%), Tshivenda
(2.5%), isiNdebele (1.7%) [[src-con-languages-census2022]]. **English, the default
language of apps, packaging, and dosage instructions, is a home language for only
~8.7%** [[src-con-languages-census2022]]. Most people navigate health information in
a **second or third language**, raising the cost of misunderstanding for something
as consequential as medicine instructions.

## Health literacy

Beyond language, **health literacy is uneven**. Adherence research repeatedly cites
**poor treatment literacy** as a system-level barrier — patients do not always
understand regimens, refill timing, or why stable chronic disease still needs
continuous medicine [[src-con-adherence-stigma]]. Instructions written in clinical
register, or only in English, compound this. **Plain-language, multilingual, and
visual/icon-based** dosage and status communication works as a
clinical-safety and adherence lever, not a nicety.

## Trust: pharmacists vs clinics vs doctors vs traditional healers

Where South Africans actually turn first is **public health facilities**: ~**70–81%
of (black) households consult the public sector first**, ~17% private first, and
only ~**1.5% "other" (traditional/spiritual) first** [[src-con-health-seeking-traditional]].
This corrects a persistent myth: **the claim that 80% regularly use traditional
healers is unproven/false** (Africa Check) [[src-con-health-seeking-traditional]].
Traditional and faith healers nonetheless retain **cultural salience** and are
often used **alongside** biomedical care (continuity of care, belief in efficacy),
particularly for chronic, HIV, and mental-health concerns [[src-con-health-seeking-traditional]].

The **pharmacist** is a trusted, accessible health professional, often the
first or only clinician an uninsured person can reach without an appointment or fee,
but trust is **relational and channel-specific**: confidence in a known pharmacist
does not automatically transfer to a pharmacy **app** or a **WhatsApp bot**. A
digital experience must **borrow the pharmacist's credibility** (human-in-the-loop,
named professional oversight, clear "a pharmacist checked this") rather than ask
users to trust an anonymous interface.

## Stigma & privacy expectations

Stigma is a primary, evidence-backed driver of non-adherence and avoidance:
- **HIV:** fear of **unintended status disclosure** and community stigma is among
  the strongest adherence barriers; decentralised collection is valued precisely
  because it **reduces visibility/stigma** vs queueing at an HIV clinic
  [[src-con-adherence-stigma]].
- **Mental health:** ~**75% treatment gap** for common mental disorders; depression
  and anxiety each ~**4–5%** of adults, lifetime any-disorder ~**30%**, with stigma,
  cost, and under-resourced services keeping most untreated [[src-con-adherence-stigma]].
- **Chronic illness** generally carries disclosure sensitivity in family/community
  and workplace contexts.

This sets a high bar for **privacy** (also a POPIA legal requirement, see
[[wiki/sa-regulatory/_index|regulatory]]): visible packaging, household-shared
devices, group notifications, and "your HIV meds are ready" SMSes can all **out** a
person. **Discreet by default** - neutral packaging, neutral notification wording,
personal PINs, the ability to collect without a clinician audience - is a trust
prerequisite rather than a feature. The Pelebox model's neutral "brown box" + private PIN
collection is instructive (see [[wiki/consumer-context/last-mile-addressing-logistics]]).

## Design implications

- Be multilingual by design: at minimum offer the major home languages (isiZulu,
  isiXhosa, Afrikaans, English, Sesotho) for core flows, dosage instructions, and
  status messages; use **plain language and icons**, not clinical jargon.
- Borrow pharmacist trust: make human/pharmacist oversight visible, signal
  "checked by a pharmacist", and offer a route to a real person for clinical questions.
- Stay discreet by default: neutral notification wording and packaging, never naming a
  stigmatised condition in a message that others might see, and assuming **shared
  devices**.
- Make privacy a headline promise, not buried small print: POPIA-aligned consent,
  clear data use, personal PIN/OTP for collection.
- Don't over-index on traditional healers as a channel, but **respect
  pluralism**: people may combine biomedical and traditional care, and non-judgemental
  framing supports honest disclosure and adherence.

## Open questions

- Current, **granular trust rankings** (pharmacist vs clinic vs doctor vs app) for
  SA consumers: older/partial evidence here; the channel-specific-trust claim is a
  reasoned synthesis, not a measured figure. ⚠️ UNVERIFIED.
- Which **language set** is the right minimum for the Dis-Chem catchment
  (province/store dependent): needs catchment-level data.
- Effectiveness and acceptability of **icon-based / pictographic** dosage
  instructions for low-literacy users in the SA context: design-research gap.
- How users perceive **WhatsApp Business** privacy for sensitive health data given
  shared-device norms. ⚠️ UNVERIFIED.

## See also
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/_index]]
