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

    it('should handle customBase parameter', () => {
      const customBase = 'https://gsa.example.com';
      const result = getUrlFromBase(path, customBase);
      expect(result).toBe('https://gsa.example.com/assets/image.png');
    });

    it('should handle customBase with trailing slash', () => {
      const customBase = 'https://gsa.example.com/';
      const result = getUrlFromBase(path, customBase);
      expect(result).toBe('https://gsa.example.com/assets/image.png');
    });

    it('should return normalized base when asset path is empty string', () => {
      process.env.BASEURL = 'https://example.com';
      const result = getUrlFromBase('');
      expect(result).toBe('https://example.com/');
    });

    it('should return normalized custom base when asset path is undefined', () => {
      const customBase = 'https://gsa.example.com';
      const result = getUrlFromBase(undefined, customBase);
      expect(result).toBe('https://gsa.example.com/');
    });

    it('should handle custom base that equals "/"', () => {
      const result = getUrlFromBase(path, '/');
      expect(result).toBe('/assets/image.png');
    });
  });
});
