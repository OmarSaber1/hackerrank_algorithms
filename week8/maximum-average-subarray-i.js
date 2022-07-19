var findMaxAverage = function (nums, k) {
  let results = [];
  let totalWindowSum = 0;
  let startWindow = 0;

  for (var i = 0; i < nums.length; i++) {
    totalWindowSum += nums[i];

    if (i >= k - 1) {
      results.push(totalWindowSum / k);
      totalWindowSum -= nums[startWindow];
      startWindow++;
    }
  }

  return Math.max(...results);
};
