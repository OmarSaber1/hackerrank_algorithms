var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((a, b) => (b == 1 ? a + 1 : a), 0);
};
