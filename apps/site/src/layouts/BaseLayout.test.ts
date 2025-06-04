import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { test, expect, describe, beforeEach } from 'vitest';
import BaseLayout from './BaseLayout.astro';

describe('BaseLayout', () => {
  let container: AstroContainer;

  beforeEach(async () => {
    container = await AstroContainer.create();
  });

  test('Provides a default value for the skip link', async () => {
    const result = await container.renderToString(BaseLayout, {
      slots: {},
    });

    expect(result).toContain('Skip to main content');
  });

  test('Can override the skip link', async () => {
    const link = `<a href="#">Jump to main content</a>`;
    const result = await container.renderToString(BaseLayout, {
      slots: {
        'skip-nav': link,
      },
    });

    expect(result).to.contain(link);
    expect(result).not.toContain('Skip to main content');
  });

  test('Can remove the skip link', async () => {
    const result = await container.renderToString(BaseLayout, {
      slots: {
        'skip-nav': '',
      },
    });

    expect(result).not.toContain('Skip to main content');
  });
});
