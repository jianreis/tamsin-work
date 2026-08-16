---
type: wiki
title: "Remote collection points"
domain: concept
status: draft
confidence: medium
tags: [concept, topic/last-mile, topic/accessibility, journey/collect, domain/regulatory, domain/digital, domain/consumer, region/za]
sources: [src-access-ward-pharmacy-equity-2014, src-access-moodley-suleman-ownership-2020, src-access-sa-community-pharmacy-sector-2023, src-access-last-kilometre-delivery-2021, src-capitec-dha-smart-id-partnership, src-capitec-branch-atm-footprint-2026, src-capitec-dischem-tlc-small-town-reach, src-reg-gpp-courier-mail-delivery-standard, src-reg-sapc-automated-dispensing-unit-application, src-reg-ccmdd-pickup-point-handover, src-reg-uk-supervision-order-2025, src-reg-us-nc-direct-to-patient-delivery-systems, src-coldchain-ccmdd-insulin-exclusion, src-coldchain-rightepharmacy-collectandgo, src-coldchain-japha-mail-transit-excursions, src-coldchain-usp-659-storage-temperatures]
created: "2026-08-16"
updated: "2026-08-16"
---

# Remote collection points

A **remote collection point** is a place away from a pharmacy where a patient
takes possession of medicine that has already been dispensed and checked by a
pharmacist. It is the answer to a problem South Africa has not solved by
building more pharmacies: **the country runs roughly one community pharmacy per
17,300 people, about a fifth of the global average**, and the shortfall is
worst exactly where the need is greatest [[src-access-sa-community-pharmacy-sector-2023]]
[[src-access-fip-community-pharmacy-2021]].

This page is the synthesis hub for that idea. It separates the two problems
remote collection is asked to solve, sets out what the evidence supports, and
records the one design decision that determines whether the model is lawful.

**Reliability caveat on this whole page.** The research behind it was gathered
under an egress policy that blocked direct retrieval of every regulator,
publisher and company document. Figures and rule wording come from search
indexes and abstracts, not primary PDFs. Each source note names what must be
verified. Treat this as a well-triangulated map, not a citable legal position.

## Two problems, not one

Conflating these produces a muddled concept. They want different partners,
different arguments and different evidence.

| | **No address** | **No pharmacy** |
|---|---|---|
| The problem | Delivery cannot find you | There is nothing near enough to collect from |
| Who has it | Peri-urban and informal settlements - [[design-kit/personas/low-data-whatsapp-first-peri-urban\|Sipho]] | Small towns and rural districts |
| What fixes it | A findable named point near home | A node where no pharmacy is viable |
| Evidence | Strong: addressing failure is well documented [[src-con-pargo-pudo-lastmile]] | Strong on density, absent on distance (see below) |
| Best partner | Any dense pickup network - Pargo covers >87% of postal codes | A partner whose footprint reaches where retail pharmacy does not |

## The access gap is structural, not spatial

The honest framing is **maldistribution**, not distance. Nobody has computed a
South African "pharmacy desert" figure - **no published percentage of the
population beyond a given distance from a retail pharmacy exists**, and the
clinic-distance proxies understate the gap because the pharmacy estate is
thinner than the clinic estate [[src-access-mclaren-distance-decay-2014]].

What the evidence does carry:

- **~3,580 registered community pharmacies** (2021 SAPC records), of which
  **1,253 (35%) sit in Gauteng**, a province holding about 24% of the
  population [[src-access-sa-community-pharmacy-sector-2023]].
- **Density is falling.** Pharmacy numbers grew 13% between 1994 and 2012
  against 25% population growth, and density was **eight times higher in the
  least deprived districts than the most deprived** [[src-access-ward-pharmacy-equity-2014]].
- **Only two of nine provinces** met one pharmacy per 10,000 residents. All
  nine met it only once public clinics were counted alongside pharmacies -
  the quantified form of "for most South Africans the clinic is the pharmacy"
  [[src-access-ward-pharmacy-equity-2014]].
- **The market has already declined the job.** Of 2,019 pharmacies opened after
  the 2003 ownership deregulation - the policy lever intended to widen access -
  **52% went to Gauteng, Western Cape and KwaZulu-Natal**, and the authors
  conclude it did not substantially improve access for rural and previously
  disadvantaged areas [[src-access-moodley-suleman-ownership-2020]].

**Counter-evidence that must travel with the concept.** The one South African
study that asked patients directly found **96.8% preferred delivery to their
home** over collecting at a point, even though 80% wanted delivery and 78%
would pay for it while receiving medicine free [[src-access-last-kilometre-delivery-2021]].
Collection points win on cost, addressing reality and operability - **not on
stated preference**. Any deck that claims customers are asking for lockers is
overstating the record.

## The regulatory position: a Council conflict, not a legislative gap

South African law does not address the moment of handover at a remote point in
either direction. No provision found uses "collection point", "locker" or
"pick-up point". The question turns on the **Medicines Act s22A(5)**, which
restricts the *sale* of scheduled substances to a pharmacist or assistant under
personal supervision - and on where the sale is deemed to conclude
[[src-reg-handover-medicines-act-s22a-sale]]. Nothing found resolves it.

Two Council instruments point opposite ways:

- **Permissive - the GPP mail and courier standard.** It contemplates a
  pharmacist supplying medicine through the mail or courier "to a patient or to
  a person who receives medicine on behalf of the patient", subject only to
  protective packaging, delay detection, a report-back system and a patient
  information leaflet. **No pharmacist presence at receipt, no counselling at
  receipt.** GPP separately contemplates a locked, unattended prescription
  receiving box, so the rules already accommodate unattended infrastructure
  [[src-reg-gpp-courier-mail-delivery-standard]].
- **Restrictive - the SAPC automated dispensing unit conditions.** The published
  conditions specify that the unit delivers scheduled medicines **to the
  pharmacist**, with access limited to pharmacist, intern and pharmacist's
  assistant. **The patient is not on that list**
  [[src-reg-sapc-automated-dispensing-unit-application]].

Because both are Council instruments, this reads as a matter **requiring an
SAPC determination rather than statutory reform** - and SAPC has a demonstrated
mechanism for absorbing new dispensing technology, adding minimum standards to
GPP by board notice [[src-reg-sapc-unit-dose-dispensing-bn99]].

**The sobering comparator.** The United Kingdom asked this exact question and
needed **new legislation**: until 7 January 2026 handing a checked prescription
to a patient in the pharmacist's absence was unlawful, and even after the
Human Medicines Order 2025 the handover must be performed by a competent member
of the pharmacy team - **not by a machine** [[src-reg-uk-supervision-order-2025]].
If a South African regulator reads the sale as concluding in the patient's
hands, the same outcome follows here.

## CCMDD is a weaker precedent than it looks

CCMDD and Pelebox prove the pattern works at national scale - 2.9m active
patients, **64% collecting at external pick-up points**, 342 post offices
handing over chronic medicine [[src-coldchain-ccmdd-pickup-point-model]]
[[src-reg-post-office-chronic-medicine-collection]]. But **no statutory
exemption, gazetted authorisation or Council determination was found**. The
programme runs on National Department of Health policy and standard operating
procedures, on an implicit two-limb theory: dispensing completes at the licensed
service-provider pharmacy so the pick-up point performs distribution rather than
dispensing, and **no sale occurs because the State issues free**
[[src-reg-ccmdd-pickup-point-handover]].

**The second limb fails outright in private retail**, where medicine is sold.
CCMDD is regulatory tolerance of a public-health programme, not transferable
authority. Cite it as proof of operability, never as proof of legality.

Note the counter-signal: the same operator's flagship medication ATM **kept a
live pharmacist at handover by audio-video link**. South Africa's showcase
automation chose presence-by-video over absence
[[src-reg-pharmacy-dispensing-unit-telepharmacy]].

## The design decision that determines lawfulness

**Make pharmacist availability a release condition, not an after-the-fact
courtesy: if no pharmacist is reachable, the unit does not open.**

This is the pattern regulators elsewhere have actually required. North Carolina's
direct-to-patient delivery-system rule obliges the operator to convey the offer
to counsel, provide **immediate real-time** pharmacist consultation, permit the
pharmacist to **force counselling before release**, and **close the unit if the
link fails or no pharmacist is available** - fail-closed, not fail-open
[[src-reg-us-nc-direct-to-patient-delivery-systems]]. A phone number printed on
a label does not meet that bar.

It resolves three problems at once:

1. **The Council conflict** - the pharmacist is present, by link rather than in
   person, which is the posture SA's own automation already adopted.
2. **Counselling** - GPP's dispensing standard requires provision of information
   to ensure optimum use but **specifies no channel**, no synchronicity and no
   co-location [[src-reg-gpp-dispensing-phases-counselling]]. A named pharmacist
   on WhatsApp in the patient's language **over-delivers** against the courier
   standard, which substitutes a leaflet for the conversation.
3. **Safety** - a PIN pad cannot refuse a handover the way a person can.

Two further conditions materially improve the odds, both borrowed from
practice elsewhere: restrict to **clinically stable repeat patients**, mirroring
CCMDD's stability gate, and **exclude S5 and S6 entirely at launch**; and verify
identity by something stronger than a PIN alone.

**Contrast with in-store express collection**, which is a different posture and
correctly so. At a store the pharmacist must be *available and declinable* -
the customer may choose not to speak to anyone. At a remote point the pharmacist
must be *available or nothing opens*.

## Cold chain: shelf-stable only, and shelf-stable is not "no requirement"

**Excluding cold chain costs almost nothing.** Cold-chain products are about
**0.2% of prescription volume** (though 32% of revenue), and South Africa's
largest decentralised repeat programme already made this exact call - CCMDD
cannot distribute insulin, so type 1 and failed type 2 diabetics cannot enrol
[[src-coldchain-iqvia-coldchain-share]] [[src-coldchain-ccmdd-insulin-exclusion]].
The constraint is inherited, not invented, which is a far easier story for a
regulator.

**But an ambient rail is not a passive box.** USP controlled room temperature is
**20-25°C with a 25°C mean-kinetic ceiling**, not an absence of requirement
[[src-coldchain-usp-659-storage-temperatures]]. The measured evidence on
unattended endpoints is unambiguous and bad:

- Logger-instrumented mail parcels spent a **mean 68% of transit time outside
  controlled room temperature**; only 8.4% stayed within allowable excursions
  [[src-coldchain-japha-mail-transit-excursions]].
- Inside uninsulated steel in **Johannesburg** - one of SA's mildest large-city
  climates - apparent temperature ran **7°C above outdoor on average, peaking
  at 42°C** [[src-coldchain-joburg-container-heat]]. Upington already averages
  83 days a year above 35°C [[src-coldchain-sa-heat-extremes]].
- **No measured internal temperature data exists for any parcel locker
  anywhere.** Vendors publish enclosure survival envelopes, which describe what
  the hardware endures, not what a parcel experiences
  [[src-coldchain-refrigerated-locker-vendors]].

The rule should therefore read **conditioned and monitored ambient only, with
cold chain on a separate route** - which is what Right ePharmacy's Collect&Go
lockers already do in South Africa: built-in air conditioning, remote
temperature monitoring to a cloud service, 335,544 prescriptions across 39
Gauteng sites [[src-coldchain-rightepharmacy-collectandgo]].

**The load-shedding argument has expired; use power dependency instead.** South
Africa reached **300 consecutive days without load-shedding at 12 March 2026**
[[src-coldchain-eskom-loadshedding-status-2026]]. The durable argument is that a
conditioned unit needs continuous mains power and that power cycling degrades
refrigeration plant regardless of outage frequency
[[src-coldchain-gcca-loadshedding-resilience]], with Eskom's own 2026 winter
high-risk case still contemplating stages 2-6.

## Choosing the node: start with the pharmacies you already reach

A tiered network is both the cheaper answer and the lawful one:

1. **Dis-Chem stores** - 316 retail pharmacies. Where one is near, nothing else
   is needed.
2. **The Local Choice franchises and serviced independents** - 280 TLC stores
   with management seeing room for 500, plus **1,000+ independents Dis-Chem
   services, many in small and rural towns** [[src-capitec-dischem-tlc-small-town-reach]].
   These are licensed pharmacies with a pharmacist on site, so **the release
   condition is satisfied by a human and no determination is required**.
3. **Partner points** - only where neither of the above reaches.

This sequencing means the concept can ship while the regulatory question is
still open, rather than waiting on Council.

### On a bank branch as the partner point

**Capitec is a defensible choice, and the strongest argument is not the one
usually made.** Its footprint is **885 branches and 8,771 ATMs against
Dis-Chem's 316 stores**, described as covering suburbs, townships and rural
areas, and it planned net growth in both while the large banks contracted
[[src-capitec-branch-atm-footprint-2026]]. The commercial relationship is
already deep: Dis-Chem Better Rewards launched in October 2025 with **Capitec as
its only banking partner**, and Dis-Chem attributes 550,000 new rewards
customers to it [[src-capitec-dischem-better-rewards-2025]].

The security case holds - **two bank robberies nationally in 2025**, ATM attacks
down 46% [[src-capitec-sabric-crime-stats-2025]] - but the decisive evidence is
architectural. Since August 2025 Capitec branches host **Home Affairs Smart ID
and passport applications: 127 branches live, 250,000+ applications, with no
Home Affairs staff on site** [[src-capitec-dha-smart-id-partnership]]. That is a
working South African precedent for a regulated, identity-bound handover
executed in a bank branch under a remote authority's control - which is
precisely the architecture a remote medicine collection point needs.

⚠️ **Not established:** how many towns have a Capitec but no Dis-Chem or TLC
pharmacy. Neither company publishes a town-level list, and the figure would have
to be derived from both store locators. The "in every town" claim rests on it.

⚠️ **Bank-hosted parcel collection has thin precedent.** The UK Post Office and
InPost began a trial in November 2025; two US banking pilots showed no evidence
of scaling; **no South African precedent exists**, and the traffic runs the other
way - Capitec puts banking into retailers, with cash deposits at ~1,400 Pick n
Pay tills [[src-capitec-bank-hosted-parcel-precedent]] [[src-capitec-retail-till-banking-picknpay]].

**Cash at the counter is a commercial-terms question, not a service-design one.**
Paying cash where you bank is natural, and a customer drawing cash and settling
for medicine in one stop is an argument for the model rather than against it.
The friction sits on the bank's side: Capitec prices branch note deposits at
**R4.00 per R100 against R1.40 at an ATM**, and its security record was bought
partly by moving cash out of branches. If cash release survives, it belongs in
the merchant tier, which is a matter for the two companies' commercial teams.

## Open questions

- The proportion of South Africans beyond a given distance from a **retail
  pharmacy** - the actual desert figure. Does not exist in the literature.
- Towns with a Capitec branch but no Dis-Chem or TLC pharmacy. Requires both
  store locators.
- The full text of SAPC's automated dispensing unit conditions and the GPP
  courier standard's rule number and exact wording. Blocked at retrieval;
  **needs a person to open the PDFs**, and is the highest-value gap in this set.
- Whether Pargo and PUDO formally accept or refuse prescription medicines.
  Pargo prohibits all liquids and excludes perishables but does not name
  medicines, and **Dis-Chem already operates Pargo pickup points**
  [[src-coldchain-sa-pickup-networks-carriage-limits]].
- Whether insulin's in-use tolerance (below 25-30°C for about 28 days) could
  reopen cold chain on a monitored short-dwell rail. A roadmap item with a
  named evidence dependency, not a phase-one scope
  [[src-coldchain-insulin-storage-stability]].

## See also

- [[wiki/consumer-context/last-mile-addressing-logistics]] - addressing, pickup networks, power
- [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]] - supervision and GPP
- [[wiki/digital-transformation/pharmacy-automation-and-robotics]] - the units themselves
- [[wiki/digital-transformation/telepharmacy-and-omnichannel]] - remote pharmacist models
- [[wiki/dispensing-practice/inventory-coldchain-controlled]] - storage requirements
- [[wiki/medical-schemes/courier-chronic-pharmacy-models]] - CCMDD and courier pharmacy
- [[wiki/concepts/omnichannel-fulfilment]] - the fulfilment channel set
