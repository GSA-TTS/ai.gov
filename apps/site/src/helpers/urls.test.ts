import { describe, it, expect, afterEach } from 'vitest';
import { getBaseUrl } from './url.js';

describe('url', () => {
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
