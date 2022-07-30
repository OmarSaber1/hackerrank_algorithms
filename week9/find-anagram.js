/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (str, pattern) {
  result_indexes = [];
  // TODO: Write your code here

  let patternObj = {};
  // "abbcabc", Pattern="abc"

  let startWindow = 0,
    max = 0;

  for (var i = 0; i < pattern.length; i++) {
    patternObj[pattern[i]]
      ? patternObj[pattern[i]]++
      : (patternObj[pattern[i]] = 1);
  }

  for (var endWindow = 0; endWindow < str.length; endWindow++) {
    const rightChar = str[endWindow];

    if (rightChar in patternObj) {
      patternObj[rightChar]--;
      if (patternObj[rightChar] === 0) {
        max++;
      }
    }

    if (max === Object.keys(patternObj).length)
      result_indexes.push(startWindow);

    if (endWindow - startWindow + 1 >= pattern.length) {
      const leftChar = str[startWindow];
      startWindow++;
      if (leftChar in patternObj) {
        if (patternObj[leftChar] == 0) max--;
        patternObj[leftChar]++;
      }
    }
  }

  return result_indexes;
};
