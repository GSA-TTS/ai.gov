import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [0, '{color.white}'],
  [50, '#f4fafc'],
  [100, '#f0f8fb'],
  [200, '#e0f1f7'],
  [300, '#d0ebf4'],
  [400, '#b6dfed'],
  [500, '#97d2e6'],
  [600, '#80b3c4'],
  [700, '#628996'],
  [800, '#4b6973'],
  [900, '#2e3f45'],
  [1000, '{color.black}'],
];

export default transformArrayToObject(colors);
