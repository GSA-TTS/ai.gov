import neutral from './neutral.js';

export type ColorKey = string | number;
export type ColorValue = string | number;
export type ColorTuple = [key: ColorKey, value: ColorValue];

export default {
  black: {
    value: '#000',
    type: 'color',
  },
  white: {
    value: '#fff',
    type: 'color',
  },
  neutral,
};
