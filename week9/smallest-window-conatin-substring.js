/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (str, pattern) {
  let matched = 0,
    startWindow = 0,
    patternObj = {},
    minIdx = [0, Infinity];

  for (var i = 0; i < pattern.length; i++) {
    patternObj[pattern[i]]
      ? patternObj[pattern[i]]++
      : (patternObj[pattern[i]] = 1);
  }
  for (var endWindow = 0; endWindow < str.length; endWindow++) {
    const rightChar = str[endWindow];

    if (rightChar in patternObj) {
      patternObj[rightChar]--;
      if (patternObj[rightChar] == 0) {
        matched++;
      }
    }

    while (matched == Object.keys(patternObj).length) {
      if (minIdx[1] - minIdx[0] > endWindow - startWindow) {
        minIdx[1] = endWindow;
        minIdx[0] = startWindow;
      }
      const leftChar = str[startWindow];
      startWindow++;
      if (leftChar in patternObj) {
        if (patternObj[leftChar] == 0) {
          matched--;
        }
        patternObj[leftChar]++;
      }
    }
  }
  if (minIdx[1] == Infinity) return "";

  return str.slice(minIdx[0], minIdx[1] + 1);
};
