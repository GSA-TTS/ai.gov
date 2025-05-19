import { describe, it, expect, afterEach } from 'vitest';
import { getPageTitle } from './meta.js';
import { siteName } from '../../constants.js';

describe('meta', () => {
  describe('getPageTitle', () => {
    it('should return the title from props if it exists', () => {
      const title = 'Page Title';
      const mockAstroGlobal = {
        props: {
          title,
        },
      } as any;

      const result = getPageTitle(mockAstroGlobal);

      expect(result).toBe(title);
    });

    it('should return the siteName if title is not provided in props', () => {
      const mockAstroGlobal = {
        props: {},
      } as any;

      const result = getPageTitle(mockAstroGlobal);

      expect(result).toBe(siteName);
    });
  });
});
