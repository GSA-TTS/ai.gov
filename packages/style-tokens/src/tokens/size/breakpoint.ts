import transformArrayToObject from '../../helpers/transform-array-to-object.js';

export type BreakpointKey = string;
export type BreakpointValue = string;
export type BreakpointTuple = [key: BreakpointKey, value: BreakpointValue];

const breakpoints: BreakpointTuple[] = [
  ['mobile', '(min-width: 20rem)'],
  ['mobile-lg', '(min-width: 30rem)'],
  ['tablet', '(min-width: 40rem)'],
  ['tablet-lg', '(min-width: 55rem)'],
  ['desktop', '(min-width: 64rem)'],
  ['desktop-lg', '(min-width: 75rem)'],
  ['widescreen', '(min-width: 87.5rem)'],
];

export default transformArrayToObject(breakpoints, 'breakpoint');
