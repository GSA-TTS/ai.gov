import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#FDFDF0'],
  [100, '#FBFDEA'],
  [200, '#F8FAD4'],
  [300, '#F4F8BE'],
  [400, '#EEF49A'],
  [500, '#E7F06F'],
  [600, '#C5CC5E'],
  [700, '#969C48'],
  [800, '#737837'],
  [900, '#464822'],
];

export default transformArrayToObject(colors);
