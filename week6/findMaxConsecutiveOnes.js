var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let total = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      total = 0;
    } else {
      total++;
    }
    max = Math.max(total, max);
  }

  return max;
};
