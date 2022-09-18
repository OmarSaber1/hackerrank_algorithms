var uniquePaths = function (r, c) {
  let ways = 1;

  for (let i = c; i < c + r - 1; i++) {
    ways *= i;
    ways /= i - c + 1;
  }

  return ways;
};

console.log(uniquePaths(3, 7));
