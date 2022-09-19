function longestRepeatingCharacterReplacement(str, k) {
  let maxLength = 0,
    maxCount = 0,
    startWindow = 0,
    hash = {};

  for (let endWindow = 0; endWindow < str.length; endWindow++) {
    const char = str[endWindow];

    if (char in hash) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }

    console.log(hash, maxCount);
    maxCount = Math.max(maxCount, hash[char]);

    while (endWindow - startWindow + 1 - maxCount > k) {
      hash[str[startWindow]]--;
      startWindow++;
    }

    maxLength = Math.max(maxLength, endWindow - startWindow + 1);
  }

  return maxLength;
}

console.log(longestRepeatingCharacterReplacement("AABCBBA", 1));
