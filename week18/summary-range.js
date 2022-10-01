/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length == 0) return nums;

  if (nums.length == 1) return [`${nums[0]}`];

  let left = nums[0],
    res = [];

  for (var i = 1; i < nums.length; i++) {
    const curr = nums[i],
      prev = nums[i - 1];

    if (curr !== prev + 1 && prev == left) {
      res.push(`${left}`);
      left = curr;
    } else if (curr !== prev + 1) {
      res.push(`${left}->${prev}`);
      left = curr;
    }

    if (i == nums.length - 1 && left == nums[i]) {
      res.push(`${left}`);
    }
    if (i == nums.length - 1 && left !== nums[i]) {
      res.push(`${left}->${nums[i]}`);
    }
  }

  return res;
};
