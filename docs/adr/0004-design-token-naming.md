# 4. Design token naming

Date: 2025-05-13

## Status

Accepted

## Context

Design tokens act as the atomic design values in a system for colors, typography, spacing, and more. Establishing a consistent, hierarchical naming convention for tokens ensures clarity for both designers and developers and promotes ease of use across tooling, theming, and product teams.

This decision follows best practices outlined by Nathan Curtis in [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676). An example of a system that uses this convention is [REI's Cedar Design System](https://cedar.rei.com/tokens/web).

## Decision

We will adopt a structured, multi-level naming convention for design tokens using CSS custom properties. Token names will begin with the prefix `--ai-`, representing the owning design system. The naming convention will follow a clear hierarchy to enable reuse, flexibility, and tooling integration.

### Token Naming Structure

Each token name is composed of optional and required levels:

1. Prefix
   - `--ai-`: Required design system namespace.
2. Object Levels (Optional)
   - `component-group`: Broader group like `forms`, `layout`.
   - `component`: Specific UI element such as `input`, `button`.
   - `element`: Target within the component like `label`, `icon`.
3. Base Levels (Required)
   - `category`: The token type (e.g., `color`, `font`, `space`).
   - `property`: The CSS property or use case (e.g., `background`, `text`, `border`).
   - `concept`: A functional concept like `action`, `brand`, `surface`.
4. Modifier Levels (Optional)
   - `variant`: Visual variant (e.g., `primary`, `error`, `secondary`).
   - `state`: State such as `hover`, `focus`, `disabled`.
   - `scale`: Value size or scale (e.g., `100`, `lg`, `xl`).
   - `mode`: Theme mode or contrast mode (e.g., `on-light`, `on-dark`).

### Examples

```
--ai-color-action-background-primary-hover-on-dark;
--ai-font-heading-size-xl;
--ai-forms-input-label-color-text;
--ai-layout-space-padding-lg;
```

### Principles

- Consistency: Use the same order of levels throughout (prefix → object → base → modifier).
- Clarity: Each level must add meaning and reduce ambiguity.
- Scalability: Token names should support future growth (e.g., themes, modes).
- Completeness: Include only the necessary levels to communicate intent. Avoid unnecessary verbosity.
- Polyhierarchy Support: Tokens can belong to multiple hierarchies (e.g., `--ai-color-border-neutral` and `--ai-color-divider-light` may reference the same value).

## Consequences

### Pros

- Enables scalable and themeable token architecture.
- Improves semantic clarity for usage and tooling.
- Ensures consistency across teams and platforms.

### Cons

- Slight increase in verbosity.
- Requires onboarding and discipline to maintain structure.
