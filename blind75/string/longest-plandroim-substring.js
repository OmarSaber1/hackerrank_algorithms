/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestString = "";

  for (var i = 0; i < s.length; i++) {
    expandCheck(i, i); // odd
    expandCheck(i, i + 1); // even
  }

  function expandCheck(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > longestString.length) {
        longestString = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  }

  return longestString;
};
