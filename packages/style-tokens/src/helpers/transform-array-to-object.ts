import type { ColorKey, ColorTuple, ColorValue } from '../tokens/color';

export default (array: ColorTuple[], type = 'color') => {
  return array.reduce(
    (
      acc: Record<ColorKey, { value: ColorValue; type: string }>,
      [key, value]
    ) => {
      acc[key] = {
        value,
        type,
      };
      return acc;
    },
    {}
  );
};
