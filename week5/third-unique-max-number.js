var thirdMax = function (nums) {
  const uniqueSorted = [...new Set(nums.sort((a, b) => a - b))];

  if (uniqueSorted.length <= 2) {
    return uniqueSorted[uniqueSorted.length - 1];
  }

  return uniqueSorted[uniqueSorted.length - 3];
};
