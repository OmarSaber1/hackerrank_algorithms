var productExceptSelf = function (nums) {
  //  let totalZeros = 0;

  //  const totalSum = nums.reduce((a, b) => {
  //    if (b == 0) {
  //      totalZeros++;
  //      return a;
  //    }
  //    return a * b;
  //  }, 1);

  //  if (totalZeros > 1) return Array(nums.length).fill(0);

  //  for (var i = 0; i < nums.length; i++) {
  //    if (nums[i] !== 0 && totalZeros == 1) {
  //      nums[i] = 0;
  //    } else if (nums[i] === 0) {
  //      nums[i] = totalSum;
  //    } else {
  //      nums[i] = totalSum / nums[i];
  //    }
  //  }

  //  return nums;
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  console.log(output);
  for (var j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    console.log(output[j], leftMult);
    leftMult *= nums[j];
  }
  console.log(output);

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
