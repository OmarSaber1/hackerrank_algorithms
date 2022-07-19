var minSubArrayLen = function (s, arr) {
  // TODO: Write your code here

  let minSqeuence = 0;
  let windowStart = 0;
  let totalSum = 0;

  for (var i = 0; i < arr.length; i++) {
    totalSum += arr[i];

    while (totalSum >= s) {
      minSqeuence = Math.min(
        minSqeuence || i + 1 - windowStart,
        i + 1 - windowStart
      );
      totalSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minSqeuence;
};
