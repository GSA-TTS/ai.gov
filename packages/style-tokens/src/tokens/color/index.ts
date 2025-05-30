import blue from './blue.js';
import green from './green.js';
import neutral from './neutral.js';
import orange from './orange.js';
import pink from './pink.js';
import red from './red.js';
import steel from './steel.js';
import violet from './violet.js';
import yellow from './yellow.js';

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
  green,
  neutral,
  orange,
  pink,
  red,
  steel,
  violet,
  yellow,
};
