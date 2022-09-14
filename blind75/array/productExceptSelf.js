var productExceptSelf = function (nums) {
  let totalZeros = 0;

  const totalSum = nums.reduce((a, b) => {
    if (b == 0) {
      totalZeros++;
      return a;
    }
    return a * b;
  }, 1);

  if (totalZeros > 1) return Array(nums.length).fill(0);

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && totalZeros == 1) {
      nums[i] = 0;
    } else if (nums[i] === 0) {
      nums[i] = totalSum;
    } else {
      nums[i] = totalSum / nums[i];
    }
  }

  return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]));
