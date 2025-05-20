import { describe, it, expect } from 'vitest';
import { addTrailingSlash } from './string-formatters.js';

describe('string-formatters', () => {
  describe('addTrailingSlash', () => {
    it('should add a trailing slash to a string', () => {
      const string = 'https://example.com';
      const result = addTrailingSlash(string);

      expect(result).toBe(`${string}/`);
    });

    it('should not add multiple slashes the end of the string', () => {
      const string = 'https://example.com/';
      const result = addTrailingSlash(string);

      expect(result).toBe(`${string}`);
    });
  });
});
