/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {
  let min = Infinity,
    max = 0;

  for (var i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i] - min);
  }

  return max;
};
