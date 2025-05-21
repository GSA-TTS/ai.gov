import { describe, it, expect } from 'vitest';
import { getPageTitle } from './meta.js';
import { siteName } from '@repo/constants';
import { AstroGlobal } from 'astro';

type PartialAstroGlobal = Pick<AstroGlobal, 'props'>;

describe('getPageTitle', () => {
  it('should return the title from props if it exists', () => {
    const mockAstroGlobal = {
      props: {
        title: 'Page Title',
      },
    } as PartialAstroGlobal;

    const result = getPageTitle(mockAstroGlobal as AstroGlobal);

    expect(result).toBe('Page Title');
  });

  it('should return the siteName if title is not provided in props', () => {
    const mockAstroGlobal = {
      props: {},
    } as PartialAstroGlobal;

    const result = getPageTitle(mockAstroGlobal as AstroGlobal);

    expect(result).toBe(siteName);
  });
});
