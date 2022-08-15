var findKthPositive = function (nums, k) {
  const n = nums.length + k;
  const missing = [];

  for (var i = 0, j = 1; j <= n; j++) {
    nums[i] !== j ? missing.push(j) : i++;
    if (missing.length == k) return missing.pop();
  }
};

console.log(findKthPositive([2, 3, 4], 3));
