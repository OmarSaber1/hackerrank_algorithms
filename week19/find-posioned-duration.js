/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, k) {
  let total = 0;

  for (var i = 0; i < timeSeries.length; i++) {
    if (
      timeSeries[i] + k - 1 < timeSeries[i + 1] ||
      timeSeries[i] == timeSeries[timeSeries.length - 1]
    ) {
      total += k;
    } else {
      total += timeSeries[i + 1] - timeSeries[i];
    }
  }

  return total;
};
