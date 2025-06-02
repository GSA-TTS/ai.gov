import { vi, beforeEach, test, expect, describe } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';

vi.mock('./UsaSkipNav.astro', () => ({
  default: vi.fn()
}));

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
    
    vi.clearAllMocks();
  });

  test('UsaSkipNav renders correctly', async () => {
    const mockRenderToString = vi.spyOn(container, 'renderToString').mockResolvedValue(
      '<a href="#main-content" class="usa-skipnav">Skip to main content</a>'
    );

    const UsaSkipNav = (await import('./UsaSkipNav.astro')).default;
    
    const result = await container.renderToString(UsaSkipNav, {
      ...slots,
    });

    expect(result).toContain('Skip to main content');
    expect(result).toContain('href="#main-content"');
    expect(mockRenderToString).toHaveBeenCalledWith(UsaSkipNav, { ...slots });
  });

  test('UsaSkipNav takes a custom prop for the main content id', async () => {
    const mainContentId = '#override';
    
    const mockRenderToString = vi.spyOn(container, 'renderToString').mockResolvedValue(
      '<a href="#override" class="usa-skipnav">Skip to main content</a>'
    );

    const UsaSkipNav = (await import('./UsaSkipNav.astro')).default;

    const result = await container.renderToString(UsaSkipNav, {
      ...slots,
      props: {
        ...props,
        mainContentId,
      },
    });

    expect(result).toContain('href="#override"');
    expect(mockRenderToString).toHaveBeenCalledWith(UsaSkipNav, {
      ...slots,
      props: { ...props, mainContentId }
    });
  });
});
