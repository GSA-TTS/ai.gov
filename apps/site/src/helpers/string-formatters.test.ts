import { describe, it, expect } from 'vitest';
import { normalizeTrailingSlash } from './string-formatters.js';

describe('string-formatters', () => {
  describe('normalizeTrailingSlash', () => {
    it('should add a trailing slash to a string', () => {
      const string = 'https://example.com';
      const result = normalizeTrailingSlash(string);

      expect(result).toBe(`${string}/`);
    });

    it('should not add multiple slashes the end of the string', () => {
      const string = 'https://example.com/';
      const result = normalizeTrailingSlash(string);

      expect(result).toBe(`${string}`);
    });

    it('should handle empty arguments', () => {
      expect(normalizeTrailingSlash()).toBe('/');
    });

    it('should prevent multiple trailing slashes', () => {
      const string = 'path///';
      const result = normalizeTrailingSlash(string);

      expect(result).toBe(`path/`);
    });
  });
});
