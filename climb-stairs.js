const climbStairs = (n, memo = []) => {
  if (n <= 2) return n;
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo[n] = res;
  return res;
};

console.log(climbStairs(45));
