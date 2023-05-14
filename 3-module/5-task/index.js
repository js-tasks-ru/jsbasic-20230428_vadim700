function getMinMax(str) {
  const result = {};

  const array = str
    .split(' ')
    .filter(item => Number(item))
    .map(item => Number(item));

  // const min = array.reduce((current, next) => current < next ? current : next);
  // const max = array.reduce((current, next) => current > next ? current : next);

  const min = Math.min.apply(null, array);
  const max = Math.max.apply(null, array);

  result.min = min;
  result.max = max;

  return result;
}
