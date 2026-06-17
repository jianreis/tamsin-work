---
type: wiki
title: "Health-seeking behaviour, chronic burden & adherence"
domain: consumer-context
status: draft
confidence: medium
tags: [domain/consumer, region/za, topic/chronic, topic/adherence, journey/refill, journey/adhere]
sources: [src-con-health-seeking-traditional, src-con-chronic-disease-burden, src-con-adherence-stigma, src-con-ccmdd-ndoh, src-con-pelebox, src-con-oop-health-spend, src-con-spaza-township]
created: "2026-06-13"
updated: "2026-06-17"
---

# Health-seeking behaviour, chronic burden & adherence

Where South Africans actually get medicines is shaped by **cost, proximity, and
the public/private split**. The majority use **public clinics** and increasingly
collect chronic medicine through **CCMDD pick-up points and Pelebox lockers**; the
insured minority use private GPs, retail pharmacy, and courier pharmacy. The demand
is dominated by **chronic disease** — SA has the world's largest HIV programme plus
a rising burden of hypertension, diabetes, TB, and largely-untreated mental
illness. Adherence failures are mostly driven by **system friction and stigma, not
patient indifference**, which is the design space a better scripting
experience can address.

## Where South Africans get medicines

First contact is overwhelmingly **public-sector**: ~**70–81% of (black) households
consult public facilities first**, ~17% private first, ~1.5% "other"
[[src-con-health-seeking-traditional]]. The channels in practice:
- **Public clinics & hospitals**: free/low-cost, but with **long queues, travel
  cost, stock-outs**, and confidentiality concerns [[src-con-adherence-stigma]].
- **CCMDD pick-up points**: for **stable chronic** public patients, collecting
  pre-packed parcels every 2–3 months at a community PUP (retail pharmacy, school,
  church, workplace); **>4.9m enrolled, ~64% at external points, >3,000 PUPs**
  [[src-con-ccmdd-ndoh]]. **Pelebox lockers** add an SMS+PIN, no-app, sub-minute
  self-service collection layer on top of CCMDD [[src-con-pelebox]].
- **Retail pharmacy** (Dis-Chem, Clicks, independents): for the insured and for
  cash OTC/scripts; trusted pharmacist access without an appointment.
- **Courier/distance pharmacy** (Pharmacy Direct, Medipost): scheme-funded chronic
  delivery at scale [[src-courier-pharmacies-sa]].
- **Spaza shops / informal**: OTC and household remedies bought close to home, in
  cash [[src-con-spaza-township]].
- **Traditional/faith healers**: a minority first-contact (~1.5%) but culturally
  salient and often used **alongside** biomedical care
  [[src-con-health-seeking-traditional]].

The dominant cost the consumer feels is **the trip and the queue** as much as the
medicine price: OOP includes travel and time [[src-con-oop-health-spend]]. Anything
that **removes a journey** is high-value.

## The chronic-disease burden (the demand driver)

Repeat scripting is dominated by stable chronic patients:
- **HIV:** SA has the **largest HIV population in the world (~7.9m PLHIV)** and the
  largest ART programme; ART since 2004 has driven rising life expectancy
  [[src-con-chronic-disease-burden]].
- **TB:** persistently high burden, frequently as **HIV/TB co-infection**
  [[src-con-chronic-disease-burden]].
- **Hypertension & diabetes:** the leading NCDs and rising, hypertension ~**14.3%**,
  diabetes ~**4.4%** in studied cohorts, climbing with ageing/obesity
  [[src-con-chronic-disease-burden]].
- **Mental health:** depression and anxiety each ~**4–5%** of adults, lifetime
  any-disorder ~**30%**, with a ~**75% treatment gap** [[src-con-adherence-stigma]].
- **Multi-morbidity:** HIV + hypertension/diabetes and HIV + TB are increasingly
  common, with many patients on **several concurrent chronic medicines**
  [[src-con-chronic-disease-burden]].

This is the **CCMDD-eligible cohort**: large, stable, repeat, and multi-medicine,
the natural anchor for a future-state repeat-scripting and collection experience.

## Adherence - challenges and drivers

Adherence research is consistent: barriers are mainly **system- and stigma-related**,
not patient apathy [[src-con-adherence-stigma]]:
- **System friction:** long clinic waits, travel cost/distance, stock-outs, poor
  follow-up, inflexible refill dates, weak clinic↔pick-up-point communication.
- **Stigma & disclosure fear:** especially HIV and mental health, with fear of being
  seen collecting, of status disclosure, of community judgement.
- **Literacy:** poor treatment literacy (why continue when "well"?).

What helps (the design levers):
- **Decentralised collection** (CCMDD/Pelebox): shorter waits, convenient hours,
  **less stigma**; patients explicitly value it [[src-con-adherence-stigma]],
  [[src-con-pelebox]].
- **Reminders** (SMS/WhatsApp): help, but real-world gains are **modest** and
  implementation is fragile (wrong refill dates, date inflexibility); reminders
  must be **accurate, well-timed, and discreet** to add value
  [[src-con-adherence-stigma]].
- **Privacy and respect:** neutral packaging/wording, personal PINs (see
  [[wiki/consumer-context/language-literacy-and-trust]]).

## Design implications

- Anchor on the stable-chronic, multi-medicine refill, the dominant, highest-
  value use case; make recurring refills effortless and predictable.
- Remove trips and queues. Every avoided journey is a real cost saved for the
  patient; collection-at-a-known-point and proactive refill prep are the wins
  (cross-ref [[wiki/consumer-context/last-mile-addressing-logistics]]).
- Bridge public and private: retail pharmacies are already CCMDD points, so a
  future experience could serve **both** scheme members and CCMDD/cash patients
  through the same collection rails.
- Make reminders accurate, timely, and discreet. Bad reminders (wrong dates,
  exposing wording) erode trust; good ones support adherence.
- Design for multi-medicine regimens: consolidate a patient's several chronic
  scripts into one prepared parcel and one collection event.
- Reduce stigma structurally through neutral parcels, private PIN collection,
  and non-judgemental, multilingual communication.

## Open questions

- Up-to-date, **nationally representative** prevalence figures (HIV/TB/HTN/DM):
  figures here mix cohorts/years; firm them against UNAIDS/Stats SA/NDoH latest.
  ⚠️ UNVERIFIED (exact current prevalences).
- Share of chronic patients who **combine biomedical with traditional** care, and
  how that affects adherence/disclosure: older evidence only. ⚠️ UNVERIFIED.
- Measured adherence uplift from **WhatsApp-based** (vs SMS) reminders in SA: gap.
- Whether a retail experience could **enrol/serve CCMDD patients** end-to-end given
  public-sector procurement rules. 🔮 likely needs partnership/reform.
  ⚠️ UNVERIFIED.

## See also
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/language-literacy-and-trust]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/medical-schemes/_index]]
- [[wiki/consumer-context/_index]]
