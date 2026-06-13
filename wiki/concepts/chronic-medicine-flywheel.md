---
type: wiki
title: "Chronic-medicine flywheel"
domain: concept
status: draft
confidence: high
tags: [concept, topic/chronic, topic/adherence, journey/refill, journey/deliver, domain/schemes, domain/dischem]
created: "2026-06-13"
updated: "2026-06-13"
---

# Chronic-medicine flywheel

The **chronic-medicine flywheel** is the retention engine of a pharmacy serving
people with lifelong conditions. Once a chronic patient is registered, the
service should run a self-reinforcing loop with as little patient effort as
possible:

**register once → auto-dispense on schedule → proactively prompt the refill →
deliver or collect → repeat.**

Each turn lowers the effort and raises the stickiness of the next. The patient
who never runs out and never re-does admin has no reason to switch; the pharmacy
that holds the chronic register holds a predictable, recurring, high-margin
relationship. It is the structural counterpart to
[[wiki/concepts/medication-adherence|adherence]]: the flywheel exists so the
medicine is actually taken, month after month, without the patient having to
fight the system.

This is exactly the courier-chronic model already operating in SA (Pharmacy
Direct, Clicks Direct, Medipost, Dis-Chem Direct/PackMyMeds, Discovery MedXpress)
and mirrored in the public sector by CCMDD. The scheme machinery —
PMB/Chronic-Disease-List registration, DSP nomination — is what authorises the
auto-dispense, so the flywheel must be wired into the funding rails, not bolted on.
Australia's MedAdvisor/auto-refill loop is the polished benchmark.

The flywheel's failure mode is silent: a missed run-out alert, an expired script,
a lapsed chronic registration. Run-out prediction and proactive script-renewal
prompts are what keep it spinning.

## In this vault
- [[wiki/medical-schemes/courier-chronic-pharmacy-models|Courier-chronic pharmacy models]] — the SA chronic-script→delivery model & CCMDD mirror.
- [[wiki/medical-schemes/pmb-cdl-chronic|PMB, CDL & chronic registration]] — what authorises the auto-dispense.
- [[wiki/dischem/dischem-dispensary-services|Dis-Chem dispensary services]] — PackMyMeds and repeat handling today.
- [[wiki/global-benchmarks/australia-chemist-warehouse-escript|Australia — MedAdvisor & auto-refill]] — the polished benchmark loop.

## Design stance
Default chronic patients into the loop (with consent), predict run-out and renew
proactively, and wire the flywheel directly into scheme registration and DSP
rails. Treat a lapsed registration or expired repeat as a P1 incident, not a
customer error — the best refill is the one the patient didn't have to initiate.
