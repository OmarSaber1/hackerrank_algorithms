/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let L = Infinity,
    W = Infinity;

  for (var i = 1; i <= area; i++) {
    const width = area / i;
    const widthReminder = area % i;
    const length = i;

    if (length >= width && length + width < L + W && widthReminder == 0)
      (L = i), (W = width);
  }

  return [L, W];
};
