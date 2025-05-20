import { describe, it, expect, afterEach } from 'vitest';
import { getPageTitle, getBaseUrl } from './meta.js';
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

  describe('getBaseUrl', () => {
    const originalEnv = { ...process.env };

    afterEach(() => {
      process.env = { ...originalEnv };
    });

    it('should return "/" if BASEURL is not defined', () => {
      delete process.env.BASEURL;

      const result = getBaseUrl();
      expect(result).toBe('/');
    });

    it('should return the BASEURL with a trailing slash', () => {
      process.env.BASEURL = 'https://example.com';

      const result = getBaseUrl();
      expect(result).toBe('https://example.com/');
    });

    it('should handle an empty BASEURL and return "/"', () => {
      process.env.BASEURL = '';

      const result = getBaseUrl();
      expect(result).toBe('/');
    });
  });
});
