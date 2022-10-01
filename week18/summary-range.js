/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];

  let left = nums[0];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(nums[i] == left ? "" + nums[i] : `${left}->${nums[i]}`);
      left = nums[i + 1];
    }
  }

  return res;
};
