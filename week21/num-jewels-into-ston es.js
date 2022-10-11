/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const hash = new Set();
  let count = 0;

  for (var key of jewels) {
    if (!hash.has(key)) hash.add(key);
  }

  for (var key of stones) {
    if (hash.has(key)) count++;
  }

  return count;
};
