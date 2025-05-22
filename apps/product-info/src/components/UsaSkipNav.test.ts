import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { test, expect, describe, beforeEach } from 'vitest';
// @ts-ignore
import UsaSkipNav from './UsaSkipNav.astro';

type UsaSkipNavSlots = Record<string, unknown>;
type UsaSkipNavProps = {
  mainContentId?: string;
};

describe('UsaSkipNav', () => {
  let container: AstroContainer;
  let slots: UsaSkipNavSlots;
  let props: UsaSkipNavProps;

  beforeEach(async () => {
    container = await AstroContainer.create();
    slots = {};
    props = {};
  });

  test('UsaSkipNav renders correctly', async () => {
    const result = await container.renderToString(UsaSkipNav, {
      ...slots,
    });

    expect(result).toContain('Skip to main content');
    expect(result).toContain('href="#main-content"');
  });

  test('UsaSkipNav takes a custom prop for the main content id', async () => {
    const mainContentId = '#override';
    const result = await container.renderToString(UsaSkipNav, {
      ...slots,
      props: {
        ...props,
        mainContentId,
      },
    });

    expect(result).toContain('href="#override"');
  });
});
