export default (array, type = 'color') => {
  return array.reduce((acc, [key, value]) => {
    acc[key] = {
      value,
      type,
    };
    return acc;
  }, {});
};
