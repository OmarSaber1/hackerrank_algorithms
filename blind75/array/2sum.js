var twoSum = function (nums, target) {
  let hash = {};

  for (var i = 0; i < nums.length; i++) {
    const n = nums[i];
    console.log(n, hash[target - n]);
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }

    hash[n] = i;
  }
};
