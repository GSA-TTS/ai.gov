import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { getIconUrl } from './icons.js';

describe('getIconUrl', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return URL for icon in default folder', () => {
    process.env.BASEURL = '/';
    const result = getIconUrl('trending_up');
    expect(result).toBe('/uswds/img/usa-icons/trending_up.svg');
  });

  it('should return URL for icon in custom folder', () => {
    process.env.BASEURL = '/';
    const result = getIconUrl('custom_icon', 'img/custom-icons');
    expect(result).toBe('/img/custom-icons/custom_icon.svg');
  });

  it('should work with BASEURL set to subdirectory', () => {
    process.env.BASEURL = '/ai.gov';
    const result = getIconUrl('trending_up');
    expect(result).toBe('/ai.gov/uswds/img/usa-icons/trending_up.svg');
  });

  it('should handle leading slashes in folder argument', () => {
    process.env.BASEURL = '/';
    const result = getIconUrl('arrow', '/img/icons');
    expect(result).toBe('/img/icons/arrow.svg');
  });
});
