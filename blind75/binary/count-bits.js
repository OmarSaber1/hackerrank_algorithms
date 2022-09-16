var countBits = function (n) {
  const results = [];

  for (var i = 0; i <= n; i++) {
    const binaryNumberOnes = Number(i)
      .toString(2)
      .split("")
      .filter((el) => el == 1);
    results.push(binaryNumberOnes.length);
  }
  return results;
};
