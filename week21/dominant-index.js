/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxidx = nums.indexOf(Math.max(...nums));
  let max = nums[maxidx];

  nums.splice(maxidx, 1);

  nums.forEach((num) => {
    if (num * 2 > max) maxidx = -1;
  });

  return maxidx;
};
