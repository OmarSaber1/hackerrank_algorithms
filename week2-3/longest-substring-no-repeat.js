/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (Str) {
  if (Str.length == 0) return 0;

  if ([...new Set(Str)].length === 1) return 1;

  let longestSubstringLength = 1;

  for (let i = 0; i < Str.length; i++) {
    let arr = [Str[i]];
    for (let j = i + 1; j < Str.length; j++) {
      if (!arr.includes(Str[j])) {
        arr.push(Str[j]);
      } else {
        break;
      }

      longestSubstringLength = Math.max(arr.length, longestSubstringLength);
    }
  }

  return longestSubstringLength;
};

console.log(longestSubstringNoRepeat("pwwkew"));
