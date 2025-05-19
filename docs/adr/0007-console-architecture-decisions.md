# 6. Design system

Date: 2025-05-16

## Status

Accepted

## Context

The AI Platform project requires a description of Console architecture decisions. 

## Decision

The Console team creates a separate astro app (`console`) within the ai.gov monorepo similar to `site` and utilize shared components between the apps.

## Alternatives Considered

In parallel with the assessment of a separate `console` app, integration and extension into the current `site` app was also assessed.

To do this, engineering built a separate `console` app along with extending the `site` app with console routes and then came together to discuss the pros and cons of each.


## Consequences

A separate `console` app within the monorepo has several benefits:

- Clear separation of concerns

Each app has a distinct purpose and code base.

- Independent deployment

Risk reduction when making updates.

- Performance benefits

Smaller bundles for each app.

- Team scalability

Different teams can work on different apps with clearer ownership boundries.

- Technology divergence 

Can optimize each app for its specific use case.
