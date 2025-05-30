import blue from './blue.js';
import neutral from './neutral.js';
import pink from './pink.js';
import red from './red.js';
import steel from './steel.js';
import violet from './violet.js';

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
  blue,
  neutral,
  pink,
  red,
  steel,
  violet,
};
