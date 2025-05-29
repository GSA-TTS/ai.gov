import { describe, it, expect } from 'vitest';
import transformArrayToObject from './transform-array-to-object.js';

describe('transformArrayToObject', () => {
  it('should transform an array of key-value pairs into an object with values and default type', () => {
    const inputArray = [
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];

    const expectedObject = {
      key1: { value: 'value1', type: 'color' },
      key2: { value: 'value2', type: 'color' },
    };

    expect(transformArrayToObject(inputArray)).toEqual(expectedObject);
  });

  it('should allow overriding the default type', () => {
    const inputArray = [
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];

    const expectedObject = {
      key1: { value: 'value1', type: 'size' },
      key2: { value: 'value2', type: 'size' },
    };

    expect(transformArrayToObject(inputArray, 'size')).toEqual(expectedObject);
  });

  it('should return an empty object if the input array is empty', () => {
    const inputArray = [];
    const expectedObject = {};

    expect(transformArrayToObject(inputArray)).toEqual(expectedObject);
  });

  it('should handle an array with one key-value pair correctly', () => {
    const inputArray = [['key1', 'value1']];
    const expectedObject = {
      key1: { value: 'value1', type: 'color' },
    };

    expect(transformArrayToObject(inputArray)).toEqual(expectedObject);
  });
});
