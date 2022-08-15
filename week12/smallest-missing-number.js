/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let left = 0;

  while (left < nums.length) {
    const right = nums[left] - 1;
    if (
      nums[left] > 0 &&
      nums[left] <= nums.length &&
      nums[left] !== nums[right]
    ) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else {
      left++;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return nums.length + 1;
};
