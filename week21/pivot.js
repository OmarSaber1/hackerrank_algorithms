/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0,
    total = nums.reduce((a, b) => a + b, 0);

  for (var i = 0; i < nums.length; i++) {
    const rightSum = total - nums[i] - leftSum;

    if (leftSum == rightSum) return i;

    leftSum += nums[i];
  }

  return -1;
};
