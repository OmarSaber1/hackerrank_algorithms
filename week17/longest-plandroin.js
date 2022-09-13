/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) return 1;
  const hash = {};

  let totalCount = 0;

  for (var i = 0; i < s.length; i++) {
    hash[s[i]] ? hash[s[i]]++ : (hash[s[i]] = 1);
    if (hash[s[i]] % 2 == 0) totalCount += 2;
  }

  return s.length > totalCount ? totalCount + 1 : totalCount;
};
