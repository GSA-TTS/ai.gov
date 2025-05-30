import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from '../color';

const colors: ColorTuple[] = [
  [50, '#f8f9fb'],
  [100, '#f2f4f7'],
  [200, '#e4e8ef'],
  [300, '#d7dde7'],
  [400, '#c1cad9'],
  [500, '#a7b4c9'],
  [600, '#8e99ab'],
  [700, '#6d7583'],
  [800, '#535a64'],
  [900, '#32363d'],
];

export default transformArrayToObject(colors);
