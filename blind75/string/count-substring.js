/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0; // 6

  for (var i = 0; i < s.length; i++) {
    expandCheck(i, i);
    expandCheck(i, i + 1);
  }

  function expandCheck(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  }

  return count;
};
