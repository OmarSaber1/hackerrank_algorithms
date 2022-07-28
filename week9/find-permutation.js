const find_permutation = function (str, pattern) {
  let patternObj = {},
    matched = 0,
    startWindow = 0;

  for (var i = 0; i < pattern.length; i++) {
    patternObj[pattern[i]]
      ? patternObj[pattern[i]]++
      : (patternObj[pattern[i]] = 1);
  }

  for (var windowEnd = 0; windowEnd < str.length; i++) {
    const rightChar = str[windowEnd];

    if (rightChar in patternObj) {
      patternObj[rightChar]--;
      if (patternObj[rightChar] == 0) {
        matched++;
      }
    }

    if (matched === Object.keys(patternObj).length) return true;

    if (windowEnd >= pattern.length - 1) {
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
  return false;
};

find_permutation("oidbcaf", "abc");
