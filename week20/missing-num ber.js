/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);

  let missing = null;

  const set = [...new Set(nums)];

  for (var i = 0; i < nums.length; i++) {
    if (set[i] !== i + 1) {
      missing = i + 1;
      break;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]))
      return [nums[i], missing];
  }
};
