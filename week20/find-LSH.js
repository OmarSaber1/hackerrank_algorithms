/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const hash = {};
  let max = 0;

  for (var key of nums) {
    hash[key] ? hash[key]++ : (hash[key] = 1);
  }

  for (var val in hash) {
    if (hash[val - 1]) max = Math.max(max, hash[val - 1] + hash[val]);
  }

  return max;
};
