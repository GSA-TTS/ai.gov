# 8. Style Tokens

Date: 2025-05-29

## Status

Accepted

## Context

The project requires a single source of truth for design tokens that can be used by designers or developers to develop a design language and keep things consistent across a UI. 

## Decision

The development team has suggested an approach that uses [style dictionary](https://styledictionary.com/) as the source of truth for design tokens. 

## Consequences

Style dictionary emerged from the AWS ecosystem, so it has documented success working at scale. It can output token values in a variety of formats including CSS variables, JSON, and can be imported into tools like Figma that are the current standard for designers.

There is a draft and community initiative from the [W3C on design tokens](https://www.w3.org/community/design-tokens/), and any future standard could be supported through the use of transforms style dictionary's output.

## Conventions

By convention, color values in light mode should get darker as the integer value goes up. `--ai-color-10` is closer to white than `--ai-color-50`.

Sizing tokens should mirror what their equivalent pixel units would be. For example, `--ai-size-16` should be `1rem`, which is the equivalent of `16px` at the default browser and OS font size for current devices. 
