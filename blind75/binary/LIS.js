/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const LIS = Array(nums.length).fill(1);

  for (var i = nums.length - 1; i >= 0; i--) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
  }

  return Math.max(...LIS);
};
