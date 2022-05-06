const climbStairs = (n) => {
  let arr = [1, 2];

  for (let i = 1; i < n; i++) {
    arr[i + 1] = arr[i] + arr[i - 1];
  }
  return arr[n - 1];
};

console.log(climbStairs(5));
