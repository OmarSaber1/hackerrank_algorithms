var numIdenticalPairs = function (nums) {
  let maxNumber = 0;

  const obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      maxNumber += obj[nums[i]];
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return maxNumber;
};
