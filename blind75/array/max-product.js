/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0],
    prevMin = nums[0],
    results = nums[0];

  for (var i = 1; i < nums.length; i++) {
    currMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    currMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

    prevMax = currMax;
    prevMin = currMin;

    results = Math.max(results, prevMax);
  }
  return results;
};
