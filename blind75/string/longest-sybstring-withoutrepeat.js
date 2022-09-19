function longestSubstring(str) {
  if (str.length == 0) return 0;

  const hash = {};

  let startWindow = 0,
    max = 0;

  for (let endWindow = 0; endWindow < str.length; endWindow++) {
    const rightChar = str[endWindow];

    if (rightChar in hash) {
      startWindow = Math.max(startWindow, hash[rightChar] + 1);
    }

    hash[rightChar] = endWindow;

    max = Math.max(max, endWindow - startWindow + 1);
  }

  return max;
}

console.log(longestSubstring("abba"));

//Output: 3
