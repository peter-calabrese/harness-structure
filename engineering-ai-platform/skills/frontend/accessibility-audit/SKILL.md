---
name: accessibility-audit
description: Audit UI components and pages against WCAG 2.2 AA standards.
domain: frontend
version: 1.0.0
---

# Accessibility Audit Skill

## When to Use

After creating or modifying any interactive UI component or page layout.

## Workflow Steps

1. Verify semantic landmarks (`main`, `nav`, `header`) and heading hierarchy (`h1` -> `h2`).
2. Test full keyboard navigation (`Tab`, `Enter`, `Space`, `Escape`, arrow keys) and visible focus rings.
3. Check form labels, `aria-describedby` error associations, and `aria-live` regions.
4. Confirm color contrast ratios meet WCAG 2.2 AA (>= 4.5:1 text, >= 3:1 UI).
