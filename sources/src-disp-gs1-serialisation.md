---
type: source
title: "Pharmaceutical serialisation and traceability (GS1 standards; EU Falsified Medicines Directive)"
url: "https://www.gs1.org/sites/default/files/docs/GS1%20Healthcare%20Serialisation%20and%20Traceability%20Use%20Case%20HC%20Website%20version.pdf"
author: "GS1; corroborated by IFPMA traceability position"
publisher: "GS1 Healthcare; IFPMA"
published: "2021-01-01"
retrieved: "2026-06-13"
source_kind: industry-report
reliability: A
tags: [domain/dispensing, topic/automation, topic/trust-safety, journey/dispense, region/global]
---

## Summary

Explains how serialisation and track-and-trace combat falsified medicines:
unique serial numbers per pack, encoded in GS1 DataMatrix/GS1-128 barcodes,
verified at dispense. Context for NAPPI/barcode scanning and SA's authentication
direction. Direct fetch returned HTTP 403 on 2026-06-13; claims drawn from GS1
and explainer search extracts.

## Key claims

- **Serialisation** assigns a **unique serial number to each pharmaceutical
  pack**, enabling identification and tracking across the supply chain.
- Identifiers are encoded into **GS1 DataMatrix or GS1-128 barcodes**, the
  global standard adopted across the EU, USA and others.
- Under the EU **Falsified Medicines Directive (2011/62; live 2019)**,
  **pharmacies scan and verify the barcode** against the European Medicines
  Verification System **before handing medicine to the patient**, then
  **decommission** the pack.
- The system's purpose is to **verify authenticity and combat counterfeit /
  falsified medicines** and provide supply-chain transparency.
- In South Africa, medicine packs carry **NAPPI codes** (a national product
  identifier widely used for pricing/claims and barcode scanning at dispense),
  though full item-level serialisation is not yet a universal regulatory
  requirement.

## Verbatim excerpts

> "Pharmaceutical serialization is a process of assigning a unique serial number
> to each pharmaceutical package; goods can be identified and tracked throughout
> the entire pharmaceutical supply chain."

> "Pharmacies … that dispense pharmaceuticals … scan the barcode and verify it
> via the European Medicines Verification System (EMVS) before the medication is
> handed over."

## Used in
- [[inventory-coldchain-controlled]]
- [[error-prevention-and-safety]]
