import { describe, it, expect } from 'vitest';
import rangeFunction from './range';

describe('range', () => {
  it('should generate a range with positive step', () => {
    const start = 0;
    const stop = 10;
    const step = 2;

    const result = rangeFunction(start, stop, step);
    expect(result).toEqual([0, 2, 4, 6, 8, 10]);
  });

  it('should generate a range with negative step', () => {
    const start = 10;
    const stop = 0;
    const step = -2;

    const result = rangeFunction(start, stop, step);
    expect(result).toEqual([10, 8, 6, 4, 2, 0]);
  });

  it('should generate a single-element range when step exceeds range', () => {
    const start = 5;
    const stop = 5;
    const step = 1;
    const result = rangeFunction(start, stop, step);
    expect(result).toEqual([5]);
  });

  it('should handle invalid step to avoid division by zero', () => {
    const start = 0;
    const stop = 10;
    const step = 0;
    expect(() => rangeFunction(start, stop, step)).toThrow();
  });

  it('should return an empty array if step and range are invalid', () => {
    const start = 10;
    const stop = 0;
    const step = 2; // Invalid as the range stops before the start
    const result = rangeFunction(start, stop, step);
    expect(result).toEqual([]);
  });
});
