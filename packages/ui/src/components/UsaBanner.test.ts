import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { test, expect, describe } from 'vitest';
import UsaBanner from './UsaBanner.astro';

describe('UsaBanner', () => {
  test('UsaBanner renders correctly', async () => {
    const container: AstroContainer = await AstroContainer.create();
    const result = await container.renderToString(UsaBanner, {
      slots: {},
    });

    expect(result).toContain(
      'Official website of the United States government'
    );
  });
});
