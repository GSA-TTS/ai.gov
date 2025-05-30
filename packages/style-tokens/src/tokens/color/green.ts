import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#F4FAEF'],
  [100, '#EFF8E8'],
  [200, '#DFF0D0'],
  [300, '#CFE8B8'],
  [400, '#B4DC91'],
  [500, '#94CD62'],
  [600, '#7EAE53'],
  [700, '#608540'],
  [800, '#4A6631'],
  [900, '#2D3E1E'],
];

export default transformArrayToObject(colors);
