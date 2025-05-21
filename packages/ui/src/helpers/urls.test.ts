import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { getBaseUrl, getUrlFromBase } from './url.js';

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

  describe('getUrlFromBase', () => {
    const originalEnv = { ...process.env };
    const path = '/assets/image.png';

    beforeEach(() => {
      process.env = {
        ...originalEnv,
        BASEURL: '/',
      };
    });

    afterEach(() => {
      process.env = { ...originalEnv };
    });

    it('should handle empty arguments', () => {
      delete process.env.BASEURL;

      const result = getUrlFromBase();
      expect(result).toBe('/');
    });

    it('should build a url from the base from the root directory', () => {
      const result = getUrlFromBase(path);
      expect(result).toBe(path);
    });

    it('should build a url from the base if the base is a subdirectory', () => {
      process.env.BASEURL = '/subdirectory';
      const result = getUrlFromBase(path);
      expect(result).toBe(`${process.env.BASEURL}${path}`);
    });
  });
});
