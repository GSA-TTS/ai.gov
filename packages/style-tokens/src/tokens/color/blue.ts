import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#eff6fd'],
  [100, '#e8f2fc'],
  [200, '#d0e5f8'],
  [300, '#b9d8f5'],
  [400, '#92c2ef'],
  [500, '#64a8e8'],
  [600, '#558fc5'],
  [700, '#416d97'],
  [800, '#325474'],
  [900, '#1e3346'],
];

export default transformArrayToObject(colors);
