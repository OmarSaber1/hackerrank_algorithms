var findLengthOfLCIS = function (nums) {
  let longestLength = 1;
  let currentCount = 1;

  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    longestLength = Math.max(longestLength, currentCount);
  }

  return longestLength;
};
