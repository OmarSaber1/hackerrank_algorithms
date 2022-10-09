/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

  let res = 0;

  for (var i = left; i <= right; i++) {
    let num = i
      .toString(2)
      .split("")
      .filter((el) => el == 1).length;
    if (primes.has(num)) res++;
  }

  return res;
};
