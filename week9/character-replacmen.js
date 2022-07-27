var characterReplacement = function (s, k) {
  let obj = {},
    maxCount = 0,
    maxLength = 0,
    windowStart = 0;

  for (var windowEnd = 0; windowEnd < s.length; windowEnd++) {
    obj[s[windowEnd]] ? obj[s[windowEnd]]++ : (obj[s[windowEnd]] = 1);

    const rightChar = obj[s[windowEnd]];

    maxCount = Math.max(maxCount, rightChar);

    while (windowEnd - windowStart + 1 - maxCount > k) {
      obj[s[windowStart]]--;
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
