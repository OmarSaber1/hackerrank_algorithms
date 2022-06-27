const containDuplicates = (nums, k) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = i;
    } else {
      if (i - obj[nums[i]] <= k) return true;
      obj[nums[i]] = i;
    }
  }

  return false;
};

console.log(containDuplicates([1, 2, 3, 1], 3));
