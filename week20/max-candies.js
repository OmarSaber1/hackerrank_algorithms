/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const n = candyType.length / 2;

  return [...new Set(candyType)].length < n
    ? [...new Set(candyType)].length
    : n;
};
