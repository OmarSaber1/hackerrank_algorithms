var numDecodings = function (s = "") {
  const dp = Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = s.charAt(0) == "0" ? 0 : 1;

  for (var i = 2; i <= s.length; i++) {
    const oneDigit = Number(s.substring(i - 1, i));
    const twoDigit = Number(s.substring(i - 2, i));

    if (oneDigit >= 1) {
      console.log(dp[i], dp[i - 1], dp[i - 2]);
      dp[i] += dp[i - 1];
    }

    if (twoDigit >= 10 && twoDigit <= 26) {
      console.log(oneDigit, twoDigit);
      dp[i] += dp[i - 2];
    }
  }

  console.log(dp);
  return dp[dp.length - 1];
};

console.log(numDecodings("12"));
