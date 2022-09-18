var canJump = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(max, nums[i] + i);
  }

  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
