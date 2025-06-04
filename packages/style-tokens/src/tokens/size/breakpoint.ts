import transformArrayToObject from '../../helpers/transform-array-to-object.js';

export type BreakpointKey = string;
export type BreakpointValue = string;
export type BreakpointTuple = [key: BreakpointKey, value: BreakpointValue];

const breakpoints: BreakpointTuple[] = [
  ['mobile', '20rem'],
  ['mobile-lg', '30rem'],
  ['tablet', '40rem'],
  ['tablet-lg', '55rem'],
  ['desktop', '64rem'],
  ['desktop-lg', '75rem'],
  ['widescreen', '87.5rem'],
];

export default transformArrayToObject(breakpoints, 'dimension');
