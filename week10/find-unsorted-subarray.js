/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < nums.length - 1 && nums[low] <= nums[low + 1]) {
    low++;
  }

  if (low == nums.length - 1) return 0;

  while (high > 0 && nums[high] >= nums[high - 1]) {
    high--;
  }

  let maxSubArr = -Infinity,
    minSubArr = Infinity;

  for (var i = low; i <= high; i++) {
    maxSubArr = Math.max(maxSubArr, nums[i]);
    minSubArr = Math.min(minSubArr, nums[i]);
  }

  while (low > 0 && nums[low - 1] > minSubArr) {
    low--;
  }

  while (high < nums.length && nums[high + 1] < maxSubArr) {
    high++;
  }

  return high - low + 1;
};
