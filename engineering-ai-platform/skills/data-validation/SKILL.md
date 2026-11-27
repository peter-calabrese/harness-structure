---
name: data-validation
description: Validate data quality, schema contracts, PII masking, and pipeline invariants.
domain: data
version: 1.0.0
---

# Data Validation Skill

## When to Use

When building ETL/ELT pipelines, data contracts, or non-production anonymization scripts.

## Workflow Steps

1. Assert non-null, uniqueness, referential, and range invariants at ingestion boundaries.
2. Verify PII fields are masked or tokenized in non-production datasets.
3. Validate retention TTLs and deletion workflows against `standards/data/data-governance.md`.
