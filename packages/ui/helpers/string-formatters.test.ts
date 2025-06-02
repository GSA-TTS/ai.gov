import { describe, it, expect } from 'vitest';
import { 
  normalizeTrailingSlash,
  cleanLeadingSlashes,
  cleanTrailingSlashes,
  isValidPath
} from './string-formatters.js';

describe('string-formatters', () => {

   const testPaths = {
    basic: 'assets/image.png',
    withLeadingSlash: '/assets/image.png',
    withTrailingSlash: 'https://example.com/',
    withMultipleLeadingSlashes: '///assets/image.png',
    withMultipleTrailingSlashes: 'https://example.com///',
    onlySlashes: '///',
    empty: '',
    url: 'https://example.com'
  };

  describe('cleanLeadingSlashes', () => {
    it('should remove single leading slash', () => {
      const result = cleanLeadingSlashes(testPaths.withLeadingSlash);
      expect(result).toBe(testPaths.basic);
    });

    it('should remove multiple leading slashes', () => {
      const result = cleanLeadingSlashes(testPaths.withMultipleLeadingSlashes);
      expect(result).toBe(testPaths.basic);
    });

    it('should handle string with no leading slashes', () => {
      const result = cleanLeadingSlashes(testPaths.basic);
      expect(result).toBe(testPaths.basic);
    });

    it('should handle string that is only slashes', () => {
      const result = cleanLeadingSlashes(testPaths.onlySlashes);
      expect(result).toBe('');
    });

    it('should handle empty string', () => {
      const result = cleanLeadingSlashes(testPaths.empty);
      expect(result).toBe('');
    });
  });

  describe('cleanTrailingSlashes', () => {
    it('should remove single trailing slash', () => {
      const result = cleanTrailingSlashes(testPaths.withTrailingSlash);
      expect(result).toBe(testPaths.url);
    });

    it('should remove multiple trailing slashes', () => {
      const result = cleanTrailingSlashes(testPaths.withMultipleTrailingSlashes);
      expect(result).toBe(testPaths.url);
    });

    it('should handle string with no trailing slashes', () => {
      const result = cleanTrailingSlashes(testPaths.url);
      expect(result).toBe(testPaths.url);
    });

    it('should handle string that is only slashes', () => {
      const result = cleanTrailingSlashes(testPaths.onlySlashes);
      expect(result).toBe(testPaths.empty);
    });

    it('should handle empty string', () => {
      const result = cleanTrailingSlashes(testPaths.empty);
      expect(result).toBe('');
    });
  });

  describe('isValidPath', () => {
    it('should return true for valid non-empty strings', () => {
      expect(isValidPath(testPaths.basic)).toBe(true);
      expect(isValidPath(testPaths.url)).toBe(true);
      expect(isValidPath(testPaths.withLeadingSlash)).toBe(true);
      expect(isValidPath(testPaths.onlySlashes)).toBe(true);
    });

    it('should return false for empty string', () => {
      expect(isValidPath(testPaths.empty)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isValidPath(undefined)).toBe(false);
    });
  });

  describe('normalizeTrailingSlash', () => {
    it('should add a trailing slash to a string without one', () => {
      const result = normalizeTrailingSlash(testPaths.url);
      expect(result).toBe(`${testPaths.url}/`);
    });

    it('should not add multiple slashes to string with trailing slash', () => {
      const result = normalizeTrailingSlash(testPaths.withTrailingSlash);
      expect(result).toBe(testPaths.withTrailingSlash);
    });

    it('should handle multiple trailing slashes', () => {
      const result = normalizeTrailingSlash(testPaths.withMultipleTrailingSlashes);
      expect(result).toBe(`${testPaths.url}/`);
    });

    it('should return "/" for undefined', () => {
      expect(normalizeTrailingSlash()).toBe('/');
    });

    it('should return "/" for empty string', () => {
      expect(normalizeTrailingSlash(testPaths.empty)).toBe('/');
    });

    it('should handle string that is only slashes', () => {
      const result = normalizeTrailingSlash(testPaths.onlySlashes);
      expect(result).toBe('/');
    });
  });
});
