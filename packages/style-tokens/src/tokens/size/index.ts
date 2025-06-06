import range from '../../helpers/range.js';
import breakpoint from './breakpoint.js';

const base: number[] = [
  ...range(0, 32, 2),
  ...range(36, 48, 4),
  ...range(56, 96, 8),
  ...range(112, 256, 16),
  288,
  320,
  384,
];

const root = Object.fromEntries(
  base.map(item => [
    item,
    {
      value: item / 16,
      type: 'dimension',
    },
  ])
);

export default {
  ...root,
  breakpoint,
};
