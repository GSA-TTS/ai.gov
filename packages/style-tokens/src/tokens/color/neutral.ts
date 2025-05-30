import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [0, '{color.white}'],
  [50, '#F4F4F4'],
  [100, '#ECECEC'],
  [200, '#DDDDDD'],
  [300, '#CACACA'],
  [400, '#B3B3B3'],
  [500, '#A6A6A6'],
  [600, '#888888'],
  [700, '#6E6E6E'],
  [800, '#5D5D5D'],
  [900, '#404040'],
  [1000, '{color.black}'],
];

export default transformArrayToObject(colors);
