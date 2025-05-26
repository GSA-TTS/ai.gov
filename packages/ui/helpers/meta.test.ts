import { describe, it, expect } from 'vitest';
import { getPageTitle } from './meta.js';
import { siteName } from '@repo/ui/constants';
import { AstroGlobal } from 'astro';

type PartialAstroGlobal = Pick<AstroGlobal, 'props'>;

describe('meta', () => {
  describe('getPageTitle', () => {
    it('should return the title from props if it exists', () => {
      const title = 'Page Title';
      const mockAstroGlobal = {
        props: {
          title,
        },
      } as PartialAstroGlobal;

      const result = getPageTitle(mockAstroGlobal as AstroGlobal);

      expect(result).toBe(title);
    });

    it('should return the siteName if title is not provided in props', () => {
      const mockAstroGlobal = {
        props: {},
      } as PartialAstroGlobal;

      const result = getPageTitle(mockAstroGlobal as AstroGlobal);

      expect(result).toBe(siteName);
    });
  });
});
