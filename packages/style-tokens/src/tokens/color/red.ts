import transformArrayToObject from '../../helpers/transform-array-to-object.js';
import { type ColorTuple } from './index.js';

const colors: ColorTuple[] = [
  [50, '#FCECF1'],
  [100, '#FBE3EA'],
  [200, '#F7C7D4'],
  [300, '#F2ABBF'],
  [400, '#EB7C9B'],
  [500, '#E34471'],
  [600, '#C13A60'],
  [700, '#942C4A'],
  [800, '#712238'],
  [900, '#451522'],
];

export default transformArrayToObject(colors);
