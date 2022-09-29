var combinationSum4 = function (N, T) {
  const dp = Array(T + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= T; i++) {
    for (let num of N) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[T];
};
console.log(combinationSum4([1, 2, 3], 4));
