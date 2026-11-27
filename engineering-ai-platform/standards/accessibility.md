---
id: std-accessibility
scope: global
enforcement: required
---

# Accessibility Standards

## WCAG 2.2 AA Baseline

- **Semantic HTML first**: Use native `<button>`, `<a>`, `<input>`, `<nav>`, and landmark elements before `aria-*` attributes.
- **Keyboard navigation**: All interactive elements must be reachable and operable via keyboard with visible focus indicators.
- **Color & contrast**: Maintain >= 4.5:1 contrast for normal text and >= 3:1 for large text and UI components.
- **Screen readers**: Provide meaningful `alt` text, form `<label>` associations, and `aria-live` announcements for async updates.
