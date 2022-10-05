/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  for (var i = 0; i < s.length; i += 2 * k) {
    s =
      s.slice(0, i) +
      s
        .substring(i, i + k)
        .split("")
        .reverse()
        .join("") +
      s.slice(i + k);
  }

  return s;
};
