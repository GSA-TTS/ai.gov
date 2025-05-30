import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#F4F4FE'],
  [100, '#EFF0FE'],
  [200, '#DFE0FD'],
  [300, '#CFD1FB'],
  [400, '#B5B7F9'],
  [500, '#9598F7'],
  [600, '#7F81D2'],
  [700, '#6163A1'],
  [800, '#4A4C7B'],
  [900, '#2D2E4B'],
];

export default transformArrayToObject(colors);
