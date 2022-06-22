var arrangeCoins = function (n) {
  let currentLevel = 0;
  while (n >= 0) {
    n -= currentLevel + 1;
    currentLevel++;
  }

  return currentLevel - 1;
};
