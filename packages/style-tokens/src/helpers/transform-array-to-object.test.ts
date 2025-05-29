import { describe, it, expect } from 'vitest';
import transformArrayToObject from './transform-array-to-object';

import type { ColorTuple } from '../tokens/color';

describe('transformArrayToObject', () => {
  const inputArray: ColorTuple[] = [
    ['key1', 'value1'],
    ['key2', 'value2'],
  ];

  it('should transform an array of key-value pairs into an object with values and default type', () => {
    const expectedObject = {
      key1: { value: 'value1', type: 'color' },
      key2: { value: 'value2', type: 'color' },
    };

    expect(transformArrayToObject(inputArray)).toEqual(expectedObject);
  });

  it('should allow overriding the default type', () => {
    const expectedObject = {
      key1: { value: 'value1', type: 'size' },
      key2: { value: 'value2', type: 'size' },
    };

    expect(transformArrayToObject(inputArray, 'size')).toEqual(expectedObject);
  });
});
