/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let repeated = nums.length / 2;

  let map = new Map();

  for (var num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return Array.from(map).filter(([a, b]) => b == repeated)[0][0];
};
