/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  let max = 0;

  for (var n of set) {
    if (!set.has(n - 1)) {
      let count = 0;

      while (set.has(n++)) {
        count++;
      }

      max = Math.max(max, count);
    }
  }

  return max;
};
