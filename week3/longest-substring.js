const longestSubStringNonRepeated = (s) => {
  let maxCount = 1;
  let count = 1;
  let arr = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 1;
      arr = [s[i]];
    }
  }

  return maxCount;
};

console.log(longestSubStringNonRepeated("abcdef"));
