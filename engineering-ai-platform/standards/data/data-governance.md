---
id: std-data-governance
scope: data
enforcement: required
---

# Data Governance Standards

- Classify datasets by sensitivity (`public`, `internal`, `confidential`, `restricted/PII`).
- Encrypt sensitive data at rest and in transit; mask or tokenize PII in non-production environments.
- Define explicit retention and deletion policies (TTL / GDPR right-to-erasure) for every user dataset.
- Record data lineage and schema ownership in dataset metadata.
