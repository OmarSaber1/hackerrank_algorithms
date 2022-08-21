var subsets = function (nums) {
  const subSets = [[]];

  for (var i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const n = subSets.length;

    for (var j = 0; j < n; j++) {
      const clonedArr = subSets[j].slice(0);
      clonedArr.push(currentNumber);
      subSets.push(clonedArr);
    }
  }
  return subSets;
};
