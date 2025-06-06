export default function transformArrayToObject<K extends string | number, V>(
  array: [K, V][],
  type: string = 'color'
): Record<K, { value: V; type: string }> {
  return array.reduce(
    (acc, [key, value]) => {
      acc[key] = {
        value,
        type,
      };
      return acc;
    },
    {} as Record<K, { value: V; type: string }>
  );
}
