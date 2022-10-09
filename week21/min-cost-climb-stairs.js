/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (nums) {
  for (var i = 2; i < nums.length; i++) {
    nums[i] = Math.min(nums[i - 2], nums[i - 1]) + nums[i];
  }

  return Math.min(nums[nums.length - 1], nums[nums.length - 2]);
};

minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
