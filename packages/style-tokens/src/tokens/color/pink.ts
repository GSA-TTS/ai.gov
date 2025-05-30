import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#FEF9FE'],
  [100, '#FEF6FD'],
  [200, '#FDEDFB'],
  [300, '#FDE4FA'],
  [400, '#FBD5F7'],
  [500, '#FAC3F3'],
  [600, '#D5A6CF'],
  [700, '#A37F9E'],
  [800, '#7D6179'],
  [900, '#7D6179'],
];

export default transformArrayToObject(colors);
