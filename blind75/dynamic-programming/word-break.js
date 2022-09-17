var wordBreak = function (s, wordDict) {
  const hash = new Set(wordDict);

  const dp = Array(s.length + 1).fill(false);

  dp[0] = true;

  for (var end = 1; end <= s.length; end++) {
    for (var start = 0; start < end; start++) {
      const word = s.slice(start, end);
      if (dp[start] && hash.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

wordBreak("leetcode", ["leet", "code"]);
