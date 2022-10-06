/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (f, n) {
  for (var i = 0; i < f.length; i++) {
    if (n == 0) break;
    if (
      f[i] == 0 &&
      (f[i - 1] == 0 || i == 0) &&
      (f[i + 1] == 0 || i == f.length - 1)
    ) {
      n--;
      i++;
    }
  }

  return n == 0;
};
