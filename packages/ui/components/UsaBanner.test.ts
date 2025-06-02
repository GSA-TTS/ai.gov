import { vi, test, expect, describe, beforeEach } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';

vi.mock('./UsaBanner.astro', () => ({
  default: vi.fn()
}));

describe('UsaBanner', () => {
  let container: AstroContainer;

  beforeEach(async () => {
    container = await AstroContainer.create();
    vi.clearAllMocks();
  });

  test('UsaBanner renders correctly', async () => {
    const mockRenderToString = vi.spyOn(container, 'renderToString').mockResolvedValue(`
      <section class="usa-banner" aria-label="Official website of the United States government">
        <div class="usa-accordion">
          <header class="usa-banner__header">
            <div class="usa-banner__inner ai-maxw-widescreen">
              <p class="usa-banner__header-text">
                Official website of the United States government
              </p>
            </div>
          </header>
        </div>
      </section>
    `);

    const UsaBanner = (await import('./UsaBanner.astro')).default;
    
    const result = await container.renderToString(UsaBanner, {
      slots: {},
    });

    expect(result).toContain('Official website of the United States government');
    expect(mockRenderToString).toHaveBeenCalledWith(UsaBanner, { slots: {} });
  });
});
