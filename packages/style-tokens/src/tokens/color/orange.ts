import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#FDF6F0'],
  [100, '#FDF2E9'],
  [200, '#FAE4D2'],
  [300, '#F8D6BC'],
  [400, '#F4C097'],
  [500, '#F0A56B'],
  [600, '#CC8C5B'],
  [700, '#9C6B46'],
  [800, '#785235'],
  [900, '#483220'],
];

export default transformArrayToObject(colors);
