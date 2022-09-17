var rob = function (nums) {
  if (!nums || nums.length == 0) return 0;

  const dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (var i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  console.log(dp);
  return dp[nums.length - 1];
};

console.log(rob([0]));
