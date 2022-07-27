var longestOnes = function (nums, k) {
  let maxOnesCount = 0,
    maxLength = 0,
    windowStart = 0;

  for (var windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 1) maxOnesCount++;

    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (nums[windowStart] === 1) maxOnesCount--;
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
